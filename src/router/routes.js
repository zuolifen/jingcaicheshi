import GoCat from '@/pages/GoCatPreferential/GoCatPreferential';
import Home from '@/pages/Home/Home.vue'
import Honest from '@/pages/HonestBusinessman/HonestBusinessman';
import TestDrive from '@/pages/MeasurementTestDrive/MeasurementTestDrive';
import News from '@/pages/NewsAndInformation/NewsAndInformation';
import Personal from '@/pages/Personal/Personal';
import NewsDetails from '@/pages/NewsDetails/NewsDetails';
import GoCatDetails from '@/pages/GoCatPreferential/GoCatDetails/GoCatDetails'

export default [
    { path: '',redirect: '/home'},
    { path:'/home', component:Home,meta:{showHeader:true}},
    { path: '/gocat', component: GoCat ,meta:{showHeader:true}},
    { path:'/details/:id',component:GoCatDetails, meta:{showHeader:true}},
    { path:'/newsDetails/:id',component:NewsDetails, meta:{showHeader:true}},
    { path: '/honest', component: Honest ,meta:{showHeader:true}},
    { path: '/testdrive', component: TestDrive ,meta:{showHeader:true}},
    { path: '/news', component: News ,meta:{showHeader:true}},
    { path: '/personal', component: Personal ,meta:{showHeader:false}},
]