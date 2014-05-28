//=============================JS MAP=======================================//

//=========================GLOBAL VARIABLES
//=========================FIREANIMATIONS()
//=========================$(WINDOW).RESIZE()
//=========================FLIP_STARTER()
//=========================RANDOM_NEW_IMAGE_GENERATOR()
//=========================FLIP()
//=========================FLICKER()
//=========================PUT_SIDE_BULBS()
//=========================AUTOFLIP()
//=========================$(WINDOW).FOCUS() & $(WINDOW).BLUR()
//=========================SETTIME()

//=====================================================GLOBAL VARIABLES================================================================//

	var start = new Date().getTime();
	var angle_data = [[0,-900],[0,-900],[0,-900],[0,-900],[0,-900],[0,-900]];
	var curr_image_data = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
	/* var autotimer = setInterval(function (){autoflip();},7000); */
	var recently_flipped = 0;
	var flag=0,style=0;
	var flip_time = 0;
	var flipReset = 0;
	var bc = 0;
	var rc = 0;
	
//======================================================FIREANIMATIONS()=============================================================//

	function fireAnimations()
	{
		var document_width=$(document).width();
		var document_height=$(document).height();
	
		//CURVING TEXT
			if($(document).width() >= 800)
			{	var $title = $('#title');
				var $timer = $('#timer');
				$title.arctext({radius: 350});
				$timer.arctext({radius: 400});
			}
			
		//FRAME POSITIONING
			var frame_top_offset=document_height*0.1;
			$("#frame").css("width","93%");
			$("#frame").css("top",frame_top_offset);
	
		//FLIPPERS POSITIONING
			flip_starter();
			var frame_top=$('#frame').offset().top;
			var frame_left=$('#frame').offset().left;
			var frame_width=$('#frame').width();
			var frame_height=frame_width*444/1366;
			//SINCE 444px IS HEIGHT OF FRAME IMAGE USED & ITS WIDTH IS 1366px
			//ALL THE CALCULATIONS BELOW INVOLVE MEASUREMENTS TAKEN FROM FRAME IMAGE AND INVOLVE UNITARY METHOD
			$(".flip-container, .clicker").css("width",frame_width*131/1366);
			$(".flip-container, .clicker").css("height",frame_height*185/444);
			$(".flip-container, .clicker").css("top",frame_top+frame_height*136/444);
			$("#flipper-1, #clicker-1").css("left",frame_left+frame_width*241/1366);
			$("#flipper-2, #clicker-2").css("left",frame_left+frame_width*394/1366);
			$("#flipper-3, #clicker-3").css("left",frame_left+frame_width*548/1366);
			$("#flipper-4, #clicker-4").css("left",frame_left+frame_width*699/1366);
			$("#flipper-5, #clicker-5").css("left",frame_left+frame_width*847/1366);
			$("#flipper-6, #clicker-6").css("left",frame_left+frame_width*998/1366);

		//SETTING HEIGHT OF VARIOUS DIVs AND IMAGES
			//$(".strip") USED AS REFERENCE FOR MINIMUM HEIGHT OF THE PAGE
			//MINIMUM HEIGHT OF PAGE CORRESPONDS TO 600px WHEN WIDTH IS 1366px
			var window_width = $(window).width();
			$(".strip").css("min-height",window_width*600/1366);
			var main_container_height = $(".strip").height();
			$("#main-container, .spotlight, #spotlights, .container").css("height",main_container_height);
			$(".title").css("top",main_container_height*0.85);
			$(".timer").css("top",main_container_height*0.75);
			$(".button-list").css("top",main_container_height*0.90);
			$(".black").css("height",$(document).height());
		//BACK ROADS ANIMATIONS
				$("#back-roads").delay(500).animate({'height': '100%'}, {duration : 1200, easing : 'easeInQuint'});

				setTimeout(function() { callAutoFlip(); }, 2000);
				setTimeout(function() { flipFunction(); }, 3000);
				setTimeout( function() { setInterval(function() { roadCycle(); }, 2800) },2300);
	
		//SOCIAL MEDIA POSITIONING (SIMILAR TO FLIPPER POSITIONING)
			if($(document).width() >= 800)
			{	$("#social-media").css("top",frame_top+frame_height*50/444);
			}
			if($(document).width() < 800)
			{	$("#social-media").css("top",0);
			}

		//INITIALIZE BULBS
			if(flag==0)
			{	flag++;
				put_side_bulbs();
				flicker(3);
			}
	};	

