let time = 3000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")

    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")


    currentImageIndex++

    if(currentImageIndex >= max)
    currentImageIndex = 0

    //console.log(images[0])

    images[currentImageIndex]
        .classList.add("selected")

}   

function start() {
    setInterval(() => {
        //console.log("funcao rodada") troca de imagem 
        nextImage()
    }, time)

}  

window.addEventListener("load",start)

