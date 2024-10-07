function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
}
// conv cm to meter
let hightM = hightCM /100;
// calc BMI 
let bmi = weight / (hightM *hightM);

// show he result 
alert ("your BMI is ;" + bmi.toFixed(2));

if (bmi < 18.5) {
  bmiCatogery = "underwated";
}
else if (bmi >= 18.5 && bmi <25.0){
  bmiCatogery = "Healthy Weight";
}else if (bmi >= 25.0 && bmi < 30.0){
  
}