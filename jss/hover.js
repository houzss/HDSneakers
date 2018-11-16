

//将以下代码放入window.onload或者把js文件在body底部引用，不然会获取不到元素

var bannerLeft = document.getElementsByClassName("bannerLeft");
var bannerRight = document.getElementsByClassName("bannerRight");

function mouseOver(i){
    // (function(i){
        for(let j = 0; j < 3; j ++){
            if(j == i){
                getHover(j);
            }else{
                loseHover(j);
            }
        }
    // })(i);
}

function hover(){
    
    // 事件监听要用匿名函数传参数
    bannerRight[0].addEventListener("mouseover",function(){mouseOver(0);clearInterval(auto_timer);});
    bannerRight[1].addEventListener("mouseover",function(){mouseOver(1);clearInterval(auto_timer);});
    bannerRight[2].addEventListener("mouseover",function(){mouseOver(2);clearInterval(auto_timer);});

    bannerRight[0].addEventListener("mouseout",function(){flag = 1;auto();});
    bannerRight[1].addEventListener("mouseout",function(){flag = 2;auto();});
    bannerRight[2].addEventListener("mouseout",function(){flag = 3;auto();});
}
function getHover(i){
    bannerLeft[i].style.zIndex = "1";
    opacity(1,i);
    blockSwitch(i);
    flag = i;
}
function loseHover(i){
    bannerLeft[i].style.zIndex = "-2";
    bannerLeft[i].style.opacity = 0;
}

//实现透明渐变
var opacity_alpha = [1,0,0];
var opacity_speed = 0;
var opacity_timer = null;
function opacity(target,i){
    if(switch_target/60 != i)
        opacity_alpha[i] = 0;
    clearInterval(opacity_timer);
    opacity_timer = setInterval(function(){
        if(target > opacity_alpha[i]){
            opacity_speed = 0.03;
        }else if(target < opacity_alpha[i]){
            opacity_speed = -0.03;
        }
        if(opacity_alpha[i] > target - 0.01){
            opacity_speed = 0;
            clearInterval(opacity_timer);
        }else{
            opacity_alpha[i] += opacity_speed;
            bannerLeft[i].style.opacity = opacity_alpha[i];
        }

    },30);
}

//实现滑块滑动
var switch_marginTop = 0;
var switch_speed = 0;
var switch_timer = null;
var switch_target = 0;
//var switchBlock = document.getElementsByClassName("hover-bg");
function blockSwitch(i){
    
    switch_target = 60 * i;
    clearInterval(switch_timer);
    switch_timer = setInterval(function(){
        if(switch_target > switch_marginTop){
            switch_speed = 5;
        }else if(switch_target < switch_marginTop){
            switch_speed = -5;
        }
        if(switch_marginTop == switch_target ){
            switch_speed = 0;
            clearInterval(switch_timer);
        }else{
            switch_marginTop += switch_speed;
            //注意 + "px"          
            switchBlock[0].style.marginTop = switch_marginTop + "px";
        }
    },30);
}



var flag = 1;
var auto_timer = null;
function auto(){
    clearInterval(auto_timer);
    auto_timer = setInterval(function(){
        mouseOver(flag);
        flag ++;
        if(flag == 3){
            flag = 0;
        }
    },3000);
}


hover();
auto();