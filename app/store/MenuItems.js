Ext.define('PolishGrammar.store.MenuItems', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PolishGrammar.model.Menu',
        autoLoad: true,
        data : [
            
            {    "menuItem": "Nouns", "description": "Rzeczowniki: Masculine, Feminine and Neuter"  },
            {    "menuItem": "Cases", "description": "Przypadki: Polish has seven noun cases"                },
            {    "menuItem": "Pronouns", "description": "Zaimki: ja, ty, on, ona..."                             },
            {    "menuItem": "Adjectives", "description": "Przymiotniki: dobra, dobry, dobre"                           },
            {    "menuItem": "Prepositions", "description": "Przyimki: na, po, o, w"                         },      
            {    "menuItem": "Numbers", "description": "Liczebniki: raz, dwa, trzy"                              },
 //           {    "menuItem": "Verbs", "description": "Verb conjugations"               },
            {    "menuItem": "Conjunctions", "description": "Spójniki: and, but, either, or..."  },
            {    "menuItem": "Alphabet", "description": "Alfabet: Polish has 32 letters"        },
            {    "menuItem": "About", "description": "Andy Quinn"        }
        ]
    }
});
