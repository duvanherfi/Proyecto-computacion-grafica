

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Renderable() {
    this.mShader = gEngine.DefaultResources.getConstColorShader();  // this is the default
    this.mXform = new Transform(); // transform that moves this object around
    this.mColor = [1, 1, 1, 1];    // color of pixel
}

//<editor-fold desc="Public Methods">
//**-----------------------------------------
// Public methods
//**-----------------------------------------
Renderable.prototype.draw = function (vpMatrix) {
    var gl = gEngine.Core.getGL();
    this.mShader.activateShader(this.mColor, vpMatrix);  // always activate the shader first!
    this.mShader.loadObjectTransform(this.mXform.getXform());
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};

Renderable.prototype.getXform = function () { return this.mXform; };
Renderable.prototype.setColor = function (color) { this.mColor = color; };
Renderable.prototype.getColor = function () { return this.mColor; };
//--- end of Public Methods
//</editor-fold>

Renderable.prototype._setShader = function (s) { this.mShader = s; };