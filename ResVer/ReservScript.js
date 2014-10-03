var Total = 0;
var OccChair = new Array();
function ShowPrice(ChairCat, ID) {   
    var Array = [];
    var OutDiv = document.getElementById("Price");
    function ChangeChairState(IDForChair, CatForChair) {
        var L = OccChair.length;
        var r = true;
        var C = CatForChair;
        for (o = 0 ; o < L ; o++) {
            if (OccChair[o] == IDForChair) {
                document.getElementById(IDForChair).style.backgroundColor = "green";
                r = false;
            }        
        }
        return r;
    }    
    if (ChangeChairState(ID, ChairCat)) {
        OccChair.push(ID);        
        var ClickedChair = document.getElementById(ID);           
        switch (ChairCat) {
            case 0:
                alert("Dit is helaas geen stoel.");
                break
                ;
            case 1:
                Array.push(7.50);
                ClickedChair.style.backgroundColor = "grey";
                break
                ;
            case 2:
                ClickedChair.style.backgroundColor = "grey";
                Array.push(11.00);
                break
                ;
            case 3:
                ClickedChair.style.backgroundColor = "grey";
                Array.push(13.00);
                break
                ;
        }
        for (i = 0; i < Array.length ; i++) {
            Total = Total + Array[i];
        }
        OutDiv.innerHTML = "<p>De totaalprijs van de geselecteerde stoelen: €" + Total + "</p>";
    }
    else {
        var value = 0;
        switch (ChairCat) {            
            case 1:
                value = 7.50;                
                break
                ;
            case 2:               
                value = 11.00;
                break
                ;
            case 3:                
                value = 13.00;
                break
                ;
        }
        Total = Total - value;
        if (Total > 0) {
            OutDiv.innerHTML = "<p>De totaalprijs van de geselecteerde stoelen: €" + Total + "</p>";
        }
        else {
            OutDiv.innerHTML = "Klik op een stoel"
        }
    }
}


