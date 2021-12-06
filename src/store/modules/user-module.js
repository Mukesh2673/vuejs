
const state={
    users:[],
    count:0,
    user:{
        loggedIn:false,
        isSubscribed:false
    }

};
const getters={

    auth(state){
        return state.user
    }
};



export default{
    state,
    getters
}