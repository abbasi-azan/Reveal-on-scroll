// JavaScript for revealing elements on scroll and load
const sections = document.querySelectorAll("section")

sections.forEach((section) => {
    // add active class to all sections on the page according to the position of the page scrolled so far on page load and scroll
    window.addEventListener("load", eventListener);
    window.addEventListener("scroll", eventListener);

    function eventListener() {
        let windowHeight = window.innerHeight;
        let sectionRectTop = section.getBoundingClientRect().top;

        // console.clear();
        // console.log("Windows Height: " + windowHeight);
        // console.log("Windows RectTop: " + sectionRectTop);

        if (sectionRectTop < windowHeight) {
            section.classList.add("active");
        }
    }

    // revealing elements one by one on scroll
    // window.addEventListener("scroll", () => {
    //     let reveals = section.querySelectorAll(".reveal");

    //     reveals.forEach((reveal, index) => {
    //         if (section.classList.contains("active")) {
    //             const delay = 600;

    //             setTimeout(() => {
    //                 reveal.classList.add("active")
    //             }, index * delay);
    //         }
    //     });
    // });

// revea;ing elements one by one on scroll according to a revealing point
window.addEventListener("scroll", () => {
    let reveals = section.querySelectorAll(".reveal");

    reveals.forEach((reveal, index) => {
        let windowHeight = window.innerHeight;
        let revealRectTop = reveal.getBoundingClientRect().top;
        let revealPoint = -250;

        if(revealRectTop < windowHeight - revealPoint) {
            const delay = 600;

            setTimeout (() => {
                reveal.classList.add("active");
            }, index * delay);
        }
    });
});




    // revealing elements one by one on load(page reload)
    window.addEventListener("load", () => {
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealRectTop = reveal.getBoundingClientRect().top;

            if(revealRectTop < windowHeight) {
                const delay = 600;

                setTimeout (() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });
}); 