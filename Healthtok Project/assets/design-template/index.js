// Wait for the DOM content to load

document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    var dropdownLink = document.querySelector('.toggle');
    var submenu = document.querySelector('.nav__right__wrapper');
    var closeButton = document.querySelector('.close'); // Add this line to get the close button

    // Add click event listener to the dropdown link
    dropdownLink.addEventListener('click', function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
        
        // Toggle the class 'active' on the submenu to show/hide it
        submenu.classList.toggle('show');
    });

    // Add click event listener to the close button
    closeButton.addEventListener('click', function(event) {
        // Prevent the default behavior of the button
        event.preventDefault();

        // Hide the submenu by removing the 'show' class
        submenu.classList.remove('show');
    });
});



  /*
document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown trigger elements
    var dropdownTriggers = document.querySelectorAll('.nav-link');

    // Iterate over each dropdown trigger
    dropdownTriggers.forEach(function(trigger) {
        // Add click event listener to each trigger
        trigger.addEventListener('click', function() {
            var dropdownContent = this.nextElementSibling;
            
            // Check if the clicked dropdown is already open
            var isOpen = dropdownContent.classList.contains('active');
            
            // Close all dropdowns
            closeAllDropdowns();

            // If the clicked dropdown wasn't open, open it
            if (!isOpen) {
                dropdownContent.classList.add('active');
            }
        });
    });

    // Function to close all dropdowns
    function closeAllDropdowns() {
        var activeDropdowns = document.querySelectorAll('.dropdown-menu.active');
        activeDropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.hero-container', {
        direction: 'horizontal',
        loop: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        effect: 'fade', // Change this line to set the fade effect
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
*/