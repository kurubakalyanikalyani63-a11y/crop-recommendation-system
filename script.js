function recommendCrop() {

    let N = Number(document.getElementById("nitrogen").value);
    let P = Number(document.getElementById("phosphorus").value);
    let K = Number(document.getElementById("potassium").value);
    let temperature = Number(document.getElementById("temperature").value);
    let humidity = Number(document.getElementById("humidity").value);
    let ph = Number(document.getElementById("ph").value);
    let rainfall = Number(document.getElementById("rainfall").value);

    let result = document.getElementById("result");

    // Check empty fields
    if (
        N === 0 || P === 0 || K === 0 ||
        temperature === 0 || humidity === 0 ||
        ph === 0 || rainfall === 0
    ) {
        result.style.display = "block";
        result.innerHTML = `
            <h2>⚠️ Please enter all values</h2>
            <p>Enter valid soil and weather information.</p>
        `;
        return;
    }

    let crop = "";
    let reason = "";

    // Rice
    if (
        rainfall >= 150 &&
        humidity >= 70 &&
        temperature >= 20 &&
        temperature <= 35 &&
        ph >= 5.5 &&
        ph <= 7.5
    ) {
        crop = "Rice 🌾";
        reason = "High rainfall, humidity and suitable temperature.";
    }

    // Maize
    else if (
        temperature >= 18 &&
        temperature <= 30 &&
        rainfall >= 60 &&
        rainfall <= 150 &&
        ph >= 5.5 &&
        ph <= 7.5 &&
        N >= 40
    ) {
        crop = "Maize 🌽";
        reason = "Suitable temperature, rainfall and nitrogen level.";
    }

    // Cotton
    else if (
        temperature >= 21 &&
        temperature <= 35 &&
        rainfall >= 50 &&
        rainfall <= 120 &&
        humidity >= 40 &&
        humidity <= 80 &&
        ph >= 5.5 &&
        ph <= 8
    ) {
        crop = "Cotton 🌱";
        reason = "Warm temperature and moderate rainfall.";
    }

    // Groundnut
    else if (
        temperature >= 20 &&
        temperature <= 32 &&
        rainfall >= 50 &&
        rainfall <= 100 &&
        ph >= 5.5 &&
        ph <= 7
    ) {
        crop = "Groundnut 🥜";
        reason = "Warm conditions and suitable soil pH.";
    }

    // Wheat
    else if (
        temperature >= 10 &&
        temperature <= 25 &&
        rainfall >= 30 &&
        rainfall <= 100 &&
        ph >= 6 &&
        ph <= 7.5
    ) {
        crop = "Wheat 🌾";
        reason = "Cool to moderate temperature and suitable rainfall.";
    }

    // Sugarcane
    else if (
        temperature >= 20 &&
        temperature <= 35 &&
        rainfall >= 100 &&
        humidity >= 60 &&
        ph >= 6 &&
        ph <= 7.5
    ) {
        crop = "Sugarcane 🎋";
        reason = "Warm climate with good rainfall and humidity.";
    }

    // Default
    else {
        crop = "Mixed/Other Crop 🌿";
        reason = "The given conditions do not strongly match the basic crop rules.";
    }

    result.style.display = "block";

    result.innerHTML = `
        <h2>Recommended Crop: ${crop}</h2>
        <p><strong>Reason:</strong> ${reason}</p>
        <p>🌱 Consider local soil testing and agricultural advice before planting.</p>
    `;
}