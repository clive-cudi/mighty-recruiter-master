(function(){
    const cont = document.getElementById('content');
    const bottom_nav = document.getElementById("bottom-nav");

    cont.addEventListener('scroll',()=>{
        if (cont.scrollTop > 500) {
            bottom_nav.setAttribute("style", "display: flex");
          } else {
            bottom_nav.setAttribute("style", "display: none")
          }
    })
})();