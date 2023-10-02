
const buttonsAdd = document.querySelectorAll('.product__add');

buttonsAdd.forEach(btn => btn.addEventListener('click', function() {
  console.log(btn);
  const id = + btn.getAttribute('data-id');
  const currentCount = document.querySelector('.cart-count-bubble > span');
  let formData = {
    'items': [
      {
        'id': id,
        'quantity': 1
      }
    ]
  };

  fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(response => {
    fetch(window.Shopify.routes.root + 'cart.js').then(res => res.json()).then(data => currentCount.innerHTML = `(${
      data.item_count
    })`)
    return response.json();
  }).catch((error) => {
    console.error('Error:', error);
  });
}))