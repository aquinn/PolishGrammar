Ext.define('PolishGrammar.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',

    requires: [
        'PolishGrammar.view.Menu',
        'PolishGrammar.view.Cases',

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
