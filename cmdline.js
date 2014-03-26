window.onload = function () {
    document.getElementById("cmdfield").focus();
}
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
function executeFile(file, args)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                eval(allText + "\nincludes();");
                eval(allText + "\n");
                eval("main(\"" + args + "\");");
            }
        }
    }
    rawFile.send(null);
}
executeFile("bi.js");
function validate(e) {

    
        var s = cmd.value;
        if(s == "reboot")
        {
            location.href = "index.html";
        }
        else
        {/*
            if(!s.contains(".js"))
            {
                s += ".js"
                var s2 = s.split(" ");
                executeFile("./fs/" + cmd.value.split(" ")[0], s2);
            }
            else
            {
                var s2 = s.split(" ");
                executeFile("./fs/" + cmd.value.split(" ")[0], s2);
            }*/
            
    var jqxhr = $.ajax("fs/" + s.split(" ")[0] )
  .done(function() {
    var s1 = location.href;
    var s2 = s1.replace("file://", "");
    var s3 = s2.replace("cmdline.html","")
    //Lua: location.href = "forwardos://dofile('" + s3 + s.split(" ")[0] + "')";
    executeFile("fs/" + s.split(" ")[0]);
  })
  .fail(function() {
    document.getElementById("outputfield").innerHTML += "No such file or directory.<br>";
        document.getElementById("outputfield").innerHTML += s + "<br>";

  })
  .always(function() {
  });

            
        }
    
    cmd.value = "";
    
}

