/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

//console.log(width, height);
if (height <= 768){
	$(function(){
		$("#page-content-wrapper").click(function(){
			// document.getElementById("#sidebar-wrapper").style.marginLeft = "-15rem"
			alert("ok");
		});
		
	})
}


let items = document.querySelectorAll('.slider-spacial .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


$(document).ready(function($) {
	// Declare the body variable
	var $body = $("body");

	// Function that shows and hides the sidebar cart
	$(".cart-button, .close-button, #sidebar-cart-curtain").click(function(e) {
		e.preventDefault();
		
		// Add the show-sidebar-cart class to the body tag
		$body.toggleClass("show-sidebar-cart");

		// Check if the sidebar curtain is visible
		if ($("#sidebar-cart-curtain").is(":visible")) {
			// Hide the curtain
			$("#sidebar-cart-curtain").fadeOut(500);
		} else {
			// Show the curtain
			$("#sidebar-cart-curtain").fadeIn(500);
		}
	});
	
	// Function that adds or subtracts quantity when a 
	// plus or minus button is clicked
	// $body.on('click', '.plus-button, .minus-button', function () {
	// 	// Get quanitity input values
	// 	var qty = $(this).closest('.qty').find('.qty-input');
	// 	var val = parseFloat(qty.val());
	// 	var max = parseFloat(qty.attr('max'));
	// 	var min = parseFloat(qty.attr('min'));
	// 	var step = parseFloat(qty.attr('step'));

	// 	// Check which button is clicked
	// 	if ($(this).is('.plus-button')) {
	// 		// Increase the value
	// 		qty.val(val + step);
	// 	} else {
	// 		// Check if minimum button is clicked and that value is 
	// 		// >= to the minimum required
	// 		if (min && min >= val) {
	// 			// Do nothing because value is the minimum required
	// 			qty.val(min);
	// 		} else if (val > 0) {
	// 			// Subtract the value
	// 			qty.val(val - step);
	// 		}
	// 	}
	// });
});
