import Home from 'components/Home/home';
import Invoice from 'components/Invoice/invoice';
import AdCheck from 'components/AdCheck/adcheck';
import Impressum from 'components/Impressum/impressum';
import EditPost from 'components/Posts/editPost';
import NotFound from 'components/NotFound/notFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: Invoice
  },
  {
    path: '/adcheck',
    name: 'adcheck',
    component: AdCheck
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: Impressum
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
