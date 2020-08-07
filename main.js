Vue.component('my-calendar', {
    props: {
        date: '2020-02-02'
    },
    created: function() {
        this.$emit('input', '2018-01-01')
    }


})

new Vue({
    el: '#app',
    data: {
        parentsData: '<부모의 데이터>'
    }
})