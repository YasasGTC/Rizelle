const PRODUCTS = [

  // =========================
  // WOMEN
  // =========================

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
    id: 'rz-009',
    name: 'Elegant Studio Dress',
    category: 'Women',
    price: 8900,
    oldPrice: 9900,
    badge: 'NEW',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85',
    desc: 'An elegant silhouette designed with a refined contemporary feel.'
  },

  {
    id: 'rz-010',
    name: 'Soft Beige Outfit',
    category: 'Women',
    price: 8200,
    oldPrice: null,
    badge: '',
    color: 'Beige',
    tone: 'sand',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85',
    desc: 'A soft neutral look built around effortless everyday elegance.'
  },

  {
    id: 'rz-011',
    name: 'Modern White Dress',
    category: 'Women',
    price: 9400,
    oldPrice: 10500,
    badge: 'BEST SELLER',
    color: 'White',
    tone: 'ivory',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    desc: 'A clean white dress with a modern fashion-forward silhouette.'
  },

  {
    id: 'rz-012',
    name: 'Minimal Black Look',
    category: 'Women',
    price: 7800,
    oldPrice: null,
    badge: 'NEW',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85',
    desc: 'A sophisticated monochrome look inspired by modern city style.'
  },

  {
    id: 'rz-013',
    name: 'Relaxed Summer Dress',
    category: 'Women',
    price: 7600,
    oldPrice: 8500,
    badge: 'SALE',
    color: 'Cream',
    tone: 'cream',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85',
    desc: 'A lightweight summer dress designed for effortless movement.'
  },

  {
    id: 'rz-014',
    name: 'Premium Blazer Look',
    category: 'Women',
    price: 11500,
    oldPrice: 12800,
    badge: 'BEST SELLER',
    color: 'Charcoal',
    tone: 'charcoal',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85',
    desc: 'A polished blazer look with a strong contemporary silhouette.'
  },

  {
    id: 'rz-015',
    name: 'Modern Street Outfit',
    category: 'Women',
    price: 8900,
    oldPrice: null,
    badge: 'NEW',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    desc: 'A contemporary street-inspired outfit with refined details.'
  },


  // =========================
  // MEN
  // =========================

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
    id: 'rz-016',
    name: 'Urban Essential Shirt',
    category: 'Men',
    price: 7200,
    oldPrice: 8200,
    badge: 'NEW',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=85',
    desc: 'A modern everyday shirt with a clean urban silhouette.'
  },

  {
    id: 'rz-017',
    name: 'Premium Relaxed Tee',
    category: 'Men',
    price: 4500,
    oldPrice: null,
    badge: '',
    color: 'White',
    tone: 'ivory',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85',
    desc: 'A relaxed premium tee designed for effortless everyday wear.'
  },

  {
    id: 'rz-018',
    name: 'Modern Street Jacket',
    category: 'Men',
    price: 10800,
    oldPrice: 11900,
    badge: 'SALE',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85',
    desc: 'A contemporary jacket inspired by modern street fashion.'
  },

  {
    id: 'rz-019',
    name: 'Linen Resort Shirt',
    category: 'Men',
    price: 7600,
    oldPrice: null,
    badge: 'NEW',
    color: 'Cream',
    tone: 'cream',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85',
    desc: 'A lightweight resort shirt with a premium relaxed finish.'
  },

  {
    id: 'rz-020',
    name: 'Classic Denim Look',
    category: 'Men',
    price: 8900,
    oldPrice: 9900,
    badge: 'BEST SELLER',
    color: 'Blue',
    tone: 'charcoal',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85',
    desc: 'A timeless denim-inspired look for everyday styling.'
  },

  {
    id: 'rz-021',
    name: 'Minimal Overshirt',
    category: 'Men',
    price: 7900,
    oldPrice: null,
    badge: '',
    color: 'Stone',
    tone: 'stone',
    image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=85',
    desc: 'A minimal overshirt designed for clean layered outfits.'
  },

  {
    id: 'rz-022',
    name: 'Signature Black Tee',
    category: 'Men',
    price: 4300,
    oldPrice: null,
    badge: '',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85',
    desc: 'A clean signature tee for minimalist everyday styling.'
  },


  // =========================
  // KIDS
  // =========================

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
    id: 'rz-023',
    name: 'Mini Urban Tee',
    category: 'Kids',
    price: 2900,
    oldPrice: null,
    badge: 'NEW',
    color: 'White',
    tone: 'ivory',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85',
    desc: 'A comfortable modern tee designed for everyday adventures.'
  },

  {
    id: 'rz-024',
    name: 'Mini Casual Outfit',
    category: 'Kids',
    price: 4200,
    oldPrice: 4800,
    badge: 'SALE',
    color: 'Stone',
    tone: 'stone',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85',
    desc: 'A relaxed casual outfit with a clean contemporary style.'
  },

  {
    id: 'rz-025',
    name: 'Mini Fashion Dress',
    category: 'Kids',
    price: 5200,
    oldPrice: null,
    badge: 'NEW',
    color: 'Cream',
    tone: 'cream',
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85',
    desc: 'A charming everyday dress with a playful modern silhouette.'
  },

  {
    id: 'rz-026',
    name: 'Mini Denim Style',
    category: 'Kids',
    price: 4800,
    oldPrice: 5400,
    badge: 'SALE',
    color: 'Blue',
    tone: 'stone',
    image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=85',
    desc: 'A fun denim-inspired outfit designed for everyday wear.'
  },

  {
    id: 'rz-027',
    name: 'Mini Premium Outfit',
    category: 'Kids',
    price: 5900,
    oldPrice: null,
    badge: 'BEST SELLER',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85',
    desc: 'A premium kids outfit inspired by the RIZELLE aesthetic.'
  },

  {
    id: 'rz-028',
    name: 'Mini Weekend Set',
    category: 'Kids',
    price: 4600,
    oldPrice: null,
    badge: '',
    color: 'Beige',
    tone: 'sand',
    image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=85',
    desc: 'A comfortable weekend set created for relaxed everyday styling.'
  },

  {
    id: 'rz-029',
    name: 'Mini Classic Shirt',
    category: 'Kids',
    price: 4100,
    oldPrice: 4700,
    badge: 'SALE',
    color: 'White',
    tone: 'ivory',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85',
    desc: 'A classic kids shirt with a clean and timeless finish.'
  },


  // =========================
  // ACCESSORIES
  // =========================

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
  },

  {
    id: 'rz-030',
    name: 'Rizelle Leather Bag',
    category: 'Accessories',
    price: 7900,
    oldPrice: 8900,
    badge: 'NEW',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
    desc: 'A refined everyday bag with a premium leather-inspired finish.'
  },

  {
    id: 'rz-031',
    name: 'Minimal Fashion Bag',
    category: 'Accessories',
    price: 6900,
    oldPrice: null,
    badge: 'BEST SELLER',
    color: 'Cream',
    tone: 'cream',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
    desc: 'A minimalist bag designed to complete elegant everyday outfits.'
  },

  {
    id: 'rz-032',
    name: 'Classic Black Sunglasses',
    category: 'Accessories',
    price: 3900,
    oldPrice: 4500,
    badge: 'SALE',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85',
    desc: 'Classic sunglasses with a sleek contemporary frame.'
  },

  {
    id: 'rz-033',
    name: 'Premium Fashion Watch',
    category: 'Accessories',
    price: 8900,
    oldPrice: null,
    badge: 'NEW',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85',
    desc: 'A minimalist timepiece with a sophisticated premium aesthetic.'
  },

  {
    id: 'rz-034',
    name: 'Signature Shoulder Bag',
    category: 'Accessories',
    price: 7600,
    oldPrice: 8500,
    badge: 'BEST SELLER',
    color: 'Brown',
    tone: 'sand',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85',
    desc: 'A stylish shoulder bag designed for modern everyday fashion.'
  },

  {
    id: 'rz-035',
    name: 'Minimal Leather Belt',
    category: 'Accessories',
    price: 3200,
    oldPrice: null,
    badge: '',
    color: 'Brown',
    tone: 'sand',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
    desc: 'A clean everyday belt with a timeless minimal finish.'
  },

  {
    id: 'rz-036',
    name: 'Classic Travel Bag',
    category: 'Accessories',
    price: 9800,
    oldPrice: 10900,
    badge: 'SALE',
    color: 'Black',
    tone: 'black',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
    desc: 'A spacious travel-inspired bag with a refined urban look.'
  },

  {
    id: 'rz-037',
    name: 'Rizelle Mini Bag',
    category: 'Accessories',
    price: 5900,
    oldPrice: null,
    badge: 'NEW',
    color: 'Cream',
    tone: 'cream',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
    desc: 'A compact statement bag designed for modern everyday looks.'
  },

  {
    id: 'rz-038',
    name: 'Signature Fashion Scarf',
    category: 'Accessories',
    price: 3500,
    oldPrice: null,
    badge: '',
    color: 'Stone',
    tone: 'stone',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=900&q=85',
    desc: 'A soft finishing accessory with a refined neutral aesthetic.'
  }

];


