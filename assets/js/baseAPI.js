//AJAX的预过滤器。
$.ajaxPrefilter(function(options){
    options.url='http://ajax.frontend.itheima.net'+options.url
})