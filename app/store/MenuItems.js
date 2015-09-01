Ext.define('PolishGrammar.store.MenuItems', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PolishGrammar.model.Menu',
        autoLoad: true,
        data : [
            
            {    "item": "Nouns", "description": "Rzeczowniki: Masculine, Feminine and Neuter"  },
            {    "item": "Cases", "description": "Przypadki: Polish has seven noun cases"                },
            {    "item": "Pronouns", "description": "Zaimki: ja, ty, on, ona..."                             },
            {    "item": "Adjectives", "description": "Przymiotniki: dobra, dobry, dobre"                           },
            {    "item": "Prepositions", "description": "Przyimki: na, po, o, w"                         },      
            {    "item": "Numbers", "description": "Liczebniki: raz, dwa, trzy"                              },
 //           {    "item": "Verbs", "description": "Verb conjugations"               },
            {    "item": "Conjunctions", "description": "Spójniki: and, but, either, or..."  },
            {    "item": "Alphabet", "description": "Alfabet: Polish has 32 letters"        },
            {    "item": "About", "description": "Andy Quinn"        }
        ]
    }
});
