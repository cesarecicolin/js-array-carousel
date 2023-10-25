const img = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg"]

const slideElement = document.querySelector(".items")


let imageString = ""

for (let i = 0; i < img.length; i++) {
    // const slideImg = img[i];
    
    imageString +=  `
      <div class="item ">
                <img src="${img[i]}" alt="">
    </div>
    `
    



}
console.log(imageString)

slideElement.innerHTML += imageString

let curentIndex = 0
const imgElement = document.querySelectorAll(".item")
imgElement[curentIndex].classList.add("active")



const nextButton = document.querySelector(".next")

nextButton.addEventListener("click", function () {
    console.log("ciao")
    if(curentIndex < imgElement.length -1)
    {
        imgElement[curentIndex].classList.remove("active")
        curentIndex++
        imgElement[curentIndex].classList.add("active")
    }
    else 
    {
        imgElement[curentIndex].classList.remove("active")

        curentIndex = 0

        imgElement[curentIndex].classList.add("active")
    }

})
prevButton = document.querySelector(".prev").addEventListener("click", function () {
    console.log("ciao")
    if (curentIndex > 0) {
        imgElement[curentIndex].classList.remove("active")
        curentIndex--
        imgElement[curentIndex].classList.add("active")
    }

    else{
        imgElement[curentIndex].classList.remove("active")
        curentIndex =imgElement.length -1
        imgElement[curentIndex].classList.add("active")
    }
    
})
