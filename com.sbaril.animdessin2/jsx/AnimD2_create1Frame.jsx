﻿// Copyright 2013
// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril
// Modified on Mach 2014 by Clunkid (https://vimeo.com/clunkid)

// enable double clicking from the Finder or Explorer
#target photoshop;

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


function createTwoFrames() {

    // =======================================================
    var idMk = charIDToTypeID( "Mk  " );
    var desc13 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref7 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    ref7.putClass( idLyr );
    desc13.putReference( idnull, ref7 );
    executeAction( idMk, desc13, DialogModes.NO );

    // =======================================================
    // Reduze the end of the layer to the actual frame
    var idmoveOutTime = stringIDToTypeID( "moveOutTime" );
    var desc99 = new ActionDescriptor();
    executeAction( idmoveOutTime, desc99, DialogModes.NO );


    // =======================================================
    // Function to get the framerate of the actual documment
    function GetFrameRate(){
        var ref = new ActionReference();
        ref.putProperty( charIDToTypeID( 'Prpr' ), stringIDToTypeID("documentTimelineSettings") );
        ref.putClass( stringIDToTypeID( "timeline" ) );
        var desc = new ActionDescriptor();
        desc.putReference( charIDToTypeID( 'null' ), ref );
        var resultDesc = executeAction( charIDToTypeID( 'getd' ), desc, DialogModes.NO );

        return resultDesc.getDouble( stringIDToTypeID('frameRate') );
    };

    var idmoveOutTime = stringIDToTypeID( "moveOutTime" );
    var desc123 = new ActionDescriptor();
    var idtimeOffset = stringIDToTypeID( "timeOffset" );
    var desc124 = new ActionDescriptor();
    var idseconds = stringIDToTypeID( "seconds" );
    desc124.putInteger( idseconds, 0 );
    var idframe = stringIDToTypeID( "frame" );
    desc124.putInteger( idframe, 0 );  // Value 0=1; 1=2 …
    var idframeRate = stringIDToTypeID( "frameRate" );
    desc124.putDouble( idframeRate, GetFrameRate() );
    var idtimecode = stringIDToTypeID( "timecode" );
    desc123.putObject( idtimeOffset, idtimecode, desc124 );
    executeAction( idmoveOutTime, desc123, DialogModes.NO );


     // =======================================================
    var idnextFrame = stringIDToTypeID( "nextFrame" );
    var desc211 = new ActionDescriptor();
    var idtoNextWholeSecond = stringIDToTypeID( "toNextWholeSecond" );
    desc211.putBoolean( idtoNextWholeSecond, false );
    executeAction( idnextFrame, desc211, DialogModes.NO );

};

//=========================================
// createTwoFrames.main
//=========================================
//

createTwoFrames.main = function () {
  createTwoFrames();
};

app.activeDocument.suspendHistory("Create a keyframe visible on 1 frame", 'createTwoFrames.main()');