// alert("working")
// JS functionality for the hero section
const blurImage = document.getElementById("blur-side");
const opacity = document.getElementById("opacity-side");

// load initial value
let load = 0;

let int = setInterval(loadTime, 30)

function loadTime (){


    load++;
    
    if (load > 99){
        clearInterval(int)
    }

    opacity.style.opacity = scale(load, 0, 100, 0, 1)
    blurImage.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`
    // console.log(load);
  

}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

loadTime();

// JS functionality for the images part


const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-side-slider");
const slideLeft = document.querySelector(".left-side-slider");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 40}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }
    else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
} 

// live user filter
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const {  results  } = await res.json()

    // clear results
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <p>${user.name.first} ${user.name.last}</p>
            <p>${user.email} </p>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>

        `

        result.appendChild(li)
    })
}

function filterData(searchTerm){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')

        } else {
            item.classList.add('hide')
        }
    })
}

// loading image

const artImage = document.getElementById('artImage')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const artName = document.getElementById('art-name')
const artEmail = document.getElementById('art-email')
const artBtn = document.getElementById('art-link')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')




setTimeout (newImage , 2500)

function newImage() {
    artImage.innerHTML = ' <img src="https://picsum.photos/300/200" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, velit.'
    profile_img.innerHTML = '<img src="https:/randomuser.me/api/portraits/men/45.jpg" alt="">'
    artName.innerHTML = 'Iran Khrishnan'
    artEmail.innerHTML = 'iran@example.com'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}





// artBtn.addEventListener("click", () => {
//     artImage.innerHTML = ''
//     title.innerHTML = ''
//     excerpt.innerHTML = ''
//     profile_img.innerHTML = ''
//     artName.innerHTML = ''
//     artEmail.innerHTML = ''

//     animated_bgs.forEach(bg => bg.classList.add('animated-bg'))
//     animated_bg_text.forEach(bg => bg.classList.add('animated-bg-text'))

// });


artBtn.addEventListener('click', () => {
    artImage.innerHTML = '<img src="https://picsum.photos/300/200" alt="">'
})




