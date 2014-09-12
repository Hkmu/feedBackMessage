;(function($){
	'use strict';

	var feedBackMessage = function(id,message){
		if($(".feedBackMessage").length > 0){
			for(var i = 0;i < $(".feedBackMessage").length;i++){
				$($(".feedBackMessage")[i]).remove();
			}
			$('body').append("<div class='feedBackMessage' id=" + id + ">" + message + "</div>");
		}else{
			$('body').append("<div class='feedBackMessage' id=" + id + ">" + message + "</div>");
		}
		$("#" + id).animate({
			"top": "0px"
		},300);

		setTimeout(function(){
			$("#" + id).animate({
				"top": "-200px"
			},200);
		},4000);
	};

	$.feedBack = feedBackMessage;
})(jQuery);