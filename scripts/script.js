
var label = document.querySelector("label")
var effect = document.querySelector("#effect")
var button = document.querySelector("button")

label.style.visibility="hidden"
effect.style.visibility="hidden"
button.style.visibility="hidden"
imageLooper()

document.querySelector("body").addEventListener("mouseover",galeryImg)

function imageLooper(){
    for(var i=0; i<5 ;i++ ){
        var newImg = document.createElement("img")
        newImg.src=`images/pic${i+1}.jpg`
        newImg.alt=`pic no.${i+1}`
        newImg.class="thumbpic"
        document.querySelector("#thumb-bar").appendChild(newImg)
    }
}

function galeryImg(event){
    
    if(event.target.class==="thumbpic"){
        console.log('ding')
        let galPic = document.querySelector(".displayed-img")
        galPic.src = event.target.src
    }
}