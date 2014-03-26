var ready = false;
jQuery.fx.interval = 0;
function nothing() {
	
}
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
$(document).ready(function () {
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
    window.setTimeout(function () { ready = true}, 1300);
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
//App parsing thingy
localStorage.home = '{"apps": [{"name":"mc-updates"},{"name":"settings"},{"name":"scratch"}';
localStorage.home += ',{"name":"test"}';
localStorage.home += ']}';
var json = jQuery.parseJSON( localStorage.home );
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

document.ontouchstart = function (e) {
    e.preventDefault();
}
$(document).ready(function(){
    
$('body').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
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
        $.extend(json, localStorage.secondMenuJSON);
        for (var i = 0; i < json.apps.length; i++) {
            //console.log(json.menus[i]);
            if (enableColor) {
                $("#menuContainer").append("<div goTo='apps/" + json.apps[i].name + "/index.html' onclick=\"document.getElementsByTagName('body')[0].className += ' sROut'; setTimeout(function(){window.location.href='" + json.apps[i].name + "/index.html'},1000);\" id='item" + json.apps[i].name + "' class=\"item " + "" /*json.menus[i].color*/ + "\">" + json.apps[i].name + "</div>");
            } else {

                //$(".icon:first").addClass("itemhover");
                //onclick=\"document.getElementsByTagName('body')[0].className += ' sROut'; setTimeout(function(){window.location.href='" + json.menus[i].href + "'},1000);\"
                $("#dockContainer").append("<figure><div app='apps/" + json.apps[i].name + "/index.html' class='app' id='m" + json.apps[i].name + "'></div>");
                $("#dockContainer").append("<a><img onclick='setTimeout(function(){window.location.href=\"apps/" + json.apps[i].name + "/index.html\";},0);' src='apps/" + json.apps[i].name + "/icon.png' class='icon' ontouchstart='setTimeout(function(){window.location.href=\"apps/" + json.apps[i].name + "/index.html\";},0);'/></a><!----<figcaption style='color:black; padding-top:25px;'>" + json.apps[i].name + "</figcaption>----></figure>");
                
                //App Launcher
                //--------------------------------------------------------------------------------------------------------------------------------
                //if (json.menus[i].title != "launcher") {
                	/*$("#menuContainer").append("<figure><div draggable='false' app='" + json.menus[i].href + "' class='app' id='m" + json.menus[i].title + "'></div>");
                	$("#menuContainer").append("<a><img onclick='setTimeout(function(){window.location.href=\"" + json.menus[i].href + "\";},0);' src='" + 	json.menus[i].icon + "' class='icon' ontouchstart='setTimeout(function(){window.location.href=\"" + json.menus[i].href + "\";},0);'/></a><!----<figcaption style='color:black; padding-top:25px;'>" + json.menus[i].title + "</figcaption>----></figure>");*/
                   if(filename=="applauncher.html") {
                   $("#menuContainer").append("<figure><div app='./" + json.apps[i].name + "/index.html' class='app' id='m" + json.apps[i].name + "'></div>");
                $("#menuContainer").append("<a><img onclick='setTimeout(function(){window.location.href=\"./" + json.apps[i].name + "/index.html\";},0);' src='./" + json.apps[i].name + "/icon.png' class='icon' ontouchstart='setTimeout(function(){window.location.href=\"./" + json.apps[i].name + "/index.html\";},0);'/></a><!----<figcaption style='color:black; padding-top:25px;'>" + json.apps[i].name + "</figcaption>----></figure>");
                }//}
                $( ".icon" ).each(function( index ) {
                	document.getElementsByClassName("icon")[index].style.backgroundColor = '#'+Math.random().toString(8).substr(-6);
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




    Mousetrap.bind('up up down down left right left right b a enter', function (e) {
        prevent = true;
        //document.getElementById('menuContainer').className += ' sROut'; 
        /*setTimeout(function(){*/
        window.location.href = "sm.html" /*},1000)*/ ;
    });
    Mousetrap.bind('+ # +', function (e) {
        alert($("#menuContainer").height());
        $(".tile").height($("#menuContainer").height());
    });
});

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

function addQuitButton() {
    $("#menuContainer").append("<a><img onclick='setTimeout(function(){window.location.href=\"" + json.menus[i].href + "\";},400);' src='" + json.menus[i].icon + "' class='icon' ontouchstart='setTimeout(function(){window.location.href=\"" + json.menus[i].href + "\"};,400);'/></a><!----<figcaption style='color:black; padding-top:25px;'>" + json.menus[i].title + "</figcaption>----></figure>");
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
$(document).bind("scroll", function (event) {
    event.preventDefault();
});