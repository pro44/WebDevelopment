// JQuery Document
$(document).ready(function() {

$(".outer").hover(
	function(){
			
	$(".inner").fadeIn();
	}
	,
	function(){
	$(".inner").fadeOut();
	});		 
        
	$(".outers").hover(
	function(){
			
	$(".inners").fadeIn();
	}
	,
	function(){
	$(".inners").fadeOut();
	});		
		               /*      */
 $(".other").hover(
	function(){
	$(".others").fadeIn();
	}
	,
	function(){
	$(".others").fadeOut();
	});			
                      /*      */
  	$(".a").hover(
	function()
	{
	$(".aa").fadeIn();
	}
	,
	function()
	{
	$(".aa").fadeOut();
	});		 
                     /*      */
  	$(".another").hover(
	function()
	{
	$(".anothers").fadeIn();
	}
	,
	function()
	{
	$(".anothers").fadeOut();
	});
 
});


   $(document).ready(function() {
     $("a").click(function(e){
	 e.preventDefault();
	 $("li a").removeClass("active");
	 $(this).addClass("active");
	 });
    });

$(document).ready(function() {
    
	$("#temp").hover(
	function(){
	    $("#tempz").fadeIn("1400");
	    setTimeout($("#temp").css({"opacity":"0.4"},1400));
	}
	,
	function()
	{
		$("#tempz").fadeOut("1400");
	    setTimeout($("#temp").css({"opacity":"1"},1400));
	}
);

	$("#personalize").hover(
	function(){
	    $("#personalizez").fadeIn("1400");
	    setTimeout($("#personalize").css({"opacity":"0.4"},1400));
	}
	,
	function()
	{
		$("#personalizez").fadeOut("1400");
	    setTimeout($("#personalize").css({"opacity":"1"},1400));
	}
);


	$("#hire").hover(
	function(){
	    $("#play").fadeIn("1400");
	    setTimeout($("#hire").css({"opacity":"0.4"},1400));
	}
	,
	function()
	{
		$("#play").fadeOut("1400");
	    setTimeout($("#hire").css({"opacity":"1"},1400));
	}
);
	
});








