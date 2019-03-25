var getSent = function(question){
  var sent = prompt(question);
  var orig = sent;
  getLength(sent, orig);
};

var getLength = function(sent, orig){
    var length = sent.length;
    capitlize(length, sent, orig);
};

var capitlize = function(length, sent, orig){
  var last = sent.charAt(length - 1);
  var first = sent.charAt(0);
  last = last.toUpperCase();
  first = first.toUpperCase();
  split(first, last, sent, orig, length);
};

var split = function(first, last, sent, orig, length){
  sent = sent.slice(1);
  sent = sent.split("");
  sent = sent.reverse();
  sent = sent.join("");
  sent = sent.slice(1);
  sent = sent.split("");
  sent = sent.reverse();
  sent = sent.join("");
  printNorm(first, last, sent, orig, length);
};

var printNorm = function(first, last, sent, orig, length){
  var capitNorm = first + sent + last;
    alert(capitNorm);
    printBack(first, last, sent, orig, length);
};

var printBack = function(first, last, sent, orig, length){

  var capitBack = last + sent + first;

  alert(capitBack);
  letters(first, last, orig, length);
};

var letters = function(first, last, orig, length){
  var lttrs = last + first;
  alert(lttrs);
  var lttrs = orig + lttrs;
  alert(lttrs);
  middle(length, orig, lttrs);
};

var middle = function(length, orig, lttrs){
  var divis = parseInt(length/2);
  var letM = orig.charAt(divis);
  alert(letM);
  var finalSent = letM + lttrs;
  alert(finalSent);
  reverse(finalSent);
};

var reverse = function(finalSent){
  finalSent = finalSent.split("");
  finalSent = finalSent.reverse();
  finalSent = finalSent.join("");
  alert(finalSent);
};



getSent("Enter a sentence to capitalize the first and last letter: ");
