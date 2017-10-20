/* eslint-disable global-require, import/no-mutable-exports */
let routes;
if (true || process.env.NODE_ENV === 'production') {
  routes = {
    HomePage: require('containers/HomePage/Loadable').default,
    FeaturePage: require('containers/FeaturePage/Loadable').default,
    NotFoundPage: require('containers/NotFoundPage/Loadable').default,
  };
} else {
  routes = {
    HomePage: require('containers/HomePage').default,
    FeaturePage: require('containers/FeaturePage').default,
    NotFoundPage: require('containers/NotFoundPage').default,
  };
}

export default routes;
/* eslint-enable global-require, import/no-mutable-exports */
