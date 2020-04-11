﻿// Copyright 2013 
// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril

// Updated 2020
// Modified on April 2020 by Rombout (https://https://github.com/schroef/AnimDessin2)

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

function inBetweenNext() {

    // =======================================================
    var idmove = charIDToTypeID( "move" );
    var desc10 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref7 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref7.putEnumerated( idLyr, idOrdn, idTrgt );
    desc10.putReference( idnull, ref7 );
    var idT = charIDToTypeID( "T   " );
    var ref8 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNxt = charIDToTypeID( "Nxt " );
    ref8.putEnumerated( idLyr, idOrdn, idNxt );
    desc10.putReference( idT, ref8 );
    executeAction( idmove, desc10, DialogModes.NO );

     // =======================================================
    var idnextFrame = stringIDToTypeID( "nextFrame" );
    var desc43 = new ActionDescriptor();
    var idtoNextWholeSecond = stringIDToTypeID( "toNextWholeSecond" );
    desc43.putBoolean( idtoNextWholeSecond, false );
    executeAction( idnextFrame, desc43, DialogModes.NO );

};

//=========================================
// inBetweenNext.main
//=========================================
//

inBetweenNext.main = function () {
  inBetweenNext();
};

app.activeDocument.suspendHistory("Move the InBetween in Next position", 'inBetweenNext.main()');