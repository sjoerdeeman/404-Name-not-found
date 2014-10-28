function searchq()  {
    var searchTxt = $("input[name='searchVal']").val();
    
	$.post("index.php", {searchVal: searchTxt}, function(output)  {
	  $("#output").html(output);
	});
}
