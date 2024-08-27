document.addEventListener('DOMContentLoaded', function () {
    const productId = 555; // Se pasa el ID como un entero
    const productImage = document.getElementById('product-image');

    // Llamada a la API pasando el ID 555	
    fetch(`http://127.0.0.1:8000/recomendaciones/${productId}`)
        .then(response => response.json())
        .then(data => {
            // Mostrar la imagen del producto principal
            productImage.src = "http://books.google.com/books/content?id=HksgDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api";

            // Recomendaciones de productos
            const container = document.getElementById('recommendations-container');
            container.innerHTML = ''; // Limpiar contenedor anterior
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'recommended-product';
                productDiv.innerHTML = `
                    <h4>Producto Recomendado</h4>
                    <img src="${product.image}" alt="Producto Recomendado" />
                    <p>Similitud: ${product.similitud.toFixed(2)}</p>
                    <a href="/product/${product.id2}">Ver producto</a>
                `;
                container.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error en la llamada a la API:', error));
});