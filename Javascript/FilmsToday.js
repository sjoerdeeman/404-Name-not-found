function SetCurrentFilms() {
    var date = new Date();
    var h = date.getHours();
    var n = date.getMinutes();
    if (n < 10) {
        n = "0" + n;
    }
    var TimeCode = h + "" + n;
      if (TimeCode < "2000" & TimeCode >= 0800) {
        document.getElementById("2000").style.display = "block";
        document.getElementById("2030").style.display = "block";
        document.getElementById("2100").style.display = "block";
        document.getElementById("2200").style.display = "block";
        document.getElementById("2230").style.display = "block";

    }
    else if (TimeCode < "2030" & TimeCode >= 0800) {

        document.getElementById("2030").style.display = "block";
        document.getElementById("2100").style.display = "block";
        document.getElementById("2200").style.display = "block";
        document.getElementById("2230").style.display = "block";
    }
    else if (TimeCode < "2100" & TimeCode >= 0800) {
        document.getElementById("2100").style.display = "block";
        document.getElementById("2200").style.display = "block";
        document.getElementById("2230").style.display = "block";
    }
    else if (TimeCode < "2200" & TimeCode >= 0800) {
        document.getElementById("2200").style.display = "block";
        document.getElementById("2230").style.display = "block";
    }
    else if (TimeCode < "2230" & TimeCode >= 0800) {
        document.getElementById("2230").style.display = "block";
    }
    else {
        document.getElementById("GeenFilms").style.display = "block";
    }
}
function ShowMoreOnHover(ID) {
    var ID = document.getElementById(ID).id;
    var NewID = "More" + "" + ID;
    
    document.getElementById(NewID).style.display = "block";
    document.getElementById('NoFilmHover').style.dislay = "none"
}

function HideMe(IDToHide) {
    document.getElementById("More2000").style.display = "none";
    document.getElementById("More2030").style.display = "none";
    document.getElementById("More2100").style.display = "none";
    document.getElementById("More2200").style.display = "none";
    document.getElementById("More2230").style.display = "none";
}