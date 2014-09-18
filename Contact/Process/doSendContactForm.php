<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//get all the info needed
$voornaam = filter_input(INPUT_POST, 'voornaam');
$achternaam = filter_input(INPUT_POST, 'achternaam');
$mail = filter_input(INPUT_POST, 'email');
$type = filter_input(INPUT_POST, 'select');
$bericht = filter_input(INPUT_POST, 'bericht');
echo"De ingevoerde waarden:<br/>";
echo $voornaam . "<br/>" . $achternaam . "<br/>" . $mail . "<br/>" . $type . "<br/>" . $bericht . "<br/>";

$to = "mar.rho@Kpnmail.nl";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From:" . $mail . "\r\n";
$headers .= "From:".$mail." \r\n";

$subject = $type;
$Message = "<html><body><p>Het contact formulier is verstuurd met de volgende informatie:</p><br/><table>
            <tr>
                <td><strong>Voornaam</strong></td>
                <td>".$voornaam."</td>
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

mail($to, $subject, $Message,$headers );
echo"Mail sent";
?>