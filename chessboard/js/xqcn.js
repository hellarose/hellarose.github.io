/*二次封装jqajax*/
function getajax(jsonOrRouterStr,resfunc){
    $.ajax({
        type:'get',
        async:1,
        url:jsonOrRouterStr,
        data:{_id:_id},
        success:resfunc,
        error:function(e){
            console.log(e,'error')
        }
    })
}
/*rem布局事件操作函数*/
function rem(){
    var docel=document.documentElement
    docel.style.fontSize=docel.clientWidth / 10.8 +'px'
}
/*jqajax-rem-isc-ready*/
$(function(){
    rem()
    $(window).on('resize',rem)
    //document.addEventListener('touchmove',function(e){
    //    var ev = e || window.event
    //    ev.preventDefault()
    //    ev.stopPropagation()
    //},{passive:false})
    
})//end jqajax-rem-isc-ready