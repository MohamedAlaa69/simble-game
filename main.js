var person=document.getElementById("person")
var dog=document.getElementById("dog")
var tree=document.getElementById("tree")
var textScore=document.getElementById("textscore")
var score=document.getElementById("score")
var x=0;


function jumping(){
    person.classList.add('animate');
    setTimeout(function(){
        person.classList.remove('animate')
        
    },500)

}




var check=setInterval(
    function(){
        var persontop=parseInt(window.getComputedStyle(person).getPropertyValue("top"))
        var dogleft=parseInt(window.getComputedStyle(dog).getPropertyValue("left"))
        var treeleft=parseInt(window.getComputedStyle(tree).getPropertyValue("left"))
        if(persontop>=180 &&dogleft>10 && dogleft<130 || persontop>=180 && treeleft>0 && treeleft<130 ){
            dog.style.animation="none";
            tree.style.animation="none";
            alert("you lose")
            window.location.reload
        }

    }
    ,5)

var win=setInterval(
    function(){
var persontop2=parseInt(window.getComputedStyle(person).getPropertyValue("top"))
var dogleft2=parseInt(window.getComputedStyle(dog).getPropertyValue("left"))
var treeleft2=parseInt(window.getComputedStyle(tree).getPropertyValue("left"))
if(dogleft2<100) {
    score.innerHTML="your score is : "+(x+=1)
   
}
}
,2000)

var speed=setTimeout(function(){
    dog.style.animation="move 0.5 infinite linear"
},5000)




