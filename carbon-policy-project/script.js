// Minimal, readable JS — no frameworks
const FACTORS = Object.freeze({
  electricity_kwh: 0.5, // kg CO2 per kWh (illustrative)
  water_m3: 0.2,        // kg CO2 per m³ (illustrative)
  travel_km: 0.1        // kg CO2 per km (illustrative)
});

function parseNum(value) {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function calculateCO2({ electricity, water, travel }) {
  return (electricity * FACTORS.electricity_kwh) +
         (water * FACTORS.water_m3) +
         (travel * FACTORS.travel_km);
}

function validateInputs({ electricity, water, travel }) {
  const errors = [];
  if (electricity < 0) errors.push('Electricity must be ≥ 0');
  if (water < 0) errors.push('Water must be ≥ 0');
  if (travel < 0) errors.push('Travel must be ≥ 0');
  return errors;
}

function ui() {
  const $e = document.getElementById('electricity');
  const $w = document.getElementById('water');
  const $t = document.getElementById('travel');
  const $box = document.getElementById('resultBox');

  document.getElementById('btnCalc').addEventListener('click', () => {
    const payload = {
      electricity: parseNum($e.value),
      water: parseNum($w.value),
      travel: parseNum($t.value)
    };
    const errs = validateInputs(payload);
    if (errs.length) {
      $box.innerHTML = `<strong>Fix inputs:</strong><br>${errs.join('<br>')}`;
      $box.classList.remove('hidden');
      return;
    }
    const total = calculateCO2(payload);
    $box.innerHTML = `
      <div><strong>Result</strong></div>
      <ul>
        <li>Electricity: ${payload.electricity} kWh × ${FACTORS.electricity_kwh} = ${(payload.electricity * FACTORS.electricity_kwh).toFixed(2)} kg</li>
        <li>Water: ${payload.water} m³ × ${FACTORS.water_m3} = ${(payload.water * FACTORS.water_m3).toFixed(2)} kg</li>
        <li>Travel: ${payload.travel} km × ${FACTORS.travel_km} = ${(payload.travel * FACTORS.travel_km).toFixed(2)} kg</li>
      </ul>
      <div><strong>Total:</strong> ${total.toFixed(2)} kg CO₂</div>
    `;
    $box.classList.remove('hidden');
  });

  document.getElementById('btnReset').addEventListener('click', () => {
    $e.value = $w.value = $t.value = '';
    $box.classList.add('hidden');
    $box.innerHTML = '';
  });

  document.getElementById('btnExport').addEventListener('click', () => {
    const payload = {
      $schema: "./schema.json",
      data: {
        electricity: parseNum($e.value),
        water: parseNum($w.value),
        travel: parseNum($t.value)
      },
      meta: {
        unit: { electricity: "kWh", water: "m3", travel: "km" },
        factors: FACTORS,
        calculated_kg_co2: calculateCO2({
          electricity: parseNum($e.value),
          water: parseNum($w.value),
          travel: parseNum($t.value)
        })
      }
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'sample-payload.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
}
document.addEventListener('DOMContentLoaded', ui);