//======================================================$(WINDOW).RESIZE()==============================================================//

	$(window).resize(function()
	{	
		var document_width=$(document).width();
		var document_height=$(document).height();

		//CURVING TEXT
			if($(document).width() >= 800)
			{	$('#title').show();
				$('#timer').show();
				var $title = $('#title');
				var $timer = $('#timer');
				$title.arctext({radius: 350});
				$timer.arctext({radius: 400});
			}
			if($(document).width() < 800)
			{	var $title = $('#title').hide();
			var $timer = $('#timer').hide();
			}
		
		//FRAME POSITIONING
			var frame_top_offset=document_height*0.1;
			$("#frame").css("width","93%"); 
			$("#frame").css("top",frame_top_offset);
		
		//FLIPPERS POSITIONING
			var frame_top=$('#frame').offset().top;
			var frame_left=$('#frame').offset().left;
			var frame_width=$('#frame').width();
			var frame_height=frame_width*444/1366;
			//SINCE 444px IS HEIGHT OF FRAME IMAGE USED & ITS WIDTH IS 1366px
			//ALL THE CALCULATIONS BELOW INVOLVE MEASUREMENTS TAKEN FROM FRAME IMAGE AND INVOLVE UNITARY METHOD
			$(".flip-container, .clicker").css("width",frame_width*131/1366);
			$(".flip-container, .clicker").css("height",frame_height*185/444);
			$(".flip-container, .clicker").css("top",frame_top+frame_height*136/444);
			$("#flipper-1, #clicker-1").css("left",frame_left+frame_width*241/1366);
			$("#flipper-2, #clicker-2").css("left",frame_left+frame_width*394/1366);
			$("#flipper-3, #clicker-3").css("left",frame_left+frame_width*548/1366);
			$("#flipper-4, #clicker-4").css("left",frame_left+frame_width*699/1366);
			$("#flipper-5, #clicker-5").css("left",frame_left+frame_width*847/1366);
			$("#flipper-6, #clicker-6").css("left",frame_left+frame_width*998/1366);

		//SETTING HEIGHT OF VARIOUS DIVs AND IMAGES
			//$(".strip") USED AS REFERENCE FOR MINIMUM HEIGHT OF THE PAGE
			//MINIMUM HEIGHT OF PAGE CORRESPONDS TO 600px WHEN WIDTH IS 1366px
			$(".strip").css("min-height",document_width*600/1366);
			var main_container_height = $(".strip").height();
			$("#main-container, #spotlights, .spotlight, .container").css("height",main_container_height);
			$(".title").css("top",main_container_height*0.85);
			$(".timer").css("top",main_container_height*0.75);
			$(".button-list").css("top",main_container_height*0.90);
			$("#back-roads").css("height",main_container_height);
			$(".black").css("height",$(document).height());


		//SOCIAL MEDIA POSITIONING (SIMILAR TO FLIPPER POSITIONING)
			if($(document).width() >= 800)
			{	$("#social-media").css("top",frame_top+frame_height*50/444);
			}
			if($(document).width() < 800)
			{	$("#social-media").css("top",0);
			}
	
		//BULBS RENUMBERING
			$(".container").empty();
			$(".side_back").empty();
			put_side_bulbs();
			flicker(3);
	});																											

