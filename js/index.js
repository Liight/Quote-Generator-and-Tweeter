var catalog = [{
    'quote': 'Today you are you! That is truer than true! There is no one alive who is you-er than you!',
    'author': 'Dr. Seuss'
  }, {
    'quote': 'Don\'t cry because it\'s over. Smile because it happened.',
    'author': 'Dr. Seuss'
  },

  {
    'quote': 'You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose. You\'re on your own, and you know what you know. And you are the guy who\'ll decide where to go.',

    'author': 'Dr. Seuss'
  }, {
    'quote': 'I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living, it\'s a way of looking at life through the wrong end of a telescope. Which is what I do, and that enables you to laugh at life\'s realities.',
    'author': 'Dr. Seuss'
  }, {
    'quote': 'The more that you read, the more things you will know. The more that you learn, the more places you\'ll go.',

    'author': 'Dr. Seuss'
  }, {
    'quote': 'Step with care and great tact, and remember that Life\'s a Great Balancing Act.',
    'author': 'Dr. Seuss'
  }, {
    'quote': 'Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!',
    'author': 'Dr. Seuss'
  }, {
    'quote': 'How did it get so late so soon? Its night before its afternoon. December is here before its June. My goodness how the time has flewn. How did it get so late so soon?',
    'author': 'Dr. Seuss'
  }, {
    'quote': 'Only you can control your future.',
    'author': 'Dr. Seuss'
  }
];
// initializes variables
var min = 0;
var max = catalog.length;
var quote, author;

// sets variables
function selectRandomQuoteFromArray() {
    var q = Math.floor(Math.random() * (max - min));
    quote = catalog[q]['quote'].toString();
    author = catalog[q]['author'];
  }
  // displays array data on page
function displayQuote() {
    $('#quote-holder').html(quote);
    $('#quote-author-holder').text(author);
  }
  // make onclick function
function generateQuote() {
  selectRandomQuoteFromArray();
  displayQuote();
}
$(document).ready(function() {
  generateQuote();
});

// Tweet The Quote
// We bind a new event to our link
$('a.tweet').click(function(e) {
  //We tell our browser not to follow that link
  e.preventDefault();
  //We get the URL of the link
  var loc = $(this).attr('href');

  //We get the title of the link
  var title = escape($(this).attr('title'));

  // Get the quote text
  var quoteText = $('#quote-holder').text();

  // Get the author text
  var authorText = $('#quote-author-holder').text();

  // Convert to string
  var quoteStr = quoteText.toString();

  // Convert to string
  var authorStr = authorText.toString();

  // Concat string
  var fullStr = quoteStr + " - " + authorStr;

  // Fact length
  var quoteLen = fullStr.length;

  // Formats "facts" that are too long... remove if not needed
  if (quoteLen > 103) { // max chacters allowed
    // trim, and allow space for '...'"
    var quoteF = fullStr.substring(0, 100);
    var quoteF = quoteF.trim(); //<-- ensures the last character isnt ' '
    fullStr = quoteF + "...";
  }

  //We trigger a new window with the Twitter dialog, in the middle of the page
  window.open('https://twitter.com/share?url=' + loc + '&text=' + fullStr + '&', 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});