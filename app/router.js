import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('contact', {path: '/contact'});
  this.route('gallery', {path: '/gallery'});
});

export default Router;
