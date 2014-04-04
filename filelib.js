function readFile(s) {
	if(localStorage.getItem("FILE:" + s) != null && localStorage.getItem("FILE:" + s) != undefined && localStorage.getItem("FILE:" + s) != "undefined") {
	return localStorage.getItem("FILE:" + s);
	}
	else
	{
		return "";
	}
	 
}
function writeFile(s,s2) {
	return localStorage.setItem("FILE:" + s,s2);
}
