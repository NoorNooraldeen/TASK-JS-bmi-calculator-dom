function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let heightM = height / 100;
  // calc BMI
  let bmi = weight / (heightM * heightM);
  let bmiresult;

  function calculateBMI() {
    // Get input values through prompts
    let age = parseInt(prompt("Enter your age:"));
    let weight = parseFloat(prompt("Enter your weight (kg):"));
    let height = parseFloat(prompt("Enter your height (cm):"));

    // Convert height to meters and calculate BMI
    let heightM = height / 100;
    let bmi = weight / (heightM * heightM);
    alert("Your BMI is: " + bmi.toFixed(2));

    // Determine BMI category
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25.0) {
      bmiCategory = "Healthy Weight";
    } else if (bmi >= 25.0 && bmi < 30.0) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obesity";
    }
    alert("BMI Category: " + bmiCategory);

    // Determine normal BMI range based on age
    let normalBMI;
    if (age >= 19 && age <= 24) {
      normalBMI = [19, 24];
    } else if (age >= 25 && age <= 34) {
      normalBMI = [20, 25];
    } else if (age >= 35 && age <= 44) {
      normalBMI = [21, 26];
    } else if (age >= 45 && age <= 54) {
      normalBMI = [22, 27];
    } else if (age >= 55 && age <= 64) {
      normalBMI = [23, 28];
    } else if (age >= 65) {
      normalBMI = [24, 29];
    }

    // Check if BMI is within the normal range for the age group
    let healthStatus;
    if (bmi >= normalBMI[0] && bmi <= normalBMI[1]) {
      healthStatus = "Healthy";
    } else {
      healthStatus = "Not Healthy";
    }

    // Show result in alert
    alert("Based on your age, you are: " + healthStatus);
  }

  // Run the function
  calculateBMI();
}
hfjhvrf