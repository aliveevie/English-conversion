'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body
      let translatedText;
      if(text === ''){
        res.json({ error: 'No text to translate' })
        return
      }
      if(!text || !locale){
        res.json({ error: 'Required field(s) missing' })
        return
      }
     
      if(locale === 'british-to-american'){
      translatedText = translator.britishToAmerican(text)
    }else if(locale === 'american-to-british'){
      translatedText = translator.americanTobritish(text)
     
    }else{
      res.json({ error: 'Invalid value for locale field' })
      return
    }

    if(translatedText == text || !translatedText){
      res.json({text:text, translation:"Everything looks good to me!"})
    }else{
      res.json({text:text, translation:translatedText})
    }

    
      
    });
};
