import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu-store", {
    state: () => ({ menu : [
        {id : "home" , name : "Home" },
        {id : "about" , name : "About"},
        {id : "projects" , name : "Projects"},
        {id : "Blogs" , name : "Blogs"}
    ]}),
    getters: {
        getMenu: (state) => state.menu,
    },
    actions: {
       
    },
})