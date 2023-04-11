import {createRouter, createWebHistory} from 'vue-router'
import Register from "@/views/Register";
import IndexPage from "@/views/IndexPage";
import Home from "@/components/home/Home";
import Adopt from "@/components/home/adopt/Adopt";
import Login from "@/views/Login";
import Seek from "@/components/home/seek/Seek";
import Rescue from "@/components/home/rescue/Rescue";
import Help from "@/components/home/Help";
import EditUserInfo from "@/components/user/EditUserInfo";
import MyMessage from "@/components/user/MyMessage";
import InfoManager from "@/components/manager/InfoManager";
import AdoptManager from "@/components/manager/AdoptManager";
import SeekManager from "@/components/manager/SeekManager";
import RescueManager from "@/components/manager/RescueManager";
import NewsManager from "@/components/manager/NewsManager";
import CommentManager from "@/components/manager/CommentManager";
import UserManager from "@/components/manager/UserManager";
import BaseDataManager from "@/components/manager/BaseDataManager";
import HelpManager from "@/components/manager/HelpManager";
import AdoptPublish from "@/components/home/adopt/AdoptPublish";
import AdoptView from "@/components/home/adopt/AdoptView";
import SeekPublish from "@/components/home/seek/SeekPublish";
import RescuePublish from "@/components/home/rescue/RescuePublish";
import RescueView from "@/components/home/rescue/RescueView";
import SeekView from "@/components/home/seek/SeekView";
import RealTimeView from "@/components/home/realtime/RealTimeView";
import RealTime from "@/components/home/realtime/RealTime";
import RealTimePublish from "@/components/home/realtime/RealTimePublish";

const routes = [
    {
        path: '/',
        name: 'indexPage',
        redirect: '/home',
        component: IndexPage,
        children: [
            {
                path: 'home',
                component: Home,
            }, {
                path: 'adopt',
                component: Adopt,
            }, {
                path: 'realtime',
                component: RealTime,
            }, {
                path: 'seek',
                component: Seek,
            }, {
                path: 'rescue',
                component: Rescue,
            }, {
                path: 'help',
                component: Help,
            }, {
                path: 'edit_user_info',
                component: EditUserInfo,
            }, {
                path: 'message',
                component: MyMessage,
            }, {
                path: 'info_manager',
                redirect: '/info_manager/adopt',
                component: InfoManager,
                children: [
                    {
                        path: '/info_manager/adopt',
                        component: AdoptManager,
                    }, {
                        path: '/info_manager/seek',
                        component: SeekManager,
                    }, {
                        path: '/info_manager/rescue',
                        component: RescueManager,
                    }, {
                        path: '/info_manager/news',
                        component: NewsManager,
                    }, {
                        path: '/info_manager/comment',
                        component: CommentManager,
                    }, {
                        path: '/info_manager/user',
                        component: UserManager,
                    }, {
                        path: '/info_manager/base',
                        component: BaseDataManager,
                    }, {
                        path: '/info_manager/help',
                        component: HelpManager,
                    },
                ]
            }, {
                path: 'adopt_publish',
                component: AdoptPublish,
                props: true
            }, {
                path: 'adopt_view',
                component: AdoptView,
                props: true
            }, {
                path: 'seek_publish',
                component: SeekPublish,
                props: true
            }, {
                path: 'seek_view',
                component: SeekView,
                props: true
            }, {
                path: 'rescue_publish',
                component: RescuePublish,
                props: true
            }, {
                path: 'rescue_view',
                component: RescueView,
                props: true
            }, {
                path: 'realtime_view',
                component: RealTimeView,
                props: true
            }, {
                path: 'realtime_publish',
                component: RealTimePublish
            }
        ]
    }, {
        path: '/register',
        name: 'register',
        component: Register
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior() {
        return {top: 0}
    }
})

export default router
