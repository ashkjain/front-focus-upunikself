# Frontend Focuse Webpage

## Webpages in this repository are created for the Frontend Developer Intern Position at UpUnikSelf

### Technologies Used in this repository: -
- HTML5
- CSS3
- TailWindCSS
- JavaScript
- JSON
- Node Package Manager

### Pages
This repository contains two HTML files that are connected, the `thanks.html` is intended to show upon form submission.
#### ./index.html
This webpage is the first page when opened using the direct link: [Frontend](https://ashkjain.github.io/front-focus-upunikself). This webpage uses the name frontend, this page is not associated with any domain named frontend, this project is just for educational purposes. The content on this page is a random text and is not associated with any entity named frontend.
#### ./thanks.html
This page occurs after form submission, the name, and email are passed on this page and showed to the user that their form is submitted.
### Styling
TailWindCSS has been used to style the pages, to implement TailWindCSS `Tailwind CLI` is used, since CDN is not recommended in the production environment and causes HTML Bloating.
#### ./CSS
This folder contains all the classes that are implemented on the page, and all classes are built using the Node Package Manager commands. Those commands have been configure in the `package.json` file.
#### ./input.css & ./thanks.css
These files are using the tailwind directives and all the styles are configured here, and upon building it, those classes are configured in the file called `style.css` and `thanks.css` in the CSS folder.

### Scripts
JavaScript has been used to make the website more dynamic and add functions like the Hamburger Button for the Navigation bar, current year for copyright, and getting the data upon form submission. 
#### ./js/script.js
This file contains three main functions that contribute to the dynamic nature and interactivity of the pages in this repository. The first function is used to make the hamburger button toggle possible, and upon clicking on the mobile screen it makes the navigation hidden using the tailwindcss class called hidden on each anchor tag. The second function is just adding the current year in the footer after the copyright symbol. The last function is created to receive the form data and store it in local storage, so it can be used in the `thanks.html` page to show the form information.
####./js/retrieve.js
This file contains only one function and the sole purpose of that function is to collect the data from local storage and then pass it to the page where the information needs to be provided.
####./js/api.js
This file serves a significant purpose in this project, this file contains only one function that fetches the API and adds the content in the product section of the page. And if the call is failed there is an HTML passed which also has tailwind classes on it. If there is no content in the returned object, there is another HTML that will be passed.

### JSON
JSON is used in this to show the ability to use API. The JSON was fetched on the main page to show the products and their information.
#### ./api/api.json
This is a JSON file that is stored in the same main directory where other content resides. The sole purpose of using this JSON is to show a frontend developer's capability to handle API and use it to show content dynamically.

### Node Package Manager (npm)
Node is a big part of this project because the npm HTML is not bloated with tailwind classes. And since plain CSS is not used in this project directly, the size of the page is significantly smaller.

## Contact
If you have any concerns about the names or content used in this project, or if you believe that any of the content or names belong to you or your organization and should be removed, please contact me at <ashkjain0@gmail.com>. I will address any issues promptly.
