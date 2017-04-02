$(".menu").mousedown(function(){
	$(this).toggleClass("closed");
	
	if($(this).hasClass("closed")) {
		$(".main.button").text("Menu");
	} else {
		$(".main.button").text("Close");
	}
})

$(".home").mousedown(function(){
	$(this).toggleClass("closed");
	
	if($(this).hasClass("closed")) {
		$(".main.button").text("Home");
	} else {
		$(".main.button").text("Close");
	}
})

$(".places").click(function(){
	$(this).toggleClass("closed");
	
	if($(this).hasClass("closed")) {
		$(".main.button").text("Place");
	} else {
		$(".main.button").text("Close");
	}
})

$(".bookmark").click(function(){
	$(this).toggleClass("closed");
	
	if($(this).hasClass("closed")) {
		$(".main.button").text("Bookmark");
	} else {
		$(".main.button").text("Close");
	}
})

$(".music").click(function(){
	$(this).toggleClass("closed");
	
	if($(this).hasClass("closed")) {
		$(".main.button").text("Music");
	} else {
		$(".main.button").text("Close");
	}
})
