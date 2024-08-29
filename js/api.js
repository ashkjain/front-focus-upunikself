const element = document.getElementById('productContainer');
const url = 'https://raw.githubusercontent.com/ashkjain/front-focus-upunikself/main/api/product.json';
async function fetchApiData(url) {
    try {
        const result = await fetch(url, { cache: 'no-store' });  // Used this to disable caching
        if (!result.ok) {
            element.innerHTML = '<p id="productNone">Unable To Provide Products Details! We Apologize For Inconvenience</p>'
        } else {
            const json = await result.json();
            if (json.length === 0) {
                element.innerHTML = '<p id="productNone">No Products To Show</p>'
            }
            else {
                let productHtml = '';
                for (let iterate = 0; iterate < json.length; iterate++) {
                    const product = json[iterate];
                    productHtml += `<div class="product">
                            <img src="${product.product_image}" alt="">
                            <h3>${product.product_name}</h3>
                            <p>${product.product_desc}</p>
                            <a href="#">Take Me There</a>
                        </div>`;
                }
                element.innerHTML = productHtml;
            }

        }
    } catch (error) {
        console.log(error.message);
    }
};
fetchApiData(url);
