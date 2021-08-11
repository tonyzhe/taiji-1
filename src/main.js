let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*我是一名前端新人
好了，从现在开始
我要展示css了**/
#taiji{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*首先把八卦图画出来
将其变为一个圆**/
#taiji{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*一半黑一半白
**/
#taiji{
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*制作两个伪元素来代替球
**/
#taiji::before{
    content:'';
    display:block;
    
    width:100px;
    height:100px;
    position:absolute;
    left:0;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
      background :#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);

}
#taiji::after{
    content:'';
    display:block;
   
    width:100px;
    height:100px;
    position:absolute;
    bottom:0;
    left:0;
     left:50%;
    transform:translateX(-50%);
    border-radius:50%;
     background: #fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
`
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if(string[n]===" "){
            string2 += "&nbsp";
        }else {
        string2 += string[n];
            
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0,9999);
        if (n < string.length-1) {
            n += 1;
            step();
        }
        
    },0)
}
step();