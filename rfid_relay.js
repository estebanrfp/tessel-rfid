var tessel = require('tessel');
var rfidlib = require('rfid-pn532');
var relaylib = require('relay-mono');

var rfid = rfidlib.use(tessel.port['A']); 
var relay = require('relay-mono').use(tessel.port['C']);

var led1 = tessel.led[0].output(1);

rfid.on('ready', function (version) {
  console.log('Ready to read RFID card');

  rfid.on('data', function(card) {
    

      // if(card.uid.toString('hex') == '6a1f694d')
      // {
        console.log('UID:', card.uid.toString('hex'));
      	led1.toggle();
    	  relay.toggle(1);
    
      // }


  });
});

rfid.on('error', function (err) {
  console.error(err);
});