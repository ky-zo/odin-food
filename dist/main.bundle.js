(self["webpackChunkodin_food"] = self["webpackChunkodin_food"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    /* border: 0.5px solid darkslategrey; */\n    padding: 0;\n    margin: 0;\n    font-family: 'Inter', sans-serif;\n}\n\n#header {\n    display: grid;\n    grid-template-columns: 20% 1fr 20%;\n    grid-auto-rows: 60px;\n    justify-content: space-between;\n    box-shadow: 0px 0px 44px -22px rgba(66, 68, 90, 1);\n    position: sticky;\n    top: 0;\n    z-index: 1000;\n    background-color: rgba(255, 255, 255, 0.3); /* Adjust the opacity to your preference */\n    backdrop-filter: blur(10px); /* Add the blur effect */\n    -webkit-backdrop-filter: blur(10px);\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding: 10px;\n}\n\n.menu-button {\n    cursor: pointer;\n    padding: 5px 10px;\n    font-weight: 700;\n    font-size: 1.1rem;\n    transition: 300ms;\n    background-color: transparent;\n    border: none;\n}\n\n.menu-button:hover {\n    font-size: 1.4rem;\n    transition: 300ms;\n    color: blueviolet;\n}\n\n.homepage {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 100px;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\n.hero {\n    padding-top: 100px;\n    text-shadow: 0px 0px 12px rgba(255, 255, 255, 1);\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding-left: 20px;\n}\n\n.logo-img {\n    width: 15%;\n}\n\n.logo-name {\n    font-size: 1.2rem;\n    font-weight: 900;\n}\n\n.food-image {\n    position: fixed;\n    max-width: 100px;\n    pointer-events: none;\n    z-index: -1; /* Add this line to move images to the back */\n}\n\n.cta-primary {\n    padding: 15px 20px;\n    border-radius: 50px;\n    border: 2px solid transparent;\n    background-color: blueviolet;\n    color: white;\n    font-weight: 500;\n    font-size: 1.1rem;\n    box-shadow: 0px 0px 37px -24px rgba(66, 68, 90, 1);\n    transition: 300ms;\n}\n\n.cta-primary:hover {\n    cursor: pointer;\n    border: 2px solid blueviolet;\n    color: blueviolet;\n    background-color: white;\n    transition: 300ms;\n    box-shadow: 0px 0px 37px -10px rgba(66, 68, 90, 1);\n}\n\n.chef-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.chef-image {\n    min-width: 100px;\n    max-width: 200px;\n}\n\n.chef-desc {\n    max-width: 40vw;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: space-around;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    min-width: 100dvw;\n    min-height: 100dvh;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding: 50px 0px;\n}\n\n.menuItem {\n    display: grid;\n    width: 60vw;\n    height: 150px;\n    grid-template-columns: 30% 1fr 20%;\n    gap: 30px;\n}\n\n.food-img {\n    max-width: 60%;\n    align-self: center;\n}\n\n.menuItem-img,\n.menuItem-desc,\n.menuItem-price {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n}\n\n.animated {\n    opacity: 0;\n    transform: translateY(50px);\n    transition: opacity 200ms ease-in, transform 200ms ease-in;\n}\n\n.animated.visible {\n    opacity: 1;\n    transform: translateY(0);\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    gap: 0px;\n}\n\n.address {\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.contactH3 {\n    padding-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,uCAAuC;IACvC,UAAU;IACV,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,oBAAoB;IACpB,8BAA8B;IAC9B,kDAAkD;IAClD,gBAAgB;IAChB,MAAM;IACN,aAAa;IACb,0CAA0C,EAAE,0CAA0C;IACtF,2BAA2B,EAAE,wBAAwB;IACrD,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,gDAAgD;AACpD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,WAAW,EAAE,6CAA6C;AAC9D;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;IAC5B,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,kDAAkD;IAClD,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,4BAA4B;IAC5B,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;IACjB,kDAAkD;AACtD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,SAAS;AACb;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;;;IAGI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,2BAA2B;IAC3B,0DAA0D;AAC9D;;AAEA;IACI,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n* {\n    /* border: 0.5px solid darkslategrey; */\n    padding: 0;\n    margin: 0;\n    font-family: 'Inter', sans-serif;\n}\n\n#header {\n    display: grid;\n    grid-template-columns: 20% 1fr 20%;\n    grid-auto-rows: 60px;\n    justify-content: space-between;\n    box-shadow: 0px 0px 44px -22px rgba(66, 68, 90, 1);\n    position: sticky;\n    top: 0;\n    z-index: 1000;\n    background-color: rgba(255, 255, 255, 0.3); /* Adjust the opacity to your preference */\n    backdrop-filter: blur(10px); /* Add the blur effect */\n    -webkit-backdrop-filter: blur(10px);\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding: 10px;\n}\n\n.menu-button {\n    cursor: pointer;\n    padding: 5px 10px;\n    font-weight: 700;\n    font-size: 1.1rem;\n    transition: 300ms;\n    background-color: transparent;\n    border: none;\n}\n\n.menu-button:hover {\n    font-size: 1.4rem;\n    transition: 300ms;\n    color: blueviolet;\n}\n\n.homepage {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 100px;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\n.hero {\n    padding-top: 100px;\n    text-shadow: 0px 0px 12px rgba(255, 255, 255, 1);\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding-left: 20px;\n}\n\n.logo-img {\n    width: 15%;\n}\n\n.logo-name {\n    font-size: 1.2rem;\n    font-weight: 900;\n}\n\n.food-image {\n    position: fixed;\n    max-width: 100px;\n    pointer-events: none;\n    z-index: -1; /* Add this line to move images to the back */\n}\n\n.cta-primary {\n    padding: 15px 20px;\n    border-radius: 50px;\n    border: 2px solid transparent;\n    background-color: blueviolet;\n    color: white;\n    font-weight: 500;\n    font-size: 1.1rem;\n    box-shadow: 0px 0px 37px -24px rgba(66, 68, 90, 1);\n    transition: 300ms;\n}\n\n.cta-primary:hover {\n    cursor: pointer;\n    border: 2px solid blueviolet;\n    color: blueviolet;\n    background-color: white;\n    transition: 300ms;\n    box-shadow: 0px 0px 37px -10px rgba(66, 68, 90, 1);\n}\n\n.chef-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.chef-image {\n    min-width: 100px;\n    max-width: 200px;\n}\n\n.chef-desc {\n    max-width: 40vw;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: space-around;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    min-width: 100dvw;\n    min-height: 100dvh;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding: 50px 0px;\n}\n\n.menuItem {\n    display: grid;\n    width: 60vw;\n    height: 150px;\n    grid-template-columns: 30% 1fr 20%;\n    gap: 30px;\n}\n\n.food-img {\n    max-width: 60%;\n    align-self: center;\n}\n\n.menuItem-img,\n.menuItem-desc,\n.menuItem-price {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n}\n\n.animated {\n    opacity: 0;\n    transform: translateY(50px);\n    transition: opacity 200ms ease-in, transform 200ms ease-in;\n}\n\n.animated.visible {\n    opacity: 1;\n    transform: translateY(0);\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    gap: 0px;\n}\n\n.address {\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.contactH3 {\n    padding-top: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/foodList.csv":
/*!**************************!*\
  !*** ./src/foodList.csv ***!
  \**************************/
/***/ ((module) => {

module.exports = [["Burger.png","The Sassburger","Get ready to bite into the sassiest, juiciest burger in town, topped with attitude and extra cheese.","$7.99"],["Buritto.png","Rollin' Rascal","Spice up your life with this feisty burrito, packed with flavor and a little bit of mischief.","$6.50"],["Cake.png","Sweet Diva","Indulge in a sinfully delicious cake that knows it's the queen of the dessert world.","$12.95"],["Carrot.png","Crunchy Wisecrackers","Fresh, zesty carrots with a side of sass, perfect for a guilt-free snacking experience.","$2.50"],["Chef.png","Chef Cheekster","Our talented chef serves up dishes with a twist of humor and a heaping spoonful of personality.","Priceless"],["Cofee.png","Snarky Sipper","Wake up to a bold, invigorating coffee that's not afraid to tell it like it is.","$4.25"],["Cookies.png","Smarty Pants Bites","Get a taste of brilliance with these delightful, know-it-all cookies that always have the last word.","$3.75"],["Croisant.png","Crispy Quipster","A flaky, buttery croissant that'll make you grin with every bite, perfect for a cheeky breakfast.","$3.50"],["Cup Cake.png","Frosted Funnies","Enjoy these sassy cupcakes that'll make your taste buds giggle and your belly happy.","$4.99"],["Donut.png","Daring Doughnut","This doughnut isn't afraid to be bold, bringing you a daring, irresistible flavor you can't resist.","$2.95"],["Egg & Bacon.png","Witty Wakey-Wakey","Start your morning with a smile with our delectable eggs and bacon, cooked with a side of wit.","$8.25"],["Eggplant.png","Dicklosaur","Get a kick out of this mischievous dickfruit dish that'll leave you craving more.","$5.99"],["Float.png","Floating Giggles","Sip on the bubbliest and funniest float around, guaranteed to make you giggle with every gulp.","$5.50"],["Fries.png","Fabulous Friestas","Golden, crispy, and fabulous - these fries know they're the life of the party.","$3.25"],["Hot Dog.png","Saucy Frankfurter","Nothing can keep up with this zesty hot dog that's bursting with flavor and a bit of sass.","$5.50"],["Ice Cream.png","Scoops of Smirks","Satisfy your sweet tooth with a cone of smirky ice cream, so good it'll have you smirking too.","$4.75"],["Lolipop Swirl.png","Spiral Snickers","Get ready to swirl and laugh with this colorful, hilarious lollipop that'll leave you in stitches.","$2.25"],["Lolipop.png","Sassy Suckers","These bold, outspoken lollipops will leave your taste buds entertained and craving more.","$1.50"],["Macaroon.png","Macaroon Mischief","Delight in these mischievous, delectable macaroons that know how to make a lasting impression.","$6.99"],["Meat.png","Chuckle Chops","Enjoy these tender, juicy chops that'll have you laughing all the way through dinner.","$17.99"],["Pancake.png","Flippin' Funnycakes","Start your day with a stack of fluffy pancakes that'll flip your mood and make you chuckle.","$7.50"],["Pizza.png","Pizzazza","This pizza has a personality as big as its flavor - enjoy a slice that'll make your taste buds dance with excitement.","$12.50"],["Popsicle.png","Icy Wisecracks","Cool down with a popsicle that's as refreshing as it is clever, perfect for a hot summer day.","$3.00"],["Pretzel.png","Twisted Chuckler","Bite into a twisted, salty, and hilarious pretzel that'll leave you craving for more laughs and flavor.","$2.75"],["Steak.png","Sir Loin-a-Lot","Indulge in a juicy, mouthwatering steak that's so good, it'll have you cracking jokes at the dinner table.","$24.99"],["Sushi Caviar.png","Rolling Guffaws","Dive into a plate of sushi with a side of caviar that'll have you rolling in laughter with every bite.","$18.50"],["Taco.png","Witty Crunchwrap","Get ready to crunch into this tasty taco that's loaded with flavor and a touch of humor.","$5.75"]]

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turnContact)
/* harmony export */ });
const content = document.querySelector('#content')

