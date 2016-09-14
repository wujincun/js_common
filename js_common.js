/**
 * Created by wujincun on 2016/9/14.
 */
//类数组转数组
function nodeListToArray(eles){
    try{
        Array.prototype.slice.call(eles,0)
    }catch(e){
        var a=[];
        for(i=0;i<eles.length;i++){
            a.push(eles[i])
        }
    }
    return a;
}
/*获取class名的元素*/
function getElementsByClassName(sClass,oContext){
    oContext=oContext||document;
    if(oContext.nodeType==1||oContext.nodeType==9){
        if(oContext.getElementByClassName){
            return oContext.getElementByClassName(sClass);
        }else{
            var regTrim=/^ +| +$/g;
            sClass=sclass.replace(regTrim,"");
            var aClass=sClass.split(/ +/);
            var eles=document.getElementsByTagName("*");
            var aeles= nodeListToArray(eles);
            for(i=0;i<aClass.length;i++){
                var regClass=new RegExp("\\b"+aClass[i]+"\\b");
                for(j=0;j<aeles.length;){
                    if(!regClass.test(aeles[j].className)){
                        aeles.splice(i,1)
                    }else{
                        j++
                    }
                }
            }
            return aeles;
        }
    }else{
        alert("第二个参数oContext类型不对");
        throw  new Error("第二个参数oContext类型不对");
    }
}