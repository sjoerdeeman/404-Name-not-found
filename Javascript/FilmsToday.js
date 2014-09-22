function SetCurrentFilms() {
    document.getElementById('LoadingFilms').style.display = "none";
    var date = new Date();
    var h = date.getHours();
    var n = date.getMinutes();
    if (n < 10) {
        n = "0" + n;
    }
    if (h < 10) {
        h = "0" + h;
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
    document.getElementById("NoFilmHover").style.display = "none";
    var ID = document.getElementById(ID).id;
    var NewID = "More" + "" + ID;
    var NewArray = ["More2000", "More2030", "More2100", "More2200", "More2230"];
    for (i = 0 ; i < 6; i++){
        if (NewArray[i] == NewID) {
            break;
        }
        else {
            document.getElementById(NewArray[i]).style.display = "none";
        }

    }
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

function ShowOtherFilmsFor() {
  /*  document.getElementById('ImageLinkWrapper').style.display = "none";
    document.getElementById('NImageLinkWrapper').style.display = "block";*/
    var Image1 = document.getElementById('ImageLinkWrapper1Image');
    var Image2 = document.getElementById('ImageLinkWrapper2Image');
    var Image3 = document.getElementById('ImageLinkWrapperEndImage');
    var AlterLink1 = "http://www.pathe.nl/thumb/180x252/gfx_content/posters/cubanfury1(1).jpg";
    var AlterLink2 = "http://upload.wikimedia.org/wikipedia/en/3/35/Finding_Fanny_Theatrical_release_poster.jpg";

    Image1.src = AlterLink1;
    Image2.src = AlterLink2;
    Image3.style.display = "none";
    
}
function ShowOtherFilmsBack() {
    /*  document.getElementById('ImageLinkWrapper').style.display = "none";
      document.getElementById('NImageLinkWrapper').style.display = "block";*/
    var Image1 = document.getElementById('ImageLinkWrapper1Image');
    var Image2 = document.getElementById('ImageLinkWrapper2Image');
    var Image3 = document.getElementById('ImageLinkWrapperEndImage');
    var AlterLink1 = "http://www.pathe.nl/thumb/180x252/gfx_content/posters/cubanfury1(1).jpg";
    var AlterLink2 = "http://upload.wikimedia.org/wikipedia/en/3/35/Finding_Fanny_Theatrical_release_poster.jpg";
    var AlterLink3 = "http://www.pathe.nl/thumb/180x252/gfx_content/posters/letsbecops3.jpg";
    var AlterLink4 = "http://www.pathe.nl/thumb/180x252/gfx_content/posters/mapstotherstars3.jpg";
    var AlterLink5 = "http://www.pathe.nl/thumb/180x252/gfx_content/posters/guardiansofthegalaxy1.jpg";


    Image1.src = AlterLink3;
    Image2.src = AlterLink4;
    Image3.style.display = "inline-block";
    Image3.src = AlterLink5;

}
