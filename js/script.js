/**
 * Array of quotes
 */
const quotes = [
  {
    quote: 'Leave nothing for tomorrow which can be done today.',
    source: 'Abraham Lincoln',
    citation: 'The Collected Works of Abraham Lincoln',
    year: '1850',
    tag: 'Politics',
  },
  {
    quote: `It's the possibility of having a dream come true that makes life interesting.`,
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    year: '1988',
    tag: 'Metaphysics',
  },
  {
    quote: 'There is no greater agony than bearing an untold story inside you.',
    source: 'Maya Angelou',
    citation: 'I Know Why the Caged Bird Sings',
    year: '1969',
    tag: 'Inspiration',
  },
  {
    quote:
      'And so we beat on, boats against the current, borne back ceaselessly into the past.',
    source: 'F. Scott Fitzgerald',
    citation: 'The Great Gatsby',
    year: '1924',
    tag: 'Adventure',
  },
  {
    quote:
      'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
    source: 'Anne Frank',
    citation: 'The Diary of a Young Girl',
    year: '1942',
    tag: 'Positivity',
  },
  {
    quote:
      'I took a deep breath and listened to the old brag of my heart: I am, I am, I am.',
    source: 'Sylvia Plath',
    citation: 'The Bell Jar',
    year: '1963',
    tag: 'Inspiration',
  },
  {
    quote:
      'Memories warm you up from the inside. But they also tear you apart.',
    source: 'Haruki Murakami',
    citation: 'Kafka on the Shore',
    year: '2002',
    tag: 'Reflection',
  },
  {
    quote: `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...`,
    source: 'Dr. Seuss',
    citation: `Oh, The Places You'll Go!`,
    year: '1990',
    tag: 'Inspiration',
  },
  {
    quote:
      'Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.',
    source: 'William Goldman',
    citation: 'The Princess Bride',
    year: '1973',
    tag: 'Romance',
  },
  {
    quote:
      'We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.',
    source: 'J. K. Rowling',
    citation: 'Harry Potter and the Order of the Phoenix',
    year: '2003',
    tag: 'Right/Wrong',
  },
];

/**
 * Function to produce a random quote from the quotes array
 */
function getRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

/**
 * Function to Print the Random Quote to the quote-box div
 */
function printQuote() {
  const printQuote = getRandomQuote();
  const html = `
  <p class="quote">${printQuote.quote}</p>
  <p class="source">${printQuote.source}
    <span class="citation">${printQuote.citation}</span>
    <span class="year">${printQuote.year}</span>
    <span class="tag">${printQuote.tag}</span>
  </p>
  `;
  const letters = '0123456789ABCDEF';
  let color = `#`;

  // generate random color
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  // change color
  document.querySelector('body').style.backgroundColor = color;

  //change quote
  document.getElementById('quote-box').innerHTML = html;
}

/**
 * Interval of 10 seconds, background color and quote change on interval
 */
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
