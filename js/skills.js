$(document).ready(function(){
	re = 0;
	var imageWidth = 0;
	
		$("ul li").width($(window).width());
    	re = $(window).width();
    	//count width of ul dynamically

	var imageCount = $("ul li").length;//number of images in li
	
	imageWidth = $("li").width();//width of each image
	var totalListWidth = parseInt(imageCount)*parseInt(imageWidth);
	$("ul").css("width",totalListWidth);//total width of ul
	
	

	$(window).resize(function(){
    

    	$("ul li").width($(window).width());
    	re = $(window).width();
    	//count width of ul dynamically

	var imageCount = $("ul li").length;//number of images in li
	imageWidth = $("li").width();//width of each image
	var totalListWidth = parseInt(imageCount)*parseInt(imageWidth);
	$("ul").css("width",totalListWidth);//total width of ul
	$('.carousel ul').css("marginLeft",-imageWidth);
	});

	
	
	// /* next  button code starts  */
	$('.carousel ul li:first').before($('.carousel ul li:last')); 
	$('.carousel ul').css("marginLeft",-imageWidth);
	
	
		setInterval(function(){$(".carousel ul").animate({marginLeft:-2*re},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:-imageWidth});
			}); }, 2000);
		






});