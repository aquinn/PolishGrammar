Ext.define('PolishGrammar.view.Cases', {
    extend: 'Ext.List',
    xtype: 'cases',

    requires: [
    	'PolishGrammar.store.CaseItems'
    ],

    config: {
        disableSelection: true,
        title: 'Cases',
        cls: 'x-casesDisplay',
        store: 'CaseItems',
        
        itemTpl: [
           '{item}',
           '<span>{polish} : {usage}</span>'
        ].join('')
    }
});
