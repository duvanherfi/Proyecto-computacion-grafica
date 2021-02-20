"use strict"; // Operate in Strict mode
var gEngine = gEngine || {};
// initialize the variable while ensuring it is not redefined
gEngine.Core = (function () {
  // instance variable: the graphical context for drawing
  var mGL = null;
  // Accessor of the webgl context
  var getGL = function () {
    return mGL;
  };
  // Contains the functions and variables that will be accessible.
  
  var initializeWebGL = function (htmlCanvasID) {
    var canvas = document.getElementById(htmlCanvasID);
    // Get the standard or experimental webgl and binds to the Canvas area
    // store the results to the instance variable mGL
    mGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (mGL === null) {
      document.write("<br><b>WebGL is not supported!</b>");
      return;
    }
    // now initialize the VertexBuffer
    gEngine.VertexBuffer.initialize();
  };

  // Clears the draw area and draws one square
  var clearCanvas = function (color) {
    mGL.clearColor(color[0], color[1], color[2], color[3]); // set the color to be cleared
    mGL.clear(mGL.COLOR_BUFFER_BIT); // clear to the color previously set
  };

  var mPublic = {
    getGL: getGL,
    initializeWebGL: initializeWebGL,
    clearCanvas: clearCanvas
  };

  return mPublic;
})();