function turnContact() {
    const content = document.querySelector('#content')
    content.textContent = ''
    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    const address = document.createElement('div')
    address.classList.add('address')
    const h2 = document.createElement('h2')
    h2.textContent = 'Restaurant Name: Foodey Gate'
    const div = document.createElement('div')
    div.innerHTML =
        '<h3 class="contactH3">Address: 1234 Fictitious Lane, Imaginary City, Wonderland, 56789</h3><p>Phone: (555) 123-4567</p><p>Email: info@foodey.com</p><h3 class="contactH3">Opening Hours:</h3><p>Monday - Friday: 11:00 AM - 11:00 PM</p><p>Saturday: 9:00 AM - 11:00 PM</p> <h3 class="contactH3">Social Media:</h3><p>Facebook: www.facebook.com/foodey</p><p>Instagram: @foodey</p><p>Twitter: @foodey</p>'
    address.appendChild(h2)
    address.appendChild(div)
    contactInfo.appendChild(address)

    const iFrame = document.createElement('iframe')
    iFrame.setAttribute(
        'src',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.3988087931543!2d-16.91475164875452!3d32.648829897723374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605f019404b28b%3A0x9b239f1a9d06b308!2sIndia%20Gate!5e0!3m2!1sen!2spl!4v1679087440542!5m2!1sen!2spl'
    )
    iFrame.setAttribute('width', 600)
    iFrame.setAttribute('height', 450)
    iFrame.setAttribute('style', 'border: 0')
    iFrame.setAttribute('allowfullscreen', '')
    // iFrame.setAttribute('loading', 'lazy')
    iFrame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')

    contactInfo.appendChild(iFrame)
    content.appendChild(contactInfo)
}


/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chef)
/* harmony export */ });
/* harmony import */ var _images_Chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Chef.png */ "./src/images/Chef.png");


class Chef {
    constructor(name, bio, image) {
        this.name = name
        this.bio = bio
        this.image = image
    }

    createChefElementOnWebsite() {
        const chef = document.createElement('div')
        chef.classList.add('chef-section')

        const chefImage = document.createElement('img')
        const chefDesc = document.createElement('div')
        const chefName = document.createElement('h2')
        const chefBio = document.createElement('div')

        chefImage.setAttribute('src', this.image)
        chefImage.classList.add('chef-image')
        chefDesc.classList.add('chef-desc')

        chefName.textContent = this.name
        chefBio.textContent = this.bio

        chefDesc.appendChild(chefName)
        chefDesc.appendChild(chefBio)
        chef.appendChild(chefImage)
        chef.appendChild(chefDesc)

        return chef
    }
}


/***/ }),

/***/ "./src/floats.js":
/*!***********************!*\
  !*** ./src/floats.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "turnOnFlyingFoods": () => (/* binding */ turnOnFlyingFoods)
/* harmony export */ });
const imageContext = __webpack_require__("./src/images sync \\.(png%7Cjpe?g%7Csvg)$")

function turnOnFlyingFoods(foods) {
    foods = imageContext.keys().map(imageContext)

    function getRandomFood() {
        const randomIndex = Math.floor(Math.random() * foods.length)
        return foods[randomIndex]
    }

    function createFoodImage(x, y) {
        const content = document.querySelector('#content')

        const img = document.createElement('img')
        img.src = getRandomFood()
        img.classList.add('food-image')
        img.style.left = `${x}px`
        img.style.top = `${y}px`
        content.appendChild(img)
        return img
    }

    function getRandomPosition() {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        const x = Math.floor(windowWidth * 0.01 + Math.random() * windowWidth * 0.99)
        const y = Math.floor(windowHeight * 0.01 + Math.random() * windowHeight * 0.5)

        return { x, y }
    }

    function moveImagesOnMouseMove(event) {
        const x = event.clientX
        const y = event.clientY

        image1.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`
        image2.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`
        image3.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`
        image4.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`
        image5.style.transform = `translate(${x * 0.05}px, ${y * 0.06}px)`
    }

    const pos1 = getRandomPosition()
    const pos2 = getRandomPosition()
    const pos3 = getRandomPosition()
    const pos4 = getRandomPosition()
    const pos5 = getRandomPosition()

    const image1 = createFoodImage(pos1.x, pos1.y)
    const image2 = createFoodImage(pos2.x, pos2.y)
    const image3 = createFoodImage(pos3.x, pos3.y)
    const image4 = createFoodImage(pos4.x, pos4.y)
    const image5 = createFoodImage(pos5.x, pos5.y)

    document.addEventListener('mousemove', moveImagesOnMouseMove)
}




/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_Eggplant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Eggplant.png */ "./src/images/Eggplant.png");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





const headerLogo = document.querySelector('.logo')

const logo = document.createElement('img')
logo.setAttribute('src', _images_Eggplant_png__WEBPACK_IMPORTED_MODULE_0__)
logo.classList.add('logo-img')
headerLogo.appendChild(logo)

const name = document.createElement('div')
name.textContent = 'Foodey'
name.classList.add('logo-name')
headerLogo.appendChild(name)

const buttons = document.querySelector('.buttons')

const menuElements = [`Home`, `Menu`, `Contact`]

menuElements.forEach((element) => {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-button')
    menuItem.textContent = element
    menuItem.addEventListener('click', (e) => {
        if (element === 'Home') {
            (0,_hero__WEBPACK_IMPORTED_MODULE_2__.turnHome)()
        } else if (element === 'Menu') {
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.turnMenu)()
        } else {
            (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
        }
    })
    buttons.appendChild(menuItem)
})


/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero),
/* harmony export */   "turnHome": () => (/* binding */ turnHome)
/* harmony export */ });
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ "./src/content.js");
/* harmony import */ var _images_Chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Chef.png */ "./src/images/Chef.png");
/* harmony import */ var _floats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floats.js */ "./src/floats.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");





class Hero {
    constructor(text) {
        this.text = text
    }

    createHeroForWebsite() {
        const hero = document.createElement('h1')
        hero.classList.add('hero')
        hero.innerHTML = this.text
        return hero
    }

