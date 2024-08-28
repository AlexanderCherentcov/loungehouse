document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll(".product__btn"),e=document.querySelector(".cart-content__list"),r=document.querySelector(".cart"),o=r.querySelector(".cart__quantity"),c=document.querySelector(".fullprice"),n=document.querySelector(".order-modal__btn"),a=document.querySelector(".order-modal__list");let l=0,d=0,s=[];const u=t=>t.replace(/\s/g,""),i=t=>String(t).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 "),p=()=>{let t=e.querySelector(".simplebar-content").children.length;o.textContent=t,t>0?r.classList.add("active"):r.classList.remove("active")},m=()=>{c.textContent=`${i(l)} ₽`},_=t=>{let e=t.querySelector(".cart-product").dataset.id;document.querySelector(`.product[data-id="${e}"]`).querySelector(".product__btn").disabled=!1,(t=>{l-=t})(parseInt(u(t.querySelector(".cart-product__price").textContent))),m(),t.remove(),p(),q()};t.forEach((t=>{t.closest(".product").setAttribute("data-id",d++),t.addEventListener("click",(t=>{let r=t.currentTarget.closest(".product"),o=r.dataset.id,c=r.querySelector(".image-switch__img img").getAttribute("src"),n=r.querySelector(".product__title").textContent,a=u(r.querySelector(".product-price__current").textContent),d=parseInt(u(r.querySelector(".product-price__current").textContent));l+=d,m(),e.querySelector(".simplebar-content").insertAdjacentHTML("afterbegin",((t,e,r,o)=>`\n\t\t\t<li class="cart-content__item">\n\t\t\t\t<article class="cart-content__product cart-product" data-id="${o}">\n\t\t\t\t\t<img src="${t}" alt="" class="cart-product__img">\n\t\t\t\t\t<div class="cart-product__text">\n\t\t\t\t\t\t<h3 class="cart-product__title">${e}</h3>\n\t\t\t\t\t\t<span class="cart-product__price">${i(r)}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class="cart-product__delete" aria-label="Удалить товар"></button>\n\t\t\t\t</article>\n\t\t\t</li>\n\t\t`)(c,n,a,o)),p(),q()}))})),e.addEventListener("click",(t=>{t.target.classList.contains("cart-product__delete")&&_(t.target.closest(".cart-content__item"))}));let y=0;n.addEventListener("click",(t=>{0==y?(n.classList.add("open"),a.style.display="block",y=1):(n.classList.remove("open"),a.style.display="none",y=0)}));const S=(t,e,r,o)=>`\n\t\t\t<li class="order-modal__item">\n\t\t\t\t<article class="order-modal__product order-product" data-id="${o}">\n\t\t\t\t\t<img src="${t}" alt="" class="order-product__img">\n\t\t\t\t\t<div class="order-product__text">\n\t\t\t\t\t\t<h3 class="order-product__title">${e}</h3>\n\t\t\t\t\t\t<span class="order-product__price">${i(r)}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class="order-product__delete">Удалить</button>\n\t\t\t\t</article>\n\t\t\t</li>\n\t\t`,g=(new GraphModal({isOpen:t=>{console.log("opened");let r=e.querySelector(".simplebar-content").children,o=c.textContent,n=r.length;for(item of(document.querySelector(".order-modal__quantity span").textContent=`${n} шт`,document.querySelector(".order-modal__summ span").textContent=`${o}`,r)){console.log(item);let t=item.querySelector(".cart-product__img").getAttribute("src"),e=item.querySelector(".cart-product__title").textContent,r=u(item.querySelector(".cart-product__price").textContent),o=item.querySelector(".cart-product").dataset.id;a.insertAdjacentHTML("afterbegin",S(t,e,r,o));let c={};c.title=e,c.price=r,s.push(c)}console.log(s)},isClose:()=>{console.log("closed")}}),document.querySelector(".order").querySelector('input[type="tel"]'));new Inputmask("+7 (999) 999-99-99").mask(g),new window.JustValidate(".order",{rules:{tel:{required:!0,function:()=>{const t=g.inputmask.unmaskedvalue();return Number(t)&&10===t.length}}},colorWrong:"#ff0f0f",messages:{name:{required:"Введите имя",minLength:"Введите 3 и более символов",maxLength:"Запрещено вводить более 15 символов"},email:{email:"Введите корректный email",required:"Введите email"},tel:{required:"Введите телефон",function:"Здесь должно быть 10 символов без +7"}},submitHandler:function(t){t.addEventListener("submit",(t=>{t.preventDefault();let e=t.currentTarget,r=new FormData(e),o=e.querySelector('[name="Имя"]').value,c=e.querySelector('[name="Телефон"]').value,n=e.querySelector('[name="Email"]').value;r.append("Товары",JSON.stringify(s)),r.append("Имя",o),r.append("Телефон",c),r.append("Email",n);let a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState)if(200===a.status){gsap.timeline().fromTo(".sent-popup",{autoAlpha:1},{duration:3,ease:"power4.out",autoAlpha:0},2)}else{gsap.timeline().fromTo(".error-popup",{autoAlpha:1},{duration:3,ease:"power4.out",autoAlpha:0},2)}},a.open("POST","mail.php",!0),a.send(r),e.reset()}))}});null!==localStorage.getItem("products")&&(e.querySelector(".simplebar-content").innerHTML=localStorage.getItem("products"),p(),document.querySelectorAll(".cart-content__item").forEach((t=>{l+=parseInt(u(t.querySelector(".cart-product__price").textContent))})),m(),document.querySelectorAll(".cart-content__product").forEach((t=>{let e=t.dataset.id;console.log(e),document.querySelector(`.product[data-id="${e}"]`).querySelector(".product__btn").disabled=!0})));const q=()=>{let t=e.querySelector(".simplebar-content").innerHTML;t=t.trim(),t.length?localStorage.setItem("products",t):localStorage.removeItem("products")};document.querySelector(".modal").addEventListener("click",(t=>{if(t.target.classList.contains("order-product__delete")){let e=t.target.closest(".order-modal__product").dataset.id,r=document.querySelector(`.cart-content__product[data-id="${e}"]`).closest(".cart-content__item");_(r),t.target.closest(".order-modal__product").remove()}}))}));