//=========================================================FLIP_STARTER()===============================================================//

	function flip_starter()				
	{		
		//ASSINGNING FRONT SIDE 0 DEGREE ROTATION
			$('.front')
				.queue(function(){$(this).css("-webkit-transform","rotateY(0deg)").dequeue();})
				.queue(function(){$(this).css("-moz-transform","rotateY(0deg)").dequeue();})
				.queue(function(){$(this).css("-o-transform","rotateY(0deg)").dequeue();})
				.queue(function(){$(this).css("-ms-transform","rotateY(0deg)").dequeue();})
				.queue(function(){$(this).css("transform","rotateY(0deg)").dequeue();})
				.queue(function(){$(this).css("display","block").dequeue();});
		
		//ASSIGNING BACK SIDE -900 DEGREE ROTATION
			$('.back')
				.queue(function(){$(this).css("-webkit-transform","rotateY(-900deg)").dequeue();})
				.queue(function(){$(this).css("-moz-transform","rotateY(-900deg)").dequeue();})
				.queue(function(){$(this).css("-o-transform","rotateY(-900deg)").dequeue();})
				.queue(function(){$(this).css("-ms-transform","rotateY(-900deg)").dequeue();})
				.queue(function(){$(this).css("transform","rotateY(-900deg)").dequeue();})
				.queue(function(){$(this).css("display","block").dequeue();});
		
		//ASSIGNING RANDOM IMAGES TO FLIPPERS
			//PUTTING FRONT IMAGES
			var i=1;
			var random_image = random_new_image_generator();
			while(i<7)
			{	
				$("#flipper-"+i+" .front").css('background-image','url(./images/flip'+random_image+'.png)');
				curr_image_data[i-1][0]=random_image;
				i=i+1;
				random_image = random_new_image_generator();
			}
			//PUTTING BACK IMAGES
			i=1;
			random_image = random_new_image_generator();
			while(i<7)
			{	
				$("#flipper-"+i+" .back").css('background-image','url(./images/flip'+random_image+'.png)');
				curr_image_data[i-1][1]=random_image;
				i=i+1;
				random_image = random_new_image_generator();
			}
	}; 

//====================================================RANDOM_NEW_IMAGE_GENERATOR()============================================================//
	
	function random_new_image_generator()
	{	var j,k;
		//22 NUMBER OF RANDOM IMAGES AVAILABLE
		var random_image = Math.floor((Math.random() * 22) + 1);
		while(1)
		{	for(j=0;j<6;j++)
			{	if(random_image == curr_image_data[j][0])
					break;
			}
					
			for(k=0;k<6;k++)
			{	if(random_image == curr_image_data[k][1])
					break;
			}
					
			if(j == 6 && k==6)
				break;
		
			random_image = Math.floor((Math.random() * 22) + 1);;
		}
		return random_image;
	};

