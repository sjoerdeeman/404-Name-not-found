/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function LoadAgenda() {
    var date = new Date();
    var Today = date.getDay();
    var FilmsID = [
        ["<strong>Finding Fanny</strong> <img onmousedown=\"javascript:ShowOverlay('Finding Fanny')\" src='http://upload.wikimedia.org/wikipedia/en/3/35/Finding_Fanny_Theatrical_release_poster.jpg' alt='Finding Fanny' width='100' heigth='200'>"],
        ["<strong>Novemberman</strong><img onmousedown=\"javascript:ShowOverlay('Novemberman')\" src='http://m.929jackfm.ca/files/VVS_TheNovemberMan_Poster-637x920.jpg' alt='Novemberman' width='100' heigth='200'>"],
        ["<strong>Let's be cops</strong><Br/> <img onmousedown=\"javascript:ShowOverlay('Lets be cops')\" src='http://www.pathe.nl/thumb/180x252/gfx_content/posters/letsbecops3.jpg' alt='Lets be cops' width='100' heigth='200'>"],
        ["<strong>As Above So Below</strong><Br/> <img onmousedown=\"javascript:ShowOverlay('As Above So Below')\" src='http://www.pathe.nl/thumb/180x252/gfx_content/posters/asabove500(1).jpg' alt='As Above So Below' width='100' heigth='200'>"],
        ["<strong>Guardians Of The Galaxy</strong><Br/> <img onmousedown=\"javascript:ShowOverlay('Guardians Of The Galaxy')\" src='http://www.pathe.nl/thumb/180x252/gfx_content/posters/guardiansofthegalaxy1.jpg' alt='Guardians Of The Galaxy' width='100' heigth='200'>"],
        ["<strong>The Expandables 3</strong><Br/> <img onmousedown=\"javascript:ShowOverlay('The Expandables 3')\" src='http://www.pathe.nl/thumb/180x252/gfx_content/posters/expendables3defposter.jpg' alt='The Expandables 3' width='100' heigth='200'>"],
        ["<strong>Maps To The Stars</strong><Br/> <img onmousedown=\"javascript:ShowOverlay('Maps To The Stars')\" src='http://www.pathe.nl/thumb/180x252/gfx_content/posters/mapstotherstars3.jpg' alt='Maps To The Stars' width='100' heigth='200'>"],
        ["<strong>Cuban Fury</strong><Br/> <img onmousedown=\"javascript:ShowOverlay('Cuban Fury')\" src='http://www.pathe.nl/thumb/180x252/gfx_content/posters/cubanfury1(1).jpg' alt='Cuban Fury' width='100' heigth='200'>"],
        ["<strong>A Most Wanted Man</strong><Br/> <img onmousedown=\"javascript:ShowOverlay('A Most Wanted Man')\" src='http://www.pathe.nl/thumb/180x252/gfx_content/posters/amostwantedman2.jpg' alt='A Most Wanted Man' width='100' heigth='200'>"]
    ];
    var FilmPlayDate = [
        [6, 0, 7, 2, 6, 1],
        [5, 4, 3, 8, 0],
        [5, 7, 3, 2, 1],
        [5, 6, 3, 7, 0],
        [2, 0, 3, 7, 6],
        [1, 6, 7, 2, 5, 4, 3],
        [4, 6, 1, 8, 0, 6]
    ];
    var FimsToday = FilmPlayDate[Today].splice(",");
    var length = FimsToday.length;
    for (i = 0; i < length; i++) {
        var Film = FilmsID[FimsToday[i]];
        var id = "Agenda" + i;
        var output = document.getElementById(id);
        output.innerHTML = Film;
    }
    var Rest = 6 - length;
    for (r = 0; r <= Rest; r++) {
        var idr = "Agenda" + (6 - r);
        ;
        document.getElementById(idr).style.display = "none";
        
    }

}
function ShowOverlay(FILM) {
    var output = document.getElementById("overlay");
    var width = screen.width - 300;
    var height = screen.height - 300;
    switch (FILM) {
        case 'Finding Fanny':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/5O86FUOrlkY"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/FindingFanny/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
        case 'NovemberMan':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/watch?v=-m8V7G7e7gw"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/NovemberMan/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
        case 'A Most Wanted Man':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/OUyYBrlF_W8"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/AMostWantedMan/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
        case 'As Above So Below':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/83PpryYHHeY"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/AsAboveSoBelow/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
        case 'Cuban Fury':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/FFSP9iO71AE"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/CubanFury/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
        case 'Guardians Of The Galaxy':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/aHUBlv5_K8Y"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/GuardiansOfTheGalaxy/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
        case 'Lets Be Cops':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/UKIAZjs__Xc"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/LetsBeCops/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
        case 'Maps To The Stars':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/tsFnwgUlrxs"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/MapsToTheStars/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
        case 'The Expandables 3':
            output.innerHTML = '<iframe id="promo"  width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/4xD0junWlFc"frameborder="0" allowfullscreen></iframe>\n\
                                <p onmousedown="CloseOverlay()" style="color:white; float:right;">X</p>\n\
                                <br/><center>\n\
                                <button onclick="window.location.href = \'DetailPagina/TheExpendables3/Bestellen\'" id="Reserveerknop">Reserveer nu</button>\n\
                                </center>'
                    ;
            document.getElementById("overlay").style.display = "block";
            break;
    }
}
function CloseOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    overlay.innerHTML = "";
}