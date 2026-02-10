const menuContainer = document.getElementById('menu');
let cart = {};

function renderMenu() {
  menuData.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'category';
    div.innerHTML = `<h2>${cat.category}</h2>`;

    cat.items.forEach(item => {
      cart[item.name] = 0;

      div.innerHTML += `
        <div class="menu-item">
          <div>
            <div class="menu-name">${item.name}</div>
            <div class="price">Rp ${item.price.toLocaleString('id-ID')}</div>
          </div>
          <div class="qty">
            <button onclick="updateQty('${item.name}', -1)">-</button>
            <span id="qty-${item.name}">0</span>
            <button onclick="updateQty('${item.name}', 1)">+</button>
          </div>
        </div>`;
    });

    menuContainer.appendChild(div);
  });
}

function updateQty(name, change) {
  cart[name] = Math.max(0, cart[name] + change);
  document.getElementById(`qty-${name}`).innerText = cart[name];
  updateTotal();
}

function updateTotal() {
  let total = 0;

  menuData.forEach(cat => {
    cat.items.forEach(item => {
      total += cart[item.name] * item.price;
    });
  });

  document.getElementById('total').innerText =
    'Total: Rp ' + total.toLocaleString('id-ID');

  document.getElementById('waBtn').onclick = () => {

    const nama = document.getElementById('nama').value.trim();
    const tanggalInput = document.getElementById('tanggal').value;

    if (!nama) {
      alert('⚠️ Nama pemesan wajib diisi dulu');
      return;
    }

    if (!tanggalInput) {
      alert('⚠️ Tanggal pemesanan wajib diisi dulu');
      return;
    }

    let tgl = new Date(tanggalInput);
    const tanggal = tgl.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });

    let adaPesanan = false;

    // ✅ FORMAT WA JARAK TIPIS
    let msg =
      `PESANAN MAKANAN%0ALYNN Hotel Mojokerto%0A%0A` +
      `Nama Pemesan:%0A${nama}%0A%0A` +
      `Tanggal Pemesanan:%0A${tanggal}%0A%0A` +
      `Pesanan:%0A`;

    menuData.forEach(cat => {
      cat.items.forEach(item => {
        if (cart[item.name] > 0) {
          adaPesanan = true;
          msg += `• ${item.name} x${cart[item.name]} - Rp ${(cart[item.name] * item.price).toLocaleString('id-ID')}%0A`;
        }
      });
    });

    if (!adaPesanan) {
      alert('⚠️ Silakan pilih menu terlebih dahulu');
      return;
    }

    msg += `%0A${document.getElementById('total').innerText}`;

    window.open('https://wa.me/6285974511215?text=' + msg, '_blank');
  };
}

renderMenu();
