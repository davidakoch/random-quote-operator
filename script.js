

//code by David Koch
//my code
$(document).ready(function() {

	var quote;

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

			}
		});
	}
	getNewQuote();

	$('#quote-button').on('click', function(event) {
		event.preventDefault;
		getNewQuote();
	});
});



//borrowed code


/*function inIframe () { 
	try { return window.self !== window.top; } 
	catch (e) { return true; } }

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', 
'#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", 
"#73A857"];

//empty variable

var currentQuote = '', currentAuthor = '';

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
//the function that gets quote
function getQuote() {
	//jquery method that loads json data
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    //base urel where they got the quotes
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      //does something with the response
      //you are using json.parse to create an object r
      //current quote is equal to quote
      //current author is equal to author
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
      if(inIframe())
      {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      }
      //this animates the div quote text
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(r.quote);
        });
      //this animates the div quote author
      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(r.author);
        });

      //this animates the background color and button color
      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
    }
  });
}

//this actually affects the DOM

$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });
  $('#tumblr-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote));
    }
  });
});
*/