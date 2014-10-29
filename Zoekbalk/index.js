function searchq()  {
    var searchTxt = $("input[name='searchVal']").val();
    if (searchTxt == "" && searchTxt.length < 2){
        document.getElementById("output").innerHTML = "";
    }
    else{
	$.post("Zoekbalk/index.php", {searchVal: searchTxt}, function(output)  {
	  $("#output").html(output);
	});
    
    }
}
