'use strict';

var b4decode, b4encode;

b4decode = function(base4data){
  var hexdata = parseInt(base4data, 4).toString(16);

  var data = '';
  for(var i=0; i < hexdata.length; i += 2) {
    var fragment = hexdata[i] + hexdata[i+1];
    data += String.fromCharCode(parseInt(fragment, 16));
  }
  return data;
};

b4encode = function(data){
  var hexdata = new Buffer(data).toString('hex');
  return parseInt(hexdata, 16).toString(4);
};

module.exports = {
  b4decode: b4decode,
  b4encode: b4encode
};
