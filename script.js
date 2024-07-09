document.addEventListener('DOMContentLoaded',function(){
    var previous=document.getElementById('back');
    previous.addEventListener('click',function()
    {
        window.history.back();
    });
});

const quotes = [
    "Teachers plant seeds of knowledge that grow forever.",
    "Every child deserves a champion – an adult who will never give up on them.",
    "Teaching is the profession that teaches all the other professions.",
    "Education is not the filling of a pail, but the lighting of a fire."
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
    quoteElement.classList.add('move-animation'); // Add animation class
  });

const quote=[
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. — Malcolm X",
    "Learning is a treasure that will follow its owner everywhere. — Chinese Prover"

];
document.addEventListener('DOMContentLoaded', function() {
    const quotesElements = document.getElementById('stuquote');
    const randomQuotes = quote[Math.floor(Math.random() * quote.length)];
    quotesElements.textContent = randomQuotes;
    quotesElements.classList.add('move-animation');
});