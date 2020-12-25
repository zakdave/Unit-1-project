/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
 * Create an array of objects that each contain quote, source, citation and year 
***/

const quotes = [
{quote: 'It has become appallingly obvious that our technology has exceeded our humanity.',
name: 'Albert Einstein',
citation: 'The Ultimate Quotable Einstein',
year: '',
},

{quote: 'R2-D2, you know better than to trust a strange computer.',
name: 'C-3PO',
citation: 'Episode V: The Empire Strikes Back',
year: '1980',
},

{quote: "Every generation's breakthroughs are proven false by the next generation's technology",
name: 'Dan Brown',
citation: 'The Lost Symbol',
year: '2009',
},

{quote: "Most of the time spent wrestling with technologies that don't quite work yet is just not worth it for end users, however much fun it is for nerds.",
name: 'Douglas Adams',
citation: '',
year: '',
},

{quote: 'I would trade all of my technology for an afternoon with Socrates.',
name: 'Steve Jobs',
citation: 'Newsweek',
year: '2001',
},

{quote: 'Java is to JavaScript what car is to carpet.',
name: 'Chris Heilmann',
citation: '',
year: '',
},

{quote: 'The real danger is not that computers will begin to think like men, but that men will begin to think like computers.',
name: 'Sydney J. Harris',
citation: '',
year: '1976',
},

{quote: "It's still magic even if you know how it's done.",
name: 'Terry Pratchett',
citation: 'A Hat Full of Sky',
year: '2004',
},

{quote: 'A CD. How quaint. We have these in museums.',
name: 'Eoin Colfer',
citation: 'The Eternity Code',
year: '2003',
},

{quote: 'Computers are useless. They can only give you answers.',
name: 'Pablo Picasso',
citation: '',
year: '',
}];


/***
 * `getRandomQuote` function
 * Create function that returns a random object within
 * quotes array using Math.random
***/
const getRandomQuote = function() {
  let random = Math.floor(Math.random() * quotes.length)
  return quotes[random];
};


/***
 * `printQuote` function
 * Create function that returns a string based on which quote is 
 * selected through the use of conditional statements
***/
const printQuote = () => {
  return getRandomQuote().quote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);