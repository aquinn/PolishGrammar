Ext.define('PolishGrammar.view.Pronouns', {
    extend: 'Ext.List',
    xtype: 'pronouns',

    requires: [
    	'PolishGrammar.store.PronounItems'
    ],

    config: {
        disableSelection: true,
        title: 'Pronouns',
        cls: 'x-pronounDisplay',
        store: 'PronounItems',
        
        itemTpl: [
           '{item}',
           '<span>{pronounPolish} : {pronounEnglish}</span>'
        ].join('')
    }
});
