const element = document.getElementById('content');
const url = 'https://raw.githubusercontent.com/ashkjain/front-focus-upunikself/main/api/product.json';
async function fetchApiData(url) {
    try {
        const result = await fetch(url, { cache: 'no-store' });  // Disable caching
        if (!result.ok) {
            element.innerHTML = '<p>No Product To Show</p>;'
        } else {
            const json = await result.json();
            if(json.length === 0)
            {

            }
            else
            {
                let productHtml = '';
                for(let iterate = 0; iterate < json.length; iterate++)
                {
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
/* 

<div class="product">
                            <img src="./assets/buffalo.png" alt="">
                            <h3>Product 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae eos tempora expedita esse amet in porro reprehenderit qui consequatur?</p>
                            <a href="#">Take Me There</a>
                        </div>

 */