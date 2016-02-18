'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function likeClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event    
    ga("send", "event", "likeBtn", "click");
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

	$(".likeBtn").click(likeClick);
}