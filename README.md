# 🌱 Carbon Policy Project

A small prototype to estimate carbon footprint using electricity, water, and travel inputs.

🔗 Live Demo:  
https://omarsysm-software.github.io/carbon-policy-project/

---

### What it does
- Takes basic daily usage inputs  
- Calculates estimated CO₂ emissions  
- Uses JSON schema validation  
- Also tested with Excel mapping  

---

### Tech Used
HTML — CSS — JavaScript — JSON — Excel

---

### How it works (Formula)

```js
total_kg_co2 = (electricity_kWh * 0.5)
             + (water_m3 * 0.2)
             + (travel_km * 0.1)
Run
Just open index.html in any browser.

Files included
index.html

style.css

script.js

schema.json

policy-calculations.xlsx

sample-payload.json

### Screenshots

| Input Form | Result |
|-----------|--------|
| ![Input](https://github.com/omarsysm-SoftWare/carbon-policy-project/blob/main/input.png?raw=true) | ![Result](https://github.com/omarsysm-SoftWare/carbon-policy-project/blob/main/result.png?raw=true) |


Built by Omar Ahmad Alzoubi
GitHub: https://github.com/omarsysm-SoftWare
