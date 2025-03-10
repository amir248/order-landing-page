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
                document.querySelector('body > main > header > nav').style.cssText=`
                opacity:1;
                transition: all 3s ease-out;
                `;
            },1);
        }
        resolve(toGo());
    });
};//three

async function main(){
    await includeHtml();
    await first();
    await three();

};
main();