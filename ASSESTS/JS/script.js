//=============LOGIN PAGE STARTS=================

//=============FUNCTION TO EYE OPEN AND ClOSE===========
function openClose(){
    let open=document.getElementById("open");
    let close=document.getElementById("close");
    let passWord=document.getElementById("password")

    if(passWord.type==="password"){
        open.style.display="none";
        passWord.type="text";
        close.style.display="inline"
    }
    else{
        open.style.display="inline";
        passWord.type="password";
        close.style.display="none"
    }
}

//==========FUNCTION FOR PASSWORDVALIDATION=========== 
function passWordValidation(){
    let passWord=document.getElementById("password").value;
    let capital=document.getElementById("capital");
    let special=document.getElementById("special");
    let minimum=document.getElementById("minimum")
    let includesnumber=document.getElementById("includesnumber");

    //CAPITAL
    if(passWord==""){
        capital.innerHTML=""
    }
    else if(passWord.charAt(0)===passWord.charAt(0).toUpperCase()){
        capital.innerHTML="FIRST LETTER SHOULD BE CAPITAL"
        capital.style.color="green";
    }
    else{
        capital.innerHTML="FIRST LETTER SHOULD BE CAPITAL";
        capital.style.color="red"
    }

    //SPECIAL
    let specialChar=["!","@","#","$","%","^","&","*","(",")"];
    let specialCharIncludes=specialChar.some((s)=>{
        return passWord.includes(s);
    })
    if(passWord===""){
        special.innerHTML=""
    }
    else if(specialCharIncludes){
        special.innerHTML="INCLUDES ATLEAST ONE SPECIAL CHARACTER";
        special.style.color="green"
    }
    else{
        special.innerHTML="INCLUDES ATLEAST ONE SPECIAL CHARACTER";
        special.style.color="red"
    }

    // MINIMUM
    if(passWord===""){
        minimum.innerHTML=""
    }
    else if(passWord.length<8){
        minimum.innerHTML="MINIMUM 8 CHARACTERS";
        minimum.style.color="red"
    }
    else{
        minimum.innerHTML="MINIMUM 8 CHARACTERS";
        minimum.style.color="green"
    }

    //NUMBER
    let numb=[1,2,3,4,5,6,7,8,9,0];
    var numbIncludes=numb.some((n)=>{
        return passWord.includes(n)
    })
    if(passWord===""){
        includesnumber.innerHTML=""
    }
    else if(numbIncludes){
        includesnumber.innerHTML="INCLUDES ATLEAST ONE NUMBER";
        includesnumber.style.color="green"
    }
    else{
        includesnumber.innerHTML="INCLUDES ATLEAST ONE NUMBER";
        includesnumber.style.color="red"
    }
}

// ================FORM VALIDATION==============
function fun(event){
    event.preventDefault()
    let userName=document.getElementById("username").value;
    let passWord=document.getElementById("password").value;
    let result=document.getElementById("result");
    if(userName==="sainareshkumar" &&passWord==="Sai@2003"){
        window.location.href="./main.html"
    }
    else{
        result.innerHTML=`"PLEASE PROVIDE VALUABLE INPUT"`;
        result.style.color="red"
        }
}

// ============LOGIN PAGE ENDS==============

