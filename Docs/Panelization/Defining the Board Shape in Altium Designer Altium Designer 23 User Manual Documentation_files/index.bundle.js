/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar App = function () {\n  function App(props) {\n    var _this = this;\n\n    _classCallCheck(this, App);\n\n    this.config = {\n      resourcesUrl: 'https://www.altium.com/altium-privacy-bar/public/'\n    };\n\n    if (jQuery) {\n      this.init();\n    } else {\n      this.createJS('jquery.min', function () {\n        _this.init();\n      });\n    }\n  }\n\n  _createClass(App, [{\n    key: 'init',\n    value: function init() {\n      this.createJS('jquery.cookie', function () {\n\n        if (jQuery.cookie('altium-privacy-bar')) return;\n\n        var text = \"This site uses cookies to improve your user experience and to provide you with content we believe will be of interest to you.  Detailed information on the use of cookies on this website is provided in our <a target='_blank' href='//altium.com/privacy-policy'>Privacy Policy</a>.  By using this website, you consent to the use of our cookies.\";\n        var textRu = \"Данный сайт использует файлы Cookie для обеспечения наилучшего удобства и предоставления персонализированной информации. Подробная информация об использовании файлов Cookie данным сайтом содержится в <a target='_blank' href='//altium.com/privacy-policy'>Политике конфиденциальности</a>. Продолжая использовать данный сайт, вы подтверждаете свое согласие на использование файлов Cookie.\";\n        var textDe = \"Diese Website verwendet Cookies, um Ihre Benutzererfahrung zu verbessern und Ihnen Inhalte zu bieten, von denen wir glauben, dass sie für Sie von Interesse sind. Ausführliche Informationen über die Verwendung von Cookies auf dieser Website finden Sie in unserer <a href=\\\"https://www.altium.com/privacy-policy\\\">Datenschutzrichtlinie</a>. Durch die Nutzung dieser Website erklären Sie sich mit der Verwendung unserer Cookies einverstanden.\";\n        var textFr = \"Ce site utilise des cookies pour améliorer votre expérience utilisateur et vous proposer du contenu susceptible de vous intéresser. Pour de plus amples informations sur l'utilisation des cookies sur ce site Web, consultez notre <a href=\\\"https://www.altium.com/privacy-policy\\\">Politique de confidentialité</a>. En utilisant ce site Web, vous consentez à l'utilisation de nos cookies.\";\n        var textEs = \"Este sitio utiliza cookies para mejorar tu experiencia de usuario y para ofrecerte contenidos que creemos serán de tu interés. Puedes encontrar información detallada sobre el uso de cookies que se hace en este sitio web en nuestra <a href=\\\"https://www.altium.com/privacy-policy\\\">Política de Privacidad</a>. Al utilizar este sitio web, aceptas el uso de cookies.\";\n        var textIt = \"Questo sito utilizza i cookie per migliorare la tua esperienza come utente e per fornirti contenuti che riteniamo possano interessarti. Informazioni dettagliate sull'utilizzo dei cookie in questo sito web sono fornite nella nostra <a href=\\\"https://www.altium.com/privacy-policy\\\">nformativa sulla Privacy</a>. Proseguendo nella navigazione di questo sito web acconsenti all'utilizzo dei nostri cookie.\";\n        var textJp = \"ユーザー エクスペリエンスの向上と、各ユーザーの皆さまが関心をお持ちになると考えられるコンテンツの提供を目的として、このwebサイトではクッキーを使用しています。クッキーの使用に関する詳細については、Altiumの<a href=\\\"https://www.altium.com/privacy-policy\\\">プライバシーポリシー</a>でご確認いただけます。このwebサイトをご利用になることで、クッキーの使用に同意されたことになります。\";\n        var textCn = \"我们网站使用了cookies技术，以便能够为您提供优质的用户体验以及个性化的内容。关于网站cookies的使用，请参阅我们的隐私政策。继续浏览本网站，即代表您同意我们使用cookies。\";\n        var btn = \"Ok, don't show me this again\";\n        var btnRu = \"Хорошо, не показывать больше\";\n        var btnDe = \"OK, diese Meldung nicht mehr anzeigen\";\n        var btnFr = \"OK, ne plus afficher ce message\";\n        var btnEs = \"Ok, no volver a mostrar este mensaje\";\n        var btnIt = \"Ok, non mostrare più questo messaggio\";\n        var btnJp = \"今後はこのメッセージを表示しません。\";\n        var btnCn = \"好的，不再显示此信息。\";\n\n        var html = jQuery('html');\n        var body = jQuery('body');\n        var isRu = body.hasClass('i18n-ru') || html.attr('lang') === 'ru';\n        var isDe = body.hasClass('i18n-de') || html.attr('lang') === 'de';\n        var isFr = body.hasClass('i18n-fr') || html.attr('lang') === 'fr';\n        var isEs = body.hasClass('i18n-es') || html.attr('lang') === 'es';\n        var isIt = body.hasClass('i18n-it') || html.attr('lang') === 'it';\n        var isJp = body.hasClass('i18n-jp') || html.attr('lang') === 'ja';\n        var isCn = body.hasClass('i18n-cn') || html.attr('lang') === 'cn';\n\n        if (typeof Drupal !== 'undefined') {\n          text = Drupal.t(text);\n          btn = Drupal.t(btn);\n        }\n        if (isRu) {\n          text = textRu;\n          btn = btnRu;\n        }\n        if (isDe) {\n          text = textDe;\n          btn = btnDe;\n        }\n        if (isFr) {\n          text = textFr;\n          btn = btnFr;\n        }\n        if (isEs) {\n          text = textEs;\n          btn = btnEs;\n        }\n        if (isIt) {\n          text = textIt;\n          btn = btnIt;\n        }\n        if (isJp) {\n          text = textJp;\n          btn = btnJp;\n        }\n        if (isCn) {\n          text = textCn;\n          btn = btnCn;\n        }\n\n        body.append('<div class=\"altium-privacy-bar\">\\n        <div class=\"altium-privacy-bar__text\">' + text + '</div>\\n        <a class=\"altium-privacy-bar__btn\" href=\"#\">' + btn + '</a>\\n        <a class=\"altium-privacy-bar__btn-close\" href=\"#\"></a>\\n      </div>');\n\n        var $wrap = jQuery('.altium-privacy-bar');\n        setIndent();\n        jQuery(window).resize(function () {\n          setIndent();\n        });\n\n        jQuery('.altium-privacy-bar__btn, .altium-privacy-bar__btn-close').click(function (e) {\n          e.preventDefault();\n\n          setPrivacy();\n        });\n\n        jQuery('.altium-privacy-bar__text a').click(function () {\n          setPrivacy();\n        });\n\n        function setPrivacy() {\n          var domain = location.host.split('.');\n          var domainLength = domain.length;\n\n          if (domainLength > 2) {\n            domain = domain[domainLength - 2] + '.' + domain[domainLength - 1];\n          } else {\n            domain = location.host;\n          }\n\n          jQuery('.altium-privacy-bar').remove();\n          jQuery.cookie('altium-privacy-bar', true, { expires: 365, path: '/', domain: domain });\n          setIndent(0);\n        }\n\n        function setIndent(height) {\n          body.css('padding-bottom', height || $wrap.outerHeight());\n        }\n      });\n    }\n  }, {\n    key: 'createCss',\n    value: function createCss(name) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n\n      var link = document.createElement('link');\n      link.href = this.config.resourcesUrl + 'css/' + name + '.css';\n      link.rel = 'stylesheet';\n      link.type = 'text/css';\n\n      document.head.appendChild(link);\n\n      link.onload = function () {\n        callback();\n      };\n    }\n  }, {\n    key: 'createJS',\n    value: function createJS(name) {\n      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};\n\n      var script = document.createElement('script');\n      script.src = this.config.resourcesUrl + 'js/' + name + '.js';\n\n      document.head.appendChild(script);\n\n      script.onload = function () {\n        callback();\n      };\n    }\n  }]);\n\n  return App;\n}();\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/components/App/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _App = __webpack_require__(/*! ./components/App/App */ \"./src/components/App/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.AppPrivacyBar = _App2.default;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });