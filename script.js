const height = document.getElementById("height");
const weight = document.getElementById("weight");
const BMI = document.getElementById("bmi");
const calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {
	let mtr = height.value / 3.28;
	let kg = weight.value;
	let bmi = (kg / (mtr*mtr)).toFixed(1);
	if (bmi <= 18.5) {
		BMI.textContent = bmi + ", Skinny! ";
	}
	if (bmi >=25){
		BMI.textContent = bmi + ", fatty!";
	}
	else{
		BMI.textContent = bmi + ", Healthy!";
	}
	
});

