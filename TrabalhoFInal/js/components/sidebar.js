export const sidebarComponent = () => {
  return `
<nav id="sidebar" class="sidebar navbar-light bg-light">
<div class="menu">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a href="/" class="nav-link active">
                <i data-feather="home"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="pedidos.html" class="nav-link">
                <i data-feather="check-circle"></i>
                <span>Pedidos</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="clientes.html" class="nav-link">
                <i data-feather="user"></i>
                <span>Clientes</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="relatorios.html" class="nav-link">
                <i data-feather="clipboard"></i>
                <span>Relatórios</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="integracao.html" class="nav-link">
                <i data-feather="grid"></i>
                <span>Integração</span>
            </a>
        </li>

        <li class="nav-item mt-2">
            <a href="#" class="btn btn-success">
                <i data-feather="bar-chart"></i>
                <span>Lorem Ipsum</span>
            </a>
        </li>
        <li class="nav-item mt-2">
            <a href="#" class="btn btn-danger">
                <i data-feather="bar-chart"></i>
                <span>Lorem Ipsum</span>
            </a>
        </li>
        <li class="nav-item mt-2">
            <a href="#" class="btn btn-warning">
                <i data-feather="bar-chart"></i>
                <span>Lorem Ipsum</span>
            </a>
        </li>
    </ul>
</div>
</nav>
`;
};
