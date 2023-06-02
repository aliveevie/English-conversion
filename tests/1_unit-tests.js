const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator()

suite('Unit Tests', () => {
    suite('American To British', () => {
        test('Mangoes are my favorite fruit.', () => {
            let result = translator.americanTobritish('Mangoes are my favorite fruit.')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "Mangoes are my favourite fruit.")
        })
        test('I ate yogurt for breakfast.', () => {
            let result = translator.americanTobritish('I ate yogurt for breakfast.')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "I ate yoghurt for breakfast.")
        })
        test("we had a party at my friend's condo.", () => {
            let result = translator.americanTobritish("we had a party at my friend's flat.")
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "we had a party at my friend's flat.")
        })
        test('Can you toss this in the trashcan for me?', () => {
            let result = translator.americanTobritish('Can you toss this in the trashcan for me?')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "Can you toss this in the rubbishcan for me?")
        })
        test('The parking lot was full.', () => {
            let result = translator.americanTobritish('The parking lot was full.')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "The car park was full.")
        })
        test('Like a high tech Rube Goldberg machine.', () => {
            let result = translator.americanTobritish('Like a high tech Rube Goldberg machine.')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "Like a high tech Heath Robinson device.")
        })
        test('To play hooky means to skip class or work.', () => {
            let result = translator.americanTobritish('')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "")
        })
        test('No Mr. Bond, I expect you to die.', () => {
            let result = translator.americanTobritish('No Mr. Bond, I expect you to die.')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "No Mr Bond, I expect you to die.")
        })
        test('Dr. Grosh will see you now.', () => {
            let result = translator.americanTobritish('Dr. Grosh will see you now.')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "Dr Grosh will see you now.")
        })
        test('Lunch is at 12:15 today.', () => {
            let result = translator.americanTobritish('Lunch is at 12:15 today.')
            result = result.replace(/<span class="highlight">|<\/span>/g, '') 
            assert.equal(result, "Lunch is at 12.15 today.")
        })
    })

suite('British to American English', () => {
    test('We watched the footie match for a while.', () => {
        let result = translator.britishToAmerican('We watched the footie match for a while.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'We watched the soccer match for a while.')
    })
    test('Paracetamol takes up to an hour to work. Check It', () => {
        let result = translator.britishToAmerican('Paracetamol takes up to an hour to work.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'Tylenol')
    })
    test('First, caramelise the onions.', () => {
        let result = translator.britishToAmerican('First, caramelise the onions.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'First, caramelize the onions.')
    })
    test('I spent the bank holiday at the funfair.', () => {
        let result = translator.britishToAmerican('I spent the bank holiday at the funfair.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'public holiday')
    })
    test('I had a bicky then went to the chippy.', () => {
        let result = translator.britishToAmerican('I had a bicky then went to the chippy.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'cookie')
    })
    test("I've just got bits and bobs in my bum bag.", () => {
        let result = translator.britishToAmerican("I've just got bits and bobs in my bum bag.")
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'odds and ends')
    })
    test('The car boot sale at Boxted Airfield was called off.', () => {
        let result = translator.britishToAmerican('The car boot sale at Boxted Airfield was called off.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'swap meet')
    })
    test('Have you met Mrs Kalyani?', () => {
        let result = translator.britishToAmerican('Have you met Mrs Kalyani?')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'Have you met Mrs. Kalyani?')
    })
    test("Prof Joyner of King's College, London.", () => {
        let result = translator.britishToAmerican("Prof Joyner of King's College, London.")
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, "Prof. Joyner of King's College, London.")
    })
    test('Tea time is usually around 4 or 4.30.', () => {
        let result = translator.britishToAmerican('Tea time is usually around 4 or 4.30.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.equal(result, 'Tea time is usually around 4 or 4:30:')
    })
})
suite('Highlight Translation', () => {
    test('Mangoes are my favorite food', () => {
        let result = translator.americanTobritish('Mangoes are my favorite fruit.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.include(result, 'favourite')
    })
    test('yoghurt', () => {
        let result = translator.americanTobritish('I ate yogurt for breakfast.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.include(result, 'yoghurt')
    })
    test('We watched the footie match for a while.', () => {
        let result = translator.britishToAmerican('We watched the footie match for a while.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.include(result, 'soccer')
    })
    test('Paracetamol takes up to an hour to work.', () => {
        let result = translator.britishToAmerican('Paracetamol takes up to an hour to work.')
        result = result.replace(/<span class="highlight">|<\/span>/g, '')
        assert.include(result, 'Tylenol')
    })
})
});
