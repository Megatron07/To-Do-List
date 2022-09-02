import { v4 as uuid } from 'uuid';

const todoReducer = (state, action) => {
    switch (action.type) {
      case 'add':
            let addItem = [...state, {
                  title : action.value,
                  id : uuid(),
                  text : true
                }]
            window.localStorage.setItem("autosave-data",JSON.stringify(addItem));
            return addItem;

      case 'delete':
            let deleteItem = state.filter((current)=>current.id!==action.title);
            window.localStorage.setItem("autosave-data", JSON.stringify(deleteItem));
            return deleteItem;
            
      case 'Edit' :
            let temp = [...state];
            for(let i of temp){
                  if(i.id==action.title){
                        i.text = !i.text;
                        i.title = action.value;
                  }
            }
            window.localStorage.setItem("autosave-data", JSON.stringify(temp));
            return  temp;

      default : return null;
      }
}

export { todoReducer }