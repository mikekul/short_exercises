//Klikam na menu i otwiera się menu
const toggleTag = document.querySelector("a.toggle-nav") 
const mainTag = document.querySelector("main")

// kiedy klikam tag toggle a class otwiera się main tag
// i jesli jest otwarty zrób toggle tag zamkniety
// i jesli jest zamkniety zrob toggle tag otwarty

toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open")
  
  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = '<img src="close.svg"> Zamknij'
  } else {
    toggleTag.innerHTML = '<img src="menu.svg"> Menu'
  }
  
  
})