function NavBar() {
    <nav class="navbar navbar-dark bg-barraDeWhatsapp" aria-label="First navbar example">
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-xs-10 ms-3 ms-md-5 mb-5 p-2">
            <a href="./index.html">
            </a>
            </div>
        </div>
        <div class="col-md-2 col-xs-2">
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse" id="navbarsExample01">
            <ul class="navbar-nav me-auto mb-2">
            <li class="nav-item">
                <a class="nav-link" style="font-size: 20px;" aria-current="page" href="./contacto.html">Contacto</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style="font-size: 20px;" href="./nosotros.html">Nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" style="font-size: 20px;" href="./turnos.html">Turnos</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" style="font-size: 20px;" href="#" data-bs-toggle="dropdown" aria-expanded="false">Catálogo</a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" style="font-size: 20px;" href="./anteojos_con_receta.html">Anteojos recetados</a></li>
                <li><a class="dropdown-item" style="font-size: 20px;" href="./anteojos_de_sol.html">Lentes de sol</a></li>
                <li><a class="dropdown-item" style="font-size: 20px;" href="./lentes_de_contacto.html">Lentes de contacto</a></li>
                </ul>
            </li>
            </ul>
            <form role="search">
            </form>
        </div>
        </div>
    </nav>
}

export default NavBar 