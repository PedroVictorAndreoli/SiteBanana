
  function  addProductTable(name, price, quantity, imageUrl){
      const newRow = `
          <tr class="bg-warning text-white">
              <td>${name}</td>
              <td>${price}</td>
              <td><input class="quantity" type="number" value="${quantity}"</td>
              <td class="total">${(price*quantity).toFixed(2)}</td>
              <td><img src="${imageUrl}" width="50" height="50"></td>
              <td><i class="fa fa-trash" id="btn-remove-${name}"></i></td>
          </tr>
      `
      const tableBody = document.querySelector("#tbProducts tbody");
      tableBody.insertAdjacentHTML('beforeend', newRow);
      const deleteButton = document.getElementById(`btn-remove-${name}`);
      deleteButton.addEventListener('click', function(){
          deleteItem(name);
      })
  
      //adicionar evento de alteração à quantidade
      const row = tableBody.lastElementChild;
      const quantityInput = row.querySelector('.quantity');
      //console.log(quantityInput);
      quantityInput.addEventListener('change', function(){
          const quantity = parseInt(quantityInput.value);
          const totalPrice = price * quantity;
          const total = row.querySelector('.total');
          total.textContent=totalPrice.toFixed(2);
          saveProductStorage(name, price,quantity);
      })
  
      console.log(row);
  
  }
  
  function isProductAlreadyInTable(name){
      const rows = document.querySelectorAll("#tbProducts tbody tr");
      //console.log(row);
      let exist = null;
      rows.forEach(function(row){
          if(row.querySelector('td:first-child').textContent === name){
              exist = row;
          }
      });
      console.log(exist);
      return exist;
  
  }
  
  
  
  function clearInputs(){
      document.getElementById('name').value = '';
      document.getElementById('price').value='';
  }
  
  ///let products=[];
  
  function loadTableFromStorage(){
      const products = JSON.parse(localStorage.getItem('produtos')) || [];
      products.forEach(product => {
          addProductTable(product.name, product.price, product.quantity, product.imageUrl)
      })
  }
  
  //quando o HTML é completamente carregado
  document.addEventListener('DOMContentLoaded', function(){
      loadTableFromStorage();
  })
  
  function deleteItem(name){
      const row = isProductAlreadyInTable(name);
      row.remove();
      //console.log(row);
  
      const products = JSON.parse(localStorage.getItem('produtos')) || [];
      
      const updateStorage = products.filter(function(product){
              return product.name!==name;
      })
      //const updateStorage = products.filter((product)=>product.name!==name)
  
      localStorage.setItem('produtos', JSON.stringify(updateStorage));
  
  }