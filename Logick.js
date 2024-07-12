
    document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll("a[href^='#']");

        for (const link of links) {
            link.addEventListener("click", function(event) {
                event.preventDefault();

                const targetId = link.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth"
                    });
                }
            });
        }
    });



    document.addEventListener("DOMContentLoaded", function() {
        const burger = document.querySelector('.burger');
        const headContainer = document.querySelector('.head_container');
    
        burger.addEventListener('click', function() {
            headContainer.classList.toggle('active');
        });
    });
    

    
    

