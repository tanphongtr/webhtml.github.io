/* neo Sidebar */
var stickWidth = 1000;
var win = $(window);
var menu = $(".sidebar");
var options = {
    bottoming: true,
    offset_top: 60
};
if (win.width() > stickWidth) {
    menu.stick_in_parent(options);
}
win.resize(function () {
    if (win.width() > stickWidth) {
        menu.stick_in_parent(options);
    } else {
        menu.trigger("sticky_kit:detach");
    }
});


/* nút back-to-top */
$(window).scroll(function() {
	if ($(this).scrollTop() > 350) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});

$('#back-to-top').on('click', function() {
	$('html, body').stop().animate({
		scrollTop: 0
	}, 500, 'linear');
	return false;
});


// ========= Modal========================================
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("lnkRegister");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// end Modal




// ========= Modal========================================
// Get the modal
var modalLogin = document.getElementById('myModalLogin');

// Get the button that opens the modal
var btn = document.getElementById("lnkLogin");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeLogin")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modalLogin.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalLogin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalLogin.style.display = "none";
    }
}

// end Modal