export default{
    state:{
        categories : [],
    },
    mutations :{
        addCategory(state,payload){
            state.categories.push(payload)
        },
    },
    getters: {
        getCategory: state => state.categories
    },
}