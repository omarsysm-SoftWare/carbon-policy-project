# 🌱 Carbon Policy Project

A simple prototype that demonstrates how organizations can **estimate their carbon footprint** digitally using basic input data and clear emission factors.

🔗 **Live Demo:**  
https://omarsysm-software.github.io/carbon-policy-project/

---

## 🎯 Purpose
This project explores how environmental policies can be digitized, standardized, and tested using:

- Basic UI for data input  
- Validated JSON schema  
- CO₂ emission calculations  
- Cross-platform testing (Web + Excel)

---

## 🧠 Core Features
- Input-based carbon estimation (Electricity — Water — Travel)
- JSON-based data structure & validation
- Excel + JavaScript formula mapping
- Responsive design for easy use

---

## 🔍 Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Validation:** JSON Schema  
- **Testing + Mapping:** Excel Sheets

---

## 📊 Formula Used

```js
total_kg_co2 = (electricity_kWh * 0.5)
             + (water_m3 * 0.2)
             + (travel_km * 0.1)
Emission factors are illustrative and can be updated easily.

📂 Project Structure
File	Description
index.html	User interface
style.css	Styling layout
script.js	Main calculation logic
schema.json	JSON schema validation
policy-calculations.xlsx	Excel version of the formula
sample-payload.json	Example data

🖼️ UI Preview
Input Form	Result Preview

🧪 How to Use
Open index.html in any browser

Enter electricity, water, and travel usage

Get CO₂ estimate instantly

Optional: Export result as JSON

🚀 Future Enhancements
Additional emission sectors (food, waste, manufacturing…)

Multi-user accounts with saved history

Admin dashboard for policy tracking

REST API support

Real policy-based factor database

👨‍💻 Author
Omar Ahmad Alzoubi
Software Engineering Student – JUST
📍 Amman, Jordan
📧 omarsysm@gmail.com
GitHub: https://github.com/omarsysm-SoftWare
