<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Filmpje</title>
        <?php
        $movie = "As Above So Below";
        $DateAndTimeZaal = filter_input(INPUT_GET, "DateAndTime");
        $ResVerCode = filter_input(INPUT_GET, "ResCode");
        $LinkToTicket = "ticket.php?movie=".$movie . "&DateAndTime=".$DateAndTimeZaal . "&ResVerCode=".$ResVerCode ;
        ?>
        <meta name="keywords" content="film, films, movie, movies, bios, bioscoop, cinema, oer, hollandse, oer-hollandse, 3D, Imax, Aura3d, Aura, zaal, zalen, stoel, stoelen, bioscoopzaal, bioscoopzalen, bioscoopstoel, bioscoopstoelen, uniek, unieke, inrichting, ervaring, zit, plaatsen, goed, nu in de bioscoop, nu in de bios, films op dit moment, movies op dit moment, verwachte films, verwachte movies">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:sitename" content="Filmpje">
        <meta property="og:description" content="Filmpje is een oer-Hollandse bioscoop met de meeste nieuwe technieken.">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../../../../search.css" rel="stylesheet" type="text/css">
        <link href="../../style.css" rel="stylesheet" type="text/css">       
    </head>
    <body>
        <div id="container">
            <div id="TopMenuBar">                
                <a href="../../../../index.html"> <img id="Logo" src="Images/Logo.png" alt="logo"> </a>                
                <nav id="UpperMenu">
                    <a href="../../../../index.html" class="MenuItem">Home</a>
                    <a href="../../../..//Films/index.html" class="MenuItem">Films</a>
                    <a href="../../../../Algemene Bioscoop Info/overons.html" class="MenuItem">Over ons</a>
                    <a href="../../../../Contact/contact.html" class="MenuItem">Contact</a>
                </nav><!--UpperMenu-->
                <form class="form-wrapper ag">
                    <input type="text" placeholder="Zoek een film..." required>
                    <button type="submit">Zoeken</button>
                </form>
            </div><!--TopMenuBar-->
            <div id="TopText">
                <center>
                    <h1>Bestelling Succesvol</h1>
                </center>
            </div><!--TopText-->
            <div id="Content">
                <strong>U hebt kaartjes besteld voor de film 'As Above So Below'.<br/></strong><Br/>
                <strong>Uw Reserveringsnummer:</strong>
                <?php
                echo $_GET['ResCode'] . "<br/>";
                $DateAndTime = $_GET['DateAndTime'];
                $ex = explode(":", $DateAndTime);
                echo "<br/><strong>Uw kaartjes zijn geldig op:</strong> ". $ex[0] . " om " . $ex[1] ." uur in zaal ". $ex[2];
                ?>      <br/><br/>          
                <a href="<?php echo $LinkToTicket;?>">Uw kaartje</a>
			
            </div><!--Content-->
            
            <footer>
                <div id="FooterText">
                    <div id="FooterImages">
                       <img src="../../../../Images/3DLogo.jpg" class="footerlogo" alt="logo">
                        <img src="../../../../Images/AuraLogo.jpg" class="footerlogo" alt="logo">
                        <img src="../../../../Images/ImaxLogo.jpg" class="footerlogo" alt="logo">
                    </div>
                    <p id="CopyTekst"> &copy; Filmpje | adres | telefoonnummers  </p>
                </div><!--FooterText-->
            </footer>
        </div>
    </body>
</html>
