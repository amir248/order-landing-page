function first(){
    return new Promise((resolve)=>{
        function loadFirst(){
            let ok=document.createElement('script');
            ok.src="site/js/menu.js";
            document.querySelector('body').append(ok);
        }
        resolve(loadFirst());
    });
};//first

async function main(){
    await first();
};
main();