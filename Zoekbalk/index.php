<?php

mysql_connect("mijnmarklinbaan.nl", "mijnma1q_404name", "404namenotfound") or die("Error");
mysql_select_db("mijnma1q_school") or die("DB niet gevonden");
$output = '';

if (isset($_POST['searchVal'])) {
    $searchq = $_POST['searchVal'];
//    $searchq = preg_replace("#[^0-9a-z]#i", "", $searchq);
    
    $query = mysql_query("SELECT * FROM `Films` WHERE FilmName LIKE '%".$searchq."%'" ) or die("Niet Gevonden");
    
    $count = mysql_num_rows($query);
    if ($count == 0) {
        $output = 'Geen resultaat';
    } else {
        while ($row = mysql_fetch_array($query)) {
            $film = $row['FilmName'];
//		 $id = $row['Id'];

            $output = $film ;
        }
    }
}
echo($output);
?>