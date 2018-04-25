//模拟JSON数据
var json = {
    data:[
        {name:'花瓣小小裙花瓣',price:'128',details:'质量超好特别的舒适，夏天首选。',src:'http://image.wwtx.cn/data/attachment/common/cf/153428j3wqz2qsuswlz2zw.jpg'},
        {name:'时尚牛仔短裤',price:'298',details:'质量超好特别的舒适，夏天首选。',src:'http://bbs.wwtx.cn/zzlogo/weizhi2.jpg'},
        {name:'白色婚纱',price:'668',details:'质量超好特别的舒适，夏天首选。',src:'http://image.wwtx.cn/data/attachment/common/cf/153538elxuucgoh8a8x7g3.jpg'},
        {name:'绿色防晒衣',price:'218',details:'质量超好特别的舒适，夏天首选。',src:'http://image.wwtx.cn/data/attachment/common/cf/153614xy8mlnhcscl9cc9a.jpg'},
        {name:'白色婚纱',price:'668',details:'质量超好特别的舒适，夏天首选。',src:'http://image.wwtx.cn/data/attachment/common/cf/153538elxuucgoh8a8x7g3.jpg'},
        {name:'绿色防晒衣',price:'218',details:'质量超好特别的舒适，夏天首选。',src:'http://image.wwtx.cn/data/attachment/common/cf/153614xy8mlnhcscl9cc9a.jpg'}
    ]
}



$(document.body).infinite();
showImg();


var loading = false;  //状态标记
$(document.body).infinite().on("infinite", function() {
    if(loading) return;
    loading = true;
    setTimeout(function() {
        showImg();
        loading = false;
    }, 1500);   //模拟延迟
});



function showImg(){
//模拟数据导入
    for(var i=0;i<json.data.length;i++){
        var chtml = '<li><p class="product_picture"><img src="'+json.data[i].src+'"></p>'
          // +'<p class="product_ie"><a>'+json.data[i].details+'</a></p>'
          //  +'<p class="product_ie">'+json.data[i].details+'</p></li>'

        if($('.BoxLeft').height() < $('.BoxRight').height()){
            $('.BoxLeft').append(chtml);
        }else{
            $('.BoxRight').append(chtml);
        }
    }
}

