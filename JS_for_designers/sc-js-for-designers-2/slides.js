// zbierz

const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// sprawdzaj 2 rzeczy
let currentSlide = 0
let z = 1


// keidy klikne w slider zmieniam slide który bazuje na z index

slideArea.addEventListener("click", function () {
  currentSlide = currentSlide + 1
  
  if (currentSlide > images.length - 1) {
    currentSlide = 0
  }
  
  z = z + 1
  
  // usuwamy animacje ze stylu dla kozdego zdjęcia
  
  images.forEach(image => {
    image.style.animation = ""
  })
  // bierz prawe zdjecie
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
})

// kiedy najadę myszką na odpowiednie pole, zdjęcia rozjadą się w dowolnym kierunku

slideArea.addEventListener("mouseover", function () {
  images.forEach(image => {
    const x = 25 * (Math.floor(Math.random() * 5)) - 50
    const y = 25 * (Math.floor(Math.random() * 5)) - 50
    
    image.style.transform = `translate(${x}px, ${y}px)`
  })
})



//kiedy zjezdzam ze zdjęcia - zdjęcia wracją do pierwotnego wyglady
slideArea.addEventListener("mouseout", function () {
  images.forEach(image => {
    image.style.transform = ""
  })
})













