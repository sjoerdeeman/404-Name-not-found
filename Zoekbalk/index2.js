$(document).ready(function searchq()  {
    $('.searchVal').keyup(function() {
	var searchTxt = $(this).attr('value');
    	$.post("index.php", {searchVal:searchVal}, function(data)  {
	  $('.result').html(data);
	  
	    $('.result li').click(function)()  {
		  var result_value= $(this).text();
		  $('.searchval').attr('value', result_value);
		  $(',
		  $('.result').html('')
		
		});
	});
  });
});
