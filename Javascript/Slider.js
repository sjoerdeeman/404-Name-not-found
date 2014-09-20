var step = 1;
function Slider() {
    var img1 = new Image();
    img1.src = "http://www.pathe.nl/thumb/180x252/gfx_content/posters/mapstotherstars3.jpg";
    var img2 = new Image();
    img2.src = "http://upload.wikimedia.org/wikipedia/en/3/35/Finding_Fanny_Theatrical_release_poster.jpg";
    var img3 = new Image();
    img3.src = "http://www.pathe.nl/thumb/180x252/gfx_content/posters/letsbecops3.jpg";
    var link1 = "Detailpagina/FindingFanny/FindingFanny.html";
    var link2 = "Detailpagina/FindingFanny/FindingFanny.html";
    var link3 = "Detailpagina/FindingFanny/FindingFanny.html";
    if (step < 4) {
        var ImageChange = document.getElementById("slide");
        var LinkChange = document.getElementById("ImageLink");
        LinkChange.setAttribute("href", eval("link" + step ));
        ImageChange.setAttribute("src", eval("img" + step + ".src"));
        
        step = step + 1;
    }
    else if(step > 2) {
        step = 1;
    }
    setTimeout("Slider()", 3000);
}

