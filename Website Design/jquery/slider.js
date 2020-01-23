// JavaScript Document

    $(document).ready(function(){
        
		var count = 0;
        var width = 930;
        var totalnoslides = $('.slide').length;
        $('.slide').wrapAll('<div id="main"></div>');
        $('#main').css('width', totalnoslides * width);
        var interval_id=setInterval(timer, 6000);
        function timer() {
			
		 if (count >=  totalnoslides - 1 ) {
                count = 0;
            }
           
		    else {
                count++;
            }
			
            $('#main').animate({
                marginLeft: width * (-count)
            });
		}
		
	$("#previous").click(function(){
		
		
		if( count <= 0 ){
			count = totalnoslides - 1;	
		}
		else{
		count--;
		}
		 $('#main').animate({
                marginLeft: width * (-count)
            });
		
		
	});
	
	$("#next").click(function(){
		
		if( count >= (totalnoslides - 1) ){
			count = 0;	
		}
		else{			
		count++;
		}
			$('#main').animate({
                marginLeft: width * (-count)
            });	
	
	});
	
	});
	
	
	

	
