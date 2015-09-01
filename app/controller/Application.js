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
            cases: 'cases',
            pronouns: 'pronouns',
        },

        control: {

            main: {
                back: 'onBackClick'
            },
            menu: {
                itemtap: 'menuSelect'
            },
            cases: {
                itemtap: 'menuSelect'
            },
            pronouns: {
                itemtap: 'menuSelect'
            }
        }
    },


    menuSelect: function(list, index, node, record) {

        var item = record.get('item');
        console.log(item);

        if (!ENSURE_NO_DOUBLE_TAP(item)) {
            flag = null;
            return;
        } 

        flag = item; 

        if (item == 'Cases') {
            var caseList = Ext.create('PolishGrammar.view.Cases');
            this.getMain().push(caseList);
        } else if (item == 'Pronouns') {
            var pronounsList = Ext.create('PolishGrammar.view.Pronouns');
            this.getMain().push(pronounsList);
        }

        else {

            var url =  'resources/html/' + item + '.md.html';
            var panel = Ext.create('Ext.Panel', {
                title: item,
                xtype: 'panel',
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
    
    },

    onBackClick: function() {
        flag = null;
    }



});

function ENSURE_NO_DOUBLE_TAP(classNameToPush) {
    if(flag==classNameToPush) {
        return false;
    } 
    return true;
};


