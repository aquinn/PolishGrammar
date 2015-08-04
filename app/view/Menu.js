Ext.define('PolishGrammar.view.Menu', {
    extend: 'Ext.List',
    xtype: 'menu',

    requires: [
    	'PolishGrammar.store.MenuItems'
    ],

    config: {
        disableSelection: true,
        title: 'Polish Grammar',
        cls: 'x-menuDisplay',
        store: 'MenuItems',
        
        itemTpl: [
            '{menuItem}',
            '<span>{description}</span>'
        ].join('')
    },


});


