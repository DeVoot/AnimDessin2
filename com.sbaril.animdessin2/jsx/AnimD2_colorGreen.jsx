﻿// Copyright 2013
// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril

// enable double clicking from the Finder or Explorer
#target photoshop

//Make Photoshop the front most application
app.bringToFront();
docRef = app.activeDocument;
///////////////////////////////////////////////////
// SETUP
///////////////////////////////////////////////////

var ScriptFilePath = Folder($.fileName).parent.fsName ; 
$.evalFile(new File(ScriptFilePath + '/AnimD2_getSelectedLayers.jsx'));

///////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//FUNCTIONS
///////////////////////////////////////////////////


function colorGreen() {

    // =======================================================
    var idsetd = charIDToTypeID( "setd" );
        var desc999 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref347 = new ActionReference();
            var idPrpr = charIDToTypeID( "Prpr" );
            var idLefx = charIDToTypeID( "Lefx" );
            ref347.putProperty( idPrpr, idLefx );
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref347.putEnumerated( idLyr, idOrdn, idTrgt );
        desc999.putReference( idnull, ref347 );
        var idT = charIDToTypeID( "T   " );
            var desc1000 = new ActionDescriptor();
            var idScl = charIDToTypeID( "Scl " );
            var idPrc = charIDToTypeID( "#Prc" );
            desc1000.putUnitDouble( idScl, idPrc, 100.000000 );
            var idSoFi = charIDToTypeID( "SoFi" );
                var desc1001 = new ActionDescriptor();
                var idenab = charIDToTypeID( "enab" );
                desc1001.putBoolean( idenab, true );
                var idMd = charIDToTypeID( "Md  " );
                var idBlnM = charIDToTypeID( "BlnM" );
                var idNrml = charIDToTypeID( "Nrml" );
                desc1001.putEnumerated( idMd, idBlnM, idNrml );
                var idOpct = charIDToTypeID( "Opct" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc1001.putUnitDouble( idOpct, idPrc, 100.000000 );
                var idClr = charIDToTypeID( "Clr " );
                    var desc1002 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc1002.putDouble( idRd, 2.474708 );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc1002.putDouble( idGrn, 210.000003 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc1002.putDouble( idBl, 65.945522 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc1001.putObject( idClr, idRGBC, desc1002 );
            var idSoFi = charIDToTypeID( "SoFi" );
            desc1000.putObject( idSoFi, idSoFi, desc1001 );
        var idLefx = charIDToTypeID( "Lefx" );
        desc999.putObject( idT, idLefx, desc1000 );
    executeAction( idsetd, desc999, DialogModes.NO );

    // =======================================================
    var idsetd = charIDToTypeID( "setd" );
        var desc14 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref10 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref10.putEnumerated( idLyr, idOrdn, idTrgt );
        desc14.putReference( idnull, ref10 );
        var idT = charIDToTypeID( "T   " );
            var desc15 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
            var idClr = charIDToTypeID( "Clr " );
            var idGrn = charIDToTypeID( "Grn " );
            desc15.putEnumerated( idClr, idClr, idGrn );
        var idLyr = charIDToTypeID( "Lyr " );
        desc14.putObject( idT, idLyr, desc15 );
    executeAction( idsetd, desc14, DialogModes.NO );

};
//=========================================
//                    colorGreen.main
//=========================================
//

function setColorGreen() {
    var selectedLayers = getSelectedLayersAMIdx(docRef);
    var selFromStart = selectedLayers;
    layerInfo = getLayerInfo(selectedLayers)

    for (var i = 0; i < layerInfo.length; i++) {
        docRef.activeLayer = docRef.layers[layerInfo[i].name];
        colorGreen();
    }
    // reselect selected like from start
    for (var i = 0; i < layerInfo.length; i++) {
        selLyr(selFromStart[i],1);
    }
}

colorGreen.main = function () {
  setColorGreen();
};

app.activeDocument.suspendHistory("Colorize the Video Frame in Green", 'colorGreen.main()');