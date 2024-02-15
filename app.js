fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListElement = document.getElementById("productlist");
    productListElement.style.display = 'flex';
    productListElement.style.flexWrap = 'wrap';
    productListElement.style.gap = '20px';

    data.forEach(product => {
      let clickCount = 0;

      const productItem = document.createElement("div");
      productItem.style.flex = '1 1 300px'; // Adjust width as needed
      productItem.innerHTML = `
        <h2>${product.product_name}</h2>
        <p>Product Description: ${product.product_description}</p>
        <p>Price: $${product.product_price}</p>
        <p>Date Added: ${product.product_dateAdded}</p>
        <img src="${product.product_image}" alt="${product.product_name} Image">
        <div class="card" style="width: 18rem;">
          <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
          <span class="click-counter">Clicks: ${clickCount}</span>
        </div>
        <hr>
      `;
      productListElement.appendChild(productItem);
      const addToCartButton = productItem.querySelector('.add-to-cart-btn');
      const clickCounter = productItem.querySelector('.click-counter');

      addToCartButton.addEventListener('click', () => {
        clickCount++;
        clickCounter.textContent = `Clicks: ${clickCount}`;
        addToCartButton.textContent = 'Done';
      });
    });
  })
  .catch(error => console.error('Error fetching data:', error));
