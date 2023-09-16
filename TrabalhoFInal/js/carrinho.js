
  document.querySelectorAll('[id^="BtnCompra"]').forEach(el => {
    el.addEventListener('click', function(e) {
      //console.log(id); 
      let elementosDiv = this.parentNode.childNodes;
      let nome,valor,imagem;
      //const quantidade = 1;
      //console.log(elementosDiv);
      elementosDiv.forEach(e =>{
        if(e.classList == "card-title")
            nome = e.textContent;
        else if(e.classList == "card-value")
            valor = e.textContent.replace("R$ ", "").replace(".","").replace(",00", "");
        else if(e.classList== "card-image")
            imagem = e.querySelector("img").getAttribute('src');
      });
      
      saveProductStorage(nome, valor, imagem);
    });
  });

  function saveProductStorage(name, price, imageUrl){
  
     const products = JSON.parse(localStorage.getItem('produtos'))||[];
     const existingIndex = products.findIndex(product=>product.name===name);
     const quantity = 1;
     //console.log("index do produto e" +existingIndex);
     if(existingIndex != -1){//se o produto foi encontrado
       products[existingIndex].quantity = products[existingIndex].quantity + 1;
       alert("Item "+ name + "ja foi adicionado no seu carrinho, adicionado mais um na quantidade total");
     } else{
       products.push({name, price,quantity, imageUrl});
       alert("Item "+ name + "adicionado no seu carrinho");
     }
      //console.log(products);
      localStorage.setItem('produtos', JSON.stringify(products));
  }
  