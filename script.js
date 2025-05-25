const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", this.window.scrollY > 130);
}); 


    var typed = new Typed(".input", {
        strings: ["Web Designer.", "Web Developer."],
        typeSpeed: 120,
        backSpeed: 70,
        loop: true
    });

  
    function toggleBox(element) {
        // ตรวจสอบว่า .box มีคลาส active หรือไม่
        if (element.classList.contains('active')) {
            element.classList.remove('active'); // หากมีคลาส active ให้ลบออก
        } else {
            element.classList.add('active'); // หากไม่มีให้เพิ่มคลาส active
        }
    }
    