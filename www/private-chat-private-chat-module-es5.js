(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["private-chat-private-chat-module"], {
    /***/
    "9O9r":
    /*!****************************************************!*\
      !*** ./src/app/profile-popover/profile-popover.ts ***!
      \****************************************************/

    /*! exports provided: ProfilePopoverComponent */

    /***/
    function O9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePopoverComponent", function () {
        return ProfilePopoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_popover_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile-popover.html */
      "usmq");
      /* harmony import */


      var _profile_popover_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-popover.scss */
      "e3xF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/firestore.service */
      "YWyl");
      /* harmony import */


      var _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../tab3/tab3.page */
      "IqiF");

      var ProfilePopoverComponent = /*#__PURE__*/function () {
        function ProfilePopoverComponent(popoverController, modalController, firestoreService) {
          _classCallCheck(this, ProfilePopoverComponent);

          this.popoverController = popoverController;
          this.modalController = modalController;
          this.firestoreService = firestoreService;
          this.user = {};
          this.uid = '';
          this.showButtons = true;
          this.defaul_image = '../../../assets/avatar.png';
        }

        _createClass(ProfilePopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (this.uid == this.firestoreService.getUID()) {
              this.showButtons = false;
            }

            if (this.username) {
              this.firestoreService.getUserInfo(this.uid).subscribe(function (it) {
                _this.user = it.data();
              });
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.popoverController.dismiss();
          }
        }, {
          key: "closeModalPromise",
          value: function closeModalPromise() {
            return this.popoverController.getTop();
          }
        }, {
          key: "openProfile",
          value: function openProfile() {
            this.modalController.create({
              component: _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"],
              componentProps: {
                user: Object.assign(this.user, {
                  userId: this.uid
                })
              }
            }).then(function (modal) {
              return modal.present();
            });
          }
        }]);

        return ProfilePopoverComponent;
      }();

      ProfilePopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]
        }];
      };

      ProfilePopoverComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        uid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        username: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      ProfilePopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'profile-popover',
        template: _raw_loader_profile_popover_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_popover_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePopoverComponent);
      /***/
    },

    /***/
    "CMDb":
    /*!*****************************************************!*\
      !*** ./src/app/private-chat/private-chat.module.ts ***!
      \*****************************************************/

    /*! exports provided: PrivateChatPageModule */

    /***/
    function CMDb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivateChatPageModule", function () {
        return PrivateChatPageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _private_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./private-chat.page */
      "m5VU");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _private_chat_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./private-chat-routing.module */
      "ETfA");

      var PrivateChatPageModule = function PrivateChatPageModule() {
        _classCallCheck(this, PrivateChatPageModule);
      };

      PrivateChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _private_chat_page__WEBPACK_IMPORTED_MODULE_6__["PrivateChatPage"]
        }]), _private_chat_routing_module__WEBPACK_IMPORTED_MODULE_8__["PrivateChatPageRoutingModule"]],
        declarations: [_private_chat_page__WEBPACK_IMPORTED_MODULE_6__["PrivateChatPage"]]
      })], PrivateChatPageModule);
      /***/
    },

    /***/
    "ETfA":
    /*!*************************************************************!*\
      !*** ./src/app/private-chat/private-chat-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: PrivateChatPageRoutingModule */

    /***/
    function ETfA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivateChatPageRoutingModule", function () {
        return PrivateChatPageRoutingModule;
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


      var _private_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./private-chat.page */
      "m5VU");

      var routes = [{
        path: '',
        component: _private_chat_page__WEBPACK_IMPORTED_MODULE_3__["PrivateChatPage"]
      }];

      var PrivateChatPageRoutingModule = function PrivateChatPageRoutingModule() {
        _classCallCheck(this, PrivateChatPageRoutingModule);
      };

      PrivateChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrivateChatPageRoutingModule);
      /***/
    },

    /***/
    "OR+h":
    /*!*****************************************************!*\
      !*** ./src/app/private-chat/private-chat.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ORH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background: #ffc409;\n}\nion-header ion-button {\n  --color: black;\n}\nion-header ion-row {\n  margin: 0 2vh 0 2vh;\n}\nion-content ion-row {\n  margin: 3vh 2vh 0 2vh;\n  color: #FFFFFF;\n}\nion-content ion-row ion-label {\n  font-weight: bold;\n}\n.company-title {\n  color: black;\n  font-weight: bolder;\n  font-size: 20px;\n}\n.company-name {\n  color: black;\n  font-weight: normal;\n  font-size: 20px;\n}\n.company-info {\n  color: black;\n  font-weight: normal;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n}\nion-content {\n  background-color: #8800D6 !important;\n  position: absolute;\n}\n.detail-grid {\n  height: 80%;\n  padding-right: 0;\n}\n.detail-grid ion-row {\n  height: 100%;\n}\n.detail-grid ion-row ion-col {\n  padding: 5px 0px;\n  line-height: 3.5em;\n}\n.detail-name {\n  font-size: 1.5em;\n  color: white;\n  font-weight: bolder;\n  padding-left: 15px;\n  vertical-align: middle;\n}\n.font-small {\n  font-size: 1.2em;\n}\n.line-small {\n  line-height: 2em !important;\n  margin: auto;\n}\n.left-detail {\n  font-size: 14px;\n  color: white;\n  bottom: 15px;\n}\n.right-detail {\n  font-size: 16px;\n  color: white;\n  bottom: 20px;\n  right: 5px;\n  font-weight: bolder;\n}\n.right-detail fa-icon {\n  margin-right: 10px;\n}\n.container {\n  position: absolute;\n  height: -webkit-calc(100% - 170px);\n  width: 100%;\n  overflow-y: auto;\n  bottom: 60px;\n}\n.main {\n  height: 100%;\n}\n.chat > div > div {\n  display: flex;\n  flex-direction: column;\n  color: black;\n}\n.chat > div > div .me {\n  position: relative;\n  margin: 20px 10px 0px;\n  max-width: 80%;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 0px;\n  background: #ffc409;\n  color: black;\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat > div > div .you {\n  position: relative;\n  margin: 20px 10px 0px;\n  max-width: 80%;\n  align-self: flex-start;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 15px 0px;\n  background: #4F4F4F;\n  color: #FFFFFF;\n  font-size: medium;\n  line-height: 1.4;\n}\n.chat > div > div .you .name {\n  font-size: small;\n  font-weight: bold;\n}\n.message-day {\n  margin: 20px auto 0px auto;\n  position: relative;\n  width: 80%;\n  height: auto;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.7);\n  color: #555555 !important;\n  line-height: 1.7;\n  border-radius: 20px;\n  border: 1px solid #555555;\n}\n.system-message {\n  margin: 20px auto 0px auto;\n  width: 80%;\n  height: auto;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.7);\n  color: #555555 !important;\n  line-height: 1.7;\n  border-radius: 20px;\n  border: 1px solid #555555;\n  position: relative;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n}\n.message-detail {\n  font-size: 12px;\n  float: right;\n  line-height: 1.9;\n  margin-left: 7px;\n}\n.button-col {\n  text-align: center;\n}\n.message-input {\n  height: 45px;\n  position: absolute;\n  bottom: 1px !important;\n  width: 100%;\n  background: white;\n  border-radius: 50px !important;\n  margin-bottom: 5px;\n  padding: 1px 20px 5px 20px;\n}\nion-button.btn-send {\n  font-size: 12px;\n  border-radius: 50px !important;\n  width: 45px;\n  height: 45px;\n  margin-bottom: 0px;\n  padding-bottom: 5px;\n}\n.btn-send > button {\n  border-radius: 50% !important;\n  width: 45px;\n  height: 45px;\n  font-size: 12px;\n}\n.btn-send:hover > button {\n  border-radius: 50% !important;\n  width: 45px;\n  height: 45px;\n  font-size: 12px;\n}\nion-footer {\n  bottom: 0;\n  position: relative;\n  max-height: 60px;\n}\nion-footer ion-toolbar {\n  --background: transparent;\n  max-height: 60px;\n}\nion-footer ion-toolbar ion-grid {\n  padding: 0;\n}\nion-thumbnail {\n  --border-radius: 50%;\n  --size: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByaXZhdGUtY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFLSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUZSO0FBSVE7RUFDSSxpQkFBQTtBQUZaO0FBT0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSko7QUFPQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjtBQU9BO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUpKO0FBT0E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0FBSko7QUFPQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUpKO0FBTUk7RUFDSSxZQUFBO0FBSlI7QUFNUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFKWjtBQVNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBTko7QUFTQTtFQUNJLGdCQUFBO0FBTko7QUFTQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQU5KO0FBU0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFOSjtBQVNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBTko7QUFRSTtFQUNJLGtCQUFBO0FBTlI7QUFZQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBVEo7QUFZQTtFQUNJLFlBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQVRKO0FBV0k7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQVlJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVlI7QUFZUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFWWjtBQWVBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWko7QUFlQTtFQUNJLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUdBLHNCQUFBO0FBWko7QUFlQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVpKO0FBZUE7RUFDSSxrQkFBQTtBQVpKO0FBZUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQVpKO0FBZUE7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWVBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFaSjtBQWVBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFaSjtBQWVBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFaSjtBQWNJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQVpSO0FBY1E7RUFDSSxVQUFBO0FBWlo7QUFzQkE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFwQkoiLCJmaWxlIjoicHJpdmF0ZS1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmM0MDk7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1jb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgaW9uLXJvdyB7XG4gICAgICAgIG1hcmdpbjogMCAydmggMCAydmg7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIG1hcmdpbjogM3ZoIDJ2aCAwIDJ2aDtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29tcGFueS10aXRsZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY29tcGFueS1uYW1lIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb21wYW55LWluZm8ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODAwRDYgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kZXRhaWwtZ3JpZCB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgcGFkZGluZy1yaWdodDogMDtcblxuICAgIGlvbi1yb3cge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuNWVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGV0YWlsLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mb250LXNtYWxsIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ubGluZS1zbWFsbCB7XG4gICAgbGluZS1oZWlnaHQ6IDJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxlZnQtZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvdHRvbTogMTVweDtcbn1cblxuLnJpZ2h0LWRldGFpbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuXG4gICAgZmEtaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5cbi8vICoqKioqKioqKioqIENPTlRFTlQgKioqKioqKioqKiogLy9cblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSAxNzBweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBib3R0b206IDYwcHg7XG59XG5cbi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGF0PmRpdj5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogYmxhY2s7XG5cbiAgICAubWUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMjBweCAxMHB4IDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTBweCA3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmM0MDk7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgfVxuXG4gICAgLnlvdSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHggMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHggN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0RjRGNEY7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tZXNzYWdlLWRheSB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAwLjcpO1xuICAgIGNvbG9yOiAjNTU1NTU1ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG59XG5cbi5zeXN0ZW0tbWVzc2FnZSB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4IGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuNyk7XG4gICAgY29sb3I6ICM1NTU1NTUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTU1NTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1lc3NhZ2UtZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjk7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cblxuLmJ1dHRvbi1jb2wge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmc6IDFweCAyMHB4IDVweCAyMHB4O1xufVxuXG5pb24tYnV0dG9uLmJ0bi1zZW5kIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmJ0bi1zZW5kPmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi1zZW5kOmhvdmVyPmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuXG4gICAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiA2MHB4O1xuXG4gICAgICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgICAgICAvLyBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXNpemU6IDY0cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "OXyP":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/private-chat/private-chat.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function OXyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-button (click)=\"gotoChats()\" fill=\"clear\">\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\n  </ion-button>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card-subtitle class=\"company-title\">\n          {{chat?.data?.counterName | slice:0:25}}{{chat?.data?.counterName?.length > 25? '...':''}}\n        </ion-card-subtitle>\n      </ion-col>\n      <ion-col size=\"12\" class=\"company-info\">\n        <ion-card-subtitle class=\"company-date\">\n          {{chat?.data?.date.seconds * 1000 | date:'dd/MM/yyyy'}}\n        </ion-card-subtitle>\n        <ion-card-subtitle class=\"company-hour\">\n          {{chat?.data?.date.seconds * 1000 | date:'H:mm' }}({{chat?.data?.date.seconds * 1000 | date:'zzz':'locale' }})\n        </ion-card-subtitle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content #chatContent fullscreen [style.background-size]=\"mobWidth + ' ' + mobHeight\">\n  <div class=\"container\" id=\"chatcontainer\" #chatcontainer>\n    <div class=\"main\" id=\"chatlist\" #chatlist>\n      <div class=\"chat\" *ngFor=\"let message of chat?.data.messages; let i = index\">\n\n        <!-- TAG FOR DAYS -->\n        <div class=\"message-day\" *ngIf=\"!sameDay(chat?.data.messages[i-1], message)\">\n          {{message.timestamp.seconds * 1000 | date:'EEEE, MMMM d, y'}}\n        </div>\n\n        <!-- TEXT MESSAGES -->\n        <div [ngSwitch]=\"message.type\">\n          <div *ngSwitchCase=\"'text'\">\n            <div class=\"me\" *ngIf=\"message.user == chat?.user.id\">\n              {{message.data}}<br *ngIf=\"message.data.length > 20\">\n              <span class=\"message-detail\">{{message.timestamp.seconds * 1000 | date:'H:mm'}}</span>\n            </div>\n            <div class=\"you\" *ngIf=\"message.user != chat?.user.id\" (click)=\"openUserInfo($event,message)\">\n              <span class=\"name\">{{message.userName? message.userName : message.user }}</span><br>\n              {{message.data}}<br *ngIf=\"message.data.length > 20\">\n              <span class=\"message-detail\">{{message.timestamp.seconds * 1000 | date:'H:mm'}}</span>\n            </div>\n          </div>\n\n          <!-- ENTER ROOM -->\n          <div *ngSwitchCase=\"'enter-room'\">\n            <div class=\"system-message\">\n              {{message.userName}} entrou\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"footer\">\n  <ion-toolbar transparent>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-textarea type=\"text\" class=\"message-input\" [(ngModel)]=\"msgInput\" name=\"msgInput\" id=\"msgInput\"\n            readonly=\"false\" placeholder=\"Escreva aqui...\" (keyup.enter)=\"sendMessage()\">\n          </ion-textarea>\n        </ion-col>\n        <ion-col class=\"button-col\" size=\"2\">\n          <ion-button color=\"warning\" class=\"btn-send\" (click)=\"sendMessage()\">\n            <ion-icon name=\"send\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "e3xF":
    /*!******************************************************!*\
      !*** ./src/app/profile-popover/profile-popover.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function e3xF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n}\n\nion-card-header {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUtcG9wb3Zlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLXBvcG92ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5pb24tcm93IHtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
      /***/
    },

    /***/
    "m5VU":
    /*!***************************************************!*\
      !*** ./src/app/private-chat/private-chat.page.ts ***!
      \***************************************************/

    /*! exports provided: PrivateChatPage */

    /***/
    function m5VU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivateChatPage", function () {
        return PrivateChatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_private_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./private-chat.page.html */
      "OXyP");
      /* harmony import */


      var _private_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./private-chat.page.scss */
      "OR+h");
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


      var _profile_popover_profile_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../profile-popover/profile-popover */
      "9O9r");
      /* harmony import */


      var _providers_chatData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../providers/chatData */
      "+cpU");
      /* harmony import */


      var _services_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/firestore.service */
      "YWyl");

      var PrivateChatPage = /*#__PURE__*/function () {
        function PrivateChatPage(chatData, firestoreService, modalCtrl, popoverController, router) {
          var _this2 = this;

          _classCallCheck(this, PrivateChatPage);

          this.chatData = chatData;
          this.firestoreService = firestoreService;
          this.modalCtrl = modalCtrl;
          this.popoverController = popoverController;
          this.router = router;
          this.messages = [];
          this.user = {};
          this.msgInput = "";
          this.users_loaded = [];
          this.userInfo = {};
          this.showInfo = false;
          this.mobHeight = window.screen.height + "px";
          this.mobWidth = window.screen.width + "px";
          this.firestoreService.getChatById(this.chatData.chatId).subscribe(function (chat) {
            _this2.chat = {
              data: chat,
              id: _this2.chatData.chatId,
              user: _this2.chatData.user
            };
          });
        }

        _createClass(PrivateChatPage, [{
          key: "sendMessage",
          value: function sendMessage() {
            var sendData = {
              data: null,
              type: null
            };
            var msg = this.msgInput;
            sendData = {
              data: msg,
              type: 'text'
            };

            if (sendData.data.length > 0) {
              this.firestoreService.sendMessage(this.chatData.user, this.chat.id, sendData, this.chat);
              this.msgInput = '';
            }
          }
        }, {
          key: "createAutoScroll",
          value: function createAutoScroll() {
            var observer = new MutationObserver(function (mutationRecords, observer) {
              var obj = document.getElementById('chatcontainer');
              obj.scrollTop = obj.scrollHeight;
              var obj2 = document.getElementById('chatlist');
              obj2.scrollTop = obj2.scrollHeight;
            });
            var target = document.getElementById("chatlist");
            var config = {
              childList: true,
              subtree: true,
              attributes: true,
              characterData: true
            };
            observer.observe(target, config);
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            var obj2 = document.getElementById('chatlist');
            obj2.scrollTop = obj2.scrollHeight;
          }
        }, {
          key: "sameDay",
          value: function sameDay(d1, d2) {
            if (d1 !== undefined && d2 !== undefined) {
              var date1 = new Date(d1.timestamp.seconds * 1000);
              var date2 = new Date(d2.timestamp.seconds * 1000);
              if (date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth()) return date1.getDay() === date2.getDay();else if (date1.getFullYear() === 12 && date2.getFullYear() === 1 && date1.getMonth() === 12 && date2.getMonth() === 1 && date1.getDay() === 31 && date2.getDay() === 1) {
                return false;
              }
              return false;
            }

            return true;
          }
        }, {
          key: "openUserInfo",
          value: function openUserInfo(event, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.popoverController.create({
                        component: _profile_popover_profile_popover__WEBPACK_IMPORTED_MODULE_6__["ProfilePopoverComponent"],
                        event: event,
                        componentProps: {
                          username: message.userName,
                          uid: message.user
                        }
                      }).then(function (popover) {
                        return popover.present();
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "gotoChats",
          value: function gotoChats() {
            this.router.navigate(['/tabs/tab2']);
          }
        }]);

        return PrivateChatPage;
      }();

      PrivateChatPage.ctorParameters = function () {
        return [{
          type: _providers_chatData__WEBPACK_IMPORTED_MODULE_7__["ChatData"]
        }, {
          type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      PrivateChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-private-chat',
        template: _raw_loader_private_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_private_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PrivateChatPage);
      /***/
    },

    /***/
    "usmq":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-popover/profile-popover.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function usmq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card>\n    <!-- <img style=\"max-height: 200px; overflow: hidden;\"\n        [src]=\"user.profile_picture ? user.profile_picture : defaul_image\" /> -->\n    <ion-card-header>\n        <ion-card-subtitle>\n            <h5>{{username}}</h5>\n        </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-chip (click)=\"openProfile()\" outline color=\"primary\">\n                    <ion-icon name=\"person\"></ion-icon>\n                    <ion-label>Perfil</ion-label>\n                </ion-chip>\n            </ion-col>\n        </ion-row>\n    </ion-card-content>\n</ion-card>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=private-chat-private-chat-module-es5.js.map