//JSON DATA
let mobilePhones=[
    {
        id:1,
        img:"./ASSESTS/IMAGES/VIVO.jpg",
        name:"VIVO",
        price:"25,000",
        modal:"2025",
        storage:"8GB-RAM 256-ST"
    },
    {
        id:2,
        img:"./ASSESTS/IMAGES/OPPO_common_height.webp",
        name:"OPPO",
        price:"22,000",
        modal:"2025",
        storage:"8GB-RAM 256-ST"
    },
    {
        id:3,
        img:"/ASSESTS/IMAGES/IQOO_common_height.png",
        name:"IQOOZ10 ",
        price:"35,000",
        modal:"2025",
        storage:"12GB-RAM 512-ST"
    },
    {
        id:4,
        img:"./ASSESTS/IMAGES/redmi.jpg",
        name:"REDMI",
        price:"25,000",
        modal:"2025",
        storage:"8GB-RAM 256-ST"
    },
    {
        id:5,
        img:"./ASSESTS/IMAGES/realme.avif",
        name:"REALME",
        price:"26,000",
        modal:"2025",
        storage:"8GBRAM 256ST"
    },
    {
        id:6,
        img:"./ASSESTS/IMAGES/iphone.jpeg",
        name:"APPLE I PHONE",
        price:"85,000",
        modal:"2025",
        storage:"16GB-RAM 512-ST"
    },
    {
        id:7,
        img:"./ASSESTS/IMAGES/poco.jpg",
        name:"POCO",
        price:"25,000",
        modal:"2025",
        storage:"8GB-RAM 256-ST"
    },
    {
        id:8,
        img:"./ASSESTS/IMAGES/Samsung.avif",
        name:"SAMSUNG",
        price:"37,000",
        modal:"2025",
        storage:"8GB-RAM 512-ST"
    },
    {
        id:9,
        img:"./ASSESTS/IMAGES/nokia.jpeg",
        name:"NOKIA",
        price:"20,000",
        modal:"2025",
        storage:"8GB-RAM 256-ST"
    }
]
let laptops=[
    {
        id:10,
        img:"./ASSESTS/IMAGES/dell.jpg",
        name:"DELL",
        price:"80,000",
        processor:"i-2"
    },
    {
        id:11,
        img:"./ASSESTS/IMAGES/hp.jpg",
        name:"HP",
        price:"75,000",
        processor:"i-8"
    },
    {
        id:12,
        img:"./ASSESTS/IMAGES/lenevo.jpeg",
        name:"LENOVO",
        price:"65,000",
        processor:"i-6"
    },
    {
        id:13,
        img:"./ASSESTS/IMAGES/asus.avif",
        name:"ASUS",
        price:"68,000",
        processor:"i-6"
    },
    {
        id:14,
        img:"./ASSESTS/IMAGES/mackbook.avif",
        name:"APPLE MACKBOOK",
        price:"1,50,000",
        processor:"i-12"
    },
    {
        id:15,
        img:"./ASSESTS/IMAGES/acer.jpg",
        name:"ACER",
        price:"68,000",
        processor:"i-6"
    },
    {
        id:16,
        img:"ASSESTS/IMAGES/razer2.avif",
        name:"RAZER",
        price:"68,000",
        processor:"i-6"
    }
]

// FUNCTION TO DISPLAY MOBILE PHONES
function Mobilefn(){
   let  mobileDisplay=document.getElementById("mobileDisplay")
   let  content="";
    mobilePhones.map((m)=>{
        content+=` 
        <div class="col-lg-4 col-12">
        <div class="card mt-3" id="card-mobile" data-aos="fade-down" data-aos-duration="2000">
        <img src="${m.img}" alt="" height="" >
        <div class="card-body">
        <h5 class="text-center">${m.name}</h5>
        <p><b>PRICE:</b> ${m.price}</p>
        <p><b>STORAGE</b>: ${m.storage}</p>
         <button class="btn btn-primary w-100" onclick="AddToCart(mobilePhones,${m.id})">ADD TO CART</button>
        </div>
        </div>
         </div>`
    })
    mobileDisplay.innerHTML=content
}
Mobilefn()

// FUNCTION TO DISPLAY LAPTOP
function LaptopDisplay(){
    let laptopDisplay=document.getElementById("laptopDisplay")
    let content2=""
    laptops.map((l)=>{
        content2+=` <div class="col-lg-4">
        <div class="card mt-3" id="cart-laptop" data-aos="fade-down" data-aos-duration="2000">
        <img src="${l.img}" alt="">
        <div class="card-body">
        <h5 class="text-center">${l.name}</h5>
        <p><p><b>PRICE:</b> ${l.price}</p>
        <p><p><b>PROCESSOR:</b> ${l.processor}</p>
        <button class="btn btn-primary w-100" onclick="AddToCart(laptops,${l.id})">ADD TO CART</button>
        </div>
        </div>
        </div>`
    })
    laptopDisplay.innerHTML=content2
}
LaptopDisplay()

