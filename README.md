# Carbon Policy Project
https://omarsysm-software.github.io/carbon-policy-project/
This project was built by **Omar Alzoubi** as a simple prototype for digitizing environmental policies.  
It shows how data can be structured, calculated, and tested using basic tools.

## Files
- `index.html` – simple form to enter data.
- `style.css` – basic design.
- `script.js` – JavaScript logic for calculations.
- `schema.json` – JSON schema for the data.
- `policy-calculations.xlsx` – Excel version of the calculations.
- `sample-payload.json` – example data.

## Formula


## Calculation
```
total_kg_co2 = (electricity_kWh * 0.5)
             + (water_m3 * 0.2)
             + (travel_km * 0.1)
```


## How to Run
1. Open `index.html` in your browser.
2. Enter electricity, water, and travel values.
3. Get the estimated CO₂ result.


## Mapping (Excel ⇄ JavaScript)
- **JS**: see `FACTORS` and `calculateCO2()` in `script.js`.
- **Excel**: sheet `Input` cell `E2` contains the total formula, referencing factor cells.

## Customize
- Update emission factors in `script.js` and in the Excel sheet `Factors`.
- If you receive official schemas, replace `schema.json` and validate before calculation.
