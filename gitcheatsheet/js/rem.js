window.addEventListener('load',function(){    
    function rem(){
        let docel=document.documentElement
        docel.style.fontSize=docel.clientWidth / 12 +'px'
    }
    rem()
    window.addEventListener('resize',rem,false)
})