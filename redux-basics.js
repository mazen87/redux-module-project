const redux = require('redux');

const createStore = redux.createStore;

const initState = {
    counter :0
};

//Reducer
const rootReducer = (state = initState , action) =>{
   if(action.type === 'INC_COUNTER'){
       return {
           ...state,
           counter : state.counter + 1
       }
   };
   if(action.type === 'ADD_COUNTER'){
    return {
        ...state,
        counter : state.counter + action.value
    }
};

return state;
};
//Store 
const appStore = createStore(rootReducer);

//Subscription 
appStore.subscribe(() => {
    console.log('[Subscription]', appStore.getState());
});

//const appStore = redux.createStore(rootReducer);
console.log(appStore.getState());


// Dispatching action 

appStore.dispatch({type:'INC_COUNTER'});
appStore.dispatch({type:'ADD_COUNTER' ,value:10});
console.log(appStore.getState());
