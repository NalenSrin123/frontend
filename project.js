const logo=()=>{
    let val='';
    const allLogo=['banner.jpg'];
    allLogo.forEach((e)=>{
        val+=`<img src="${e}" alt="">`;
    })
    document.querySelector('.img-logo').innerHTML=val;
}

logo();
const selection=()=>{
    let val='';
    const menu=['Zara','Nike','Polo','Brand','Addidas','Football'];
    menu.forEach((e)=>{
        val+=`<li><a href="#">${e}<ion-icon name="chevron-forward-outline"></ion-icon></a></li>`;
    })
    document.querySelectorAll('.b_menu ul')[0].innerHTML=val;
}
selection();
const footerlogo=()=>{
    let val='';
    const allLogo=['logo.png'];
    allLogo.forEach((e)=>{
        val+=`<img src="${e}" alt="">`;
    })
    document.querySelector('.box-logo .logo').innerHTML=val;
}
footerlogo();
const slide=()=>{
    let val='';
    const allSlide=['1.jpg','2.jpg','3.png'];
    allSlide.forEach((e)=>{
        val+=`
        <div class="carousel-item active">
        <img src="${e}" class="d-block w-100" alt="">
        </div>
        `;
    })
    document.querySelector('.carousel-inner').innerHTML=val;
}
slide();
const products=()=>{
    let data1='';
    let data2='';
    let data3='';
    let date= new Date();
    let year=date.getFullYear();
    const product1=[
        {
            image :'z1.jpg',
            title :'ZARA',
            description:'New shirt',
            price: 9.99,
            year : year
        },
        {
            image :'z2.jpg',
            title :'ZARA',
            description:'New shirt',
            price: 9.99,
            year : year
        },
        {
            image :'z3.jpg',
            title :'ZARA',
            description:'New shirt',
            price: 9.99,
            year : year
        },
        {
            image :'z4.jpg',
            title :'ZARA',
            description:'New shirt',
            price: 9.99,
            year : year
        },
        {
            image :'z5.jpg',
            title :'ZARA',
            description:'New shirt',
            price: 9.99,
            year : year
        },
        {
            image :'z6.jpg',
            title :'ZARA',
            description:'New shirt',
            price: 9.99,
            year : year
        },
        {
            image :'z7.jpg',
            title :'ZARA',
            description:'New shirt',
            price: 9.99,
            year : year
        },
        {
            image :'z8.jpg',
            title :'ZARA',
            description:'New shirt',
            price: 9.99,
            year : year
        }
    ]
    product1.forEach((e)=>{
        data1+=`
        <div class="col-xxl-3 col-6">
        <div class="card">
          <div class="b-img">
            <img src="${e.image}" alt="">
          </div>
          <div class="b-body">
            <h3 class="title">${e.title}</h3>
            <p class="dicription">${e.description}</p>
            <p class="price">Price:$ ${e.price}</p>
            <p class="year">Year :${e.year} </p>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
        `;
    })
    const product2=[
        {
            image :'n1.jpg',
            title :'NIKE',
            description:'New shoses original',
            price: 79.99,
            year : year
        },
        {
            image :'n2.jpg',
            title :'NIKE',
            description:'New shoses original',
            price: 79.99,
            year : year
        },
        {
            image :'n4.jpg',
            title :'NIKE',
            description:'New shoses original',
            price: 79.99,
            year : year
        },
        {
            image :'n5.jpg',
            title :'NIKE',
            description:'New shoses original',
            price: 79.99,
            year : year
        },
        {
            image :'n6.jpg',
            title :'NIKE',
            description:'New shoses original',
            price: 79.99,
            year : year
        },
        {
            image :'n1.jpg',
            title :'NIKE',
            description:'New shoses original',
            price: 79.99,
            year : year
        },
        {
            image :'n7.jpg',
            title :'NIKE',
            description:'New shoses original',
            price: 79.99,
            year : year
        },
        {
            image :'n8.jpg',
            title :'NIKE',
            description:'New shoses original',
            price: 79.99,
            year : year
        }
    ]
    product2.forEach((e)=>{
        data2+=`
        <div class="col-xxl-3 col-6">
        <div class="card">
          <div class="b-img">
            <img src="${e.image}" alt="">
          </div>
          <div class="b-body">
            <h3 class="title">${e.title}</h3>
            <p class="dicription">${e.description}</p>
            <p class="price">Price:$ ${e.price}</p>
            <p class="year">Year :${e.year} </p>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
        `;
    })
    const product3=[
        {
            image :'p1.jpg',
            title :'POLO',
            description:'New shirt',
            price: 9.99,
            year : year
        },
        {
            image :'p2.jpg',
            title :'POLO',
            description:'New shirt',
            price: 8.99,
            year : year
        },
        {
            image :'p3.jpg',
            title :'POLO',
            description:'New shirt',
            price: 7.99,
            year : year
        },
        {
            image :'p4.jpg',
            title :'POLO',
            description:'New shirt',
            price: 4.99,
            year : year
        }
    ]
    product3.forEach((e)=>{
        data3+=`
        <div class="col-xxl-3 col-6">
        <div class="card">
          <div class="b-img">
            <img src="${e.image}" alt="">
          </div>
          <div class="b-body">
            <h3 class="title">${e.title}</h3>
            <p class="dicription">${e.description}</p>
            <p class="price">Price:$ ${e.price}</p>
            <p class="year">Year :${e.year} </p>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
        `;
    })
    document.querySelectorAll('.box-contain .Nike')[0].innerHTML=data2;
    document.querySelectorAll('.box-contain .Polo')[0].innerHTML=data3;
    document.querySelectorAll('.box-contain .Zara')[0].innerHTML=data1;
}   
products();
const about=()=>{
    let val='';
    const us=['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut saepe nisi quas dolor sunt laudantium minus, omnis officiis optio necessitatibus labore, quibusdam cumque eum quis nulla, repudiandae deserunt maiores veniam.']
    us.forEach((e)=>{
        val+=`<p>${e}</p>
    `;
    })
    document.querySelector('.about-us').innerHTML=val;
}
about();
const footer=()=>{
    let val='';
    // linklogo=['https://web.facebook.com/profile.php?id=100077890950889','https://www.tiktok.com/en/','https://twitter.com/','https://www.youtube.com/','https://discord.com/','https://github.com/']
    logoFooter=['logo-facebook','logo-tiktok','logo-twitter','logo-youtube','logo-discord','logo-github']
    logoFooter.forEach((index)=>{
        val+=`
            <li><a href="#"><ion-icon name="${index}"></ion-icon></a></li>
         `;
    })
    document.querySelectorAll('.social ul')[0].innerHTML=val;

}
footer();