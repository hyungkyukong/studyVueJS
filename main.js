Vue.component('my-calendar', {
    template:'<div class="my-calendar">{{value}}  <div>{{tt}}</div></div>',
    //자식 컴포넌트에서 현재  값에 접근하려면 value를 입력해야 함
    props:{value:String,tt:String},
    created : function(){
        this.$emit('input','2020')
    },
    
})


new Vue({
    el: '#app',
    data: {
       date : '1999'
    }
})