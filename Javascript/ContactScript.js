/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function CheckMailAdress() {
    var val = document.getElementById("Mail");
    if (val.value === val.defaultValue) {
        return true;
    }
    else {
        var InputAdress = document.getElementById("Mail").value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(InputAdress)) {
            return true;
        }
        else {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML += "Mail niet geldig. Vul een geldig e-mail adres in.<br/>";
            return false;
        }
    }
}
function CheckIfValueEmpty(ID) {
    switch (ID) {
        case "Naam":
            var val = document.getElementById("Naam");
            if (val.value === val.defaultValue) {
                return true;
            }
            else {

                var value = document.getElementById(ID).value;
                if (value !== "" && /^[a-zA-Z]+$/.test(value)) {
                    document.getElementById("error").style.display = "None";
                    return true;
                }
                else {
                    document.getElementById("error").style.display = "block";
                    document.getElementById("error").innerHTML += "Naam niet geldig. Vul een geldige naam in.<br/>";
                }
            }
            break;
        case "Bericht":
            var val = document.getElementById("Bericht");
            if (val.value === val.defaultValue) {
                return true;
            }
            else {
                var value = document.getElementById(ID).value;
                if (value !== "" && value.length < 501) {
                    document.getElementById("error").style.display = "None";
                    return true;
                }
                else {
                    document.getElementById("error").style.display = "block";
                    document.getElementById("error").innerHTML += "Bericht is niet ingevuld of te lang.<br/>";
                }
            }
            break;
        case "Mail":
            var val = document.getElementById("Mail");
            if (val.value === val.defaultValue) {
                return true;
            }
            else {
                var value = document.getElementById(ID).value;
                if (value !== "") {
                    document.getElementById("error").style.display = "None";
                    return true;
                }
                else {
                    document.getElementById("error").style.display = "block";
                    document.getElementById("error").innerHTML = "Mail niet geldig<br/>";
                }
            }
            break;
    }
}
function CheckContactForm() {
    if (CheckMailAdress() && CheckIfValueEmpty('Naam') && CheckIfValueEmpty('Mail') && CheckIfValueEmpty('Bericht')) {
        return true;

    }
    else {
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML += "Er waren nog fouten in het formulier.<br/>";
        return false;
    }
}
