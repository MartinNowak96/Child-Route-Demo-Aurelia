define('sideBySide',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sideBySide = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var sideBySide = exports.sideBySide = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
    sideBySide.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map([{ route: '', name: 'blank', viewPorts: { left: { route: '', moduleId: 'leftChild', viewPorts: { moduleId: 'leftChild' } },

          right: { route: '', moduleId: 'rightChild', name: 'rightChild' } } }]);
    };

    function sideBySide(router) {
      _classCallCheck(this, sideBySide);

      this.router = router;
    }

    sideBySide.prototype.goToChild = function goToChild() {
      this.router.navigateToRoute('childOne');
    };

    return sideBySide;
  }()) || _class);
});
define('text!sideBySide.html', ['module'], function(module) { module.exports = "<template>\r\n    <div style=\"width:100%; height:1000px; background: rgb(220, 110, 216)\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-md-6\">\r\n                <router-view name=\"left\"></router-view>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-6\">\r\n                    <router-view name=\"right\"></router-view>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('rightChild',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var rightChild = exports.rightChild = function rightChild() {
        _classCallCheck(this, rightChild);
    };
});
define('text!rightChild.html', ['module'], function(module) { module.exports = "<template>\r\n    <div style=\"width:100%; height:1000px; background: rgb(0, 114, 155)\">\r\n    <h2>Right Child</h2>\r\n</div>\r\n</template>"; });
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('leftChild',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var leftChild = exports.leftChild = function leftChild() {
        _classCallCheck(this, leftChild);
    };
});
define('text!leftChild.html', ['module'], function(module) { module.exports = "<template>\r\n        <div style=\"width:100%; height:1000px; background: rgb(13, 199, 3)\">\r\n        <h2>Left Child</h2>\r\n        </div>\r\n    </template>"; });
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('childTwo',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.childTwo = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var childTwo = exports.childTwo = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function childTwo() {
            _classCallCheck(this, childTwo);
        }

        childTwo.prototype.configureRouter = function configureRouter(config, router) {
            this.router = router;
            config.map([{ route: ['', 'blank'], name: 'blank', nav: true, moduleId: 'blank', title: 'blank' }, { route: 'childThree', name: 'childThree', nav: true, moduleId: 'childThree', title: 'childThree' }]);
        };

        childTwo.prototype.goToChild = function goToChild() {
            this.router.navigateToRoute('childThree');
        };

        return childTwo;
    }()) || _class);
});
define('text!childTwo.html', ['module'], function(module) { module.exports = "<template>\r\n        <div style=\"width:100%; height:1000px; background: rgb(221, 248, 45)\">\r\n    <h3>Child Two</h3>\r\n    <button click.delegate=\"goToChild()\">Go to Child Page</button>\r\n    <router-view></router-view>\r\n    </div>\r\n</template>"; });
define('childThree',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.childThree = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var childThree = exports.childThree = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function childThree() {
            _classCallCheck(this, childThree);
        }

        childThree.prototype.configureRouter = function configureRouter(config, router) {
            this.router = router;
            config.map([{ route: ['', 'blank'], name: 'blank', nav: true, moduleId: 'blank', title: 'blank' }, { route: 'childOne', name: 'childOne', nav: true, moduleId: 'childOne', title: 'childOne' }]);
        };

        childThree.prototype.goToChild = function goToChild() {
            this.router.navigateToRoute('childOne');
        };

        return childThree;
    }()) || _class);
});
define('text!childThree.html', ['module'], function(module) { module.exports = "<template>\r\n        <div style=\"width:100%; height:1000px; background: rgb(45, 133, 248)\">\r\n    <h3>Child Three</h4>\r\n    <button click.delegate=\"goToChild()\">Go to Child Page</button>\r\n    <router-view></router-view>\r\n    </div>\r\n</template>"; });
define('childOne',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.childOne = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var childOne = exports.childOne = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function childOne() {
            _classCallCheck(this, childOne);
        }

        childOne.prototype.configureRouter = function configureRouter(config, router) {
            this.router = router;
            config.map([{ route: ['', 'blank'], name: 'blank', nav: true, moduleId: 'blank', title: 'blank' }, { route: 'childTwo', name: 'childTwo', nav: true, moduleId: 'childTwo', title: 'childTwo' }]);
        };

        childOne.prototype.goToChild = function goToChild() {
            this.router.navigateToRoute('childTwo');
        };

        return childOne;
    }()) || _class);
});
define('text!childOne.html', ['module'], function(module) { module.exports = "<template>\r\n        <div style=\"width:100%; height:1000px; background: rgb(110, 220, 114)\">\r\n    <h2>Child One</h2>\r\n    <button click.delegate=\"goToChild()\">Go to Child Page</button>\r\n    <router-view></router-view>\r\n    </div>\r\n</template>"; });
define('blank',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var blank = exports.blank = function blank() {
        _classCallCheck(this, blank);
    };
});
define('text!blank.html', ['module'], function(module) { module.exports = "<template>\r\n    \r\n</template>"; });
define('app',['exports', 'aurelia-framework', 'aurelia-router', 'bootstrap'], function (exports, _aureliaFramework, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map([{ route: ['', 'blank'], name: 'blank', nav: true, moduleId: 'blank', title: 'blank' }, { route: 'sideBySide', name: 'sideBySide', nav: true, moduleId: 'sideBySide', title: 'sideBySide' }, { route: 'childOne', name: 'childOne', nav: true, moduleId: 'childOne', title: 'childOne' }]);
    };

    function App(router) {
      _classCallCheck(this, App);

      this.router = router;
    }

    App.prototype.goToChild = function goToChild() {
      this.router.navigateToRoute('childOne');
    };

    App.prototype.goToSideBySide = function goToSideBySide() {
      this.router.navigateToRoute('sideBySide');
    };

    return App;
  }()) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <div style=\"width:100%; height:1000px; background: rgb(220, 110, 110)\">\n  <h1> Welcome to Child Route Demo - Parent Page</h1>\n  <button click.delegate=\"goToChild()\">Go to Child Page</button>\n  <button click.delegate=\"goToSideBySide()\">Multiple Routes Per Page</button>\n  \n    <router-view> </router-view>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map