let cart=[];
let count=0;
//FUNCTION TO CARTCOUNT
function CartCount(){
    let cartCount=document.getElementById("count");
    if(cart.length==0){
        cartCount.innerHTML=0
    }
    else{
        cartCount.innerHTML=count;
    }
    
}

// FUNCTION FOR ADDTOCART
function AddToCart(name,productId){
let ProductId=name.find((idCheck)=>{
    return idCheck.id===productId
})
let quantityChecks=cart.find((q)=>{
    return q.id===productId
})
if(quantityChecks){
    quantityChecks.quantity++
}
else{
    ProductId.quantity=1;
    cart.push(ProductId)
}
let CartSound=document.getElementById("CartSound")
CartSound.play()

alert(`${ProductId.name} "SUCCESSFULLY ADDED TO CART"`)

DisplayCart(cart)

count++
CartCount()
}


// FUNCTION TO DISPLAY CARTITEMS
function DisplayCart(gettingCart){
    let result=document.getElementById
    ("addedCarts")
    let content3="";
    if(cart.length==0){
        content3=`<td colspan="7" class="text-center">YOUR CART IS EMPTY</td>`
    }
    else{
            gettingCart.map((c)=>{
            content3+=`<tr id="modal-image">
              <td><img src="${c.img}" alt="" height="60px"></td>
              <td>${c.name}</td>
              <td>${c.price}</td>
              <td>${c.storage?`${c.storage}`:`${c.processor}`}</td>
              <td>${c.quantity}</td>
              <td><button class="btn btn-danger" onclick="RemoveCart(${c.id})" id="removeId">REMOVE CART</button></td>
            </tr>`
        
       
    })
    }
    
    result.innerHTML=content3;
}
DisplayCart(cart)
function RemoveCart(removeId){
let sameQuantity=cart.find((s)=>{
   return s.id==removeId
})

if(sameQuantity.quantity>1){
    sameQuantity.quantity--
}
else{
    cart=cart.filter((r)=>{
    return r.id!=removeId
})
}
let removeCartSound=document.getElementById("removeVoice");
removeCartSound.play()
DisplayCart(cart)
count--;
CartCount()
}

// FUNCTION FOR SEARCH FILTER

function SearchFilter(){
    let userInput=document.getElementById("search").value.toLowerCase();
    let Mobile=mobilePhones.filter((f)=>{
        return f.name.toLowerCase().includes(userInput);
    })
    let laptopss=laptops.filter((lf)=>{
        return lf.name.toLowerCase().includes(userInput);
    })
    DisplaySearch(Mobile,laptopss)
    
}
// FUNCTION TO DISPLAY FILTER SEARCH

function DisplaySearch(mobileDis,laptopDis){
    let content5="";
    let searchResult=document.getElementById("searchDisplay");
    mobileDis.map((m)=>{
        content5+=`<div class="col-lg-4">
            <div class="card mt-5" id="sai">
              <img src="${m.img}" alt="" height="220px">
              <div class="card-body">
                <h4 class="text-center">${m.name}</h4>
                <p><b>PRICE:</b> ${m.price}</p>
                <p><b>MODAL:</b> ${m.modal}</p>
                <p><b>STORAGE:</b> ${m.storage}</p>
                <button class="btn btn-primary w-100" onclick="AddToCart(mobilePhones,${m.id})">ADD TO CART</button>
              </div>
            </div>
          </div>`
    })
    laptopDis.map((ld)=>{
        content5+=`<div class="col-lg-4">
            <div class="card mt-5" id="leo">
              <img src="${ld.img}" alt="" height="220px">
              <div class="card-body">
                <h4 class="text-center">${ld.name}</h4>
                <p>${ld.price}</p>
                <p>${ld.processor}</p>
                <button class="btn btn-primary w-100" onclick="AddToCart(laptops,${ld.id})">ADD TO CART</button>
              </div>
            </div>
          </div>`
    })
    searchResult.innerHTML=content5;

}