function money(n) {
  return 'LKR ' + n.toLocaleString('en-LK');
}


function getBag() {
  try {
    return JSON.parse(
      localStorage.getItem('rizelleBag') || '[]'
    );
  } catch (e) {
    return [];
  }
}


function saveBag(b) {
  localStorage.setItem(
    'rizelleBag',
    JSON.stringify(b)
  );

  updateBagCount();
}


function addToBag(id) {

  const p = PRODUCTS.find(
    x => x.id === id
  );

  if (!p) return;

  let bag = getBag();

  let item = bag.find(
    x => x.id === id
  );

  if (item) {
    item.qty++;
  } else {
    bag.push({
      id: id,
      qty: 1
    });
  }

  saveBag(bag);

  toast(
    p.name + ' added to bag.'
  );
}


function getOrders() {

  try {
    return JSON.parse(
      localStorage.getItem('rizelleOrders') || '[]'
    );
  } catch (e) {
    return [];
  }

}


function saveOrder(order) {

  const orders = getOrders();

  orders.unshift(order);

  localStorage.setItem(
    'rizelleOrders',
    JSON.stringify(orders)
  );

  localStorage.setItem(
    'rizelleLastOrder',
    JSON.stringify(order)
  );

}


function whatsappDetails(message) {

  const phone = '94760256550';

  const text = encodeURIComponent(
    message ||
    'Hello RIZELLE, I need more details.'
  );

  window.open(
    'https://wa.me/' +
    phone +
    '?text=' +
    text,
    '_blank'
  );

}


function updateBagCount() {

  const n =
    getBag().reduce(
      (s, x) => s + x.qty,
      0
    );

  document
    .querySelectorAll('[data-bag-count]')
    .forEach(
      x => x.textContent = n
    );

}


function toast(x) {

  const t =
    document.getElementById('toast');

  if (!t) return;

  t.textContent = x;

  t.className = 'show';

  clearTimeout(
    window._toast
  );

  window._toast =
    setTimeout(() => {

      t.className = '';

    }, 2200);

}


function card(p) {

  return `

    <article class="productCard">

      <a
        href="product.html?id=${p.id}"
        class="productVisual ${p.tone}"
        style="background-image:url('${p.image}')"
      >

        ${
          p.badge
            ? `<b class="badge">${p.badge}</b>`
            : ''
        }

      </a>


      <div class="productInfo">

        <div>

          <small>
            ${p.category} · ${p.color}
          </small>

          <h3>

            <a
              href="product.html?id=${p.id}"
            >
              ${p.name}
            </a>

          </h3>

        </div>


        <strong>
          ${money(p.price)}
        </strong>

      </div>


      <button
        class="addBtn"
        onclick="addToBag('${p.id}')"
      >
        ADD TO BAG +
      </button>

    </article>

  `;
}
