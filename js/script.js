const items = document.getElementsByClassName("items")
console.log(items);
const slideElement = document.querySelector("items")

const img = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg" ]

let imageString ="1"

for (let i = 0; i < img.length; i++) {
    const slideImg = img[i];
    console.log(slideImg);
    imageString += 
    `
    <div class="item ">
                <img src="${slideImg}" alt="">
    </div>
    `
    
    

}
console.log(imageString)

