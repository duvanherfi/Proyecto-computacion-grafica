"use strict"; // Operate in Strict mode such that variables must be declared before used!

var gEngine = gEngine || {};
// initialize the variable while ensuring it is not redefined

gEngine.Core = (function () {
  // instance variables
  // The graphical context to draw to
  var mGL = null;

  // initialize the WebGL, the vertex buffer and compile the shaders
  var _initializeWebGL = function (htmlCanvasID) {
    var canvas = document.getElementById(htmlCanvasID);

    // Get the standard or experimental webgl and binds to the Canvas area
    // store the results to the instance variable mGL
    mGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (mGL === null) {
      document.write("<br><b>WebGL is not supported!</b>");
      return;
    }
  };

  //**----------------------------
  // Public methods:
  //**-----------------------------
  //
  // Accessor of the webgl context
  var getGL = function () {
    return mGL;
  };

  var startScene = function (scene) {
    scene.loadScene.call(scene); // Called in this way to keep correct context
    gEngine.GameLoop.start(scene); // will wait until async loading is done and call scene.initialize()
  };

  // initialize all of the EngineCore components
  var initializeEngineCore = function (htmlCanvasID, myGame) {
    _initializeWebGL(htmlCanvasID);
    gEngine.VertexBuffer.initialize();
    gEngine.Input.initialize();

    // Inits DefaultResources, when done, invoke the anonymous function to call startScene(myGame).
    gEngine.DefaultResources.initialize(function () {
      startScene(myGame);
    });
  };

  // Clears the draw area and draws one square
  var clearCanvas = function (color) {
    mGL.clearColor(color[0], color[1], color[2], color[3]); // set the color to be cleared
    mGL.clear(mGL.COLOR_BUFFER_BIT); // clear to the color previously set
  };

  var inheritPrototype = function (subClass, superClass) {
    var prototype = Object.create(superClass.prototype);
    prototype.constructor = subClass;
    subClass.prototype = prototype;
  };
  // -- end of public methods

  var mPublic = {
    getGL: getGL,
    initializeEngineCore: initializeEngineCore,
    clearCanvas: clearCanvas,
    inheritPrototype: inheritPrototype,
    startScene: startScene,
  };

  return mPublic;
})();