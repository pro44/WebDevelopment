// JQuery Document

	$(document).ready(function(){
		
		var next_img,prev,source,sources;
		var a;
		
		$(".fancybox").click(function(e){
			e.preventDefault();
			var src = $(this).attr("href");
			next_img = $(this);
			prev = $(this);
			$("#black").fadeIn("1000");
			$("#white").fadeIn("1000").animate({width:970,height:440,marginLeft:160,marginTop:110},1000);
			$("#fancyimg").delay("2000").fadeIn("1000");
			$("#fancyimg").attr("src",src);
			$("#nextz").fadeIn("1000");
			$("#prev").fadeIn("1000");
		
		  a=$(".fancybox").length;

		});	
		
		$("#black").click(function(){
		    $("#black").fadeOut("1000");
		    $("#white").fadeOut("1000").animate({width:200,height:200,marginLeft:560,marginTop:110},1000);
			$("#fancyimg").fadeOut("1000");
});

		$("#light-close").click(function(){
		    $("#black").fadeOut("1000");
		    $("#white").fadeOut("1000").animate({width:200,height:200,marginLeft:560,marginTop:110},1000);
			$("#fancyimg").fadeOut("1000");
});

         $("#nextz").click(function(){
			
		     next_img = next_img.next();
			 source = next_img.attr('href');
             $("#fancyimg").attr("src",source);
			 alert(a)
		  if(a = 9)
				{
					$("#nextz").show();
					$("#prev").hide();
				}
				
			else{
					$("#nextz").show();
					$("#prev").show();
				}
			 
			 
			 });
			 
			  $("#prev").click(function(){
			 			 
			 prev = prev.prev();
			 sources= prev.attr('href');
			 $("#fancyimg").attr("src",sources);
			 
			 });
			 
	
	
	});
