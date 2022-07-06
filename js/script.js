

const app = new Vue(
    {
        el:'#app',
        data: {
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }, 
                {
                    text: 'Fare da mangiare',
                    done: true
                },
                {
                    text: 'Fare schifo',
                    done: true
                },
                {
                    text: 'Finire stranger things',
                    done: false
                }
            ]
        },
        methods: {
           
        }

    }
    
)

