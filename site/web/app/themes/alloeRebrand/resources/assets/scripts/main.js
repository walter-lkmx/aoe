/** import external dependencies */
import 'jquery';
import 'stickybits';
import 'unslider';
import 'jquery.animate-number'; 
import 'typed.js'; 


/** import local dependencies */
// util
import Router from './util/Router';
import stickyBits from './util/stickyBits';
// routes
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';
import employerSolutions from './routes/employer-solutions';
import blog from './routes/blog';
import subscribe from './routes/subscribe';
import checkout from './routes/checkout';

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
  /** All pages */
  common,
  /** Home page */
  home,
  /** blog */
  blog,
  /** subscribe */
  subscribe,
  /** checkout */
  checkout,
  /** Employer solutions */
  employerSolutions,
  /** About Us page, note the change from about-us to aboutUs. */
  aboutUs, 
  /** util */
  stickyBits,
});

/** Load Events */
jQuery(document).ready(() => routes.loadEvents());
