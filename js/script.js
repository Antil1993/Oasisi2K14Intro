/*------------------------------GLOBAL VARIABLES-----------------------*/
var start = new Date().getTime();
var angle_data = [[0,-900],[0,-900],[0,-900],[0,-900],[0,-900],[0,-900]];
var curr_image_data = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
/* var autotimer = setInterval(function (){autoflip();},7000); */
var recently_flipped = 0;
var flipReset = 0;


function fireAnimations(){					//FUNCTION TO ANIMATE AND POSITION TEXT,FRAME,FLIPPERS,BACK-ROADS
	
	var document_width=$(document).width();
	var document_height=$(document).height();
	
/*----------------------------Curving Text-----------------------------*/
	if($(document).width() >= 800)
	{	var $title = $('#title');
		var $timer = $('#timer');
		$title.arctext({radius: 350});
		$timer.arctext({radius: 400});
	}
			
/*--------------------------Frame Positioning------------------------------------*/
	
	var frame_top_offset=document_height*0.1;
	$("#frame").css("width","93%");
	$("#frame").css("top",frame_top_offset);
	
/*--------------------------Flippers Positioning---------------------------------*/

	flip_starter();
	
	var frame_top=$('#frame').offset().top;
	var frame_left=$('#frame').offset().left;
	var frame_width=$('#frame').width();
	var frame_height=frame_width*444/1366;
	
	$('.flip-container').css("width",frame_width*131/1366);
	$('.flip-container').css("height",frame_height*185/444);
	$('.flip-container').css("top",frame_top+frame_height*136/444);
	$('#flipper-1').css("left",frame_left+frame_width*241/1366);
	$('#flipper-2').css("left",frame_left+frame_width*394/1366);
	$('#flipper-3').css("left",frame_left+frame_width*548/1366);
	$('#flipper-4').css("left",frame_left+frame_width*699/1366);
	$('#flipper-5').css("left",frame_left+frame_width*847/1366);
	$('#flipper-6').css("left",frame_left+frame_width*998/1366);

/*-------------------------BACK ROADS ANIMATIONS-------------------------------*/
	$("#back-roads").delay(500).animate({'height': '100%'}, {duration : 1200, easing : 'easeInQuint'});
	
	setTimeout(function() { callAutoFlip(); }, 2000);
	setTimeout(function() { flipFunction(); }, 3000);
};																												


function flip_starter()					//FUNCTIONS TO START THE FLIPPERS AND ASSIGN THEM RANDOM IMAGES
{		
		$('.front')
			.queue(function(){$(this).css("-webkit-transform","rotateY(0deg)").dequeue();})
			.queue(function(){$(this).css("-moz-transform","rotateY(0deg)").dequeue();})
			.queue(function(){$(this).css("-o-transform","rotateY(0deg)").dequeue();})
			.queue(function(){$(this).css("-ms-transform","rotateY(0deg)").dequeue();})
			.queue(function(){$(this).css("transform","rotateY(0deg)").dequeue();})
			.queue(function(){$(this).css("display","block").dequeue();});
		
		$('.back')
			.queue(function(){$(this).css("-webkit-transform","rotateY(-900deg)").dequeue();})
			.queue(function(){$(this).css("-moz-transform","rotateY(-900deg)").dequeue();})
			.queue(function(){$(this).css("-o-transform","rotateY(-900deg)").dequeue();})
			.queue(function(){$(this).css("-ms-transform","rotateY(-900deg)").dequeue();})
			.queue(function(){$(this).css("transform","rotateY(-900deg)").dequeue();})
			.queue(function(){$(this).css("display","block").dequeue();});
			
			var i=1;
			var j=0;
			var k=0;
			while(i<7)
			{	var random_image = Math.floor((Math.random() * 22) + 1);
				
				while(1)
				{	for(j=0;j<5;j++)
					{	if(random_image == curr_image_data[j][0])
							break;
					}
					if(j == 5)
						break;
					random_image = Math.floor((Math.random() * 22) + 1);
				}
				
				$("#flipper-"+i+" .front").css('background-image','url(./images/flip'+random_image+'.png)');
				curr_image_data[i-1][0]=random_image;
				i=i+1;
			}
			
			i=1;
			j=0;
			k=0;
			
			while(i<7)
			{	var random_image = Math.floor((Math.random() * 22) + 1);
				
				while(1)
				{	for(j=0;j<5;j++)
					{	if(random_image == curr_image_data[j][0])
							break;
					}
					for(k=0;k<5;k++)
					{	if(random_image == curr_image_data[k][1])
							break;
					}
					
					if(j == 5 && k==5)
						break;
					random_image = Math.floor((Math.random() * 22) + 1);
				}
				
				$("#flipper-"+i+" .back").css('background-image','url(./images/flip'+random_image+'.png)');
				curr_image_data[i-1][1]=random_image;
				i=i+1;
			}
}; 

