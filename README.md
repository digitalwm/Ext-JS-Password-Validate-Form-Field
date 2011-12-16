# About.
 It is a Ext JS extension that will provide a double password field for new password validation for standard forms. It has some customisation possible

# How to use it?
 Download the Ext.ux.PasswordValidator.js, include it into the HEAD of your page (After the Ext JS inclusion). For more details please have a look at the demo.html

# Screenshot?
 [ Flickr ] (http://www.flickr.com/photos/harabagiu_dan/6515876139/)

# Configuration?

    {
        //Standard options
        fieldLabel	:	'New password',
	    name		:	'password',
	    anchor		:	'100%',
    	xtype		:	'passwordValidator',
	    //Custom options
	    errorMessage:	"Custome error message",
    }

# Explenations?

* _errorMessage_ : The text displayed when the passwords don't match

# Does it work?

 I have tested it on Chrome, Firefox 9, IE 8, IE 7 and IE 9

# Enjoy it, and drop me a line if you like it