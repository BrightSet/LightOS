function toJavascript(fl) {
  var conv = fl;
  conv = fl.replace(/begin/g, "function main(args) {")
  conv = conv.replace(/end/g,"}");
  funcPatt = /function \w+\((?:\w+)?\)/g;
  funcRes = funcPatt.exec(conv);
  conv = conv.replace(funcRes,funcRes + " {");
  conv = conv.replace("function main(args) { {", "function main(args) {");
  return conv;
}
function createApp(el,title,content) {
  $(el).html("<h1>" + title + "</h1>" + content);
}
