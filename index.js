window.onload = function(){
    // 获取对象
    const nav = document.querySelector(".nav-move");
    const navArrs = document.querySelectorAll(".nav");
    const view = document.querySelector(".navigation")
    const changediv = document.querySelector(".change-point");
    const pointArrs = document.querySelectorAll(".change-point ul li");
    

    let index = 0;
    let currentWidth = -view.offsetWidth * index;
    let [startx, movex] = [0, 0];
    nav.addEventListener("touchstart", (event) => {
        startx = event.targetTouches[0].clientX;
    })
    nav.addEventListener("touchmove", (event) => {
        movex = event.targetTouches[0].clientX - startx;
        if(index==0 && movex<0){
            currentWidth = -view.offsetWidth * index + movex;
            nav.style.transform = "translateX("+currentWidth+"px)";
            nav.style.transition = "all 0.3s";
        }
        if(index==1 && movex>0){
            currentWidth = -view.offsetWidth * index + movex;
            nav.style.transform = "translateX("+currentWidth+"px)";
            nav.style.transition = "all 0.3s";
        }
    })
    nav.addEventListener("touchend", (event) => {
        if(index==0 && movex<0){
            if(Math.abs(movex)>150){
                currentWidth = -view.offsetWidth * (index+1);
                nav.style.transform = "translateX("+currentWidth+"px)";
                nav.style.transition = "all 0.3s";
                index = 1;
            }else{
                currentWidth = -view.offsetWidth * index;
                nav.style.transform = "translateX("+currentWidth+"px)";
                nav.style.transition = "all 0.1s";
            }
        }
        if(index==1 && movex>0){
            if(Math.abs(movex)>150){
                currentWidth = -view.offsetWidth * (index-1);
                nav.style.transform = "translateX("+currentWidth+"px)";
                nav.style.transition = "all 0.3s";
                index = 0;
            }else{
                currentWidth = -view.offsetWidth * index;
                nav.style.transform = "translateX("+currentWidth+"px)";
                nav.style.transition = "all 0.1s";
            }
        }
        nav.addEventListener("transitionend", () => {
            for(let i=0; i<pointArrs.length; i++){
                pointArrs[i].className = "";
                pointArrs[index].className = "current-page";
            } 
            if(index == 0){
                changediv.style.transform = "translateY(-114px)";
                changediv.style.transition = "all 0.3s"

            }else{
                changediv.style.transform = "translateY(0)";
                changediv.style.transition = "none"
            }
        })
    })

    // 开始轮播图的表演
    const imgArrs = document.querySelectorAll(".recommend-first div ul li a img");
    const viewdiv = document.querySelector(".recommend-first div");
    const ul = document.querySelector(".recommend-first div ul");
    const introArrs = document.querySelectorAll(".intro-items span");
    const intro = document.querySelector(".intro-items");
    const price = document.querySelector(".recommend-footer ul");
    // 先让图片自己动起来
    let anoIndex = 1;
    let trasnlateWidth = -viewdiv.offsetWidth * anoIndex;
    let timer;
    // 定时器
    timer = setInterval(() => { 
        trasnlateWidth = -viewdiv.offsetWidth * anoIndex;
        ul.style.transform = "translateX("+trasnlateWidth+"px)";
        ul.style.transition = "0.3s";
        intro.style.transform = "translateX("+trasnlateWidth+"px)";
        intro.style.transition = "0.3s";
        price.style.transform = "translateX("+trasnlateWidth+"px)";
        price.style.transition = "0.3s";
        anoIndex++;
    },2000)
    // 开始做点的改变
    const anoPointArrs = document.querySelectorAll(".div-first ol li");
    ul.addEventListener("transitionend", (event) => {
        if(anoIndex>3 || anoIndex<1){
            if(anoIndex>3){         
                anoIndex = 0;   
            }else if(anoIndex<1){
                anoIndex = 3;
            }
            trasnlateWidth = -viewdiv.offsetWidth * anoIndex;
            ul.style.transform = "translateX("+trasnlateWidth+"px)";
            ul.style.transition = "none";
            intro.style.transform = "translateX("+trasnlateWidth+"px)";
            intro.style.transition = "none";
            price.style.transform = "translateX("+trasnlateWidth+"px)";
            price.style.transition = "none";
        }
        for(let i=0; i<anoPointArrs.length; i++){
            anoPointArrs[i].className = "";
            if(anoIndex == 0){
                anoPointArrs[anoIndex].className = "now-point";
            }else{
                anoPointArrs[anoIndex-1].className = "now-point";
            }
            
        }
    })
    // 轮播图的点我们等会再做,先做拖拽
    let [start, move] = [0, 0];
    ul.addEventListener("touchstart", (event) => {
        clearInterval(timer);
        start = event.targetTouches[0].clientX;
    })
    ul.addEventListener("touchmove", (event) => {
        move = event.targetTouches[0].clientX - start;
        trasnlateWidth = -viewdiv.offsetWidth * anoIndex + move;
        ul.style.transform = "translate("+ trasnlateWidth + "px)";
        ul.style.transition = "0.3s";
        intro.style.transform = "translate("+ trasnlateWidth + "px)";
        intro.style.transition = "0.3s";
        price.style.transform = "translate("+ trasnlateWidth + "px)";
        price.style.transition = "0.3s";
        
    })
    ul.addEventListener("touchend", (event) => {
        if(Math.abs(move)>50){
            if(move<0){
                anoIndex++;
            }else{
                anoIndex--;
            }
            trasnlateWidth = -viewdiv.offsetWidth * anoIndex;
            ul.style.transform = "translate("+ trasnlateWidth + "px)";
            ul.style.transition = "0.3s";
            intro.style.transform = "translate("+ trasnlateWidth + "px)";
            intro.style.transition = "0.3s";
            price.style.transform = "translate("+ trasnlateWidth + "px)";
            price.style.transition = "0.3s";
        }else{
            trasnlateWidth = -viewdiv.offsetWidth * anoIndex;
            ul.style.transform = "translate("+ trasnlateWidth + "px)";
            ul.style.transition = "0.1s";
            intro.style.transform = "translate("+ trasnlateWidth + "px)";
            intro.style.transition = "0.1s";
            price.style.transform = "translate("+ trasnlateWidth + "px)";
            price.style.transition = "0.1s";
        }
        timer = setInterval(() => { 
            trasnlateWidth = -viewdiv.offsetWidth * anoIndex;
            ul.style.transform = "translateX("+trasnlateWidth+"px)";
            ul.style.transition = "0.3s"
            intro.style.transform = "translateX("+trasnlateWidth+"px)";
            intro.style.transition = "0.3s"
            price.style.transform = "translateX("+trasnlateWidth+"px)";
            price.style.transition = "0.3s"
            anoIndex++;
        },2000)
    })
}