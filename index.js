window.onload = function(){
    // 获取对象
    const nav = document.querySelector(".nav-move");
    const navArrs = document.querySelectorAll(".nav");
    const view = document.querySelector(".navigation")
    // 这个是左右导航栏索引的点
    const changediv = document.querySelector(".change-point");
    // 这个是推荐区域
    const recommenddiv = document.querySelector(".recommend-index");
    // 这个是直播广告页面
    const addiv = document.querySelector('.ad-bottom');
    // 这个是脚部页面
    const footerdiv = document.querySelector(".page-footer");
    const mainflow = document.querySelector(".main-flow");
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
            if(Math.abs(movex)>50){
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
            if(Math.abs(movex)>50){
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
            // 这个是主要适配左右导航栏拖拽时页面不整齐的问题
            if(index == 0){
                changediv.style.transform = "translateY(-114px)";
                changediv.style.transition = "all 0.3s"
                recommenddiv.style.transform = "translateY(-114px)";
                recommenddiv.style.transition = "all 0.3s"
                addiv.style.transform = "translateY(-114px)";
                addiv.style.transition = "all 0.3s"
                footerdiv.style.transform = "translateY(-114px)";
                footerdiv.style.transition = "all 0.3s"
                // 下面就是解决拖拽后不同页面高度的问题
                mainflow.style.overflow = "hidden";
            }else{
                changediv.style.transform = "translateY(0)";
                changediv.style.transition = "none"
                recommenddiv.style.transform = "translateY(0)";
                recommenddiv.style.transition = "none"
                addiv.style.transform = "translateY(0)";
                addiv.style.transition = "none"
                footerdiv.style.transform = "translateY(0)";
                footerdiv.style.transition = "none"
                mainflow.style.overflow = "visible";
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

    // 还要解决的一个问题是,推荐页面视窗在170px的时候,
    // 令其消失左边的小窗口
    const special = document.querySelector(".recommend-first");
    const span = document.querySelector(".special span");
    const anospan = document.querySelector(".ano-special span");
    
    addEventListener("resize", (event) => {
        if(special.offsetWidth <= 190){
            span.style.display = "none";
            anospan.style.display = "none";
        }else{
            span.style.display = "";
            anospan.style.display = "";
        }
    })

    document.body.addEventListener("touchmove", (event) => {
        event.preventDefault();
    }, {passive: false});


    const myword = `   终于是完成了,开始时也只是为了对刚学的flex布局进行练习,
没想到却对移动端拖拽事件有了一个从0到1的基础认知,仿制携程页面过程中遇到了
很多琐碎的问题,还好我坚持啃下来了,总之,结果不错。`
    console.log(myword);
}