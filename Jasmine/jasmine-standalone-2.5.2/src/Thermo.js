var TEMP_DEFAULT = 20;
var MIN_TEMP = 10;
var MAX_PS_TEMP = 25;

function Thermostat() {
  this.temp = TEMP_DEFAULT;
}

Thermostat.prototype.tempUp = function () {
  this.temp ++;
};

Thermostat.prototype.tempDown = function () {
  if (this.temp > MIN_TEMP) { this.temp --;
  } else {
      throw ('That\'s too cold shawty');
    }
};

Thermostat.prototype.powerSave = function () {
  this.
};
