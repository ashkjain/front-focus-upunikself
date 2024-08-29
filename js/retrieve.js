function retrieveFormData()
{
    const firstName = localStorage.getItem('fname');
    const lastName = localStorage.getItem('lname');
    const email = localStorage.getItem('email');

    const displayName = document.getElementById('fullName');
    const displayEmail = document.getElementById('email');

    if(lastName == "")
    {
        displayName.innerText = `${firstName[0]+firstName.slice(1)}`;
        displayEmail.innerText = email;
    }
    else
    {
        displayName.innerText = `${firstName[0].toUpperCase()+firstName.slice(1)} ${lastName[0].toUpperCase()+lastName.slice(1)}`;
        displayEmail.innerText = email;
    }
};

retrieveFormData();