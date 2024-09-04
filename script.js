let output = document.querySelector("#output");
let allinput = document.querySelectorAll(".leftpart textarea")
// output.contentDocument.body.innerHTML="<h1>Welcome to WS<h1>";
// output.contentDocument.head.innerHTML="<style> h1{color:red}</style>";
// output.contentWindow.eval('let a=10;let b=20; alert(a+b)');
let htmlcode,csscode,jscode='';
allinput.forEach((el,index)=>{
    el.addEventListener("keyup",()=>{
        if(index==0) {
          // if index ==0 we have to work on html codes
           htmlcode=el.value;  
        }
        if(index==1){
            // we have to work on css code if index ==2
            csscode=el.value;
        }
        if(index==2){
            // we have to work on javascript code if index==3
            jscode= el.value;
        }
        output.contentDocument.body.innerHTML=htmlcode;
        output.contentDocument.head.innerHTML=`<style>${csscode}</style>`;
        output.contentWindow.eval(jscode);

    })
})
