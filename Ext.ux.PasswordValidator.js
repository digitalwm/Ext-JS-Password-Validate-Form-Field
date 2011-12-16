/*!
 * Ext.ux.PasswordValidator
 * 
 * Copyright 2011, Dan Harabagiu
 * Licenced under the Apache License Version 2.0
 * See LICENSE
 *
 * 
 * Version : 0.1 - Initial coding
 */
/*global Ext : false, */


Ext.define('Ext.ux.PasswordValidator', {
    extend		:	'Ext.form.TextField',
    alias		:	'widget.passwordValidator',    
    requires	:	['Ext.form.field.VTypes', 'Ext.layout.component.field.Text'],
    inputType	:	'password',
    //Configurable parameters
    errorMessage:   "Passwords don't match",
	/**
	 * Initialisez the elements and renders them
	 * @param {Ext.Component} The component itself
	 * @param {Object} The options object
	 * @return nothing
	 * Private Function
	 */
	onRender: function(ct, position) {
		Ext.ux.PasswordValidator.superclass.onRender.call(this, ct, position);
		
		this.inputElValidate = this.inputEl.dom.cloneNode(true);
        this.inputElValidate.id = Ext.id();
        this.inputElValidate = new Ext.Element(this.inputElValidate);
        var parentClass = this.inputEl.getAttribute('class');
        this.inputElValidate.set({'class': parentClass}, true);
        this.bodyEl.appendChild(this.inputElValidate);        
	},
    validator : function(stringValue) {               
        if(stringValue !== this.inputElValidate.getValue()) 
            return this.errorMessage;
        else
            return true;
    },
    /**
	 * Initialise event listeners
	 * @return nothing
	 * Private function
	 */
	initEvents: function() {
		Ext.ux.PasswordValidator.superclass.initEvents.call(this);

        this.inputElValidate.on('keyup', this.validate, this);
        this.inputElValidate.on('focus', this.validateSetFocus, this);
        this.inputElValidate.on('blur', this.validateLostFocus, this);
        this.inputEl.on('DOMAttrModified', this.inputResized, this);
        this.inputEl.on('resize', this.inputResized, this);
	},
    inputResized : function() {
        this.inputElValidate.setWidth(this.inputEl.getWidth());
    },
    validateSetFocus : function() {
        this.inputElValidate.addCls("x-form-focus");
    },
    validateLostFocus : function() {
        this.inputElValidate.removeCls("x-form-focus");
    }
});