    createCtaForWebsite() {
        const cta = document.createElement('button')
        cta.classList.add('cta-primary')
        cta.addEventListener('click', () => {
            ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.turnMenu)()
        })
        cta.innerText = 'Order the goodies'
        return cta
    }
}

const myHero = new Hero('Best fucking food. <br /> Nothing else matters.')
const chefRodrygo = new _content_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    'Rodrygo Aborgeles',
    'Rodrygo Joaquin Aborgeles Jr. is a Polish television personality, celebrity chef, restaurateur and painter. Gessler is known for presenting TV programme Kuchenne rewolucje and judging in Polish version of MasterChef.',
    _images_Chef_png__WEBPACK_IMPORTED_MODULE_1__
)

const content = document.querySelector('#content')

function turnHome() {
    content.textContent = ''
    const homepage = document.createElement('div')
    homepage.classList.add('homepage')
    homepage.appendChild(myHero.createHeroForWebsite())
    homepage.appendChild(myHero.createCtaForWebsite())
    homepage.appendChild(chefRodrygo.createChefElementOnWebsite())
    content.appendChild(homepage)
    ;(0,_floats_js__WEBPACK_IMPORTED_MODULE_2__.turnOnFlyingFoods)()
}




/***/ }),

/***/ "./src/images sync recursive \\.(png%7Cjpe?g%7Cgif%7Csvg)$":
/*!*******************************************************!*\
  !*** ./src/images/ sync \.(png%7Cjpe?g%7Cgif%7Csvg)$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Burger.png": "./src/images/Burger.png",
	"./Buritto.png": "./src/images/Buritto.png",
	"./Cake.png": "./src/images/Cake.png",
	"./Carrot.png": "./src/images/Carrot.png",
	"./Chef.png": "./src/images/Chef.png",
	"./Cofee.png": "./src/images/Cofee.png",
	"./Cookies.png": "./src/images/Cookies.png",
	"./Croisant.png": "./src/images/Croisant.png",
	"./Cup Cake.png": "./src/images/Cup Cake.png",
	"./Donut.png": "./src/images/Donut.png",
	"./Egg & Bacon.png": "./src/images/Egg & Bacon.png",
	"./Eggplant.png": "./src/images/Eggplant.png",
	"./Float.png": "./src/images/Float.png",
	"./Fries.png": "./src/images/Fries.png",
	"./Hot Dog.png": "./src/images/Hot Dog.png",
	"./Ice Cream.png": "./src/images/Ice Cream.png",
	"./Lolipop Swirl.png": "./src/images/Lolipop Swirl.png",
	"./Lolipop.png": "./src/images/Lolipop.png",
	"./Macaroon.png": "./src/images/Macaroon.png",
	"./Meat.png": "./src/images/Meat.png",
	"./Pancake.png": "./src/images/Pancake.png",
	"./Pizza.png": "./src/images/Pizza.png",
	"./Popsicle.png": "./src/images/Popsicle.png",
	"./Pretzel.png": "./src/images/Pretzel.png",
	"./Steak.png": "./src/images/Steak.png",
	"./Sushi Caviar.png": "./src/images/Sushi Caviar.png",
	"./Taco.png": "./src/images/Taco.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive \\.(png%7Cjpe?g%7Cgif%7Csvg)$";

/***/ }),

/***/ "./src/images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Burger.png": "./src/images/Burger.png",
	"./Buritto.png": "./src/images/Buritto.png",
	"./Cake.png": "./src/images/Cake.png",
	"./Carrot.png": "./src/images/Carrot.png",
	"./Chef.png": "./src/images/Chef.png",
	"./Cofee.png": "./src/images/Cofee.png",
	"./Cookies.png": "./src/images/Cookies.png",
	"./Croisant.png": "./src/images/Croisant.png",
	"./Cup Cake.png": "./src/images/Cup Cake.png",
	"./Donut.png": "./src/images/Donut.png",
	"./Egg & Bacon.png": "./src/images/Egg & Bacon.png",
	"./Eggplant.png": "./src/images/Eggplant.png",
	"./Float.png": "./src/images/Float.png",
	"./Fries.png": "./src/images/Fries.png",
	"./Hot Dog.png": "./src/images/Hot Dog.png",
	"./Ice Cream.png": "./src/images/Ice Cream.png",
	"./Lolipop Swirl.png": "./src/images/Lolipop Swirl.png",
	"./Lolipop.png": "./src/images/Lolipop.png",
	"./Macaroon.png": "./src/images/Macaroon.png",
	"./Meat.png": "./src/images/Meat.png",
	"./Pancake.png": "./src/images/Pancake.png",
	"./Pizza.png": "./src/images/Pizza.png",
	"./Popsicle.png": "./src/images/Popsicle.png",
	"./Pretzel.png": "./src/images/Pretzel.png",
	"./Steak.png": "./src/images/Steak.png",
	"./Sushi Caviar.png": "./src/images/Sushi Caviar.png",
	"./Taco.png": "./src/images/Taco.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _menu_animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-animation.js */ "./src/menu-animation.js");
/* harmony import */ var _menu_animation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_animation_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");







if (false) {}

// turnHome()


/***/ }),

/***/ "./src/menu-animation.js":
/*!*******************************!*\
  !*** ./src/menu-animation.js ***!
  \*******************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animated')

    function onScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (elementTop <= windowHeight - 100) {
                element.classList.add('visible')
            } else {
                element.classList.remove('visible')
            }
        })
    }

    window.addEventListener('scroll', onScroll)
    onScroll() // Call once to initialize elements' visibility
})


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
/* harmony export */   "default": () => (/* binding */ Food),
/* harmony export */   "turnMenu": () => (/* binding */ turnMenu)
/* harmony export */ });
/* harmony import */ var _foodList_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodList.csv */ "./src/foodList.csv");
/* harmony import */ var _foodList_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foodList_csv__WEBPACK_IMPORTED_MODULE_0__);


class Food {
    constructor(image, name, desc, price) {
        this.image = image
        this.name = name
        this.desc = desc
        this.price = price
    }

    createMenuFoodItem() {
        const menuItem = document.createElement('div')
        menuItem.classList.add('menuItem', 'animated', 'visible')

        const menuItemImg = document.createElement('div')
        menuItemImg.classList.add('menuItem-img')

        const menuItemImgTag = document.createElement('img')
        menuItemImgTag.setAttribute('src', this.image)
        menuItemImgTag.classList.add('food-img')

        menuItemImg.appendChild(menuItemImgTag)

        const menuItemDesc = document.createElement('div')
        menuItemDesc.classList.add('menuItem-desc')

        const menuItemName = document.createElement('h3')
        menuItemName.classList.add('menuItem-name')
        menuItemName.textContent = this.name

        const menuItemDescP = document.createElement('p')
        menuItemDescP.classList.add('menuItem-descP')
        menuItemDescP.textContent = this.desc

        menuItemDesc.appendChild(menuItemName)
        menuItemDesc.appendChild(menuItemDescP)

        const menuItemPrice = document.createElement('div')
        menuItemPrice.classList.add('menuItem-price')
        menuItemPrice.textContent = this.price

        menuItem.appendChild(menuItemImg)
        menuItem.appendChild(menuItemDesc)
        menuItem.appendChild(menuItemPrice)

        return menuItem
    }
}

function createMenu() {
    const menu = document.createElement('div')
    menu.classList.add('menu')
    return menu
}

function turnMenu() {
    const content = document.querySelector('#content')
    content.textContent = ''
    content.appendChild(createMenu())

    const menu = document.querySelector('.menu')

    const imagesContext = __webpack_require__("./src/images sync recursive \\.(png%7Cjpe?g%7Cgif%7Csvg)$")
    const imagesMap = imagesContext.keys().reduce((acc, key) => {
        acc[key.replace('./', '')] = imagesContext(key)
        return acc
    }, {})

    _foodList_csv__WEBPACK_IMPORTED_MODULE_0___default().forEach((element) => {
        const food = new Food(imagesMap[element[0]], element[1], element[2], element[3])
        menu.appendChild(food.createMenuFoodItem())
    })
}




/***/ }),

/***/ "./src/images/Burger.png":
/*!*******************************!*\
  !*** ./src/images/Burger.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc283aa57217641990e3.png";

/***/ }),

/***/ "./src/images/Buritto.png":
/*!********************************!*\
  !*** ./src/images/Buritto.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a957dc08c696f8eba942.png";

/***/ }),

/***/ "./src/images/Cake.png":
/*!*****************************!*\
  !*** ./src/images/Cake.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7fd1c6b1958fc965d02e.png";

/***/ }),

/***/ "./src/images/Carrot.png":
/*!*******************************!*\
  !*** ./src/images/Carrot.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c630a72d5f056a829411.png";

/***/ }),

