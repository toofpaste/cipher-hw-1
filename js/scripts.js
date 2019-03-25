var getSent = function(question){
  var sent = prompt(question);
  getLength(sent);
};

var getLength = function(sent){
    var length = sent.length;
    capitlize(length, sent);
};

var capitlize = function(length, sent){
  var last = sent.charAt(length - 1);
  var first = sent.charAt(0);
  last = last.toUpperCase();
  first = first.toUpperCase();
  split(first, last, sent);
};

var split = function(first, last, sent){
  sent = sent.slice(1);
  sent = sent.split("");
  sent = sent.reverse();
  sent = sent.join("");
  sent = sent.slice(1);
  sent = sent.split("");
  sent = sent.reverse();
  sent = sent.join("");
  printNorm(first, last, sent);
};

var printNorm = function(first, last, sent){
  var capitNorm = first + sent + last;
    alert(capitNorm);
    printBack(first, last, sent);
};

var printBack = function(first, last, sent){

  var capitBack = last + sent + first;

  alert(capitBack);
};


getSent("Enter a sentence to capitalize the first and last letter: ");
