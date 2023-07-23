import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path : "/",
        name : "Dashboard",
        component : ()=> import("./../views/Dashboard")
    },
    {
        path : "/Expense",
        name : "Expense",
        component : ()=>import("./../views/Expense")
    },
    {
        path : "/Income",
        name : "Income",
        component : ()=> import("./../views/Income")
    },
    {
        path: "/Category",
        name: "Category",
        component : ()=>import("./../views/Category")
    }
];

const router = new VueRouter({
  routes
});

export default router;