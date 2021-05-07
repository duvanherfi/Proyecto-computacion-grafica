

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function LightSet() {
    this.mSet = [];
}

LightSet.prototype.numLights = function () { return this.mSet.length; };

LightSet.prototype.getLightAt = function (index) {
    return this.mSet[index];
};

LightSet.prototype.addToSet = function (light) {
    this.mSet.push(light);
};