function fireAnimations(){
	
	var document_width=$(document).width();
	var document_height=$(document).height();
	
	flip_starter();
	

	
	/* $("lights,strip,#back-roads").css("height",document_width*ratio); */
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
			
/*------------------------------Flippers end-------------------------------*/
	
	$("#back-roads").delay(1000).animate({'height': '100%'}, {duration : 1200, easing : 'easeInQuint'});
};


function flip_starter()
	{
		var front1=0;
		var back1=-900;
		var front2=0;
		var back2=-900;
		var front3=0;
		var back3=-900;
		var front4=0;
		var back4=-900;
		var front5=0;
		var back5=-900;
		var front6=0;
		var back6=-900;
		
		$('.back')
			.queue(function(){$(this).css("-webkit-transform","rotateY(-900deg)").dequeue();})
			.queue(function(){$(this).css("display","block").dequeue();});
	
		
		$('#flipper-1').click(function flip(){
			front1=front1+900;
			back1=back1+900;
			$('.front',this).css('-webkit-transform','rotateY('+front1+'deg)');
			$('.back',this).css('-webkit-transform','rotateY('+back1+'deg)');

		});
		
		$('#flipper-2').click(function flip(){
			front2=front2+900;
			back2=back2+900;
			$('.front',this).css('-webkit-transform','rotateY('+front2+'deg)');
			$('.back',this).css('-webkit-transform','rotateY('+back2+'deg)');

		});
		
			$('#flipper-3').click(function flip(){
			front3=front3+900;
			back3=back3+900;
			$('.front',this).css('-webkit-transform','rotateY('+front3+'deg)');
			$('.back',this).css('-webkit-transform','rotateY('+back3+'deg)');

		});
		
			$('#flipper-4').click(function flip(){
			front4=front4+900;
			back4=back4+900;
			$('.front',this).css('-webkit-transform','rotateY('+front4+'deg)');
			$('.back',this).css('-webkit-transform','rotateY('+back4+'deg)');

		});
		
			$('#flipper-5').click(function flip(){
			front5=front5+900;
			back5=back5+900;
			$('.front',this).css('-webkit-transform','rotateY('+front5+'deg)');
			$('.back',this).css('-webkit-transform','rotateY('+back5+'deg)');

		});
		
			$('#flipper-6').click(function flip(){
			front6=front6+900;
			back6=back6+900;
			$('.front',this).css('-webkit-transform','rotateY('+front6+'deg)');
			$('.back',this).css('-webkit-transform','rotateY('+back6+'deg)');

		});
	};

function flipAction(num,fr,bk) {
	fr=fr+900;
	bk=bk+900;
	var obj = $("#flipper-"+num)
	$('.front',obj).css('-webkit-transform','rotateY('+fr+'deg)');
	$('.back',obj).css('-webkit-transform','rotateY('+bk+'deg)');
}


$(window).resize(function(){
	
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
			
/*---------------------------Flippers End------------------------------------*/
	
}); 


function flipAction(num,fr,bk) {
	fr=fr+900;
	bk=bk+900;
	var obj = $("#flipper-"+num)
	$('.front',obj).css('-webkit-transform','rotateY('+fr+'deg)');
	$('.back',obj).css('-webkit-transform','rotateY('+bk+'deg)');
}




function setTime() {
	var target_date = new Date("Oct 31, 2014").getTime();
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    var days = parseInt(seconds_left / 86400);
    $('.timer').html("DAYS LEFT :: "+days);

}