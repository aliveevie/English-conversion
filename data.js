const americanOnly = require('./components/american-only.js');
const americanToBritishSpelling = require('./components/american-to-british-spelling.js');
const americanToBritishTitles = require("./components/american-to-british-titles.js")
const britishOnly = require('./components/british-only.js')



let text = 'Like a high tech Rube Goldberg machine.'

function convertedText(text){
    let initialIndex;
    const timeTranslations = {
        ":": ".",
      };
      
const words = text.split(" ")
let translatedWords = words.map((word) => {
    if(americanToBritishTitles.hasOwnProperty(word)){
       
        let wordReturn =  `<span class="highlight">${americanToBritishTitles[word]}</span>`  
        return wordReturn
    }

    if(americanToBritishSpelling.hasOwnProperty(word.toLowerCase())){
      initialIndex = words.indexOf(word)
      
    return `<span class="highlight">${americanToBritishSpelling[word.toLowerCase()]}</span>`
}


// check if the word contains a time format

const timeKeys = Object.keys(timeTranslations);
const timeRegExp = new RegExp(`\\d{1,2}${timeKeys.join("|")}`, "g");
if (timeRegExp.test(word)) {
    const time = word.replace(/:/g, (match) => timeTranslations[match]);
    return `<span class="highlight">${time}</span>`
  }

    return word

})
  let translatedText = translatedWords.join(' ')
   const matchingValue = getMatchingValue(translatedText)
   if(matchingValue === null){
    return translatedText
   }else{
      return replaceMatchingWords(text)
   }
}


function getMatchingValue(text) {
  const lowerText = text.toLowerCase();
  for (const key in americanOnly) {
    if (lowerText.includes(key.toLowerCase())) {
      return americanOnly[key];
    }
  }
  return null; // Return null if no match is found
}

  function replaceMatchingWords(text) {
  
    for (const key in americanOnly) {
      const regex = new RegExp(key, 'gi');
      const coloredText = `<span class="highlight">${americanOnly[key]}</span>`
      text = text.replace(regex, coloredText);
    }
    return text;
  }

  
  
  
  /*
  const text2 = 'favorite color'
  const tex = "Like a high tech Rube Goldberg machine.";
  const replacedText = replaceMatchingWords(tex);
  console.log(replacedText);
*/
 let result = convertedText('favorite color')
 console.log(result)
  

  

  
 
