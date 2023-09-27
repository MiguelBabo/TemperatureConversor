const result = document.querySelector("#result");

function convertTemp(){
    const x = document.getElementById("celsius").value

    if(document.getElementById("far").checked==false && document.getElementById("far").checked==false){
        result.innerHTML = "Select a temperature measurement!";
    }
    if(document.getElementById("far").checked==true){
        const temp = (x * 1.8) + 32;
        result.innerHTML = "Temperature in Farenheit: "+temp;
    }
    if(document.getElementById("kel").checked==true){
        const kelvin = 273
        const temp = (x * kelvin / kelvin)+273;
        result.innerHTML = "Temperature in Kelvin: "+temp;
    }
}

function blink(){
    result.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 250
    })
}