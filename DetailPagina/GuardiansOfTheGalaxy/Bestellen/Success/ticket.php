<!DOCTYPE html>

<html>
    <head>
        <?php
        $film = filter_input(INPUT_GET, "movie");
        $DateAndTime = filter_input(INPUT_GET, "DateAndTime");
        $ResVer = filter_input(INPUT_GET, "ResVerCode");
        ?>
        <title>Kaartje</title>
        <style>
            body{
                background-image: url(Images/Background.jpg);
            }

        </style>
    </head>
    <body>
        <img src="Images/Logo.png" alt="Logo" height="50"><br/>
        <strong>Uw ticket voor</strong> <?php echo $film; ?>.<br/>
        <strong> Uw reserveringsnummer:</strong>
        <?php
        echo $ResVer . "<br/>";
        $ex = explode(":", $DateAndTime);
        echo "<strong>Uw kaartjes zijn geldig op:</strong> " . $ex[0] . " om " . $ex[1] . " uur in zaal " . $ex[2];
        ?> 

    </body>
</html>
