var mixin = {
    created: function() {
        this.hello()
    },
    methods: {
        hello: function() {
            console.log('hello from mixin!!')
        }
    }
}

//컴포넌트 A
Vue.component('my-component-a', {
        mixins: [mixin], //믹스인 등록하기   
        template: '<div class="my-component-a">component A</div>'
    })
    //컴포넌트 B
Vue.component('my-component-b', {
    mixins: [mixin], //믹스인 등록하기
    template: '<div class="my-component-b">component B</div>'
})

new Vue({
    el: '#app',
    data: {
        componentTypes: ['my-component-a', 'my-component-b'],
        current: 0
    },
    computed: {
        component: function() {
            //current와 일치하는 index의 컴포넌트를 사용
            return this.componentTypes[this.current]
        }
    }
})