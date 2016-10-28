var TEMP_DEFAULT = 20;
var MIN_SYS_TEMP = 10;
var MAX_PS_TEMP = 25;
var MAX_SYS_TEMP = 32;

function Thermostat() {
  this.temp = TEMP_DEFAULT;
  this.powerSaveisOn = true;
}

Thermostat.prototype.tempUp = function () {
  this.temp ++;
};

Thermostat.prototype.tempDown = function () {
  if (this.temp > MIN_SYS_TEMP) { this.temp --;
  } else {
      throw ('That\'s too cold shawty');
    }
};

Thermostat.prototype.powerSaveOn = function () {
  this.powerSaveisOn = true;
  this.maxTemp = MAX_PS_TEMP;
    };

Thermostat.prototype.powerSaveOff = function () {
  this.powerSaveisOn = false;
  this.maxTemp = MAX_SYS_TEMP;
};

Thermostat.prototype.reset = function () {
  this.temp = TEMP_DEFAULT;
};

Thermostat.prototype.displayUsage = function () {
  if (this.temp <18) {
    return 'Low-Usage';
  } else if (this.temp >25) {
    return 'High-Usage';
  } else {
    return 'Medium-Usage';
  }
};
