let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Enter the correct height';
    }else{
        document.getElementById('height_error').innerHTML = ''
        height_status=true;  
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Enter the correct weight';     
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi <= 18,5){
            result.innerHTML = 'your BMI is : ' + bmi + ' you are ' + ' Underweight ';
        } if (bmi >= 18,5 && bmi <= 24,9){
            result.innerHTML = 'your BMI is : ' + bmi + ' you are ' + ' Normal weight ';
        } if (bmi >= 25 && bmi <= 29,9){
            result.innerHTML = 'your BMI is : ' + bmi + ' you are ' + ' Overweight ';
        } if (bmi >= 30){
            result.innerHTML = 'your BMI is : ' + bmi + ' you are ' + ' Obesity ';
        }else{
        alert('form error');
        result.innerHTML = '';
        }
    }
});
