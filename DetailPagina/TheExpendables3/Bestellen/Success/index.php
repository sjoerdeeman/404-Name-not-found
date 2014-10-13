<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Filmpje</title>
        <meta name="keywords" content="film, films, movie, movies, bios, bioscoop, cinema, oer, hollandse, oer-hollandse, 3D, Imax, Aura3d, Aura, zaal, zalen, stoel, stoelen, bioscoopzaal, bioscoopzalen, bioscoopstoel, bioscoopstoelen, uniek, unieke, inrichting, ervaring, zit, plaatsen, goed, nu in de bioscoop, nu in de bios, films op dit moment, movies op dit moment, verwachte films, verwachte movies">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:sitename" content="Filmpje">
        <meta property="og:description" content="Filmpje is een oer-Hollandse bioscoop met de meeste nieuwe technieken.">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../../style.css" rel="stylesheet" type="text/css">       
    </head>
    <body>
        <div id="container">
            <div id="TopMenuBar">                
                    <a href="../index.html"> <img id="Logo" src="../../Images/Logo.png" alt="logo"> </a>                
                <nav id="UpperMenu">
                    <a href="../index.html" class="MenuItem">Home</a>
                    <a href="..//Films/index.html" class="MenuItem">Films</a>
                    <a href="../Algemene Bioscoop Info/overons.html" class="MenuItem">Over ons</a>
                    <a href="contact.html" class="MenuItem">Contact</a>
                </nav><!--UpperMenu-->
                <div id="SearchBlock">
                    <button class="SearchInput">Zoeken</button><input class="SearchInput">
                </div><!--SearchBlock-->
            </div><!--TopMenuBar-->
            <div id="TopText">
                <center>
                    <h1>Bestelling Succesvol</h1>
                </center>
            </div><!--TopText-->
            <div id="Content">
                <strong>U hebt kaartjes besteld voor de film 'A Most Wanted Man'.<br/></strong><Br/>
                <strong>Uw Reserveringsnummer:</strong>
                <?php
                echo $_GET['ResCode'];
                ?>      <br/><br/>          
                <button>Uw kaartjes</button>
               
			
            </div><!--Content-->
            
            <footer>
                <div id="FooterText">
                    <div id="FooterImages">
                       <img src="../../Images/3DLogo.jpg" class="footerlogo" alt="logo">
                        <img src="../../Images/AuraLogo.jpg" class="footerlogo" alt="logo">
                        <img src="../../Images/ImaxLogo.jpg" class="footerlogo" alt="logo">
                    </div>
                    <p id="CopyTekst"> &copy; Filmpje | adres | telefoonnummers  </p>
                </div><!--FooterText-->
            </footer>
        </div>
    </body>
</html>
