var playing=false;
var score;
var trialsleft;
var fruits=['apple','bananas','cherry','grapes','mango','melon','orange','peach','pineapple'];
var step;
var action;//used for setinterval
$(function(){
    
    // click on start/reset button
    $("#startreset").click(function(){
        
        //we are playing
        if(playing== true){
            
            //reload page
            location.reload();
        }
        else{
            
            //we are not playing
            playing=true;//game initiated
            
            //set score to zero
            score=0;
            $("#scorevalue").html(score);
            
            //show trials left
            $("#trialsleft").show();
            trialsleft=3;
            addHearts();  
            
            //hide game over box
            $("#gameover").hide();
            
            //change button to reset game
            $("#startreset").html("Reset Game");
            
            //start sending fruits
            
            startAction();
            
            
            
        }
    });


   $("#fruit1").mouseover(function(){
      score++;
      $("#scorevalue").html(score);//update score
    
   document.getElementById("slicesound").play();
   //play sound
    
       //stop fruit 
       clearInterval(action);
       
       // hide fruit
       $("#fruit1").hide("explode",500);//slicing fruit
       
       
       //send new fruit
       setTimeout(startAction,800);
});


//slice a fruit
     //play sound
     //explode fruit

//function
function addHearts(){
    $("#trialsleft").empty();
      for(i=0;i<trialsleft;i++){
                $("#trialsleft").append('<img src="images/heart.png" class="life">');
            }

    
    
}

//start sending fruits

function startAction(){
    
    //generate a fruit
    $("#fruit1").show();
   chooseFruit();//choose a random fruit
    $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});
    //random position
    
    
    //generate a random step
   step= 1+Math.round(5*Math.random());//change a step
    
    //move fruit dowm by one step every 10ms
    
    action=setInterval(function(){
       
        //move fruit down by one 
$("#fruit1").css('top',$("#fruit1").position().top + step);
        
        //check if fruit is too low
if($("#fruit1").position().top >            $("#fruitcontainer").height()){
            
    //check if we have trial left
            if(trialsleft > 1){
          //generate a fruit
            $("#fruit1").show();
           chooseFruit();//choose a random fruit

    //random position
$("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});
            


    //generate a random step
           step= 1 + Math.round(5*Math.random());//change a step

                //reduce trials by 1
                trialsleft--;
                //populate trials left box
                addHearts();
                
               }
            else{
                //game over
                playing=false //we're not playing anymore
                
                //chnage start/reset button
                $("#startreset").html("Start Game");
                $("#gameover").show();//game over message box
                $("#gameover").html('<p>Game Over!</p><p>Your Score is ' + score + '</p>');
                $("#trialsleft").hide();
                stopAction();
         }
    
        }
    },10);
}

//generate a random fruit

function chooseFruit() {
    $("#fruit1").attr('src','images/'+ fruits[Math.round(8*Math.random())]+'.png');
}

//stop dropping fruit
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}

});






