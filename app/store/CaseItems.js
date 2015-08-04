Ext.define('PolishGrammar.store.CaseItems', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PolishGrammar.model.Cases',
        autoLoad: true,
        data : [
            
            {    "caseItem": "Nominative", "polish": "Mianownik", "usage": "co, kto"        },
            {    "caseItem": "Genitive", "polish": "Dopełniacz","usage": "czego, kogo"      },
            {    "caseItem": "Dative", "polish": "celownik","usage": "czemu, komu"          },
            {    "caseItem": "Accusative", "polish": "biernik","usage": "co, kogo"          },
            {    "caseItem": "Instrumental", "polish": "narzędnik","usage": "czym, kim"     },      
            {    "caseItem": "Locative", "polish": "miejscownik","usage": "o czym, o kim"   },
            {    "caseItem": "Vocative", "polish": "wołacz","usage": "!"                    }
        ]
    }
});
