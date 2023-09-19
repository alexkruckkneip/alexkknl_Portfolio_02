// ---------- ---------- ---------- ---------- ----------
// Loader
// ---------- ---------- ---------- ---------- ----------

/*!
 * Percent-Preloader JS - v1
 * @author JDM Digital - https://jdmdigital.co
 * Copyright (c) 2022
 */
 var counting = setInterval(function () {
 	var loader = document.getElementById("gate-percentage");
 	var currval = parseInt(loader.innerHTML);
 	var Width = 99 - currval;
 	var loadscreen = document.getElementById("gate-loader-progress");
 	loader.innerHTML = ++currval;
 	if (currval > 89){
 		loader.innerHTML = 90;
 		if(window.jQuery) {
 			//console.log('jquery loaded');
 			loader.innerHTML = 95;
 			if(document.readyState == "interactive") {
 				loader.innerHTML = 99;
 			}
 			if(document.readyState == "complete") {
 				//console.log('fully loaded!');
 				clearInterval(counting);
 				loader.innerHTML = 100;
 				jQuery("body").toggleClass('loaded');
 				// setTimeout(function() {
 				// 	jQuery('nav').css('visibility','visible')
 				// }, 880);
 			}
 		}
 	}

 	loadscreen.style.transition = "0.15s";
 	loadscreen.style.width = Width + "%";
 }, 20);


// ---------- ---------- ---------- ---------- ----------
// Open nav list
// ---------- ---------- ---------- ---------- ----------


// Nav list 02
// ---------- ---------- ---------- ---------- ----------

$(function() {
  $(".nav-item-02").click(function() {
    $(".nav-item-03").removeClass("nav-item-list--open");
    $(".nav-item-list-03").removeClass("nav-item-list--open");
    $(".nav-item-02").toggleClass("nav-item-list--open");
    $(".nav-item-list-02").toggleClass("nav-item-list--open");
 });
});

$(function() {
  $(".nav-item-03").click(function() {
    $(".nav-item-02").removeClass("nav-item-list--open");
    $(".nav-item-list-02").removeClass("nav-item-list--open");
    $(".nav-item-03").toggleClass("nav-item-list--open");
    $(".nav-item-list-03").toggleClass("nav-item-list--open");
 });
});