function PrintZaal(Zaalnummer) {
    var id = "1";
    var OutputDiv = document.getElementById("PlattegrondZaal");
    OutputDiv.innerHTML = "";
   /* var NoChairOutput = '<div class="NoChair" style="float:left; background-color:red; width:30px;" onmousedown="javascript:ShowPrice(0)"><p>NC</p></div>';
    var ChairCat1Output = '<div class="Chair" style="float:left; background-color:green; width:30px;" onmousedown="javascript:ShowPrice(1)"><p>C</p></div>';
    var ChairCat2Output = '<div class="Chair2" style="float:left; background-color:green; width:30px;" onmousedown="javascript:ShowPrice(2)"><p>2</p></div>';
    var ChairCat3Output = '<div class="Chair3" style="float:left; background-color:green; width:30px;" onmousedown="javascript:ShowPrice(3)"><p>3</p></div>';*/
    function GoThroughRij() {
        var RijLength = rij.length;
        for (ab = 0 ; ab < RijLength ; ab++) {
            //Geen stoelen
            for (a = 0 ; a < rij[ab][0]; a++) {
                id++;
                var NoChairOutput = '<div class="NoChair" style="float:left; background-color:red; width:30px;" onmousedown="javascript:ShowPrice(0,'+id+')"id="'+ id +'"><p>NC</p></div>';
                OutputDiv.innerHTML += NoChairOutput;
            }
            //stoelen klasse 1 links vh midden
            for (b = 0 ; b < rij[ab][1]; b++) {
                id++;
                var ChairCat1Output = '<div class="Chair" style="float:left; background-color:green; width:30px;" onmousedown="javascript:ShowPrice(1,' + id + ')"id="' + id + '"><p>C</p></div>';
                OutputDiv.innerHTML += ChairCat1Output;
            }
            //stoelen klasse 2 links vh midden
            for (c = 0 ; c < rij[ab][2]; c++) {
                id++;
                var ChairCat2Output = '<div class="Chair2" style="float:left; background-color:green; width:30px;" onmousedown="javascript:ShowPrice(2,' + id + ')"id="' + id + '"><p>2</p></div>';
                OutputDiv.innerHTML += ChairCat2Output;
            }
            //stoelen klasse 3
            for (d = 0 ; d < rij[ab][3]; d++) {
                id++;
                var ChairCat3Output = '<div class="Chair3" style="float:left; background-color:green; width:30px;" onmousedown="javascript:ShowPrice(3,' + id + ')"id="' + id + '"><p>3</p></div>';
                OutputDiv.innerHTML += ChairCat3Output;
            }
            // stoelen klasse 2 rechts vh midden
            for (e = 0 ; e < rij[ab][4]; e++) {
                id++;
                var ChairCat2Output = '<div class="Chair2" style="float:left; background-color:green; width:30px;" onmousedown="javascript:ShowPrice(2,' + id + ')"id="' + id + '"><p>2</p></div>';
                OutputDiv.innerHTML += ChairCat2Output;
            }
            //stoelen klasse 1 rechts vh midden
            for (f = 0 ; f < rij[ab][5]; f++) {
                id++;
                var ChairCat1Output = '<div class="Chair" style="float:left; background-color:green; width:30px;" onmousedown="javascript:ShowPrice(1,' + id + ')"id="' + id + '"><p>C</p></div>';
                OutputDiv.innerHTML += ChairCat1Output;
            }
            //geen stoelen
            for (g = 0 ; g < rij[ab][6]; g++) {
                id++;
                var NoChairOutput = '<div class="NoChair" style="float:left; background-color:red; width:30px;" onmousedown="javascript:ShowPrice(0,' + id + ')"id="' + id + '"><p>NC</p></div>';
                OutputDiv.innerHTML += NoChairOutput;
            }
            //nieuwe regel als de rij stoelen klaar is
            OutputDiv.innerHTML += "<br/>";
        }
    }
    if (Zaalnummer == "1") {              
        //zaal 1
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
        GoThroughRij();
    }//end if
    else if (Zaalnummer == "2") {
        //zaal 2
        var rij = new Array();
        /*Volgorde van stoelen in array
        Geen stoel, Klasse 1 stoelen links, klasse 2 stoelen links, klasse 3 stoelen ,klasse 2 stoelen rechts, klasse 1 stoelen rechts, geen stoelen
        */
        rij[0] = new Array(3, 12, 0, 0, 0, 0, 3);
        rij[1] = new Array(3, 12, 0, 0, 0, 0, 3);
        rij[2] = new Array(2, 14, 0, 0, 0, 0, 2);
        rij[3] = new Array(2, 4, 6, 0, 0, 4, 2);
        rij[4] = new Array(2, 4, 6, 0, 0, 4, 2);
        rij[5] = new Array(1, 4, 8, 0, 0, 4, 1);
        rij[6] = new Array(1, 3, 4, 2, 4, 3, 1);
        rij[7] = new Array(1, 2, 4, 4, 4, 2, 1);
        rij[8] = new Array(0, 2, 4, 6, 4, 2, 0);
        rij[9] = new Array(0, 2, 4, 6, 4, 2, 0);
        rij[10] = new Array(0, 2, 4, 6, 4, 2, 0);
        rij[11] = new Array(0, 2, 4, 6, 4, 2, 0);
        rij[12] = new Array(0, 3, 4, 4, 4, 3, 0);
        rij[13] = new Array(1, 3, 4, 2, 4, 3, 1);
        rij[14] = new Array(1, 3, 10, 0, 0, 3, 1);
        rij[15] = new Array(1, 4, 8, 0, 0, 4, 1);
        rij[16] = new Array(1, 4, 8, 0, 0, 4, 1);
        rij[17] = new Array(1, 5, 6, 0, 0, 5, 1);
        rij[18] = new Array(1, 16, 0, 0, 0, 0, 1);
        GoThroughRij();
    }
    //end else if 
    else if (Zaalnummer == "3") {
        //zaal 3
        var rij = new Array();
        /*Volgorde van stoelen in array
        Geen stoel, Klasse 1 stoelen links, klasse 2 stoelen links, klasse 3 stoelen ,klasse 2 stoelen rechts, klasse 1 stoelen rechts, geen stoelen
        */
        rij[0] = new Array(8, 14, 0, 0, 0, 0, 8);
        rij[1] = new Array(7, 16, 0, 0, 0, 0, 7);
        rij[2] = new Array(5, 20, 0, 0, 0, 0, 5);
        rij[3] = new Array(3, 9, 3, 0, 3, 9, 3);
        rij[4] = new Array(3, 7, 5, 0, 5, 7, 3);
        rij[5] = new Array(2, 7, 6, 0, 6, 7, 2);
        rij[6] = new Array(2, 6, 7, 0, 7, 6, 2);
        rij[7] = new Array(1, 7, 5, 4, 5, 7, 1);
        rij[8] = new Array(0, 7, 4, 8, 4, 7, 0);
        rij[9] = new Array(0, 6, 5, 8, 5, 6, 0);
        rij[10] = new Array(0, 5, 6, 8, 6, 5, 0);
        rij[11] = new Array(0, 5, 6, 8, 6, 5, 0);
        rij[12] = new Array(0, 6, 5, 8, 5, 6, 0);
        rij[13] = new Array(1, 5, 5, 8, 5, 5, 1);
        rij[14] = new Array(2, 5, 5, 6, 5, 5, 2);
        rij[15] = new Array(3, 4, 6, 4, 6, 4, 3);
        rij[16] = new Array(3, 5, 7, 0, 7, 5, 3);
        rij[17] = new Array(3, 5, 7, 0, 7, 5, 3);
        rij[18] = new Array(3, 6, 6, 0, 6, 6, 3);
        rij[19] = new Array(4, 11, 0, 0, 0, 11, 4);
        GoThroughRij();
    }
}
// end function
//PrintZaal("3");