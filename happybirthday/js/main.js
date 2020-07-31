/*rem布局事件操作函数*/
function rem(){
    let docel=document.documentElement
    docel.style.fontSize=docel.clientWidth / 5.8 +'px'
}
rem()
window.addEventListener('resize',rem,false)