/***/ "./src/images/Chef.png":
/*!*****************************!*\
  !*** ./src/images/Chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "984a48ca8a9a133f68cc.png";

/***/ }),

/***/ "./src/images/Cofee.png":
/*!******************************!*\
  !*** ./src/images/Cofee.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "88e1c99342c531afb6d0.png";

/***/ }),

/***/ "./src/images/Cookies.png":
/*!********************************!*\
  !*** ./src/images/Cookies.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7d49bc4083f91489c162.png";

/***/ }),

/***/ "./src/images/Croisant.png":
/*!*********************************!*\
  !*** ./src/images/Croisant.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c3b8ad1b73d9c361c929.png";

/***/ }),

/***/ "./src/images/Cup Cake.png":
/*!*********************************!*\
  !*** ./src/images/Cup Cake.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7198765aa8d50bb28a5f.png";

/***/ }),

/***/ "./src/images/Donut.png":
/*!******************************!*\
  !*** ./src/images/Donut.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "116baa62e51126eb9646.png";

/***/ }),

/***/ "./src/images/Egg & Bacon.png":
/*!************************************!*\
  !*** ./src/images/Egg & Bacon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6feef18cd14718f9afe8.png";

/***/ }),

/***/ "./src/images/Eggplant.png":
/*!*********************************!*\
  !*** ./src/images/Eggplant.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae0f0e0257b0866dedb1.png";

/***/ }),

/***/ "./src/images/Float.png":
/*!******************************!*\
  !*** ./src/images/Float.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f16d5e1715c49f90ec10.png";

/***/ }),

/***/ "./src/images/Fries.png":
/*!******************************!*\
  !*** ./src/images/Fries.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f4754bd72adb7747b8d.png";

/***/ }),

/***/ "./src/images/Hot Dog.png":
/*!********************************!*\
  !*** ./src/images/Hot Dog.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "920e074d2df65e608923.png";

/***/ }),

/***/ "./src/images/Ice Cream.png":
/*!**********************************!*\
  !*** ./src/images/Ice Cream.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8e99d05115483baca2ba.png";

/***/ }),

/***/ "./src/images/Lolipop Swirl.png":
/*!**************************************!*\
  !*** ./src/images/Lolipop Swirl.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9ad9021fb106c52998fa.png";

/***/ }),

/***/ "./src/images/Lolipop.png":
/*!********************************!*\
  !*** ./src/images/Lolipop.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "10c9fc0538c4febfd95d.png";

/***/ }),

/***/ "./src/images/Macaroon.png":
/*!*********************************!*\
  !*** ./src/images/Macaroon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7c437e961689d56fc9c4.png";

/***/ }),

/***/ "./src/images/Meat.png":
/*!*****************************!*\
  !*** ./src/images/Meat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eff71e8fa6eb187529d1.png";

/***/ }),

/***/ "./src/images/Pancake.png":
/*!********************************!*\
  !*** ./src/images/Pancake.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d9a766e80d033382adef.png";

/***/ }),

/***/ "./src/images/Pizza.png":
/*!******************************!*\
  !*** ./src/images/Pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5bfacdcd1ea594acb282.png";

/***/ }),

/***/ "./src/images/Popsicle.png":
/*!*********************************!*\
  !*** ./src/images/Popsicle.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3f73de14c8350302a141.png";

/***/ }),

/***/ "./src/images/Pretzel.png":
/*!********************************!*\
  !*** ./src/images/Pretzel.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c0964a8074fdd19e9db4.png";

/***/ }),

/***/ "./src/images/Steak.png":
/*!******************************!*\
  !*** ./src/images/Steak.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0bad914d07fc4cd9a5f0.png";

/***/ }),

/***/ "./src/images/Sushi Caviar.png":
/*!*************************************!*\
  !*** ./src/images/Sushi Caviar.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a65d3f0cac26349e381.png";

/***/ }),

