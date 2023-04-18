// creat dropdown menu
var all_selector = document.querySelectorAll(".selct-txt");

all_selector.forEach((selector)=>{
    selector.addEventListener("click", function(){
        selector.nextElementSibling.classList.toggle("option-block");
        selector.querySelector(".fa-caret-down").classList.toggle("dropDown-style");   
    })
    selector.nextElementSibling.querySelectorAll(".option").forEach((value)=>{
        value.addEventListener("click",()=>{
            value.parentElement.previousElementSibling.querySelector("p").innerHTML=value.innerHTML;    
            value.parentElement.classList.toggle("option-block");
            value.parentElement.previousElementSibling.querySelector(".fa-caret-down").classList.toggle("dropDown-style");
        })
    })
})

//change font size increment decrement

let fontFather = document.querySelector(".font-size");
let minusBtn = fontFather.querySelector(".input-group-prepend");
let plusBtn = fontFather.querySelector(".input-group-append");
var sizeField = fontFather.querySelector("input");
minusBtn.addEventListener("click", function(){
    var number = parseInt(sizeField.value)
    if(number>1){
        number = number-1;
    }else{
        number=number
    }
    sizeField.value = number;
})

plusBtn.addEventListener("click", function(){
    var number = parseInt(sizeField.value);
    if(number<7){
        
        number = number+1;
    }else{
        number=number;
    }
    sizeField.value = number;
})

//font size
document.querySelector(".minus").addEventListener("click", function(){
    let valu = document.querySelector(".size-value").value;
    document.execCommand("fontSize", false, valu);
})
document.querySelector(".plus").addEventListener("click", function(){
    let valu = document.querySelector(".size-value").value;
    document.execCommand("fontSize", false, valu);
})
document.querySelector(".size-value").addEventListener("keypress", function(e){
    if(e.keye=="Enter"){
        document.execCommand("fontSize", false, this.value);
    }
})

//change font family
var parent = document.querySelectorAll(".option-list")[1];
var child = parent.querySelectorAll(".option")
child.forEach((element)=>{
    element.addEventListener("click", function(){
        let fontname = this.innerHTML;
        document.execCommand("fontName", false, fontname);
    })
})

//change text heading
var heading = document.querySelectorAll(".option-list")[0];
var heading_child = heading.querySelectorAll(".option")
heading_child.forEach((element)=>{
    element.addEventListener("click", function(){
        document.execCommand("formatBlock", false, this.innerHTML)
    })
})

//undo
document.querySelector(".undo").addEventListener("click", function(){
    document.execCommand("undo");
})

//redo
document.querySelector(".redo").addEventListener("click", function(){
    document.execCommand("redo");
})

//hide and show topbar
document.querySelector(".optionlist6 i").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("head-none");
    this.classList.toggle("dropDown-style");
})

//copy
document.querySelector(".copy").addEventListener("click", function(){
    document.execCommand("copy");
})

//cut
document.querySelector(".cut").addEventListener("click", function(){
    document.execCommand("cut");
})

//paste
document.querySelector(".paste").addEventListener("click", function(){
    document.execCommand("paste");
})

//text bold
document.querySelector(".bold").addEventListener("click", function(){
    document.execCommand("bold");
})

//text italic
document.querySelector(".italic").addEventListener("click", function(){
    document.execCommand("italic");
})
//text underline
document.querySelector(".underline").addEventListener("click", function(){
    document.execCommand("underline");
})
//text strike
document.querySelector(".strike").addEventListener("click", function(){
    document.execCommand("strikeThrough");
})
//text forground color
var forcolor = document.querySelector(".for-color")
forcolor.addEventListener("change", function(){
    let pro1 = ()=>{
        return new Promise((resolve)=>{
            let colorValue = this.value;
            resolve(colorValue);
        })
    }
    let pro2 = (colorCode)=>{
        return new Promise(()=>{
            document.execCommand("foreColor", true , colorCode);
        })
        
    }
    async function color(){
        const p1 = await pro1();
        await pro2(p1);
    }
    color();
})

//text background color
var backclr = document.querySelector(".highlight");
backclr.addEventListener("change", function(){
    const prom1 = ()=>{
        return new Promise((res, rej)=>{
            let backcolorvalue = this.value;
            res(backcolorvalue);
            rej("prom1 error")
        })
    }
    const prom2 = (code)=>{
        return new Promise(()=>{
            document.execCommand("hiliteColor", false , code);
        })
    }

    async function background(){
        try{
            const x1 = await prom1();
            await prom2(x1);
        }
        catch(err){
            console.log(err);
        }
    }
    background();
})

//align left
document.querySelector(".align-left").addEventListener("click", function(){
    document.execCommand("justifyLeft")
})

//align center
document.querySelector(".align-center").addEventListener("click", function(){
    document.execCommand("justifyCenter")
})

//align right
document.querySelector(".align-right").addEventListener("click", function(){
    document.execCommand("justifyRight");
})

//align justify
document.querySelector(".align-justify").addEventListener("click", function(){
    let selec = window.getSelection();
    document.execCommand("justifyFull", false, selec);
})

//order list
document.querySelector(".orderList").addEventListener("click", function(){
    document.execCommand("insertorderedlist");
})

//unorderlist
document.querySelector(".unorderList").addEventListener("click", function(){
    document.execCommand("insertUnorderedList");
})

//creat link
document.querySelector(".link").addEventListener("click", function(){
    const selector = window.getSelection();
    let newLink = document.execCommand("createLink", true, selector);
})
const content = document.getElementById("content");
content.addEventListener("mouseenter", function(){
    const a = document.querySelectorAll("a")
    a.forEach((item)=>{
        item.addEventListener("mouseenter", function(){
            content.setAttribute("contenteditable", false);
            item.target = "_blank";
        })
        item.addEventListener("mouseleave", function(){
            content.setAttribute("contenteditable", true);
        })
    })
})


//unlink
document.querySelector(".linkDisable").addEventListener("click", function(){
    const selector = window.getSelection();
    document.execCommand("unlink");
})

//horizontal role
document.querySelector(".horizontal-role").addEventListener("click", function(){
    document.execCommand("insertHorizontalRule");
})

//insert image
var file = document.querySelector(".image input");
file.addEventListener("change", function(){
    const promis1 = ()=>{
        return new Promise((resolve, reject)=>{
            var imgvalue = URL.createObjectURL(file.files[0]);
            resolve(imgvalue)
            reject("error promis1")
        })
        
    }
    const promis2 = (imglink)=>{
        return new Promise(()=>{
            document.execCommand("InsertImage", false, imglink);
        })
        
    }

    async function caller(){
        try{
            const t1 = await promis1();
            await promis2(t1);
        }
        catch(e){
            console.log(e);
        }
    }
    caller();
    
})

//insert html
document.querySelector(".html").addEventListener("click", function(){
    let select = window.getSelection();
    document.execCommand("insertHTML", false, select);
})

window.onwheel = e => {
    if(e.deltaY >= 0){
        document.querySelector("header").classList.add("head-none");
        document.querySelector(".optionlist6 i").classList.add("dropDown-style");
    }else{
        
    }
}




