function OTP(){
    let randomNumber = Math.floor(Math.random()*9999 - 1000);
    return randomNumber;
}

alert(OTP());