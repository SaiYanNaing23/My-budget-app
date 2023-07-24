export default{
    state:{
        income : [],
    },
    mutations :{
        addIncome(state,payload){
            state.income.push(payload)
        },
        setIncome(state,{index,income}){
            state.income[index] = income;
        },
        delIncome(state,payload){
            state.income.splice(payload,1)
        }
    },
    getters: {
        getIncome: state => state.income
    },
}