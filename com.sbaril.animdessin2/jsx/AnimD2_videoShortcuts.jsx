﻿// Copyright 2013 
// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril

// enable double clicking from the Finder or Explorer
#target photoshop

//Make Photoshop the front most application
app.bringToFront();

///////////////////////////////////////////////////
// SETUP
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//FUNCTIONS
///////////////////////////////////////////////////


function videoShortcuts() {

    ErrStrs = {};
    ErrStrs.USER_CANCELLED=localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation"); 
    try {
        var idslct = charIDToTypeID( 'slct' );
        var desc445 = new ActionDescriptor();
        var idnull = charIDToTypeID( 'null' );
        var ref386 = new ActionReference();
        var idMnspsp = charIDToTypeID( 'Mn  ' );
        var idMnIt = charIDToTypeID( 'MnIt' );
        var idtimelineEnableShortcutKeys = stringIDToTypeID( 'timelineEnableShortcutKeys' );
        ref386.putEnumerated( idMnspsp, idMnIt, idtimelineEnableShortcutKeys );
        desc445.putReference( idnull, ref386 ); executeAction( idslct, desc445, DialogModes.ALL ); 
    } 
    catch(e){
        if (e.toString().indexOf(ErrStrs.USER_CANCELLED)!=-1) {;} 
        else{alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}
    }

};
//=========================================
// videoShortcuts.main
//=========================================
//

videoShortcuts.main = function () {
  videoShortcuts();
};

//app.activeDocument.suspendHistory("Use timline video shortcuts", 'videoShortcuts.main()');
videoShortcuts.main();