function flip(element_id_no)						//FUNCTION TO FLIP THE FLIPPERS
{	
	angle_data[element_id_no-1][0] = angle_data[element_id_no-1][0] + 900;
	angle_data[element_id_no-1][1] = angle_data[element_id_no-1][1] + 900;
	recently_flipped=element_id_no;
	var element = "#flipper-"+element_id_no;
	
	$(element).removeAttr("onclick");
	setTimeout(function(){$(element).attr('onclick', 'flip('+element_id_no+')');},2000);
	
	$(element+' .front').css('-webkit-transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
	$(element+' .front').css('-moz-transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
	$(element+' .front').css('-o-transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
	$(element+' .front').css('-ms-transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');
	$(element+' .front').css('transform','rotateY('+angle_data[element_id_no-1][0]+'deg)');

	$(element+' .back').css('-webkit-transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
	$(element+' .back').css('-moz-transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
	$(element+' .back').css('-o-transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
	$(element+' .back').css('-ms-transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
	$(element+' .back').css('transform','rotateY('+angle_data[element_id_no-1][1]+'deg)');
	
	var i=0;
	var j=0;
	var k=0;
	var random_image = Math.floor((Math.random() * 22) + 1);
	
	if(angle_data[element_id_no-1][0]%1800 == 0)
	{	while(1)
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
			random_image = Math.floor((Math.random() * 22) + 1);
		}
		
		curr_image_data[element_id_no-1][1]=random_image;		
		setTimeout(function(){$(element+' .back').css('background-image','url(./images/flip'+random_image+'.png)')},2000);
	}
	else
	{	while(1)
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
			random_image = Math.floor((Math.random() * 22) + 1);
		}
		
		curr_image_data[element_id_no-1][0]=random_image;		
		setTimeout(function(){$(element+' .front').css('background-image','url(./images/flip'+random_image+'.png)')},2000);
	}
}

function flipFunction() {
	setInterval(function() { setTimeout(function() { 
		var random_number = Math.floor((Math.random() * 6) + 1);
		while(recently_flipped == random_number)
		{	random_number = Math.floor((Math.random() * 6) + 1);
		}
		flip(random_number);
	}, Math.random()*5*1000 ) }, 3000);
};

function callAutoFlip() {
	if (flipReset == 6)
		flipReset = 0;
	else {
		flipReset = flipReset + 1;
		flip(flipReset);
		setTimeout( 'callAutoFlip()' , 300);
	}
}

$(window).resize(function(){			//FUNCTION TO HANDLE RESIZE

	
	var document_width=$(document).width();
	var document_height=$(document).height();
/*--------------------------Frame------------------------------------*/
	var frame_top_offset=document_height*0.1;
	
	$("#frame").css("width","93%"); 
	$("#frame").css("top",frame_top_offset);
	
/*--------------------------Flippers---------------------------------*/
	
	var frame_top=$('#frame').offset().top;
	var frame_left=$('#frame').offset().left;
	var frame_width=$('#frame').width();
	var frame_height=frame_width*444/1366;
	
	$('.flip-container').css("width",frame_width*131/1366);
	$('.flip-container').css("height",frame_height*185/444);
	$('.flip-container').css("top",frame_top+frame_height*136/444);
	$('#flipper-1').css("left",frame_left+frame_width*241/1366);
	$('#flipper-2').css("left",frame_left+frame_width*394/1366);
	$('#flipper-3').css("left",frame_left+frame_width*548/1366);
	$('#flipper-4').css("left",frame_left+frame_width*699/1366);
	$('#flipper-5').css("left",frame_left+frame_width*847/1366);
	$('#flipper-6').css("left",frame_left+frame_width*998/1366);
	
/*-----------------------CURVED TEXT-----------------------------*/
	 if($(document).width() > 800)
	{	$('#title').show();
		$('#timer').show();
		var $title = $('#title');
		var $timer = $('#timer');
		$title.arctext({radius: 350});
		$timer.arctext({radius: 400});
	}
	
	 if($(document).width() <= 800)
	{	var $title = $('#title').hide();
		var $timer = $('#timer').hide();
	}
}); 

$(window).blur(function(){
	/* clearInterval(autotimer); */
});
$(window).focus(function(){
	/* setTimeout(function (){autotimer = setInterval(function (){autoflip();},7000);},0); */
});

function setTime() {				//FUNCTION TO SET TIME LEFT
	var target_date = new Date("Oct 31, 2014").getTime();
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    var days = parseInt(seconds_left / 86400);
    $('.days').html(days);
	$('.days').html(days);
}

/*---------------------------Bulb-Animation------------------------------*/

/*---------------------------Global Variables----------------------------*/
var flag=0,style=0;

/*--------------------------Flicker Styles-------------------------------*/

function flicker(x)
{
	if(x==1) //effect 1
	{
		setInterval(function () {
			$(".bulb_container").fadeOut(500);
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
		h = $(window).height();
		h=h/36;
		h_int=Math.floor(h); 
		w = $(window).width();
		w=w/42;
		w_int=Math.floor(w);
		n=2*(h_int+w_int-1);
		setInterval(function() {
			x=n*Math.random();
			x=Math.floor(x);
			if($("#bulb"+x).css("display")==="none")
			{
				$("#bulb"+x).fadeIn(500);
			}	
			else
			{
				$("#bulb"+x).fadeOut(500);
			}

		},10);
	}
}

/*---------------------------------Function to put bulbs-----------------------------------*/

function put_side_bulbs()
{
	var h,h_int,w,w_int,bt;
	h = $(window).height();
	bt=(90*h)/768; //Calculation of elevation from the bottom
	bt2=(96*h)/768; //Calculation of elevation from the bottom
	h=h-((87*h)/768);
	h=h/36; //height divided by 36 (which is the height of bulb container) to give how many bulbs to be placed
	h_int=Math.floor(h); //floor of height to get the extra margin to be left
	h=h-36;
	w = $(window).width();
	w=w/42;
	w_int=Math.floor(w);
	for(i=0; i<h_int; i++) //loop for left edge
	{
		$(".container").append("<img class='bulb_container' id=bulb"+i+"></img>");
		$(".container").append("<img class='bulb_back' id=bulb_back"+i+"></img>");
		$("#bulb"+i).css("top",(h-h_int)+i*36); //h-h_int denotes the height to be left at the top, i*36 denotes the futher increment in height
		$("#bulb_back"+i).css("top",(h-h_int)+i*36);
		
		$("#bulb"+i).css("left",-5);
		$("#bulb_back"+i).css("left",-5);
	}
	for(j=0; j<w_int; j++) //bottom edge
	{
		$(".container").append("<img class='bulb_container' id=bulb"+i+"></img>");
		$(".container").append("<img class='bulb_back' id=bulb_back"+i+"></img>");
		$("#bulb"+i).css("bottom",bt);
		$("#bulb_back"+i).css("bottom",bt);
		$("#bulb"+i).css("left",(w-w_int)+j*42+10);
		$("#bulb_back"+i).css("left",(w-w_int)+j*42+10);
		i++;
	}

	for(j=h_int-1; j>=0; j--) //right edge
	{
		$(".container").append("<img class='bulb_container' id=bulb"+i+"></img>");
		$(".container").append("<img class='bulb_back' id=bulb_back"+i+"></img>");
		$("#bulb"+i).css("top",(h-h_int)+j*36); //h-h_int denotes the height to be left at the top, i*36 denotes the futher increment in height
		$("#bulb_back"+i).css("top",(h-h_int)+j*36);
		$("#bulb"+i).css("right",-5);
		$("#bulb_back"+i).css("right",-5);
		i++;
	}
	for(j=w_int-1; j>0; j--) //top edge
	{
		$(".container").append("<img class='bulb_container' id=bulb"+i+"></img>");
		$(".container").append("<img class='bulb_back' id=bulb_back"+i+"></img>");
		$("#bulb"+i).css("left",(w-w_int)-3+j*42);
		$("#bulb_back"+i).css("left",(w-w_int)-3+j*42);
		
		$("#bulb"+i).css("top",-5);
		$("#bulb_back"+i).css("top",-5);
		
		i++;		
	}

	/*---------------------------------Light-Backgrounds--------------------*/
		$(".side_back").append("<div class='container_left_back'></div>");
		$(".side_back").append("<div class='container_right_back'></div>");
		$(".side_back").append("<div class='container_top_back'></div>");
		$(".side_back").append("<div class='container_bottom_back'></div>");
		$(".container_bottom_back").css("bottom",bt2);
}

/*--------------------------------------Document.ready function----------------------------*/

$(document).ready(function(){
	if(flag==0)
	{	
		flag++;
		put_side_bulbs();
		flicker(3);
	}

	$(window).resize(function(){
		$(".container").empty();
		$(".side_back").empty();
		put_side_bulbs();
		flicker(3);
	});
});