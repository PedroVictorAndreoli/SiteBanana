import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { btnbarComponent } from "./components/btnbar.js";


window.onload = function () {
  const appHeader = document.getElementById("appHeader");
  appHeader.innerHTML = headerComponent();

  const appbtnBar = document.getElementById("btnBar");
  appbtnBar.innerHTML = btnbarComponent;


  const appFooter = document.getElementById("appFooter");
  appFooter.innerHTML = footerComponent;
};
