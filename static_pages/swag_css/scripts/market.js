const products = [
  {
    name: "LV Pink Cyber Sneaker",
    glb: "assets/items/lv_shoes-pink.glb",
    desc: "A rare digital resell drop.",
    id: 1
  },
  {
    name: "Yeezy Core Runner",
    glb: "assets/items/yeezy_core.glb",
    desc: "Minimal, organic, iconic.",
    id: 2
  },
  // ajouter autant d'items que tu veux
];

let page = 1;
const perPage = 6;

function renderMarketplace() {
  const grid = document.getElementById("marketGrid");
  grid.innerHTML = "";

  const start = (page - 1) * perPage;
  const slice = products.slice(start, start + perPage);

  slice.forEach((p) => {
    grid.innerHTML += `
      <div class="market-card">
          <div class="more-link" onclick="goToProduct(${p.id})">More</div>

          <model-viewer src="${p.glb}" camera-controls auto-rotate></model-viewer>

          <h3>${p.name}</h3>
          <button onclick="openQuick(${p.id})" class="footer-btn">Add to Cart</button>
      </div>
    `;
  });
}

renderMarketplace();

document.getElementById("nextPage").onclick = () => {
  if ((page * perPage) < products.length) {
    page++;
    renderMarketplace();
  }
};

document.getElementById("prevPage").onclick = () => {
  if (page > 1) {
    page--;
    renderMarketplace();
  }
};

// QUICK VIEW
function openQuick(id) {
  const p = products.find(pr => pr.id === id);
  document.getElementById("quickName").textContent = p.name;
  document.getElementById("quickDesc").textContent = p.desc;
  document.getElementById("quickModel").src = p.glb;

  document.getElementById("quickView").style.display = "flex";
}

document.getElementById("closeQuick").onclick = () => {
  document.getElementById("quickView").style.display = "none";
};

// PAGE PRODUIT
function goToProduct(id) {
  window.location = `product.html?id=${id}`;
}