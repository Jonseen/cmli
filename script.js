// code for the image slider
const scroller = document.querySelectorAll(".sponsor_scroller");


if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}


function addAnimation(){
   scroller.forEach(scroll => {
    scroll.setAttribute('data-animated', true);


    const scroll_Inner = scroll.querySelector(".sponsor_images");
    const scroll_Innercontent = Array.from(scroll_Inner.children);

    scroll_Innercontent.forEach((item) =>{
        const duplicatedImages = item.cloneNode(true);

        duplicatedImages.setAttribute("aria-hidden", true);
        scroll_Inner.appendChild(duplicatedImages);
    })
   });
}




// code for menu accordion
const menu = document.getElementById("menu_bar");
const page = document.getElementById("body");


const menu_on = menu.addEventListener('click', ()=>{
    const menu_field = document.querySelector(".menu_field");
    menu_field.classList.add("active");
    page.classList.add("overflow_off");


    const close = document.getElementById("close_btn");
    const close_menu = close.addEventListener("click", ()=>{
        menu_field.classList.remove("active");
    page.classList.remove("overflow_off");

    })
});





// intersection observer


const sections = document.querySelectorAll(".sections")

const observer = new IntersectionObserver(entries =>{

    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        // if(entry.isIntersecting) observer.unobserve(entry.target)
    },
{
    threshold: 1,
})
});


sections.forEach(section=>{
    observer.observe(section)
});