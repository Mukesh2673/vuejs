import axios from 'axios'
const state={
    users:[]

};
const getters={
    usersList:state=>state.users
};
const actions={
    async fetchUsers(context){
        console.log(state.users);
        const response=await axios.get("http://localhost:3000/users");
        context.commit("setUsers",response.data)
        
    },
    async addUsers({commit},user){
        const response=await axios.post("http://localhost:3000/users",user);
        commit("addNewUser",response.data)
    
    },
    async deleteUser({commit},id){
        await axios.delete(`http://localhost:3000/users/${id}`);
        console.log(id);
        commit("removeUser",id)
     
    }
};
const mutations={
    setUsers:(state,users)=>{
        state.users=users
    },

    addNewUser:(state,user)=>state.users.unshift(user),
    removeUser:(state,id)=>{
        
       state.users.filter(user=>user.id !==id);
        state.users.splice(user=>user.id,1);
        
    }
};
export default{
    state,
    getters,
    actions,
    mutations
}