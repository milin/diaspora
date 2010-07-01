$(document).ready(function(){
	tinyMCE.init({
			mode : "exact",
			elements: "blog_editor",
			theme : "advanced",
			plugins : "emotions,spellchecker,advhr,insertdatetime,preview",	

			// Theme options - button# indicated the row# only
		theme_advanced_buttons1 : "newdocument,|,bold,italic,underline,|,justifyleft,justifycenter,justifyright,fontsizeselect,formatselect",
		theme_advanced_buttons2 : "cut,copy,paste|,bullist,numlist,|,outdent,indent|,undo,redo,|,link,unlink,anchor,image,|,preview,|,forecolor,backcolor",
		theme_advanced_buttons3 : "insertdate,inserttime,|,spellchecker,|,sub,sup,|,charmap,emotions",	
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		//theme_advanced_resizing : true //leave this out as there is an intermittent bug.
	});
	  
	$('a').hover(function(){
	  $(this).fadeTo(60, 0.5);
	}, function(){
	  $(this).fadeTo(80, 1);
	});

	$('ul.nav li').hover(function(){
	  $(this).fadeTo(60, 0.5);
	}, function(){
	  $(this).fadeTo(80, 1);
	});

	$('#status_message_message').click(clearForm);
	
	$('#bookmark_title').click(clearForm);
	
	$('#bookmark_link').click(clearForm);
	$('#debug_more').hide();
	$(":text").click(clearForm);

  function clearForm(){
	var text =  $(this).text()
   $(this).val("");

  }

	$('#debug_info').click(function() {
		$('#debug_more').toggle('fast', function() {
			
		});
	});
	
  

  $("label").inFieldLabels();
	
  $('#flash_notice, #flash_error, #flash_alert').delay(1500).slideUp(130);
  

  $("#stream li").hover(function() {
    $(this).children(".destroy_link").fadeIn(0);
  }, function() {
    $(this).children(".destroy_link").fadeOut(0);
  });

  // in field label plugin

  $(".show_post_comments").live('click', function(event) {
    event.preventDefault();
    if( $(this).hasClass( "visible" )) {
      $(this).html($(this).html().replace("hide", "show"));
      $(this).parents("li").children(".comments").fadeOut(100);
    } else {
      $(this).html($(this).html().replace("show", "hide"));
      $(this).parents("li").children(".comments").fadeIn(100);
    }
    $(this).toggleClass( "visible" );
  });

});//end document ready