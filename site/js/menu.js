// ------------------------------------------------------------------------------------------------------------------***------------------------------------------------------------------------------------------------------------------------------
// path with menu -> const menuList.pathMenuList! this install all menu.
// background menu it's menuList.background, that green/
// if change link at menu -> menuList.ulol
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/

const menuList={
    ulol : '<a href="https://qucu.ru">QUCU.ru</a><a href="https://nasobe.ru">NASOBE.RU</a><a href="https://madness.qucu.ru/">SUPERP.RU</a><a href="https://order-landing-page.qucu.ru/">home</a><a href="https://order-landing-page.qucu.ru/why-Amir">Why Amir</a><a href="https://order-landing-page.qucu.ru/it-is-more-profitable-to-order-a-landing-page-from-Amir-from-Siberia">cheap and cheerful</a><a href="https://order-landing-page.qucu.ru/SEO-website-promotion">SEO website promotion</a> <a href="https://wa.clck.bar/79528885656?text=Hi!%20I%27m%20need%20landing%20page.">Amir Dzhan</a>',
    background : "green",
    pathMenuList : "nav"
}
// window.addEventListener('DOMContentLoaded',menuFromLanding);
function menuFromLanding(){
    // let menuDiv=document.createElement('div'); /* maybe NAV */
    // // menuDiv.innerHTML='menuOpen';
    // menuDiv.setAttribute('id','menuDiv');
    // document.querySelector(`${menuList.pathMenuList}`).prepend(menuDiv); /* body tag in which the menu is inserted. If you put main, then the menu wil be in the main tag or you can put it in the nav tag. */
    // let menuCss=document.createElement('link');
    // menuCss.setAttribute('rel','stylesheet');
    // menuCss.setAttribute('href','menu/menuFromLanding.css');
    // document.querySelector('head').append(menuCss);

    // let stickOne=document.createElement('span');
    // stickOne.classList.add('lineMenu');
    // document.querySelector('#menuDiv').append(stickOne);
    // let stickTwo=document.createElement('span');
    // stickTwo.classList.add('lineMenu');
    // document.querySelector('#menuDiv').append(stickTwo);
    // let stickThree=document.createElement('span');
    // document.querySelector('#menuDiv').append(stickThree);
    // stickThree.classList.add('lineMenu');

   
    document.querySelector('#menuDiv').addEventListener('click',openMenu);

   let fontSize='33px';
    if(window.innerWidth<700){
        fontSize="20px";
    }else if(window.innerWidth<300){
        fontSize="15px";
    }else{
        fontSize="7px";
    }
    function openMenu(){
        document.querySelector('body').style.overflow="hidden";
        let sheetsMenu=document.createElement('div');
        sheetsMenu.classList.add('openMenu');
        document.querySelector(`${menuList.pathMenuList}`).prepend(sheetsMenu);
        // console.log('open');
            // document.getElementById('menuDiv').classList.add("openMenu");
        setTimeout(()=>{
            document.querySelector('.openMenu').style.cssText=`
                height:100vh;
                opacity:1;
                font-size:${fontSize};
                `;
            document.querySelector('.openMenu').style.background=`${menuList.background}`;
        },100);
        document.querySelector('.openMenu').innerHTML=`${menuList.ulol}`;
        document.querySelector('.openMenu').addEventListener('click',menuClose);
    }//menuOpen
    function menuClose(){
        document.querySelector('body').style.overflow="auto";
        document.querySelector('.openMenu').style.cssText=`
            height:0vh;
            transition:all ease 1s;
            bottom:0;
            top:100vh;
            opacity:0;
            font-size:0;
            `;
            setTimeout(()=>{
                document.querySelector('.openMenu').remove();
            },300)
    }//menuClose;
}// menuFromLanding();
menuFromLanding();