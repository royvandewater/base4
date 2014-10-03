'use strict';

var b4decode, b4encode, lpad;

b4decode = function(base4data){
  var data, fragment, hexData, hexFragment;

  data = '';
  for (var i=0; i < base4data.length; i += 4){
    fragment    = base4data.slice(i, i+4).toString();
    hexData     = lpad(parseInt(fragment, 4).toString(16), 2);
    hexFragment = hexData[0] + hexData[1];
    data += String.fromCharCode(parseInt(hexFragment, 16));
  }
  return data;
};

b4encode = function(data){
  var hexdata, fragment;
  hexdata = new Buffer(data).toString('hex');

  return hexdata.split('').map(function(character){
    fragment = parseInt(character, 16).toString(4);
    return lpad(fragment, 2);
  }).join('');
};

lpad = function(string, length){
  if(string.length >= length){
    return string;
  }

  return lpad('0' + string, length);
};

module.exports = {
  b4decode: b4decode,
  b4encode: b4encode
};
