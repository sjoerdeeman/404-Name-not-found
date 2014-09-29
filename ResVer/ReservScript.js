function PrintZaal(Zaalnummer) {
    if (Zaalnummer == "1") {
        //Hier de code voor zaal 3 met 500 stoelen   
       
        var OutputDiv = document.getElementById("PlattegrondZaal");
        OutputDiv.innerHTML = "";
        var NoChairOutput = '<div class="NoChair" style="float:left; background-color:red; width:30px;"><p>NC</p<</div>';
        var ChairCat1Output = '<div class="Chair" style="float:left; background-color:green; width:30px;"><p>C</p></div>';
        var ChairCat2Output = '<div class="Chair2" style="float:left; background-color:green; width:30px;"><p>2</p></div>';
        var ChairCat3Output = '<div class="Chair3" style="float:left; background-color:green; width:30px;"><p>3</p></div>';
        
        var rij = new Array();
        /*Volgorde van stoelen in array
        Geen stoel, Klasse 1 stoelen links, klasse 2 stoelen links, klasse 3 stoelen ,klasse 2 stoelen rechts, klasse 1 stoelen rechts, geen stoelen
        */
        rij[0] = new Array(2, 8, 0, 0, 0,0, 2);
        rij[1] = new Array(2, 8, 0, 0, 0, 0, 2);
        rij[2] = new Array(1, 10, 0, 0, 0, 0, 1);
        rij[3] = new Array(0, 5, 1, 0, 1, 5, 0);
        rij[4] = new Array(0, 4, 2, 0, 2, 4, 0);
        rij[5] = new Array(0, 3, 2, 2, 2, 3, 0);
        rij[6] = new Array(0, 3, 2, 2, 2, 3, 0);
        rij[7] = new Array(0, 3, 2, 2, 2, 3, 0);
        rij[8] = new Array(0, 3, 2, 2, 2, 3, 0);
        rij[9] = new Array(0, 4, 2, 0, 2, 4, 0);
        rij[10] = new Array(0, 5, 1, 0, 1, 5, 0);
        rij[11] = new Array(1, 10, 0, 0, 0, 0, 1);
        rij[12] = new Array(1, 10, 0, 0, 0, 0, 1);
        rij[13] = new Array(2, 8, 0, 0, 0, 0, 2);
        
        
        //loop door de rijen
        for (ab = 0 ; ab < 14 ; ab++) {
            //Geen stoelen
            for (a = 0 ; a < rij[ab][0]; a++) {
                OutputDiv.innerHTML += NoChairOutput;
            }
            //stoelen klasse 1 links vh midden
            for (b = 0 ; b < rij[ab][1]; b++) {
                OutputDiv.innerHTML += ChairCat1Output;
            }
            //stoelen klasse 2 links vh midden
            for (c = 0 ; c < rij[ab][2]; c++) {
                OutputDiv.innerHTML += ChairCat2Output;
            }
            //stoelen klasse 3
            for (d = 0 ; d < rij[ab][3]; d++) {
                OutputDiv.innerHTML += ChairCat3Output;
            }
            // stoelen klasse 2 rechts vh midden
            for (e = 0 ; e < rij[ab][4]; e++) {
                OutputDiv.innerHTML += ChairCat2Output;
            }
            //stoelen klasse 1 rechts vh midden
            for (f = 0 ; f < rij[ab][5]; f++) {
                OutputDiv.innerHTML += ChairCat1Output;
            }
            //geen stoelen
            for (g = 0 ; g < rij[ab][6]; g++) {
                OutputDiv.innerHTML += NoChairOutput;
            }
            //nieuwe regel als de rij stoelen klaar is
            OutputDiv.innerHTML += "<br/>";
        }
    }
    //end if 
}
// end function
//PrintZaal("3");