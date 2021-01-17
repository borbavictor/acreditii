(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "/8ZT":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
      \***************************************************/

    /*! exports provided: DNS, URL, default */

    /***/
    function ZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DNS", function () {
        return DNS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "URL", function () {
        return URL;
      });
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");
      /* harmony import */


      var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./parse.js */
      "DeoT");

      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str)); // UTF8 escape

        var bytes = [];

        for (var i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }

        return bytes;
      }

      var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
      var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
      /* harmony default export */

      __webpack_exports__["default"] = function (name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          if (typeof value === 'string') {
            value = stringToBytes(value);
          }

          if (typeof namespace === 'string') {
            namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
          }

          if (namespace.length !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
          } // Compute hash of namespace and value, Per 4.3
          // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
          // hashfunc([...namespace, ... value])`


          var bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 0x0f | version;
          bytes[8] = bytes[8] & 0x3f | 0x80;

          if (buf) {
            offset = offset || 0;

            for (var i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }

            return buf;
          }

          return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
        } // Function#name is not settable on some platforms (#270)


        try {
          generateUUID.name = name; // eslint-disable-next-line no-empty
        } catch (err) {} // For CommonJS default export support


        generateUUID.DNS = DNS;
        generateUUID.URL = URL;
        return generateUUID;
      };
      /***/

    },

    /***/
    "1M+P":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function MP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = '00000000-0000-0000-0000-000000000000';
      /***/
    },

    /***/
    "2Pgj":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Pgj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return rng;
      }); // Unique ID creation requires a high quality random # generator. In the browser we therefore
      // require the crypto API and do not support built-in fallback to lower quality random number
      // generators (like Math.random()).


      var getRandomValues;
      var rnds8 = new Uint8Array(16);

      function rng() {
        // lazy load so that environments that need to polyfill have a chance to do so
        if (!getRandomValues) {
          // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
          // find the complete implementation of crypto (msCrypto) on IE11.
          getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

          if (!getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
          }
        }

        return getRandomValues(rnds8);
      }
      /***/

    },

    /***/
    "4USb":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
      \*****************************************************/

    /*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */

    /***/
    function USb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v1.js */
      "xQqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v1", function () {
        return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./v3.js */
      "VKuO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v3", function () {
        return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./v4.js */
      "7Cbv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v4", function () {
        return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./v5.js */
      "Jr8q");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v5", function () {
        return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nil.js */
      "1M+P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NIL", function () {
        return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./version.js */
      "dugQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "version", function () {
        return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "validate", function () {
        return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stringify", function () {
        return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"];
      });
      /* harmony import */


      var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./parse.js */
      "DeoT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "parse", function () {
        return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      });
      /***/

    },

    /***/
    "7Cbv":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Cbv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rng.js */
      "2Pgj");
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");

      function v4(options, buf, offset) {
        options = options || {};

        var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


        rnds[6] = rnds[6] & 0x0f | 0x40;
        rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

        if (buf) {
          offset = offset || 0;

          for (var i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }

          return buf;
        }

        return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
      }
      /* harmony default export */


      __webpack_exports__["default"] = v4;
      /***/
    },

    /***/
    "8MT7":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <div>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Balcões</ion-title>\n      <ion-searchbar animated mode=\"ios\" placeholder=\"Pesquisar\" debounce=\"200\"></ion-searchbar>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content overflow-scroll=\"false\">\n  <div class=\"empty-company-list\" *ngIf=\"companyList.length == 0\">\n    <div>\n      Oops...<br>não foi possível encontrar as empresas!<br><br>\n    </div>\n  </div>\n\n  <div class=\"list-companys\" *ngIf=\"showCompanys\">\n    <ion-card *ngFor=\"let company of companyList\">\n      <ion-card-header (click)=\"goToCompany(company)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-card-subtitle class=\"company-title\">{{company?.title}}</ion-card-subtitle>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-card-subtitle class=\"company-name\">{{company?.company}}</ion-card-subtitle>\n            </ion-col>\n            <ion-col size=\"12\" class=\"company-info\">\n              <ion-card-subtitle class=\"company-date\">\n                {{company?.startDate.seconds * 1000 | date:'dd/MM/yyyy'}}\n              </ion-card-subtitle>\n              <ion-card-subtitle class=\"company-hour\">\n                {{company?.startDate.seconds * 1000 | date:'H:mm' }}-{{company?.endDate.seconds * 1000 | date:'H:mm' }}({{ company?.startDate.seconds * 1000 | date:'zzz':'locale' }})\n              </ion-card-subtitle>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n    </ion-card>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "BuRe":
    /*!********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function BuRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./regex.js */
      "QNZY");

      function validate(uuid) {
        return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
      }
      /* harmony default export */


      __webpack_exports__["default"] = validate;
      /***/
    },

    /***/
    "DeoT":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function DeoT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");

      function parse(uuid) {
        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Invalid UUID');
        }

        var v;
        var arr = new Uint8Array(16); // Parse ########-....-....-....-............

        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 0xff;
        arr[2] = v >>> 8 & 0xff;
        arr[3] = v & 0xff; // Parse ........-####-....-....-............

        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 0xff; // Parse ........-....-####-....-............

        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 0xff; // Parse ........-....-....-####-............

        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 0xff; // Parse ........-....-....-....-############
        // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
        arr[11] = v / 0x100000000 & 0xff;
        arr[12] = v >>> 24 & 0xff;
        arr[13] = v >>> 16 & 0xff;
        arr[14] = v >>> 8 & 0xff;
        arr[15] = v & 0xff;
        return arr;
      }
      /* harmony default export */


      __webpack_exports__["default"] = parse;
      /***/
    },

    /***/
    "Jr8q":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Jr8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v35.js */
      "/8ZT");
      /* harmony import */


      var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sha1.js */
      "t133");

      var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */

      __webpack_exports__["default"] = v5;
      /***/
    },

    /***/
    "Masw":
    /*!*************************************!*\
      !*** ./src/app/queue/queue.page.ts ***!
      \*************************************/

    /*! exports provided: QueuePage */

    /***/
    function Masw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueuePage", function () {
        return QueuePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_queue_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./queue.page.html */
      "aKY3");
      /* harmony import */


      var _queue_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./queue.page.scss */
      "mRT3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var QueuePage = /*#__PURE__*/function () {
        function QueuePage(popoverController) {
          _classCallCheck(this, QueuePage);

          this.popoverController = popoverController;
          this.npeople = 3;
          this.npercent = 0;
          this.aborted = false;
        }

        _createClass(QueuePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.verifyPeople();
          }
        }, {
          key: "verifyPeople",
          value: function verifyPeople() {
            var _this = this;

            if (!this.aborted) {
              this.npercent = 1 - (this.npeople > 99 ? this.npeople / 100 : this.npeople / 10);
              setTimeout(function (d) {
                if (_this.npeople == 0) {
                  _this.popoverController.dismiss({
                    valid: true
                  });
                } else {
                  _this.npeople -= 1;

                  _this.verifyPeople();
                }
              }, 5000);
            }
          }
        }, {
          key: "abort",
          value: function abort() {
            this.aborted = true;
            this.popoverController.dismiss({
              valid: false
            });
          }
        }]);

        return QueuePage;
      }();

      QueuePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      QueuePage.propDecorators = {
        company: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      QueuePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-queue',
        template: _raw_loader_queue_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_queue_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QueuePage);
      /***/
    },

    /***/
    "Mzl2":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function Mzl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "8MT7");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "rWyk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _company_detail_company_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../company-detail/company-detail.page */
      "OLKn");
      /* harmony import */


      var _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/firestore.service */
      "YWyl");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(firestoreService, router, modalController) {
          _classCallCheck(this, Tab1Page);

          this.firestoreService = firestoreService;
          this.router = router;
          this.modalController = modalController;
          this.showCompanys = true; // companyList: Array<ICompany> = [
          //   {
          //     id: '430t8h30vg8u34h0vuh3v',
          //     name: 'Nestle',
          //     date: new Date(),
          //     banner: 'venha fazer parte desse time!',
          //     mentor: 'João da Silva',
          //     position: 'RH Supervisor',
          //     place: {
          //       country: 'Brasil',
          //       state: 'São Paulo',
          //       city: 'Marília'
          //     },
          //     link: 'https://www.nestle.com.br/',
          //     registerPeriod: {
          //       begin: new Date(),
          //       end: new Date(),
          //     },
          //     status: 'ACTIVE',
          //   },
          //   {
          //     id: '094hg0v38hv38rhv03rhujrhpfiv',
          //     name: 'Jacto',
          //     date: new Date(),
          //     banner: 'vamos crescer juntos!',
          //     mentor: 'Marcos José',
          //     position: 'RH',
          //     place: {
          //       country: 'Brasil',
          //       state: 'São Paulo',
          //       city: 'Pompeia'
          //     },
          //     link: 'https://jacto.com/brasil',
          //     registerPeriod: {
          //       begin: new Date(),
          //       end: new Date(),
          //     },
          //     status: 'ACTIVE',
          //   }
          // ];

          this.companyList = [];
          this.loadCounters();
        }

        _createClass(Tab1Page, [{
          key: "goToCompany",
          value: function goToCompany(company) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _company_detail_company_detail_page__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailPage"],
                        componentProps: {
                          company: company
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "loadCounters",
          value: function loadCounters() {
            var _this2 = this;

            this.firestoreService.listAllCounters().subscribe(function (res) {
              _this2.companyList = res.docs.map(function (doc) {
                return doc.data();
              });
            });
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page);
      /***/
    },

    /***/
    "OLKn":
    /*!*******************************************************!*\
      !*** ./src/app/company-detail/company-detail.page.ts ***!
      \*******************************************************/

    /*! exports provided: CompanyDetailPage */

    /***/
    function OLKn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyDetailPage", function () {
        return CompanyDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_company_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./company-detail.page.html */
      "rDEf");
      /* harmony import */


      var _company_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./company-detail.page.scss */
      "RK67");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var _questionary_questionary_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../questionary/questionary.page */
      "g+A9");
      /* harmony import */


      var _queue_queue_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../queue/queue.page */
      "Masw");
      /* harmony import */


      var _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/firestore.service */
      "YWyl");

      var CompanyDetailPage = /*#__PURE__*/function () {
        function CompanyDetailPage(modalController, popoverController, firestoreService, router) {
          _classCallCheck(this, CompanyDetailPage);

          this.modalController = modalController;
          this.popoverController = popoverController;
          this.firestoreService = firestoreService;
          this.router = router;
          this.answers = {};
        }

        _createClass(CompanyDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "openAlertQuestions",
          value: function openAlertQuestions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverController.create({
                        component: _questionary_questionary_page__WEBPACK_IMPORTED_MODULE_7__["QuestionaryAlertComponent"],
                        componentProps: {
                          company: this.company
                        },
                        showBackdrop: true,
                        backdropDismiss: true
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data.valid) {
                          _this3.openQuestions();
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openQuestions",
          value: function openQuestions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverController.create({
                        component: _questionary_questionary_page__WEBPACK_IMPORTED_MODULE_7__["QuestionaryPage"],
                        componentProps: {
                          company: this.company
                        },
                        showBackdrop: true,
                        backdropDismiss: true
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data.valid) {
                          _this4.saveQuestions(data.data.answers);
                        }
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "saveQuestions",
          value: function saveQuestions(answers) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverController.create({
                        component: _queue_queue_page__WEBPACK_IMPORTED_MODULE_8__["QueuePage"],
                        componentProps: {
                          company: this.company
                        },
                        showBackdrop: true,
                        backdropDismiss: true
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data.data.valid) {
                          _this5.modalController.dismiss();

                          _this5.firestoreService.enterOnGroupChat(Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(), _this5.company, answers); // this.router.navigate(['/private-chat']);

                        }
                      });
                      _context4.next = 6;
                      return modal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return CompanyDetailPage;
      }();

      CompanyDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }, {
          type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CompanyDetailPage.propDecorators = {
        company: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CompanyDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-company-detail',
        template: _raw_loader_company_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_company_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CompanyDetailPage);
      /***/
    },

    /***/
    "QNZY":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function QNZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      /***/
    },

    /***/
    "RK67":
    /*!*********************************************************!*\
      !*** ./src/app/company-detail/company-detail.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function RK67(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background: #ffc409;\n}\nion-header ion-button {\n  --color: black;\n}\nion-header ion-row {\n  margin: 0 2vh 0 2vh;\n}\nion-content ion-row {\n  margin: 3vh 2vh 0 2vh;\n  color: #FFFFFF;\n}\nion-content ion-row ion-label {\n  font-weight: bold;\n}\n.company-title {\n  color: black;\n  font-weight: bolder;\n  font-size: 20px;\n}\n.company-name {\n  color: black;\n  font-weight: normal;\n  font-size: 20px;\n}\n.company-info {\n  color: black;\n  font-weight: normal;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBhbnktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7QUFBSjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBREo7QUFFSTtFQUNFLGlCQUFBO0FBQU47QUFJQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBREYiLCJmaWxlIjoiY29tcGFueS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmM0MDk7XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICAtLWNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGlvbi1yb3cge1xuICAgIG1hcmdpbjogMCAydmggMCAydmg7XG4gIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgaW9uLXJvdyB7XG4gICAgbWFyZ2luOiAzdmggMnZoIDAgMnZoO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGlvbi1sYWJlbHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuLmNvbXBhbnktdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29tcGFueS1pbmZvIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */";
      /***/
    },

    /***/
    "VKuO":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function VKuO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v35.js */
      "/8ZT");
      /* harmony import */


      var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./md5.js */
      "tysn");

      var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */

      __webpack_exports__["default"] = v3;
      /***/
    },

    /***/
    "WM9j":
    /*!*********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function WM9j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");
      /**
       * Convert array of 16 byte values to UUID string format of the form:
       * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
       */


      var byteToHex = [];

      for (var i = 0; i < 256; ++i) {
        byteToHex.push((i + 0x100).toString(16).substr(1));
      }

      function stringify(arr) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
        // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

        var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
        // of the following:
        // - One or more input array values don't map to a hex octet (leading to
        // "undefined" in the uuid)
        // - Invalid input values for the RFC `version` or `variant` fields

        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Stringified UUID is invalid');
        }

        return uuid;
      }
      /* harmony default export */


      __webpack_exports__["default"] = stringify;
      /***/
    },

    /***/
    "XOzS":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function XOzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "XPnJ":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionary/questionary.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function XPnJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content overflow-scroll=\"false\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\" position=\"floating\">Qual o seu objetivo para daqui 5 anos?</ion-label>\n          <ion-textarea #target (input)=\"answerVerify()\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\" position=\"floating\">Qual o seu hobby?</ion-label>\n          <ion-textarea #hobby (input)=\"answerVerify()\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\" position=\"floating\">Qual o seu maior sonho ultimamente?</ion-label>\n          <ion-textarea #dream (input)=\"answerVerify()\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"full\" color=\"warning\" shape=\"round\" (click)=\"saveQuestions()\" [disabled]=\"!formValid\">\n          Responder</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "aKY3":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/queue/queue.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function aKY3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content overflow-scroll=\"false\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label class=\"ion-text-wrap\" position=\"floating\">Existem {{npeople}} pessoas na sua frente, aguarde!\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-progress-bar color=\"warning\" value=\"{{npercent}}\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"full\" color=\"warning\" shape=\"round\" (click)=\"abort()\">Desistir</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "dugQ":
    /*!*******************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function dugQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");

      function version(uuid) {
        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Invalid UUID');
        }

        return parseInt(uuid.substr(14, 1), 16);
      }
      /* harmony default export */


      __webpack_exports__["default"] = version;
      /***/
    },

    /***/
    "fd/v":
    /*!*********************************************************!*\
      !*** ./src/app/company-detail/company-detail.module.ts ***!
      \*********************************************************/

    /*! exports provided: CompanyDetailPageModule */

    /***/
    function fdV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyDetailPageModule", function () {
        return CompanyDetailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _company_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./company-detail.page */
      "OLKn");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");

      var routes = [{
        path: '',
        component: _company_detail_page__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailPage"]
      }];

      var CompanyDetailPageModule = function CompanyDetailPageModule() {
        _classCallCheck(this, CompanyDetailPageModule);
      };

      CompanyDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_company_detail_page__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailPage"]]
      })], CompanyDetailPageModule);
      /***/
    },

    /***/
    "g+A9":
    /*!*************************************************!*\
      !*** ./src/app/questionary/questionary.page.ts ***!
      \*************************************************/

    /*! exports provided: QuestionaryAlertComponent, QuestionaryPage */

    /***/
    function gA9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionaryAlertComponent", function () {
        return QuestionaryAlertComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionaryPage", function () {
        return QuestionaryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_questionary_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./questionary.page.html */
      "XPnJ");
      /* harmony import */


      var _questionary_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./questionary.page.scss */
      "vCFk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var QuestionaryAlertComponent = /*#__PURE__*/function () {
        function QuestionaryAlertComponent(popoverController) {
          _classCallCheck(this, QuestionaryAlertComponent);

          this.popoverController = popoverController;
        }

        _createClass(QuestionaryAlertComponent, [{
          key: "openQuestions",
          value: function openQuestions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.popoverController.dismiss({
                        valid: true
                      });

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return QuestionaryAlertComponent;
      }();

      QuestionaryAlertComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      QuestionaryAlertComponent.propDecorators = {
        company: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      QuestionaryAlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-questiony-alert-component',
        template: "\n  <ion-content overflow-scroll=\"false\">\n    <ion-row class=\"message-text\">\n      <ion-col size=\"12\">\n        <ion-label>existem algumas quest\xF5es que precisam ser respondidas para que voc\xEA possa ingressar neste balc\xE3o</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"full\" color=\"warning\" shape=\"round\" (click)=\"openQuestions()\">Responder quest\xF5es</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n  ",
        styles: ["ion-content {--ion-background-color: #FFFFFF;}", ".message-text {margin: 2vh; text-align: center;}"]
      })], QuestionaryAlertComponent);

      var QuestionaryPage = /*#__PURE__*/function () {
        function QuestionaryPage(popoverController) {
          _classCallCheck(this, QuestionaryPage);

          this.popoverController = popoverController;
          this.formValid = false;
        }

        _createClass(QuestionaryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "answerVerify",
          value: function answerVerify() {
            var target = this.target.nativeElement.value;
            var hobby = this.hobby.nativeElement.value;
            var dream = this.dream.nativeElement.value;
            target.length > 0 && hobby.length > 0 && dream.length > 0 ? this.formValid = true : this.formValid = false;
          }
        }, {
          key: "saveQuestions",
          value: function saveQuestions() {
            var answers = {
              target: this.target.nativeElement.value,
              hobby: this.hobby.nativeElement.value,
              dream: this.dream.nativeElement.value
            };
            this.popoverController.dismiss({
              valid: true,
              answers: answers
            });
          }
        }]);

        return QuestionaryPage;
      }();

      QuestionaryPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      QuestionaryPage.propDecorators = {
        company: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["target", {
            "static": false
          }]
        }],
        hobby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["hobby", {
            "static": false
          }]
        }],
        dream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["dream", {
            "static": false
          }]
        }]
      };
      QuestionaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-questionary',
        template: _raw_loader_questionary_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_questionary_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QuestionaryPage);
      /***/
    },

    /***/
    "mRT3":
    /*!***************************************!*\
      !*** ./src/app/queue/queue.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function mRT3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3F1ZXVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0YiLCJmaWxlIjoicXVldWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */";
      /***/
    },

    /***/
    "rDEf":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company-detail/company-detail.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function rDEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-button (click)=\"dismiss()\" fill=\"clear\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-button>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card-subtitle class=\"company-title\">{{company?.title}}</ion-card-subtitle>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-card-subtitle class=\"company-name\">{{company?.company}}</ion-card-subtitle>\n      </ion-col>\n      <ion-col size=\"12\" class=\"company-info\">\n        <ion-card-subtitle class=\"company-date\">\n          {{company?.startDate.seconds * 1000 | date:'dd/MM/yyyy'}}\n        </ion-card-subtitle>\n        <ion-card-subtitle class=\"company-hour\">\n          {{company?.startDate.seconds * 1000 | date:'H:mm' }}-{{company?.endDate.seconds * 1000 | date:'H:mm' }}({{ company?.startDate.seconds * 1000 | date:'zzz':'locale' }})\n        </ion-card-subtitle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n\n<ion-content overflow-scroll=\"false\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label class=\"font-labels\">Mentor</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        {{company.mentor}}\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label class=\"font-labels\">Cargo</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        {{company.position}}\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label class=\"font-labels\">Tempo estimado de conversa</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        10 minutos\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label class=\"font-labels\">Vagas restantes</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        3 vagas\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label class=\"font-labels\">Link da empresa</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <a href=\"{{company.link}}\" target=\"_blank\" style=\"color: white;\">{{company.link}}</a>\n      </ion-col>\n    </ion-row>\n    <ion-col size=\"12\">\n      <ion-button expand=\"full\" color=\"warning\" size=\"large\" shape=\"round\" (click)=\"openAlertQuestions()\">Quero\n        participar!\n      </ion-button>\n    </ion-col>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "rWyk":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function rWyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background: #8800D6;\n}\nion-header ion-toolbar {\n  --background: transparent;\n}\nion-header ion-back-button {\n  color: #FFFFFF !important;\n}\nion-header ion-title {\n  position: relative;\n  font-size: 1.5em;\n  margin: 0.35em auto;\n  color: #FFFFFF;\n  font-weight: bolder;\n  text-align: center;\n}\nion-content {\n  background-color: #8800D6 !important;\n}\nion-card-header {\n  background-color: #ffc409;\n}\n.empty-company-list {\n  display: table;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  overflow: hidden;\n  color: #FFFFFF;\n}\n.empty-company-list div {\n  display: table-cell;\n  vertical-align: middle;\n  font-weight: bolder;\n}\n.company-title {\n  color: black;\n  font-weight: bolder;\n  font-size: 20px;\n}\n.company-name {\n  color: black;\n  font-weight: normal;\n  font-size: 20px;\n}\n.company-info {\n  color: black;\n  font-weight: normal;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7QUFDUjtBQUVJO0VBQ0kseUJBQUE7QUFBUjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUlBO0VBQ0ksb0NBQUE7QUFESjtBQUdBO0VBQ0kseUJBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0oiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODgwMEQ2O1xuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBtYXJnaW46IDAuMzVlbSBhdXRvO1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgwMEQ2ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM0MDk7XG59XG5cbi5lbXB0eS1jb21wYW55LWxpc3Qge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcblxuICAgIGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgfVxufVxuLmNvbXBhbnktdGl0bGUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb21wYW55LW5hbWUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbXBhbnktaW5mbyB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */";
      /***/
    },

    /***/
    "t133":
    /*!****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function t133(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // Adapted from Chris Veness' SHA1 code at
      // http://www.movable-type.co.uk/scripts/sha1.html


      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;

          case 1:
            return x ^ y ^ z;

          case 2:
            return x & y ^ x & z ^ y & z;

          case 3:
            return x ^ y ^ z;
        }
      }

      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }

      function sha1(bytes) {
        var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
        var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

        if (typeof bytes === 'string') {
          var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

          bytes = [];

          for (var i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          // Convert Array-like to Array
          bytes = Array.prototype.slice.call(bytes);
        }

        bytes.push(0x80);
        var l = bytes.length / 4 + 2;
        var N = Math.ceil(l / 16);
        var M = new Array(N);

        for (var _i = 0; _i < N; ++_i) {
          var arr = new Uint32Array(16);

          for (var j = 0; j < 16; ++j) {
            arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
          }

          M[_i] = arr;
        }

        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

        for (var _i2 = 0; _i2 < N; ++_i2) {
          var W = new Uint32Array(80);

          for (var t = 0; t < 16; ++t) {
            W[t] = M[_i2][t];
          }

          for (var _t = 16; _t < 80; ++_t) {
            W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
          }

          var a = H[0];
          var b = H[1];
          var c = H[2];
          var d = H[3];
          var e = H[4];

          for (var _t2 = 0; _t2 < 80; ++_t2) {
            var s = Math.floor(_t2 / 20);
            var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }

          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }

        return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
      }
      /* harmony default export */


      __webpack_exports__["default"] = sha1;
      /***/
    },

    /***/
    "tmrb":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function tmrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "XOzS");
      /* harmony import */


      var _company_detail_company_detail_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../company-detail/company-detail.module */
      "fd/v");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"], _company_detail_company_detail_module__WEBPACK_IMPORTED_MODULE_8__["CompanyDetailPageModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "tysn":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function tysn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
       * Browser-compatible JavaScript MD5
       *
       * Modification of JavaScript MD5
       * https://github.com/blueimp/JavaScript-MD5
       *
       * Copyright 2011, Sebastian Tschan
       * https://blueimp.net
       *
       * Licensed under the MIT license:
       * https://opensource.org/licenses/MIT
       *
       * Based on
       * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
       * Digest Algorithm, as defined in RFC 1321.
       * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
       * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
       * Distributed under the BSD License
       * See http://pajhome.org.uk/crypt/md5 for more info.
       */


      function md5(bytes) {
        if (typeof bytes === 'string') {
          var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

          bytes = new Uint8Array(msg.length);

          for (var i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }

        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      /*
       * Convert an array of little-endian words to an array of bytes
       */


      function md5ToHexEncodedArray(input) {
        var output = [];
        var length32 = input.length * 32;
        var hexTab = '0123456789abcdef';

        for (var i = 0; i < length32; i += 8) {
          var x = input[i >> 5] >>> i % 32 & 0xff;
          var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
          output.push(hex);
        }

        return output;
      }
      /**
       * Calculate output length with padding and bit length
       */


      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      /*
       * Calculate the MD5 of an array of little-endian words, and a bit length.
       */


      function wordsToMd5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << len % 32;
        x[getOutputLength(len) - 1] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
          var olda = a;
          var oldb = b;
          var oldc = c;
          var oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }

        return [a, b, c, d];
      }
      /*
       * Convert an array bytes to an array of little-endian words
       * Characters >255 have their high-byte silently ignored.
       */


      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }

        var length8 = input.length * 8;
        var output = new Uint32Array(getOutputLength(length8));

        for (var i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
        }

        return output;
      }
      /*
       * Add integers, wrapping at 2^32. This uses 16-bit operations internally
       * to work around bugs in some JS interpreters.
       */


      function safeAdd(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xffff;
      }
      /*
       * Bitwise rotate a 32-bit number to the left.
       */


      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      /*
       * These functions implement the four basic operations the algorithm uses.
       */


      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }

      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }

      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }

      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      /* harmony default export */


      __webpack_exports__["default"] = md5;
      /***/
    },

    /***/
    "vCFk":
    /*!***************************************************!*\
      !*** ./src/app/questionary/questionary.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function vCFk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3F1ZXN0aW9uYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0YiLCJmaWxlIjoicXVlc3Rpb25hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */";
      /***/
    },

    /***/
    "xQqG":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function xQqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rng.js */
      "2Pgj");
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j"); // **`v1()` - Generate time-based UUID**
      //
      // Inspired by https://github.com/LiosK/UUID.js
      // and http://docs.python.org/library/uuid.html


      var _nodeId;

      var _clockseq; // Previous uuid creation time


      var _lastMSecs = 0;
      var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

      function v1(options, buf, offset) {
        var i = buf && offset || 0;
        var b = buf || new Array(16);
        options = options || {};
        var node = options.node || _nodeId;
        var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
        // specified.  We do this lazily to minimize issues related to insufficient
        // system entropy.  See #189

        if (node == null || clockseq == null) {
          var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

          if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }

          if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
          }
        } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
        // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
        // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
        // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


        var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
        // cycle to simulate higher resolution clock

        var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

        var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

        if (dt < 0 && options.clockseq === undefined) {
          clockseq = clockseq + 1 & 0x3fff;
        } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
        // time interval


        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
          nsecs = 0;
        } // Per 4.2.1.2 Throw error if too many uuids are requested


        if (nsecs >= 10000) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }

        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

        msecs += 12219292800000; // `time_low`

        var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
        b[i++] = tl >>> 24 & 0xff;
        b[i++] = tl >>> 16 & 0xff;
        b[i++] = tl >>> 8 & 0xff;
        b[i++] = tl & 0xff; // `time_mid`

        var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
        b[i++] = tmh >>> 8 & 0xff;
        b[i++] = tmh & 0xff; // `time_high_and_version`

        b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

        b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

        b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

        b[i++] = clockseq & 0xff; // `node`

        for (var n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }

        return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
      }
      /* harmony default export */


      __webpack_exports__["default"] = v1;
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map