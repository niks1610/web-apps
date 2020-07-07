var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start/reset
document.getElementById("startreset").onclick =
    function(){
     //if we are playing
        if (playing == true) {
        
        location.reload(); //reload page
    }else{//if we are not playing
        
        //change mode to playing
        
        playing=true;
        //set score to 0
        
        score = 0;
document.getElementById("scorevalue").innerHTML= score;
       //show countdown box
        
    show("timeremaining");
        
         timeremaining = 60;
        
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over
        hide("gameover");
        
        
        //change button to restart
        
document.getElementById("startreset").innerHTML="Reset Game";   
        
        //start countdown
        
        startcountdown();

        // generate a question and multiple answer
        
       generateQA();
    }
}

//clicking on an answer box


for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
    //check we are playing
    
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            //correct answer
            
            score++;
            
document.getElementById("scorevalue").innerHTML = score;
            
            //show correct box and hide wrong box
            
       hide("wrong");
       show("correct");
       setTimeout(function(){
           hide("correct");
       },1000)
            
        //generate new QA
            
            generateQA();
            
        }else{//wrong answer
            
       hide("correct");
       show("wrong");
       setTimeout(function(){
           hide("wrong");
       },1000)
            
      
        }
    }
    
}
}

//if we click on answer box
   //if we are playing
        //correct?
              //yes
                   //increase score 
                   //show correct box for 1sec
                   // generate new Q&A
             //no
                //show tryagain box for 1sec

// functions

//start counter
function startcountdown(){
action = setInterval(function(){
    timeremaining-=1;
    
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if(timeremaining == 0){//gameover
        
        stopcountdown();
           show("gameover");
        
document.getElementById("gameover").innerHTML="<p>Game Over!</p><p>Your Score is "+score +".</p>";       
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing=false;

document.getElementById("startreset").innerHTML = "Start Game";
    }

},1000);
}


//stop counter
function stopcountdown(){
    clearInterval(action);
}

//hide an element
function hide(Id){
    document.getElementById(Id).style.display="none";
}

//show an element
function show(Id){
    document.getElementById(Id).style.display="block";
}

// generate Q&A

function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    
document.getElementById("question").innerHTML = x + "x" + y;
     var correctPosition = 1 + Math.round(3*Math.random());
    
document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with correct answer
    
    //fill other boxes with wrong answer
    
    var answers = [correctAnswer];
    
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            wrongAnswer = (1+Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); // a wrong answer
            
            do{
                 wrongAnswer = (1+Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
            }
                while(answers.indexOf(wrongAnswer)>-1)
            

document.getElementById("box"+i).innerHTML = wrongAnswer;            
           answers.push(wrongAnswer); 
        }
    }
    
}