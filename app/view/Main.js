Ext.define('PolishGrammar.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',

    requires: [
        'PolishGrammar.view.Menu',
        'PolishGrammar.view.Cases',
        'PolishGrammar.view.Pronouns'

    ],

    config: {
        //autoDestroy: false,
        items: [
            {
                xtype: 'menu' 
            }
        ]
    }
});
