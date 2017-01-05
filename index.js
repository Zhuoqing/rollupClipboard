import * as Clipboard from 'clipboard';
var cb1 = new Clipboard.default('.btn');
document.getElementById("test1").innerText = 'I am replaced 1';
var cb2 = new Clipboard('.btn');
document.getElementById("test2").innerText = 'I am replaced 2';

