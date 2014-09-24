    var stoel;
    var rij;
    var prijs;

    function stoelselectie (stoel, rij, prijs) {
        window.alert("Rij "+rij+" stoel "+stoel+" €"+prijs);
    }

var a = 10
var b = 25
var c = 50


var rij = [ "a","a","b", "b", "c", "c", "b", "b", "c", "c"];

function somberekening()
{
    var totaal = 0;
    for(var i = 0 ; i < rij.length; i++){
        switch(rij[i]){
            case "a": totaal = totaal + 10;break;
            case "b": totaal = totaal + 25;break;
            case "c": totaal = totaal + 50;break;
        }
    }
}

var zaal = [    [1,1,1,1,1],
                [1,2,2,1,1],
                [0,1,1,1,0]
            ];



    function somberekening()
{
    var totaal = 0;
    for(var rij = 0 ; rij < zaal.length; rij++){
        for =(stoel = 0 ; stoel < zaal[rij].length; stoel++){


        switch(zaal[rij][stoel]){
            case 0: break;
            case 1: totaal = totaal + 10;
            case 2: totaal = totaal + 25;break;
            case 3: totaal = totaal + 50;break;
            }
        }
    }
}