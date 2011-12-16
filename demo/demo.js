/*global Ext : false*/
function createForm() {
    var form = Ext.create('Ext.form.Panel', {
		layout			:	'anchor',
		frame			:	true,
		defaultType		:	'textfield',
		bodyStyle		:	'padding: 16px',
		labelWidth		:	126,
		defaults		:	{
			msgTarget	:	'side'
		},
		items			:	[
		    {
				fieldLabel	:	'Name',
				name		:	'name',
				allowBlank	:	false,
				emptyText	:	'',
				anchor		:	'100%'
		    },
		    {
				fieldLabel	:	'Password',
				name		:	'password',
				xtype		:	'passwordValidator',
				anchor		:	'100%',
				allowBlank	:	true
		    }
		],
	    buttons: [{
	        text: 'Save changes',
	        handler: function() {
	            var form = this.up('form').getForm();
	            if (form.isValid()) {
					form.submit();
	            }
	        }
	    }]
	});
	return form;
}

function createWindow() {
	if(!Ext.getCmp("newWindow")) {
		var newForm  = createForm();
		var newWindow = Ext.create('Ext.window.Window', {
			id		:	'newWindow',
			title	:	'Test Password Validator',
			layout	:	'fit',
			items	:	[ newForm ]
		});
		newWindow.show();
	}
}

Ext.onReady(function() {
	createWindow();
});