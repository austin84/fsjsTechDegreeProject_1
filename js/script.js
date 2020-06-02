/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote: 'Leave nothing for tomorrow which can be done today.',
    source: 'Abraham Lincoln',
    citation: 'The Collected Works of Abraham Lincoln',
    year: '1850',
  },
  {
    quote: `It's the possibility of having a dream come true that makes life interesting.`,
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    year: '1988',
  },
  {
    quote: 'There is no greater agony than bearing an untold story inside you.',
    source: 'Maya Angelou',
    citation: 'I Know Why the Caged Bird Sings',
    year: '1969',
  },
  {
    quote:
      'And so we beat on, boats against the current, borne back ceaselessly into the past.',
    source: 'F. Scott Fitzgerald',
    citation: 'The Great Gatsby',
    year: '1924',
  },
  {
    quote:
      'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
    source: 'Anne Frank',
    citation: 'The Diary of a Young Girl',
    year: '1942',
  },
  {
    quote:
      'I took a deep breath and listened to the old brag of my heart: I am, I am, I am.',
    source: 'Sylvia Plath',
    citation: 'The Bell Jar',
    year: '1963',
  },
  {
    quote:
      'Memories warm you up from the inside. But they also tear you apart.',
    source: 'Haruki Murakami',
    citation: 'Kafka on the Shore',
    year: '2002',
  },
  {
    quote: `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...`,
    source: 'Dr. Seuss',
    citation: `Oh, The Places You'll Go!`,
    year: '1990',
  },
  {
    quote:
      'Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.',
    source: 'William Goldman',
    citation: 'The Princess Bride',
    year: '1973',
  },
  {
    quote:
      'We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.',
    source: 'J. K. Rowling',
    citation: 'Harry Potter and the Order of the Phoenix',
    year: '2003',
  },
];

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
