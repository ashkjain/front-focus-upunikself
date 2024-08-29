function hamburgerToggle() {
    const hamburger = document.getElementById('hamburgerButton');
    const navigation = document.querySelectorAll('.navLinks');
    hamburger.addEventListener('click', () => {
        navigation.forEach((nav) => 
        {
            nav.classList.toggle('hiddenNav');
        })
    });
};

function copyrightYear()
{
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('year');
    yearElement.innerText = currentYear;   
};

function getFormData()
{
    const contactForm = document.getElementById('form');
    contactForm.addEventListener('submit', (event) => 
        {
            event.preventDefault();

            const firstName = document.getElementById('fname').value;
            const lastName = document.getElementById('lname').value;
            const email = document.getElementById('email').value;

            localStorage.setItem('fname', firstName);
            localStorage.setItem('lname', lastName);
            localStorage.setItem('email', email);

            window.location.href = 'thanks.html';
        });
};

copyrightYear();
getFormData();
hamburgerToggle();