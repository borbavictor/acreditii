(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firestore.service */ "YWyl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let Tab3Page = class Tab3Page {
    constructor(router, firestoreService, formBuilder, toastController) {
        this.router = router;
        this.firestoreService = firestoreService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.userInfo = {};
        this.showInfo = false;
        this.avatarImage = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
        this.userForm = this.formBuilder.group({
            birthDate: [null],
            linkedin: [''],
            instagram: [''],
            facebook: [''],
            twitter: [''],
            bio: [''],
        });
    }
    ionViewWillEnter() {
        this.firestoreService.getUserInfo().subscribe(user => {
            this.user = user.data();
            this.userForm.patchValue(this.user);
            if (this.user && this.user.imgUrl && this.user.imgUrl.length)
                this.avatarImage = this.user.imgUrl;
        });
    }
    update() {
        this.firestoreService.updateUser(this.userForm.value);
        this.presentToast();
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'As alterações foram salvas',
                duration: 3000,
                color: 'success',
                position: 'top'
            });
            toast.present();
        });
    }
    logoff() {
        this.router.navigate(['/login']);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Perfil</ion-title>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content overflow-scroll=\"false\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"update()\">\n    <ion-item lines=\"none\">\n      <ion-avatar slot=\"start\" style=\"zoom: 2.0; margin-right: 5px;\">\n        <img [src]=\"avatarImage\">\n      </ion-avatar>\n      <ion-label>\n        <h2 class=\"user-name\">{{user?.name}}</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-card style=\"border: none; width: 100%; margin: 0px;\">\n      <ion-card-content class=\"shadow-card \">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item class=\"style-item\" lines=\"none\">\n              <ion-datetime slot=\"end\" formControlName=\"birthDate\"></ion-datetime>\n              <ion-label class=\"font-labels\">Data de Nascimento</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item class=\"style-item\" lines=\"none\">\n              <ion-label class=\"font-labels\">\n                <ion-icon name=\"logo-linkedin\" style=\"zoom:2.0;\"></ion-icon>\n              </ion-label>\n              <ion-input formControlName=\"linkedin\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item class=\"style-item\" lines=\"none\">\n              <ion-label class=\"font-labels\">\n                <ion-icon name=\"logo-instagram\" style=\"zoom:2.0;\"></ion-icon>\n              </ion-label>\n              <ion-input formControlName=\"instagram\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item class=\"style-item\" lines=\"none\">\n              <ion-label class=\"font-labels\">\n                <ion-icon name=\"logo-facebook\" style=\"zoom:2.0;\"></ion-icon>\n              </ion-label>\n              <ion-input formControlName=\"facebook\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item class=\"style-item\" lines=\"none\">\n              <ion-label class=\"font-labels\">\n                <ion-icon name=\"logo-twitter\" style=\"zoom:2.0;\"></ion-icon>\n              </ion-label>\n              <ion-input formControlName=\"twitter\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item class=\"style-item\" lines=\"none\">\n              <ion-label class=\"font-labels\">\n                Bio\n              </ion-label>\n              <ion-textarea formControlName=\"bio\" rows=\"4\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button style=\"border-radius: 30px;\" expand=\"block\" color=\"success\" (click)=\"update()\">\n              Salvar\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button expand=\"block\" color=\"danger\" style=\"border-radius: 30px;\" (click)=\"logoff()\">\n              Sair\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: #8800D6;\n}\nion-header ion-toolbar {\n  --background: transparent;\n  --border-width: 0px;\n}\nion-header ion-back-button {\n  color: #FFFFFF !important;\n}\nion-header ion-buttons {\n  position: absolute;\n  right: 1em;\n  color: #FFFFFF;\n}\nion-header ion-title {\n  position: relative;\n  font-size: 2em;\n  margin: 0.35em auto;\n  color: #FFFFFF;\n  font-weight: bolder;\n  text-align: center;\n}\nion-buttons button {\n  background: none;\n}\n.profile-font {\n  font: 38px bold;\n  font-family: Circular;\n}\n.font-info {\n  font-size: 12px;\n  font-weight: bold;\n  color: #d1dddf;\n}\n.style-item {\n  background-color: #F8F8F8;\n  --background: #F8F8F8;\n  border-radius: 30px;\n}\n.font-labels {\n  font-size: 12px;\n}\nbutton {\n  background: none !important;\n}\n.select-text {\n  font-size: 14px !important;\n}\n.user-name {\n  font-size: 1.2em;\n  font-weight: bold;\n  color: white;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSx5QkFBQTtBQUFSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRFI7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQW1CQTtFQUNJLGdCQUFBO0FBaEJKO0FBbUJBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBaEJKO0FBbUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWhCSjtBQW1CQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWhCSjtBQW1CQTtFQUNJLGVBQUE7QUFoQko7QUFtQkE7RUFDSSwyQkFBQTtBQWhCSjtBQW1CQTtFQUNJLDBCQUFBO0FBaEJKO0FBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWhCSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM4ODAwRDY7XG5cbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgfVxuXG4gICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDFlbTtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgfVxuXG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgbWFyZ2luOiAwLjM1ZW0gYXV0bztcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi8vIGJ1dHRvbiB7XG4vLyBcdGlvbi1iYWRnZSB7XG4vLyBcdFx0cG9zaXRpb246IGFic29sdXRlO1xuLy8gXHRcdHRvcDogLTAuMnJlbTtcbi8vIFx0XHRyaWdodDogLTAuMnJlbTtcbi8vIFx0XHRvcGFjaXR5OiAwLjk7XG5cbi8vIFx0XHQmIH4gaW9uLWljb24ge1xuLy8gXHRcdFx0bWFyZ2luLXJpZ2h0OiAxLjJyZW07XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9XG5cbmlvbi1idXR0b25zIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnByb2ZpbGUtZm9udCB7XG4gICAgZm9udDogMzhweCBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBDaXJjdWxhcjtcbn1cblxuLmZvbnQtaW5mbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZDFkZGRmO1xufVxuXG4uc3R5bGUtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgICAtLWJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmZvbnQtbGFiZWxzIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map