var ready = false;
jQuery.fx.interval = 0;
function nothing() {

}
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
var savedState;

$(window).on('beforeunload', function(e) {
  //return "Are you sure?";
});

$(window).on('unload', function(e) {

  // user didn't save!!
  // your auto-save function:
  // auto_save(savedState);
  localStorage.beforeShutdown = $("body").html();

  // browser leaves this tab.
});
function askRestore() {
  if(confirm("Continue from last time's savestate?")) {
    $("body").html(localStorage.beforeShutdown);
  }
  localStorage.beforeShutdown = "";

}

/**/
//$('img').on('dragstart', function(event) { event.preventDefault(); });
function fatalError(message) {
    if (message != "ReferenceError: Can't find variable: HexaFlip") {


        if (message != undefined) {
            $("html").attr("style", "-webkit-transition:all 2s; -webkit-filter:grayscale(0)");
            //setTimeout(function () {
                $("#menuContainer").toggle();
                $("#menuContainer").fadeIn(1000);
                //$("#menuContainer").html("<div style='font-size:12pt;color:white;'>" + message + "</div>");
                /*alert(message);*/
            //}, 2000);

        } else {
            fatalError("Couldn't get error message");
        }
    }
    // Alternative: alert("A fatal error ocurred.\n\n" + message + "\n\n");
}
window.onerror = function (error, url, line) {
    fatalError(error + "\nURL: " + url + "\nLine" + line);
};

