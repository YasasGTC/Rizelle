(function(){
 const bag=getBag();
 const empty=document.getElementById('checkoutEmpty'), form=document.getElementById('checkoutForm');
 if(!bag.length){empty.hidden=false;form.hidden=true;return;}
 let subtotal=0;
 const items=document.getElementById('items');
 items.innerHTML=bag.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id); if(!p)return ''; const sub=p.price*i.qty; subtotal+=sub; return `<div class="orderItem"><div class="orderThumb productVisual ${p.tone}"><span class="monogram">R</span></div><div><small>${p.category}</small><h3>${p.name}</h3><p>Qty ${i.qty}</p></div><strong>${money(sub)}</strong></div>`}).join('');
 const delivery=subtotal>=15000?0:500;
 document.getElementById('subtotal').textContent=money(subtotal); document.getElementById('delivery').textContent=delivery?money(delivery):'FREE'; document.getElementById('total').textContent=money(subtotal+delivery); document.getElementById('buttonTotal').textContent=money(subtotal+delivery);
 document.querySelectorAll('input[name="payment"]').forEach(r=>r.addEventListener('change',()=>{document.getElementById('cardFields').hidden=r.value!=='card'||!r.checked;}));
 form.addEventListener('submit',e=>{e.preventDefault(); const data=new FormData(form); const order='RZ'+Date.now().toString().slice(-8); const orderData={orderNumber:order,customer:{name:data.get('name'),phone:data.get('phone'),email:data.get('email'),address:data.get('address'),city:data.get('city'),postal:data.get('postal')},payment:data.get('payment'),items:bag,subtotal,delivery,total:subtotal+delivery,createdAt:new Date().toISOString()}; saveOrder(orderData); localStorage.removeItem('rizelleBag'); updateBagCount(); location.href='order-success.html?order='+order;});
})();
