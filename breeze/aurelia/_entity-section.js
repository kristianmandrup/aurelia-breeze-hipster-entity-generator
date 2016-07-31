/**
* The shell for the orders section of the application.  Will contain either
* the order-list or order page.
*/
export default class <%= entityClass %>Section {
  configureRouter(config, router) {
    config.map([
      { route: '',    moduleId: './<%= entityClientSuffix %>-list', nav: false, title: '' },
      { route: ':id', moduleId: './<%= entityClientSuffix %>',      nav: false, title: '' },
    ]);
  }
}