function wordlyExecute(s) {
  if(s.contains("Open")) {
    if(s.split("Open ")[1] == "Appstore" || s.split("Open ")[1] == "AppStore" || s.split("Open ")[1] == "App store" || s.split("Open ")[1] == "App Store") {
      location.href='appstore.html';
    }
    else if(s.split("Open ")[1] == "Settings" || s.split("Open ")[1] == "Preferences" || s.split("Open ")[1] == "Options") {
      location.href = "settings.html";
    }
    else
    {
      gotoFSite("apps/" + s.split("Open ")[1] + "/index.html");
    }
  }
  else if(s.contains("Window")) {
    gotoFSiteInWindow("apps/" + s.split("Window ")[1] + "/index.html");
  }
  else if(s.contains("Delete an app")) {
    var wantsToDeleteApp = true;
      window.appToDelete = prompt("Which app?","");
      if(appToDelete !== null) { $( "#deleteapps-dialog" ).dialog("open"); }
  }
  else {
    alert("What?");
  }
}
//if(localStorage["devMode"] === "true") { window.setInterval(function () { location.reload(); },2000);}
/**/
/* Temporaryly removed!
var movementStrength = 4;

var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();

$("html[home]").mousemove(function (e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);

    var newvalueX = width * pageX * -1;
    var newvalueY = height * pageY * -1;

    $('.background').css("background-position", newvalueX + "px " + newvalueY + "px");
});
window.ondeviceorientation = function(event) {
 var movementStrength = 42;

var height = movementStrength / $(window).height();
var oldHTML;
var width = movementStrength / $(window).width();
  alpha = Math.round(event.alpha);
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);
  var pageX = beta /*- ($(window).width() / 2)*/;
    /*var pageY = gamma /*- ($(window).height() / 2)*/;/*

    var newvalueX = width * pageX * -1;
    var newvalueY = height * pageY * -1;

    $('body[home], html[home], .icon[home]').css("background-position", (newvalueX - 128) + "px " + (newvalueY) + "px");

}*/
function mok() {
	if (localStorage.mok = true) {
		$('#aom').hide();
		$('#dockContainer, .background, #mCBg').show();
	}
	else {

	}
}
function replaceTo(html) {
  window.oldHTML = $("body").html();
  $("body").html(html);
}
function restore() {
  $("body").html(window.oldHTML);
  location.reload();
}
function down() {
realDown("");
}
function realDown(s) {
    $(":not(#top)").animate({"top":"0"},1000);
    $("#top").animate({"top":"800%"},1000,"swing",function () {$("#top").hide();});

//$("#top").hide();
}
function up() {
  realUp("");
}
$(document).bind('mousemove', function(e){
    $('#cursor').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

function realUp(s) {
  var time;
  $("#top").show(250);
  //("#top").show();
      $(":not(#mainField)").animate({"top":"100%"},1000,"swing",function () {time = Math.pow(time,2);
    });


    //  $("#top").slideDown();


}
$(document).ready(function () {



    $("#themelink").attr("href",localStorage.themename);
	$("*").toggleClass("cursor");

    $('#slide').click(function () {
        var hidden = $('.hidden');
        if (hidden.hasClass('visible')) {
            hidden.animate({
                "left": "-1000px"
            }, "slow").removeClass('visible');
        } else {
            hidden.animate({
                "left": "0px"
            }, "slow").addClass('visible');
        }
    });
    window.setTimeout(function () { ready = true}, 1);
});
$(document).keydown(function (e) {
   if(e.altKey && !ready)
   {
       window.location.href = "recovery.html";
   }
});
/**/
var sName = "base.js"
//console.log(sName + " loaded");
var appJSON = "apps.json";
var menuJSON = "menus.json";
var widgetJSON = "widgets.json";
var homeJSON = "home.json";
var enableColor = false;
var prevent = false;
var menuSuccess = false;
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
console.log(filename);

// Default things [
// App parsing thingy [
/*
  localStorage.installedApps = localStorage.installedApps.replace(/,(\s+)?$/, '');
  localStorage.home = '{"apps": [{"name":""}';
  //if(localStorage.installedApps != undefined) localStorage.home += ",";
  if(localStorage.installedApps || localStorage.installedApp == undefined) localStorage.home += ",";
  //if(localStorage.installedApp === undefined) localStorage.installedApps = "";
  localStorage.home += localStorage.installedApps;
  localStorage.home = localStorage.home.replace(/,(\s+)?$/, '');
  localStorage.home = localStorage.home.replace(",undefined",",");
  localStorage.home = localStorage.home.replace("undefined","");
  if(localStorage.installedApps != undefined) localStorage.installedApps = localStorage.installedApps.replace("undefined","");
  localStorage.home += ']}';
  localStorage.home = localStorage.home.replace(",]","]");*/

  //localStorage.installedApps = localStorage.installedApps.replace(",undefined", '');
  //localStorage.installedApps = localStorage.installedApps.replace("undefined,", '');
    localStorage.home = '{"apps": [{"name":"placeholder"}';
if(localStorage.installedApps && /(})$/g.test(localStorage.installedApps)) localStorage.home += ",";
if(localStorage.installedApps) localStorage.home += localStorage.installedApps;



  if(localStorage.installedApps) localStorage.installedApps = localStorage.installedApps.replace("}{","},{");
  if(localStorage.installedApps) localStorage.installedApps = localStorage.installedApps.replace("}{","},{");
  //if(localStorage.installedApp === undefined) localStorage.installedApps = "";

  //localStorage.home = localStorage.home.replace(/(,.*){2}/g, ',');
  localStorage.home = localStorage.home.replace(/\,$/g, '');
  if(localStorage.installedApps) localStorage.installedApps = localStorage.installedApps.replace("undefined", '');
  localStorage.home = localStorage.home.replace("undefined", '');
  if(localStorage.installedApps) localStorage.installedApps = localStorage.installedApps.replace(/\,+$/g, '');
  //if(localStorage.installedApps) localStorage.installedApps = localStorage.installedApps.replace(/\,{2}/g, '');
  localStorage.home += ']}';
  //if(localStorage.installedApps = undefined) localStorage.installedApps = "";
localStorage.home = localStorage.home.replace("},,{","},{");
localStorage.home = localStorage.home.replace(/\,{2}/g,"");

if(/appstore.html/g.test(document.referrer))
{
  location.reload();
}
window.setTimeout(function() { $("#appplaceholder").remove(); },1);

// ]
// Default files [
  //writeFile("apps/text-editor/index.html","<div id='te'><input style='width:100%;'></input><br /><textarea style='width:100%;height:100%;border:0;outline:0;'></textarea><button onclick='writeFile($(\'input\').val(),$(\'textarea\').val());'>Save</button></div><iframe src='file://" + url + "'>What? You have got a browser that does NOT support iframes? LOL</iframe>");
  //writeFile("apps/settings/index.html",'<!DOCTYPE html><html class=\"noMainBar\"><head>    <script src=\"../applib.js\" type="text/javascript"></script>    <script src=\"../jquery-1.10.2.min.js\" type="text/javascript"></script>    <title></title>  </head>  <body onload=\"load_()\">    <h2>      General Settings    </h2>    <p>      <br />      Test:    </p>    <form>      <input id=\"test\" onclick=\"localStorage.test = this.checked;\"      type=\"checkbox\" /><br />      Theme: <input onblur=\"if(this.value != \\"      localstorage.themename="this.value;" id=\"themename\"      placeholder=\"Type in the name of your theme\" /> <script type=      "text/javascript">//<![CDATA[      var i, checkboxes = document.querySelectorAll(\"input[type=checkbox]\");      var t, textFields = document.querySelectorAll(\"input[type=checkbox]\");      function save() {for (i = 0; i < checkboxes.length; i++) {      localStorage.setItem(checkboxes[i].value, checkboxes[i].checked);      }function load_() {for (i = 0; i < checkboxes.length; i++) {      checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === \"true\" ? true:false;      }      //]]>      </script><br />      <br />    </form>    <h2>      Widgets    </h2>    <h3>      Weather    </h3>    <p>      <label>City:</label>    </p>    <form>      <input placeholder=\"City, Country Code\" id=\"weather-city\"      onblur=\"if(this.value != \\" localstorage.isweatherset=      "true;}\"" alt=\"city,countrycode\" /><br />      <br />    </form>    <h2>      License    </h2>    <p>      Copyright Brightset 2014.<br />      All rights reserved.    </p>    <p>      Using <a href=\"https://github.com/designmodo/Flat-UI\">FlatUI      - Design Framework</a> <button style=      \"bottom:12pt; position:fixed;\" onclick=      \"save(); location.href=\\">Save and close</button>    </p>  </body></html>');
// ]

// ]
function reset() {
  if(confirm("Are you sure? Reseting will delete all apps and data!")) {
    delete localStorage.installedApps;
    delete localStorage.home;
  }

}
if(filename=="applauncher.html")
{
    var homeJSON = "../home.json";
}

$("div[id~='menu']").dblclick(function () {
    document.getElementById('app').className += ' sROut';
    setTimeout(function () {
        window.location.href = $(this).attr("app")
    }, 1000);
});
document.oncontextmenu = function () {
    return false;
};/*
if ($("html").length) {

    $.getJSON(appJSON)
        .done(function (json) {
            for (var i = 0; i < json.apps.length; i++) {

                if ($("html").attr("ident") == json.apps[i].ident) {
                    $("#app").append("<h1>" + json.apps[i].title + "</h1></div>" + json.apps[i].content);
                }
            }
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            fatalError("Request Failed: " + err);
        });
}

*/
function hideThenGoToUrl(url) {
    document.getElementById('app').className += ' sROut';
    setTimeout(function () {
        window.location.href = url
    }, 1000);
}
function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
document.ontouchstart = function (e) {
    //e.preventDefault();
    return true;
}
document.ontouchend = function (e) {
    //e.preventDefault();
    return true;
}
document.ontouchmove = function(e){
  window.shouldReactOnTouchEnd = false;
     return true;
     //window.shouldReactOnTouchEnd = true;
   }
$("*").on("click",function() {
    return false;
});
var scroll = 0;
function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}
function scrollDown() {
//if(scroll<0 ||scroll>document.getElementById('dockContainer').scrollHeight) {scroll=0;document.getElementById('dockContainer').scrollTop=0;}
if(scroll<document.getElementById('dockContainer').scrollHeight) {
scroll+=$(".icon").height();
     $('#dockContainer').animate({
    scrollTop: scroll
}, 1000);
}
}
function scrollUp() {
if(scroll>0) {
scroll-=$(".icon").height();
}
$('#dockContainer').animate({
scrollTop: scroll
}, 1000);
//if(scroll<0 ||scroll>document.getElementById('dockContainer').scrollHeight) {scroll=0}
}
$(document).ready(function(){


$('body').on({
    'mousewheel': function(e) {
      e.preventDefault();

    }
})

});
function startHTML(h) {
	oldHTML = document.getElementById("homescreen")[0].innerHTML;
	document.getElementById("homescreen")[0].innerHTML = h;
}
function bringBackOldHTML() {
	document.getElementById("homescreen")[0].innerHTML = oldHTML;
}
function _(o) {
	return document.getElementById(o);
}
function gotoFSite(f) {
  // location.href = "data:text/html;charset=utf-8," + readFile(f);
  $("#fullTApp").css({"display":"block"});
  $("#fullTApp").html(readFile(f));
  $("#quitButton").css({"display":"block"});

}
function gotoFSiteInWindow(f) {
  if($("#tempAppStorage").html() == "\\n") {
  $("#tempAppStorage").html(readFile(f));
  $("#tempAppStorage").dialog("open");
}
else {
  if($("#tempAppStorage2").html() == "\\n") {
  $("#tempAppStorage2").html(readFile(f));
  $("#tempAppStorage2").dialog("open");
  }
  else {
  alert("There is no free window!");
  }
}
}

