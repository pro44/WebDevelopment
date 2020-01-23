$(document).ready(function(e){
	var capacity = 3;
	var size=0;
	var arrayStack = [];

//---------------------- PUSH METHOD STARTS --------------------------------//
	$('#push').click(function(){

		if( size <= capacity ){
			var input = $("#input").val();
			
			if( input !== "" ){
				arrayStack.push(input);	
				$("#ErrorDiv").fadeIn('500').html("");
				
				setTimeout(function(){
				if( size == 0){
					$("#tempNumDiv0").fadeIn('500').html(input);
					$("#tempNumDiv0").animate({
						marginTop:"70%"
					},2000)
				}else
				if( size == 1 ){
					$("#tempNumDiv1").fadeIn('500').html(input);
					$("#tempNumDiv1").animate({
						marginTop:"54%"
					},2000)
				}else
				if( size == 2 ){
					$("#tempNumDiv2").fadeIn('500').html(input);
					$("#tempNumDiv2").animate({
						marginTop:"38%"
					},2000)
				}else
				if( size == 3 ){
					$("#tempNumDiv3").fadeIn('500').html(input);
					$("#tempNumDiv3").animate({
						marginTop:"22%"
					},2000)
				}
				size++;

				},1000);
			}
		}else{
			$("#ErrorDiv").fadeIn('500').html("Stack is full");
		}
	})

//---------------------- PUSH METHOD ENDS --------------------------------//

//---------------------- POP METHOD STARTS --------------------------------//

	$('#pop').click(function(){

		if( size > 0 && size < 5 ){
			var popElement = arrayStack.pop();
			$("#ErrorDiv").fadeIn('500').html("");

			setTimeout(function(){
				if( size == 4){
					$("#tempNumDiv3").hide().html("");
					$("#tempBlockDiv3").show().html(popElement);
					$("#tempBlockDiv3").animate({
						marginTop:"0%"
					},2000,
						function(){
							$("#tempBlockDiv3").fadeOut("1000");	
							setTimeout(function(){
								$("#tempBlockDiv3").animate({
									marginTop:"22%"
								},1000)
								$("#tempNumDiv3").animate({
									marginTop:"0%"
								},1000)
							})
						}
					)
				}
				if( size == 3){
					$("#tempNumDiv2").hide().html("");
					$("#tempBlockDiv2").show().html(popElement);
					$("#tempBlockDiv2").animate({
						marginTop:"0%"
					},2000,
						function(){
							$("#tempBlockDiv2").fadeOut("1000");	
							setTimeout(function(){
								$("#tempBlockDiv2").animate({
									marginTop:"38%"
								},1000)
								$("#tempNumDiv2").animate({
									marginTop:"0%"
								},1000)
							})
						}
					)
				}
				if( size == 2){
					$("#tempNumDiv1").hide().html("");
					$("#tempBlockDiv1").show().html(popElement);
					$("#tempBlockDiv1").animate({
						marginTop:"0%"
					},2000,
						function(){
							$("#tempBlockDiv1").fadeOut("1000");	
							setTimeout(function(){
								$("#tempBlockDiv1").animate({
									marginTop:"54%"
								},1000)
								$("#tempNumDiv1").animate({
									marginTop:"0%"
								},1000)
							})
						}
					)
				}
				if( size == 1){
					$("#tempNumDiv0").hide().html("");
					$("#tempBlockDiv0").show().html(popElement);
					$("#tempBlockDiv0").animate({
						marginTop:"0%"
					},2000,
						function(){
							$("#tempBlockDiv0").fadeOut("1000");	
							setTimeout(function(){
								$("#tempBlockDiv0").animate({
									marginTop:"70%"
								},1000)
								$("#tempNumDiv0").animate({
									marginTop:"0%"
								},1000)
							})
						}
					)
				}
				size--;
			},1000);
		}else{
			$("#ErrorDiv").fadeIn('500').html("Stack is Empty");
		}
	})

//---------------------- POP METHOD ENDS --------------------------------//
//------------------ CHECK METHOD ---------------------//
	$('#check').click(function(){
		var str = "{";
		var isEmpty = true;

		for (var i = 0; i < arrayStack.length; i++) {
				if( arrayStack[i] !== undefined ){
					console.log(arrayStack[i]);
					str += arrayStack[i]+",";
					isEmpty = false;
				}else{
					break;
				}
		}
		if( isEmpty === false ){
			var arrayCheck = str.substr(0, str.length-1);
			arrayCheck+="}";
			var peekCheck = arrayStack[arrayStack.length-1];
		}else{
			arrayCheck = "-";
			var peekCheck = "-";
		}
		//var peekCheck = arrayStack.peek();

		$("#arrayP").html(arrayCheck);
		$("#peekP").html(peekCheck);


	})
})