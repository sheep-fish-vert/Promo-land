function sectionHeight(){
	var windowHeight = $(window).height();
	
	var footerHeight = $(".footer").height();
	
	var artboardHeight = windowHeight - footerHeight;
	
	$('.artboard-main').css('height', artboardHeight);
}

 function hoveredHeart(){
 	$('.choises').hover(function(){
 		 $(this).find('.heart-button img').attr('src','images/red-heart.png');
 	},function(){
 		 $(this).find('.heart-button img').attr('src','images/blue-heart.png');
 	});
 }

 function fadingBlocks(){
 	$(document).on("click", ".choises", function(){
 		$(this).parents('.artboard-main').fadeOut();
 	})

 	$(document).on("click", ".submit-button", function(){
 		$(this).parents('.artboard-main').fadeOut();
 	})

 	$(document).on("click", ".next-page", function(){
 		$(this).parents('.artboard-main').fadeOut();
 	})
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

	hoveredHeart();

	fadingBlocks();
});

$(window).load(function(){

});

$(window).resize(function(){

});