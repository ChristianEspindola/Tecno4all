import Cardwidget from "../Cartwidget";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Tecno4All
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Iphone
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Xiaomi
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Samsung
              </a>
            </li>
          </ul>
          <Cardwidget />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
