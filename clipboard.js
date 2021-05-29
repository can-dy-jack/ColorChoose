
// new ClipboardJS('.btn');

const colorbox = document.getElementsByClassName('colorbox');
const colorText = document.getElementsByTagName('textarea');

// 提示框
let hint = document.createElement('div');
let hinttext=document.createTextNode("已复制到剪贴板");
hint.className = "hintText";
hint.appendChild(hinttext);
hint.hidden = true;
// 复制到剪贴板
for (let i = 0;i<colorbox.length;i++){
    colorbox[i].addEventListener('click',()=>{
        colorText[i].select();
        colorbox[i].appendChild(hint);
        if (document.execCommand('copy')){
            document.execCommand('copy');
            console.log(colorText[i].value);
            hint.hidden = false;
        }
    })
}

