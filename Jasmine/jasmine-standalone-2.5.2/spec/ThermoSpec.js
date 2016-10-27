describe('Thermostat', function() {

  var thermostat;

  beforeEach (function(){
    thermo3000 = new Thermostat();
  });

  describe('Starting Temperature', function(){
    it('has a starting Temperature of 20C degrees', function(){
      expect(thermo3000.temp).toBe(TEMP_DEFAULT);
    });
  });

  describe('Increasing temp', function(){
    it('increases temp by 1C', function(){
      thermo3000.tempUp();
      expect(thermo3000.temp).toBe(TEMP_DEFAULT + 1);
    });
  });

  describe('Decreasing temp', function(){
    it('decreases temp by 1C', function(){
      thermo3000.tempDown();
      expect(thermo3000.temp).toBe(TEMP_DEFAULT - 1);
    });
  });

  describe('System minimum temp', function(){
    it('cannot go lower than 10C', function(){
      thermo3000.temp = 10;
      expect(function() {
        thermo3000.tempDown();
      }).toThrow('That\'s too cold shawty');
    });
  });

  describe('powerSave max temp', function(){
    it('sets a max temp of 25C when PS is on', function(){
      thermo3000.powerSave();
      expect(thermo3000.MAX_PS_TEMP).toBe(25);
    });
  });
});
