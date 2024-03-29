"use strict";  // Operate in Strict mode such that variables must be declared before used!


function IllumRenderable(myTexture, myNormalMap) {
    LightRenderable.call(this, myTexture);
    Renderable.prototype._setShader.call(this, gEngine.DefaultResources.getIllumShader());

    // here is the normal map resource id
    this.mNormalMap = myNormalMap;

    // Normal map texture coordinate will reproduce the corresponding sprite sheet
    // This means, the normal map MUST be based on the sprite sheet
}
gEngine.Core.inheritPrototype(IllumRenderable, LightRenderable);

//<editor-fold desc="Public Methods">
//**-----------------------------------------
// Public methods
//**-----------------------------------------
IllumRenderable.prototype.draw = function (aCamera) {
    gEngine.Textures.activateNormalMap(this.mNormalMap);
            // Here thenormal map texture coordinate is copied from those of 
            // the corresponding sprite sheet
    LightRenderable.prototype.draw.call(this, aCamera);
};

//--- end of Public Methods

//</editor-fold>