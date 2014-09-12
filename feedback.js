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

	var feedbackError = function(id,message){
		// 
		if($(".feedbackSuccessMessage").length > 0){
			for(var i = 0;i < $(".feedbackSuccessMessage").length;i++){
				$($(".feedbackSuccessMessage")[i]).remove();
			}
		}
		// Make sure there is noly one "div" which has class "feedBackMessage"
		if($(".feedbackErrorMessage").length > 0){
			for(var i = 0;i < $(".feedbackErrorMessage").length;i++){
				$($(".feedbackErrorMessage")[i]).remove();
			}
			$('body').append("<div class='feedbackErrorMessage' id=" + id + ">" + message + "</div>");
		}else{
			$('body').append("<div class='feedbackErrorMessage' id=" + id + ">" + message + "</div>");
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
		},3000);
	};

	var feedbackSuccess = function(id,message){
		if($(".feedbackErrorMessage").length > 0){
			for(var i = 0;i < $(".feedbackErrorMessage").length;i++){
				$($(".feedbackErrorMessage")[i]).remove();
			}
		}
		if($(".feedbackSuccessMessage").length > 0){
			for(var i = 0;i < $(".feedbackSuccessMessage").length;i++){
				$($(".feedbackSuccessMessage")[i]).remove();
			}
			$("body").append("<div class='feedbackSuccessMessage' id='" + id + "'>" + message + "</div>");
		}else{
			$("body").append("<div class='feedbackSuccessMessage' id='" + id + "'>" + message + "</div>");
		}

		$("#" + id).animate({
			"top" : "0px"
		});
		setTimeout(function(){
			$("#" + id).animate({
				"top": "-200px"
			},200);
		},3000);
	}
	$.feedbackError   = feedbackError;
	$.feedbackSuccess = feedbackSuccess;
})(jQuery);