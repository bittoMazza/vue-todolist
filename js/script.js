

const app = new Vue(
    {
        el:'#app',
        data: {
            newListElement : '',
            newDoneElement: '',
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
            removeToDo(indice){
                this.todos.splice(indice,1);
            },
            // Creiamo un nuovo oggetto e alla proprietà text assegniamo il valore preso in input
            addNewElement(newItemElement){
                let newItem = {text: newItemElement , done:false};
                this.todos.push(newItem)
                this.newListElement = '';
                console.log(this.todos)
            },
            completedToDo(i){
                this.todos[i].done = !this.todos[i].done
            }
        }

    }
    
)

