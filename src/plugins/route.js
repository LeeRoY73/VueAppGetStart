import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// components
import MainPage from "../views/MainPage";
import Page_404 from "../views/Page_404"
export default new Router({
    routes: [

        {
            path: '/mainpage',
            name: 'Main Page',
            component: MainPage,
        },
        {
          path:'/404',
          name: 'Page not found',
          component: Page_404
        },
        {
            path: '/',
            redirect: '/mainpage'
        },
        {
            path: '*',
            redirect:'/404'
        }

    ]
});
