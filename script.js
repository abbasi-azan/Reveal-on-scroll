// JavaScript for revealing elements on scroll and load

const sections = document.querySelectorAll("section") //The code starts by selecting all the section elements on the page using the querySelectorAll method and storing them in the sections variable.

sections.forEach((section) => { //Next, a forEach loop is used to iterate over each section element.
    window.addEventListener("load", eventListener); //an eventListener is added for the load event
    window.addEventListener("scroll", eventListener); //an eventListener is added for the scroll event

    function eventListener() { //The eventListener function is defined to handle both the load and scroll events.
        let windowHeight = window.innerHeight; //It calculates the height of the window using window.innerHeight
        let sectionRectTop = section.getBoundingClientRect().top; //and the top position of the current section element using getBoundingClientRect().top

        // The calculated values are then logged to the console for debugging purposes
        // console.clear();
        // console.log("Windows Height: " + windowHeight);
        // console.log("Windows RectTop: " + sectionRectTop);

        if (sectionRectTop < windowHeight) {
            section.classList.add("active"); //If the top position of the section element is less than the height of the window, the active class is added to the section element, making it visible.
        }
    }

    // revealing elements one by one on scroll
    // window.addEventListener("scroll", () => { //Next, there is a section of code that reveals elements one by one on scroll. It listens for the scroll event and selects all elements with the class reveal within the current section.
    //     let reveals = section.querySelectorAll(".reveal");

    //     reveals.forEach((reveal, index) => {
    //         if (section.classList.contains("active")) {
    //             const delay = 600;

    //             setTimeout(() => {
    //                 reveal.classList.add("active")
    //             }, index * delay); //This delay creates a staggered effect, revealing each element one by one as the user scrolls.
    //         }
    //     });
    // });

    // revealing elements one by one on scroll according to a revealing point
    window.addEventListener("scroll", () => { 
        //There is another section of code that reveals elements one by one on scroll according to a revealing point. It follows a similar logic as the previous section, but with an additional check for the top position of the reveal element relative to the window height and a revealing point.
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealRectTop = reveal.getBoundingClientRect().top;
            let revealPoint = -250;

            if (revealRectTop < windowHeight - revealPoint) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });




    // revealing elements one by one on load(page reload)
    window.addEventListener("load", () => { //It follows a similar logic as the previous sections, but without the need for the active class check.
        let reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            let windowHeight = window.innerHeight;
            let revealRectTop = reveal.getBoundingClientRect().top;

            if (revealRectTop < windowHeight) {
                const delay = 600;

                setTimeout(() => {
                    reveal.classList.add("active");
                }, index * delay);
            }
        });
    });
}); 