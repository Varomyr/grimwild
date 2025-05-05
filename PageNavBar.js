
export default {
  setup() {},
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">GW - Tools</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="gm.html">GM</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PCs
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="heritage.html">Heritage</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="bardsong.html">Bardsong</a></li>
                <li><a class="dropdown-item" href="herbalism.html">Herbalism</a></li>
                <li><a class="dropdown-item" href="patron.html">Patron</a></li>
                <li><a class="dropdown-item" href="surge.html">Wild Surge</a></li>
                <li><a class="dropdown-item" href="spellcrucible.html">Spells</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Exploration
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="building.html">Building</a></li>
                <li><a class="dropdown-item" href="curiosities.html">Curiosities</a></li>
                <li><a class="dropdown-item" href="dangers.html">Dangers</a></li>
                <li><a class="dropdown-item" href="settlement.html">Settlements</a></li>
                <li><a class="dropdown-item" href="sites.html">Sites</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
