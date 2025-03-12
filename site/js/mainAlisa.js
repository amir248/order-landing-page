async function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

async function first() {
    await loadScript('site/js/menu.js');
}

async function includeHtml() {
    await loadScript('site/js/includeHtml.js');
}

async function three() {
    await new Promise(resolve => setTimeout(resolve, 1));
    if (window.location.pathname === '/') {
        document.querySelector('body > main > header > nav').style.cssText = `
            opacity: 1;
            transition: all 3s ease-out;
        `;
    } else {
        document.querySelector('body > main > article > nav').style.cssText = `
            opacity: 1;
            transition: all 3s ease-out;
        `;
    }
}

async function backgruondHeader() {
    await loadScript('site/js/onLoadPhoto.js');
}

async function date() {
    await new Promise(resolve => setTimeout(resolve, 300));
    await loadScript('site/js/date.js');
}

async function main() {
    await includeHtml();
    await first();
    await three();
    if (window.location.pathname === '/') {
        await backgruondHeader();
    }
    await date();
}

main();