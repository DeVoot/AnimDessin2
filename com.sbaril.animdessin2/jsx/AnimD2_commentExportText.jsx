﻿#target photoshop 
//
// AnimD2T_commentExportText.jsx
//

//
// Generated Fri May 16 2014 13:28:51 GMT+0200
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
//==================== AnimD2T_commentExportText ==============
//
function AnimD2T_commentExportText() {
  // Select
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), sTID("exportTimelineCommentsAsText"));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };
  step1();      // Select
};



//=========================================
// AnimD2T_commentExportText.main
//=========================================
//

AnimD2T_commentExportText.main = function () {
  AnimD2T_commentExportText();
};

AnimD2T_commentExportText.main();
//app.activeDocument.suspendHistory("Export Timeline Comments as TEXT…", 'AnimD2T_commentExportText.main()');

// EOF

"AnimD2T_commentExportText.jsx"
// EOF
