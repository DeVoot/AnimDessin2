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


function colorBlue() {

    // =======================================================
    var idsetd = charIDToTypeID( "setd" );
        var desc994 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref345 = new ActionReference();
            var idPrpr = charIDToTypeID( "Prpr" );
            var idLefx = charIDToTypeID( "Lefx" );
            ref345.putProperty( idPrpr, idLefx );
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref345.putEnumerated( idLyr, idOrdn, idTrgt );
        desc994.putReference( idnull, ref345 );
        var idT = charIDToTypeID( "T   " );
            var desc995 = new ActionDescriptor();
            var idScl = charIDToTypeID( "Scl " );
            var idPrc = charIDToTypeID( "#Prc" );
            desc995.putUnitDouble( idScl, idPrc, 100.000000 );
            var idSoFi = charIDToTypeID( "SoFi" );
                var desc996 = new ActionDescriptor();
                var idenab = charIDToTypeID( "enab" );
                desc996.putBoolean( idenab, true );
                var idMd = charIDToTypeID( "Md  " );
                var idBlnM = charIDToTypeID( "BlnM" );
                var idNrml = charIDToTypeID( "Nrml" );
                desc996.putEnumerated( idMd, idBlnM, idNrml );
                var idOpct = charIDToTypeID( "Opct" );
                var idPrc = charIDToTypeID( "#Prc" );
                desc996.putUnitDouble( idOpct, idPrc, 100.000000 );
                var idClr = charIDToTypeID( "Clr " );
                    var desc997 = new ActionDescriptor();
                    var idRd = charIDToTypeID( "Rd  " );
                    desc997.putDouble( idRd, 0.003891 );
                    var idGrn = charIDToTypeID( "Grn " );
                    desc997.putDouble( idGrn, 6.019455 );
                    var idBl = charIDToTypeID( "Bl  " );
                    desc997.putDouble( idBl, 255.000000 );
                var idRGBC = charIDToTypeID( "RGBC" );
                desc996.putObject( idClr, idRGBC, desc997 );
            var idSoFi = charIDToTypeID( "SoFi" );
            desc995.putObject( idSoFi, idSoFi, desc996 );
        var idLefx = charIDToTypeID( "Lefx" );
        desc994.putObject( idT, idLefx, desc995 );
    executeAction( idsetd, desc994, DialogModes.NO );

    // =======================================================
    var idsetd = charIDToTypeID( "setd" );
        var desc24 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref18 = new ActionReference();
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idTrgt = charIDToTypeID( "Trgt" );
            ref18.putEnumerated( idLyr, idOrdn, idTrgt );
        desc24.putReference( idnull, ref18 );
        var idT = charIDToTypeID( "T   " );
            var desc25 = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );
            var idClr = charIDToTypeID( "Clr " );
            var idBl = charIDToTypeID( "Bl  " );
            desc25.putEnumerated( idClr, idClr, idBl );
        var idLyr = charIDToTypeID( "Lyr " );
        desc24.putObject( idT, idLyr, desc25 );
    executeAction( idsetd, desc24, DialogModes.NO );

};



//=========================================
//                    colorBlue.main
//=========================================
//

function setColorBlue() {
    var selectedLayers = getSelectedLayersAMIdx(docRef);
    var selFromStart = selectedLayers;
    layerInfo = getLayerInfo(selectedLayers)

    for (var i = 0; i < layerInfo.length; i++) {
        docRef.activeLayer = docRef.layers[layerInfo[i].name];
        colorBlue();
    }
    // reselect selected like from start
    for (var i = 0; i < layerInfo.length; i++) {
        selLyr(selFromStart[i],1);
    }
}

colorBlue.main = function () {
  setColorBlue();
};

app.activeDocument.suspendHistory("Colorize the Video Frame in Blue", 'colorBlue.main()');