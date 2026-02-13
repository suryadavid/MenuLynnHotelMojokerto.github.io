const menuContainer = document.getElementById('menu');
const filterContainer = document.querySelector('.menu-filter');

let cart = {};
let activeFilter = "SEMUA";

/* === BUAT ID AMAN === */
function makeId(text){
return text.replace(/\s+/g,'-').replace(/[^\w-]/g,'').toLowerCase();
}

/* === FILTER === */
function renderFilter(){

filterContainer.innerHTML='';

const semuaBtn=document.createElement('button');
semuaBtn.textContent="SEMUA";
semuaBtn.classList.add('active');
semuaBtn.onclick=()=>setFilter("SEMUA");
filterContainer.appendChild(semuaBtn);

menuData.forEach(cat=>{
const btn=document.createElement('button');
btn.textContent=cat.category;
btn.onclick=()=>setFilter(cat.category);
filterContainer.appendChild(btn);
});

}

/* === SET FILTER === */
function setFilter(category){

activeFilter=category;

document.querySelectorAll('.menu-filter button')
.forEach(b=>b.classList.remove('active'));

[...document.querySelectorAll('.menu-filter button')]
.find(b=>b.textContent===category)
?.classList.add('active');

renderMenu();
}

/* === RENDER MENU === */
function renderMenu(){

menuContainer.innerHTML='';

menuData.forEach(cat=>{

if(activeFilter!=="SEMUA" && activeFilter!==cat.category) return;

const div=document.createElement('div');
div.className='category';

div.innerHTML=`
<h2>${cat.category}</h2>
<div class="menu-grid"></div>
`;

const grid=div.querySelector('.menu-grid');

cat.items.forEach(item=>{

const id=makeId(item.name);
if(!(id in cart)) cart[id]=0;

const card=document.createElement('div');
card.className='menu-card';

card.innerHTML=`
<span class="menu-label">${cat.category}</span>
<img src="${item.image || 'assets/images_menu/default.png'}">

<div class="menu-info">
<b>${item.name}</b>
<span>Rp ${item.price.toLocaleString('id-ID')}</span>
</div>

<div id="control-${id}">
${
cart[id]===0
? `<button class="add-btn" onclick="updateQty('${id}',1)">+ Tambahkan</button>`
: `
<div class="qty-control">
<button onclick="updateQty('${id}',-1)">-</button>
<span>${cart[id]}</span>
<button onclick="updateQty('${id}',1)">+</button>
</div>`
}
</div>
`;

grid.appendChild(card);
});

menuContainer.appendChild(div);

});

}

/* === UPDATE QTY === */
function updateQty(id,change){

cart[id]=Math.max(0,cart[id]+change);

const control=document.getElementById(`control-${id}`);
if(!control) return;

if(cart[id]===0){

control.innerHTML=
`<button class="add-btn" onclick="updateQty('${id}',1)">+ Tambahkan</button>`;

}else{

control.innerHTML=`
<div class="qty-control">
<button onclick="updateQty('${id}',-1)">-</button>
<span>${cart[id]}</span>
<button onclick="updateQty('${id}',1)">+</button>
</div>
`;
}

updateTotal();
}

/* === UPDATE TOTAL + WA === */
function updateTotal(){

let total=0;

menuData.forEach(cat=>{
cat.items.forEach(item=>{
const id=makeId(item.name);
total+=cart[id]*item.price;
});
});

document.getElementById('total').innerText=
'Total: Rp '+total.toLocaleString('id-ID');

document.getElementById('waBtn').onclick=()=>{

const nama=document.getElementById('nama').value.trim();
const tanggalInput=document.getElementById('tanggal').value;
const jam=document.getElementById('jam').value;
const layanan=document.getElementById('layanan').value;
const kamar=document.getElementById('nomor_kamar').value.trim();

if(!nama) return alert('Nama wajib diisi');
if(!tanggalInput) return alert('Tanggal wajib diisi');
if(!jam) return alert('Jam wajib diisi');
if(!layanan) return alert('Pilih layanan');

const tanggal=new Date(tanggalInput)
.toLocaleDateString("id-ID",{
day:"2-digit",
month:"long",
year:"numeric"
});

let adaPesanan=false;

let msg=
`🍽️ *ASTABRATA RESTAURANT*%0A`+
`🧾 *ORDER MASUK*%0A`+
`━━━━━━━━━━━━━━━━━━%0A%0A`+

`👤 *Nama Tamu*%0A${nama}%0A%0A`+
`📅 *Tanggal Pemesanan*%0A${tanggal}%0A%0A`+
`⏰ *Jam*%0A${jam} WIB%0A%0A`+
`🛎️ *Layanan*%0A${layanan}%0A%0A`;

if(kamar){
msg+=`🏨 *Nomor Kamar*%0A${kamar}%0A%0A`;
}

msg+=
`━━━━━━━━━━━━━━━━━━%0A`+
`📋 *DETAIL PESANAN*%0A%0A`;

menuData.forEach(cat=>{
cat.items.forEach(item=>{
const id=makeId(item.name);

if(cart[id]>0){
adaPesanan=true;

msg+=
`🍴 ${item.name} x${cart[id]}%0A`+
`💰 Rp ${(cart[id]*item.price).toLocaleString('id-ID')}%0A%0A`;
}
});
});

if(!adaPesanan) return alert('Pilih menu dulu');

msg+=
`━━━━━━━━━━━━━━━━━━%0A`+
`💳 *TOTAL PEMBAYARAN*%0A`+
`Rp ${total.toLocaleString('id-ID')}%0A%0A`+
`🙏 Mohon segera diproses`;

window.open('https://wa.me/6285974511215?text='+msg,'_blank');

};

}

/* === INIT === */
renderFilter();
renderMenu();