function gotoSiteInWindow(s) {
  if($("#tempAppStorage").html() == "\\n") {
  $("#tempAppStorage").load(s);
  $("#tempAppStorage").dialog("open");
}
else {
  if($("#tempAppStorage2").html() == "\\n") {
  $("#tempAppStorage2").load(s);
  $("#tempAppStorage2").dialog("open");
  }
  else {
  alert("There is no free window!");
  }
}
}
$(document).ready(function () {


    $(".message").slideUp(0);
    if (localStorage.fullBricked == true) {
        fullBrickMSG();
        delete localStorage.fullBricked;
    }

    //
    //$.getJSON(homeJSON, {name: "test"})
     //.done(function( json ) {
        //.success(function (json) {
        var toggle = false;
        window.json = jQuery.parseJSON( localStorage.home );
        $.extend(window.json, localStorage.secondMenuJSON);
        for (var i = 0; i < window.json.apps.length; i++) {
            //console.log(json.menus[i]);
            if (enableColor) {
                $("#menuContainer").append("<div goTo='apps/" + json.apps[i].name + "/index.html' onclick=\"document.getElementsByTagName('body')[0].className += ' sROut'; setTimeout(function(){window.location.href='" + json.apps[i].name + "/index.html'},1000);\" id='item" + json.apps[i].name + "' class=\"item " + "" /*json.menus[i].color*/ + "\">" + json.apps[i].name + "</div>");
            } else {

                //$(".icon:first").addClass("itemhover");
                //onclick=\"document.getElementsByTagName('body')[0].className += ' sROut'; setTimeout(function(){window.location.href='" + json.menus[i].href + "'},1000);\"
                //$("#dockContainer").append("<figure><div app='apps/" + json.apps[i].name + "/index.html' class='app' id='m" + json.apps[i].name + "'></div>");

                //$("#dockContainer").append("<a><div onclick='setTimeout(function(){window.location.href=\"apps/" + json.apps[i].name + "/index.html\";},0);' style='content:url(apps/" + json.apps[i].name + "/icon.png); white-space: pre;  width:5%;height:5%;' class='icon' ontouchend='setTimeout(function(){window.location.href=\"apps/" + json.apps[i].name + "/index.html\";},0);'></div><div style='display: none' class='appName'>" + json.apps[i].name + "</div></a><!----<figcaption style='color:black; padding-top:25px;'>" + json.apps[i].name + "</figcaption>----></figure>");

                $("#dockContainer").append("<a><div id='app" + window.json.apps[i].name + "' onclick='if(event.altKey) { gotoFSiteInWindow(\"apps/" + window.json.apps[i].name + "/index.html\"); } else { gotoFSite(\"apps/" + window.json.apps[i].name + "/index.html\"); }' style=' ' class='icon' ontouchend='gotoFSite(\"apps/" + window.json.apps[i].name + "/index.html\");'><img class='iconImg' style='' src='data:image/png;base64," + readFile("apps/" + window.json.apps[i].name + "/icon") + "' onerror='this.src=\'http://\'' /><span style='margin-left:12pt;color:white;'>" + json.apps[i].name + "</span></div><div style='display: none' class='appName'>" + window.json.apps[i].name + "</div></a><!----<figcaption style='color:black; padding-top:25px;'>" + window.json.apps[i].name + "</figcaption>----></figure>");
                //App Launcher
                //--------------------------------------------------------------------------------------------------------------------------------
                //if (json.menus[i].title != "launcher") {
                	/*$("#menuContainer").append("<figure><div draggable='false' app='" + json.menus[i].href + "' class='app' id='m" + json.menus[i].title + "'></div>");
                	$("#menuContainer").append("<a><img onclick='setTimeout(function(){window.location.href=\"" + json.menus[i].href + "\";},0);' src='" + 	json.menus[i].icon + "' class='icon' ontouchend='setTimeout(function(){window.location.href=\"" + json.menus[i].href + "\";},0);'/></a><!----<figcaption style='color:black; padding-top:25px;'>" + json.menus[i].title + "</figcaption>----></figure>");*/
                   if(filename=="applauncher.html") {
                     $("#menuContainer").append("<a><div id='app" + window.json.apps[i].name + "' onclick='if(event.altKey) { gotoFSiteInWindow(\"apps/" + window.json.apps[i].name + "/index.html\"); } else { gotoFSite(\"apps/" + window.json.apps[i].name + "/index.html\"); }' style=' white-space: pre;  height:105px;width:105px;' class='icon' ontouchend='gotoFSite(\"apps/" + window.json.apps[i].name + "/index.html\");'><img style='width:105%;height:105%;position:relative;' src='data:image/png;base64," + readFile("apps/" + window.json.apps[i].name + "/icon") + "' onerror='this.src=\'http://\'' /></div><div style='display: none' class='appName'>" + window.json.apps[i].name + "</div></a><!----<figcaption style='color:black; padding-top:25px;'>" + window.json.apps[i].name + "</figcaption>----></figure>");
                }//}
                $( ".icon" ).each(function( index ) {
                	document.getElementsByClassName("icon")[index].style.backgroundColor = '#'+Math.random().toString(8).substr(-6);

                  //document.getElementsByClassName("icon")[index].style.backgroundColor = "rgba(255,255,255,0.5)"
                  //document.getElementsByClassName("icon")[index].style.borderRadius = 5 + "px";

                });


                //--------------------------------------------------------------------------------------------------------------------------------
                /*$(document).ready(function () {
                    if (json.menus[i].secondSide != undefined) {
                        //eval("var menu" + json.menus[i].title + " = new HexaFlip(document.getElementById('m" + json.menus[i].title + "'),    {        menu: [{value:'<a style=\"text-decoration:none;color:white;\" href=\"" + json.menus[i].href + "\">" + json.menus[i].title + "</a>', style:{backgroundColor: '#363636', WebkitBorderRadius:'0em', verticalAlign:'middle', fontFamily:'Helvetica', fontSize:'26pt', textAlign:'center', boxShadow: '1px 2px 5px #000'}, domEvents: { dblclick: function(e, face, cube) { console.log('hi') } } }, {value:'" + json.menus[i].secondSide + "', style:{backgroundColor: '#363636', verticalAlign:'middle', fontFamily:'Helvetica', fontSize:'26pt', textAlign:'center', boxShadow: '1px 2px 5px #000'} } ]},{ horizontalFlip: true, size: 150 });");

                    } else {
                        //eval("var menu" + json.menus[i].title + " = new HexaFlip(document.getElementById('m" + json.menus[i].title + "'),    {        menu: [{value:'<a style=\"text-decoration:none;color:white;\" href=\"" + json.menus[i].href + "\">" + json.menus[i].title + "</a>', style:{backgroundColor: '#363636', verticalAlign:'middle', fontFamily:'Helvetica', fontSize:'26pt', textAlign:'center', boxShadow: '1px 2px 5px #000'}, domEvents: { dblclick: function(e, face, cube) { console.log('hi') } } }]},{ horizontalFlip: true, size: 150 });");

                    }

                });*/

                //$("#menuContainer").append("<div goTo=\"" + json.menus[i].href + "\" id=\"item" + json.menus[i].title + "\" class=\"item " + "\">" + json.menus[i].title + "</div>");




            }
        }
        /*}

        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            fatalError("Request Failed: " + err);
        })
        .success(function (jqxhr, textStatus, error) {
            menuSuccess = true;
        });
    //*/

/*
 $( "#settings" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 500
},
hide: {
effect: "fade",
duration: 500
}
});*/

    var devMouse = false;
    Mousetrap.bind('up up down down left right left right b a enter', function (e) {
        prevent = true;
        //document.getElementById('menuContainer').className += ' sROut';
        /*setTimeout(function(){*/
        window.location.href = "sm.html" /*},1000)*/ ;
    });
    Mousetrap.bind('up', function (e) {
        scrollUp();
    });
    Mousetrap.bind('down', function (e) {
        scrollDown();
    });
    Mousetrap.bind('command+shift+f', function (e) {
        launchFullscreen(document.documentElement);
    });
    Mousetrap.bind('command', function (e) {
        $("#mainField").focus();
$("#mainField").css("opacity","1");
$("#mainFieldBG").attr("style","background-color:black;");
$("#mainField").css("left","50%");
    });
    Mousetrap.bind('command+alt+c', function (e) {
        devMouse = !devMouse;
        if(devMouse) {
          $("*").css("cursor:default;");
        }
        if(!devMouse) {
          $("*").css("cursor:url(cursor.gif);");
        }
    });
    Mousetrap.bind('# + #', function (e) {
        $('img').css({"-webkit-filter":"blur(10px)"});
    });
    Mousetrap.bind('# e #', function(e) {
      var fname = prompt("Please enter the name of the file, that you want to edit","");
      var content = prompt("",readFile(fname) );
      writeFile(fname,content);
    });
});

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function addQuitButton() {
    $("#menuContainer").append("<a><img onclick='setTimeout(function(){window.location.href=\"" + json.menus[i].href + "\";},400);' src='" + json.menus[i].icon + "' class='icon' ontouchend='setTimeout(function(){window.location.href=\"" + json.menus[i].href + "\"};,400);'/></a><!----<figcaption style='color:black; padding-top:25px;'>" + json.menus[i].title + "</figcaption>----></figure>");
}

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function fullBrickMSG() {
    //var fmessage = s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + s4() + "<br>" + s4() + "<br>" + s4() + "<br>" + s4() + "<br>";
    document.writeln("<style>* { background-color: black; color: white; font-family: Courier New; text-align: center; vertical-align: middle; font-size: 36pt}</style> Error. Please contact the developers<br>Fehler. Bitte wenden sie sich an die Entwickler<br>Error. S'il vous plaît contacter les développeurs<br>Error. Si prega di contattare gli sviluppatori<br>Error. Por favor, póngase en contacto con los desarrolladores<br><div style='font-size:72pt; font-family: Lucida Console'>" + "0ef0" + "</div><br><br><button style='color:#000000;       border: none;    outline:none;'<br><br><a style=\"font-size:8pt; background-color:#000000;\" onclick=\"alert('This message is shown to prevent serious damage on your device')\">more information</a>");
}




