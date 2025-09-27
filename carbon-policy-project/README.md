# Carbon Policy Project

Simple, senior-quality **prototype policy** showing how to structure inputs (JSON Schema),
implement calculations (JavaScript **and** Excel), and present a clean UI.

> Numbers are illustrative only. Replace factors with the target program's official values if provided.

## Files
- `index.html` – minimal UI to collect inputs and show results.
- `style.css` – small, readable styling.
- `script.js` – pure JS: validation, calculation, and JSON export.
- `schema.json` – JSON Schema (Draft-07) for inputs.
- `policy-calculations.xlsx` – Excel equivalent with formulas.
- `sample-payload.json` – example payload exported by the UI.

## Calculation
```
total_kg_co2 = (electricity_kWh * 0.5)
             + (water_m3 * 0.2)
             + (travel_km * 0.1)
```

## How to run
Just open `index.html` in a browser (no server required).

## Mapping (Excel ⇄ JavaScript)
- **JS**: see `FACTORS` and `calculateCO2()` in `script.js`.
- **Excel**: sheet `Input` cell `E2` contains the total formula, referencing factor cells.

## Customize
- Update emission factors in `script.js` and in the Excel sheet `Factors`.
- If you receive official schemas, replace `schema.json` and validate before calculation.
