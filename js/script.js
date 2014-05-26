/*------------------------------GLOBAL VARIABLES-----------------------*/
var start = new Date().getTime();
var angle_data = [[0,-900],[0,-900],[0,-900],[0,-900],[0,-900],[0,-900]];
var curr_image_data = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
/* var autotimer = setInterval(function (){autoflip();},7000); */
var recently_flipped = 0;

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
	$("#back-roads").delay(1000).animate({'height': '100%'}, {duration : 1200, easing : 'easeInQuint'});
	
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

function autoflip(){					//FUNCTION TO AUTO FLIP THE FLIPPERS
	var random_number = Math.floor((Math.random() * 6) + 1);
		while(recently_flipped == random_number)
		{	random_number = Math.floor((Math.random() * 6) + 1);
		}
	flip(random_number);
	
};


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