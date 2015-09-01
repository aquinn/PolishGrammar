Ext.define('PolishGrammar.store.PronounItems', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PolishGrammar.model.Pronoun',
        autoLoad: true,
        data : [
            
            {    "item": "Personal", "pronounPolish": "ja, ty, on, ona", "pronounEnglish" : "I, you, he, she"       },
            {    "item": "Questions", "pronounPolish": "co, kto, nikt", "pronounEnglish" : "what, who, nobody"        },
            {    "item": "Reflexive", "pronounPolish": "siebie, się", "pronounEnglish" : "oneself, myself"        },
            {    "item": "Possessive", "pronounPolish": "mój, twój, swój", "pronounEnglish" : "my, your, one's own"    },
            {    "item": "Demonstrative", "pronounPolish": "ten, który, jaki", "pronounEnglish" : "this, which, what"        },
            {    "item": "Same", "pronounPolish": "sam, sama, samo", "pronounEnglish" : "self, same, very"        },
            {    "item": "Each", "pronounPolish": "każdy, każda, każde", "pronounEnglish" : "each, every"        },
            {    "item": "Such", "pronounPolish": "taki, taka, takie", "pronounEnglish" : "so, such"        }

      

        ]
    }
});
