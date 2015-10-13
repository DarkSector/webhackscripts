 ==UserScript==
// @name         Fuck off nosleep
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http*://*.reddit.com/*
// @grant        none
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==


$(document).ready(function(){
    var fuckofflist = ['nosleep', 'TwoXChromosomes'];
    $.each(fuckofflist, function(index, val){
        $('.thing a[href*="'+val+'"]').closest('.thing').remove();

    }); // end each

}); // end document.ready