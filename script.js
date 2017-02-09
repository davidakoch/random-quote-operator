

//code by David Koch


var quote; 

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', 
'#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", 
"#73A857"];

function getNewQuote() {
	$.ajax({
		//base url
		//need to put quotes around it
		url: 'http://api.forismatic.com/api/1.0/', 
		jsonp: 'jsonp',
		dataType: 'jsonp',
		data: {
			method: 'getQuote',
			lang: 'en',
			format: 'jsonp'
		},
		//if you have a successful response
		success: function(response){
			quote = response.quoteText;
			author = response.quoteAuthor; 
			$('#quote-text').text(quote);
			if(author){
				$('#quote-author').text('-- ' + author);
			} else {
				$('#quote-author').text('-- unknown');
			}
      //adds the background color
		var color = Math.floor(Math.random() * colors.length);
	    	$('body').animate({
	        backgroundColor: colors[color]
	    	});
     	} 
	});
}
	
$(document).ready(function() {
	getNewQuote();
	$('#quote-button').on('click', function(event) {
		event.preventDefault();
		getNewQuote();
		
	});

	$('#twitter-button').on('click', function(event){
		event.preventDefault();
		window.open('https://www.twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '-- ' + author));
	} )
});



