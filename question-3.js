// Question #3
let userPassword = "asdasdasdasd";
// เริ่มเขียนโค้ดตรงนี้

///////////////////////////////////////////

function checkPasswordStrength(userPassword){

        if (userPassword.length < 6){
            return "Weak";
        }
        else if (userPassword.length <= 10){
            return "Medium";
        }
        else if (userPassword.length > 10){
            return "Strong";
        }

}

// console.log(userPassword.length);
console.log(checkPasswordStrength(userPassword));

