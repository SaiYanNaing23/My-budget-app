export default{
    state:{
        categories : [],
    },
    mutations :{
        addCategory(state,payload){
            state.categories.push(payload)
        },
        setCategory(state,{index,category}){
            state.categories[index] = category;
        },
        delcategory(state,payload){
            state.categories.splice(payload,1)
        }
    },
    getters: {
        getCategory: state => state.categories
    },
}