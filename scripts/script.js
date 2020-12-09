
var label = document.querySelector("label")
var effect = document.querySelector("#effect")
var button = document.querySelector("button")

label.style.visibility="hidden"
effect.style.visibility="hidden"
button.style.visibility="hidden"
imageLooper()

document.querySelector("body").addEventListener("mouseover",galeryImg)
document.querySelector("button").addEventListener("click",getEffect)

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
        let galPic = document.querySelector(".displayed-img")
        galPic.src = event.target.src
        label.style.visibility="visible"
        effect.style.visibility="visible"
        button.style.visibility="visible"
    }
}

function getEffect(event){
    let efName=effect.value
    if(efName==="blur"||efName === "Blur"){
        let path = document.querySelector(".displayed-img")
        let pic = path.src.substring(path.src.length-5,path.src.length-4) // The src of the image is the whole path name,
                                                        //   but I only need part of the image name. 
                                                        // This substring takes out the one I need
        path.src=`images/pic${pic}B.jpg`        
    }
    else{
        alert("Invalid entry. \nValid Entrie(s): blur")
    }
    effect.value =""
}