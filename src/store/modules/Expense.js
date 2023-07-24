export default{
    state:{
        expense : [],
    },
    mutations :{
        addExpense(state,payload){
            state.expense.push(payload)
        },
        setExpense(state,{index,expense}){
            state.expense[index] = expense;
        },
        delExpense(state,payload){
            state.expense.splice(payload,1)
        }
    },
    getters: {
        getExpense: state => state.expense
    },
}