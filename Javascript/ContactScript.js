/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function CheckMailAdress() {
    var val = document.getElementById("Mail");
    //check if value has changed
    if (val.value === val.defaultValue) {
        return true;
    }
    else {
        var InputAdress = document.getElementById("Mail").value;
        //check if mail is valid
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(InputAdress)) {
            //Mail is valid
            return true;
        }
        else {
            //Mail is not valid and display error message
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = "Mail niet geldig. Vul een geldig e-mail adres in.<br/>";
            return false;
        }
    }
}
function CheckIfValueEmpty(ID) {
    switch (ID) {
        case "Naam":
            var value = document.getElementById(ID).value;
            if (value !== "" && /^[a-zA-Z]+$/.test(value)) {
                //Naam is valid
                return true;
            }
            else {
                //Naam is not valid and display error message
                document.getElementById("error").style.display = "block";
                document.getElementById("error").innerHTML = "Naam niet geldig. Vul een geldige naam in.<br/>";
                return false;
            }
            break;
        case "Bericht":
            var value = document.getElementById(ID).value;
            //check if Bericht is not empty and not longer than 500 characters.
            if (value !== "" && value.length < 501) {
                //Bericht is valid
                return true;
            }
            else {
                //Bericht is not valid and display error message
                document.getElementById("error").style.display = "block";
                document.getElementById("error").innerHTML = "Bericht is niet ingevuld of te lang.<br/>";
                return false;
            }
            break;
        case "Mail":
            //Check if mail is not empty
            var value = document.getElementById(ID).value;
            if (value !== "") {
                //Mail is not empty
                return true;
            }
            else {
                document.getElementById("error").style.display = "block";
                document.getElementById("error").innerHTML = "Mail niet geldig<br/>";
            }
            break;
    }
}
function CheckContactForm() {
    //check if all the values in the form are valid
    if (CheckMailAdress() && CheckIfValueEmpty('Naam') && CheckIfValueEmpty('Mail') && CheckIfValueEmpty('Bericht')) {
        //Everything is good
        return true;
    }
    else {
        //There was something wrong and display error message
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "";
        document.getElementById("error").innerHTML += "Er zijn nog fouten in het formulier.<br/>";
        return false;
    }
}
