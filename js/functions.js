/*
    Random JavaScript loaded on every page of the website goes here
*/
"use strict";

$(document).ready(function() {
    // Turns email subscription button green when there is text in the input
    $("#mce-EMAIL").bind("change paste keyup", function() {
        if ($(this).val() !== "") {
            $("#mc_embed_signup .button").addClass("ready");
        } else {
            $("#mc_embed_signup .button").removeClass("ready");
        }
    });
});
