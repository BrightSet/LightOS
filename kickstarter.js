//sessionStorage.i++;
//if (sessionStorage.i == 1) {
	document.writeln("<script type='text/javascript' src='jquery-1.10.2.min.js'></script>");
	document.writeln("<script>var el = document.activeElement; $(document).keyup(function(e) {if (e.keyCode == 27 && document.activeElement == document.body) { location.href = 'index.html'; }});</script>");
	document.writeln("<object style='width:100%; min-width:100%; height:100%; min-height:100%; z-index=-1000; position:fixed; margin: 0; padding:0;' data='index.html'><param name='wmode' value='transparent' /></object>");
	document.writeln("<link rel='stylesheet' href='preloader.css' type='text/css'/>");
	document.writeln("<!-- Preloader --><div id='preloader'> <div id='status'>&nbsp;</div></div><script type='text/javascript'>  $(window).load(function() {$('#status').fadeOut(); $('#preloader').delay(350).fadeOut('slow');  $('body').delay(350).css({'overflow':'visible'});  }); </script> ");
	document.writeln("<script type='text/javascript' src='base.js'></script>");
	document.writeln("<link rel='stylesheet' href='clean.css' type='text/css'/>");
	document.writeln("<link rel='stylesheet' href='style.css' type='text/css'/>")
	document.writeln("<style>body { background-color:white; }")
	document.writeln("<link rel='stylesheet' href='animate.min.css' type='text/css'/>");
	document.writeln("<style>#noWrap { whitespace: nowrap; } #closeButton {opacity: 1.0; font-size: 11pt; color: black; background-color: rgba(64,64,64,0.25); width: 12pt; height: 12pt; vertical-align: middle; text-align: center; } #closeButton:hover { transition: opacity 0.5s; opacity: 1.0; } .sROut{transition:-webkit-transform 1s cubic-bezier(0.175, 0.885, 0.320, 1);-webkit-transition:-webkit-transform 1s cubic-bezier(0.175, 0.885, 0.320, 1); /* Safari */ -webkit-transform: translate(102%,0)}</style>");
	document.writeln("<div id=\"noWrap\">")
	document.writeln("<div style='z-index:1000; position:fixed;' id=\"closeButton\" onclick=\"window.location.href = 'index.html';\" ontouchstart=\"window.location.href='index.html'\">x</div>");
	document.writeln("<div style='z-index:1000; position:fixed; background-color:white; width:100%; height:100%; min-height:100%; opacity:1;' id=\"app\"></div>");
	document.writeln("<script src='mousetrap.min.js' type='text/javascript'></script>");
	
	//sessionStorage.i = 0;
//}
