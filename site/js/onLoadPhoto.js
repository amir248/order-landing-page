const statusbar={
    count: +0,
    photo : ['site/img/DSC_8700.webp','site/img/DSC_8642.webp','site/img/DSC_8639.webp','site/img/DSC_8502.webp','site/img/DSC_8541.webp','site/img/DSC_8569.webp','site/img/DSC_8626.webp','site/img/DSC_8627.webp','site/img/DSC_8628.webp','site/img/DSC_8629.webp','site/img/DSC_8630.webp','site/img/DSC_8631.webp','site/img/DSC_8632.webp','site/img/DSC_8635.webp','site/img/DSC_8636.webp']
};
function newPhoto(x){
    // setTimeout(()=>{
    //     document.querySelector('header').style.cssText=`
    //         background-position: right;
    //         transition: all 1s ease-out;
    //   `;
    //   },0);
    document.querySelector('#pictures').style.cssText=`
    display:none;
    `;
    setTimeout(()=>{
        document.querySelector('header').style.opacity='0';
        document.querySelector('#ph').style.opacity="1";
        document.querySelector('#ph').innerHTML="📸";
    },0);
    setTimeout(()=>{
        document.querySelector('header').style.cssText=`
            background:url( ${x} );
            background-position:center center;
            transition: all 1s ease-out;
            opacity:1;
        `;
        
        document.querySelector('header').style.backgroundColor='#43B671';

        document.querySelector('header').style.backgroundRepeat='no-repeat';

        document.querySelector('#ph').style.opacity="0";
    },400);
    
  
  setTimeout(()=>{
    document.querySelector('header').style.cssText=`
        background-position: left;
        transition: all 1s ease-out;
        opacity:0;
  `;
  },5790)
}

setInterval(()=>{
    if(statusbar.count>=statusbar.photo.length){
        // console.log('FF');
        statusbar.count=0;
    }
    newPhoto(statusbar.photo[statusbar.count]);
    statusbar.count++;
    // console.log(statusbar.count);
},5800);
