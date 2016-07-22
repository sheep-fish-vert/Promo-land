function sectionHeight(){
	var windowHeight = $(window).height();
	
	var footerHeight = $(".footer").height();
	
	var artboardHeight = windowHeight - footerHeight;
	
	$('.artboard-main').css('height', artboardHeight);
}

function showPosts(){
	var countPosts = $(".post");
	var i = 0;
	console.log(countPosts);

	console.log($(countPosts).eq(0));

	var messagesAdding = setInterval(function(){
		$('.row').eq(i).addClass('active');
		i++;
		if(i == $('.row').length){
			$(".printing-process").addClass("hide-inner-text");
			setTimeout(function(){
				$(".submit-button").addClass('show');
			},1000)
		}
		if(i==$('.row').length){
			clearInterval(messagesAdding);
		}
	}, 3000);	
}


$(document).ready(function(){
	sectionHeight();

	$(function(){
		$('.scroll-pane').jScrollPane();
	});

	showPosts();
});

$(window).load(function(){

});

$(window).resize(function(){

});