Vue.component('my-component', {
    template: '<div>\
        <p>템플릿1</p>\
        <p>템플릿2</p>\
        </div>'
})

new Vue({
    el: '#app',
    data: {
        name: '슬라임',
        hp: 100
    }
})