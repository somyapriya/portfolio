var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "bio.html"
    })
    .when("/bio", {
        templateUrl : "bio.html"
    })
    .when("/skills", {
        templateUrl : "skills.html"
    });
});

app.controller('MainCtrl', function($scope, $location, $anchorScroll){
  $scope.scrollTo=function(id){
    $location.hash(id);
    $anchorScroll();
  }
});

//app.run()=>angular.element(document).ready(()=>{})//maybe move the whole code here???

$(document).ready(function(){




/*******************ajax call for work section starts*******************/

  $.ajax({
  url:"data/somyaData.txt",

  success: function(result){
  a=JSON.parse(result);
      var desc="";
      var imgList= "";
    $.each(a.products, function () {
      // console.log(this.work.url);
      imgList += '<span class="individualContainer  col-xs-12 col-sm-12  col-md-4 " id='+this.work.id+'  ><img src="'+this.work.url+'" alt="Smiley face" width="100%" height="300px" style="color:white;margin-left:0px;padding-bottom:0px;float:left;" class="imagesWork " ><span class="descriptionContainer '+this.work.id+' descriptionInvisible" style=" height:300px;">'+this.work.description+'></span></span>'





});

 $('#workContent').append(imgList);


       
  //    // alert($(".individualContainer").attr("id"))
  //     $(".descriptionContainer").removeClass("descriptionInvisible");
  //     $(".descriptionContainer").addClass("descriptionVisible");
  // });
  //        $(".individualContainer").mouseout(function(){
  //    // alert($(".individualContainer").attr("id"))
  //     $(".descriptionContainer").removeClass("descriptionVisible");
  //     $(".descriptionContainer").addClass("descriptionInvisible");
  // });
},
   error: function(){
    alert("wrng");
   }
 });
  
/*********************************ajax call for work section ends*****************************/ 

 

$(".openNav").click(function() {
	$("#mySidenav").addClass("navOpen")
	$(".closeNav").css({"display":"block"})
		$(".openNav").css({"display":"none"})

});
	
$(".closeNav").click(function(){
$("#mySidenav").removeClass("navOpen");
$(".openNav").css({"display":"block"})
$(".closeNav").css({"display":"none"});
})


//animation slide from left to right// 

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


function check_if_in_view1() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view1');
  	 
    } else {
      $element.removeClass('in-view1');
    }
  });
}
$window.on('scroll resize', check_if_in_view1);
$window.trigger('scroll');





  });
      










