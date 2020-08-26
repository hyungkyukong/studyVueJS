//메시지 목록 전용 컴포넌트
Vue.component('comp-board', {
    template: '<div>Message Board</div>',

})

Vue.component('comp-form', {
    template: '<div>Form<textarea v-model="message"></textarea></div>',
    data: function() {
        return { message: 'kongtest' }
    }
})

new Vue({
    el: '#app',
    data: {
        current: 'comp-board' //동적으로 변경하기
    }
})