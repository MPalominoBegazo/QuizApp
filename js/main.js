"use strict";
/*Menu BUTTONS */
$(document).ready(function () {
    $("#categoriesDiv").click(function () {
        $("#menu").hide();
        $("#categories").show();
    });
 
    $("#home").click(function(){
        $("#menu").show();
        $("#categories").hide();
    });
    $("#history").click(function(){
        document.location.href = "Level1.html";
    });
    $("#geography").click(function(){
        document.location.href = "level2.html";
    });
    $("#artAndCulture").click(function(){
        document.location.href = "level3.html";
    });
    $("#sports").click(function(){
        document.location.href = "level4.html";
    });

    $("#play").click(function () {
        document.location.href = "Level1.html";
    });
});