/**
*	@author : hejie <jiehecd@gmail.com>
*   @webSite: http://artle.me
*   @time   : 12/9/2014
*   @version: 0.1
*/
;(function($){
	'use strict';

	// id      {string} : The id of a new conctainer which wrapper the message you want to show.
	// message {string} : The message you want to show.

	var feedBackError = function(id,message){
		// 
		if($(".feedBackSuccessMessage").length > 0){
			for(var i = 0;i < $(".feedBackSuccessMessage").length;i++){
				$($(".feedBackSuccessMessage")[i]).remove();
			}
		}
		// Make sure there is noly one "div" which has class "feedBackMessage"
		if($(".feedBackErrorMessage").length > 0){
			for(var i = 0;i < $(".feedBackErrorMessage").length;i++){
				$($(".feedBackErrorMessage")[i]).remove();
			}
			$('body').append("<div class='feedBackErrorMessage' id=" + id + ">" + message + "</div>");
		}else{
			$('body').append("<div class='feedBackErrorMessage' id=" + id + ">" + message + "</div>");
		}

		// Show the message after creating it.
		$("#" + id).animate({
			"top": "0px"
		},300);

		// Hide the message after some time.
		setTimeout(function(){
			$("#" + id).animate({
				"top": "-200px"
			},200);
		},4000);
	};

	var feedBackSuccess = function(id,message){
		if($(".feedBackErrorMessage").length > 0){
			for(var i = 0;i < $(".feedBackErrorMessage").length;i++){
				$($(".feedBackErrorMessage")[i]).remove();
			}
		}
		if($(".feedBackSuccessMessage").length > 0){
			for(var i = 0;i < $(".feedBackSuccessMessage").length;i++){
				$($(".feedBackSuccessMessage")[i]).remove();
			}
			$("body").append("<div class='feedBackSuccessMessage' id='" + id + "'>" + message + "</div>");
		}else{
			$("body").append("<div class='feedBackSuccessMessage' id='" + id + "'>" + message + "</div>")
		}

		$("#" + id).animate({
			"top" : "0px"
		});
		setTimeout(function(){
			$("#" + id).animate({
				"top": "-200px"
			},200);
		},4000);
	}
	$.feedBackError   = feedBackError;
	$.feedBackSuccess = feedBackSuccess;
})(jQuery);