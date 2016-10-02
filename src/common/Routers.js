import App from './App';
import PageNotFound from '../components/PageNotFound';
import Login from '../features/auth/containers/Login';
import homeRoute from '../features/home/router';
import { requireAuthentication } from '../utils/auth';

export default [{
  path: '/',
  component: App,
  childRoutes: [
    homeRoute,
    { path: 'login', name: 'Login', component: Login },
    { path: '404', name: 'Page not found', component: requireAuthentication(PageNotFound) },
  ],
}];