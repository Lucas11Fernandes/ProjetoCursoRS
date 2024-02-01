function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
       img.setAttribute("src", "./assets/user-avatar_-320x340.png")
     } else {
       img.setAttribute("src", "./assets/6596121.png")
     }

}