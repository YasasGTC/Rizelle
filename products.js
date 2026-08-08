const PRODUCTS = [
 {id:'rz-001',name:'Rizelle Essential Tee',category:'Women',price:4200,oldPrice:4800,badge:'NEW',color:'Stone',desc:'A clean everyday silhouette with a relaxed premium finish.',tone:'stone'},
 {id:'rz-002',name:'Signature Oversized Shirt',category:'Women',price:6900,oldPrice:null,badge:'BEST SELLER',color:'Ivory',desc:'Minimal lines, soft structure and an effortless oversized fit.',tone:'ivory'},
 {id:'rz-003',name:'Classic Linen Shirt',category:'Men',price:7800,oldPrice:8500,badge:'SALE',color:'Sand',desc:'A timeless lightweight shirt made for everyday confidence.',tone:'sand'},
 {id:'rz-004',name:'Rizelle Straight Trousers',category:'Men',price:8200,oldPrice:null,badge:'NEW',color:'Charcoal',desc:'Clean-cut trousers designed to pair with everything.',tone:'charcoal'},
 {id:'rz-005',name:'Everyday Rib Top',category:'Women',price:3900,oldPrice:null,badge:'',color:'Black',desc:'A versatile fitted essential with a refined rib texture.',tone:'black'},
 {id:'rz-006',name:'Relaxed Cargo Pants',category:'Men',price:7600,oldPrice:8400,badge:'SALE',color:'Olive',desc:'Relaxed utility-inspired styling with a modern profile.',tone:'olive'},
 {id:'rz-007',name:'Mini Signature Dress',category:'Kids',price:5200,oldPrice:null,badge:'NEW',color:'Cream',desc:'A playful, simple silhouette inspired by the RIZELLE aesthetic.',tone:'cream'},
 {id:'rz-008',name:'Rizelle Everyday Cap',category:'Accessories',price:2800,oldPrice:null,badge:'',color:'Black',desc:'A minimal finishing piece with understated RIZELLE branding.',tone:'black'}
];
function money(n){return 'LKR '+n.toLocaleString('en-LK');}
function getBag(){try{return JSON.parse(localStorage.getItem('rizelleBag')||'[]')}catch(e){return []}}
function saveBag(b){localStorage.setItem('rizelleBag',JSON.stringify(b));updateBagCount()}
function addToBag(id){const p=PRODUCTS.find(x=>x.id===id);if(!p)return;let bag=getBag(), item=bag.find(x=>x.id===id);item?item.qty++:bag.push({id,qty:1});saveBag(bag);toast(p.name+' added to bag.');}
function getOrders(){try{return JSON.parse(localStorage.getItem('rizelleOrders')||'[]')}catch(e){return []}}
function saveOrder(order){const orders=getOrders();orders.unshift(order);localStorage.setItem('rizelleOrders',JSON.stringify(orders));localStorage.setItem('rizelleLastOrder',JSON.stringify(order));}
function whatsappDetails(message){const phone='94760256550';const text=encodeURIComponent(message||'Hello RIZELLE, I need more details.');window.open('https://wa.me/'+phone+'?text='+text,'_blank')}
function updateBagCount(){let n=getBag().reduce((s,x)=>s+x.qty,0);document.querySelectorAll('[data-bag-count]').forEach(x=>x.textContent=n)}
function toast(x){let t=document.getElementById('toast');if(!t)return;t.textContent=x;t.className='show';clearTimeout(window._toast);window._toast=setTimeout(()=>t.className='',2200)}
function card(p){return `<article class="productCard"><a href="product.html?id=${p.id}" class="productVisual ${p.tone}"><span class="monogram">R</span>${p.badge?`<b class="badge">${p.badge}</b>`:''}</a><div class="productInfo"><div><small>${p.category} · ${p.color}</small><h3><a href="product.html?id=${p.id}">${p.name}</a></h3></div><strong>${money(p.price)}</strong></div><button class="addBtn" onclick="addToBag('${p.id}')">ADD TO BAG +</button></article>`}
