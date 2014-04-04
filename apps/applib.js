document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='../clean.css' type='text/css'/>";
document.getElementsByTagName("head")[0].innerHTML += "<script src='../jquery-1.10.2.js' />";

//document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='.../style.css' type='text/css'/>";
if(!document.getElementsByTagName("html")[0].className.match("noMainBar"))
{
	document.writeln("<div id='mainBar' class='mainBar' style='margin:0;'><span>&#8617;</span><span onclick='location.href=\"../index.html\"' style='position:fixed; margin-left:45%;' ontouchstart='location.href=\"../index.html\"'>&#8962;</span><span style='margin-left:90%' onclick='location.href=\"../applauncher.html\"' ontouchstart='location.href=\"../applauncher.html\"'>&#9992;</span></div>");
}
//document.getElementsByTagName("head")[0].innerHTML += "<style>body:not(#mainBar) { margin:12pt; }</style>";

$("*").toggleClass("cursor");
