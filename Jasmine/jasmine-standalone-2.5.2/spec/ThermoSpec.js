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

  describe('powerSave mode on default', function(){
    it('turns on powerSave mode when iniated', function(){
      thermo3000.powerSaveOn();
      expect(thermo3000.powerSaveisOn).toBe(true);
    });
  });

    describe('powerSave On max temp', function(){
      it('sets a max temp of 25C when PS is on', function(){
        thermo3000.powerSaveOn();
        expect(thermo3000.maxTemp).toBe(MAX_PS_TEMP);
      });
    });

    describe('powerSave Off max temp', function(){
      it('sets a max temp of 32C when PS is off', function(){
        thermo3000.powerSaveOff();
        expect(thermo3000.maxTemp).toBe(MAX_SYS_TEMP);
      });
    });

    describe('System Reset', function(){
      it('resets temperature to default of 20C', function(){
        thermo3000.reset();
        expect(thermo3000.temp).toBe(TEMP_DEFAULT);
      });
    });

    describe('Low-Usage Message', function(){
      it('gives Low-Usage message when temp set <18C', function(){
        thermo3000.temp = 17;
        expect(
          thermo3000.displayUsage()
        ).toBe('Low-Usage');
      });
    });

    describe('Medium-Usage Message', function(){
      it('gives Medium-Usage message when temp set <18C', function(){
        thermo3000.temp = 19;
        expect(
          thermo3000.displayUsage()
        ).toBe('Medium-Usage');
      });
    });

    describe('High-Usage Message', function(){
      it('gives High-Usage message when temp set <18C', function(){
        thermo3000.temp = 26;
        expect(
          thermo3000.displayUsage()
        ).toBe('High-Usage');
      });
    });

});
