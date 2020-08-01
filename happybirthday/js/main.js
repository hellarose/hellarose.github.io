/*rem布局事件操作函数*/



/*jqajax-rem-isc-ready*/
$(function(){
    function rem(){
        let docel=document.documentElement
        docel.style.fontSize=docel.clientWidth / 5.8 +'px'
    }
    rem()
    window.addEventListener('resize',rem,false)
    let t=0,k=1000
    // 背景
    $('#card-background').fadeIn(k)
    t+=k
    // 相框
    setTimeout(()=>{
        $('#card-content-wrapper').fadeIn(k)
    },t)
    t+=k
    // 马首
    setTimeout(_=>{
        $('#horse').fadeIn(500)
    },t)
    t+=500
    // 贺词框
    setTimeout(_=>{
        $('#congratulations').fadeIn(500)
    },t)
    t+=500,k=1000
    // 时间
    setTimeout(_=>{
        $('#date').fadeIn(k)
        $('#mother').fadeOut(k)
    },t)
    t+=k
    // 英文
    setTimeout(_=>{
        $('#in_english').fadeIn(500)
    },t)
    t+=500
    // 中文
    setTimeout(_=>{
        $('#in_chinese').fadeIn(500)
    },t)
    t+=500
    // $('#horse').animate({top:'0'},2000)

    
})//end jqajax-rem-isc-ready
