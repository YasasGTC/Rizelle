const PRODUCTS = [
  {
    id: 'rz-001',
    name: 'Rizelle Essential Tee',
    category: 'Women',
    price: 4200,
    oldPrice: 4800,
    badge: 'NEW',
    color: 'Stone',
    tone: 'stone',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',
    desc: 'A clean everyday silhouette with a relaxed premium finish.'
  },

  {
    id: 'rz-002',
    name: 'Signature Oversized Shirt',
    category: 'Women',
    price: 6900,
    oldPrice: null,
    badge: 'BEST SELLER',
    color: 'Ivory',
    tone: 'ivory',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85',
    desc: 'Minimal lines, soft structure and an effortless oversized fit.'
  },

  {
    id: 'rz-003',
    name: 'Classic Linen Shirt',
    category: 'Men',
    price: 7800,
    oldPrice: 8500,
    badge: 'SALE',
    color: 'Sand',
    tone: 'sand',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85',
    desc: 'A timeless lightweight shirt made for everyday confidence.'
  },

  {
    id: 'rz-004',
    name: 'Rizelle Straight Trousers',
    category: 'Men',
    price: 8200,
    oldPrice: null,
    badge: 'NEW',
    color: 'Charcoal',
    tone: 'charcoal',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85',
    desc: 'Clean-cut trousers designed to pair with everything.'
  },

  {
    id: 'rz-005',
    name: 'Everyday Rib Top',
    category: 'Women',
    price: 3900,
    oldPrice: null,
    badge: '',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1564257577054-8d0c4e7a6b9f?auto=format&fit=crop&w=900&q=85',
    desc: 'A versatile fitted essential with a refined rib texture.'
  },

  {
    id: 'rz-006',
    name: 'Relaxed Cargo Pants',
    category: 'Men',
    price: 7600,
    oldPrice: 8400,
    badge: 'SALE',
    color: 'Olive',
    tone: 'olive',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    desc: 'Relaxed utility-inspired styling with a modern profile.'
  },

  {
    id: 'rz-007',
    name: 'Mini Signature Dress',
    category: 'Kids',
    price: 5200,
    oldPrice: null,
    badge: 'NEW',
    color: 'Cream',
    tone: 'cream',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85',
    desc: 'A playful, simple silhouette inspired by the RIZELLE aesthetic.'
  },

  {
    id: 'rz-008',
    name: 'Rizelle Everyday Cap',
    category: 'Accessories',
    price: 2800,
    oldPrice: null,
    badge: '',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85',
    desc: 'A minimal finishing piece with understated RIZELLE branding.'
  }
];

function money(n) {
  return 'LKR ' + n.toLocaleString('en-LK');
}

function getBag() {
  try {
    return JSON.parse(localStorage.getItem('rizelleBag') || '[]');
  } catch (e) {
    return [];
  }
}

function saveBag(b) {
  localStorage.setItem('rizelleBag', JSON.stringify(b));
  updateBagCount();
}

function addToBag(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  let bag = getBag();
  let item = bag.find(x => x.id === id);

  if (item) {
    item.qty++;
  } else {
    bag.push({
      id: id,
      qty: 1
    });
  }

  saveBag(bag);
  toast(p.name + ' added to bag.');
}

function getOrders() {
  try {
    return JSON.parse(localStorage.getItem('rizelleOrders') || '[]');
  } catch (e) {
    return [];
  }
}

function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem('rizelleOrders', JSON.stringify(orders));
  localStorage.setItem('rizelleLastOrder', JSON.stringify(order));
}

function whatsappDetails(message) {
  const phone = '94760256550';
  const text = encodeURIComponent(
    message || 'Hello RIZELLE, I need more details.'
  );

  window.open(
    'https://wa.me/' + phone + '?text=' + text,
    '_blank'
  );
}

function updateBagCount() {
  const n = getBag().reduce((s, x) => s + x.qty, 0);

  document
    .querySelectorAll('[data-bag-count]')
    .forEach(x => x.textContent = n);
}

function toast(x) {
  const t = document.getElementById('toast');

  if (!t) return;

  t.textContent = x;
  t.className = 'show';

  clearTimeout(window._toast);

  window._toast = setTimeout(() => {
    t.className = '';
  }, 2200);
}

function card(p) {
  return `
    <article class="productCard">

      <a href="product.html?id=${p.id}"
         class="productVisual ${p.tone}"
         style="background-image:url('${p.image}')">

        ${p.badge
          ? `<b class="badge">${p.badge}</b>`
          : ''
        }

      </a>

      <div class="productInfo">

        <div>
          <small>${p.category} · ${p.color}</small>

          <h3>
            <a href="product.html?id=${p.id}">
              ${p.name}
            </a>
          </h3>
        </div>

        <strong>${money(p.price)}</strong>

      </div>

      <button
        class="addBtn"
        onclick="addToBag('${p.id}')">
        ADD TO BAG +
      </button>

    </article>
  `;
}
