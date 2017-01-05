import * as Clipboard from 'clipboard';
try {
  var cb1 = new Clipboard.default('.btn');
  document.getElementById("test1").innerText = 'I am replaced 1';
}
catch (err) {	
  console.error(err);
  document.getElementById("err1").innerText = err.toString();
}

try {
  var cb2 = new Clipboard('.btn');
  document.getElementById("test2").innerText = 'I am replaced 2';
}
catch (err) {	
  console.error(err);
  document.getElementById("err2").innerText = err.toString();
}
