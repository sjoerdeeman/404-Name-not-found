<?php

mysql_connect("mijnmarklinbaan.nl", "mijnma1q_404name", "404namenotfound") or die("Error");
mysql_select_db("mijnma1q_school") or die("DB niet gevonden");
$output = '';

if (isset($_POST['searchVal']) == true && empty($_POST['searchVal']) == false) {
    $searchq mysql_real_escape_string ($_POST['searchVal']);
//    $searchq = preg_replace("#[^0-9a-z]#i", "", $searchq);
    
    $query = mysql_query("SELECT * FROM `Films` WHERE FilmName LIKE '%".$searchq."%'" ) or die("Niet Gevonden");
    
    while (($row = mysql_fetch_assoc($query)) !== false {
	    echo '<li>', $row['FilmName'], '</li>;
  }
}
?>