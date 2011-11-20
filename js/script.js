$(document).ready(function() {
	
	
	//Begin Cufon replacement and text-shadow 
	Cufon.replace('h1,h4,h5,h3, span.call-text,#form .overlayForm-wrap h2,#overlayForm .submit-button,.action-btn a');
	Cufon.replace('.title h4,h4.title-center,#overlayForm .submit-button, .logo h1,.action-btn', {textShadow: '1px 1px 0px #a83333;'});
	Cufon.replace('.call h5', {textShadow: '0px 1px 0px #a83333;'});
	//End Cufon replacement and text-shadow 
	
	// Social share hover effect ( you need to change the borderColor for your color skin
	$('.social-share .col_third').hover(function() {
		$(this).stop().animate({borderColor: "#ee5a5a", backgroundColor:"#fff" }, 600);
		$('.social-share .col_two_third').stop().animate({borderColor:"#ccc", backgroundColor:"#f9f8f8" },600);
		},function() {
		$(this).stop().animate({borderColor: "#ccc", backgroundColor:"#f9f8f8"}, 400); 
		$('.social-share .col_two_third').stop().animate({borderColor:"#ee5a5a", backgroundColor:"#fff" },600);
	 });
	 // End Social share hover effect ( you need to change the borderColor for your color skin

//Validate pludgin Overlay form
$("#overlayForm").validate();
//End validate plugin Overlay form

	// Initiate Tabs  
	$('ul.tab_nav li a').click(function() {
		$("ul.tab_nav li a").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		
	});
	$(".tab_content").hide(); //Hide all content
	$("ul.tab_nav li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tab_nav li").click(function() {

		$("ul.tab_nav li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(800); //Fade in the active ID content
		return false;
	});
	// End tabs
	
	
	// Begin Fancybox ( all the elements that are wrappet in fancybox
	$("a[class=gal]").fancybox({
			'transitionIn'		: 'elastic',
			'transitionOut'		: 'elastic',
			'speeIn'			: 600,
			'speedOut'		:	200, 
			'titlePosition' 	: 'over',
			'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
				return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
			}
		});	
	 $("a.zoom-intro,a.zoom").fancybox({
			'overlayOpacity'	:	0.8,
			'overlayColor'		:	'black',
			'overlayShow'		:	true
			  });
	$("#subscribe").fancybox({
			'overlayOpacity'	:	0.8,
			'overlayColor'		:	'black',
			'overlayShow'		:	true
	
			  });
			  
			  
	$("a.video").click(function() { 
	$.fancybox({ 
	'autoScale'             : false, 
	'title'       : this.title, 
	'width'     : 640, //or whatever 
	'height'    : 360,
	//'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'), Uncomment this line if you are using youtube video and delete the next one(also the this comment and vimeo comment
	'href' : this.href.replace(new RegExp("([0-9])","i"),'moogaloop.swf? clip_id=$1'), //Delete this line if you are using youtube(this is for vimeo
	'type'       : 'swf' 
	}); 
	return false; 
	}); 		  
	// End Fancybox		  

	//General hover effects
	$('.app-image li span').hover(function() {
			// Lower the opacity 0.2
			$(this).stop().animate({
			opacity: "0.8" 
		}, 200);// duration 
		 
		},
				// restore the initial opacity
			   function() {
				   $(this).stop().animate({ opacity: "1.0" }, 200);
	
			   });
	$('.app-image li span.zoom').hover(function() {
			// Lower the opacity 0.2
			$(this).stop().animate({
			opacity: "0.8" 
		}, 200).css('z-index', '3');// duration 
		$('.img2').css('z-index', '2');
		 
		},
				// restore the initial opacity
			   function() {
				   $(this).stop().animate({ opacity: "1.0" }, 200).css('z-index', '1');;
					$('.img2').css('z-index', '0');
			   });		   
			   
		//Images Hover effect 	   
		$(".gallery li a,a.zoom-intro").hover(
		  function () {
			 $("img", this).stop().animate({ opacity: "0.7" }, 200);  
			$(this).append($("<span class='hover-zoom'></span>"));
			$('span.hover-zoom').stop().animate({backgroundColor:'#535353'},600);
		  }, 
		  function () {
			  $("img", this).stop().animate({ opacity: "1.0" }, 200);  
			 $('span.hover-zoom').stop().animate({backgroundColor:'#fff'},600); 
			$(this).find("span.hover-zoom").remove();
		  }
		);
		//End Images Hover effect 	
		
		//Begin buttons hover effect 
		$('.app-button,.social-links li a,.input-button,.action-btn,.action-btm').hover(function(){
					$(this).animate({opacity: 0.8}, 200);
				}, function () {
					$(this).animate({opacity: 1}, 300);});
		
		//End buttons hover effect 	   
		
	//Iniatiate tipsy script
	$('').tipsy({fade: true, gravity: 'n'});
	$('.subscribe-button,.social-links li a,.action-btn a,.action-btm').tipsy({fade: true, gravity: 'n'});
	$('').tipsy({fade: true, gravity: 's'});
	$(' .submit-button').tipsy({fade: true, gravity: 'e'});	
	//End tipsy script
	
	
	// themeswitcher
$('li.like').click(function() {
	$('.social-share').toggle();
	
	if($('.social-share').is(':visible')) {
		$('li.like .toggle').val('Hide');
		$('li.like').css('background','url(images/themeswitcher/check.png) center left no-repeat');
	} else {
		$('li.like .toggle').val('Show');
		$('li.like').css('background','url(images/themeswitcher/uncheck.png) center left no-repeat');
	}
	
});


$('li.tab').click(function() {
	$('.tab_section').toggle();
	
	if($('.tab_section').is(':visible')) {
		$('li.tab .toggle').val('Hide');
		$('li.tab').css('background','url(images/themeswitcher/check.png) center left no-repeat');
	} else {
		$('li.tab .toggle').val('Show');
		$('li.tab').css('background','url(images/themeswitcher/uncheck.png) center left no-repeat');
	}
	
});

$('li.com').click(function() {
	$('.fb-comments').toggle();
	
	if($('.fb-comments').is(':visible')) {
		$('li.com .toggle').val('Hide');
		$('li.com').css('background','url(images/themeswitcher/check.png) center left no-repeat');
	} else {
		$('li.com .toggle').val('Show');
		$('li.com').css('background','url(images/themeswitcher/uncheck.png) center left no-repeat');
	}
	
});

$('li.buy').click(function() {
	$('.bottom-outer').toggle();
	
	if($('.bottom-outer').is(':visible')) {
		$('li.buy .toggle').val('Hide');
		$('li.buy').css('background','url(images/themeswitcher/check.png) center left no-repeat');
	} else {
		$('li.buy .toggle').val('Show');
		$('li.buy').css('background','url(images/themeswitcher/uncheck.png) center left no-repeat');
	}
	
});
	 

  // themeswitcher
  $('.skins').hide();
 $('#options').hover(function() {
	
	 $('.skins').show();
	 $(this).animate({'width': '+=200px', 'height': '+=200px','right':'-=200px','opacity':'1'}, 100, 'linear');
	 $(this).css('background','#fff');
 },
 function() {
	 $('.skins').hide();
	 $(this).animate({'width': '-=200px','height': '-=200px','right':'+=200px','opacity':'0.5'}, 100, 'linear');
	 $(this).css('background','#09f');
 });	
//End themeswitcher
		});
	

