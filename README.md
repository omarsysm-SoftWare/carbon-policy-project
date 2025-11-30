# 🌱 Carbon Policy Project

A simple prototype that demonstrates how organizations can **estimate their carbon footprint** digitally using basic input data and clear emission factors.

🔗 **Live Demo:**  
https://omarsysm-software.github.io/carbon-policy-project/

---

## 🎯 Purpose
This project explores **how environmental policies can be digitized**, standardized, and tested using:

- Basic UI for data input
- Validated JSON schema
- CO₂ emission calculations
- Cross-platform testing (Web + Excel)

---

## 🧠 Core Features
- Input-based carbon estimation (Electricity — Water — Travel)
- JSON-based data structure & validation
- Excel + JavaScript **formula mapping**
- Responsive design for easy use

---

## 🔍 Tech Stack
- **HTML**, **CSS**, **JavaScript**
- **JSON Schema**
- **Excel for validation**

---

## 📊 Formula Used

```js
total_kg_co2 = (electricity_kWh * 0.5)
             + (water_m3 * 0.2)
             + (travel_km * 0.1)
