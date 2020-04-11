// Updated 2020
// Modified on April 2020 by Rombout (https://https://github.com/schroef/AnimDessin2)

#target photoshop
//
// AnimD2T_deleteFrame.jsx
//

//
// Generated Thu May 15 2014 11:48:47 GMT+0200
//

cTID = function(s) {
    return app.charIDToTypeID(s);
};
sTID = function(s) {
    return app.stringIDToTypeID(s);
};

//
//==================== AnimD2_deleteFrame ==============
//
function AnimD2_deleteFrame() {
    // Delete
    function step1(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };
    step1(); // Delete
};


//=========================================
// AnimD2_deleteFrame.main
//=========================================
//

AnimD2_deleteFrame.main = function() {
    AnimD2_deleteFrame();
};

app.activeDocument.suspendHistory("Deleta frame/layer", 'AnimD2_deleteFrame.main()');

// EOF

"AnimD2T_deleteFrame.jsx"
// EOF