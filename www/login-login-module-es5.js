(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(angularFire, formBuilder, router) {
          _classCallCheck(this, LoginPage);

          this.angularFire = angularFire;
          this.formBuilder = formBuilder;
          this.router = router;
          this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            this.signInWithEmail(this.form.value).then(function (res) {
              console.log("res", res);
              var user = {
                uid: res.uid,
                email: res.email
              }; // this.storage.setItem('actualUser', JSON.stringify(user));

              _this.router.navigate(['/tabs']);
            })["catch"](function (error) {
              console.log("error", error); // this.storage.setItem('actualUser', null);
            });
          }
        }, {
          key: "signInWithEmail",
          value: function signInWithEmail(_ref) {
            var email = _ref.email,
                password = _ref.password;
            return this.angularFire.signInWithEmailAndPassword(email, password);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"section-one\">\n    <img src=\"../../assets/images/logo.png\">\n    <p>em dias melhores</p>\n  </div>\n\n  <div class=\"section-two\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <ion-list lines=\"none\">\n        <span class=\"label\">Email</span>\n        <ion-item lines=“none”>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <span class=\"label\">Senha</span>\n        <ion-item lines=“none” class=\"no-lines\">\n          <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-button class=\"login\" color=\"light\" expand=\"block\" fill=\"outline\" size=\"large\" (click)=\"login()\"\n        [disabled]=\"!form.valid\">\n        Acessar\n      </ion-button>\n    </form>\n  </div>\n\n  <div class=\"section-three\">\n    <p class=\"social-login\">ou acesse com</p>\n    <ion-button class=\"google\" expand=\"block\" fill=\"solid\">\n      <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n      Google\n    </ion-button>\n    <ion-button class=\"facebook\" expand=\"block\" fill=\"solid\">\n      <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n      Facebook\n    </ion-button>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ../tabs/tabs.module */
          "hO9l")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('login-bg.png') no-repeat 52% center/cover;\n  font-family: Montserrat;\n}\n\n.section-one {\n  height: 25vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.section-one img {\n  width: 40vw;\n}\n\n.section-one p {\n  font-size: 16px;\n  color: white;\n}\n\n.section-two {\n  height: 45vh;\n  padding: 0 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-two ion-list {\n  background: transparent;\n  width: 100%;\n}\n\n.section-two span.label {\n  color: white;\n  font-size: 14px;\n}\n\n.section-two ion-item {\n  margin-bottom: 20px;\n  --background: #ffffffaa;\n  --highlight-color-focused: none;\n}\n\n.section-two ion-button.login {\n  width: 100%;\n  --border-radius: 50px;\n}\n\n.section-three {\n  height: 30vh;\n  padding: 0 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.section-three p.social-login {\n  color: white;\n}\n\n.section-three ion-button {\n  width: 100%;\n  min-height: 50px;\n  --border-radius: 10px;\n  --color: white;\n}\n\n.section-three ion-button.google {\n  --background: #f82100;\n}\n\n.section-three ion-button.facebook {\n  --background: #1a21e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDREQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0FBQ1I7O0FBRUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0k7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFJSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRlI7O0FBS0k7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUFIUjs7QUFNSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQUpSOztBQVFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBT0k7RUFDSSxZQUFBO0FBTFI7O0FBUUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFOUjs7QUFRUTtFQUNJLHFCQUFBO0FBTlo7O0FBU1E7RUFDSSxxQkFBQTtBQVBaIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tYmcucG5nXCIpIG5vLXJlcGVhdCA1MiUgY2VudGVyL2NvdmVyO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xufVxuXG4uc2VjdGlvbi1vbmUge1xuICAgIGhlaWdodDogMjV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLnNlY3Rpb24tdHdvIHtcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgcGFkZGluZzogMCA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgc3Bhbi5sYWJlbCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmYWE7XG4gICAgICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IG5vbmU7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbi5sb2dpbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgfVxufVxuXG4uc2VjdGlvbi10aHJlZSB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHBhZGRpbmc6IDAgNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHAuc29jaWFsLWxvZ2luIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAmLmdvb2dsZSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmODIxMDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZhY2Vib29rIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzFhMjFlMztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map