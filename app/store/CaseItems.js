Ext.define('PolishGrammar.store.CaseItems', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PolishGrammar.model.Case',
        autoLoad: true,
        data : [
            
            {    "item": "Nominative", "polish": "Mianownik", "usage": "co, kto"        },
            {    "item": "Genitive", "polish": "Dopełniacz","usage": "czego, kogo"      },
            {    "item": "Dative", "polish": "celownik","usage": "czemu, komu"          },
            {    "item": "Accusative", "polish": "biernik","usage": "co, kogo"          },
            {    "item": "Instrumental", "polish": "narzędnik","usage": "czym, kim"     },      
            {    "item": "Locative", "polish": "miejscownik","usage": "o czym, o kim"   },
            {    "item": "Vocative", "polish": "wołacz","usage": "!"                    }
        ]
    }
});
