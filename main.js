new Vue({
    el: '#app',
    data: {
        show: true
    },
    methods: {
        enter: function(el, done) {
            console.log('enter')
            setTimeout(done, 1000) //1초 후에 enter를 종료하고 after-enter로 변경하기
        },
        afterEnter: function(el) {
            console.log('afterEnter')
        }
    }
})