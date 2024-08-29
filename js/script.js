function hamburgerToggle() {
    const hamburger = document.getElementById('hamburgerButton');
    const navigation = document.querySelectorAll('.navLinks');
    hamburger.addEventListener('click', () => {
        navigation.forEach((nav) => 
        {
            nav.classList.toggle('hidden');
        })
    });
};

function copyrightYear()
{
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('year');
    yearElement.innerText = currentYear;   
};
hamburgerToggle();
copyrightYear();