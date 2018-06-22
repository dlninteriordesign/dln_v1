(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['motion-ui'],
      __esModule: true,
    };
  }

  define('motion-ui', [], vendorModule);
})();
