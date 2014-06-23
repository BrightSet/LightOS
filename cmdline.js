window.onload = function () {
    document.getElementById("cmdfield").focus();
}
deviceName = localStorage.deviceName;
username = localStorage.username;
$("#deviceName").text(deviceName || "undefined");
$("#username").text(username || "undefined");
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}
if (!('contains' in String.prototype)) {
  String.prototype.contains = function(str, startIndex) {
    return ''.indexOf.call(this, str, startIndex) !== -1;
  };
}
var cmd = document.getElementById("cmdfield");
var out = document.getElementById("outputfield");
out.innerHTML += "Welcome to the terminal!<br>"
cmd.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});
function include(p) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = "./fs/" + p + ".js";

    document.body.appendChild(js);
}

function puts(s) {
    out.innerHTML += s;
}
function executeFile(file,args) {
    var file = readFile(file);
    eval(toJavascript(file));
    main(args);
}
function getKeyCode(event) {
   event = event || window.event;
   return event.keyCode;
}
function clearTerm() {
    out.innerHTML = "";
}
writeFile("edit","function main(args) { var fname = args[1];  var content = prompt(\"\",readFile(fname) ); writeFile(fname,content); }");
writeFile("conf","function main(args) { if(args[1] == 'write') { localStorage.setItem(args[2],args[3]); } else if(args[1] == 'read') { puts(localStorage.getItem(args[2]) + '<br/>'); } else { puts('Unknown operation<br/>'); } }");
function validate(e) {
        var s = cmd.value;
        cmd.value = "";
        if(s == "reboot")
        {
            location.href = "index.html";
            cmd.value = "";
        }
        else
        {
          try {
            puts("" + deviceName + ":~ " + username + "$ " + s + "<br>");
            executeFile(s.split(" ")[0],s.split(" "));
            cmd.value = "";


          }
          catch(e) {
            puts("-cmdline: " + s.split(" ")[0] + ": " + e + "<br>");
          }
        }
}
