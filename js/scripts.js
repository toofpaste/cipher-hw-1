var getSent = function(question){
  var sent = prompt(question);
  var length = sent.length;
  var last = sent.charAt(length - 1);
  var first = sent.charAt(0);
  last = last.toUpperCase();
  first = first.toUpperCase();
  sent = sent.slice(1);
  sent = sent.split("");
  sent = sent.reverse();
  sent = sent.join("");
  sent = sent.slice(1);
  sent = sent.split("");
  sent = sent.reverse();
  sent = sent.join("");
  alert(first + sent + last);
  return sent;
};

var save = getSent("Enter a sentence to capitalize the first and last letter: ");
