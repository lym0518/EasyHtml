# EasyHtml
## 各网页结构分析：
### 首页：
页面分为右侧导航栏与登录按钮；
左侧游戏logo，英文拼写方阵，svg矢量图形；
各个渠道的下载链接和适龄提示。
### 情报页：
页面分为右侧导航栏与登录按钮；
左上角轮播图；
左下角新闻列表。
### 各页面样式分析
首页：
```
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```
消除页面本身的内外边距方便接下来的设置。
```
.arknights {
    font-size: small;
    text-align: left;
    color: rgb(255, 255, 255);
    display: grid;
    grid-template-rows: repeat(3, 55px);
    grid-template-columns: repeat(3, 50px);
}
```
通过网格布局实现英文拼写的方阵。
```
.D img:hover {
    border: 2px solid #fff;
    border-radius: 10px;
}
```
鼠标移动到下载链接的图标时，改变图标边框颜色，并且设置为圆角。
还有其他一般样式，因篇幅不在此赘述。
情报页：
```
#box {
    width: 800px;
    height: 200px;
    overflow: hidden;
    position: relative;
}

#lunboimg {
    width: 800px;
    height: 200px;
    position: absolute;
    display: flex;
}

a {
    width: 800px;
    height: 200px;
}

#lunboimg img {
    width: 800px;
    height: 200px;
    margin: 0;
}

#box:hover {
    display: flex;
}

#selector {
    width: 300px;
    height: 20px;
    position: absolute;
    bottom: 0;
    margin-left: 490px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
}

#selector span {
    width: 450px;
    height: 5px;
    background-color: #ffffff;
    opacity: 0.8;
    margin-right: 5px;
    cursor: pointer;
}
```
对轮播图进行样式定义
内盒子与外盒子要宽高一致，对轮播图右下角显示的小长条进行实现。
### 各网页交互式设计：
情报页：
```
let img = document.querySelector('.limg');
let span = document.querySelectorAll('.route');
let index = 0;
let timer;
function show() {
        span[index].style.backgroundColor = "#65cef7"
        img.src = `../img/pageTwo/${index}.jpg`;
}

function autoPlay() {
        timer = setInterval(function () {
            if (index != 0) {
                span[index - 1].style.backgroundColor = "#FFFFFF"
            }
            if (index == span.length) {
                index = 0;
            }
            show();
            index++;
        }, 3000);
}
autoPlay();
```
通过js的timer计时器控制轮播图轮播，并且改变右下角小长条的颜色，使其随着图片变化而变化。

## 心得体会：
通过对整个网页的设计与功能的实现，加深了自己对css，js，html的相关理解，体会到自己的不足。
开发过程中遇到了很多问题，通过不断的试错与纠正以及查阅相关资料，大多顺利解决。
今后会深化自己的技术，弥补自己的不足以能实现更多自己想实现的功能。

