define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/image-section/image-section',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var ImageSection = (function () {
        function ImageSection(src, title) {
            this.src = src;
            this.title = title;
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], ImageSection.prototype, "src", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], ImageSection.prototype, "title", void 0);
        return ImageSection;
    }());
    exports.ImageSection = ImageSection;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/text-section/text-section',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var TextSection = (function () {
        function TextSection(main, subhead) {
            this.main = main;
            this.subhead = subhead;
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], TextSection.prototype, "main", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], TextSection.prototype, "subhead", void 0);
        return TextSection;
    }());
    exports.TextSection = TextSection;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n  <require from=\"./resources/elements/text-section/text-section\"></require>\n  <require from=\"./resources/elements/image-section/image-section\"></require>\n\n  <text-section main=\"LE COLÉ\" subhead=\"Arte.\"></text-section>\n  <image-section src=\"/src/photos/mini-seashell-1.JPG\" ></image-section>\n</template>\n"; });
define('text!resources/elements/image-section/image-section.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./image-section.css\"></require>\n  <section class=\"image-section\">\n    <div class=\"image-container\">\n      <img src=\"${src}\" alt=\"${title}\" />\n    </div>\n  </section>\n</template>\n"; });
define('text!resources/elements/text-section/text-section.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./text-section.css\"></require>\n  <section class=\"text-section\">\n    <h1>${main}</h1>\n    <h4>${subhead}</h4>\n  </section>\n</template>\n"; });
define('text!resources/elements/text-section/text-section.css', ['module'], function(module) { module.exports = ".text-section {\n  text-align: center; }\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "body {\n  font-family: 'Quicksand', sans-serif;\n  background: black;\n  color: white;\n  font-size: 120px; }\n\nh1 {\n  font-weight: 400; }\n"; });
define('text!resources/elements/image-section/image-section.css', ['module'], function(module) { module.exports = ".image-section .image-container img {\n  width: 100%; }\n"; });
//# sourceMappingURL=app-bundle.js.map