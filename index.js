function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let hightM =height /100;
// calc BMI 
let bmi = weight / (hightM *hightM);
let bmiresult;

// show he result 
console.log ("your BMI is ;" + bmi.toFixed(2));

if (bmi < 18.5) {
  bmiresult = "underwated";
}
else if (bmi >= 18.5 && bmi <25.0){
  bmiresult = "Healthy Weight";
}else if (bmi >= 25.0 && bmi < 30.0){
  bmiresult = "overweighted";

  
}
else{
  bmiresult = "obesity";
}
console.log(bmiresult);

}