/***************
Select Menu
***************/

window.displayBoxIndex = -1;

$(document).keydown(function (e) {
    if (localStorage.keyControl == true) {


        if ($("#code").length) {
            prevent = true;
        }
        if (!prevent) {


            if (e.keyCode == 40) {
                Navigate(1);
                if ($("h1.itemhover").length || $("body.itemhover").length || $("html.itemhover").length || $("script.itemhover").length || $("style.itemhover").length || $("head.itemhover").length || $("br.itemhover").length || $("#menuContainer.itemhover").length || $("icon.itemhover").length) {
                    $.playSound("https://dl.dropboxusercontent.com/u/3205842/ForWardOS/menuHover");
                    Navigate(1);
                }

            }
            if (e.keyCode == 38) {

                Navigate(-1);
                if ($("h1.itemhover").length || $("body.itemhover").length || $("html.itemhover").length || $("script.itemhover").length || $("style.itemhover").length || $("head.itemhover").length || $("br.itemhover").length || $("#menuContainer.itemhover").length || $("icon.itemhover").length) {
                    $.playSound("https://dl.dropboxusercontent.com/u/3205842/ForWardOS/menuHover");
                    Navigate(-1);
                }

            }
            if (e.keyCode == 13) {
                if ($("input.itemhover").length) {
                    $(".itemhover").focus();
                } else if ($("button.itemhover").length) {
                    $(".itemhover").click();
                } else if ($("a.itemhover").length) {
                    window.location.href = $(".itemhover").attr("href");
                } else {
                    document.getElementsByTagName('body')[0].className += ' sROut';
                    setTimeout(function () {
                        window.location.href = $(".itemhover.a").attr("href");
                    }, 1000);
                }
            }
            if (e.keyCode == 27) {
                if ($("input.itemhover").length) {
                    $(".itemhover").blur();
                } else {
                    document.getElementById('body').className += ' sROut';
                    setTimeout(function () {
                        window.location.href = 'index.html'
                    }, 1000);
                }
            }
        }
    }
});

var Navigate = function (diff) {
    var times;
    times++;
    if (times -= 2) {
        displayBoxIndex = 1;
    }
    displayBoxIndex += diff;
    var oBoxCollection;
    if ($(".item").length) {
        oBoxCollection = $(".item");
    }
    if ($(".icon").length) {
        oBoxCollection = $(".item");
    }
    if ($("input").length) {

        oBoxCollection = $("input, button");
    }
    if ($("a").length) {
        oBoxCollection = $("a");
    }

    if (displayBoxIndex >= oBoxCollection.length)
        displayBoxIndex = 0;
    if (displayBoxIndex < 0)
        displayBoxIndex = oBoxCollection.length - 1;
    var cssClass = "itemhover";
    oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);

}

// Icon thing
var sum = 0;
$("#dockContainer.icon").each(function(){sum += $(this).width()});
$("#dockContainer").css('width', sum);

//
