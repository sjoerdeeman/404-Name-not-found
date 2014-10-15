﻿<!DOCTYPE html>
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
        <link href="../style.css" rel="stylesheet" type="text/css">
        <link href="ResVerStyles.css" rel="stylesheet" type="text/css">
        <script src="ReservScript.js" type="text/javascript"></script>
        <script type="text/javascript">
            function CheckForm(){
            var inp = document.getElementById("FormPrice").value;    
            if(inp === 0){
            alert("U heeft geen stoel geselecteerd");    
            return false;
                
            }
            else{
                return true;
            }
                
            }
        </script>
    </head>
    <body onload="PrintZaal('1')">
        <div id="container">
            <div id="TopMenuBar">                
                    <a href="../index.html"> <img id="Logo" src="../Images/Logo.png" alt="logo"> </a>                
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
                    <h1>Bestel kaartjes</h1>
                </center>
            </div><!--TopText-->
            <div id="Content">
               
			<div id="PlattegrondZaal" style="float:left;">
                <!-- Hier komt de zaal-->
                
                <div id="Chair" style="float:left; background-color:green; width:50px;">
                </div>
            </div>
            <div id="Price" style=" margin-left:10px;float:left;">
                <p>Klik op een stoel</p>
            </div>
                <div id="TotalPrice">
                </div>
                <br/>
                <form method="get" action="do/ProcessOrder.php" onsubmit="return CheckForm();">
                    <input id="FormPrice" name="FormPrice" type="hidden" value="">
                <input type="submit" value="Bestel kaartjes">
                </form>
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