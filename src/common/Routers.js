import App from './App';
import PageNotFound from '../components/PageNotFound';
import Login from '../components/Login';
import homeRoute from '../features/home/router';


export default [{
  path: '/',
  component: App,
  childRoutes: [
    homeRoute,
    { path: '/login', name: 'Login', component: Login },
    { path: '/404', name: 'Page not found', component: PageNotFound },
  ],
}];