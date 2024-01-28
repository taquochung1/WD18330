const productList = document.getElementById('product-list');
// Tạo mảng products để chứa danh sách product (api)
let products = [];
function getProduct() {
    fetch('http://localhost:3000/products').then(response => response.json()).then(data => {
        products = data;
        displayProduct(); // Hàm innerHTML
        // dữ liệu json server sẽ trả về là 1 cục data
    }).catch(error => console.error())
}
function displayProduct() {
    productList.innerHTML = ` 
    <tr>
      <th>name</th>
      <th>price</th>
      <th>Edit</th>
    </tr>
   
    ${products.map(product => `
    <tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td> 
         <button class="edit-btn" data-id="${product.id}">Edit</button>
         <button class="delete-btn" data-id="${product.id}">Delete</button>
      </td>
    </tr>
    `).join('')}
  
        `;
}
getProduct();