  //公用的方法和兼容性问题的解决
export default{
    //解决fixed在ios软键盘弹出后失效
    IOSFixedResolve:function($UI){    //$UI是输入的input元素或者textarea元素
        if(checkIOS){
            $UI.on('blur','input',function(){
                $(body).scrollTop(0)    //当输入框获得或者失去焦点时，将body的scrollTop设置为0
            })
        }

        //检测是否为ios系统
        function checkIOS(){
            let u=navigator.userAgent;
            let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            return isIOS;
        }
    }
}