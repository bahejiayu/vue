//时间过滤器
import Vue from 'vue'
//引入moment
import moment from 'moment'
 var datefilter= Vue.filter('datefilter',function (data,format) {
	
	 return moment(data).format(format || 'YYYY-MM-DD HH:mm:ss')
       

    //判断是否是字符串 function undefine
    if(Object.prototype.toString.call(data) === "[object String]") {
        //是字符串就做日期转换
        // console.log("datefilter", data);
        //按照年月日 时分秒计算日期格式  YYYY-MM-DD

       
    }else{
        //如果不是就将其返回出去
        return data;
    }
});


 var test2=Vue.filter('test2',function (data) {
			return data+'22222222222'

});

export default{
	datefilter,
	test2
	
}
