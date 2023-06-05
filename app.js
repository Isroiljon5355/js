const data=[
    {
     img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1655097002%2Fplaceholder_kvepfp.png&w=256&q=75',
     price:'$100',
     nom:'Test'
    },
    {
     img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1655097002%2Fplaceholder_kvepfp.png&w=256&q=75',
     price:'$22.98',
     nom:'1341341'
    },
    {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1685298721%2Fproduct%2FScreenshotfrom2023-05-2223-54-47.png&w=256&q=75',
        price:'$54',
        nom:'Dummy'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1682058933%2Fproduct%2FCMTHP-COR12-deep-ash-920x920.webp&w=256&q=75',
        price:'$350',
        nom:'Premium T-Shirt'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FZRynchJY%2FGreen-Leaf-Lettuce-each.jpg&w=256&q=75',
        price:'$112.72',
        nom:'Green Leaf Lettuce'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FZ5yQ47YB%2FRainbow-Chard-Package-per-lb.jpg&w=256&q=75',
        price:'$7.07',
        nom:'Rainbow Chard'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FMTPyNwQC%2FClementine-5ct.jpg&w=256&q=75',
        price:'$48.12',
        nom:'Clementine'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FqRpDcpsy%2FRainbow-Peppers-4ct.jpg&w=256&q=75',
        price:'$90.85',
        nom:'Rainbow Peppers'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FL8L3XGcP%2FBlackberries-1-25-qt.jpg&w=256&q=75',
        price:'$211.96',
        nom:'Blueberry'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FbvrsZtMt%2FCalabaza-Squash-Package-each.jpg&w=256&q=75',
        price:'$98.03',
        nom:'Calabaza Squash'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FGhRtkNVr%2FLettuce-1lb.jpg&w=256&q=75',
        price:'$193.26',
        nom:'Lettuce'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwvzZWXpt%2FParsley-each.jpgg&w=256&q=75',
        price:'$134.63',
        nom:'Parsley'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FvHwg0D1J%2FCauliflower-1-35lb.jpg&w=256&q=75',
        price:'$139.15',
        nom:'Cauliflower'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F9FN3WwGS%2FOrganic-Purple-Cauliflower-1lb.jpg&w=256&q=75',
        price:'$19.57',
        nom:'Organic Purple Cauliflower'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcJL8fjK6%2FAhold-Acorn-Squash-1ct.jpg&w=256&q=75',
        price:'$71.18',
        nom:'Ahold Acorn Squash'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fd3r7qcfN%2FBok-Choy-Cabbage-per-lb.jpg&w=256&q=75',
        price:'$247.39',
        nom:'Bok Choy Cabbage'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FFstZ49qv%2FStrawberries-Package-2-25-oz.jpg&w=256&q=75',
        price:'$189.89',
        nom:'Strawberries Package'
       },
       {
        img:'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FN0C2D4TD%2FAloe-Vera-Leaf-each.jpg&w=256&q=75',
        price:'$157',
        nom:'Aloe Vera Leaf'
       },

    
]
const tt=document.querySelector(".tt")
data.map((item)=>{
    tt.innerHTML+=`
    <div class="div2">
        <img class="s3"
          src="${item.img}"
          alt="">
        <div class="s6">
          
          <p style="color: gray; font-size: 15px;">${item.nom}</p>
        </div>
        <div class="kaliy">
          <p class="s5">${item.price}</p>
          <div class="ico">
            <i class='bx bx-lock'></i>
          </div>
        </div>
      </div>
    `
})
