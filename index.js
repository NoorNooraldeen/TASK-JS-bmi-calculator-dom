function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let hightM = height / 100;
  // calc BMI
  let bmi = weight / (hightM * hightM);
  let bmiresult;

  // show he result
  console.log("your BMI is ;" + bmi.toFixed(2));

  if (bmi < 18.5) {
    bmiresult = "underwated";
  } else if (bmi >= 18.5 && bmi < 25.0) {
    bmiresult = "Healthy Weight";
  } else if (bmi >= 25.0 && bmi < 30.0) {
    bmiresult = "overweighted";
  } else {
    bmiresult = "obesity";
  }
  console.log(" the bmiresult:+ bmiresults");
}

// 3
const age = 30;
console.log(TheBMI);

if (age >= 19 && age <= 24) {
  TheBMI = [19, 24];
} else if (age >= 25 && age <= 34) {
  TheBMI = [20, 25];
} else if (age >= 35 && age <= 44) {
}
console.log(Healthy);
// not sure of the if statment :)
if (bmi >= TheBMI && bmi >= TheBMI) {
  healthy = "healthy";
} else {
  healthy = "not healthy ";
}

console.log(`on ur age, you are:${healthy}`);
