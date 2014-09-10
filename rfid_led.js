var tessel = require('tessel');

var rfidlib = require('rfid-pn532');

var rfid = rfidlib.use(tessel.port['A']); 

var led1 = tessel.led[0].output(1);

rfid.on('ready', function (version) {

  console.log('Ready to read RFID card');

  rfid.on('data', function(card) {
    
        // console.log('UID:', card.uid.toString('hex'));
      	led1.toggle();
      	// if (card.uid.toSTring('hex')=="xxxx") 
      	// 	{
      	// 		alert("test");
      	// 	};
        
  });
});

rfid.on('error', function (err) {

  console.error(err);

});