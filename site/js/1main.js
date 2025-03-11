function first(){
    return new Promise((resolve)=>{
        function loadFirst(){
            let ok=document.createElement('script');
            ok.src="site/js/menu.js";
            document.querySelector('body').append(ok);
        }
        setTimeout(()=>{
            resolve(loadFirst());
        },1100);
    });
};//first
function includeHtml(){
    return new Promise((resolve)=>{
        function include(){
            let newInclude=document.createElement('script');
            newInclude.src='site/js/includeHtml.js';
            document.querySelector('body').append(newInclude);
        }
        resolve(include());
    });
};//includeHtml
function three(){
    return new Promise((resolve)=>{
        function toGo(){
            setTimeout(()=>{
                if(window.location.pathname=="/"){
                    document.querySelector('body > main > header > nav').style.cssText=`
                    opacity:1;
                    transition: all 3s ease-out;
                `;
                }else{
                    document.querySelector('body > main > article > nav').style.cssText=`
                    opacity:1;
                    transition: all 3s ease-out;
                `;
                }
            },1);
        }
        resolve(toGo());
    });
};//three
function backgruondHeader(){
    return new Promise((resolve)=>{
        function onLoadFunction(){
            let script=document.createElement('script');
            script.src="site/js/onLoadPhoto.js";
            document.querySelector('body').append(script);
        }
        resolve(onLoadFunction());
    })
};//backgruondHeader;
function date(){
    return new Promise((resolve)=>{
        function showDate(){
            let scr=document.createElement('script');
            scr.src="site/js/date.js";
            document.querySelector('body').append(scr);
        }
        setTimeout(()=>{
            resolve(showDate());
        },300);
    });
};//date();

async function main(){
    await includeHtml();
    await first();
    await three();
    if(window.location.pathname=='/'){
        await backgruondHeader();
    }
    await date();
};
main();