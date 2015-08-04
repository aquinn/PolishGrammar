var flag = null;

Ext.define('PolishGrammar.controller.Application', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.Ajax'
        ],


    config: {
        
        refs: {
            main: 'main',
            menu: 'menu',
            nouns: 'nouns',
            cases: 'cases',
            nominative: 'nominative'
        },

        control: {
            menu: {
                itemtap: 'onMenuSelect'
            },
            main: {
                back: 'onBackClick'
            },
            cases: {
                itemtap: 'onCaseSelect'
            }
        }
    },




    onCaseSelect: function(list, index, node, record) {


        var caseItem = (list.getStore().getAt(index).data.caseItem);
       

        if (!ENSURE_NO_DOUBLE_TAP(caseItem)) {
            // means we've clicked it already
            flag = null;
            return;
        } 

        flag = caseItem; 

        var url =  'resources/html/' + caseItem + '.md.html';
        var panel = Ext.create('Ext.Panel', {
            title: caseItem,
            xtype: 'panel',
            itemId: 'caseView',
            fullscreen: 'true',
            layout: 'fit',
            styleHtmlContent: true,
            scrollable: 'vertical'
        });
        
        Ext.Ajax.request({
            url: url,
                success: function(response, opts) {
                    panel.setHtml(response.responseText);
            }
        });
        this.getMain().push(panel);

    
    },

    onBackClick: function() {
        flag = null;
    },

    onMenuSelect: function(list, index, node, record) {
        var item = (list.getStore().getAt(index).data.menuItem);

        if (!ENSURE_NO_DOUBLE_TAP(item)) {
            // means we've clicked it already
            flag = null;
            return;
        } 

        flag = item; 
        
        if (item == 'Cases') {
            var caseList = Ext.create('PolishGrammar.view.Cases');
            this.getMain().push(caseList);
        } else {
            var url =  'resources/html/' + item + '.md.html';
            var panel = Ext.create('Ext.Panel', {
                xtype: 'panel',
                title: item,
                itemId: 'menuView',
                fullscreen: 'true',
                layout: 'fit',
                styleHtmlContent: true,
                scrollable: 'vertical'
            });
            
            Ext.Ajax.request({
                url: url,
                    success: function(response, opts) {
                        panel.setHtml(response.responseText);
                }
            });
           
            this.getMain().push(panel);
        }
    }

});

function ENSURE_NO_DOUBLE_TAP(classNameToPush) {
    //console.log(flag, classNameToPush);
    if(flag==classNameToPush) {
        return false;
    } 
    return true;
};

