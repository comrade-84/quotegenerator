const quoteId = document.getElementById('idnumber');
const quoteMessage = document.getElementById('quote');
const generateBtn = document.querySelector('.image');
let advice ;
 
async function getQuote() {
   try {
    const response = await fetch('https://api.adviceslip.com/advice');
    advice = await response.json();
    quoteId.textContent = advice.slip.id;
    quoteMessage.textContent = `"${advice.slip.advice}"`;
   } catch (error) {
    console.log('error fetching quote:', error);
   } 
}
generateBtn.addEventListener('click', function() {
    getQuote();
});
getQuote();
