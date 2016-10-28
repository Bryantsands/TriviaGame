
$(document).ready(function() {
	$("button").click(function(){
	$("#start").on("click",timer.start);
	
	$("#start").fadeOut();


var game= {

		questions:{

	first:{
		Q:"How many periods in a hockey game",
	answers:["2","3","4","5"],
	correctAnswer:1,
			},
	second: {
		Q:"In what sport is the Super Bowl",
	answers:["Baseball","Basketball","Hockey","Football"],
	correctAnswer:3,
			},
	third:{
		Q:"What city is home of Broncos",
	answers:["Dallas","Montana","Denver","Florida"],
	correctAnswer:2,
			},

	fourth:{
	Q:"How many outs per inning for baseball",
	answers:["2","4","3","1"],
	correctAnswer:2,
			},
	fifth:{
	Q:"How many innings in a Baseball Game",
	answers:["9","10","7","11"],
	correctAnswer:0,
		},
	},

	time:60,
	correct:0,
	Wrong:0,
	questionsArray:[],
	numQuestions:0,
	userguess:0,

	displayTimer: function(timer){
		$("timer").html("Time Left"+ timer + "seconds");
	},
	startTimer: function(){
		game.timer= 60;
		game.displayTimer(game.timer);
		game.timer.interval= setInterval(function(){game.decrementTimer();},1000);
	},

	stopTimer: function(){
		clearInterval(game.interval)
	},

	decrementTimer: function(){
		game.timer--;
		game.displayTimer(game.timer);

		if (game.timer===0){
			handleTimeout();
		
	}
},




timeConverter: function(t){
        var seconds= Math.floor(t/1000);
        
        if(seconds<=0){
        	
       alert("times up")
        }
    },
}
});
       
    

});






