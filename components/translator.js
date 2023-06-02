const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americanTobritish(text){
        let initialIndex;
        const timeTranslations = {
            ":": ".",
          };
          
    const words = text.split(" ")
    const translatedWords = words.map((word) => {
        if(americanToBritishTitles.hasOwnProperty(word)){
            return  `<span class="highlight">${americanToBritishTitles[word]}</span>`  
        }

    if(americanToBritishSpelling.hasOwnProperty(word.toLowerCase())){
        return `<span class="highlight">${americanToBritishSpelling[word.toLowerCase()]}</span>`
    }

    if(americanOnly.hasOwnProperty(word)){
        
        let returnWord =  `<span class="highlight">${americanOnly[word]}</span>`
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
    const matchingValue = this.getMatchingValue(translatedText)
    if(matchingValue === null){
     return translatedText
    }else{
        
        return this.replaceMatchingWords(text)
    }

    }

    getMatchingValue(text) {
        const lowerText = text.toLowerCase();
        for (const key in americanOnly) {
          if (lowerText.includes(key.toLowerCase())) {
            return americanOnly[key];
          }
        }
        return null; // Return null if no match is found
    }

    replaceMatchingWords(text) {
  
      for (const key in americanOnly) {
        const regex = new RegExp(key, 'gi');
        const coloredText = `<span class="highlight">${americanOnly[key]}</span>`
        text = text.replace(regex, coloredText);
      }
      return text;
    }


    britishToAmerican(text){
        const timeTranslations = {
            ".": ":",
          };
        const britishToAmericanSpelling = this.transformValuesToKeys(americanToBritishSpelling)
        const britishToAmericanTitle = this.transformValuesToKeys(americanToBritishTitles)
        const words = text.split(" ")
        const translatedWords = words.map((word) => {
            if(britishToAmericanTitle.hasOwnProperty(word)){
                return  `<span class="highlight">${britishToAmericanTitle[word]}</span>`  
            }
    
        if(britishToAmericanSpelling.hasOwnProperty(word.toLowerCase())){
            return `<span class="highlight">${britishToAmericanSpelling[word.toLowerCase()]}</span>`
        }

        if(britishOnly.hasOwnProperty(word.toLowerCase())){
            return `<span class="highlight">${britishOnly[word.toLowerCase()]}</span>`
        }
        // check if the word contains a time format
    
        const timeKeys = Object.keys(timeTranslations);
        const timeRegExp = new RegExp(`\\d{1,2}${timeKeys.join("|")}`, "g");
        if (timeRegExp.test(word)) {
            const time = word.replace(/[:.]/g, (match) => timeTranslations[match]);
            return `<span class="highlight">${time}</span>`
        }
    
            return word
    
        })
        let translatedText = translatedWords.join(' ')
        const matchingValue = this.getMatchingValue2(translatedText)
        if(matchingValue === null){
         return translatedText
        }else{
          
            return this.getMatchingValue2(text) 
        }
    }

    getMatchingValue2(text) {
        const lowerText = text.toLowerCase();
        for (const key in britishOnly) {
          if (lowerText.includes(key.toLowerCase())) {
            return britishOnly[key];
          }
        }
        return null; // Return null if no match is found
    }

    replaceMatchingWords2(text) {
  
      for (const key in britishOnly) {
        const regex = new RegExp(key, 'gi');
        const coloredText = `<span class="highlight">${britishOnly[key]}</span>`
        text = text.replace(regex, coloredText);
      }
      return text;
    }

    transformValuesToKeys(obj) {
        const transformedObj = {};
      
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            transformedObj[value] = key;
          }
        }
      
        return transformedObj;
      }
}

module.exports = Translator;