<?php
require_once('../recaptchalib.php');
 $privatekey = "6LdiuPoSAAAAAAJ_7LopFDyy19MxojZBdKBKDzbc";
 $resp = recaptcha_check_answer ($privatekey,
                                 $_SERVER["REMOTE_ADDR"],
                                 $_POST["recaptcha_challenge_field"],
                                 $_POST["recaptcha_response_field"]);

if (!$resp->is_valid) {
echo"Invalid";
}
else{
//haalt alle benodigde informatie op
$voornaam = filter_input(INPUT_POST, 'voornaam');
$tussenvoegsel = filter_input(INPUT_POST, 'tussenvoegsel');
$achternaam = filter_input(INPUT_POST, 'achternaam');
$mail = filter_input(INPUT_POST, 'email');
$type = filter_input(INPUT_POST, 'select');
$bericht = filter_input(INPUT_POST, 'bericht');
//set het mail adres waar de mail naar toe gestuurd moet worden
$to = "mail@mail.mail";
/*
De headers zorgen voor de HTML en waar de mail vandaan komt
*/
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From:" . $mail . "\r\n";

//het onderwerp van de mail
$subject = $type;
//Het bericht zelf
$Message = "<html><body><p>Het contact formulier is verstuurd met de volgende informatie:</p><br/><table>
            <tr>
                <td><strong>Voornaam</strong></td>
                <td>".$voornaam."</td>
            </tr>
			<tr>
                <td><strong>Tussenvoegsel</strong></td>
                <td>".$tussenvoegsel."</td>
            </tr>
            <tr>
                <td><strong>Achternaam</strong></td>
                <td>".$achternaam."</td>
            </tr>
            <tr>
                <td><strong>Mail</strong></td>
                <td>".$mail."</td>
            </tr>
            <tr>
                <td><strong>Type</strong></td>
                <td>".$type."</td>
            </tr>
            
            <tr>
                <td><strong>Bericht</strong></td>
                <td>".$bericht."</td>
            </tr>
        </table></body></html>";
//verzend de mail
mail($to, $subject, $Message,$headers );
//stuurt de gebruiker door naar de success pagina
header("location:../success.html");}

?>