/***/ "./src/images/Taco.png":
/*!*****************************!*\
  !*** ./src/images/Taco.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ecb361f263ba9aa52157.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHFCO0FBQ0Q7QUFDUTtBQUMwQjtBQUNyQjtBQUNaOztBQUVyQixJQUFJLEtBQVUsRUFBRSxFQUVmOztBQUVEOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCb0M7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBCQUEwQixnRkFBMkQ7QUFDckY7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJOztBQUVULElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1mb29kLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1mb29kLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWZvb2QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWZvb2QvLi9zcmMvZm9vZExpc3QuY3N2Iiwid2VicGFjazovL29kaW4tZm9vZC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1mb29kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tZm9vZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1mb29kLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tZm9vZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWZvb2QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWZvb2QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWZvb2QvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLWZvb2QvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWZvb2QvLi9zcmMvZmxvYXRzLmpzIiwid2VicGFjazovL29kaW4tZm9vZC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1mb29kLy4vc3JjL2hlcm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1mb29kLy4vc3JjL2ltYWdlcy8gc3luYyBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL29kaW4tZm9vZC8uL3NyYy9pbWFnZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vb2Rpbi1mb29kLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tZm9vZC8uL3NyYy9tZW51LWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLWZvb2QvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgZGFya3NsYXRlZ3JleTsgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDFmciAyMCU7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA2MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDRweCAtMjJweCByZ2JhKDY2LCA2OCwgOTAsIDEpO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgLyogQWRqdXN0IHRoZSBvcGFjaXR5IHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7IC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4uaG9tZXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5oZXJvIHtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICAgIHdpZHRoOiAxNSU7XFxufVxcblxcbi5sb2dvLW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvb2QtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB6LWluZGV4OiAtMTsgLyogQWRkIHRoaXMgbGluZSB0byBtb3ZlIGltYWdlcyB0byB0aGUgYmFjayAqL1xcbn1cXG5cXG4uY3RhLXByaW1hcnkge1xcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM3cHggLTI0cHggcmdiYSg2NiwgNjgsIDkwLCAxKTtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcblxcbi5jdGEtcHJpbWFyeTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZXZpb2xldDtcXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzN3B4IC0xMHB4IHJnYmEoNjYsIDY4LCA5MCwgMSk7XFxufVxcblxcbi5jaGVmLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWYtaW1hZ2Uge1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2hlZi1kZXNjIHtcXG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogMTAwZHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMWZyIDIwJTtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uZm9vZC1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudUl0ZW0taW1nLFxcbi5tZW51SXRlbS1kZXNjLFxcbi5tZW51SXRlbS1wcmljZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmFuaW1hdGVkLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwcHg7XFxufVxcblxcbi5hZGRyZXNzIHtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jb250YWN0SDMge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsa0RBQWtEO0lBQ2xELGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sYUFBYTtJQUNiLDBDQUEwQyxFQUFFLDBDQUEwQztJQUN0RiwyQkFBMkIsRUFBRSx3QkFBd0I7SUFDckQsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVyxFQUFFLDZDQUE2QztBQUM5RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrREFBa0Q7SUFDbEQsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDBEQUEwRDtBQUM5RDs7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgZGFya3NsYXRlZ3JleTsgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDFmciAyMCU7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA2MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDRweCAtMjJweCByZ2JhKDY2LCA2OCwgOTAsIDEpO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgLyogQWRqdXN0IHRoZSBvcGFjaXR5IHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7IC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHRyYW5zaXRpb246IDMwMG1zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4uaG9tZXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5oZXJvIHtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICAgIHdpZHRoOiAxNSU7XFxufVxcblxcbi5sb2dvLW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvb2QtaW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB6LWluZGV4OiAtMTsgLyogQWRkIHRoaXMgbGluZSB0byBtb3ZlIGltYWdlcyB0byB0aGUgYmFjayAqL1xcbn1cXG5cXG4uY3RhLXByaW1hcnkge1xcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM3cHggLTI0cHggcmdiYSg2NiwgNjgsIDkwLCAxKTtcXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XFxufVxcblxcbi5jdGEtcHJpbWFyeTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZXZpb2xldDtcXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzN3B4IC0xMHB4IHJnYmEoNjYsIDY4LCA5MCwgMSk7XFxufVxcblxcbi5jaGVmLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWYtaW1hZ2Uge1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2hlZi1kZXNjIHtcXG4gICAgbWF4LXdpZHRoOiA0MHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogMTAwZHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMWZyIDIwJTtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uZm9vZC1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWVudUl0ZW0taW1nLFxcbi5tZW51SXRlbS1kZXNjLFxcbi5tZW51SXRlbS1wcmljZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmFuaW1hdGVkLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwcHg7XFxufVxcblxcbi5hZGRyZXNzIHtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5jb250YWN0SDMge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFtbXCJCdXJnZXIucG5nXCIsXCJUaGUgU2Fzc2J1cmdlclwiLFwiR2V0IHJlYWR5IHRvIGJpdGUgaW50byB0aGUgc2Fzc2llc3QsIGp1aWNpZXN0IGJ1cmdlciBpbiB0b3duLCB0b3BwZWQgd2l0aCBhdHRpdHVkZSBhbmQgZXh0cmEgY2hlZXNlLlwiLFwiJDcuOTlcIl0sW1wiQnVyaXR0by5wbmdcIixcIlJvbGxpbicgUmFzY2FsXCIsXCJTcGljZSB1cCB5b3VyIGxpZmUgd2l0aCB0aGlzIGZlaXN0eSBidXJyaXRvLCBwYWNrZWQgd2l0aCBmbGF2b3IgYW5kIGEgbGl0dGxlIGJpdCBvZiBtaXNjaGllZi5cIixcIiQ2LjUwXCJdLFtcIkNha2UucG5nXCIsXCJTd2VldCBEaXZhXCIsXCJJbmR1bGdlIGluIGEgc2luZnVsbHkgZGVsaWNpb3VzIGNha2UgdGhhdCBrbm93cyBpdCdzIHRoZSBxdWVlbiBvZiB0aGUgZGVzc2VydCB3b3JsZC5cIixcIiQxMi45NVwiXSxbXCJDYXJyb3QucG5nXCIsXCJDcnVuY2h5IFdpc2VjcmFja2Vyc1wiLFwiRnJlc2gsIHplc3R5IGNhcnJvdHMgd2l0aCBhIHNpZGUgb2Ygc2FzcywgcGVyZmVjdCBmb3IgYSBndWlsdC1mcmVlIHNuYWNraW5nIGV4cGVyaWVuY2UuXCIsXCIkMi41MFwiXSxbXCJDaGVmLnBuZ1wiLFwiQ2hlZiBDaGVla3N0ZXJcIixcIk91ciB0YWxlbnRlZCBjaGVmIHNlcnZlcyB1cCBkaXNoZXMgd2l0aCBhIHR3aXN0IG9mIGh1bW9yIGFuZCBhIGhlYXBpbmcgc3Bvb25mdWwgb2YgcGVyc29uYWxpdHkuXCIsXCJQcmljZWxlc3NcIl0sW1wiQ29mZWUucG5nXCIsXCJTbmFya3kgU2lwcGVyXCIsXCJXYWtlIHVwIHRvIGEgYm9sZCwgaW52aWdvcmF0aW5nIGNvZmZlZSB0aGF0J3Mgbm90IGFmcmFpZCB0byB0ZWxsIGl0IGxpa2UgaXQgaXMuXCIsXCIkNC4yNVwiXSxbXCJDb29raWVzLnBuZ1wiLFwiU21hcnR5IFBhbnRzIEJpdGVzXCIsXCJHZXQgYSB0YXN0ZSBvZiBicmlsbGlhbmNlIHdpdGggdGhlc2UgZGVsaWdodGZ1bCwga25vdy1pdC1hbGwgY29va2llcyB0aGF0IGFsd2F5cyBoYXZlIHRoZSBsYXN0IHdvcmQuXCIsXCIkMy43NVwiXSxbXCJDcm9pc2FudC5wbmdcIixcIkNyaXNweSBRdWlwc3RlclwiLFwiQSBmbGFreSwgYnV0dGVyeSBjcm9pc3NhbnQgdGhhdCdsbCBtYWtlIHlvdSBncmluIHdpdGggZXZlcnkgYml0ZSwgcGVyZmVjdCBmb3IgYSBjaGVla3kgYnJlYWtmYXN0LlwiLFwiJDMuNTBcIl0sW1wiQ3VwIENha2UucG5nXCIsXCJGcm9zdGVkIEZ1bm5pZXNcIixcIkVuam95IHRoZXNlIHNhc3N5IGN1cGNha2VzIHRoYXQnbGwgbWFrZSB5b3VyIHRhc3RlIGJ1ZHMgZ2lnZ2xlIGFuZCB5b3VyIGJlbGx5IGhhcHB5LlwiLFwiJDQuOTlcIl0sW1wiRG9udXQucG5nXCIsXCJEYXJpbmcgRG91Z2hudXRcIixcIlRoaXMgZG91Z2hudXQgaXNuJ3QgYWZyYWlkIHRvIGJlIGJvbGQsIGJyaW5naW5nIHlvdSBhIGRhcmluZywgaXJyZXNpc3RpYmxlIGZsYXZvciB5b3UgY2FuJ3QgcmVzaXN0LlwiLFwiJDIuOTVcIl0sW1wiRWdnICYgQmFjb24ucG5nXCIsXCJXaXR0eSBXYWtleS1XYWtleVwiLFwiU3RhcnQgeW91ciBtb3JuaW5nIHdpdGggYSBzbWlsZSB3aXRoIG91ciBkZWxlY3RhYmxlIGVnZ3MgYW5kIGJhY29uLCBjb29rZWQgd2l0aCBhIHNpZGUgb2Ygd2l0LlwiLFwiJDguMjVcIl0sW1wiRWdncGxhbnQucG5nXCIsXCJEaWNrbG9zYXVyXCIsXCJHZXQgYSBraWNrIG91dCBvZiB0aGlzIG1pc2NoaWV2b3VzIGRpY2tmcnVpdCBkaXNoIHRoYXQnbGwgbGVhdmUgeW91IGNyYXZpbmcgbW9yZS5cIixcIiQ1Ljk5XCJdLFtcIkZsb2F0LnBuZ1wiLFwiRmxvYXRpbmcgR2lnZ2xlc1wiLFwiU2lwIG9uIHRoZSBidWJibGllc3QgYW5kIGZ1bm5pZXN0IGZsb2F0IGFyb3VuZCwgZ3VhcmFudGVlZCB0byBtYWtlIHlvdSBnaWdnbGUgd2l0aCBldmVyeSBndWxwLlwiLFwiJDUuNTBcIl0sW1wiRnJpZXMucG5nXCIsXCJGYWJ1bG91cyBGcmllc3Rhc1wiLFwiR29sZGVuLCBjcmlzcHksIGFuZCBmYWJ1bG91cyAtIHRoZXNlIGZyaWVzIGtub3cgdGhleSdyZSB0aGUgbGlmZSBvZiB0aGUgcGFydHkuXCIsXCIkMy4yNVwiXSxbXCJIb3QgRG9nLnBuZ1wiLFwiU2F1Y3kgRnJhbmtmdXJ0ZXJcIixcIk5vdGhpbmcgY2FuIGtlZXAgdXAgd2l0aCB0aGlzIHplc3R5IGhvdCBkb2cgdGhhdCdzIGJ1cnN0aW5nIHdpdGggZmxhdm9yIGFuZCBhIGJpdCBvZiBzYXNzLlwiLFwiJDUuNTBcIl0sW1wiSWNlIENyZWFtLnBuZ1wiLFwiU2Nvb3BzIG9mIFNtaXJrc1wiLFwiU2F0aXNmeSB5b3VyIHN3ZWV0IHRvb3RoIHdpdGggYSBjb25lIG9mIHNtaXJreSBpY2UgY3JlYW0sIHNvIGdvb2QgaXQnbGwgaGF2ZSB5b3Ugc21pcmtpbmcgdG9vLlwiLFwiJDQuNzVcIl0sW1wiTG9saXBvcCBTd2lybC5wbmdcIixcIlNwaXJhbCBTbmlja2Vyc1wiLFwiR2V0IHJlYWR5IHRvIHN3aXJsIGFuZCBsYXVnaCB3aXRoIHRoaXMgY29sb3JmdWwsIGhpbGFyaW91cyBsb2xsaXBvcCB0aGF0J2xsIGxlYXZlIHlvdSBpbiBzdGl0Y2hlcy5cIixcIiQyLjI1XCJdLFtcIkxvbGlwb3AucG5nXCIsXCJTYXNzeSBTdWNrZXJzXCIsXCJUaGVzZSBib2xkLCBvdXRzcG9rZW4gbG9sbGlwb3BzIHdpbGwgbGVhdmUgeW91ciB0YXN0ZSBidWRzIGVudGVydGFpbmVkIGFuZCBjcmF2aW5nIG1vcmUuXCIsXCIkMS41MFwiXSxbXCJNYWNhcm9vbi5wbmdcIixcIk1hY2Fyb29uIE1pc2NoaWVmXCIsXCJEZWxpZ2h0IGluIHRoZXNlIG1pc2NoaWV2b3VzLCBkZWxlY3RhYmxlIG1hY2Fyb29ucyB0aGF0IGtub3cgaG93IHRvIG1ha2UgYSBsYXN0aW5nIGltcHJlc3Npb24uXCIsXCIkNi45OVwiXSxbXCJNZWF0LnBuZ1wiLFwiQ2h1Y2tsZSBDaG9wc1wiLFwiRW5qb3kgdGhlc2UgdGVuZGVyLCBqdWljeSBjaG9wcyB0aGF0J2xsIGhhdmUgeW91IGxhdWdoaW5nIGFsbCB0aGUgd2F5IHRocm91Z2ggZGlubmVyLlwiLFwiJDE3Ljk5XCJdLFtcIlBhbmNha2UucG5nXCIsXCJGbGlwcGluJyBGdW5ueWNha2VzXCIsXCJTdGFydCB5b3VyIGRheSB3aXRoIGEgc3RhY2sgb2YgZmx1ZmZ5IHBhbmNha2VzIHRoYXQnbGwgZmxpcCB5b3VyIG1vb2QgYW5kIG1ha2UgeW91IGNodWNrbGUuXCIsXCIkNy41MFwiXSxbXCJQaXp6YS5wbmdcIixcIlBpenphenphXCIsXCJUaGlzIHBpenphIGhhcyBhIHBlcnNvbmFsaXR5IGFzIGJpZyBhcyBpdHMgZmxhdm9yIC0gZW5qb3kgYSBzbGljZSB0aGF0J2xsIG1ha2UgeW91ciB0YXN0ZSBidWRzIGRhbmNlIHdpdGggZXhjaXRlbWVudC5cIixcIiQxMi41MFwiXSxbXCJQb3BzaWNsZS5wbmdcIixcIkljeSBXaXNlY3JhY2tzXCIsXCJDb29sIGRvd24gd2l0aCBhIHBvcHNpY2xlIHRoYXQncyBhcyByZWZyZXNoaW5nIGFzIGl0IGlzIGNsZXZlciwgcGVyZmVjdCBmb3IgYSBob3Qgc3VtbWVyIGRheS5cIixcIiQzLjAwXCJdLFtcIlByZXR6ZWwucG5nXCIsXCJUd2lzdGVkIENodWNrbGVyXCIsXCJCaXRlIGludG8gYSB0d2lzdGVkLCBzYWx0eSwgYW5kIGhpbGFyaW91cyBwcmV0emVsIHRoYXQnbGwgbGVhdmUgeW91IGNyYXZpbmcgZm9yIG1vcmUgbGF1Z2hzIGFuZCBmbGF2b3IuXCIsXCIkMi43NVwiXSxbXCJTdGVhay5wbmdcIixcIlNpciBMb2luLWEtTG90XCIsXCJJbmR1bGdlIGluIGEganVpY3ksIG1vdXRod2F0ZXJpbmcgc3RlYWsgdGhhdCdzIHNvIGdvb2QsIGl0J2xsIGhhdmUgeW91IGNyYWNraW5nIGpva2VzIGF0IHRoZSBkaW5uZXIgdGFibGUuXCIsXCIkMjQuOTlcIl0sW1wiU3VzaGkgQ2F2aWFyLnBuZ1wiLFwiUm9sbGluZyBHdWZmYXdzXCIsXCJEaXZlIGludG8gYSBwbGF0ZSBvZiBzdXNoaSB3aXRoIGEgc2lkZSBvZiBjYXZpYXIgdGhhdCdsbCBoYXZlIHlvdSByb2xsaW5nIGluIGxhdWdodGVyIHdpdGggZXZlcnkgYml0ZS5cIixcIiQxOC41MFwiXSxbXCJUYWNvLnBuZ1wiLFwiV2l0dHkgQ3J1bmNod3JhcFwiLFwiR2V0IHJlYWR5IHRvIGNydW5jaCBpbnRvIHRoaXMgdGFzdHkgdGFjbyB0aGF0J3MgbG9hZGVkIHdpdGggZmxhdm9yIGFuZCBhIHRvdWNoIG9mIGh1bW9yLlwiLFwiJDUuNzVcIl1dIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR1cm5Db250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJylcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoMi50ZXh0Q29udGVudCA9ICdSZXN0YXVyYW50IE5hbWU6IEZvb2RleSBHYXRlJ1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmlubmVySFRNTCA9XG4gICAgICAgICc8aDMgY2xhc3M9XCJjb250YWN0SDNcIj5BZGRyZXNzOiAxMjM0IEZpY3RpdGlvdXMgTGFuZSwgSW1hZ2luYXJ5IENpdHksIFdvbmRlcmxhbmQsIDU2Nzg5PC9oMz48cD5QaG9uZTogKDU1NSkgMTIzLTQ1Njc8L3A+PHA+RW1haWw6IGluZm9AZm9vZGV5LmNvbTwvcD48aDMgY2xhc3M9XCJjb250YWN0SDNcIj5PcGVuaW5nIEhvdXJzOjwvaDM+PHA+TW9uZGF5IC0gRnJpZGF5OiAxMTowMCBBTSAtIDExOjAwIFBNPC9wPjxwPlNhdHVyZGF5OiA5OjAwIEFNIC0gMTE6MDAgUE08L3A+IDxoMyBjbGFzcz1cImNvbnRhY3RIM1wiPlNvY2lhbCBNZWRpYTo8L2gzPjxwPkZhY2Vib29rOiB3d3cuZmFjZWJvb2suY29tL2Zvb2RleTwvcD48cD5JbnN0YWdyYW06IEBmb29kZXk8L3A+PHA+VHdpdHRlcjogQGZvb2RleTwvcD4nXG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChoMilcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGRpdilcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKVxuXG4gICAgY29uc3QgaUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICBpRnJhbWUuc2V0QXR0cmlidXRlKFxuICAgICAgICAnc3JjJyxcbiAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDMzNTkuMzk4ODA4NzkzMTU0MyEyZC0xNi45MTQ3NTE2NDg3NTQ1MiEzZDMyLjY0ODgyOTg5NzcyMzM3NCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4YzYwNWYwMTk0MDRiMjhiJTNBMHg5YjIzOWYxYTlkMDZiMzA4ITJzSW5kaWElMjBHYXRlITVlMCEzbTIhMXNlbiEyc3BsITR2MTY3OTA4NzQ0MDU0MiE1bTIhMXNlbiEyc3BsJ1xuICAgIClcbiAgICBpRnJhbWUuc2V0QXR0cmlidXRlKCd3aWR0aCcsIDYwMClcbiAgICBpRnJhbWUuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCA0NTApXG4gICAgaUZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOiAwJylcbiAgICBpRnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJylcbiAgICAvLyBpRnJhbWUuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJ2xhenknKVxuICAgIGlGcmFtZS5zZXRBdHRyaWJ1dGUoJ3JlZmVycmVycG9saWN5JywgJ25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJylcblxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGlGcmFtZSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKVxufVxuIiwiaW1wb3J0IHJvZHJ5Z29Qcm9maWxlIGZyb20gJy4vaW1hZ2VzL0NoZWYucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVmIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBiaW8sIGltYWdlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5iaW8gPSBiaW9cbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlXG4gICAgfVxuXG4gICAgY3JlYXRlQ2hlZkVsZW1lbnRPbldlYnNpdGUoKSB7XG4gICAgICAgIGNvbnN0IGNoZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjaGVmLmNsYXNzTGlzdC5hZGQoJ2NoZWYtc2VjdGlvbicpXG5cbiAgICAgICAgY29uc3QgY2hlZkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgY29uc3QgY2hlZkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBjaGVmTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgY29uc3QgY2hlZkJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgY2hlZkltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5pbWFnZSlcbiAgICAgICAgY2hlZkltYWdlLmNsYXNzTGlzdC5hZGQoJ2NoZWYtaW1hZ2UnKVxuICAgICAgICBjaGVmRGVzYy5jbGFzc0xpc3QuYWRkKCdjaGVmLWRlc2MnKVxuXG4gICAgICAgIGNoZWZOYW1lLnRleHRDb250ZW50ID0gdGhpcy5uYW1lXG4gICAgICAgIGNoZWZCaW8udGV4dENvbnRlbnQgPSB0aGlzLmJpb1xuXG4gICAgICAgIGNoZWZEZXNjLmFwcGVuZENoaWxkKGNoZWZOYW1lKVxuICAgICAgICBjaGVmRGVzYy5hcHBlbmRDaGlsZChjaGVmQmlvKVxuICAgICAgICBjaGVmLmFwcGVuZENoaWxkKGNoZWZJbWFnZSlcbiAgICAgICAgY2hlZi5hcHBlbmRDaGlsZChjaGVmRGVzYylcblxuICAgICAgICByZXR1cm4gY2hlZlxuICAgIH1cbn1cbiIsImNvbnN0IGltYWdlQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKVxuXG5mdW5jdGlvbiB0dXJuT25GbHlpbmdGb29kcyhmb29kcykge1xuICAgIGZvb2RzID0gaW1hZ2VDb250ZXh0LmtleXMoKS5tYXAoaW1hZ2VDb250ZXh0KVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tRm9vZCgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb29kcy5sZW5ndGgpXG4gICAgICAgIHJldHVybiBmb29kc1tyYW5kb21JbmRleF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb29kSW1hZ2UoeCwgeSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGltZy5zcmMgPSBnZXRSYW5kb21Gb29kKClcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UnKVxuICAgICAgICBpbWcuc3R5bGUubGVmdCA9IGAke3h9cHhgXG4gICAgICAgIGltZy5zdHlsZS50b3AgPSBgJHt5fXB4YFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgcmV0dXJuIGltZ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKHdpbmRvd1dpZHRoICogMC4wMSArIE1hdGgucmFuZG9tKCkgKiB3aW5kb3dXaWR0aCAqIDAuOTkpXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKHdpbmRvd0hlaWdodCAqIDAuMDEgKyBNYXRoLnJhbmRvbSgpICogd2luZG93SGVpZ2h0ICogMC41KVxuXG4gICAgICAgIHJldHVybiB7IHgsIHkgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVJbWFnZXNPbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WFxuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WVxuXG4gICAgICAgIGltYWdlMS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eCAqIDAuMDF9cHgsICR7eSAqIDAuMDF9cHgpYFxuICAgICAgICBpbWFnZTIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3ggKiAwLjAyfXB4LCAke3kgKiAwLjAyfXB4KWBcbiAgICAgICAgaW1hZ2UzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4ICogMC4wM31weCwgJHt5ICogMC4wM31weClgXG4gICAgICAgIGltYWdlNC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7eCAqIDAuMDR9cHgsICR7eSAqIDAuMDR9cHgpYFxuICAgICAgICBpbWFnZTUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3ggKiAwLjA1fXB4LCAke3kgKiAwLjA2fXB4KWBcbiAgICB9XG5cbiAgICBjb25zdCBwb3MxID0gZ2V0UmFuZG9tUG9zaXRpb24oKVxuICAgIGNvbnN0IHBvczIgPSBnZXRSYW5kb21Qb3NpdGlvbigpXG4gICAgY29uc3QgcG9zMyA9IGdldFJhbmRvbVBvc2l0aW9uKClcbiAgICBjb25zdCBwb3M0ID0gZ2V0UmFuZG9tUG9zaXRpb24oKVxuICAgIGNvbnN0IHBvczUgPSBnZXRSYW5kb21Qb3NpdGlvbigpXG5cbiAgICBjb25zdCBpbWFnZTEgPSBjcmVhdGVGb29kSW1hZ2UocG9zMS54LCBwb3MxLnkpXG4gICAgY29uc3QgaW1hZ2UyID0gY3JlYXRlRm9vZEltYWdlKHBvczIueCwgcG9zMi55KVxuICAgIGNvbnN0IGltYWdlMyA9IGNyZWF0ZUZvb2RJbWFnZShwb3MzLngsIHBvczMueSlcbiAgICBjb25zdCBpbWFnZTQgPSBjcmVhdGVGb29kSW1hZ2UocG9zNC54LCBwb3M0LnkpXG4gICAgY29uc3QgaW1hZ2U1ID0gY3JlYXRlRm9vZEltYWdlKHBvczUueCwgcG9zNS55KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUltYWdlc09uTW91c2VNb3ZlKVxufVxuXG5leHBvcnQgeyB0dXJuT25GbHlpbmdGb29kcyB9XG4iLCJpbXBvcnQgbG9nb0ltZyBmcm9tICcuL2ltYWdlcy9FZ2dwbGFudC5wbmcnXG5pbXBvcnQgeyB0dXJuTWVudSB9IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCB7IHR1cm5Ib21lIH0gZnJvbSAnLi9oZXJvJ1xuaW1wb3J0IHR1cm5Db250YWN0IGZyb20gJy4vY29udGFjdC5qcydcblxuY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJylcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5sb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgbG9nb0ltZylcbmxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby1pbWcnKVxuaGVhZGVyTG9nby5hcHBlbmRDaGlsZChsb2dvKVxuXG5jb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbm5hbWUudGV4dENvbnRlbnQgPSAnRm9vZGV5J1xubmFtZS5jbGFzc0xpc3QuYWRkKCdsb2dvLW5hbWUnKVxuaGVhZGVyTG9nby5hcHBlbmRDaGlsZChuYW1lKVxuXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKVxuXG5jb25zdCBtZW51RWxlbWVudHMgPSBbYEhvbWVgLCBgTWVudWAsIGBDb250YWN0YF1cblxubWVudUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKVxuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudFxuICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09ICdIb21lJykge1xuICAgICAgICAgICAgdHVybkhvbWUoKVxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09ICdNZW51Jykge1xuICAgICAgICAgICAgdHVybk1lbnUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHVybkNvbnRhY3QoKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKG1lbnVJdGVtKVxufSlcbiIsImltcG9ydCBDaGVmIGZyb20gJy4vY29udGVudC5qcydcbmltcG9ydCByb2RyeWdvUHJvZmlsZSBmcm9tICcuL2ltYWdlcy9DaGVmLnBuZydcbmltcG9ydCB7IHR1cm5PbkZseWluZ0Zvb2RzIH0gZnJvbSAnLi9mbG9hdHMuanMnXG5pbXBvcnQgeyB0dXJuTWVudSB9IGZyb20gJy4vbWVudS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0XG4gICAgfVxuXG4gICAgY3JlYXRlSGVyb0ZvcldlYnNpdGUoKSB7XG4gICAgICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpXG4gICAgICAgIGhlcm8uaW5uZXJIVE1MID0gdGhpcy50ZXh0XG4gICAgICAgIHJldHVybiBoZXJvXG4gICAgfVxuXG4gICAgY3JlYXRlQ3RhRm9yV2Vic2l0ZSgpIHtcbiAgICAgICAgY29uc3QgY3RhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY3RhLmNsYXNzTGlzdC5hZGQoJ2N0YS1wcmltYXJ5JylcbiAgICAgICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdHVybk1lbnUoKVxuICAgICAgICB9KVxuICAgICAgICBjdGEuaW5uZXJUZXh0ID0gJ09yZGVyIHRoZSBnb29kaWVzJ1xuICAgICAgICByZXR1cm4gY3RhXG4gICAgfVxufVxuXG5jb25zdCBteUhlcm8gPSBuZXcgSGVybygnQmVzdCBmdWNraW5nIGZvb2QuIDxiciAvPiBOb3RoaW5nIGVsc2UgbWF0dGVycy4nKVxuY29uc3QgY2hlZlJvZHJ5Z28gPSBuZXcgQ2hlZihcbiAgICAnUm9kcnlnbyBBYm9yZ2VsZXMnLFxuICAgICdSb2RyeWdvIEpvYXF1aW4gQWJvcmdlbGVzIEpyLiBpcyBhIFBvbGlzaCB0ZWxldmlzaW9uIHBlcnNvbmFsaXR5LCBjZWxlYnJpdHkgY2hlZiwgcmVzdGF1cmF0ZXVyIGFuZCBwYWludGVyLiBHZXNzbGVyIGlzIGtub3duIGZvciBwcmVzZW50aW5nIFRWIHByb2dyYW1tZSBLdWNoZW5uZSByZXdvbHVjamUgYW5kIGp1ZGdpbmcgaW4gUG9saXNoIHZlcnNpb24gb2YgTWFzdGVyQ2hlZi4nLFxuICAgIHJvZHJ5Z29Qcm9maWxlXG4pXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbmZ1bmN0aW9uIHR1cm5Ib21lKCkge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lcGFnZS5jbGFzc0xpc3QuYWRkKCdob21lcGFnZScpXG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQobXlIZXJvLmNyZWF0ZUhlcm9Gb3JXZWJzaXRlKCkpXG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQobXlIZXJvLmNyZWF0ZUN0YUZvcldlYnNpdGUoKSlcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChjaGVmUm9kcnlnby5jcmVhdGVDaGVmRWxlbWVudE9uV2Vic2l0ZSgpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpXG4gICAgdHVybk9uRmx5aW5nRm9vZHMoKVxufVxuXG5leHBvcnQgeyB0dXJuSG9tZSB9XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQnVyZ2VyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9CdXJnZXIucG5nXCIsXG5cdFwiLi9CdXJpdHRvLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9CdXJpdHRvLnBuZ1wiLFxuXHRcIi4vQ2FrZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ2FrZS5wbmdcIixcblx0XCIuL0NhcnJvdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ2Fycm90LnBuZ1wiLFxuXHRcIi4vQ2hlZi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ2hlZi5wbmdcIixcblx0XCIuL0NvZmVlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Db2ZlZS5wbmdcIixcblx0XCIuL0Nvb2tpZXMucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0Nvb2tpZXMucG5nXCIsXG5cdFwiLi9Dcm9pc2FudC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ3JvaXNhbnQucG5nXCIsXG5cdFwiLi9DdXAgQ2FrZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ3VwIENha2UucG5nXCIsXG5cdFwiLi9Eb251dC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRG9udXQucG5nXCIsXG5cdFwiLi9FZ2cgJiBCYWNvbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRWdnICYgQmFjb24ucG5nXCIsXG5cdFwiLi9FZ2dwbGFudC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRWdncGxhbnQucG5nXCIsXG5cdFwiLi9GbG9hdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRmxvYXQucG5nXCIsXG5cdFwiLi9Gcmllcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRnJpZXMucG5nXCIsXG5cdFwiLi9Ib3QgRG9nLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Ib3QgRG9nLnBuZ1wiLFxuXHRcIi4vSWNlIENyZWFtLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9JY2UgQ3JlYW0ucG5nXCIsXG5cdFwiLi9Mb2xpcG9wIFN3aXJsLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Mb2xpcG9wIFN3aXJsLnBuZ1wiLFxuXHRcIi4vTG9saXBvcC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTG9saXBvcC5wbmdcIixcblx0XCIuL01hY2Fyb29uLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYWNhcm9vbi5wbmdcIixcblx0XCIuL01lYXQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01lYXQucG5nXCIsXG5cdFwiLi9QYW5jYWtlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9QYW5jYWtlLnBuZ1wiLFxuXHRcIi4vUGl6emEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1BpenphLnBuZ1wiLFxuXHRcIi4vUG9wc2ljbGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1BvcHNpY2xlLnBuZ1wiLFxuXHRcIi4vUHJldHplbC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUHJldHplbC5wbmdcIixcblx0XCIuL1N0ZWFrLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9TdGVhay5wbmdcIixcblx0XCIuL1N1c2hpIENhdmlhci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvU3VzaGkgQ2F2aWFyLnBuZ1wiLFxuXHRcIi4vVGFjby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvVGFjby5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZyU3Q2pwZT9nJTdDZ2lmJTdDc3ZnKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQnVyZ2VyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9CdXJnZXIucG5nXCIsXG5cdFwiLi9CdXJpdHRvLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9CdXJpdHRvLnBuZ1wiLFxuXHRcIi4vQ2FrZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ2FrZS5wbmdcIixcblx0XCIuL0NhcnJvdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ2Fycm90LnBuZ1wiLFxuXHRcIi4vQ2hlZi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ2hlZi5wbmdcIixcblx0XCIuL0NvZmVlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Db2ZlZS5wbmdcIixcblx0XCIuL0Nvb2tpZXMucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0Nvb2tpZXMucG5nXCIsXG5cdFwiLi9Dcm9pc2FudC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ3JvaXNhbnQucG5nXCIsXG5cdFwiLi9DdXAgQ2FrZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ3VwIENha2UucG5nXCIsXG5cdFwiLi9Eb251dC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRG9udXQucG5nXCIsXG5cdFwiLi9FZ2cgJiBCYWNvbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRWdnICYgQmFjb24ucG5nXCIsXG5cdFwiLi9FZ2dwbGFudC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRWdncGxhbnQucG5nXCIsXG5cdFwiLi9GbG9hdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRmxvYXQucG5nXCIsXG5cdFwiLi9Gcmllcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRnJpZXMucG5nXCIsXG5cdFwiLi9Ib3QgRG9nLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Ib3QgRG9nLnBuZ1wiLFxuXHRcIi4vSWNlIENyZWFtLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9JY2UgQ3JlYW0ucG5nXCIsXG5cdFwiLi9Mb2xpcG9wIFN3aXJsLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Mb2xpcG9wIFN3aXJsLnBuZ1wiLFxuXHRcIi4vTG9saXBvcC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTG9saXBvcC5wbmdcIixcblx0XCIuL01hY2Fyb29uLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYWNhcm9vbi5wbmdcIixcblx0XCIuL01lYXQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01lYXQucG5nXCIsXG5cdFwiLi9QYW5jYWtlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9QYW5jYWtlLnBuZ1wiLFxuXHRcIi4vUGl6emEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1BpenphLnBuZ1wiLFxuXHRcIi4vUG9wc2ljbGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1BvcHNpY2xlLnBuZ1wiLFxuXHRcIi4vUHJldHplbC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUHJldHplbC5wbmdcIixcblx0XCIuL1N0ZWFrLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9TdGVhay5wbmdcIixcblx0XCIuL1N1c2hpIENhdmlhci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvU3VzaGkgQ2F2aWFyLnBuZ1wiLFxuXHRcIi4vVGFjby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvVGFjby5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0ICcuL2hlYWRlci5qcydcbmltcG9ydCAnLi9tZW51LWFuaW1hdGlvbi5qcydcbmltcG9ydCBGb29kLCB7IGNyZWF0ZU1lbnUsIHR1cm5NZW51IH0gZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IHsgdHVybkhvbWUgfSBmcm9tICcuL2hlcm8nXG5pbXBvcnQgJy4vY29udGFjdC5qcydcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG59XG5cbi8vIHR1cm5Ib21lKClcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZWQnKVxuXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9wIDw9IHdpbmRvd0hlaWdodCAtIDEwMCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxuICAgIG9uU2Nyb2xsKCkgLy8gQ2FsbCBvbmNlIHRvIGluaXRpYWxpemUgZWxlbWVudHMnIHZpc2liaWxpdHlcbn0pXG4iLCJpbXBvcnQgZm9vZExpc3QgZnJvbSAnLi9mb29kTGlzdC5jc3YnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb2Qge1xuICAgIGNvbnN0cnVjdG9yKGltYWdlLCBuYW1lLCBkZXNjLCBwcmljZSkge1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2VcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZVxuICAgIH1cblxuICAgIGNyZWF0ZU1lbnVGb29kSXRlbSgpIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScsICdhbmltYXRlZCcsICd2aXNpYmxlJylcblxuICAgICAgICBjb25zdCBtZW51SXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lbnVJdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtLWltZycpXG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1JbWdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBtZW51SXRlbUltZ1RhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMuaW1hZ2UpXG4gICAgICAgIG1lbnVJdGVtSW1nVGFnLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1nJylcblxuICAgICAgICBtZW51SXRlbUltZy5hcHBlbmRDaGlsZChtZW51SXRlbUltZ1RhZylcblxuICAgICAgICBjb25zdCBtZW51SXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51SXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0tZGVzYycpXG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBtZW51SXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0tbmFtZScpXG4gICAgICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZVxuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtRGVzY1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbWVudUl0ZW1EZXNjUC5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbS1kZXNjUCcpXG4gICAgICAgIG1lbnVJdGVtRGVzY1AudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NcblxuICAgICAgICBtZW51SXRlbURlc2MuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKVxuICAgICAgICBtZW51SXRlbURlc2MuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjUClcblxuICAgICAgICBjb25zdCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbS1wcmljZScpXG4gICAgICAgIG1lbnVJdGVtUHJpY2UudGV4dENvbnRlbnQgPSB0aGlzLnByaWNlXG5cbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWcpXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzYylcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1QcmljZSlcblxuICAgICAgICByZXR1cm4gbWVudUl0ZW1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51JylcbiAgICByZXR1cm4gbWVudVxufVxuXG5mdW5jdGlvbiB0dXJuTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcblxuICAgIGNvbnN0IGltYWdlc0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzJywgdHJ1ZSwgL1xcLihwbmd8anBlP2d8Z2lmfHN2ZykkLylcbiAgICBjb25zdCBpbWFnZXNNYXAgPSBpbWFnZXNDb250ZXh0LmtleXMoKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgIGFjY1trZXkucmVwbGFjZSgnLi8nLCAnJyldID0gaW1hZ2VzQ29udGV4dChrZXkpXG4gICAgICAgIHJldHVybiBhY2NcbiAgICB9LCB7fSlcblxuICAgIGZvb2RMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZm9vZCA9IG5ldyBGb29kKGltYWdlc01hcFtlbGVtZW50WzBdXSwgZWxlbWVudFsxXSwgZWxlbWVudFsyXSwgZWxlbWVudFszXSlcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChmb29kLmNyZWF0ZU1lbnVGb29kSXRlbSgpKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnUsIHR1cm5NZW51IH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==