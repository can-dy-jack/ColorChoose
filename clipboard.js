
// new ClipboardJS('.btn');

const colorbox = document.getElementsByClassName('colorbox');
const colorText = document.getElementsByTagName('textarea');
for (let i = 0;i<colorbox.length;i++){

    colorbox[i].addEventListener('click',()=>{
        colorText[i].select();
        if (document.execCommand('copy')){
            document.execCommand('copy');
            console.log(colorText[i].value);
        }
    })
}

