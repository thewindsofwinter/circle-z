import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Chat from '../views/Chat.vue';
import RoomList from '../views/RoomList.vue';
import UserList from '../views/UserList.vue';
import Settings from '../views/Settings.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'about',
    component: About,
  },

  {
    path: '/rooms/:id',
    name: 'chat',
    component: Chat,
  },

  {
    path: '/rooms',
    name: 'rooms',
    component: RoomList,
  },

  {
    path: '/users',
    name: 'users',
    component: UserList,
  },
  
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
