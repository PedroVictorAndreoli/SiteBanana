export const headerComponent = function(){
   return `
   <nav class="navbar navbar-expand-lg navbar-light">
   <div class="container-fluid">
     <img class="imagem" src="img/logo.png" alt="Gildasio Banana">
     <button class="navbar-toggler" type="button" >
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNav">
       <form class="d-flex mx-auto">
         <input class="form-control me-2" type="search" placeholder="buscar" aria-label="Search">
         <button class="btn btn-outline-success bg-light" type="submit">buscar</button>
       </form>
       <ul class="navbar-nav ms-auto">
         <li class="nav-item">
           <a class="nav-link text-black border border-dark botao" href="#">Cadastro</a>
         </li>
         <li class="nav-item">
           <a class="nav-link text-black border border-dark botao " href="#">Login</a>
         </li>
       </ul>
     </div>
   </div>
   
 </nav>
   `;
};
