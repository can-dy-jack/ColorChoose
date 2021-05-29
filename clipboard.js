
// new ClipboardJS('.btn');

const colorbox = document.getElementsByClassName('colorbox');
const colorText = document.getElementsByTagName('textarea');

// CopyDownText  提示框
let hint = document.createElement('div');
let hinttext=document.createTextNode("已复制到剪贴板");
hint.className = "hintText";
hint.appendChild(hinttext);
hint.hidden = true;

// 鼠标指向提示框
// let MouseOver = document.createElement('div');
// let MouseOverText=document.createTextNode("点击复制到剪贴板");
// MouseOver.className = "MouseOverText";
// MouseOver.appendChild(MouseOverText);

// 复制到剪贴板
for (let i = 0;i<colorbox.length;i++){
    // colorbox[i].addEventListener('mouseover',()=>{
    //     colorbox[i].appendChild(MouseOver);
    // })
    colorbox[i].addEventListener('click',()=>{
        colorText[i].select();
        colorbox[i].appendChild(hint);
        if (document.execCommand('copy')){
            document.execCommand('copy');
            console.log(colorText[i].value);
            hint.hidden = false;
        }
    })
    // colorbox[i].addEventListener('mouseout',()=>{
        // if (colorbox[i].contains(MouseOver)){
        //     colorbox[i].removeChild(MouseOver);
        // }
    // })
}

