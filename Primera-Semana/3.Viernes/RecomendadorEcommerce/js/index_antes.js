document.addEventListener('DOMContentLoaded', function () {
    const productId = document.getElementById('product-details').getAttribute('data-product-id');

    // Simulación de una llamada a API (esto deberías reemplazarlo por la llamada real)
    // Simulamos una respuesta con setTimeout para emular una llamada de red
    setTimeout(() => {
        const data = [
            { id: '001', name: 'Producto Similar 1', image_url: 'https://via.placeholder.com/100', price: '49.99' },
            { id: '002', name: 'Producto Similar 2', image_url: 'https://via.placeholder.com/100', price: '39.99' },
            { id: '003', name: 'Producto Similar 3', image_url: 'https://via.placeholder.com/100', price: '59.99' }
        ];

        const container = document.getElementById('recommendations-container');
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'recommended-product';
            productDiv.innerHTML = `
                <h4>${product.name}</h4>
                <img src="${product.image_url}" alt="${product.name}" />
                <p>Precio: ${product.price}</p>
                <a href="/product/${product.id}">Ver producto</a>
            `;
            container.appendChild(productDiv);
        });
    }, 1000);
});