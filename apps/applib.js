document.getElementsByTagName("head")[0].innerHTML += "<style>* {margin:0;}</style>";
document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='../clean.css' type='text/css'/>";
//document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='.../style.css' type='text/css'/>";
document.writeln("<div id='mainBar'><span>&#8617;</span><span onclick='location.href=\"../index.html\"' style='position:fixed; margin-left:45%;' ontouchstart='location.href=\"../index.html\"'>&#8962;</span><span style='margin-left:90%' onclick='location.href=\"../applauncher.html\"' ontouchstart='location.href=\"../applauncher.html\"'>&#9992;</span></div>");
$("*").toggleClass("cursor");