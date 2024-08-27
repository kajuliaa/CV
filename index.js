document.addEventListener("DOMContentLoaded", function() { 
console.log(document.querySelector("body"));


 //===== Sticky

 $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
        $(".header-navbar").removeClass("sticky");
    } else {
        $(".header-navbar").addClass("sticky");
    }
});



//=== Change active button
let container = document.querySelector("#navi");

console.log(container)
if(container!== null){
let btn = container.getElementsByClassName("nav-link");
for(let i =0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
        this.className+= " active";
    });
}
}
});