//======================================================FLIP()=============================================================================//

	function flip(element_id_no)					
	{	//CHANGE ANGLE INFORMATION
			angle_data[element_id_no-1][0] = angle_data[element_id_no-1][0] + 900;
			angle_data[element_id_no-1][1] = angle_data[element_id_no-1][1] + 900;
		//RECENTLY FLIPPED ELEMENT
			recently_flipped=element_id_no;
		//ELEMENT TO BE FLIPPED AND ELEMENT CLICKED
			var element = "#flipper-"+element_id_no;
			var clicker = "#clicker-"+element_id_no;
		//REMOVE CLICK ABILITY FOR 2sec 
			$(clicker).removeAttr("onclick");
			setTimeout(function(){$(clicker).attr('onclick', 'flip('+element_id_no+')');},2000);
		//FLIP FRONT SIDE
			$(element+' .front').css('-webkit-transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
			$(element+' .front').css('-moz-transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
			$(element+' .front').css('-o-transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
			$(element+' .front').css('-ms-transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
			$(element+' .front').css('transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
		//FLIP BACK SIDE
			$(element+' .back').css('-webkit-transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
			$(element+' .back').css('-moz-transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
			$(element+' .back').css('-o-transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
			$(element+' .back').css('-ms-transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
			$(element+' .back').css('transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
		//PUT RANDOM IMAGE ON HIDDEN SIDE
			var random_image = random_new_image_generator();
		//CHECK WHICH SIDE IS HIDDEN ie. HAS ROTATION ANGLE NOT A MULTIPLE OF 1800 DEGREE
			if(angle_data[element_id_no-1][0]%1800 == 0)
			{	curr_image_data[element_id_no-1][1]=random_image;		
				setTimeout(function(){$(element+' .back').css('background-image','url(./images/flip'+random_image+'.png)')},2000);
			}
			else
			{	curr_image_data[element_id_no-1][0]=random_image;		
			setTimeout(function(){$(element+' .front').css('background-image','url(./images/flip'+random_image+'.png)')},2000);
			}
			flip_time = new Date().getTime();
	};


//================================================RANDOM FLIPPER ANIMATION================================================================//

function flipFunction() {
	setInterval(function() { 
		setTimeout(function() {
			var current_time = new Date().getTime();
			console.log("diff : "+(current_time-flip_time));
			if (current_time - flip_time > 3000) { 
				var random_number = Math.floor((Math.random() * 6) + 1);
				while(recently_flipped == random_number)
					random_number = Math.floor((Math.random() * 6) + 1);
				//console.log("Random Call :"+random_number);
				flip(random_number);
				flip_time = new Date().getTime();
				//console.log(flip_time/1000);
			}
		}, Math.random()*4*1000 ) 
	}, 2000);
};

//=======================================STARTING FLIPPER ANIMATION========================================================================//

function callAutoFlip() {
	if (flipReset == 6)
		flipReset = 0;
	else {
		flipReset = flipReset + 1;
		flip(flipReset);
		setTimeout( 'callAutoFlip()' , 300);
	}
}


//======================================================FLICKER()=========================================================================//

	function flicker(x)	
	{
		if(x==1) //effect 1
		{
			setInterval(function () 
			{	$(".bulb_container").fadeOut(500);
				$(".bulb_container").fadeIn(500);
			},0);
		}
	
		else if(x==2) //effect 2 write code sometime
		{
			var h,h_int,w,w_int,n,i,j,flag=1;
			$(".bulb_container").fadeOut(0);
			h = $(window).height();
			h=h/36;
			h_int=Math.floor(h); 
			w = $(window).width();
			w=w/42;
			w_int=Math.floor(w);
			n=2*(h_int+w_int-1);
		}
		
		else if(x==3) //effect 3 n value has got distrupted correct it
		{
			var h,h_int,w,w_int,n,x;
			//NUMBER OF BULBS ON VERTICAL SIDES
				h = $(".strip").height();
				h_int=Math.floor(h/36);
			//NUMBER OF BULBS ON HORIZONTAL SIDES
				w = $(document).width();
				w_int=Math.floor(w/42);
				
			n=2*(h_int+w_int-1);
			setInterval(function() 
			{	x=n*Math.random();
				x=Math.floor(x);
				if($("#bulb"+x).css("display")==="none")
				{	$("#bulb"+x).fadeIn(500);
				}	
				else
				{	$("#bulb"+x).fadeOut(500);
				}
			},10);
		}
	}

//======================================================PUT_SIDE_BULBS()================================================================//

	function put_side_bulbs()
	{
		var h,verti_bulbs;
		h = $(".strip").height();				//height of main document
		h = h*671/768;							//height upto which bulbs are to be placed
		verti_bulbs = Math.floor(h/36);			//number of bulbs to be placed vertically where 36 is height of each bulb

		var w,hori_bulbs;
		w = $(document).width();				//width of page
		hori_bulbs = Math.floor(w/42);			//number of bulbs to be placed horizontally where 42 is width of each bulb

		var i;									//to keep track of number of bulbs used
	
		for(i=0; i<verti_bulbs ; i++) 			//left edge 
		{
			$(".container").append("<div class='bulb_container' id=bulb"+i+"></div>");
			$(".container").append("<div class='bulb_back' id=bulb_back"+i+"></div>");

			$("#bulb"+i).css("top",i*36);
			$("#bulb_back"+i).css("top",i*36);
		
			$("#bulb"+i).css("left",-5);
			$("#bulb_back"+i).css("left",-5);
		}
	
		for(j=0; j<hori_bulbs; j++) 			//bottom edge
		{
			$(".container").append("<div class='bulb_container' id=bulb"+i+"></div>");
			$(".container").append("<div class='bulb_back' id=bulb_back"+i+"></div>");

			$("#bulb"+i).css("top",h-36+8);		// (h-36+8) is top offset of each bulb
			$("#bulb_back"+i).css("top",h-36+8);// (h-36+8) is top offset of each bulb
		
			$("#bulb"+i).css("left",j*42);
			$("#bulb_back"+i).css("left",j*42);
		
			i++;
		}

		for(j=verti_bulbs-1; j>=0 ; j--) 		//right edge
		{
			$(".container").append("<div class='bulb_container' id=bulb"+i+"></div>");
			$(".container").append("<div class='bulb_back' id=bulb_back"+i+"></div>");
			
			$("#bulb"+i).css("top",j*36);
			$("#bulb_back"+i).css("top",j*36);
		
			$("#bulb"+i).css("right",-5);
			$("#bulb_back"+i).css("right",-5);
			i++;
		}
	
		for(j=hori_bulbs-1; j>0; j--) 			//top edge
		{
			$(".container").append("<div class='bulb_container' id=bulb"+i+"></div>");
			$(".container").append("<div class='bulb_back' id=bulb_back"+i+"></div>");
		
			$("#bulb"+i).css("left",j*42-10);
			$("#bulb_back"+i).css("left",j*42-10);
		
			$("#bulb"+i).css("top",-5);
			$("#bulb_back"+i).css("top",-5);
		
			i++; 	 
		}

		//LIGHTS BACKGROUNDS
			$(".side_back").append("<div class='container_left_back'></div>");
			$(".side_back").append("<div class='container_right_back'></div>");
			$(".side_back").append("<div class='container_top_back'></div>");
			$(".side_back").append("<div class='container_bottom_back'></div>");
			$(".container_left_back, .container_right_back").css("height",h)
			$(".container_bottom_back").css("top",h-36+15);
	} 
	
//======================================================AUTOFLIP()=========================================================================//

	function autoflip()
	{	
		var random_number = Math.floor((Math.random() * 6) + 1);
		while(recently_flipped == random_number)
		{	random_number = Math.floor((Math.random() * 6) + 1);
		}
		flip(random_number);
	};


//=============================================================BACK ROADS ANIMATION()========================================================//
function roadCycle() {
	var offset = $(window).width();
	if (offset >= 1200) {
		rc = 1;
		if(bc%2 == 0) {
			$("#main-container").css("background-image","url('images/back-roads.jpg')");
			setTimeout ( function() { $("#back-roads").css("height","0px"); } , 50 );
			setTimeout ( function() { $("#back-roads").css("display","none"); } , 50 );
			setTimeout ( function() { $("#back-roads").css("display","block"); } , 50 );
			setTimeout ( function() { $("#back-roads").css("background-image","url('images/main-background.jpg')"); } , 50 );
			setTimeout ( function() { $("#back-roads").animate({'height': '100%'}, {duration : 2000, easing : 'easeInQuint'}); } , 50 );
			bc++;
		} else {
			$("#main-container").css("background-image","url('images/main-background.jpg')");
			setTimeout ( function() { $("#back-roads").css("height","0px"); } , 50 );
			setTimeout ( function() { $("#back-roads").css("display","none"); } , 50 );
			setTimeout ( function() { $("#back-roads").css("display","block"); } , 50 );
			setTimeout ( function() { $("#back-roads").css("background-image","url('images/back-roads.jpg')"); } , 50 );
			setTimeout ( function() { $("#back-roads").animate({'height': '100%'}, {duration : 2000, easing : 'easeInQuint'}); } , 50 );
			bc--;
		}
	}
	else {
		if (rc == 1) {
			$("#main-container").css("background-image","url('images/main-background.jpg')");
			$("#back-roads").css("display","none"); 
			rc = 0;
		}
	}
	//console.log(bc);
}


//===========================================$(WINDOW).FOCUS() & $(WINDOW).BLUR()=========================================================//

	$(window).blur(function()
	{	/* clearInterval(autotimer); */
	});
	$(window).focus(function()
	{/* setTimeout(function (){autotimer = setInterval(function (){autoflip();},7000);},0); */
	});

//======================================================SETTIME()=========================================================================//

	function setTime() 
	{	var target_date = new Date("Oct 31, 2014").getTime();
		var current_date = new Date().getTime();
		var seconds_left = (target_date - current_date) / 1000;
		var days = parseInt(seconds_left / 86400);
		$('.days').html(days);
		$('.days').html(days);
	}