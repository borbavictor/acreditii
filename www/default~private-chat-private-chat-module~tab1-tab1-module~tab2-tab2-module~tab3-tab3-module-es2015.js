(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~private-chat-private-chat-module~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"],{

/***/ "+cpU":
/*!***************************************!*\
  !*** ./src/app/providers/chatData.ts ***!
  \***************************************/
/*! exports provided: ChatData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatData", function() { return ChatData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ChatData = class ChatData {
    constructor() { }
};
ChatData.ctorParameters = () => [];
ChatData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatData);



/***/ }),

/***/ "5x/H":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "xo5E");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "I/3d":
/*!************************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
  \************************************************************************************/
/*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, USE_EMULATOR, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestore", function() { return AngularFirestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function() { return AngularFirestoreCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function() { return AngularFirestoreCollectionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function() { return AngularFirestoreDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function() { return AngularFirestoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function() { return ENABLE_PERSISTENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function() { return PERSISTENCE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_EMULATOR", function() { return USE_EMULATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "associateQuery", function() { return associateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChange", function() { return combineChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChanges", function() { return combineChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docChanges", function() { return docChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function() { return fromCollectionRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDocRef", function() { return fromDocRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return fromRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedChanges", function() { return sortedChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return validateEventsArray; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");









/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromRef.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */

function _fromRef(ref, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"]) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        let unsubscribe;
        if (scheduler != null) {
            scheduler.schedule((/**
             * @return {?}
             */
            () => {
                unsubscribe = ref.onSnapshot({ includeMetadataChanges: true }, subscriber);
            }));
        }
        else {
            unsubscribe = ref.onSnapshot({ includeMetadataChanges: true }, subscriber);
        }
        return (/**
         * @return {?}
         */
        () => {
            if (unsubscribe != null) {
                unsubscribe();
            }
        });
    }));
}
/**
 * @template R, T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromRef(ref, scheduler) {
    return _fromRef(ref, scheduler);
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromDocRef(ref, scheduler) {
    return fromRef(ref, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} __0
     * @return {?}
     */
    ([priorPayload, payload]) => {
        if (!payload.exists) {
            return { payload, type: 'removed' };
        }
        if (!(priorPayload === null || priorPayload === void 0 ? void 0 : priorPayload.exists)) {
            return { payload, type: 'added' };
        }
        return { payload, type: 'modified' };
    })));
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromCollectionRef(ref, scheduler) {
    return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'query' }))));
}

/**
 * @fileoverview added by tsickle
 * Generated from: collection/changes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Return a stream of document changes on a query. These results are not in sort order but in
 * order of occurence.
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
function docChanges(query, scheduler) {
    return fromCollectionRef(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} __0
     * @return {?}
     */
    ([priorAction, action]) => {
        /** @type {?} */
        const docChanges = action.payload.docChanges();
        /** @type {?} */
        const actions = docChanges.map((/**
         * @param {?} change
         * @return {?}
         */
        change => ({ type: change.type, payload: change })));
        // the metadata has changed from the prior emission
        if (priorAction && JSON.stringify(priorAction.payload.metadata) !== JSON.stringify(action.payload.metadata)) {
            // go through all the docs in payload and figure out which ones changed
            action.payload.docs.forEach((/**
             * @param {?} currentDoc
             * @param {?} currentIndex
             * @return {?}
             */
            (currentDoc, currentIndex) => {
                /** @type {?} */
                const docChange = docChanges.find((/**
                 * @param {?} d
                 * @return {?}
                 */
                d => d.doc.ref.isEqual(currentDoc.ref)));
                /** @type {?} */
                const priorDoc = priorAction === null || priorAction === void 0 ? void 0 : priorAction.payload.docs.find((/**
                 * @param {?} d
                 * @return {?}
                 */
                d => d.ref.isEqual(currentDoc.ref)));
                if (docChange && JSON.stringify(docChange.doc.metadata) === JSON.stringify(currentDoc.metadata) ||
                    !docChange && priorDoc && JSON.stringify(priorDoc.metadata) === JSON.stringify(currentDoc.metadata)) {
                    // document doesn't appear to have changed, don't log another action
                }
                else {
                    // since the actions are processed in order just push onto the array
                    actions.push({
                        type: 'modified',
                        payload: {
                            oldIndex: currentIndex,
                            newIndex: currentIndex,
                            type: 'modified',
                            doc: currentDoc
                        }
                    });
                }
            }));
        }
        return (/** @type {?} */ (actions));
    })));
}
/**
 * Return a stream of document changes on a query. These results are in sort order.
 * @template T
 * @param {?} query
 * @param {?} events
 * @param {?=} scheduler
 * @return {?}
 */
function sortedChanges(query, events, scheduler) {
    return docChanges(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
     * @param {?} current
     * @param {?} changes
     * @return {?}
     */
    (current, changes) => combineChanges(current, changes.map((/**
     * @param {?} it
     * @return {?}
     */
    it => it.payload)), events)), []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // cut down on unneed change cycles
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} changes
     * @return {?}
     */
    changes => changes.map((/**
     * @param {?} c
     * @return {?}
     */
    c => ((/** @type {?} */ ({ type: c.type, payload: c }))))))));
}
/**
 * Combines the total result set from the current set of changes from an incoming set
 * of changes.
 * @template T
 * @param {?} current
 * @param {?} changes
 * @param {?} events
 * @return {?}
 */
function combineChanges(current, changes, events) {
    changes.forEach((/**
     * @param {?} change
     * @return {?}
     */
    change => {
        // skip unwanted change types
        if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
        }
    }));
    return current;
}
/**
 * Splice arguments on top of a sliced array, to break top-level ===
 * this is useful for change-detection
 * @template T
 * @param {?} original
 * @param {?} start
 * @param {?} deleteCount
 * @param {...?} args
 * @return {?}
 */
function sliceAndSplice(original, start, deleteCount, ...args) {
    /** @type {?} */
    const returnArray = original.slice();
    returnArray.splice(start, deleteCount, ...args);
    return returnArray;
}
/**
 * Creates a new sorted array from a new change.
 * Build our own because we allow filtering of action types ('added', 'removed', 'modified') before scanning
 * and so we have greater control over change detection (by breaking ===)
 * @template T
 * @param {?} combined
 * @param {?} change
 * @return {?}
 */
function combineChange(combined, change) {
    switch (change.type) {
        case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {
                // Not sure why the duplicates are getting fired
            }
            else {
                return sliceAndSplice(combined, change.newIndex, 0, change);
            }
            break;
        case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                // When an item changes position we first remove it
                // and then add it's new position
                if (change.oldIndex !== change.newIndex) {
                    /** @type {?} */
                    const copiedArray = combined.slice();
                    copiedArray.splice(change.oldIndex, 1);
                    copiedArray.splice(change.newIndex, 0, change);
                    return copiedArray;
                }
                else {
                    return sliceAndSplice(combined, change.newIndex, 1, change);
                }
            }
            break;
        case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                return sliceAndSplice(combined, change.oldIndex, 1);
            }
            break;
    }
    return combined;
}

/**
 * @fileoverview added by tsickle
 * Generated from: collection/collection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} events
 * @return {?}
 */
function validateEventsArray(events) {
    if (!events || events.length === 0) {
        events = ['added', 'removed', 'modified'];
    }
    return events;
}
/**
 * AngularFirestoreCollection service
 *
 * This class creates a reference to a Firestore Collection. A reference and a query are provided in
 * in the constructor. The query can be the unqueried reference if no query is desired.The class
 * is generic which gives you type safety for data update methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionRef = firebase.firestore.collection('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
 *
 * // NOTE!: the updates are performed on the reference not the query
 * await fakeStock.add({ name: 'FAKE', price: 0.01 });
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollection {
    /**
     * The constructor takes in a CollectionReference and Query to provide wrapper methods
     * for data operations and data streaming.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query. See the AssociatedRefence type for details
     * on this implication.
     * @param {?} ref
     * @param {?} query
     * @param {?} afs
     */
    constructor(ref, query, afs) {
        this.ref = ref;
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        /** @type {?} */
        let source = docChanges(this.query, this.afs.schedulers.outsideAngular);
        if (events && events.length > 0) {
            source = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
             * @param {?} actions
             * @return {?}
             */
            actions => actions.filter((/**
             * @param {?} change
             * @return {?}
             */
            change => events.indexOf(change.type) > -1)))));
        }
        return source.pipe(
        // We want to filter out empty arrays, but always emit at first, so the developer knows
        // that the collection has been resolve; even if it's empty
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([prior, current]) => current.length > 0 || !prior)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([prior, current]) => current)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (options.idField) {
                return (/** @type {?} */ (Object.assign(Object.assign({}, (/** @type {?} */ (a.data()))), { [options.idField]: a.id })));
            }
            else {
                return a.data();
            }
        })))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
    /**
     * Add data to a collection reference.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query.
     * @param {?} data
     * @return {?}
     */
    add(data) {
        return this.ref.add(data);
    }
    /**
     * Create a reference to a single document in a collection.
     * @template T2
     * @param {?=} path
     * @return {?}
     */
    doc(path) {
        // TODO is there a better way to solve this type issue
        return new AngularFirestoreDocument((/** @type {?} */ (this.ref.doc(path))), this.afs);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: document/document.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreDocument service
 *
 * This class creates a reference to a Firestore Document. A reference is provided in
 * in the constructor. The class is generic which gives you type safety for data update
 * methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
 * await fakeStock.set({ name: 'FAKE', price: 0.01 });
 * fakeStock.valueChanges().map(snap => {
 *   if(snap.exists) return snap.data();
 *   return null;
 * }).subscribe(value => console.log(value));
 * // OR! Transform using Observable.from() and the data is unwrapped for you
 * Observable.from(fakeStock).subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreDocument {
    /**
     * The constructor takes in a DocumentReference to provide wrapper methods
     * for data operations, data streaming, and Symbol.observable.
     * @param {?} ref
     * @param {?} afs
     */
    constructor(ref, afs) {
        this.ref = ref;
        this.afs = afs;
    }
    /**
     * Create or overwrite a single document.
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    set(data, options) {
        return this.ref.set(data, options);
    }
    /**
     * Update some fields of a document without overwriting the entire document.
     * @param {?} data
     * @return {?}
     */
    update(data) {
        return this.ref.update(data);
    }
    /**
     * Delete a document.
     * @return {?}
     */
    delete() {
        return this.ref.delete();
    }
    /**
     * Create a reference to a sub-collection given a path and an optional query
     * function.
     * @template R
     * @param {?} path
     * @param {?=} queryFn
     * @return {?}
     */
    collection(path, queryFn) {
        /** @type {?} */
        const collectionRef = (/** @type {?} */ (this.ref.collection(path)));
        const { ref, query } = associateQuery(collectionRef, queryFn);
        return new AngularFirestoreCollection(ref, query, this.afs);
    }
    /**
     * Listen to snapshot updates from the document.
     * @return {?}
     */
    snapshotChanges() {
        /** @type {?} */
        const scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
        return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ({ payload }) => options.idField ? (/** @type {?} */ (Object.assign(Object.assign({}, payload.data()), { [options.idField]: payload.id }))) : payload.data())));
    }
    /**
     * Retrieve the document once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: collection-group/collection-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreCollectionGroup service
 *
 * This class holds a reference to a Firestore Collection Group Query.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionGroup = firebase.firestore.collectionGroup('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollectionGroup {
    /**
     * The constructor takes in a CollectionGroupQuery to provide wrapper methods
     * for data operations and data streaming.
     * @param {?} query
     * @param {?} afs
     */
    constructor(query, afs) {
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return docChanges(this.query, this.afs.schedulers.outsideAngular)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.filter((/**
         * @param {?} change
         * @return {?}
         */
        change => events.indexOf(change.type) > -1)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changes.length > 0)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        /** @type {?} */
        const fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
        return fromCollectionRefScheduled$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (options.idField) {
                return (/** @type {?} */ (Object.assign({ [options.idField]: a.id }, a.data())));
            }
            else {
                return a.data();
            }
        })))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: firestore.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The value of this token determines whether or not the firestore will have persistance enabled
 * @type {?}
 */
const ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
/** @type {?} */
const PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
/** @type {?} */
const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
/** @type {?} */
const USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.use-emulator');
/**
 * A utility methods for associating a collection reference with
 * a query.
 *
 * @template T
 * @param {?} collectionRef - A collection reference to query
 * @param {?=} queryFn - The callback to create a query
 *
 * Example:
 * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
 *  return ref.where('age', '<', 200);
 * });
 * @return {?}
 */
function associateQuery(collectionRef, queryFn = (/**
 * @param {?} ref
 * @return {?}
 */
ref => ref)) {
    /** @type {?} */
    const query = queryFn(collectionRef);
    /** @type {?} */
    const ref = collectionRef;
    return { query, ref };
}
/**
 * AngularFirestore Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for creating Collection and Reference services. These services can
 * then be used to do data updates and observable streams of the data.
 *
 * Example:
 *
 * import { Component } from '\@angular/core';
 * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
 * import { Observable } from 'rxjs/Observable';
 * import { from } from 'rxjs/observable';
 *
 * \@Component({
 *   selector: 'app-my-component',
 *   template: `
 *    <h2>Items for {{ (profile | async)?.name }}
 *    <ul>
 *       <li *ngFor="let item of items | async">{{ item.name }}</li>
 *    </ul>
 *    <div class="control-input">
 *       <input type="text" #itemname />
 *       <button (click)="addItem(itemname.value)">Add Item</button>
 *    </div>
 *   `
 * })
 * export class MyComponent implements OnInit {
 *
 *   // services for data operations and data streaming
 *   private readonly itemsRef: AngularFirestoreCollection<Item>;
 *   private readonly profileRef: AngularFirestoreDocument<Profile>;
 *
 *   // observables for template
 *   items: Observable<Item[]>;
 *   profile: Observable<Profile>;
 *
 *   // inject main service
 *   constructor(private readonly afs: AngularFirestore) {}
 *
 *   ngOnInit() {
 *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
 *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
 *     // this.items = from(this.itemsRef); // you can also do this with no mapping
 *
 *     this.profileRef = afs.doc('users/davideast');
 *     this.profile = this.profileRef.valueChanges();
 *   }
 *
 *   addItem(name: string) {
 *     const user = 'davideast';
 *     this.itemsRef.add({ name, user });
 *   }
 * }
 */
class AngularFirestore {
    /**
     * Each Feature of AngularFire has a FirebaseApp injected. This way we
     * don't rely on the main Firebase App instance and we can create named
     * apps and use multiple apps.
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} shouldEnablePersistence
     * @param {?} settings
     * @param {?} platformId
     * @param {?} zone
     * @param {?} persistenceSettings
     * @param {?} _useEmulator
     * @param {?} useAuthEmulator
     */
    constructor(options, nameOrConfig, shouldEnablePersistence, settings, 
    // tslint:disable-next-line:ban-types
    platformId, zone, persistenceSettings, _useEmulator, useAuthEmulator) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
        /** @type {?} */
        const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
        if (!firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].auth && useAuthEmulator) {
            Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵlogAuthEmulatorError"])();
        }
        /** @type {?} */
        const useEmulator = _useEmulator;
        [this.firestore, this.persistenceEnabled$] = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfetchInstance"])(`${app.name}.firestore`, 'AngularFirestore', app, (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const firestore = zone.runOutsideAngular((/**
             * @return {?}
             */
            () => app.firestore()));
            if (settings) {
                firestore.settings(settings);
            }
            if (useEmulator) {
                firestore.useEmulator(...useEmulator);
            }
            if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
                // We need to try/catch here because not all enablePersistence() failures are caught
                // https://github.com/firebase/firebase-js-sdk/issues/608
                /** @type {?} */
                const enablePersistence = (/**
                 * @return {?}
                 */
                () => {
                    try {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(firestore.enablePersistence(persistenceSettings || undefined).then((/**
                         * @return {?}
                         */
                        () => true), (/**
                         * @return {?}
                         */
                        () => false)));
                    }
                    catch (e) {
                        if (typeof console !== 'undefined') {
                            console.warn(e);
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                    }
                });
                return [firestore, zone.runOutsideAngular(enablePersistence)];
            }
            else {
                return [firestore, Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false)];
            }
        }), [settings, useEmulator, shouldEnablePersistence]);
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @param {?=} queryFn
     * @return {?}
     */
    collection(pathOrRef, queryFn) {
        /** @type {?} */
        let collectionRef;
        if (typeof pathOrRef === 'string') {
            collectionRef = (/** @type {?} */ (this.firestore.collection(pathOrRef)));
        }
        else {
            collectionRef = pathOrRef;
        }
        const { ref, query } = associateQuery(collectionRef, queryFn);
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreCollection(refInZone, query, this);
    }
    /**
     * Create a reference to a Firestore Collection Group based on a collectionId
     * and an optional query function to narrow the result
     * set.
     * @template T
     * @param {?} collectionId
     * @param {?=} queryGroupFn
     * @return {?}
     */
    collectionGroup(collectionId, queryGroupFn) {
        /** @type {?} */
        const queryFn = queryGroupFn || ((/**
         * @param {?} ref
         * @return {?}
         */
        ref => ref));
        /** @type {?} */
        const collectionGroup = (/** @type {?} */ (this.firestore.collectionGroup(collectionId)));
        return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @return {?}
     */
    doc(pathOrRef) {
        /** @type {?} */
        let ref;
        if (typeof pathOrRef === 'string') {
            ref = (/** @type {?} */ (this.firestore.doc(pathOrRef)));
        }
        else {
            ref = pathOrRef;
        }
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreDocument(refInZone, this);
    }
    /**
     * Returns a generated Firestore Document Id.
     * @return {?}
     */
    createId() {
        return this.firestore.collection('_').doc().id;
    }
}
AngularFirestore.ɵfac = function AngularFirestore_Factory(t) { return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE_SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"], 8)); };
/** @nocollapse */
AngularFirestore.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ENABLE_PERSISTENCE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SETTINGS,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [PERSISTENCE_SETTINGS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_EMULATOR,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"],] }] }
];
/** @nocollapse */ AngularFirestore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularFirestore_Factory() { return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PERSISTENCE_SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(USE_EMULATOR, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"], 8)); }, token: AngularFirestore, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ENABLE_PERSISTENCE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SETTINGS]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [PERSISTENCE_SETTINGS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_EMULATOR]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["USE_EMULATOR"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: firestore.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFirestoreModule {
    /**
     * Attempt to enable persistent storage, if possible
     * @param {?=} persistenceSettings
     * @return {?}
     */
    static enablePersistence(persistenceSettings) {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: ENABLE_PERSISTENCE, useValue: true },
                { provide: PERSISTENCE_SETTINGS, useValue: persistenceSettings },
            ]
        };
    }
}
AngularFirestoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFirestoreModule });
AngularFirestoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularFirestoreModule_Factory(t) { return new (t || AngularFirestoreModule)(); }, providers: [AngularFirestore] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFirestore]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DocumentSnapshotExists() { }
if (false) {}
/**
 * @record
 */
function DocumentSnapshotDoesNotExist() { }
if (false) {}
/**
 * @record
 * @template T
 */
function QueryDocumentSnapshot() { }
if (false) {}
/**
 * @record
 * @template T
 */
function QuerySnapshot() { }
if (false) {}
/**
 * @record
 * @template T
 */
function DocumentChange() { }
if (false) {}
/**
 * @record
 * @template T
 */
function DocumentChangeAction() { }
if (false) {}
/**
 * @record
 * @template T
 */
function Action() { }
if (false) {}
/**
 * @record
 * @template T
 */
function Reference() { }
if (false) {}
/**
 * A structure that provides an association between a reference
 * and a query on that reference. Note: Performing operations
 * on the reference can lead to confusing results with complicated
 * queries.
 *
 * Example:
 *
 * const query = ref.where('type', '==', 'Book').
 *                  .where('price', '>' 18.00)
 *                  .where('price', '<' 100.00)
 *                  .where('category', '==', 'Fiction')
 *                  .where('publisher', '==', 'BigPublisher')
 *
 * // This addition would not be a result of the query above
 * ref.add({
 *  type: 'Magazine',
 *  price: 4.99,
 *  category: 'Sports',
 *  publisher: 'SportsPublisher'
 * });
 * @record
 * @template T
 */
function AssociatedReference() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-firestore.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-firestore.js.map

/***/ }),

/***/ "PQV/":
/*!**********************************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/esm5/prebuilt-30db9a88-9b75cc8d.js ***!
  \**********************************************************************************/
/*! exports provided: G, K, L, U, W, X, Y, Z, a, b, c, d, e, f, i, j, n, q, r, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return xc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return Ac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return Tc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return Dc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return Cc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Lc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return qa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Mc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Ma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Gc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Uc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Bc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return jc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Sc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Ys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return Fc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return $; });
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/webchannel-wrapper */ "x7I3");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "O1h7");








/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _ = new _firebase_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"]("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function I() {
    return _.logLevel;
}

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function E(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (_.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].DEBUG) {
        var i = n.map(A);
        _.debug.apply(_, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ "Firestore (8.2.2): " + t ], i));
    }
}

function T(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (_.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].ERROR) {
        var i = n.map(A);
        _.error.apply(_, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ "Firestore (8.2.2): " + t ], i));
    }
}

function N(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (_.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].WARN) {
        var i = n.map(A);
        _.warn.apply(_, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ "Firestore (8.2.2): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function A(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function S(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (8.2.2) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw T(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function D(t, e) {
    t || S();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function x(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function k(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var O = /** @class */ function() {
    function t() {}
    return t.t = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = k(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function P(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function L(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function C(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var R = /** @class */ function() {
    function t(t) {
        this.i = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return t = this.i, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.i);
    }, t.prototype.o = function() {
        return 2 * this.i.length;
    }, t.prototype.u = function(t) {
        return P(this.i, t.i);
    }, t.prototype.isEqual = function(t) {
        return this.i === t.i;
    }, t;
}();

R.h = new R("");

var V = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, U = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Error), M = /** @class */ function() {
    /** @hideconstructor */
    function t(t) {
        this.l = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    return t.fromBase64String = function(e) {
        try {
            return new t(R.fromBase64String(e));
        } catch (e) {
            throw new U(V.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
        }
    }, 
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */
    t.fromUint8Array = function(e) {
        return new t(R.fromUint8Array(e));
    }, 
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */
    t.prototype.toBase64 = function() {
        return this.l.toBase64();
    }, 
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */
    t.prototype.toUint8Array = function() {
        return this.l.toUint8Array();
    }, 
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */
    t.prototype.toString = function() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }, 
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this.l.isEqual(t.l);
    }, t;
}(), q = function(t) {
    this._ = t;
};

/** An error returned by a Firestore operation. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function j() {
    if ("undefined" == typeof Uint8Array) throw new U(V.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function F() {
    if ("undefined" == typeof atob) throw new U(V.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/** Immutable class holding a blob (binary data) */ var z = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.fromBase64String = function(t) {
        return F(), new e(M.fromBase64String(t));
    }, e.fromUint8Array = function(t) {
        return j(), new e(M.fromUint8Array(t));
    }, e.prototype.toBase64 = function() {
        return F(), this._.toBase64();
    }, e.prototype.toUint8Array = function() {
        return j(), this._.toUint8Array();
    }, e.prototype.isEqual = function(t) {
        return this._.isEqual(t._);
    }, e.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, e;
}(q), G = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     */
function(t, e, n, r, i, o) {
    this.T = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, 
    this.I = o;
}, B = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "m", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t;
}(), K = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.A = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.R = function() {
        return this.A() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A user with a null UID. */ K.UNAUTHENTICATED = new K(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
K.P = new K("google-credentials-uid"), K.g = new K("first-party-uid");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var H = function(t, e) {
    this.user = e, this.type = "OAuth", this.V = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.V.Authorization = "Bearer " + t;
}, J = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.p = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.v = function() {}, t.prototype.S = function(t) {
        this.p = t, 
        // Fire with initial user.
        t(K.UNAUTHENTICATED);
    }, t.prototype.D = function() {
        this.p = null;
    }, t;
}(), W = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.C = null, 
        /** Tracks the current User. */
        this.currentUser = K.UNAUTHENTICATED, this.N = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.O = 0, 
        /** The listener registered with setChangeListener(). */
        this.p = null, this.forceRefresh = !1, this.C = function() {
            e.O++, e.currentUser = e.F(), e.N = !0, e.p && e.p(e.currentUser);
        }, this.O = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.C) : (
        // if auth is not available, invoke tokenListener once with null token
        this.C(null), t.get().then((function(t) {
            e.auth = t, e.C && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.C);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.O, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.O !== e ? (E("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (D("string" == typeof n.accessToken), new H(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.v = function() {
        this.forceRefresh = !0;
    }, t.prototype.S = function(t) {
        this.p = t, 
        // Fire the initial event
        this.N && t(this.currentUser);
    }, t.prototype.D = function() {
        this.auth && this.auth.removeAuthTokenListener(this.C), this.C = null, this.p = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.F = function() {
        var t = this.auth && this.auth.getUid();
        return D(null === t || "string" == typeof t), new K(t);
    }, t;
}(), Q = /** @class */ function() {
    function t(t, e) {
        this.k = t, this.M = e, this.type = "FirstParty", this.user = K.g;
    }
    return Object.defineProperty(t.prototype, "V", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.M
            }, e = this.k.auth.getAuthHeaderValueForFirstParty([]);
            // Use array notation to prevent minification
                        return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Y = /** @class */ function() {
    function t(t, e) {
        this.k = t, this.M = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new Q(this.k, this.M));
    }, t.prototype.S = function(t) {
        // Fire with initial uid.
        t(K.g);
    }, t.prototype.D = function() {}, t.prototype.v = function() {}, t;
}(), X = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.L = function(t) {
            return n.$(t);
        }, this.B = function(t) {
            return e.q(t);
        });
    }
    return t.prototype.$ = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.B && this.B(t), t;
    }, t;
}();

/** A CredentialsProvider that always yields an empty token. */ X.U = -1;

/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * @see https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto
 */
var $ = /** @class */ function() {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new U(V.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new U(V.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new U(V.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new U(V.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    return t.now = function() {
        return t.fromMillis(Date.now());
    }, 
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */
    t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, 
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */
    t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, 
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
     * a loss of precision since `Date` objects only support millisecond precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */
    t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, 
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.K = function(t) {
        return this.seconds === t.seconds ? P(this.nanoseconds, t.nanoseconds) : P(this.seconds, t.seconds);
    }, 
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.toJSON = function() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }, 
    /**
     * Converts this object to a primitive string, which allows Timestamp objects to be compared
     * using the `>`, `<=`, `>=` and `>` operators.
     */
    t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), Z = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.j = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new $(0, 0));
    }, t.prototype.u = function(t) {
        return this.timestamp.K(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.W = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.G = function() {
        return this.timestamp;
    }, t;
}(), tt = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && S(), void 0 === n ? n = t.length - e : n > t.length - e && S(), 
        this.segments = t, this.offset = e, this.H = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.H;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.J(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.Y(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.X = function(t) {
        return t = void 0 === t ? 1 : t, this.Y(this.segments, this.offset + t, this.length - t);
    }, t.prototype.Z = function() {
        return this.Y(this.segments, this.offset, this.length - 1);
    }, t.prototype.tt = function() {
        return this.segments[this.offset];
    }, t.prototype.et = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.nt = function() {
        return 0 === this.length;
    }, t.prototype.st = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.it = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.rt = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.J = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), et = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Y = function(t, n, r) {
        return new e(t, n, r);
    }, e.prototype.ot = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.rt().join("/");
    }, e.prototype.toString = function() {
        return this.ot();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */
    e.ct = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
                for (var r = [], i = 0, o = t; i < o.length; i++) {
            var u = o[i];
            if (u.indexOf("//") >= 0) throw new U(V.INVALID_ARGUMENT, "Invalid segment (" + u + "). Paths must not contain // in them.");
            // Strip leading and traling slashed.
                        r.push.apply(r, u.split("/").filter((function(t) {
                return t.length > 0;
            })));
        }
        return new e(r);
    }, e.at = function() {
        return new e([]);
    }, e;
}(tt), nt = /^[_a-zA-Z][_a-zA-Z0-9]*$/, rt = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Y = function(t, n, r) {
        return new e(t, n, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    e.ut = function(t) {
        return nt.test(t);
    }, e.prototype.ot = function() {
        return this.rt().map((function(t) {
            return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), e.ut(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, e.prototype.toString = function() {
        return this.ot();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    e.prototype.ht = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    e.lt = function() {
        return new e([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    e._t = function(t) {
        for (var n = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new U(V.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            n.push(r), r = "";
        }, u = !1; i < t.length; ) {
            var s = t[i];
            if ("\\" === s) {
                if (i + 1 === t.length) throw new U(V.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new U(V.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === s ? (u = !u, i++) : "." !== s || u ? (r += s, i++) : (o(), i++);
        }
        if (o(), u) throw new U(V.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new e(n);
    }, e.at = function() {
        return new e([]);
    }, e;
}(tt), it = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.ft = function(e) {
        return new t(et.ct(e));
    }, t.dt = function(e) {
        return new t(et.ct(e).X(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.wt = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === et.J(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.J = function(t, e) {
        return et.J(t.path, e.path);
    }, t.Et = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */
    t.Tt = function(e) {
        return new t(new et(e.slice()));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function ut(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function st(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var at = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(rt.J)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.It = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].st(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return L(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), ct = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */
function ft(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (D(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = ct.exec(t);
        if (D(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: ht(t.seconds),
        nanos: ht(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function ht(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function lt(t) {
    return "string" == typeof t ? R.fromBase64String(t) : R.fromUint8Array(t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function pt(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ function dt(t) {
    var e = t.mapValue.fields.__previous_value__;
    return pt(e) ? dt(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function vt(t) {
    var e = ft(t.mapValue.fields.__local_write_time__.timestampValue);
    return new $(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Sentinel value that sorts before any Mutation Batch ID. */
/**
 * Returns whether a variable is either undefined or null.
 */ function yt(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function mt(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */ function gt(t) {
    return "number" == typeof t && Number.isInteger(t) && !mt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Extracts the backend's type order for the provided value. */ function wt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? pt(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : S();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function bt(t, e) {
    var n = wt(t);
    if (n !== wt(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return vt(t).isEqual(vt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = ft(t.timestampValue), r = ft(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return lt(t.bytesValue).isEqual(lt(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return ht(t.geoPointValue.latitude) === ht(e.geoPointValue.latitude) && ht(t.geoPointValue.longitude) === ht(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return ht(t.integerValue) === ht(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = ht(t.doubleValue), r = ht(e.doubleValue);
                return n === r ? mt(n) === mt(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return L(t.arrayValue.values || [], e.arrayValue.values || [], bt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (ot(n) !== ot(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !bt(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return S();
    }
}

function _t(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return bt(t, e);
    }));
}

function It(t, e) {
    var n = wt(t), r = wt(e);
    if (n !== r) return P(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return P(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = ht(t.integerValue || t.doubleValue), r = ht(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return Et(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Et(vt(t), vt(e));

      case 5 /* StringValue */ :
        return P(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = lt(t), r = lt(e);
            return n.u(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = P(n[i], r[i]);
                if (0 !== o) return o;
            }
            return P(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = P(ht(t.latitude), ht(e.latitude));
            return 0 !== n ? n : P(ht(t.longitude), ht(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = It(n[i], r[i]);
                if (o) return o;
            }
            return P(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var u = 0; u < r.length && u < o.length; ++u) {
                var s = P(r[u], o[u]);
                if (0 !== s) return s;
                var a = It(n[r[u]], i[o[u]]);
                if (0 !== a) return a;
            }
            return P(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw S();
    }
}

function Et(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return P(t, e);
    var n = ft(t), r = ft(e), i = P(n.seconds, r.seconds);
    return 0 !== i ? i : P(n.nanos, r.nanos);
}

function Tt(t) {
    return Nt(t);
}

function Nt(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        var e = ft(t);
        return "time(" + e.seconds + "," + e.nanos + ")";
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? lt(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    it.dt(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function(t) {
        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
            n ? n = !1 : e += ",", e += Nt(i[r]);
        }
        return e + "]";
    }(t.arrayValue) : "mapValue" in t ? function(t) {
        for (
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
            var o = i[r];
            n ? n = !1 : e += ",", e += o + ":" + Nt(t.fields[o]);
        }
        return e + "}";
    }(t.mapValue) : S();
    var e, n;
}

function At(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.ot()
    };
}

/** Returns true if `value` is an IntegerValue . */ function St(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function Dt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function xt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function kt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Ot(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ var Pt = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.nt()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!Ot(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.et()]) || null;
    }, t.prototype.isEqual = function(t) {
        return bt(this.proto, t.proto);
    }, t;
}(), Lt = /** @class */ function() {
    /**
     * @param baseObject - The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = Pt.empty()), this.At = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.Rt = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     * @returns The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.Pt(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     * @returns The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Pt(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Pt = function(t, e) {
        for (var n = this.Rt, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === wt(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.et(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.yt = function() {
        var t = this.gt(rt.at(), this.Rt);
        return null != t ? new Pt(t) : this.At;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath - The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays - The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @returns The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.gt = function(t, e) {
        var n = this, r = !1, i = this.At.field(t), o = Ot(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var u = n.gt(t.child(i), e);
                null != u && (o[i] = u, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */
/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function Ct(t) {
    var e = [];
    return ut(t.fields || {}, (function(t, n) {
        var r = new rt([ t ]);
        if (Ot(n)) {
            var i = Ct(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, u = i; o < u.length; o++) {
                var s = u[o];
                e.push(r.child(s));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new at(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var Rt = function(t, e) {
    this.key = t, this.version = e;
}, Vt = /** @class */ function(t) {
    function e(e, n, r, i) {
        var o = this;
        return (o = t.call(this, e, n) || this).Vt = r, o.bt = !!i.bt, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.field = function(t) {
        return this.Vt.field(t);
    }, e.prototype.data = function() {
        return this.Vt;
    }, e.prototype.vt = function() {
        return this.Vt.proto;
    }, e.prototype.isEqual = function(t) {
        return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.bt === t.bt && this.hasCommittedMutations === t.hasCommittedMutations && this.Vt.isEqual(t.Vt);
    }, e.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.Vt.toString() + ", {hasLocalMutations: " + this.bt + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
        get: function() {
            return this.bt || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), e;
}(Rt), Ut = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.isEqual = function(t) {
        return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, e;
}(Rt), Mt = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.isEqual = function(t) {
        return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, e;
}(Rt), qt = function(t, e, n, r, i, o, u) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = u, this.St = null;
};

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */
function jt(t, e, n, r, i, o, u) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), 
    new qt(t, e, n, r, i, o, u);
}

function Ft(t) {
    var e = x(t);
    if (null === e.St) {
        var n = e.path.ot();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.ot() + t.op.toString() + Tt(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Make this collision robust.
                return t.field.ot() + t.dir;
            }(t);
        })).join(","), yt(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += te(e.startAt)), e.endAt && (n += "|ub:", n += te(e.endAt)), e.St = n;
    }
    return e.St;
}

function zt(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!ne(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    i.op !== o.op || !i.field.isEqual(o.field) || !bt(i.value, o.value)) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!ie(t.startAt, e.startAt) && ie(t.endAt, e.endAt);
}

function Gt(t) {
    return it.Et(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

var Bt = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.create = function(t, n, r) {
        return t.ht() ? "in" /* IN */ === n || "not-in" /* NOT_IN */ === n ? this.Dt(t, n, r) : new Kt(t, n, r) : "array-contains" /* ARRAY_CONTAINS */ === n ? new Qt(t, r) : "in" /* IN */ === n ? new Yt(t, r) : "not-in" /* NOT_IN */ === n ? new Xt(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === n ? new $t(t, r) : new e(t, n, r);
    }, e.Dt = function(t, e, n) {
        return "in" /* IN */ === e ? new Ht(t, n) : new Jt(t, n);
    }, e.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.Ct(It(e, this.value)) : null !== e && wt(this.value) === wt(e) && this.Ct(It(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }, e.prototype.Ct = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return S();
        }
    }, e.prototype.xt = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }, e;
}((function() {}));

var Kt = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).key = it.dt(r.referenceValue), i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        var e = it.J(t.key, this.key);
        return this.Ct(e);
    }, e;
}(Bt), Ht = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, "in" /* IN */ , n) || this).keys = Wt("in" /* IN */ , n), 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, e;
}(Bt), Jt = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, "not-in" /* NOT_IN */ , n) || this).keys = Wt("not-in" /* NOT_IN */ , n), 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        return !this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, e;
}(Bt);

/** Filter that matches on key fields within an array. */ function Wt(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
        return it.dt(t.referenceValue);
    }));
}

/** A Filter that implements the array-contains operator. */ var Qt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        var e = t.field(this.field);
        return Dt(e) && _t(e.arrayValue, this.value);
    }, e;
}(Bt), Yt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "in" /* IN */ , n) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && _t(this.value.arrayValue, e);
    }, e;
}(Bt), Xt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "not-in" /* NOT_IN */ , n) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        if (_t(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        var e = t.field(this.field);
        return null !== e && !_t(this.value.arrayValue, e);
    }, e;
}(Bt), $t = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!Dt(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return _t(e.value.arrayValue, t);
        }));
    }, e;
}(Bt), Zt = function(t, e) {
    this.position = t, this.before = e;
};

/** A Filter that implements the IN operator. */ function te(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return Tt(t);
    })).join(",");
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var ee = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function ne(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function re(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], u = t.position[i];
        if (r = o.field.ht() ? it.J(it.dt(u.referenceValue), n.key) : It(u, n.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function ie(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!bt(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ var oe = 
/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
function(t, e, n, r, i, o /* First */ , u, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === u && (u = null), 
    void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.Nt = n, 
    this.filters = r, this.limit = i, this.limitType = o, this.startAt = u, this.endAt = s, 
    this.Ot = null, 
    // The corresponding `Target` of this `Query` instance.
    this.Ft = null, this.startAt, this.endAt;
};

/** Creates a new Query instance with the options provided. */ function ue(t, e, n, r, i, o, u, s) {
    return new oe(t, e, n, r, i, o, u, s);
}

/** Creates a new Query for a query that matches all documents at `path` */ function se(t) {
    return new oe(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function ae(t) {
    return !yt(t.limit) && "F" /* First */ === t.limitType;
}

function ce(t) {
    return !yt(t.limit) && "L" /* Last */ === t.limitType;
}

function fe(t) {
    return t.Nt.length > 0 ? t.Nt[0].field : null;
}

function he(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
        var r = n[e];
        if (r.xt()) return r.field;
    }
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */ function le(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function pe(t) {
    var e = x(t);
    if (null === e.Ot) {
        e.Ot = [];
        var n = he(e), r = fe(e);
        if (null !== n && null === r) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        n.ht() || e.Ot.push(new ee(n)), e.Ot.push(new ee(rt.lt(), "asc" /* ASCENDING */)); else {
            for (var i = !1, o = 0, u = e.Nt; o < u.length; o++) {
                var s = u[o];
                e.Ot.push(s), s.field.ht() && (i = !0);
            }
            if (!i) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var a = e.Nt.length > 0 ? e.Nt[e.Nt.length - 1].dir : "asc" /* ASCENDING */;
                e.Ot.push(new ee(rt.lt(), a));
            }
        }
    }
    return e.Ot;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function de(t) {
    var e = x(t);
    if (!e.Ft) if ("F" /* First */ === e.limitType) e.Ft = jt(e.path, e.collectionGroup, pe(e), e.filters, e.limit, e.startAt, e.endAt); else {
        for (
        // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = pe(e); r < i.length; r++) {
            var o = i[r], u = "desc" /* DESCENDING */ === o.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            n.push(new ee(o.field, u));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                var s = e.endAt ? new Zt(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new Zt(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
                e.Ft = jt(e.path, e.collectionGroup, n, e.filters, e.limit, s, a);
    }
    return e.Ft;
}

function ve(t, e, n) {
    return new oe(t.path, t.collectionGroup, t.Nt.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function ye(t, e) {
    return zt(de(t), de(e)) && t.limitType === e.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function me(t) {
    return Ft(de(t)) + "|lt:" + t.limitType;
}

function ge(t) {
    return "Query(target=" + function(t) {
        var e = t.path.ot();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.ot() + " " + e.op + " " + Tt(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        yt(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return function(t) {
                return t.field.ot() + " (" + t.dir + ")";
            }(t);
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + te(t.startAt)), t.endAt && (e += ", endAt: " + te(t.endAt)), 
        "Target(" + e + ")";
    }(de(t)) + "; limitType=" + t.limitType + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function we(t, e) {
    return function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.wt(t.collectionGroup) && t.path.st(n) : it.Et(t.path) ? t.path.isEqual(n) : t.path.it(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.Nt; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.ht() && null === e.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !re(t.startAt, pe(t), e)) && (!t.endAt || !re(t.endAt, pe(t), e));
    }(t, e);
}

function be(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = pe(t); i < o.length; i++) {
            var u = o[i], s = _e(u, e, n);
            if (0 !== s) return s;
            r = r || u.field.ht();
        }
        return 0;
    };
}

function _e(t, e, n) {
    var r = t.field.ht() ? it.J(e.key, n.key) : function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? It(r, i) : S();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return S();
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable set of metadata that the local store tracks for each target.
 */ var Ie = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , u) {
        void 0 === i && (i = Z.min()), void 0 === o && (o = Z.min()), void 0 === u && (u = R.h), 
        this.target = t, this.targetId = e, this.kt = n, this.sequenceNumber = r, this.Mt = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = u;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.Lt = function(e) {
        return new t(this.target, this.targetId, this.kt, e, this.Mt, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.$t = function(e, n) {
        return new t(this.target, this.targetId, this.kt, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.Bt = function(e) {
        return new t(this.target, this.targetId, this.kt, this.sequenceNumber, this.Mt, e, this.resumeToken);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function Ee(t, e) {
    if (t.qt) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: mt(e) ? "-0" : e
    };
}

/**
 * Returns an IntegerValue for `value`.
 */ function Te(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function Ne(t, e) {
    return gt(e) ? Te(e) : Ee(t, e);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Used to represent a field transform on a mutation. */ var Ae = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.Ut = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function Se(t, e, n) {
    return t instanceof ke ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof Oe ? Pe(t, e) : t instanceof Le ? Ce(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = xe(t, e), r = Ve(n) + Ve(t.Qt);
        return St(n) && St(t.Qt) ? Te(r) : Ee(t.Kt, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function De(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof Oe ? Pe(t, e) : t instanceof Le ? Ce(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function xe(t, e) {
    return t instanceof Re ? St(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var ke = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Ae), Oe = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Ae);

/** Transforms an array value via a union operation. */ function Pe(t, e) {
    for (var n = Ue(e), r = function(t) {
        n.some((function(e) {
            return bt(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var Le = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Ae);

function Ce(t, e) {
    for (var n = Ue(e), r = function(t) {
        n = n.filter((function(e) {
            return !bt(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var Re = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).Kt = e, r.Qt = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(Ae);

function Ve(t) {
    return ht(t.integerValue || t.doubleValue);
}

function Ue(t) {
    return Dt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ var Me = function(t, e) {
    this.field = t, this.transform = e;
};

/** The result of successfully applying a mutation to the backend. */
var qe = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be null if the mutation did not contain any field transforms.
     */
e) {
    this.version = t, this.transformResults = e;
}, je = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.jt = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Wt", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */
function Fe(t, e) {
    return void 0 !== t.updateTime ? e instanceof Vt && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof Vt;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ var ze = function() {};

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 * @returns The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function Ge(t, e, n) {
    return t instanceof We ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        var r = t.value;
        if (n.transformResults) {
            var i = Xe(t.fieldTransforms, e, n.transformResults);
            r = Ze(t.fieldTransforms, r, i);
        }
        return new Vt(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof Qe ? function(t, e, n) {
        if (!Fe(t.Gt, e)) 
        // Since the mutation was not rejected, we know that the precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Mt(t.key, n.version);
        var r = Ye(t, e, n.transformResults ? Xe(t.fieldTransforms, e, n.transformResults) : []);
        return new Vt(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new Ut(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc - The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function Be(t, e, n, r) {
    return t instanceof We ? function(t, e, n, r) {
        if (!Fe(t.Gt, e)) return e;
        var i = t.value, o = $e(t.fieldTransforms, n, e);
        i = Ze(t.fieldTransforms, i, o);
        var u = Je(e);
        return new Vt(t.key, u, i, {
            bt: !0
        });
    }(t, e, r) : t instanceof Qe ? function(t, e, n, r) {
        if (!Fe(t.Gt, e)) return e;
        var i = Je(e), o = Ye(t, e, $e(t.fieldTransforms, n, e));
        return new Vt(t.key, i, o, {
            bt: !0
        });
    }(t, e, r) : function(t, e) {
        return Fe(t.Gt, e) ? new Ut(t.key, Z.min()) : e;
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function Ke(t, e) {
    return function(t, e) {
        for (var n = null, r = 0, i = t; r < i.length; r++) {
            var o = i[r], u = e instanceof Vt ? e.field(o.field) : void 0, s = xe(o.transform, u || null);
            null != s && (n = null == n ? (new Lt).set(o.field, s) : n.set(o.field, s));
        }
        return n ? n.yt() : null;
    }(t.fieldTransforms, e);
}

function He(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Gt.isEqual(e.Gt) && !!function(t, e) {
        return void 0 === t && void 0 === e || !(!t || !e) && L(t, e, (function(t, e) {
            return function(t, e) {
                return t.field.isEqual(e.field) && function(t, e) {
                    return t instanceof Oe && e instanceof Oe || t instanceof Le && e instanceof Le ? L(t.elements, e.elements, bt) : t instanceof Re && e instanceof Re ? bt(t.Qt, e.Qt) : t instanceof ke && e instanceof ke;
                }(t.transform, e.transform);
            }(t, e);
        }));
    }(t.fieldTransforms, e.fieldTransforms) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ !== t.type || t.data.isEqual(e.data) && t.zt.isEqual(e.zt));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function Je(t) {
    return t instanceof Vt ? t.version : Z.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var We = /** @class */ function(t) {
    function e(e, n, r, i) {
        void 0 === i && (i = []);
        var o = this;
        return (o = t.call(this) || this).key = e, o.value = n, o.Gt = r, o.fieldTransforms = i, 
        o.type = 0 /* Set */ , o;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(ze), Qe = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        void 0 === o && (o = []);
        var u = this;
        return (u = t.call(this) || this).key = e, u.data = n, u.zt = r, u.Gt = i, u.fieldTransforms = o, 
        u.type = 1 /* Patch */ , u;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(ze);

function Ye(t, e, n) {
    var r;
    return r = function(t, e) {
        var n = new Lt(e);
        return t.zt.fields.forEach((function(e) {
            if (!e.nt()) {
                var r = t.data.field(e);
                null !== r ? n.set(e, r) : n.delete(e);
            }
        })), n.yt();
    }(t, r = e instanceof Vt ? e.data() : Pt.empty()), r = Ze(t.fieldTransforms, r, n);
}

function Xe(t, e, n) {
    var r = [];
    D(t.length === n.length);
    for (var i = 0; i < n.length; i++) {
        var o = t[i], u = o.transform, s = null;
        e instanceof Vt && (s = e.field(o.field)), r.push(De(u, s, n[i]));
    }
    return r;
}

/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param maybeDoc - The current state of the document after applying all
 *     previous mutations.
 * @param baseDoc - The document prior to applying this mutation batch.
 * @returns The transform results list.
 */ function $e(t, e, n, r) {
    for (var i = [], o = 0, u = t; o < u.length; o++) {
        var s = u[o], a = s.transform, c = null;
        n instanceof Vt && (c = n.field(s.field)), i.push(Se(a, c, e));
    }
    return i;
}

function Ze(t, e, n) {
    for (var r = new Lt(e), i = 0; i < t.length; i++) {
        var o = t[i];
        r.set(o.field, n[i]);
    }
    return r.yt();
}

/** A mutation that deletes the document at the given key. */ var tn, en, nn = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Gt = n, r.type = 2 /* Delete */ , r.fieldTransforms = [], 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(ze), rn = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.Gt = n, r.type = 3 /* Verify */ , r.fieldTransforms = [], 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(ze), on = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function un(t) {
    switch (t) {
      case V.OK:
        return S();

      case V.CANCELLED:
      case V.UNKNOWN:
      case V.DEADLINE_EXCEEDED:
      case V.RESOURCE_EXHAUSTED:
      case V.INTERNAL:
      case V.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case V.UNAUTHENTICATED:
        return !1;

      case V.INVALID_ARGUMENT:
      case V.NOT_FOUND:
      case V.ALREADY_EXISTS:
      case V.PERMISSION_DENIED:
      case V.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case V.ABORTED:
      case V.OUT_OF_RANGE:
      case V.UNIMPLEMENTED:
      case V.DATA_LOSS:
        return !0;

      default:
        return S();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function sn(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return T("GRPC error has no .code"), V.UNKNOWN;
    switch (t) {
      case tn.OK:
        return V.OK;

      case tn.CANCELLED:
        return V.CANCELLED;

      case tn.UNKNOWN:
        return V.UNKNOWN;

      case tn.DEADLINE_EXCEEDED:
        return V.DEADLINE_EXCEEDED;

      case tn.RESOURCE_EXHAUSTED:
        return V.RESOURCE_EXHAUSTED;

      case tn.INTERNAL:
        return V.INTERNAL;

      case tn.UNAVAILABLE:
        return V.UNAVAILABLE;

      case tn.UNAUTHENTICATED:
        return V.UNAUTHENTICATED;

      case tn.INVALID_ARGUMENT:
        return V.INVALID_ARGUMENT;

      case tn.NOT_FOUND:
        return V.NOT_FOUND;

      case tn.ALREADY_EXISTS:
        return V.ALREADY_EXISTS;

      case tn.PERMISSION_DENIED:
        return V.PERMISSION_DENIED;

      case tn.FAILED_PRECONDITION:
        return V.FAILED_PRECONDITION;

      case tn.ABORTED:
        return V.ABORTED;

      case tn.OUT_OF_RANGE:
        return V.OUT_OF_RANGE;

      case tn.UNIMPLEMENTED:
        return V.UNIMPLEMENTED;

      case tn.DATA_LOSS:
        return V.DATA_LOSS;

      default:
        return S();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (en = tn || (tn = {}))[en.OK = 0] = "OK", en[en.CANCELLED = 1] = "CANCELLED", 
en[en.UNKNOWN = 2] = "UNKNOWN", en[en.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
en[en.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", en[en.NOT_FOUND = 5] = "NOT_FOUND", 
en[en.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", en[en.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
en[en.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", en[en.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
en[en.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", en[en.ABORTED = 10] = "ABORTED", 
en[en.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", en[en.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
en[en.INTERNAL = 13] = "INTERNAL", en[en.UNAVAILABLE = 14] = "UNAVAILABLE", en[en.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var an = /** @class */ function() {
    function t(t, e) {
        this.J = t, this.root = e || fn.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.Ht = function(e, n) {
        return new t(this.J, this.root.Ht(e, n, this.J).copy(null, null, fn.Jt, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.J, this.root.remove(e, this.J).copy(null, null, fn.Jt, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.nt(); ) {
            var n = this.J(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.nt(); ) {
            var r = this.J(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.nt = function() {
        return this.root.nt();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.Yt = function() {
        return this.root.Yt();
    }, 
    // Returns the maximum key in the map.
    t.prototype.Xt = function() {
        return this.root.Xt();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.Zt = function(t) {
        return this.root.Zt(t);
    }, t.prototype.forEach = function(t) {
        this.Zt((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.Zt((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.te = function(t) {
        return this.root.te(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.ee = function() {
        return new cn(this.root, null, this.J, !1);
    }, t.prototype.ne = function(t) {
        return new cn(this.root, t, this.J, !1);
    }, t.prototype.se = function() {
        return new cn(this.root, null, this.J, !0);
    }, t.prototype.ie = function(t) {
        return new cn(this.root, t, this.J, !0);
    }, t;
}(), cn = /** @class */ function() {
    function t(t, e, n, r) {
        this.re = r, this.oe = [];
        for (var i = 1; !t.nt(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.re ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.oe.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.oe.push(t), t = this.re ? t.right : t.left;
        }
    }
    return t.prototype.ce = function() {
        var t = this.oe.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.re) for (t = t.left; !t.nt(); ) this.oe.push(t), t = t.right; else for (t = t.right; !t.nt(); ) this.oe.push(t), 
        t = t.left;
        return e;
    }, t.prototype.ae = function() {
        return this.oe.length > 0;
    }, t.prototype.ue = function() {
        if (0 === this.oe.length) return null;
        var t = this.oe[this.oe.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), fn = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.nt = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.Zt = function(t) {
        return this.left.Zt(t) || t(this.key, this.value) || this.right.Zt(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.te = function(t) {
        return this.right.te(t) || t(this.key, this.value) || this.left.te(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.nt() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.Yt = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.Xt = function() {
        return this.right.nt() ? this.key : this.right.Xt();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.Ht = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.Ht(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.Ht(t, e, n))).he();
    }, t.prototype.le = function() {
        if (this.left.nt()) return t.EMPTY;
        var e = this;
        return e.left._e() || e.left.left._e() || (e = e.fe()), (e = e.copy(null, null, null, e.left.le(), null)).he();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.nt() || i.left._e() || i.left.left._e() || (i = i.fe()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left._e() && (i = i.de()), i.right.nt() || i.right._e() || i.right.left._e() || (i = i.we()), 
            0 === n(e, i.key)) {
                if (i.right.nt()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.le());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.he();
    }, t.prototype._e = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.he = function() {
        var t = this;
        return t.right._e() && !t.left._e() && (t = t.Ee()), t.left._e() && t.left.left._e() && (t = t.de()), 
        t.left._e() && t.right._e() && (t = t.Te()), t;
    }, t.prototype.fe = function() {
        var t = this.Te();
        return t.right.left._e() && (t = (t = (t = t.copy(null, null, null, null, t.right.de())).Ee()).Te()), 
        t;
    }, t.prototype.we = function() {
        var t = this.Te();
        return t.left.left._e() && (t = (t = t.de()).Te()), t;
    }, t.prototype.Ee = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.de = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.Te = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.Ie = function() {
        var t = this.me();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.me = function() {
        if (this._e() && this.left._e()) throw S();
        if (this.right._e()) throw S();
        var t = this.left.me();
        if (t !== this.right.me()) throw S();
        return t + (this._e() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
fn.EMPTY = null, fn.RED = !0, fn.Jt = !1, 
// end LLRBEmptyNode
fn.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw S();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw S();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.Ht = function(t, e, n) {
        return new fn(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.nt = function() {
        return !0;
    }, t.prototype.Zt = function(t) {
        return !1;
    }, t.prototype.te = function(t) {
        return !1;
    }, t.prototype.Yt = function() {
        return null;
    }, t.prototype.Xt = function() {
        return null;
    }, t.prototype._e = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.Ie = function() {
        return !0;
    }, t.prototype.me = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var hn = /** @class */ function() {
    function t(t) {
        this.J = t, this.data = new an(this.J);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.Yt();
    }, t.prototype.last = function() {
        return this.data.Xt();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.Zt((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */ t.prototype.Ae = function(t, e) {
        for (var n = this.data.ne(t[0]); n.ae(); ) {
            var r = n.ce();
            if (this.J(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */
    t.prototype.Re = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.ne(e) : this.data.ee(); n.ae(); ) if (!t(n.ce().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Pe = function(t) {
        var e = this.data.ne(t);
        return e.ae() ? e.ce().key : null;
    }, t.prototype.ee = function() {
        return new ln(this.data.ee());
    }, t.prototype.ne = function(t) {
        return new ln(this.data.ne(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).Ht(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.nt = function() {
        return this.data.nt();
    }, t.prototype.ye = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.ee(), r = e.data.ee(); n.ae(); ) {
            var i = n.ce().key, o = r.ce().key;
            if (0 !== this.J(i, o)) return !1;
        }
        return !0;
    }, t.prototype.rt = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.J);
        return n.data = e, n;
    }, t;
}(), ln = /** @class */ function() {
    function t(t) {
        this.ge = t;
    }
    return t.prototype.ce = function() {
        return this.ge.ce().key;
    }, t.prototype.ae = function() {
        return this.ge.ae();
    }, t;
}(), pn = new an(it.J);

function dn() {
    return pn;
}

function vn() {
    return dn();
}

var yn = new an(it.J);

function mn() {
    return yn;
}

var gn = new an(it.J);

function wn() {
    return gn;
}

var bn = new hn(it.J);

function _n() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = bn, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var In = new hn(P);

function En() {
    return In;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var Tn = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.J = t ? function(e, n) {
            return t(e, n) || it.J(e.key, n.key);
        } : function(t, e) {
            return it.J(t.key, e.key);
        }, this.Ve = mn(), this.pe = new an(this.J)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.be = function(e) {
        return new t(e.J);
    }, t.prototype.has = function(t) {
        return null != this.Ve.get(t);
    }, t.prototype.get = function(t) {
        return this.Ve.get(t);
    }, t.prototype.first = function() {
        return this.pe.Yt();
    }, t.prototype.last = function() {
        return this.pe.Xt();
    }, t.prototype.nt = function() {
        return this.pe.nt();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.Ve.get(t);
        return e ? this.pe.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.pe.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.pe.Zt((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.Ve.Ht(t.key, t), e.pe.Ht(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.Ve.remove(t), this.pe.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.pe.ee(), r = e.pe.ee(); n.ae(); ) {
            var i = n.ce().key, o = r.ce().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.J = this.J, r.Ve = e, r.pe = n, r;
    }, t;
}(), Nn = /** @class */ function() {
    function t() {
        this.ve = new an(it.J);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.ve.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.ve = this.ve.Ht(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.ve = this.ve.Ht(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.ve = this.ve.Ht(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.ve = this.ve.Ht(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.ve = this.ve.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.ve = this.ve.Ht(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.ve = this.ve.Ht(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        S() : this.ve = this.ve.Ht(e, t);
    }, t.prototype.Se = function() {
        var t = [];
        return this.ve.Zt((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), An = /** @class */ function() {
    function t(t, e, n, r, i, o, u, s) {
        this.query = t, this.docs = e, this.De = n, this.docChanges = r, this.Ce = i, this.fromCache = o, 
        this.xe = u, this.Ne = s
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.Oe = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, Tn.be(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.Ce.nt();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.xe === t.xe && this.Ce.isEqual(t.Ce) && ye(this.query, t.query) && this.docs.isEqual(t.docs) && this.De.isEqual(t.De))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), Sn = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.Mt = t, this.Fe = e, this.ke = n, this.Me = r, this.Le = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.$e = function(e, n) {
        var r = new Map;
        return r.set(e, Dn.Be(e, n)), new t(Z.min(), r, En(), dn(), _n());
    }, t;
}(), Dn = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.qe = e, this.Ue = n, this.Qe = r, this.Ke = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.Be = function(e, n) {
        return new t(R.h, n, _n(), _n(), _n());
    }, t;
}(), xn = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.je = t, this.removedTargetIds = e, this.key = n, this.We = r;
}, kn = function(t, e) {
    this.targetId = t, this.Ge = e;
}, On = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = R.h), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, Pn = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.ze = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.He = Rn(), 
        /** See public getters for explanations of these fields. */
        this.Je = R.h, this.Ye = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.Xe = !0;
    }
    return Object.defineProperty(t.prototype, "qe", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.Ye;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.Je;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Ze", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.ze;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "tn", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.Xe;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.en = function(t) {
        t.o() > 0 && (this.Xe = !0, this.Je = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.nn = function() {
        var t = _n(), e = _n(), n = _n();
        return this.He.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                S();
            }
        })), new Dn(this.Je, this.Ye, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.sn = function() {
        this.Xe = !1, this.He = Rn();
    }, t.prototype.rn = function(t, e) {
        this.Xe = !0, this.He = this.He.Ht(t, e);
    }, t.prototype.on = function(t) {
        this.Xe = !0, this.He = this.He.remove(t);
    }, t.prototype.cn = function() {
        this.ze += 1;
    }, t.prototype.an = function() {
        this.ze -= 1;
    }, t.prototype.un = function() {
        this.Xe = !0, this.Ye = !0;
    }, t;
}(), Ln = /** @class */ function() {
    function t(t) {
        this.hn = t, 
        /** The internal state of all tracked targets. */
        this.ln = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this._n = dn(), 
        /** A mapping of document keys to their set of target IDs. */
        this.fn = Cn(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.dn = new hn(P)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.wn = function(t) {
        for (var e = 0, n = t.je; e < n.length; e++) {
            var r = n[e];
            t.We instanceof Vt ? this.En(r, t.We) : t.We instanceof Ut && this.Tn(r, t.key, t.We);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            r = o[i];
            this.Tn(r, t.key, t.We);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.In = function(t) {
        var e = this;
        this.mn(t, (function(n) {
            var r = e.An(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.Rn(n) && r.en(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.an(), r.Ze || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.sn(), r.en(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.an(), r.Ze || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.Rn(n) && (r.un(), r.en(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.Rn(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Pn(n), r.en(t.resumeToken));
                break;

              default:
                S();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.mn = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.ln.forEach((function(t, r) {
            n.Rn(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.yn = function(t) {
        var e = t.targetId, n = t.Ge.count, r = this.gn(e);
        if (r) {
            var i = r.target;
            if (Gt(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new it(i.path);
                this.Tn(e, o, new Ut(o, Z.min()));
            } else D(1 === n); else this.Vn(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Pn(e), this.dn = this.dn.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.pn = function(t) {
        var e = this, n = new Map;
        this.ln.forEach((function(r, i) {
            var o = e.gn(i);
            if (o) {
                if (r.qe && Gt(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var u = new it(o.target.path);
                    null !== e._n.get(u) || e.bn(i, u) || e.Tn(i, u, new Ut(u, t));
                }
                r.tn && (n.set(i, r.nn()), r.sn());
            }
        }));
        var r = _n();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.fn.forEach((function(t, n) {
            var i = !0;
            n.Re((function(t) {
                var n = e.gn(t);
                return !n || 2 /* LimboResolution */ === n.kt || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new Sn(t, n, this.dn, this._n, r);
        return this._n = dn(), this.fn = Cn(), this.dn = new hn(P), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.En = function(t, e) {
        if (this.Rn(t)) {
            var n = this.bn(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.An(t).rn(e.key, n), this._n = this._n.Ht(e.key, e), this.fn = this.fn.Ht(e.key, this.vn(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.Tn = function(t, e, n) {
        if (this.Rn(t)) {
            var r = this.An(t);
            this.bn(t, e) ? r.rn(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.on(e), this.fn = this.fn.Ht(e, this.vn(e).delete(t)), n && (this._n = this._n.Ht(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.ln.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.Vn = function(t) {
        var e = this.An(t).nn();
        return this.hn.Sn(t).size + e.Ue.size - e.Ke.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.cn = function(t) {
        this.An(t).cn();
    }, t.prototype.An = function(t) {
        var e = this.ln.get(t);
        return e || (e = new Pn, this.ln.set(t, e)), e;
    }, t.prototype.vn = function(t) {
        var e = this.fn.get(t);
        return e || (e = new hn(P), this.fn = this.fn.Ht(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Rn = function(t) {
        var e = null !== this.gn(t);
        return e || E("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.gn = function(t) {
        var e = this.ln.get(t);
        return e && e.Ze ? null : this.hn.Dn(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Pn = function(t) {
        var e = this;
        this.ln.set(t, new Pn), this.hn.Sn(t).forEach((function(n) {
            e.Tn(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.bn = function(t, e) {
        return this.hn.Sn(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function Cn() {
    return new an(it.J);
}

function Rn() {
    return new an(it.J);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Vn = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, Un = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, Mn = function(t, e) {
    this.T = t, this.qt = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function qn(t, e) {
    return t.qt ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function jn(t, e) {
    return t.qt ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function Fn(t, e) {
    return qn(t, e.G());
}

function zn(t) {
    return D(!!t), Z.j(function(t) {
        var e = ft(t);
        return new $(e.seconds, e.nanos);
    }(t));
}

function Gn(t, e) {
    return function(t) {
        return new et([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).ot();
}

function Bn(t) {
    var e = et.ct(t);
    return D(dr(e)), e;
}

function Kn(t, e) {
    return Gn(t.T, e.path);
}

function Hn(t, e) {
    var n = Bn(e);
    if (n.get(1) !== t.T.projectId) throw new U(V.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.T.projectId);
    if (n.get(3) !== t.T.database) throw new U(V.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.T.database);
    return new it(Yn(n));
}

function Jn(t, e) {
    return Gn(t.T, e);
}

function Wn(t) {
    var e = Bn(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? et.at() : Yn(e);
}

function Qn(t) {
    return new et([ "projects", t.T.projectId, "databases", t.T.database ]).ot();
}

function Yn(t) {
    return D(t.length > 4 && "documents" === t.get(4)), t.X(5)
    /** Creates a Document proto from key and fields (but no create/update time) */;
}

function Xn(t, e, n) {
    return {
        name: Kn(t, e),
        fields: n.proto.mapValue.fields
    };
}

function $n(t, e, n) {
    var r = Hn(t, e.name), i = zn(e.updateTime), o = new Pt({
        mapValue: {
            fields: e.fields
        }
    });
    return new Vt(r, i, o, {
        hasCommittedMutations: !!n
    });
}

function Zn(t, e) {
    var n;
    if (e instanceof We) n = {
        update: Xn(t, e.key, e.value)
    }; else if (e instanceof nn) n = {
        delete: Kn(t, e.key)
    }; else if (e instanceof Qe) n = {
        update: Xn(t, e.key, e.data),
        updateMask: pr(e.zt)
    }; else {
        if (!(e instanceof rn)) return S();
        n = {
            verify: Kn(t, e.key)
        };
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((function(t) {
        return function(t, e) {
            var n = e.transform;
            if (n instanceof ke) return {
                fieldPath: e.field.ot(),
                setToServerValue: "REQUEST_TIME"
            };
            if (n instanceof Oe) return {
                fieldPath: e.field.ot(),
                appendMissingElements: {
                    values: n.elements
                }
            };
            if (n instanceof Le) return {
                fieldPath: e.field.ot(),
                removeAllFromArray: {
                    values: n.elements
                }
            };
            if (n instanceof Re) return {
                fieldPath: e.field.ot(),
                increment: n.Qt
            };
            throw S();
        }(0, t);
    }))), e.Gt.Wt || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: Fn(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : S();
    }(t, e.Gt)), n;
}

function tr(t, e) {
    var n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? je.updateTime(zn(t.updateTime)) : void 0 !== t.exists ? je.exists(t.exists) : je.jt();
    }(e.currentDocument) : je.jt(), r = e.updateTransforms ? e.updateTransforms.map((function(e) {
        return function(t, e) {
            var n = null;
            if ("setToServerValue" in e) D("REQUEST_TIME" === e.setToServerValue), n = new ke; else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new Oe(r);
            } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new Le(i);
            } else "increment" in e ? n = new Re(t, e.increment) : S();
            var o = rt._t(e.fieldPath);
            return new Me(o, n);
        }(t, e);
    })) : [];
    if (e.update) {
        e.update.name;
        var i = Hn(t, e.update.name), o = new Pt({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            var u = function(t) {
                var e = t.fieldPaths || [];
                return new at(e.map((function(t) {
                    return rt._t(t);
                })));
            }(e.updateMask);
            return new Qe(i, o, u, n, r);
        }
        return new We(i, o, n, r);
    }
    if (e.delete) {
        var s = Hn(t, e.delete);
        return new nn(s, n);
    }
    if (e.verify) {
        var a = Hn(t, e.verify);
        return new rn(a, n);
    }
    return S();
}

function er(t, e) {
    return {
        documents: [ Jn(t, e.path) ]
    };
}

function nr(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = Jn(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Jn(t, r.Z()), n.structuredQuery.from = [ {
        collectionId: r.et()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                // visible for testing
                return function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (kt(t.value)) return {
                            unaryFilter: {
                                field: cr(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (xt(t.value)) return {
                            unaryFilter: {
                                field: cr(t.field),
                                op: "IS_NULL"
                            }
                        };
                    } else if ("!=" /* NOT_EQUAL */ === t.op) {
                        if (kt(t.value)) return {
                            unaryFilter: {
                                field: cr(t.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (xt(t.value)) return {
                            unaryFilter: {
                                field: cr(t.field),
                                op: "IS_NOT_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: cr(t.field),
                            op: ar(t.op),
                            value: t.value
                        }
                    };
                }(t);
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            // visible for testing
            return function(t) {
                return {
                    field: cr(t.field),
                    direction: sr(t.dir)
                };
            }(t);
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var u = function(t, e) {
        return t.qt || yt(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== u && (n.structuredQuery.limit = u), e.startAt && (n.structuredQuery.startAt = or(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = or(e.endAt)), n;
}

function rr(t) {
    var e = Wn(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
    if (r > 0) {
        D(1 === r);
        var o = n.from[0];
        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
    }
    var u = [];
    n.where && (u = ir(n.where));
    var s = [];
    n.orderBy && (s = n.orderBy.map((function(t) {
        return function(t) {
            return new ee(fr(t.field), 
            // visible for testing
            function(t) {
                switch (t) {
                  case "ASCENDING":
                    return "asc" /* ASCENDING */;

                  case "DESCENDING":
                    return "desc" /* DESCENDING */;

                  default:
                    return;
                }
            }(t.direction));
        }(t);
    })));
    var a = null;
    n.limit && (a = function(t) {
        var e;
        return yt(e = "object" == typeof t ? t.value : t) ? null : e;
    }(n.limit));
    var c = null;
    n.startAt && (c = ur(n.startAt));
    var f = null;
    return n.endAt && (f = ur(n.endAt)), ue(e, i, s, u, a, "F" /* First */ , c, f);
}

function ir(t) {
    return t ? void 0 !== t.unaryFilter ? [ lr(t) ] : void 0 !== t.fieldFilter ? [ hr(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
        return ir(t);
    })).reduce((function(t, e) {
        return t.concat(e);
    })) : S() : [];
}

function or(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function ur(t) {
    var e = !!t.before, n = t.values || [];
    return new Zt(n, e);
}

// visible for testing
function sr(t) {
    return Vn[t];
}

function ar(t) {
    return Un[t];
}

function cr(t) {
    return {
        fieldPath: t.ot()
    };
}

function fr(t) {
    return rt._t(t.fieldPath);
}

function hr(t) {
    return Bt.create(fr(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return S();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function lr(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = fr(t.unaryFilter.field);
        return Bt.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        var n = fr(t.unaryFilter.field);
        return Bt.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        var r = fr(t.unaryFilter.field);
        return Bt.create(r, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        var i = fr(t.unaryFilter.field);
        return Bt.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return S();
    }
}

function pr(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.ot());
    })), {
        fieldPaths: e
    };
}

function dr(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var vr = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, yr = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Cn = null, this.xn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Nn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.On = !1, t((function(t) {
            e.Nn = !0, e.result = t, e.Cn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Cn(t);
        }), (function(t) {
            e.Nn = !0, e.error = t, e.xn && e.xn(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.On && S(), this.On = !0, this.Nn ? this.error ? this.Fn(n, this.error) : this.kn(e, this.result) : new t((function(t, i) {
            r.Cn = function(n) {
                r.kn(e, n).next(t, i);
            }, r.xn = function(e) {
                r.Fn(n, e).next(t, i);
            };
        }));
    }, t.prototype.Mn = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.Ln = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.kn = function(e, n) {
        return e ? this.Ln((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.Fn = function(e, n) {
        return e ? this.Ln((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.$n = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Bn = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.$n(r);
    }, t;
}(), mr = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.action = t, this.transaction = e, this.aborted = !1, 
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.qn = new vr, this.transaction.oncomplete = function() {
            n.qn.resolve();
        }, this.transaction.onabort = function() {
            e.error ? n.qn.reject(new br(t, e.error)) : n.qn.resolve();
        }, this.transaction.onerror = function(e) {
            var r = Nr(e.target.error);
            n.qn.reject(new br(t, r));
        };
    }
    return t.open = function(e, n, r, i) {
        try {
            return new t(n, e.transaction(i, r));
        } catch (e) {
            throw new br(n, e);
        }
    }, Object.defineProperty(t.prototype, "Un", {
        get: function() {
            return this.qn.promise;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.qn.reject(t), this.aborted || (E("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new Ir(e);
    }, t;
}(), gr = /** @class */ function() {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    function t(e, r, i) {
        this.name = e, this.version = r, this.Qn = i, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.Kn(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getUA"])()) && T("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */    return t.delete = function(t) {
        return E("SimpleDb", "Removing database:", t), Er(window.indexedDB.deleteDatabase(t)).Mn();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ t.jn = function() {
        if ("undefined" == typeof indexedDB) return !1;
        if (t.Wn()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var e = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getUA"])(), r = t.Kn(e), i = 0 < r && r < 10, o = t.Gn(e), u = 0 < o && o < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || i || u);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.Wn = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.zn);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ t.Hn = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.Kn = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.Gn = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */
    t.prototype.Jn = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var e, n = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.db ? [ 3 /*break*/ , 2 ] : (E("SimpleDb", "Opening database:", this.name), 
                    e = this, [ 4 /*yield*/ , new Promise((function(e, r) {
                        // TODO(mikelehen): Investigate browser compatibility.
                        // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                        // suggests IE9 and older WebKit browsers handle upgrade
                        // differently. They expect setVersion, as described here:
                        // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                        var i = indexedDB.open(n.name, n.version);
                        i.onsuccess = function(t) {
                            var n = t.target.result;
                            e(n);
                        }, i.onblocked = function() {
                            r(new br(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                        }, i.onerror = function(e) {
                            var n = e.target.error;
                            "VersionError" === n.name ? r(new U(V.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(new br(t, n));
                        }, i.onupgradeneeded = function(t) {
                            E("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            n.Qn.Yn(e, i.transaction, t.oldVersion, n.version).next((function() {
                                E("SimpleDb", "Database upgrade to version " + n.version + " complete");
                            }));
                        };
                    })) ]);

                  case 1:
                    e.db = r.sent(), r.label = 2;

                  case 2:
                    return [ 2 /*return*/ , (this.Xn && (this.db.onversionchange = function(t) {
                        return n.Xn(t);
                    }), this.db) ];
                }
            }));
        }));
    }, t.prototype.Zn = function(t) {
        this.Xn = t, this.db && (this.db.onversionchange = function(e) {
            return t(e);
        });
    }, t.prototype.runTransaction = function(t, e, n, r) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var i, o, u, s, a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(c) {
                switch (c.label) {
                  case 0:
                    i = "readonly" === e, o = 0, u = function() {
                        var e, u, a, c, f;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(h) {
                            switch (h.label) {
                              case 0:
                                ++o, h.label = 1;

                              case 1:
                                return h.trys.push([ 1, 4, , 5 ]), [ 4 /*yield*/ , s.Jn(t) ];

                              case 2:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return s.db = h.sent(), e = mr.open(s.db, t, i ? "readonly" : "readwrite", n), u = r(e).catch((function(t) {
                                    // Abort the transaction if there was an error.
                                    return e.abort(t), yr.reject(t);
                                })).Mn(), a = {}, u.catch((function() {})), [ 4 /*yield*/ , e.Un ];

                              case 3:
                                return [ 2 /*return*/ , (a.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                h.sent(), u), a) ];

                              case 4:
                                return c = h.sent(), f = "FirebaseError" !== c.name && o < 3, E("SimpleDb", "Transaction failed with error:", c.message, "Retrying:", f), 
                                s.close(), f ? [ 3 /*break*/ , 5 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(c)
                                } ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, s = this, c.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , u() ];

                  case 2:
                    if ("object" == typeof (a = c.sent())) return [ 2 /*return*/ , a.value ];
                    c.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.close = function() {
        this.db && this.db.close(), this.db = void 0;
    }, t;
}(), wr = /** @class */ function() {
    function t(t) {
        this.ts = t, this.es = !1, this.ns = null;
    }
    return Object.defineProperty(t.prototype, "Nn", {
        get: function() {
            return this.es;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ss", {
        get: function() {
            return this.ns;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.ts = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.es = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.rs = function(t) {
        this.ns = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return Er(this.ts.delete());
    }, t;
}(), br = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, V.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) || this).name = "IndexedDbTransactionError", 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(U);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function _r(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */ var Ir = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (E("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (E("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), Er(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value - The object to write.
     * @returns The key of the value to add.
     */
    t.prototype.add = function(t) {
        return E("SimpleDb", "ADD", this.store.name, t, t), Er(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @returns The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return Er(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), E("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return E("SimpleDb", "DELETE", this.store.name, t), Er(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return E("SimpleDb", "COUNT", this.store.name), Er(this.store.count());
    }, t.prototype.os = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.cs(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.us = function(t, e) {
        E("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.hs = !1;
        var r = this.cursor(n);
        return this.cs(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.ls = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.cs(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype._s = function(t) {
        var e = this.cursor({});
        return new yr((function(n, r) {
            e.onerror = function(t) {
                var e = Nr(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.cs = function(t, e) {
        var n = [];
        return new yr((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new wr(i), u = e(i.primaryKey, i.value, o);
                    if (u instanceof yr) {
                        var s = u.catch((function(t) {
                            return o.done(), yr.reject(t);
                        }));
                        n.push(s);
                    }
                    o.Nn ? r() : null === o.ss ? i.continue() : i.continue(o.ss);
                } else r();
            };
        })).next((function() {
            return yr.$n(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.hs ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */ function Er(t) {
    return new yr((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = Nr(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var Tr = !1;

function Nr(t) {
    var e = gr.Kn(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getUA"])());
    if (e >= 12.2 && e < 13) {
        var r = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(r) >= 0) {
            // Wrap error in a more descriptive one.
            var i = new U("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + r + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return Tr || (Tr = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw i;
            }), 0)), i;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ var Ar = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.fs = t, this.ds = e, this.ws = n, this.op = r, this.Es = i, this.Ts = new vr, 
        this.then = this.Ts.promise.then.bind(this.Ts.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Ts.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.Is = function(e, n, r, i, o) {
        var u = new t(e, n, Date.now() + r, i, o);
        return u.start(r), u;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.As = setTimeout((function() {
            return e.Rs();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Ps = function() {
        return this.Rs();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.As && (this.clearTimeout(), this.Ts.reject(new U(V.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.Rs = function() {
        var t = this;
        this.fs.ys((function() {
            return null !== t.As ? (t.clearTimeout(), t.op().then((function(e) {
                return t.Ts.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.As && (this.Es(this), clearTimeout(this.As), this.As = null);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function Sr(t, e) {
    if (T("AsyncQueue", e + ": " + t), _r(t)) return new U(V.UNAVAILABLE, e + ": " + t);
    throw t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Dr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", xr = /** @class */ function() {
    function t() {
        this.gs = [];
    }
    return t.prototype.Vs = function(t) {
        this.gs.push(t);
    }, t.prototype.ps = function() {
        this.gs.forEach((function(t) {
            return t();
        }));
    }, t;
}();

/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function kr(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = Pr(e)), e = Or(t.get(n), e);
    return Pr(e);
}

/** Encodes a single segment of a resource path into the given result */ function Or(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function Pr(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function Lr(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (D(e >= 2), 2 === e) return D("" === t.charAt(0) && "" === t.charAt(1)), et.at();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var u = t.indexOf("", o);
        switch ((u < 0 || u > n) && S(), t.charAt(u + 1)) {
          case "":
            var s = t.substring(o, u), a = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = s : (a = i += s, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, u), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, u + 1);
            break;

          default:
            S();
        }
        o = u + 2;
    }
    return new et(r);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 */
/**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ var Cr = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, Rr = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
Rr.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Rr.key = "owner";

/**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */
var Vr = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Vr.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Vr.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var Ur = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ Ur.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
Ur.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
Ur.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
Ur.userMutationsKeyPath = [ "userId", "batchId" ];

/**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */
var Mr = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, kr(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, kr(e), n ];
    }, t;
}();

Mr.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
Mr.PLACEHOLDER = new Mr;

/**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */
var qr = function(t, e) {
    this.path = t, this.readTime = e;
}, jr = function(t, e) {
    this.path = t, this.version = e;
}, Fr = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ Fr.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
Fr.readTimeIndex = "readTimeIndex", Fr.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
Fr.collectionReadTimeIndex = "collectionReadTimeIndex", Fr.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var zr = 
/**
     * @param byteSize - Approximately the total size in bytes of all the
     * documents in the document cache.
     */
function(t) {
    this.byteSize = t;
};

zr.store = "remoteDocumentGlobal", zr.key = "remoteDocumentGlobalKey";

/**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */
var Gr = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
u) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = u;
};

Gr.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
Gr.keyPath = "targetId", 
/** The name of the queryTargets index. */
Gr.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
Gr.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var Br = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ Br.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
Br.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
Br.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
Br.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var Kr = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ Kr.key = "targetGlobalKey", Kr.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var Hr = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ Hr.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
Hr.keyPath = [ "collectionId", "parent" ];

/**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */
var Jr = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ Jr.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
Jr.keyPath = "clientId";

/**
 * A object representing a bundle loaded by the SDK.
 */
var Wr = function(
/** The ID of the loaded bundle. */
t, 
/** The create time of the loaded bundle. */
e, 
/** The schema version of the loaded bundle. */
n) {
    this.bundleId = t, this.createTime = e, this.version = n;
};

/** Name of the IndexedDb object store. */ Wr.store = "bundles", Wr.keyPath = "bundleId";

/**
 * A object representing a named query loaded by the SDK via a bundle.
 */
var Qr = function(
/** The name of the query. */
t, 
/** The read time of the results saved in the bundle from the named query. */
e, 
/** The query saved in the bundle. */
n) {
    this.name = t, this.readTime = e, this.bundledQuery = n;
};

/** Name of the IndexedDb object store. */ Qr.store = "namedQueries", Qr.keyPath = "name";

// Visible for testing
var Yr = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ Vr.store, Ur.store, Mr.store, Fr.store, Gr.store, Rr.store, Kr.store, Br.store ], [ Jr.store ]), [ zr.store ]), [ Hr.store ]), [ Wr.store, Qr.store ]), Xr = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).bs = e, r.vs = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(xr);

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $r(t, e) {
    var n = x(t);
    return gr.Hn(n.bs, e);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */ var Zr = /** @class */ function() {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.Ss = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.Ds = function(t, e, n) {
        for (var r = n.Cs, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = Ge(o, e, r[i]));
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     */
    t.prototype.xs = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            (u = r[n]).key.isEqual(t) && (e = Be(u, e, 0, this.Ss));
        }
        // Second, apply all user-provided mutations.
                for (var i = 0, o = this.mutations; i < o.length; i++) {
            var u;
            (u = o[i]).key.isEqual(t) && (e = Be(u, e, 0, this.Ss));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.Ns = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.xs(r.key, t.get(r.key));
            i && (n = n.Ht(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), _n());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && L(this.mutations, t.mutations, (function(t, e) {
            return He(t, e);
        })) && L(this.baseMutations, t.baseMutations, (function(t, e) {
            return He(t, e);
        }));
    }, t;
}(), ti = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.Os = e, this.Cs = n, this.Fs = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        D(e.mutations.length === r.length);
        for (var i = wn(), o = e.mutations, u = 0; u < o.length; u++) i = i.Ht(o[u].key, r[u].version);
        return new t(e, n, r, i);
    }, t;
}(), ei = function(t) {
    this.ks = t;
};

/** The result of applying a mutation batch to the backend. */
/** Decodes a remote document from storage locally to a Document. */ function ni(t, e) {
    if (e.document) return $n(t.ks, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        var n = it.Tt(e.noDocument.path), r = si(e.noDocument.readTime);
        return new Ut(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations
        });
    }
    if (e.unknownDocument) {
        var i = it.Tt(e.unknownDocument.path);
        r = si(e.unknownDocument.version);
        return new Mt(i, r);
    }
    return S();
}

/** Encodes a document for storage locally. */ function ri(t, e, n) {
    var r = ii(n), i = e.key.path.Z().rt();
    if (e instanceof Vt) {
        var o = function(t, e) {
            return {
                name: Kn(t, e.key),
                fields: e.vt().mapValue.fields,
                updateTime: qn(t, e.version.G())
            };
        }(t.ks, e), u = e.hasCommittedMutations;
        return new Fr(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, o, u, r, i);
    }
    if (e instanceof Ut) {
        var s = e.key.path.rt(), a = ui(e.version);
        u = e.hasCommittedMutations;
        return new Fr(
        /* unknownDocument= */ null, new qr(s, a), 
        /* document= */ null, u, r, i);
    }
    if (e instanceof Mt) {
        var c = e.key.path.rt(), f = ui(e.version);
        return new Fr(new jr(c, f), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, r, i);
    }
    return S();
}

function ii(t) {
    var e = t.G();
    return [ e.seconds, e.nanoseconds ];
}

function oi(t) {
    var e = new $(t[0], t[1]);
    return Z.j(e);
}

function ui(t) {
    var e = t.G();
    return new Cr(e.seconds, e.nanoseconds);
}

function si(t) {
    var e = new $(t.seconds, t.nanoseconds);
    return Z.j(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */ function ai(t, e) {
    // Squash old transform mutations into existing patch or set mutations.
    // The replacement of representing `transforms` with `update_transforms`
    // on the SDK means that old `transform` mutations stored in IndexedDB need
    // to be updated to `update_transforms`.
    // TODO(b/174608374): Remove this code once we perform a schema migration.
    for (var n = (e.baseMutations || []).map((function(e) {
        return tr(t.ks, e);
    })), r = e.mutations.length - 1; r >= 0; --r) {
        var i = e.mutations[r];
        void 0 !== (null == i ? void 0 : i.transform) && (e.mutations[r - 1].updateTransforms = i.transform.fieldTransforms, 
        e.mutations.splice(r, 1), --r);
    }
    var o = e.mutations.map((function(e) {
        return tr(t.ks, e);
    })), u = $.fromMillis(e.localWriteTimeMs);
    return new Zr(e.batchId, u, n, o);
}

/** Decodes a DbTarget into TargetData */ function ci(t) {
    var e, n, r = si(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? si(t.lastLimboFreeSnapshotVersion) : Z.min();
    return void 0 !== t.query.documents ? (D(1 === (n = t.query).documents.length), 
    e = de(se(Wn(n.documents[0])))) : e = function(t) {
        return de(rr(t));
    }(t.query), new Ie(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, r, i, R.fromBase64String(t.resumeToken))
    /** Encodes TargetData into a DbTarget for storage locally. */;
}

function fi(t, e) {
    var n, r = ui(e.Mt), i = ui(e.lastLimboFreeSnapshotVersion);
    n = Gt(e.target) ? er(t.ks, e.target) : nr(t.ks, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
    var o = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new Gr(e.targetId, Ft(e.target), r, o, e.sequenceNumber, i, n);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */ function hi(t) {
    var e = rr({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? ve(e, e.limit, "L" /* Last */) : e;
}

/** Encodes a NamedQuery proto object to a NamedQuery model object. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var li = /** @class */ function() {
    function t() {}
    return t.prototype.Ms = function(t, e) {
        return pi(t).get(e).next((function(t) {
            if (t) return {
                id: (e = t).bundleId,
                createTime: si(e.createTime),
                version: e.version
            };
            /** Encodes a DbBundle to a BundleMetadata object. */            var e;
            /** Encodes a BundleMetadata to a DbBundle. */        }));
    }, t.prototype.Ls = function(t, e) {
        return pi(t).put({
            bundleId: (n = e).id,
            createTime: ui(zn(n.createTime)),
            version: n.version
        });
        var n;
        /** Encodes a DbNamedQuery to a NamedQuery. */    }, t.prototype.$s = function(t, e) {
        return di(t).get(e).next((function(t) {
            if (t) return {
                name: (e = t).name,
                query: hi(e.bundledQuery),
                readTime: si(e.readTime)
            };
            var e;
            /** Encodes a NamedQuery from a bundle proto to a DbNamedQuery. */        }));
    }, t.prototype.Bs = function(t, e) {
        return di(t).put(function(t) {
            return {
                name: t.name,
                readTime: ui(zn(t.readTime)),
                bundledQuery: t.bundledQuery
            };
        }(e));
    }, t;
}();

/**
 * Helper to get a typed SimpleDbStore for the bundles object store.
 */ function pi(t) {
    return $r(t, Wr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the namedQueries object store.
 */ function di(t) {
    return $r(t, Qr.store);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ var vi = /** @class */ function() {
    function t() {
        this.qs = new yi;
    }
    return t.prototype.Us = function(t, e) {
        return this.qs.add(e), yr.resolve();
    }, t.prototype.Qs = function(t, e) {
        return yr.resolve(this.qs.getEntries(e));
    }, t;
}(), yi = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.et(), n = t.Z(), r = this.index[e] || new hn(et.J), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.et(), n = t.Z(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new hn(et.J)).rt();
    }, t;
}(), mi = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.Ks = new yi;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.Us = function(t, e) {
        var n = this;
        if (!this.Ks.has(e)) {
            var r = e.et(), i = e.Z();
            t.Vs((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.Ks.add(e);
            }));
            var o = {
                collectionId: r,
                parent: kr(i)
            };
            return gi(t).put(o);
        }
        return yr.resolve();
    }, t.prototype.Qs = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ C(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return gi(t).os(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push(Lr(o.parent));
            }
            return n;
        }));
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function gi(t) {
    return $r(t, Hr.store);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var wi = {
    js: !1,
    Ws: 0,
    Gs: 0,
    zs: 0
}, bi = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.Hs = t, this.Js = e, this.Ys = n;
    }
    return t.Xs = function(e) {
        return new t(e, t.Zs, t.ti);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */
function _i(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            if (t.code !== V.FAILED_PRECONDITION || t.message !== Dr) throw t;
            return E("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ bi.Zs = 10, bi.ti = 1e3, bi.ei = new bi(41943040, bi.Zs, bi.ti), bi.ni = new bi(-1, 0, 0);

var Ii = /** @class */ function() {
    function t(t, e) {
        this.si = t, this.ii = e, 
        /**
             * The inner map for a key/value pair. Due to the possibility of collisions we
             * keep a list of entries that we do a linear search through to find an actual
             * match. Note that collisions should be rare, so we still expect near
             * constant time lookups in practice.
             */
        this.ri = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.si(t), n = this.ri[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], u = o[0], s = o[1];
            if (this.ii(u, t)) return s;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.si(t), r = this.ri[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.ii(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.ri[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.si(t), n = this.ri[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.ii(n[r][0], t)) return 1 === n.length ? delete this.ri[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        ut(this.ri, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], u = o[0], s = o[1];
                t(u, s);
            }
        }));
    }, t.prototype.nt = function() {
        return st(this.ri);
    }, t;
}(), Ei = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.oi = new Ii((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.ci = !1;
    }
    return t.prototype.ai = function(t) {
        var e = this.oi.get(t);
        return e ? e.readTime : Z.min();
    }, 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.ui = function(t, e) {
        this.hi(), this.oi.set(t.key, {
            li: t,
            readTime: e
        });
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype._i = function(t, e) {
        void 0 === e && (e = null), this.hi(), this.oi.set(t, {
            li: null,
            readTime: e
        });
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached Document or NoDocument entry, or null if we have
     *     nothing cached.
     */
    t.prototype.fi = function(t, e) {
        this.hi();
        var n = this.oi.get(e);
        return void 0 !== n ? yr.resolve(n.li) : this.di(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached `Document`s or `NoDocument`s, indexed by key. If
     *     an entry cannot be found, the corresponding key will be mapped to a
     *     null value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.wi(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.hi(), this.ci = !0, this.Ei(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.hi = function() {}, 
    t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */
function Ti(t, e, n) {
    var r = t.store(Ur.store), i = t.store(Mr.store), o = [], u = IDBKeyRange.only(n.batchId), s = 0, a = r.ls({
        range: u
    }, (function(t, e, n) {
        return s++, n.delete();
    }));
    o.push(a.next((function() {
        D(1 === s);
    })));
    for (var c = [], f = 0, h = n.mutations; f < h.length; f++) {
        var l = h[f], p = Mr.key(e, l.key.path, n.batchId);
        o.push(i.delete(p)), c.push(l.key);
    }
    return yr.$n(o).next((function() {
        return c;
    }));
}

/**
 * Returns an approximate size for the given document.
 */ function Ni(t) {
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw S();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ var Ai = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.Kt = e, this.Ti = n, this.Ii = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.mi = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user - The user for which to create a mutation queue.
     * @param serializer - The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.Ai = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return D("" !== e.uid), new t(e.A() ? e.uid : "", n, r, i);
    }, t.prototype.Ri = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Di(t).ls({
            index: Ur.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.Pi = function(t, e, n, r) {
        var i = this, o = xi(t), u = Di(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return u.add({}).next((function(s) {
            D("number" == typeof s);
            for (var a = new Zr(s, e, n, r), c = function(t, e, n) {
                var r = n.baseMutations.map((function(e) {
                    return Zn(t.ks, e);
                })), i = n.mutations.map((function(e) {
                    return Zn(t.ks, e);
                }));
                return new Ur(e, n.batchId, n.Ss.toMillis(), r, i);
            }(i.Kt, i.userId, a), f = [], h = new hn((function(t, e) {
                return P(t.ot(), e.ot());
            })), l = 0, p = r; l < p.length; l++) {
                var d = p[l], v = Mr.key(i.userId, d.key.path, s);
                h = h.add(d.key.path.Z()), f.push(u.put(c)), f.push(o.put(v, Mr.PLACEHOLDER));
            }
            return h.forEach((function(e) {
                f.push(i.Ti.Us(t, e));
            })), t.Vs((function() {
                i.mi[s] = a.keys();
            })), yr.$n(f).next((function() {
                return a;
            }));
        }));
    }, t.prototype.yi = function(t, e) {
        var n = this;
        return Di(t).get(e).next((function(t) {
            return t ? (D(t.userId === n.userId), ai(n.Kt, t)) : null;
        }));
    }, 
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.gi = function(t, e) {
        var n = this;
        return this.mi[e] ? yr.resolve(this.mi[e]) : this.yi(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.mi[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.Vi = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return Di(t).ls({
            index: Ur.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (D(e.batchId >= r), o = ai(n.Kt, e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.pi = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return Di(t).ls({
            index: Ur.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.bi = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Di(t).os(Ur.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return ai(e.Kt, t);
            }));
        }));
    }, t.prototype.vi = function(t, e) {
        var n = this, r = Mr.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return xi(t).ls({
            range: i
        }, (function(r, i, u) {
            var s = r[0], a = r[1], c = r[2], f = Lr(a);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (s === n.userId && e.path.isEqual(f)) 
            // Look up the mutation batch in the store.
            return Di(t).get(c).next((function(t) {
                if (!t) throw S();
                D(t.userId === n.userId), o.push(ai(n.Kt, t));
            }));
            u.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.Si = function(t, e) {
        var n = this, r = new hn(P), i = [];
        return e.forEach((function(e) {
            var o = Mr.prefixForPath(n.userId, e.path), u = IDBKeyRange.lowerBound(o), s = xi(t).ls({
                range: u
            }, (function(t, i, o) {
                var u = t[0], s = t[1], a = t[2], c = Lr(s);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                u === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
            }));
            i.push(s);
        })), yr.$n(i).next((function() {
            return n.Di(t, r);
        }));
    }, t.prototype.Ci = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = Mr.prefixForPath(this.userId, r), u = IDBKeyRange.lowerBound(o), s = new hn(P);
        return xi(t).ls({
            range: u
        }, (function(t, e, o) {
            var u = t[0], a = t[1], c = t[2], f = Lr(a);
            u === n.userId && r.st(f) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            f.length === i && (s = s.add(c)) : o.done();
        })).next((function() {
            return n.Di(t, s);
        }));
    }, t.prototype.Di = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(Di(t).get(e).next((function(t) {
                if (null === t) throw S();
                D(t.userId === n.userId), r.push(ai(n.Kt, t));
            })));
        })), yr.$n(i).next((function() {
            return r;
        }));
    }, t.prototype.xi = function(t, e) {
        var n = this;
        return Ti(t.bs, this.userId, e).next((function(r) {
            return t.Vs((function() {
                n.Ni(e.batchId);
            })), yr.forEach(r, (function(e) {
                return n.Ii.Oi(t, e);
            }));
        }));
    }, 
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.Ni = function(t) {
        delete this.mi[t];
    }, t.prototype.Fi = function(t) {
        var e = this;
        return this.Ri(t).next((function(n) {
            if (!n) return yr.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(Mr.prefixForUser(e.userId)), i = [];
            return xi(t).ls({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = Lr(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                D(0 === i.length);
            }));
        }));
    }, t.prototype.ki = function(t, e) {
        return Si(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.Mi = function(t) {
        var e = this;
        return ki(t).get(this.userId).next((function(t) {
            return t || new Vr(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @returns true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function Si(t, e, n) {
    var r = Mr.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), u = !1;
    return xi(t).ls({
        range: o,
        hs: !0
    }, (function(t, n, r) {
        var o = t[0], s = t[1];
        t[2];
        o === e && s === i && (u = !0), r.done();
    })).next((function() {
        return u;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function Di(t) {
    return $r(t, Ur.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function xi(t) {
    return $r(t, Mr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function ki(t) {
    return $r(t, Vr.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ var Oi = /** @class */ function() {
    function t(t) {
        this.Li = t;
    }
    return t.prototype.next = function() {
        return this.Li += 2, this.Li;
    }, t.$i = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Bi = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), Pi = /** @class */ function() {
    function t(t, e) {
        this.Ii = t, this.Kt = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.qi = function(t) {
        var e = this;
        return this.Ui(t).next((function(n) {
            var r = new Oi(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Qi(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.Ki = function(t) {
        return this.Ui(t).next((function(t) {
            return Z.j(new $(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.ji = function(t) {
        return this.Ui(t).next((function(t) {
            return t.highestListenSequenceNumber;
        }));
    }, t.prototype.Wi = function(t, e, n) {
        var r = this;
        return this.Ui(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.G()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Qi(t, i);
        }));
    }, t.prototype.Gi = function(t, e) {
        var n = this;
        return this.zi(t, e).next((function() {
            return n.Ui(t).next((function(r) {
                return r.targetCount += 1, n.Hi(e, r), n.Qi(t, r);
            }));
        }));
    }, t.prototype.Ji = function(t, e) {
        return this.zi(t, e);
    }, t.prototype.Yi = function(t, e) {
        var n = this;
        return this.Xi(t, e.targetId).next((function() {
            return Li(t).delete(e.targetId);
        })).next((function() {
            return n.Ui(t);
        })).next((function(e) {
            return D(e.targetCount > 0), e.targetCount -= 1, n.Qi(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.Zi = function(t, e, n) {
        var r = this, i = 0, o = [];
        return Li(t).ls((function(u, s) {
            var a = ci(s);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.Yi(t, a)));
        })).next((function() {
            return yr.$n(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.mn = function(t, e) {
        return Li(t).ls((function(t, n) {
            var r = ci(n);
            e(r);
        }));
    }, t.prototype.Ui = function(t) {
        return Ci(t).get(Kr.key).next((function(t) {
            return D(null !== t), t;
        }));
    }, t.prototype.Qi = function(t, e) {
        return Ci(t).put(Kr.key, e);
    }, t.prototype.zi = function(t, e) {
        return Li(t).put(fi(this.Kt, e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.Hi = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.tr = function(t) {
        return this.Ui(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.er = function(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = Ft(e), r = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]), i = null;
        return Li(t).ls({
            range: r,
            index: Gr.queryTargetsIndexName
        }, (function(t, n, r) {
            var o = ci(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        zt(e, o.target) && (i = o, r.done());
        })).next((function() {
            return i;
        }));
    }, t.prototype.nr = function(t, e, n) {
        var r = this, i = [], o = Ri(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var u = kr(e.path);
            i.push(o.put(new Br(n, u))), i.push(r.Ii.sr(t, n, e));
        })), yr.$n(i);
    }, t.prototype.ir = function(t, e, n) {
        var r = this, i = Ri(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return yr.forEach(e, (function(e) {
            var o = kr(e.path);
            return yr.$n([ i.delete([ n, o ]), r.Ii.rr(t, n, e) ]);
        }));
    }, t.prototype.Xi = function(t, e) {
        var n = Ri(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.cr = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = Ri(t), i = _n();
        return r.ls({
            range: n,
            hs: !0
        }, (function(t, e, n) {
            var r = Lr(t[1]), o = new it(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.ki = function(t, e) {
        var n = kr(e.path), r = IDBKeyRange.bound([ n ], [ C(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return Ri(t).ls({
            index: Br.documentTargetsIndex,
            hs: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, 
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId - The target ID of the TargetData entry to look up.
     * @returns The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Dn = function(t, e) {
        return Li(t).get(e).next((function(t) {
            return t ? ci(t) : null;
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function Li(t) {
    return $r(t, Gr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function Ci(t) {
    return $r(t, Kr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function Ri(t) {
    return $r(t, Br.store);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vi(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], u = P(n, i);
    return 0 === u ? P(r, o) : u;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var Ui = /** @class */ function() {
    function t(t) {
        this.ar = t, this.buffer = new hn(Vi), this.ur = 0;
    }
    return t.prototype.hr = function() {
        return ++this.ur;
    }, t.prototype.lr = function(t) {
        var e = [ t, this.hr() ];
        if (this.buffer.size < this.ar) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            Vi(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Mi = /** @class */ function() {
    function t(t, e) {
        this._r = t, this.fs = e, this.dr = !1, this.wr = null;
    }
    return t.prototype.start = function(t) {
        -1 !== this._r.params.Hs && this.Er(t);
    }, t.prototype.stop = function() {
        this.wr && (this.wr.cancel(), this.wr = null);
    }, Object.defineProperty(t.prototype, "Tr", {
        get: function() {
            return null !== this.wr;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Er = function(t) {
        var e = this, n = this.dr ? 3e5 : 6e4;
        E("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.wr = this.fs.Ir("lru_garbage_collection" /* LruGarbageCollection */ , n, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        this.wr = null, this.dr = !0, n.label = 1;

                      case 1:
                        return n.trys.push([ 1, 3, , 7 ]), [ 4 /*yield*/ , t.mr(this._r) ];

                      case 2:
                        return n.sent(), [ 3 /*break*/ , 7 ];

                      case 3:
                        return _r(e = n.sent()) ? (E("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), 
                        [ 3 /*break*/ , 6 ]) : [ 3 /*break*/ , 4 ];

                      case 4:
                        return [ 4 /*yield*/ , _i(e) ];

                      case 5:
                        n.sent(), n.label = 6;

                      case 6:
                        return [ 3 /*break*/ , 7 ];

                      case 7:
                        return [ 4 /*yield*/ , this.Er(t) ];

                      case 8:
                        return n.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t;
}(), qi = /** @class */ function() {
    function t(t, e) {
        this.Ar = t, this.params = e;
    }
    return t.prototype.Rr = function(t, e) {
        return this.Ar.Pr(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, t.prototype.yr = function(t, e) {
        var n = this;
        if (0 === e) return yr.resolve(X.U);
        var r = new Ui(e);
        return this.Ar.mn(t, (function(t) {
            return r.lr(t.sequenceNumber);
        })).next((function() {
            return n.Ar.gr(t, (function(t) {
                return r.lr(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, t.prototype.Zi = function(t, e, n) {
        return this.Ar.Zi(t, e, n);
    }, t.prototype.Vr = function(t, e) {
        return this.Ar.Vr(t, e);
    }, t.prototype.pr = function(t, e) {
        var n = this;
        return -1 === this.params.Hs ? (E("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        yr.resolve(wi)) : this.br(t).next((function(r) {
            return r < n.params.Hs ? (E("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.Hs), 
            wi) : n.vr(t, e);
        }));
    }, t.prototype.br = function(t) {
        return this.Ar.br(t);
    }, t.prototype.vr = function(t, n) {
        var r, i, o, u, s, a, c, f = this, h = Date.now();
        return this.Rr(t, this.params.Js).next((function(e) {
            // Cap at the configured max
            return e > f.params.Ys ? (E("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + f.params.Ys + " from " + e), 
            i = f.params.Ys) : i = e, u = Date.now(), f.yr(t, i);
        })).next((function(e) {
            return r = e, s = Date.now(), f.Zi(t, r, n);
        })).next((function(e) {
            return o = e, a = Date.now(), f.Vr(t, r);
        })).next((function(t) {
            return c = Date.now(), I() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].DEBUG && E("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (u - h) + "ms\n\tDetermined least recently used " + i + " in " + (s - u) + "ms\n\tRemoved " + o + " targets in " + (a - s) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - h) + "ms"), 
            yr.resolve({
                js: !0,
                Ws: i,
                Gs: o,
                zs: t
            });
        }));
    }, t;
}(), ji = /** @class */ function() {
    function t(t, e) {
        this.db = t, this._r = function(t, e) {
            return new qi(t, e);
        }(this, e);
    }
    return t.prototype.Pr = function(t) {
        var e = this.Sr(t);
        return this.db.Dr().tr(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.Sr = function(t) {
        var e = 0;
        return this.gr(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.mn = function(t, e) {
        return this.db.Dr().mn(t, e);
    }, t.prototype.gr = function(t, e) {
        return this.Cr(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.sr = function(t, e, n) {
        return Fi(t, n);
    }, t.prototype.rr = function(t, e, n) {
        return Fi(t, n);
    }, t.prototype.Zi = function(t, e, n) {
        return this.db.Dr().Zi(t, e, n);
    }, t.prototype.Oi = function(t, e) {
        return Fi(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.Nr = function(t, e) {
        return function(t, e) {
            var n = !1;
            return ki(t)._s((function(r) {
                return Si(t, r, e).next((function(t) {
                    return t && (n = !0), yr.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.Vr = function(t, e) {
        var n = this, r = this.db.Fr().Or(), i = [], o = 0;
        return this.Cr(t, (function(u, s) {
            if (s <= e) {
                var a = n.Nr(t, u).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r.fi(t, u).next((function() {
                        return r._i(u), Ri(t).delete([ 0, kr(u.path) ]);
                    }));
                }));
                i.push(a);
            }
        })).next((function() {
            return yr.$n(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.Lt(t.vs);
        return this.db.Dr().Ji(t, n);
    }, t.prototype.kr = function(t, e) {
        return Fi(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.Cr = function(t, e) {
        var n, r = Ri(t), i = X.U;
        return r.ls({
            index: Br.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0], u = (t[1], r.path), s = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== X.U && e(new it(Lr(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = s, n = u) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = X.U;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== X.U && e(new it(Lr(n)), i);
        }));
    }, t.prototype.br = function(t) {
        return this.db.Fr().Mr(t);
    }, t;
}();

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */ function Fi(t, e) {
    return Ri(t).put(
    /**
 * @returns A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new Br(0, kr(t.path), e);
    }(e, t.vs));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ var zi = /** @class */ function() {
    /**
     * @param serializer - The document serializer.
     * @param indexManager - The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.Kt = t, this.Ti = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.ui = function(t, e, n) {
        return Ki(t).put(Hi(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype._i = function(t, e) {
        var n = Ki(t), r = Hi(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.Lr(t, r);
        }));
    }, t.prototype.fi = function(t, e) {
        var n = this;
        return Ki(t).get(Hi(e)).next((function(t) {
            return n.$r(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey - The key of the entry to look up.
     * @returns The cached MaybeDocument entry and its size, or null if we have
     * nothing cached.
     */
    t.prototype.Br = function(t, e) {
        var n = this;
        return Ki(t).get(Hi(e)).next((function(t) {
            var e = n.$r(t);
            return e ? {
                li: e,
                size: Ni(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = vn();
        return this.qr(t, e, (function(t, e) {
            var i = n.$r(e);
            r = r.Ht(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys - The set of keys entries to look up.
     * @returns A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.Ur = function(t, e) {
        var n = this, r = vn(), i = new an(it.J);
        return this.qr(t, e, (function(t, e) {
            var o = n.$r(e);
            o ? (r = r.Ht(t, o), i = i.Ht(t, Ni(e))) : (r = r.Ht(t, null), i = i.Ht(t, 0));
        })).next((function() {
            return {
                Qr: r,
                Kr: i
            };
        }));
    }, t.prototype.qr = function(t, e, n) {
        if (e.nt()) return yr.resolve();
        var r = IDBKeyRange.bound(e.first().path.rt(), e.last().path.rt()), i = e.ee(), o = i.ce();
        return Ki(t).ls({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var u = it.Tt(t); o && it.J(o, u) < 0; ) n(o, null), o = i.ce();
            o && o.isEqual(u) && (
            // Key found in cache.
            n(o, e), o = i.ae() ? i.ce() : null), 
            // Skip to the next key (if there is one).
            o ? r.rs(o.path.rt()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.ae() ? i.ce() : null;
        }));
    }, t.prototype.jr = function(t, e, n) {
        var r = this, i = mn(), o = e.path.length + 1, u = {};
        if (n.isEqual(Z.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var s = e.path.rt();
            u.range = IDBKeyRange.lowerBound(s);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.rt(), c = ii(n);
            u.range = IDBKeyRange.lowerBound([ a, c ], 
            /* open= */ !0), u.index = Fr.collectionReadTimeIndex;
        }
        return Ki(t).ls(u, (function(t, n, u) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var s = ni(r.Kt, n);
                e.path.st(s.key.path) ? s instanceof Vt && we(e, s) && (i = i.Ht(s.key, s)) : u.done();
            }
        })).next((function() {
            return i;
        }));
    }, t.prototype.Or = function(t) {
        return new Gi(this, !!t && t.Wr);
    }, t.prototype.Mr = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return Bi(t).get(zr.key).next((function(t) {
            return D(!!t), t;
        }));
    }, t.prototype.Lr = function(t, e) {
        return Bi(t).put(zr.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.$r = function(t) {
        if (t) {
            var e = ni(this.Kt, t);
            return e instanceof Ut && e.version.isEqual(Z.min()) ? null : e;
        }
        return null;
    }, t;
}(), Gi = /** @class */ function(t) {
    /**
     * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).Gr = e, r.Wr = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r.zr = new Ii((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Ei = function(t) {
        var e = this, n = [], r = 0, i = new hn((function(t, e) {
            return P(t.ot(), e.ot());
        }));
        return this.oi.forEach((function(o, u) {
            var s = e.zr.get(o);
            if (u.li) {
                var a = ri(e.Gr.Kt, u.li, e.ai(o));
                i = i.add(o.path.Z());
                var c = Ni(a);
                r += c - s, n.push(e.Gr.ui(t, o, a));
            } else if (r -= s, e.Wr) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var f = ri(e.Gr.Kt, new Ut(o, Z.min()), e.ai(o));
                n.push(e.Gr.ui(t, o, f));
            } else n.push(e.Gr._i(t, o));
        })), i.forEach((function(r) {
            n.push(e.Gr.Ti.Us(t, r));
        })), n.push(this.Gr.updateMetadata(t, r)), yr.$n(n);
    }, e.prototype.di = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.Gr.Br(t, e).next((function(t) {
            return null === t ? (n.zr.set(e, 0), null) : (n.zr.set(e, t.size), t.li);
        }));
    }, e.prototype.wi = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.Gr.Ur(t, e).next((function(t) {
            var e = t.Qr;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.
            return t.Kr.forEach((function(t, e) {
                n.zr.set(t, e);
            })), e;
        }));
    }, e;
}(Ei);

/**
 * Creates a new IndexedDbRemoteDocumentCache.
 *
 * @param serializer - The document serializer.
 * @param indexManager - The query indexes that need to be maintained.
 */
/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ function Bi(t) {
    return $r(t, zr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function Ki(t) {
    return $r(t, Fr.store);
}

function Hi(t) {
    return t.path.rt();
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Performs database creation and schema upgrades. */ var Ji = /** @class */ function() {
    function t(t) {
        this.Kt = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.Yn = function(t, e, n, r) {
        var i = this;
        D(n < r && n >= 0 && r <= 11);
        var o = new mr("createOrUpgrade", e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore(Rr.store);
        }(t), function(t) {
            t.createObjectStore(Vr.store, {
                keyPath: Vr.keyPath
            }), t.createObjectStore(Ur.store, {
                keyPath: Ur.keyPath,
                autoIncrement: !0
            }).createIndex(Ur.userMutationsIndex, Ur.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(Mr.store);
        }(t), Wi(t), function(t) {
            t.createObjectStore(Fr.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var u = yr.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(Br.store), t.deleteObjectStore(Gr.store), t.deleteObjectStore(Kr.store);
        }(t), Wi(t)), u = u.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param txn - The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(Kr.store), n = new Kr(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, Z.min().G(), 
                /*targetCount=*/ 0);
                return e.put(Kr.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        u = u.next((function() {
            return function(t, e) {
                return e.store(Ur.store).os().next((function(n) {
                    t.deleteObjectStore(Ur.store), t.createObjectStore(Ur.store, {
                        keyPath: Ur.keyPath,
                        autoIncrement: !0
                    }).createIndex(Ur.userMutationsIndex, Ur.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store(Ur.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return yr.$n(i);
                }));
            }(t, o);
        }))), u = u.next((function() {
            !function(t) {
                t.createObjectStore(Jr.store, {
                    keyPath: Jr.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (u = u.next((function() {
            return i.Hr(o);
        }))), n < 6 && r >= 6 && (u = u.next((function() {
            return function(t) {
                t.createObjectStore(zr.store);
            }(t), i.Jr(o);
        }))), n < 7 && r >= 7 && (u = u.next((function() {
            return i.Yr(o);
        }))), n < 8 && r >= 8 && (u = u.next((function() {
            return i.Xr(t, o);
        }))), n < 9 && r >= 9 && (u = u.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(Fr.store);
                e.createIndex(Fr.readTimeIndex, Fr.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(Fr.collectionReadTimeIndex, Fr.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (u = u.next((function() {
            return i.Zr(o);
        }))), n < 11 && r >= 11 && (u = u.next((function() {
            !function(t) {
                t.createObjectStore(Wr.store, {
                    keyPath: Wr.keyPath
                });
            }(t), function(t) {
                t.createObjectStore(Qr.store, {
                    keyPath: Qr.keyPath
                });
            }(t);
        }))), u;
    }, t.prototype.Jr = function(t) {
        var e = 0;
        return t.store(Fr.store).ls((function(t, n) {
            e += Ni(n);
        })).next((function() {
            var n = new zr(e);
            return t.store(zr.store).put(zr.key, n);
        }));
    }, t.prototype.Hr = function(t) {
        var e = this, n = t.store(Vr.store), r = t.store(Ur.store);
        return n.os().next((function(n) {
            return yr.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.os(Ur.userMutationsIndex, i).next((function(r) {
                    return yr.forEach(r, (function(r) {
                        D(r.userId === n.userId);
                        var i = ai(e.Kt, r);
                        return Ti(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.Yr = function(t) {
        var e = t.store(Br.store), n = t.store(Fr.store);
        return t.store(Kr.store).get(Kr.key).next((function(t) {
            var r = [];
            return n.ls((function(n, i) {
                var o = new et(n), u = function(t) {
                    return [ 0, kr(t) ];
                }(o);
                r.push(e.get(u).next((function(n) {
                    return n ? yr.resolve() : function(n) {
                        return e.put(new Br(0, kr(n), t.highestListenSequenceNumber));
                    }(o);
                })));
            })).next((function() {
                return yr.$n(r);
            }));
        }));
    }, t.prototype.Xr = function(t, e) {
        // Create the index.
        t.createObjectStore(Hr.store, {
            keyPath: Hr.keyPath
        });
        var n = e.store(Hr.store), r = new yi, i = function(t) {
            if (r.add(t)) {
                var e = t.et(), i = t.Z();
                return n.put({
                    collectionId: e,
                    parent: kr(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(Fr.store).ls({
            hs: !0
        }, (function(t, e) {
            var n = new et(t);
            return i(n.Z());
        })).next((function() {
            return e.store(Mr.store).ls({
                hs: !0
            }, (function(t, e) {
                t[0];
                var n = t[1], r = (t[2], Lr(n));
                return i(r.Z());
            }));
        }));
    }, t.prototype.Zr = function(t) {
        var e = this, n = t.store(Gr.store);
        return n.ls((function(t, r) {
            var i = ci(r), o = fi(e.Kt, i);
            return n.put(o);
        }));
    }, t;
}();

function Wi(t) {
    t.createObjectStore(Br.store, {
        keyPath: Br.keyPath
    }).createIndex(Br.documentTargetsIndex, Br.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(Gr.store, {
        keyPath: Gr.keyPath
    }).createIndex(Gr.queryTargetsIndexName, Gr.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(Kr.store);
}

var Qi = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", Yi = /** @class */ function() {
    function t(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    e, n, r, i, o, u, s, a, c, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    f) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, 
        this.eo = o, this.window = u, this.document = s, this.no = c, this.so = f, this.io = null, 
        this.ro = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.oo = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.co = null, 
        /** The client metadata refresh task. */
        this.ao = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.uo = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.ho = function(t) {
            return Promise.resolve();
        }, !t.jn()) throw new U(V.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.Ii = new ji(this, i), this.lo = n + "main", this.Kt = new ei(a), this._o = new gr(this.lo, 11, new Ji(this.Kt)), 
        this.fo = new Pi(this.Ii, this.Kt), this.Ti = new mi, this.wo = function(t, e) {
            return new zi(t, e);
        }(this.Kt, this.Ti), this.Eo = new li, this.window && this.window.localStorage ? this.To = this.window.localStorage : (this.To = null, 
        !1 === f && T("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @returns Whether persistence was enabled.
     */    return t.prototype.start = function() {
        var t = this;
        // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.
                return this.Io().then((function() {
            if (!t.isPrimary && !t.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new U(V.FAILED_PRECONDITION, Qi);
            return t.mo(), t.Ao(), t.Ro(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                return t.fo.ji(e);
            }));
        })).then((function(e) {
            t.io = new X(e, t.no);
        })).then((function() {
            t.ro = !0;
        })).catch((function(e) {
            return t._o && t._o.close(), Promise.reject(e);
        }));
    }, 
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Po = function(t) {
        var e = this;
        return this.ho = function(n) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                    return this.Tr ? [ 2 /*return*/ , t(n) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, 
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.yo = function(t) {
        var e = this;
        this._o.Zn((function(n) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return null === n.newVersion ? [ 4 /*yield*/ , t() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        e.sent(), e.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Vo = function(t) {
        var e = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.eo.ys((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.Tr ? [ 4 /*yield*/ , this.Io() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.Io = function() {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
            return $i(e).put(new Jr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.po(e).next((function(e) {
                    e || (t.isPrimary = !1, t.eo.bo((function() {
                        return t.ho(!1);
                    })));
                }));
            })).next((function() {
                return t.vo(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.So(e).next((function() {
                    return !1;
                })) : !!n && t.Do(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (_r(e)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return E("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return E("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t.eo.bo((function() {
                return t.ho(e);
            })), t.isPrimary = e;
        }));
    }, t.prototype.po = function(t) {
        var e = this;
        return Xi(t).get(Rr.key).next((function(t) {
            return yr.resolve(e.Co(t));
        }));
    }, t.prototype.xo = function(t) {
        return $i(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.No = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e, n, r, i = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return !this.isPrimary || this.Oo(this.uo, 18e5) ? [ 3 /*break*/ , 2 ] : (this.uo = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(t) {
                        var e = $r(t, Jr.store);
                        return e.os().next((function(t) {
                            var n = i.Fo(t, 18e5), r = t.filter((function(t) {
                                return -1 === n.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return yr.forEach(r, (function(t) {
                                return e.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    if (t = o.sent(), this.To) for (e = 0, n = t; e < n.length; e++) r = n[e], this.To.removeItem(this.ko(r.clientId));
                    o.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.Ro = function() {
        var t = this;
        this.ao = this.eo.Ir("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.Io().then((function() {
                return t.No();
            })).then((function() {
                return t.Ro();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ t.prototype.Co = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.vo = function(t) {
        var e = this;
        return this.so ? yr.resolve(!0) : Xi(t).get(Rr.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.Oo(n.leaseTimestampMs, 5e3) && !e.Mo(n.ownerId)) {
                if (e.Co(n) && e.networkEnabled) return !0;
                if (!e.Co(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new U(V.FAILED_PRECONDITION, Qi);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || $i(t).os().next((function(t) {
                return void 0 === e.Fo(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && E("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.Lo = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.ro = !1, this.$o(), this.ao && (this.ao.cancel(), this.ao = null), this.Bo(), 
                    this.qo(), [ 4 /*yield*/ , this._o.runTransaction("shutdown", "readwrite", [ Rr.store, Jr.store ], (function(e) {
                        var n = new Xr(e, X.U);
                        return t.So(n).next((function() {
                            return t.xo(n);
                        }));
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    return e.sent(), this._o.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.Uo(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.Fo = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.Oo(t.updateTimeMs, e) && !n.Mo(t.clientId);
        }));
    }, 
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Qo = function() {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", (function(e) {
            return $i(e).os().next((function(e) {
                return t.Fo(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, Object.defineProperty(t.prototype, "Tr", {
        get: function() {
            return this.ro;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Ko = function(t) {
        return Ai.Ai(t, this.Kt, this.Ti, this.Ii);
    }, t.prototype.Dr = function() {
        return this.fo;
    }, t.prototype.Fr = function() {
        return this.wo;
    }, t.prototype.jo = function() {
        return this.Ti;
    }, t.prototype.Wo = function() {
        return this.Eo;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        E("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this._o.runTransaction(t, o, Yr, (function(o) {
            return i = new Xr(o, r.io ? r.io.next() : X.U), "readwrite-primary" === e ? r.po(i).next((function(t) {
                return !!t || r.vo(i);
            })).next((function(e) {
                if (!e) throw T("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r.eo.bo((function() {
                    return r.ho(!1);
                })), new U(V.FAILED_PRECONDITION, Dr);
                return n(i);
            })).next((function(t) {
                return r.Do(i).next((function() {
                    return t;
                }));
            })) : r.Go(i).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.ps(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.Go = function(t) {
        var e = this;
        return Xi(t).get(Rr.key).next((function(t) {
            if (null !== t && e.Oo(t.leaseTimestampMs, 5e3) && !e.Mo(t.ownerId) && !e.Co(t) && !(e.so || e.allowTabSynchronization && t.allowTabSynchronization)) throw new U(V.FAILED_PRECONDITION, Qi);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.Do = function(t) {
        var e = new Rr(this.clientId, this.allowTabSynchronization, Date.now());
        return Xi(t).put(Rr.key, e);
    }, t.jn = function() {
        return gr.jn();
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ t.prototype.So = function(t) {
        var e = this, n = Xi(t);
        return n.get(Rr.key).next((function(t) {
            return e.Co(t) ? (E("IndexedDbPersistence", "Releasing primary lease."), n.delete(Rr.key)) : yr.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ t.prototype.Oo = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (T("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, t.prototype.mo = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.co = function() {
            t.eo.ys((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.Io();
            }));
        }, this.document.addEventListener("visibilitychange", this.co), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.Bo = function() {
        this.co && (this.document.removeEventListener("visibilitychange", this.co), this.co = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.Ao = function() {
        var t, e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.oo = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.$o(), e.eo.ys((function() {
                return e.Lo();
            }));
        }, this.window.addEventListener("unload", this.oo));
    }, t.prototype.qo = function() {
        this.oo && (this.window.removeEventListener("unload", this.oo), this.oo = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.Mo = function(t) {
        var e;
        try {
            var n = null !== (null === (e = this.To) || void 0 === e ? void 0 : e.getItem(this.ko(t)));
            return E("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return T("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.$o = function() {
        if (this.To) try {
            this.To.setItem(this.ko(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            T("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ t.prototype.Uo = function() {
        if (this.To) try {
            this.To.removeItem(this.ko(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.ko = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, t;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the “primary client”. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function Xi(t) {
    return $r(t, Rr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function $i(t) {
    return $r(t, Jr.store);
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function Zi(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    var n = t.projectId;
    return t.m || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;
}

var to = function(t, e) {
    this.progress = t, this.zo = e;
}, eo = /** @class */ function() {
    function t(t, e, n) {
        this.wo = t, this.Ho = e, this.Ti = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Jo = function(t, e) {
        var n = this;
        return this.Ho.vi(t, e).next((function(r) {
            return n.Yo(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Yo = function(t, e, n) {
        return this.wo.fi(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].xs(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.Xo = function(t, e, n) {
        var r = vn();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].xs(t, e);
            }
            r = r.Ht(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.Zo = function(t, e) {
        var n = this;
        return this.wo.getEntries(t, e).next((function(e) {
            return n.tc(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.tc = function(t, e) {
        var n = this;
        return this.Ho.Si(t, e).next((function(r) {
            var i = n.Xo(t, e, r), o = dn();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new Ut(t, Z.min())), o = o.Ht(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.jr = function(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return it.Et(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.ec(t, e.path) : le(e) ? this.nc(t, e, n) : this.sc(t, e, n);
    }, t.prototype.ec = function(t, e) {
        // Just do a simple document lookup.
        return this.Jo(t, new it(e)).next((function(t) {
            var e = mn();
            return t instanceof Vt && (e = e.Ht(t.key, t)), e;
        }));
    }, t.prototype.nc = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = mn();
        return this.Ti.Qs(t, i).next((function(u) {
            return yr.forEach(u, (function(u) {
                var s = function(t, e) {
                    return new oe(e, 
                    /*collectionGroup=*/ null, t.Nt.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
                }(e, u.child(i));
                return r.sc(t, s, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.Ht(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.sc = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.wo.jr(t, e, n).next((function(n) {
            return r = n, o.Ho.Ci(t, e);
        })).next((function(e) {
            return i = e, o.ic(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], u = 0, s = o.mutations; u < s.length; u++) {
                    var a = s[u], c = a.key, f = Be(a, r.get(c), 0, o.Ss);
                    r = f instanceof Vt ? r.Ht(c, f) : r.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                we(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.ic = function(t, e, n) {
        for (var r = _n(), i = 0, o = e; i < o.length; i++) for (var u = 0, s = o[i].mutations; u < s.length; u++) {
            var a = s[u];
            a instanceof Qe && null === n.get(a.key) && (r = r.add(a.key));
        }
        var c = n;
        return this.wo.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof Vt && (c = c.Ht(t, e));
            })), c;
        }));
    }, t;
}(), no = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.rc = n, this.oc = r;
    }
    return t.cc = function(e, n) {
        for (var r = _n(), i = _n(), o = 0, u = n.docChanges; o < u.length; o++) {
            var s = u[o];
            switch (s.type) {
              case 0 /* Added */ :
                r = r.add(s.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(s.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), ro = /** @class */ function() {
    function t() {}
    /** Sets the document view to query against. */    return t.prototype.ac = function(t) {
        this.uc = t;
    }, 
    /** Returns all local documents matching the specified query. */ t.prototype.jr = function(t, n, r, i) {
        var o = this;
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.Nt.length || 1 === t.Nt.length && t.Nt[0].field.ht());
        }(n) || r.isEqual(Z.min()) ? this.hc(t, n) : this.uc.Zo(t, i).next((function(u) {
            var s = o.lc(n, u);
            return (ae(n) || ce(n)) && o._c(n.limitType, s, i, r) ? o.hc(t, n) : (I() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].DEBUG && E("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), ge(n)), 
            o.uc.jr(t, n, r).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return s.forEach((function(e) {
                    t = t.Ht(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.lc = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new hn(be(t));
        return e.forEach((function(e, r) {
            r instanceof Vt && we(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */
    t.prototype._c = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.u(r) > 0);
    }, t.prototype.hc = function(t, n) {
        return I() <= _firebase_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].DEBUG && E("QueryEngine", "Using full collection scan to execute query:", ge(n)), 
        this.uc.jr(t, n, Z.min());
    }, t;
}(), io = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n, r) {
        this.persistence = t, this.fc = e, this.Kt = r, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.dc = new an(P), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.wc = new Ii((function(t) {
            return Ft(t);
        }), zt), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.Ec = Z.min(), this.Ho = t.Ko(n), this.Tc = t.Fr(), this.fo = t.Dr(), this.Ic = new eo(this.Tc, this.Ho, this.persistence.jo()), 
        this.Eo = t.Wo(), this.fc.ac(this.Ic);
    }
    return t.prototype.mr = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.pr(n, e.dc);
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ function oo(
/** Manages our in-memory or durable persistence. */
t, e, n, r) {
    return new io(t, e, n, r);
}

/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
function uo(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                return n = x(t), r = n.Ho, i = n.Ic, [ 4 /*yield*/ , n.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                    // Swap out the mutation queue, grabbing the pending mutation batches
                    // before and after.
                    var o;
                    return n.Ho.bi(t).next((function(u) {
                        return o = u, r = n.persistence.Ko(e), 
                        // Recreate our LocalDocumentsView using the new
                        // MutationQueue.
                        i = new eo(n.Tc, r, n.persistence.jo()), r.bi(t);
                    })).next((function(e) {
                        for (var n = [], r = [], u = _n(), s = 0, a = o
                        // Union the old/new changed keys.
                        ; s < a.length; s++) {
                            var c = a[s];
                            n.push(c.batchId);
                            for (var f = 0, h = c.mutations; f < h.length; f++) {
                                var l = h[f];
                                u = u.add(l.key);
                            }
                        }
                        for (var p = 0, d = e; p < d.length; p++) {
                            var v = d[p];
                            r.push(v.batchId);
                            for (var y = 0, m = v.mutations; y < m.length; y++) {
                                var g = m[y];
                                u = u.add(g.key);
                            }
                        }
                        // Return the set of all (potentially) changed documents and the list
                        // of mutation batch IDs that were affected by change.
                                                return i.Zo(t, u).next((function(t) {
                            return {
                                mc: t,
                                Ac: n,
                                Rc: r
                            };
                        }));
                    }));
                })) ];

              case 1:
                return o = u.sent(), [ 2 /*return*/ , (n.Ho = r, n.Ic = i, n.fc.ac(n.Ic), o) ];
            }
        }));
    }));
}

/* Accepts locally generated Mutations and commit them to storage. */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */ function so(t, e) {
    var n = x(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
        var r = e.batch.keys(), i = n.Tc.Or({
            Wr: !0
        });
        return function(t, e, n, r) {
            var i = n.batch, o = i.keys(), u = yr.resolve();
            return o.forEach((function(t) {
                u = u.next((function() {
                    return r.fi(e, t);
                })).next((function(e) {
                    var o = e, u = n.Fs.get(t);
                    D(null !== u), (!o || o.version.u(u) < 0) && ((o = i.Ds(t, o, n)) && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    r.ui(o, n.Os));
                }));
            })), u.next((function() {
                return t.Ho.xi(e, i);
            }));
        }(n, t, e, i).next((function() {
            return i.apply(t);
        })).next((function() {
            return n.Ho.Fi(t);
        })).next((function() {
            return n.Ic.Zo(t, r);
        }));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */ function ao(t) {
    var e = x(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
        return e.fo.Ki(t);
    }));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function co(t, e) {
    var n = x(t), r = e.Mt, i = n.dc;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
        var o = n.Tc.Or({
            Wr: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.dc;
        var u = [];
        e.Fe.forEach((function(e, o) {
            var s = i.get(o);
            if (s) {
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                u.push(n.fo.ir(t, e.Ke, o).next((function() {
                    return n.fo.nr(t, e.Ue, o);
                })));
                var a = e.resumeToken;
                // Update the resume token if the change includes one.
                                if (a.o() > 0) {
                    var c = s.$t(a, r).Lt(t.vs);
                    i = i.Ht(o, c), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        return D(e.resumeToken.o() > 0), 0 === t.resumeToken.o() || (
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                        e.Mt.W() - t.Mt.W() >= 3e8 || n.Ue.size + n.Qe.size + n.Ke.size > 0);
                    }(s, c, e) && u.push(n.fo.Ji(t, c));
                }
            }
        }));
        var s = dn();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
                if (e.Me.forEach((function(r, i) {
            e.Le.has(r) && u.push(n.persistence.Ii.kr(t, r));
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        u.push(fo(t, o, e.Me, r, void 0).next((function(t) {
            s = t;
        }))), !r.isEqual(Z.min())) {
            var a = n.fo.Ki(t).next((function(e) {
                return n.fo.Wi(t, t.vs, r);
            }));
            u.push(a);
        }
        return yr.$n(u).next((function() {
            return o.apply(t);
        })).next((function() {
            return n.Ic.tc(t, s);
        }));
    })).then((function(t) {
        return n.dc = i, t;
    }));
}

/**
 * Populates document change buffer with documents from backend or a bundle.
 * Returns the document changes resulting from applying those documents.
 *
 * @param txn - Transaction to use to read existing documents from storage.
 * @param documentBuffer - Document buffer to collect the resulted changes to be
 *        applied to storage.
 * @param documents - Documents to be applied.
 * @param globalVersion - A `SnapshotVersion` representing the read time if all
 *        documents have the same read time.
 * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
 *        have their own read time.
 *
 * Note: this function will use `documentVersions` if it is defined;
 * when it is not defined, resorts to `globalVersion`.
 */ function fo(t, e, n, r, 
// TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
// this parameter.
i) {
    var o = _n();
    return n.forEach((function(t) {
        return o = o.add(t);
    })), e.getEntries(t, o).next((function(t) {
        var o = dn();
        return n.forEach((function(n, u) {
            var s = t.get(n), a = (null == i ? void 0 : i.get(n)) || r;
            // Note: The order of the steps below is important, since we want
            // to ensure that rejected limbo resolutions (which fabricate
            // NoDocuments with SnapshotVersion.min()) never add documents to
            // cache.
                        u instanceof Ut && u.version.isEqual(Z.min()) ? (
            // NoDocuments with SnapshotVersion.min() are used in manufactured
            // events. We remove these documents from cache since we lost
            // access.
            e._i(n, a), o = o.Ht(n, u)) : null == s || u.version.u(s.version) > 0 || 0 === u.version.u(s.version) && s.hasPendingWrites ? (e.ui(u, a), 
            o = o.Ht(n, u)) : E("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", s.version, " Watch version:", u.version);
        })), o;
    }))
    /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */;
}

function ho(t, e) {
    var n = x(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
        return void 0 === e && (e = -1), n.Ho.Vi(t, e);
    }));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */ function lo(t, e) {
    var n = x(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
        var r;
        return n.fo.er(t, e).next((function(i) {
            return i ? (
            // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, yr.resolve(r)) : n.fo.qi(t).next((function(i) {
                return r = new Ie(e, i, 0 /* Listen */ , t.vs), n.fo.Gi(t, r).next((function() {
                    return r;
                }));
            }));
        }));
    })).then((function(t) {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        var r = n.dc.get(t.targetId);
        return (null === r || t.Mt.u(r.Mt) > 0) && (n.dc = n.dc.Ht(t.targetId, t), n.wc.set(e, t.targetId)), 
        t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function po(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, u;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                r = x(t), i = r.dc.get(e), o = n ? "readwrite" : "readwrite-primary", s.label = 1;

              case 1:
                return s.trys.push([ 1, 4, , 5 ]), n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , r.persistence.runTransaction("Release target", o, (function(t) {
                    return r.persistence.Ii.removeTarget(t, i);
                })) ];

              case 2:
                s.sent(), s.label = 3;

              case 3:
                return [ 3 /*break*/ , 5 ];

              case 4:
                if (!_r(u = s.sent())) throw u;
                // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.
                                return E("LocalStore", "Failed to update sequence numbers for target " + e + ": " + u), 
                [ 3 /*break*/ , 5 ];

              case 5:
                return r.dc = r.dc.remove(e), r.wc.delete(i.target), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function vo(t, e, n) {
    var r = x(t), i = Z.min(), o = _n();
    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
        return function(t, e, n) {
            var r = x(t), i = r.wc.get(n);
            return void 0 !== i ? yr.resolve(r.dc.get(i)) : r.fo.er(e, n);
        }(r, t, de(e)).next((function(e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.fo.cr(t, e.targetId).next((function(t) {
                o = t;
            }));
        })).next((function() {
            return r.fc.jr(t, e, n ? i : Z.min(), n ? o : _n());
        })).next((function(t) {
            return {
                documents: t,
                Pc: o
            };
        }));
    }));
}

// PORTING NOTE: Multi-Tab only.
function yo(t, e) {
    var n = x(t), r = x(n.fo), i = n.dc.get(e);
    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
        return r.Dn(t, e).next((function(t) {
            return t ? t.target : null;
        }));
    }));
}

/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.
function mo(t) {
    var e = x(t);
    return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
        return function(t, e, n) {
            var r = x(t), i = dn(), o = ii(n), u = Ki(e), s = IDBKeyRange.lowerBound(o, !0);
            return u.ls({
                index: Fr.readTimeIndex,
                range: s
            }, (function(t, e) {
                // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
                // the documents directly since we want to keep sentinel deletes.
                var n = ni(r.Kt, e);
                i = i.Ht(n.key, n), o = e.readTime;
            })).next((function() {
                return {
                    zo: i,
                    readTime: oi(o)
                };
            }));
        }(e.Tc, t, e.Ec);
    })).then((function(t) {
        var n = t.zo, r = t.readTime;
        return e.Ec = r, n;
    }));
}

/**
 * Reads the newest document change from persistence and moves the internal
 * synchronization marker forward so that calls to `getNewDocumentChanges()`
 * only return changes that happened after client initialization.
 */
// PORTING NOTE: Multi-Tab only.
function go(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
            return [ 2 /*return*/ , (e = x(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                return function(t) {
                    var e = Ki(t), n = Z.min();
                    // If there are no existing entries, we return SnapshotVersion.min().
                                        return e.ls({
                        index: Fr.readTimeIndex,
                        reverse: !0
                    }, (function(t, e, r) {
                        e.readTime && (n = oi(e.readTime)), r.done();
                    })).next((function() {
                        return n;
                    }));
                }(t);
            })).then((function(t) {
                e.Ec = t;
            })) ];
        }));
    }));
}

/**
 * Creates a new target using the given bundle name, which will be used to
 * hold the keys of all documents from the bundle in query-document mappings.
 * This ensures that the loaded documents do not get garbage collected
 * right away.
 */
/**
 * Applies the documents from a bundle to the "ground-state" (remote)
 * documents.
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function wo(t, e, n, r) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var i, o, u, s, a, c, f, h, l, p;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(d) {
            switch (d.label) {
              case 0:
                for (i = x(t), o = _n(), u = dn(), s = wn(), a = 0, c = n; a < c.length; a++) f = c[a], 
                h = e.yc(f.metadata.name), f.document && (o = o.add(h)), u = u.Ht(h, e.gc(f)), s = s.Ht(h, e.Vc(f.metadata.readTime));
                return l = i.Tc.Or({
                    Wr: !0
                }), [ 4 /*yield*/ , lo(i, function(t) {
                    // It is OK that the path used for the query is not valid, because this will
                    // not be read and queried.
                    return de(se(et.ct("__bundle__/docs/" + t)));
                }(r)) ];

              case 1:
                // Allocates a target to hold all document keys from the bundle, such that
                // they will not get garbage collected right away.
                return p = d.sent(), [ 2 /*return*/ , i.persistence.runTransaction("Apply bundle documents", "readwrite", (function(t) {
                    return fo(t, l, u, Z.min(), s).next((function(e) {
                        return l.apply(t), e;
                    })).next((function(e) {
                        return i.fo.Xi(t, p.targetId).next((function() {
                            return i.fo.nr(t, o, p.targetId);
                        })).next((function() {
                            return i.Ic.tc(t, e);
                        }));
                    }));
                })) ];
            }
        }));
    }));
}

/**
 * Returns a promise of a boolean to indicate if the given bundle has already
 * been loaded and the create time is newer than the current loading bundle.
 */
/**
 * Saves the given `NamedQuery` to local persistence.
 */ function bo(t, e, n) {
    return void 0 === n && (n = _n()), Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return [ 4 /*yield*/ , lo(t, de(hi(e.bundledQuery))) ];

              case 1:
                return r = o.sent(), [ 2 /*return*/ , (i = x(t)).persistence.runTransaction("Save named query", "readwrite", (function(t) {
                    var o = zn(e.readTime);
                    // Simply save the query itself if it is older than what the SDK already
                    // has.
                                        if (r.Mt.u(o) >= 0) return i.Eo.Bs(t, e);
                    // Update existing target data because the query from the bundle is newer.
                                        var u = r.$t(R.h, o);
                    return i.dc = i.dc.Ht(u.targetId, u), i.fo.Ji(t, u).next((function() {
                        return i.fo.Xi(t, r.targetId);
                    })).next((function() {
                        return i.fo.nr(t, n, r.targetId);
                    })).next((function() {
                        return i.Eo.Bs(t, e);
                    }));
                })) ];
            }
        }));
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _o = /** @class */ function() {
    function t(t) {
        this.Kt = t, this.bc = new Map, this.vc = new Map;
    }
    return t.prototype.Ms = function(t, e) {
        return yr.resolve(this.bc.get(e));
    }, t.prototype.Ls = function(t, e) {
        /** Decodes a BundleMetadata proto into a BundleMetadata object. */
        var n;
        return this.bc.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: zn(n.createTime)
        }), yr.resolve();
    }, t.prototype.$s = function(t, e) {
        return yr.resolve(this.vc.get(e));
    }, t.prototype.Bs = function(t, e) {
        return this.vc.set(e.name, function(t) {
            return {
                name: t.name,
                query: hi(t.bundledQuery),
                readTime: zn(t.readTime)
            };
        }(e)), yr.resolve();
    }, t;
}(), Io = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.Sc = new hn(Eo.Dc), 
        // A set of outstanding references to a document sorted by target id.
        this.Cc = new hn(Eo.xc)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.nt = function() {
        return this.Sc.nt();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.sr = function(t, e) {
        var n = new Eo(t, e);
        this.Sc = this.Sc.add(n), this.Cc = this.Cc.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.Nc = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.sr(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.rr = function(t, e) {
        this.Oc(new Eo(t, e));
    }, t.prototype.Fc = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.rr(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.kc = function(t) {
        var e = this, n = new it(new et([])), r = new Eo(n, t), i = new Eo(n, t + 1), o = [];
        return this.Cc.Ae([ r, i ], (function(t) {
            e.Oc(t), o.push(t.key);
        })), o;
    }, t.prototype.Mc = function() {
        var t = this;
        this.Sc.forEach((function(e) {
            return t.Oc(e);
        }));
    }, t.prototype.Oc = function(t) {
        this.Sc = this.Sc.delete(t), this.Cc = this.Cc.delete(t);
    }, t.prototype.Lc = function(t) {
        var e = new it(new et([])), n = new Eo(e, t), r = new Eo(e, t + 1), i = _n();
        return this.Cc.Ae([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.ki = function(t) {
        var e = new Eo(t, 0), n = this.Sc.Pe(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), Eo = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.$c = e
        /** Compare by key then by ID */;
    }
    return t.Dc = function(t, e) {
        return it.J(t.key, e.key) || P(t.$c, e.$c);
    }, 
    /** Compare by ID then by key */ t.xc = function(t, e) {
        return P(t.$c, e.$c) || it.J(t.key, e.key);
    }, t;
}(), To = /** @class */ function() {
    function t(t, e) {
        this.Ti = t, this.Ii = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.Ho = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Bc = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.qc = new hn(Eo.Dc);
    }
    return t.prototype.Ri = function(t) {
        return yr.resolve(0 === this.Ho.length);
    }, t.prototype.Pi = function(t, e, n, r) {
        var i = this.Bc;
        this.Bc++, this.Ho.length > 0 && this.Ho[this.Ho.length - 1];
        var o = new Zr(i, e, n, r);
        this.Ho.push(o);
        // Track references by document key and index collection parents.
        for (var u = 0, s = r; u < s.length; u++) {
            var a = s[u];
            this.qc = this.qc.add(new Eo(a.key, i)), this.Ti.Us(t, a.key.path.Z());
        }
        return yr.resolve(o);
    }, t.prototype.yi = function(t, e) {
        return yr.resolve(this.Uc(e));
    }, t.prototype.Vi = function(t, e) {
        var n = e + 1, r = this.Qc(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return yr.resolve(this.Ho.length > i ? this.Ho[i] : null);
    }, t.prototype.pi = function() {
        return yr.resolve(0 === this.Ho.length ? -1 : this.Bc - 1);
    }, t.prototype.bi = function(t) {
        return yr.resolve(this.Ho.slice());
    }, t.prototype.vi = function(t, e) {
        var n = this, r = new Eo(e, 0), i = new Eo(e, Number.POSITIVE_INFINITY), o = [];
        return this.qc.Ae([ r, i ], (function(t) {
            var e = n.Uc(t.$c);
            o.push(e);
        })), yr.resolve(o);
    }, t.prototype.Si = function(t, e) {
        var n = this, r = new hn(P);
        return e.forEach((function(t) {
            var e = new Eo(t, 0), i = new Eo(t, Number.POSITIVE_INFINITY);
            n.qc.Ae([ e, i ], (function(t) {
                r = r.add(t.$c);
            }));
        })), yr.resolve(this.Kc(r));
    }, t.prototype.Ci = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                it.Et(i) || (i = i.child(""));
        var o = new Eo(new it(i), 0), u = new hn(P);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.qc.Re((function(t) {
            var e = t.key.path;
            return !!n.st(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (u = u.add(t.$c)), !0);
        }), o), yr.resolve(this.Kc(u));
    }, t.prototype.Kc = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.Uc(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.xi = function(t, e) {
        var n = this;
        D(0 === this.jc(e.batchId, "removed")), this.Ho.shift();
        var r = this.qc;
        return yr.forEach(e.mutations, (function(i) {
            var o = new Eo(i.key, e.batchId);
            return r = r.delete(o), n.Ii.Oi(t, i.key);
        })).next((function() {
            n.qc = r;
        }));
    }, t.prototype.Ni = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.ki = function(t, e) {
        var n = new Eo(e, 0), r = this.qc.Pe(n);
        return yr.resolve(e.isEqual(r && r.key));
    }, t.prototype.Fi = function(t) {
        return this.Ho.length, yr.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.jc = function(t, e) {
        return this.Qc(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Qc = function(t) {
        return 0 === this.Ho.length ? 0 : t - this.Ho[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Uc = function(t) {
        var e = this.Qc(t);
        return e < 0 || e >= this.Ho.length ? null : this.Ho[e];
    }, t;
}(), No = /** @class */ function() {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    function t(t, e) {
        this.Ti = t, this.Wc = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new an(it.J), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.ui = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, u = this.Wc(e);
        return this.docs = this.docs.Ht(r, {
            li: e,
            size: u,
            readTime: n
        }), this.size += u - o, this.Ti.Us(t, r.path.Z());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype._i = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.fi = function(t, e) {
        var n = this.docs.get(e);
        return yr.resolve(n ? n.li : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = vn();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.Ht(t, e ? e.li : null);
        })), yr.resolve(r);
    }, t.prototype.jr = function(t, e, n) {
        for (var r = mn(), i = new it(e.path.child("")), o = this.docs.ne(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.ae(); ) {
            var u = o.ce(), s = u.key, a = u.value, c = a.li, f = a.readTime;
            if (!e.path.st(s.path)) break;
            f.u(n) <= 0 || c instanceof Vt && we(e, c) && (r = r.Ht(c.key, c));
        }
        return yr.resolve(r);
    }, t.prototype.Gc = function(t, e) {
        return yr.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.Or = function(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new Ao(this);
    }, t.prototype.Mr = function(t) {
        return yr.resolve(this.size);
    }, t;
}(), Ao = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).Gr = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Ei = function(t) {
        var e = this, n = [];
        return this.oi.forEach((function(r, i) {
            i && i.li ? n.push(e.Gr.ui(t, i.li, e.ai(r))) : e.Gr._i(r);
        })), yr.$n(n);
    }, e.prototype.di = function(t, e) {
        return this.Gr.fi(t, e);
    }, e.prototype.wi = function(t, e) {
        return this.Gr.getEntries(t, e);
    }, e;
}(Ei), So = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.zc = new Ii((function(t) {
            return Ft(t);
        }), zt), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = Z.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.Hc = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.Jc = new Io, this.targetCount = 0, this.Yc = Oi.$i();
    }
    return t.prototype.mn = function(t, e) {
        return this.zc.forEach((function(t, n) {
            return e(n);
        })), yr.resolve();
    }, t.prototype.Ki = function(t) {
        return yr.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.ji = function(t) {
        return yr.resolve(this.Hc);
    }, t.prototype.qi = function(t) {
        return this.highestTargetId = this.Yc.next(), yr.resolve(this.highestTargetId);
    }, t.prototype.Wi = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.Hc && (this.Hc = e), 
        yr.resolve();
    }, t.prototype.zi = function(t) {
        this.zc.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.Yc = new Oi(e), this.highestTargetId = e), t.sequenceNumber > this.Hc && (this.Hc = t.sequenceNumber);
    }, t.prototype.Gi = function(t, e) {
        return this.zi(e), this.targetCount += 1, yr.resolve();
    }, t.prototype.Ji = function(t, e) {
        return this.zi(e), yr.resolve();
    }, t.prototype.Yi = function(t, e) {
        return this.zc.delete(e.target), this.Jc.kc(e.targetId), this.targetCount -= 1, 
        yr.resolve();
    }, t.prototype.Zi = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.zc.forEach((function(u, s) {
            s.sequenceNumber <= e && null === n.get(s.targetId) && (r.zc.delete(u), o.push(r.Xi(t, s.targetId)), 
            i++);
        })), yr.$n(o).next((function() {
            return i;
        }));
    }, t.prototype.tr = function(t) {
        return yr.resolve(this.targetCount);
    }, t.prototype.er = function(t, e) {
        var n = this.zc.get(e) || null;
        return yr.resolve(n);
    }, t.prototype.nr = function(t, e, n) {
        return this.Jc.Nc(e, n), yr.resolve();
    }, t.prototype.ir = function(t, e, n) {
        this.Jc.Fc(e, n);
        var r = this.persistence.Ii, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Oi(t, e));
        })), yr.$n(i);
    }, t.prototype.Xi = function(t, e) {
        return this.Jc.kc(e), yr.resolve();
    }, t.prototype.cr = function(t, e) {
        var n = this.Jc.Lc(e);
        return yr.resolve(n);
    }, t.prototype.ki = function(t, e) {
        return yr.resolve(this.Jc.ki(e));
    }, t;
}(), Do = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, e) {
        var n = this;
        this.Xc = {}, this.io = new X(0), this.ro = !1, this.ro = !0, this.Ii = t(this), 
        this.fo = new So(this), this.Ti = new vi, this.wo = function(t, e) {
            return new No(t, (function(t) {
                return n.Ii.Zc(t);
            }));
        }(this.Ti), this.Kt = new ei(e), this.Eo = new _o(this.Kt);
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.Lo = function() {
        // No durable state to ensure is closed on shutdown.
        return this.ro = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "Tr", {
        get: function() {
            return this.ro;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.yo = function() {
        // No op.
    }, t.prototype.Vo = function() {
        // No op.
    }, t.prototype.jo = function() {
        return this.Ti;
    }, t.prototype.Ko = function(t) {
        var e = this.Xc[t.R()];
        return e || (e = new To(this.Ti, this.Ii), this.Xc[t.R()] = e), e;
    }, t.prototype.Dr = function() {
        return this.fo;
    }, t.prototype.Fr = function() {
        return this.wo;
    }, t.prototype.Wo = function() {
        return this.Eo;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        E("MemoryPersistence", "Starting transaction:", t);
        var i = new xo(this.io.next());
        return this.Ii.ta(), n(i).next((function(t) {
            return r.Ii.ea(i).next((function() {
                return t;
            }));
        })).Mn().then((function(t) {
            return i.ps(), t;
        }));
    }, t.prototype.na = function(t, e) {
        return yr.Bn(Object.values(this.Xc).map((function(n) {
            return function() {
                return n.ki(t, e);
            };
        })));
    }, t;
}(), xo = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).vs = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e;
}(xr), ko = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.sa = new Io, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.ia = null;
    }
    return t.ra = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "oa", {
        get: function() {
            if (this.ia) return this.ia;
            throw S();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.sr = function(t, e, n) {
        return this.sa.sr(n, e), this.oa.delete(n.toString()), yr.resolve();
    }, t.prototype.rr = function(t, e, n) {
        return this.sa.rr(n, e), this.oa.add(n.toString()), yr.resolve();
    }, t.prototype.Oi = function(t, e) {
        return this.oa.add(e.toString()), yr.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.sa.kc(e.targetId).forEach((function(t) {
            return n.oa.add(t.toString());
        }));
        var r = this.persistence.Dr();
        return r.cr(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.oa.add(t.toString());
            }));
        })).next((function() {
            return r.Yi(t, e);
        }));
    }, t.prototype.ta = function() {
        this.ia = new Set;
    }, t.prototype.ea = function(t) {
        var e = this, n = this.persistence.Fr().Or();
        // Remove newly orphaned documents.
                return yr.forEach(this.oa, (function(r) {
            var i = it.ft(r);
            return e.ca(t, i).next((function(t) {
                t || n._i(i);
            }));
        })).next((function() {
            return e.ia = null, n.apply(t);
        }));
    }, t.prototype.kr = function(t, e) {
        var n = this;
        return this.ca(t, e).next((function(t) {
            t ? n.oa.delete(e.toString()) : n.oa.add(e.toString());
        }));
    }, t.prototype.Zc = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.ca = function(t, e) {
        var n = this;
        return yr.Bn([ function() {
            return yr.resolve(n.sa.ki(e));
        }, function() {
            return n.persistence.Dr().ki(t, e);
        }, function() {
            return n.persistence.na(t, e);
        } ]);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function Oo(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function Po(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.A() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function Lo(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
var Co = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.aa = function(e, n, r) {
        var i = JSON.parse(r), o = "object" == typeof i && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error), u = void 0;
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (u = new U(i.error.code, i.error.message))), 
        o ? new t(e, n, i.state, u) : (T("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.ua = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Ro = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.aa = function(e, n) {
        var r = JSON.parse(n), i = "object" == typeof r && -1 !== [ "not-current", "current", "rejected" ].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), o = void 0;
        return i && r.error && ((i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new U(r.error.code, r.error.message))), 
        i ? new t(e, r.state, o) : (T("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.ua = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Vo = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.aa = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = En(), u = 0; i && u < r.activeTargetIds.length; ++u) i = gt(r.activeTargetIds[u]), 
        o = o.add(r.activeTargetIds[u]);
        return i ? new t(e, o) : (T("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), Uo = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.aa = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (T("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), Mo = /** @class */ function() {
    function t() {
        this.activeTargetIds = En();
    }
    return t.prototype.ha = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.la = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.ua = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.rt(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), qo = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.window = t, this.eo = e, this.persistenceKey = n, this._a = r, this.fa = null, 
        this.da = null, this.L = null, this.wa = this.Ea.bind(this), this.Ta = new an(P), 
        this.Tr = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Ia = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.ma = Oo(this.persistenceKey, this._a), 
        this.Aa = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.Ta = this.Ta.Ht(this._a, new Mo), this.Ra = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), 
        this.Pa = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.ya = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), 
        this.ga = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), this.Va = function(t) {
            return "firestore_bundle_loaded_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.wa);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.jn = function(t) {
        return !(!t || !t.localStorage);
    }, t.prototype.start = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e, n, r, i, o, u, s, a, c, f, h = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(l) {
                switch (l.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.fa.Qo() ];

                  case 1:
                    for (t = l.sent(), e = 0, n = t; e < n.length; e++) (r = n[e]) !== this._a && (i = this.getItem(Oo(this.persistenceKey, r))) && (o = Vo.aa(r, i)) && (this.Ta = this.Ta.Ht(o.clientId, o));
                    for (this.pa(), (u = this.storage.getItem(this.ga)) && (s = this.ba(u)) && this.va(s), 
                    a = 0, c = this.Ia; a < c.length; a++) f = c[a], this.Ea(f);
                    return this.Ia = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.window.addEventListener("unload", (function() {
                        return h.Lo();
                    })), this.Tr = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.q = function(t) {
        this.setItem(this.Aa, JSON.stringify(t));
    }, t.prototype.Sa = function() {
        return this.Da(this.Ta);
    }, t.prototype.Ca = function(t) {
        var e = !1;
        return this.Ta.forEach((function(n, r) {
            r.activeTargetIds.has(t) && (e = !0);
        })), e;
    }, t.prototype.xa = function(t) {
        this.Na(t, "pending");
    }, t.prototype.Oa = function(t, e, n) {
        this.Na(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.Fa(t);
    }, t.prototype.ka = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Ca(t)) {
            var n = this.storage.getItem(Lo(this.persistenceKey, t));
            if (n) {
                var r = Ro.aa(t, n);
                r && (e = r.state);
            }
        }
        return this.Ma.ha(t), this.pa(), e;
    }, t.prototype.La = function(t) {
        this.Ma.la(t), this.pa();
    }, t.prototype.$a = function(t) {
        return this.Ma.activeTargetIds.has(t);
    }, t.prototype.Ba = function(t) {
        this.removeItem(Lo(this.persistenceKey, t));
    }, t.prototype.qa = function(t, e, n) {
        this.Ua(t, e, n);
    }, t.prototype.Qa = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.Fa(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.xa(t);
        }));
    }, t.prototype.Ka = function(t) {
        this.ja(t);
    }, t.prototype.Wa = function() {
        this.Ga();
    }, t.prototype.Lo = function() {
        this.Tr && (this.window.removeEventListener("storage", this.wa), this.removeItem(this.ma), 
        this.Tr = !1);
    }, t.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return E("SharedClientState", "READ", t, e), e;
    }, t.prototype.setItem = function(t, e) {
        E("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, t.prototype.removeItem = function(t) {
        E("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.Ea = function(t) {
        var e = this, n = t;
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
                if (n.storageArea === this.storage) {
            if (E("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.ma) return void T("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.eo.bo((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var t, e, r, i, o, u;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
                        if (this.Tr) {
                            if (null !== n.key) if (this.Ra.test(n.key)) {
                                if (null == n.newValue) return t = this.za(n.key), [ 2 /*return*/ , this.Ha(t, null) ];
                                if (e = this.Ja(n.key, n.newValue)) return [ 2 /*return*/ , this.Ha(e.clientId, e) ];
                            } else if (this.Pa.test(n.key)) {
                                if (null !== n.newValue && (r = this.Ya(n.key, n.newValue))) return [ 2 /*return*/ , this.Xa(r) ];
                            } else if (this.ya.test(n.key)) {
                                if (null !== n.newValue && (i = this.Za(n.key, n.newValue))) return [ 2 /*return*/ , this.tu(i) ];
                            } else if (n.key === this.ga) {
                                if (null !== n.newValue && (o = this.ba(n.newValue))) return [ 2 /*return*/ , this.va(o) ];
                            } else if (n.key === this.Aa) (u = function(t) {
                                var e = X.U;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    D("number" == typeof n), e = n;
                                } catch (t) {
                                    T("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(n.newValue)) !== X.U && this.L(u); else if (n.key === this.Va) return [ 2 /*return*/ , this.fa.eu() ];
                        } else this.Ia.push(n);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "Ma", {
        get: function() {
            return this.Ta.get(this._a);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.pa = function() {
        this.setItem(this.ma, this.Ma.ua());
    }, t.prototype.Na = function(t, e, n) {
        var r = new Co(this.currentUser, t, e, n), i = Po(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.ua());
    }, t.prototype.Fa = function(t) {
        var e = Po(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, t.prototype.ja = function(t) {
        var e = {
            clientId: this._a,
            onlineState: t
        };
        this.storage.setItem(this.ga, JSON.stringify(e));
    }, t.prototype.Ua = function(t, e, n) {
        var r = Lo(this.persistenceKey, t), i = new Ro(t, e, n);
        this.setItem(r, i.ua());
    }, t.prototype.Ga = function() {
        this.setItem(this.Va, "value-not-used");
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.za = function(t) {
        var e = this.Ra.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.Ja = function(t, e) {
        var n = this.za(t);
        return Vo.aa(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Ya = function(t, e) {
        var n = this.Pa.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return Co.aa(new K(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Za = function(t, e) {
        var n = this.ya.exec(t), r = Number(n[1]);
        return Ro.aa(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.ba = function(t) {
        return Uo.aa(t);
    }, t.prototype.Xa = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                return t.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this.fa.nu(t.batchId, t.state, t.error) ] : (E("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, t.prototype.tu = function(t) {
        return this.fa.su(t.targetId, t.state, t.error);
    }, t.prototype.Ha = function(t, e) {
        var n = this, r = e ? this.Ta.Ht(t, e) : this.Ta.remove(t), i = this.Da(this.Ta), o = this.Da(r), u = [], s = [];
        return o.forEach((function(t) {
            i.has(t) || u.push(t);
        })), i.forEach((function(t) {
            o.has(t) || s.push(t);
        })), this.fa.iu(u, s).then((function() {
            n.Ta = r;
        }));
    }, t.prototype.va = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.Ta.get(t.clientId) && this.da(t.onlineState);
    }, t.prototype.Da = function(t) {
        var e = En();
        return t.forEach((function(t, n) {
            e = e.ye(n.activeTargetIds);
        })), e;
    }, t;
}(), jo = /** @class */ function() {
    function t() {
        this.ru = new Mo, this.ou = {}, this.da = null, this.L = null;
    }
    return t.prototype.xa = function(t) {
        // No op.
    }, t.prototype.Oa = function(t, e, n) {
        // No op.
    }, t.prototype.ka = function(t) {
        return this.ru.ha(t), this.ou[t] || "not-current";
    }, t.prototype.qa = function(t, e, n) {
        this.ou[t] = e;
    }, t.prototype.La = function(t) {
        this.ru.la(t);
    }, t.prototype.$a = function(t) {
        return this.ru.activeTargetIds.has(t);
    }, t.prototype.Ba = function(t) {
        delete this.ou[t];
    }, t.prototype.Sa = function() {
        return this.ru.activeTargetIds;
    }, t.prototype.Ca = function(t) {
        return this.ru.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.ru = new Mo, Promise.resolve();
    }, t.prototype.Qa = function(t, e, n) {
        // No op.
    }, t.prototype.Ka = function(t) {
        // No op.
    }, t.prototype.Lo = function() {}, t.prototype.q = function(t) {}, t.prototype.Wa = function() {
        // No op.
    }, t;
}(), Fo = /** @class */ function() {
    function t() {}
    return t.prototype.cu = function(t) {
        // No-op.
    }, t.prototype.Lo = function() {
        // No-op.
    }, t;
}(), zo = /** @class */ function() {
    function t() {
        var t = this;
        this.au = function() {
            return t.uu();
        }, this.hu = function() {
            return t.lu();
        }, this._u = [], this.fu();
    }
    return t.prototype.cu = function(t) {
        this._u.push(t);
    }, t.prototype.Lo = function() {
        window.removeEventListener("online", this.au), window.removeEventListener("offline", this.hu);
    }, t.prototype.fu = function() {
        window.addEventListener("online", this.au), window.addEventListener("offline", this.hu);
    }, t.prototype.uu = function() {
        E("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this._u; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.lu = function() {
        E("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this._u; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.jn = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), Go = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
}, Bo = /** @class */ function() {
    function t(t) {
        this.du = t.du, this.wu = t.wu;
    }
    return t.prototype.Eu = function(t) {
        this.Tu = t;
    }, t.prototype.Iu = function(t) {
        this.mu = t;
    }, t.prototype.onMessage = function(t) {
        this.Au = t;
    }, t.prototype.close = function() {
        this.wu();
    }, t.prototype.send = function(t) {
        this.du(t);
    }, t.prototype.Ru = function() {
        this.Tu();
    }, t.prototype.Pu = function(t) {
        this.mu(t);
    }, t.prototype.yu = function(t) {
        this.Au(t);
    }, t;
}(), Ko = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n.I = e.I, 
        n;
    }
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Du = function(t, e, n, r) {
        return new Promise((function(i, o) {
            var u = new _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["XhrIo"];
            u.listenOnce(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["EventType"].COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].NO_ERROR:
                        var e = u.getResponseJson();
                        E("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].TIMEOUT:
                        E("Connection", 'RPC "' + t + '" timed out'), o(new U(V.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["ErrorCode"].HTTP_ERROR:
                        var n = u.getStatus();
                        if (E("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var s = function(t) {
                                    var e = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(V).indexOf(e) >= 0 ? e : V.UNKNOWN;
                                }(r.status);
                                o(new U(s, r.message));
                            } else o(new U(V.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        o(new U(V.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        S();
                    }
                } finally {
                    E("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            var s = JSON.stringify(r);
            u.send(e, "POST", s, n, 15);
        }));
    }, e.prototype.xu = function(t, e) {
        var n = [ this.Vu, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], c = Object(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWebChannelTransport"])(), f = Object(_firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["getStatEventTarget"])(), h = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.T.projectId + "/databases/" + this.T.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.I
        };
        this.Su(h.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["isMobileCordova"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["isReactNative"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["isElectron"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["isIE"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["isUWP"])() || Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["isBrowserExtension"])() || (h.httpHeadersOverwriteParam = "$httpHeaders");
        var m = n.join("");
        E("Connection", "Creating WebChannel: " + m, h);
        var g = c.createWebChannel(m, h), w = !1, b = !1, _ = new Bo({
            du: function(t) {
                b ? E("Connection", "Not sending because WebChannel is closed:", t) : (w || (E("Connection", "Opening WebChannel transport."), 
                g.open(), w = !0), E("Connection", "WebChannel sending:", t), g.send(t));
            },
            wu: function() {
                return g.close();
            }
        }), I = function(t, e, n) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, (function(t) {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return I(g, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["WebChannel"].EventType.OPEN, (function() {
            b || E("Connection", "WebChannel transport opened.");
        })), I(g, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["WebChannel"].EventType.CLOSE, (function() {
            b || (b = !0, E("Connection", "WebChannel transport closed"), _.Pu());
        })), I(g, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["WebChannel"].EventType.ERROR, (function(t) {
            b || (b = !0, N("Connection", "WebChannel transport errored:", t), _.Pu(new U(V.UNAVAILABLE, "The operation could not be completed")));
        })), I(g, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["WebChannel"].EventType.MESSAGE, (function(t) {
            var e;
            if (!b) {
                var n = t.data[0];
                D(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    E("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, u = 
                    /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */
                    function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = tn[t];
                        if (void 0 !== e) return sn(e);
                    }(o), s = i.message;
                    void 0 === u && (u = V.INTERNAL, s = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    b = !0, _.Pu(new U(u, s)), g.close();
                } else E("Connection", "WebChannel received:", n), _.yu(n);
            }
        })), I(f, _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["Event"].STAT_EVENT, (function(t) {
            t.stat === _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["Stat"].PROXY ? E("Connection", "Detected buffering proxy") : t.stat === _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_2__["Stat"].NOPROXY && E("Connection", "Detected no buffering proxy");
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            _.Ru();
        }), 0), _;
    }, e;
}(/** @class */ function() {
    function t(t) {
        this.gu = t, this.T = t.T;
        var e = t.ssl ? "https" : "http";
        this.Vu = e + "://" + t.host, this.pu = "projects/" + this.T.projectId + "/databases/" + this.T.database + "/documents";
    }
    return t.prototype.bu = function(t, e, n, r) {
        var i = this.vu(t, e);
        E("RestConnection", "Sending: ", i, n);
        var o = {};
        return this.Su(o, r), this.Du(t, i, o, n).then((function(t) {
            return E("RestConnection", "Received: ", t), t;
        }), (function(e) {
            throw N("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), 
            e;
        }));
    }, t.prototype.Cu = function(t, e, n, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.bu(t, e, n, r);
    }, 
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    t.prototype.Su = function(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.2.2", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (var n in e.V) e.V.hasOwnProperty(n) && (t[n] = e.V[n]);
    }, t.prototype.vu = function(t, e) {
        var n = Go[t];
        return this.Vu + "/v1/" + e + ":" + n;
    }, t;
}());

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the WebChannelConnection for the browser. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'window' implementation or null if not available. */
function Ho() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */ function Jo() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wo(t) {
    return new Mn(t, /* useProto3Json= */ !0);
}

/**
 * An instance of the Platform's 'TextEncoder' implementation.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ var Qo = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.eo = t, this.ds = e, this.Nu = n, this.Ou = r, this.Fu = i, this.ku = 0, this.Mu = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Lu = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.ku = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.$u = function() {
        this.ku = this.Fu;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.Bu = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.ku + this.qu()), r = Math.max(0, Date.now() - this.Lu), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && E("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.ku + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.Mu = this.eo.Ir(this.ds, i, (function() {
            return e.Lu = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.ku *= this.Ou, this.ku < this.Nu && (this.ku = this.Nu), this.ku > this.Fu && (this.ku = this.Fu);
    }, t.prototype.Uu = function() {
        null !== this.Mu && (this.Mu.Ps(), this.Mu = null);
    }, t.prototype.cancel = function() {
        null !== this.Mu && (this.Mu.cancel(), this.Mu = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.qu = function() {
        return (Math.random() - .5) * this.ku;
    }, t;
}(), Yo = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.eo = t, this.Qu = n, this.Ku = r, this.ju = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.Wu = 0, this.Gu = null, this.stream = null, this.zu = new Qo(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.Hu = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.Ju = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.Yu();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Hu() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.Xu = function() {
        this.state = 0 /* Initial */ , this.zu.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.Zu = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.Ju() && null === this.Gu && (this.Gu = this.eo.Ir(this.Qu, 6e4, (function() {
            return t.th();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.eh = function(t) {
        this.nh(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.th = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                return this.Ju() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.nh = function() {
        this.Gu && (this.Gu.cancel(), this.Gu = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */
    t.prototype.close = function(t, e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.nh(), this.zu.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.Wu++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.zu.reset() : e && e.code === V.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    T(e.toString()), T("Using maximum backoff delay to prevent overloading the backend."), 
                    this.zu.$u()) : e && e.code === V.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.ju.v(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.sh(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.Iu(e) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.sh = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.ih(this.Wu), n = this.Wu;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.ju.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Wu === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.rh(e);
        }), (function(n) {
            e((function() {
                var e = new U(V.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.oh(e);
            }));
        }));
    }, t.prototype.rh = function(t) {
        var e = this, n = this.ih(this.Wu);
        this.stream = this.ah(t), this.stream.Eu((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.Eu();
            }));
        })), this.stream.Iu((function(t) {
            n((function() {
                return e.oh(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.Yu = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.zu.Bu((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(t, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.oh = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return E("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.ih = function(t) {
        var e = this;
        return function(n) {
            e.eo.ys((function() {
                return e.Wu === t ? n() : (E("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Xo = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        var u = this;
        return (u = t.call(this, e, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).Kt = i, 
        u;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.ah = function(t) {
        return this.Ku.xu("Listen", t);
    }, e.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.zu.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : S();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.qt ? (D(void 0 === e || "string" == typeof e), R.fromBase64String(e || "")) : (D(void 0 === e || e instanceof Uint8Array), 
                    R.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), u = (s = e.targetChange.cause) && function(t) {
                    var e = void 0 === t.code ? V.UNKNOWN : sn(t.code);
                    return new U(e, t.message || "");
                }(s);
                n = new On(r, i, o, u || null);
            } else if ("documentChange" in e) {
                e.documentChange, (r = e.documentChange).document, r.document.name, r.document.updateTime, 
                i = Hn(t, r.document.name), o = zn(r.document.updateTime);
                var s = new Pt({
                    mapValue: {
                        fields: r.document.fields
                    }
                }), a = (u = new Vt(i, o, s, {}), r.targetIds || []), c = r.removedTargetIds || [];
                n = new xn(a, c, u.key, u);
            } else if ("documentDelete" in e) e.documentDelete, (r = e.documentDelete).document, 
            i = Hn(t, r.document), o = r.readTime ? zn(r.readTime) : Z.min(), s = new Ut(i, o), 
            u = r.removedTargetIds || [], n = new xn([], u, s.key, s); else if ("documentRemove" in e) e.documentRemove, 
            (r = e.documentRemove).document, i = Hn(t, r.document), o = r.removedTargetIds || [], 
            n = new xn([], o, i, null); else {
                if (!("filter" in e)) return S();
                e.filter;
                var f = e.filter;
                f.targetId, r = f.count || 0, i = new on(r), o = f.targetId, n = new kn(o, i);
            }
            return n;
        }(this.Kt, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return Z.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? Z.min() : e.readTime ? zn(e.readTime) : Z.min();
        }(t);
        return this.listener.uh(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    e.prototype.hh = function(t) {
        var e = {};
        e.database = Qn(this.Kt), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = Gt(r) ? {
                documents: er(t, r)
            } : {
                query: nr(t, r)
            }).targetId = e.targetId, e.resumeToken.o() > 0 ? n.resumeToken = jn(t, e.resumeToken) : e.Mt.u(Z.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = qn(t, e.Mt.G())), n;
        }(this.Kt, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return S();
                }
            }(0, e.kt);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.Kt, t);
        n && (e.labels = n), this.eh(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    e.prototype.lh = function(t) {
        var e = {};
        e.database = Qn(this.Kt), e.removeTarget = t, this.eh(e);
    }, e;
}(Yo), $o = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        var u = this;
        return (u = t.call(this, e, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).Kt = i, 
        u._h = !1, u;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "fh", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this._h;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    e.prototype.start = function() {
        this._h = !1, this.lastStreamToken = void 0, t.prototype.start.call(this);
    }, e.prototype.sh = function() {
        this._h && this.dh([]);
    }, e.prototype.ah = function(t) {
        return this.Ku.xu("Write", t);
    }, e.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        D(!!t.streamToken), this.lastStreamToken = t.streamToken, this._h) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.zu.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (D(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? zn(t.updateTime) : zn(e);
                        n.isEqual(Z.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = zn(e));
                        var r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
                        new qe(n, r);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = zn(t.commitTime);
            return this.listener.wh(n, e);
        }
        // The first response is always the handshake response
                return D(!t.writeResults || 0 === t.writeResults.length), this._h = !0, 
        this.listener.Eh();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    e.prototype.Th = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = Qn(this.Kt), this.eh(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ e.prototype.dh = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return Zn(e.Kt, t);
            }))
        };
        this.eh(n);
    }, e;
}(Yo), Zo = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).credentials = e, i.Ku = n, i.Kt = r, i.Ih = !1, 
        i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.mh = function() {
        if (this.Ih) throw new U(V.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ e.prototype.bu = function(t, e, n) {
        var r = this;
        return this.mh(), this.credentials.getToken().then((function(i) {
            return r.Ku.bu(t, e, n, i);
        })).catch((function(t) {
            throw t.code === V.UNAUTHENTICATED && r.credentials.v(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ e.prototype.Cu = function(t, e, n) {
        var r = this;
        return this.mh(), this.credentials.getToken().then((function(i) {
            return r.Ku.Cu(t, e, n, i);
        })).catch((function(t) {
            throw t.code === V.UNAUTHENTICATED && r.credentials.v(), t;
        }));
    }, e.prototype.terminate = function() {
        this.Ih = !1;
    }, e;
}((function() {})), tu = /** @class */ function() {
    function t(t, e) {
        this.fs = t, this.da = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Ah = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Rh = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Ph = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.yh = function() {
        var t = this;
        0 === this.Ah && (this.gh("Unknown" /* Unknown */), this.Rh = this.fs.Ir("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.Rh = null, t.Vh("Backend didn't respond within 10 seconds."), t.gh("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.ph = function(t) {
        "Online" /* Online */ === this.state ? this.gh("Unknown" /* Unknown */) : (this.Ah++, 
        this.Ah >= 1 && (this.bh(), this.Vh("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.gh("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.bh(), this.Ah = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Ph = !1), this.gh(t);
    }, t.prototype.gh = function(t) {
        t !== this.state && (this.state = t, this.da(t));
    }, t.prototype.Vh = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Ph ? (T(e), this.Ph = !1) : E("OnlineStateTracker", e);
    }, t.prototype.bh = function() {
        null !== this.Rh && (this.Rh.cancel(), this.Rh = null);
    }, t;
}(), eu = function(
/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
t, 
/** The client-side proxy for interacting with the backend. */
e, n, r, i) {
    var o = this;
    this.Sh = t, this.Dh = e, this.fs = n, this.Ch = {}, 
    /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
    this.xh = [], 
    /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
    this.Nh = new Map, 
    /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
    this.Oh = new Set, 
    /**
             * Event handlers that get called when the network is disabled or enabled.
             *
             * PORTING NOTE: These functions are used on the Web client to create the
             * underlying streams (to support tree-shakeable streams). On Android and iOS,
             * the streams are created during construction of RemoteStore.
             */
    this.Fh = [], this.kh = i, this.kh.cu((function(t) {
        n.ys((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(o, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return fu(this) ? (E("RemoteStore", "Restarting streams for network reachability change."), 
                        [ 4 /*yield*/ , function(t) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                var e;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return (e = x(t)).Oh.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , ru(e) ];

                                      case 1:
                                        return n.sent(), e.Mh.set("Unknown" /* Unknown */), e.Oh.delete(4 /* ConnectivityChange */), 
                                        [ 4 /*yield*/ , nu(e) ];

                                      case 2:
                                        return n.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(this) ]) : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    })), this.Mh = new tu(n, r);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ function nu(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
            switch (r.label) {
              case 0:
                if (!fu(t)) return [ 3 /*break*/ , 4 ];
                e = 0, n = t.Fh, r.label = 1;

              case 1:
                return e < n.length ? [ 4 /*yield*/ , (0, n[e])(/* enabled= */ !0) ] : [ 3 /*break*/ , 4 ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ function ru(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
            switch (r.label) {
              case 0:
                e = 0, n = t.Fh, r.label = 1;

              case 1:
                return e < n.length ? [ 4 /*yield*/ , (0, n[e])(/* enabled= */ !1) ] : [ 3 /*break*/ , 4 ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */ function iu(t, e) {
    var n = x(t);
    n.Nh.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.Nh.set(e.targetId, e), cu(n) ? 
    // The listen will be sent in onWatchStreamOpen
    au(n) : Nu(n).Ju() && uu(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function ou(t, e) {
    var n = x(t), r = Nu(n);
    n.Nh.delete(e), r.Ju() && su(n, e), 0 === n.Nh.size && (r.Ju() ? r.Zu() : fu(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.Mh.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function uu(t, e) {
    t.Lh.cn(e.targetId), Nu(t).hh(e)
    /**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */;
}

function su(t, e) {
    t.Lh.cn(e), Nu(t).lh(e);
}

function au(t) {
    t.Lh = new Ln({
        Sn: function(e) {
            return t.Ch.Sn(e);
        },
        Dn: function(e) {
            return t.Nh.get(e) || null;
        }
    }), Nu(t).start(), t.Mh.yh()
    /**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */;
}

function cu(t) {
    return fu(t) && !Nu(t).Hu() && t.Nh.size > 0;
}

function fu(t) {
    return 0 === x(t).Oh.size;
}

function hu(t) {
    t.Lh = void 0;
}

function lu(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            return t.Nh.forEach((function(e, n) {
                uu(t, e);
            })), [ 2 /*return*/ ];
        }));
    }));
}

function pu(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
            return hu(t), 
            // If we still need the watch stream, retry the connection.
            cu(t) ? (t.Mh.ph(e), au(t)) : 
            // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            t.Mh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
        }));
    }));
}

function du(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                if (t.Mh.set("Online" /* Online */), !(e instanceof On && 2 /* Removed */ === e.state && e.cause)) 
                // Mark the client as online since we got a message from the server
                return [ 3 /*break*/ , 6 ];
                u.label = 1;

              case 1:
                return u.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , 
                /** Handles an error on a target */
                function(t, e) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                        var n, r, i, o;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
                            switch (u.label) {
                              case 0:
                                n = e.cause, r = 0, i = e.targetIds, u.label = 1;

                              case 1:
                                return r < i.length ? (o = i[r], t.Nh.has(o) ? [ 4 /*yield*/ , t.Ch.$h(o, n) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                              case 2:
                                u.sent(), t.Nh.delete(o), t.Lh.removeTarget(o), u.label = 3;

                              case 3:
                                u.label = 4;

                              case 4:
                                return r++, [ 3 /*break*/ , 1 ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, e) ];

              case 2:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 3:
                return r = u.sent(), E("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), 
                [ 4 /*yield*/ , vu(t, r) ];

              case 4:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 5:
                return [ 3 /*break*/ , 13 ];

              case 6:
                if (e instanceof xn ? t.Lh.wn(e) : e instanceof kn ? t.Lh.yn(e) : t.Lh.In(e), n.isEqual(Z.min())) return [ 3 /*break*/ , 13 ];
                u.label = 7;

              case 7:
                return u.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , ao(t.Sh) ];

              case 8:
                return i = u.sent(), n.u(i) >= 0 ? [ 4 /*yield*/ , 
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function(t, e) {
                    var n = t.Lh.pn(e);
                    // Update in-memory resume tokens. LocalStore will update the
                    // persistent view of these when applying the completed RemoteEvent.
                                        return n.Fe.forEach((function(n, r) {
                        if (n.resumeToken.o() > 0) {
                            var i = t.Nh.get(r);
                            // A watched target might have been removed already.
                                                        i && t.Nh.set(r, i.$t(n.resumeToken, e));
                        }
                    })), 
                    // Re-establish listens for the targets that have been invalidated by
                    // existence filter mismatches.
                    n.ke.forEach((function(e) {
                        var n = t.Nh.get(e);
                        if (n) {
                            // Clear the resume token for the target, since we're in a known mismatch
                            // state.
                            t.Nh.set(e, n.$t(R.h, n.Mt)), 
                            // Cause a hard reset by unwatching and rewatching immediately, but
                            // deliberately don't send a resume token so that we get a full update.
                            su(t, e);
                            // Mark the target we send as being on behalf of an existence filter
                            // mismatch, but don't actually retain that in listenTargets. This ensures
                            // that we flag the first re-listen this way without impacting future
                            // listens of this target (that might happen e.g. on reconnect).
                            var r = new Ie(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                            uu(t, r);
                        }
                    })), t.Ch.Bh(n);
                }(t, n) ] : [ 3 /*break*/ , 10 ];

                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                u.sent(), u.label = 10;

              case 10:
                return [ 3 /*break*/ , 13 ];

              case 11:
                return E("RemoteStore", "Failed to raise snapshot:", o = u.sent()), [ 4 /*yield*/ , vu(t, o) ];

              case 12:
                return u.sent(), [ 3 /*break*/ , 13 ];

              case 13:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ function vu(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r = this;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                if (!_r(e)) throw e;
                // Disable network and raise offline snapshots
                return t.Oh.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , ru(t) ];

              case 1:
                // Disable network and raise offline snapshots
                return i.sent(), t.Mh.set("Offline" /* Offline */), n || (
                // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                n = function() {
                    return ao(t.Sh);
                }), 
                // Probe IndexedDB periodically and re-enable network
                t.fs.bo((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return E("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , n() ];

                              case 1:
                                return e.sent(), t.Oh.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , nu(t) ];

                              case 2:
                                return e.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function yu(t, e) {
    return e().catch((function(n) {
        return vu(t, n, e);
    }));
}

function mu(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n, r, i, o;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                e = x(t), n = Au(e), r = e.xh.length > 0 ? e.xh[e.xh.length - 1].batchId : -1, u.label = 1;

              case 1:
                if (!
                /**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */
                function(t) {
                    return fu(t) && t.xh.length < 10;
                }
                /**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ (e)) return [ 3 /*break*/ , 7 ];
                u.label = 2;

              case 2:
                return u.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , ho(e.Sh, r) ];

              case 3:
                return null === (i = u.sent()) ? (0 === e.xh.length && n.Zu(), [ 3 /*break*/ , 7 ]) : (r = i.batchId, 
                function(t, e) {
                    t.xh.push(e);
                    var n = Au(t);
                    n.Ju() && n.fh && n.dh(e.mutations);
                }(e, i), [ 3 /*break*/ , 6 ]);

              case 4:
                return o = u.sent(), [ 4 /*yield*/ , vu(e, o) ];

              case 5:
                return u.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 3 /*break*/ , 1 ];

              case 7:
                return gu(e) && wu(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

function gu(t) {
    return fu(t) && !Au(t).Hu() && t.xh.length > 0;
}

function wu(t) {
    Au(t).start();
}

function bu(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            return Au(t).Th(), [ 2 /*return*/ ];
        }));
    }));
}

function _u(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n, r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            // Send the write pipeline now that the stream is established.
            for (e = Au(t), n = 0, r = t.xh; n < r.length; n++) i = r[n], e.dh(i.mutations);
            return [ 2 /*return*/ ];
        }));
    }));
}

function Iu(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return r = t.xh.shift(), i = ti.from(r, e, n), [ 4 /*yield*/ , yu(t, (function() {
                    return t.Ch.qh(i);
                })) ];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return o.sent(), [ 4 /*yield*/ , mu(t) ];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return o.sent(), [ 2 /*return*/ ];
            }
        }));
    }));
}

function Eu(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
            switch (n.label) {
              case 0:
                return e && Au(t).fh ? [ 4 /*yield*/ , function(t, e) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                        var n, r;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return un(r = e.code) && r !== V.ABORTED ? (n = t.xh.shift(), 
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                Au(t).Xu(), [ 4 /*yield*/ , yu(t, (function() {
                                    return t.Ch.Uh(n.batchId, e);
                                })) ]) : [ 3 /*break*/ , 3 ];

                              case 1:
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                return i.sent(), [ 4 /*yield*/ , mu(t) ];

                              case 2:
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                i.sent(), i.label = 3;

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, e) ] : [ 3 /*break*/ , 2 ];

                // This error affects the actual write.
                              case 1:
                // This error affects the actual write.
                n.sent(), n.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return gu(t) && wu(t), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */ function Tu(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                return n = x(t), e ? (n.Oh.delete(2 /* IsSecondary */), [ 4 /*yield*/ , nu(n) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return i.sent(), [ 3 /*break*/ , 5 ];

              case 2:
                return (r = e) ? [ 3 /*break*/ , 4 ] : (n.Oh.add(2 /* IsSecondary */), [ 4 /*yield*/ , ru(n) ]);

              case 3:
                i.sent(), r = n.Mh.set("Unknown" /* Unknown */), i.label = 4;

              case 4:
                r, i.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function Nu(t) {
    var e = this;
    return t.Qh || (
    // Create stream (but note that it is not started yet).
    t.Qh = function(t, e, n) {
        var r = x(t);
        return r.mh(), new Xo(e, r.Ku, r.credentials, r.Kt, n);
    }(t.Dh, t.fs, {
        Eu: lu.bind(null, t),
        Iu: pu.bind(null, t),
        uh: du.bind(null, t)
    }), t.Fh.push((function(n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n ? (t.Qh.Xu(), cu(t) ? au(t) : t.Mh.set("Unknown" /* Unknown */), [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , t.Qh.stop() ];

                  case 2:
                    e.sent(), hu(t), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.Qh
    /**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */;
}

function Au(t) {
    var e = this;
    return t.Kh || (
    // Create stream (but note that it is not started yet).
    t.Kh = function(t, e, n) {
        var r = x(t);
        return r.mh(), new $o(e, r.Ku, r.credentials, r.Kt, n);
    }(t.Dh, t.fs, {
        Eu: bu.bind(null, t),
        Iu: Eu.bind(null, t),
        Eh: _u.bind(null, t),
        wh: Iu.bind(null, t)
    }), t.Fh.push((function(n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n ? (t.Kh.Xu(), [ 4 /*yield*/ , mu(t) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , t.Kh.stop() ];

                  case 3:
                    e.sent(), t.xh.length > 0 && (E("RemoteStore", "Stopping write stream with " + t.xh.length + " pending writes"), 
                    t.xh = []), e.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.Kh
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */;
}

var Su = function() {
    this.jh = void 0, this.listeners = [];
}, Du = function() {
    this.queries = new Ii((function(t) {
        return me(t);
    }), ye), this.onlineState = "Unknown" /* Unknown */ , this.Wh = new Set;
};

function xu(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, u, s, a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(c) {
            switch (c.label) {
              case 0:
                if (n = x(t), r = e.query, i = !1, (o = n.queries.get(r)) || (i = !0, o = new Su), 
                !i) return [ 3 /*break*/ , 4 ];
                c.label = 1;

              case 1:
                return c.trys.push([ 1, 3, , 4 ]), u = o, [ 4 /*yield*/ , n.Gh(r) ];

              case 2:
                return u.jh = c.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                return s = c.sent(), a = Sr(s, "Initialization of query '" + ge(e.query) + "' failed"), 
                [ 2 /*return*/ , void e.onError(a) ];

              case 4:
                return n.queries.set(r, o), o.listeners.push(e), 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                e.zh(n.onlineState), o.jh && e.Hh(o.jh) && Lu(n), [ 2 /*return*/ ];
            }
        }));
    }));
}

function ku(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, u;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            return n = x(t), r = e.query, i = !1, (o = n.queries.get(r)) && (u = o.listeners.indexOf(e)) >= 0 && (o.listeners.splice(u, 1), 
            i = 0 === o.listeners.length), i ? [ 2 /*return*/ , (n.queries.delete(r), n.Jh(r)) ] : [ 2 /*return*/ ];
        }));
    }));
}

function Ou(t, e) {
    for (var n = x(t), r = !1, i = 0, o = e; i < o.length; i++) {
        var u = o[i], s = u.query, a = n.queries.get(s);
        if (a) {
            for (var c = 0, f = a.listeners; c < f.length; c++) {
                f[c].Hh(u) && (r = !0);
            }
            a.jh = u;
        }
    }
    r && Lu(n);
}

function Pu(t, e, n) {
    var r = x(t), i = r.queries.get(e);
    if (i) for (var o = 0, u = i.listeners; o < u.length; o++) {
        u[o].onError(n);
    }
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        r.queries.delete(e);
}

// Call all global snapshot listeners that have been set.
function Lu(t) {
    t.Wh.forEach((function(t) {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ var Cu = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.Yh = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Xh = !1, this.Zh = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.Hh = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new An(t.query, t.docs, t.De, e, t.Ce, t.fromCache, t.xe, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Xh ? this.tl(t) && (this.Yh.next(t), o = !0) : this.el(t, this.onlineState) && (this.nl(t), 
        o = !0), this.Zh = t, o;
    }, t.prototype.onError = function(t) {
        this.Yh.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.zh = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Zh && !this.Xh && this.el(this.Zh, t) && (this.nl(this.Zh), e = !0), 
        e;
    }, t.prototype.el = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.sl && n || t.docs.nt() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.tl = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Zh && this.Zh.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.xe && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.nl = function(t) {
        t = An.Oe(t.query, t.docs, t.Ce, t.fromCache), this.Xh = !0, this.Yh.next(t);
    }, t;
}(), Ru = /** @class */ function() {
    function t(t, 
    // How many bytes this element takes to store in the bundle.
    e) {
        this.payload = t, this.byteLength = e;
    }
    return t.prototype.il = function() {
        return "metadata" in this.payload;
    }, t;
}(), Vu = /** @class */ function() {
    function t(t) {
        this.Kt = t;
    }
    return t.prototype.yc = function(t) {
        return Hn(this.Kt, t);
    }, 
    /**
     * Converts a BundleDocument to a MaybeDocument.
     */
    t.prototype.gc = function(t) {
        return t.metadata.exists ? $n(this.Kt, t.document, !1) : new Ut(this.yc(t.metadata.name), this.Vc(t.metadata.readTime));
    }, t.prototype.Vc = function(t) {
        return zn(t);
    }, t;
}(), Uu = /** @class */ function() {
    function t(t, e, n) {
        this.rl = t, this.Sh = e, this.Kt = n, 
        /** Batched queries to be saved into storage */
        this.queries = [], 
        /** Batched documents to be saved into storage */
        this.documents = [], this.progress = Mu(t)
        /**
     * Adds an element from the bundle to the loader.
     *
     * Returns a new progress if adding the element leads to a new progress,
     * otherwise returns null.
     */;
    }
    return t.prototype.ol = function(t) {
        this.progress.bytesLoaded += t.byteLength;
        var e = this.progress.documentsLoaded;
        return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({
            metadata: t.payload.documentMetadata
        }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, 
        ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, 
        Object.assign({}, this.progress)) : null;
    }, t.prototype.cl = function(t) {
        for (var e = new Map, n = new Vu(this.Kt), r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            if (o.metadata.queries) for (var u = n.yc(o.metadata.name), s = 0, a = o.metadata.queries; s < a.length; s++) {
                var c = a[s], f = (e.get(c) || _n()).add(u);
                e.set(c, f);
            }
        }
        return e;
    }, 
    /**
     * Update the progress to 'Success' and return the updated progress.
     */
    t.prototype.complete = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e, n, r, i;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4 /*yield*/ , wo(this.Sh, new Vu(this.Kt), this.documents, this.rl.id) ];

                  case 1:
                    t = o.sent(), e = this.cl(this.documents), n = 0, r = this.queries, o.label = 2;

                  case 2:
                    return n < r.length ? (i = r[n], [ 4 /*yield*/ , bo(this.Sh, i, e.get(i.name)) ]) : [ 3 /*break*/ , 5 ];

                  case 3:
                    o.sent(), o.label = 4;

                  case 4:
                    return n++, [ 3 /*break*/ , 2 ];

                  case 5:
                    return [ 2 /*return*/ , (this.progress.taskState = "Success", new to(Object.assign({}, this.progress), t)) ];
                }
            }));
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */
/**
 * Returns a `LoadBundleTaskProgress` representing the initial progress of
 * loading a bundle.
 */
function Mu(t) {
    return {
        taskState: "Running",
        documentsLoaded: 0,
        bytesLoaded: 0,
        totalDocuments: t.totalDocuments,
        totalBytes: t.totalBytes
    };
}

/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var qu = function(t) {
    this.key = t;
}, ju = function(t) {
    this.key = t;
}, Fu = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.al = e, this.ul = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.qe = !1, 
        /** Documents in the view but not in the remote target */
        this.hl = _n(), 
        /** Document Keys that have local changes */
        this.Ce = _n(), this.ll = be(t), this._l = new Tn(this.ll);
    }
    return Object.defineProperty(t.prototype, "fl", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.al;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */
    t.prototype.dl = function(t, e) {
        var n = this, r = e ? e.wl : new Nn, i = e ? e._l : this._l, o = e ? e.Ce : this.Ce, u = i, s = !1, a = ae(this.query) && i.size === this.query.limit ? i.last() : null, c = ce(this.query) && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.Zt((function(t, e) {
            var f = i.get(t), h = e instanceof Vt ? e : null;
            h && (h = we(n.query, h) ? h : null);
            var l = !!f && n.Ce.has(f.key), p = !!h && (h.bt || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.Ce.has(h.key) && h.hasCommittedMutations), d = !1;
            // Calculate change
            f && h ? f.data().isEqual(h.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: h
            }), d = !0) : n.El(f, h) || (r.track({
                type: 2 /* Modified */ ,
                doc: h
            }), d = !0, (a && n.ll(h, a) > 0 || c && n.ll(h, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            s = !0)) : !f && h ? (r.track({
                type: 0 /* Added */ ,
                doc: h
            }), d = !0) : f && !h && (r.track({
                type: 1 /* Removed */ ,
                doc: f
            }), d = !0, (a || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            s = !0)), d && (h ? (u = u.add(h), o = p ? o.add(t) : o.delete(t)) : (u = u.delete(t), 
            o = o.delete(t)));
        })), ae(this.query) || ce(this.query)) for (;u.size > this.query.limit; ) {
            var f = ae(this.query) ? u.last() : u.first();
            u = u.delete(f.key), o = o.delete(f.key), r.track({
                type: 1 /* Removed */ ,
                doc: f
            });
        }
        return {
            _l: u,
            wl: r,
            _c: s,
            Ce: o
        };
    }, t.prototype.El = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.bt && e.hasCommittedMutations && !e.bt;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.Ei = function(t, e, n) {
        var r = this, i = this._l;
        this._l = t._l, this.Ce = t.Ce;
        // Sort changes based on type and query comparator
        var o = t.wl.Se();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return S();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.ll(t.doc, e.doc);
        })), this.Tl(n);
        var u = e ? this.Il() : [], s = 0 === this.hl.size && this.qe ? 1 /* Synced */ : 0 /* Local */ , a = s !== this.ul;
        return this.ul = s, 0 !== o.length || a ? {
            snapshot: new An(this.query, t._l, i, o, t.Ce, 0 /* Local */ === s, a, 
            /* excludesMetadataChanges= */ !1),
            ml: u
        } : {
            ml: u
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.zh = function(t) {
        return this.qe && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.qe = !1, this.Ei({
            _l: this._l,
            wl: new Nn,
            Ce: this.Ce,
            _c: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            ml: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Al = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.al.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this._l.has(t) && !this._l.get(t).bt;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.Tl = function(t) {
        var e = this;
        t && (t.Ue.forEach((function(t) {
            return e.al = e.al.add(t);
        })), t.Qe.forEach((function(t) {})), t.Ke.forEach((function(t) {
            return e.al = e.al.delete(t);
        })), this.qe = t.qe);
    }, t.prototype.Il = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.qe) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.hl;
        this.hl = _n(), this._l.forEach((function(e) {
            t.Al(e.key) && (t.hl = t.hl.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.hl.has(e) || n.push(new ju(e));
        })), this.hl.forEach((function(t) {
            e.has(t) || n.push(new qu(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Rl = function(t) {
        this.al = t.Pc, this.hl = _n();
        var e = this.dl(t.documents);
        return this.Ei(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Pl = function() {
        return An.Oe(this.query, this._l, this.Ce, 0 /* Local */ === this.ul);
    }, t;
}(), zu = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, Gu = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.yl = !1;
}, Bu = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.Sh = t, this.gl = e, this.Vl = n, this.pl = r, this.currentUser = i, this.bl = o, 
        this.vl = {}, this.Sl = new Ii((function(t) {
            return me(t);
        }), ye), this.Dl = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.Cl = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.xl = new an(it.J), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Nl = new Map, this.Ol = new Io, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Fl = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.kl = new Map, this.Ml = Oi.Bi(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Ll = void 0;
    }
    return Object.defineProperty(t.prototype, "$l", {
        get: function() {
            return !0 === this.Ll;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}();

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
function Ku(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, u, s;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(a) {
            switch (a.label) {
              case 0:
                return n = bs(t), (o = n.Sl.get(e)) ? (
                // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                r = o.targetId, n.pl.ka(r), i = o.view.Pl(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                return [ 4 /*yield*/ , lo(n.Sh, de(e)) ];

              case 2:
                return u = a.sent(), s = n.pl.ka(u.targetId), r = u.targetId, [ 4 /*yield*/ , Hu(n, e, r, "current" === s) ];

              case 3:
                i = a.sent(), n.$l && iu(n.gl, u), a.label = 4;

              case 4:
                return [ 2 /*return*/ , i ];
            }
        }));
    }));
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ function Hu(t, e, n, r) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var i, o, u, s, a, c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(f) {
            switch (f.label) {
              case 0:
                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                // targets based on view changes. This allows us to only depend on Limbo
                // changes when user code includes queries.
                return t.Bl = function(e, n, r) {
                    return function(t, e, n, r) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                            var i, o, u;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
                                switch (s.label) {
                                  case 0:
                                    return i = e.view.dl(n), i._c ? [ 4 /*yield*/ , vo(t.Sh, e.query, 
                                    /* usePreviousResults= */ !1).then((function(t) {
                                        var n = t.documents;
                                        return e.view.dl(n, i);
                                    })) ] : [ 3 /*break*/ , 2 ];

                                  case 1:
                                    // The query has a limit and some docs were removed, so we need
                                    // to re-run the query against the local store to make sure we
                                    // didn't lose any good docs that had been past the limit.
                                    i = s.sent(), s.label = 2;

                                  case 2:
                                    return o = r && r.Fe.get(e.targetId), u = e.view.Ei(i, 
                                    /* updateLimboDocuments= */ t.$l, o), [ 2 /*return*/ , (os(t, e.targetId, u.ml), 
                                    u.snapshot) ];
                                }
                            }));
                        }));
                    }(t, e, n, r);
                }, [ 4 /*yield*/ , vo(t.Sh, e, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return i = f.sent(), o = new Fu(e, i.Pc), u = o.dl(i.documents), s = Dn.Be(n, r && "Offline" /* Offline */ !== t.onlineState), 
                a = o.Ei(u, 
                /* updateLimboDocuments= */ t.$l, s), os(t, n, a.ml), c = new zu(e, n, o), [ 2 /*return*/ , (t.Sl.set(e, c), 
                t.Dl.has(n) ? t.Dl.get(n).push(e) : t.Dl.set(n, [ e ]), a.snapshot) ];
            }
        }));
    }));
}

/** Stops listening to the query. */ function Ju(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return n = x(t), r = n.Sl.get(e), (i = n.Dl.get(r.targetId)).length > 1 ? [ 2 /*return*/ , (n.Dl.set(r.targetId, i.filter((function(t) {
                    return !ye(t, e);
                }))), void n.Sl.delete(e)) ] : n.$l ? (
                // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                n.pl.La(r.targetId), n.pl.Ca(r.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , po(n.Sh, r.targetId, 
                /*keepPersistedTargetData=*/ !1).then((function() {
                    n.pl.Ba(r.targetId), ou(n.gl, r.targetId), rs(n, r.targetId);
                })).catch(_i) ]) : [ 3 /*break*/ , 3 ];

              case 1:
                o.sent(), o.label = 2;

              case 2:
                return [ 3 /*break*/ , 5 ];

              case 3:
                return rs(n, r.targetId), [ 4 /*yield*/ , po(n.Sh, r.targetId, 
                /*keepPersistedTargetData=*/ !0) ];

              case 4:
                o.sent(), o.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */ function Wu(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, u;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                r = _s(t), s.label = 1;

              case 1:
                return s.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n, r = x(t), i = $.now(), o = e.reduce((function(t, e) {
                        return t.add(e.key);
                    }), _n());
                    return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                        return r.Ic.Zo(t, o).next((function(o) {
                            n = o;
                            for (
                            // For non-idempotent mutations (such as `FieldValue.increment()`),
                            // we record the base state in a separate patch mutation. This is
                            // later used to guarantee consistent values and prevents flicker
                            // even if the backend sends us an update that already includes our
                            // transform.
                            var u = [], s = 0, a = e; s < a.length; s++) {
                                var c = a[s], f = Ke(c, n.get(c.key));
                                null != f && 
                                // NOTE: The base state should only be applied if there's some
                                // existing document to override, so use a Precondition of
                                // exists=true
                                u.push(new Qe(c.key, f, Ct(f.proto.mapValue), je.exists(!0)));
                            }
                            return r.Ho.Pi(t, i, u, e);
                        }));
                    })).then((function(t) {
                        var e = t.Ns(n);
                        return {
                            batchId: t.batchId,
                            oi: e
                        };
                    }));
                }(r.Sh, e) ];

              case 2:
                return i = s.sent(), r.pl.xa(i.batchId), function(t, e, n) {
                    var r = t.Fl[t.currentUser.R()];
                    r || (r = new an(P)), r = r.Ht(e, n), t.Fl[t.currentUser.R()] = r;
                }(r, i.batchId, n), [ 4 /*yield*/ , as(r, i.oi) ];

              case 3:
                return s.sent(), [ 4 /*yield*/ , mu(r.gl) ];

              case 4:
                return s.sent(), [ 3 /*break*/ , 6 ];

              case 5:
                return o = s.sent(), u = Sr(o, "Failed to persist write"), n.reject(u), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ function Qu(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                n = x(t), i.label = 1;

              case 1:
                return i.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , co(n.Sh, e) ];

              case 2:
                return r = i.sent(), 
                // Update `receivedDocument` as appropriate for any limbo targets.
                e.Fe.forEach((function(t, e) {
                    var r = n.Nl.get(e);
                    r && (
                    // Since this is a limbo resolution lookup, it's for a single document
                    // and it could be added, modified, or removed, but not a combination.
                    D(t.Ue.size + t.Qe.size + t.Ke.size <= 1), t.Ue.size > 0 ? r.yl = !0 : t.Qe.size > 0 ? D(r.yl) : t.Ke.size > 0 && (D(r.yl), 
                    r.yl = !1));
                })), [ 4 /*yield*/ , as(n, r, e) ];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return i.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , _i(i.sent()) ];

              case 5:
                return i.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function Yu(t, e, n) {
    var r = x(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (r.$l && 0 /* RemoteStore */ === n || !r.$l && 1 /* SharedClientState */ === n) {
        var i = [];
        r.Sl.forEach((function(t, n) {
            var r = n.view.zh(e);
            r.snapshot && i.push(r.snapshot);
        })), function(t, e) {
            var n = x(t);
            n.onlineState = e;
            var r = !1;
            n.queries.forEach((function(t, n) {
                for (var i = 0, o = n.listeners; i < o.length; i++) {
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    o[i].zh(e) && (r = !0);
                }
            })), r && Lu(n);
        }(r.Vl, e), i.length && r.vl.uh(i), r.onlineState = e, r.$l && r.pl.Ka(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ function Xu(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, u, s, a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(c) {
            switch (c.label) {
              case 0:
                // PORTING NOTE: Multi-tab only.
                return (r = x(t)).pl.qa(e, "rejected", n), i = r.Nl.get(e), (o = i && i.key) ? (u = (u = new an(it.J)).Ht(o, new Ut(o, Z.min())), 
                s = _n().add(o), a = new Sn(Z.min(), 
                /* targetChanges= */ new Map, 
                /* targetMismatches= */ new hn(P), u, s), [ 4 /*yield*/ , Qu(r, a) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return c.sent(), 
                // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                r.xl = r.xl.remove(o), r.Nl.delete(e), ss(r), [ 3 /*break*/ , 4 ];

              case 2:
                return [ 4 /*yield*/ , po(r.Sh, e, 
                /* keepPersistedTargetData */ !1).then((function() {
                    return rs(r, e, n);
                })).catch(_i) ];

              case 3:
                c.sent(), c.label = 4;

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function $u(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                n = x(t), r = e.batch.batchId, o.label = 1;

              case 1:
                return o.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , so(n.Sh, e) ];

              case 2:
                return i = o.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                ns(n, r, /*error=*/ null), es(n, r), n.pl.Oa(r, "acknowledged"), [ 4 /*yield*/ , as(n, i) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , _i(o.sent()) ];

              case 5:
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Zu(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                r = x(t), o.label = 1;

              case 1:
                return o.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n = x(t);
                    return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                        var r;
                        return n.Ho.yi(t, e).next((function(e) {
                            return D(null !== e), r = e.keys(), n.Ho.xi(t, e);
                        })).next((function() {
                            return n.Ho.Fi(t);
                        })).next((function() {
                            return n.Ic.Zo(t, r);
                        }));
                    }));
                }(r.Sh, e) ];

              case 2:
                return i = o.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                ns(r, e, n), es(r, e), r.pl.Oa(e, "rejected", n), [ 4 /*yield*/ , as(r, i) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , _i(o.sent()) ];

              case 5:
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ function ts(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, u;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                fu((n = x(t)).gl) || E("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                s.label = 1;

              case 1:
                return s.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , function(t) {
                    var e = x(t);
                    return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                        return e.Ho.pi(t);
                    }));
                }(n.Sh) ];

              case 2:
                return -1 === (r = s.sent()) ? [ 2 /*return*/ , void e.resolve() ] : ((i = n.kl.get(r) || []).push(e), 
                n.kl.set(r, i), [ 3 /*break*/ , 4 ]);

              case 3:
                return o = s.sent(), u = Sr(o, "Initialization of waitForPendingWrites() operation failed"), 
                e.reject(u), [ 3 /*break*/ , 4 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function es(t, e) {
    (t.kl.get(e) || []).forEach((function(t) {
        t.resolve();
    })), t.kl.delete(e)
    /** Reject all outstanding callbacks waiting for pending writes to complete. */;
}

function ns(t, e, n) {
    var r = x(t), i = r.Fl[r.currentUser.R()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
    if (i) {
        var o = i.get(e);
        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.Fl[r.currentUser.R()] = i;
    }
}

function rs(t, e, n) {
    void 0 === n && (n = null), t.pl.La(e);
    for (var r = 0, i = t.Dl.get(e); r < i.length; r++) {
        var o = i[r];
        t.Sl.delete(o), n && t.vl.ql(o, n);
    }
    t.Dl.delete(e), t.$l && t.Ol.kc(e).forEach((function(e) {
        t.Ol.ki(e) || 
        // We removed the last reference for this key
        is(t, e);
    }));
}

function is(t, e) {
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    var n = t.xl.get(e);
    null !== n && (ou(t.gl, n), t.xl = t.xl.remove(e), t.Nl.delete(n), ss(t));
}

function os(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        o instanceof qu ? (t.Ol.sr(o.key, e), us(t, o)) : o instanceof ju ? (E("SyncEngine", "Document no longer in limbo: " + o.key), 
        t.Ol.rr(o.key, e), t.Ol.ki(o.key) || 
        // We removed the last reference for this key
        is(t, o.key)) : S();
    }
}

function us(t, e) {
    var n = e.key;
    t.xl.get(n) || (E("SyncEngine", "New document in limbo: " + n), t.Cl.push(n), ss(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function ss(t) {
    for (;t.Cl.length > 0 && t.xl.size < t.bl; ) {
        var e = t.Cl.shift(), n = t.Ml.next();
        t.Nl.set(n, new Gu(e)), t.xl = t.xl.Ht(e, n), iu(t.gl, new Ie(de(se(e.path)), n, 2 /* LimboResolution */ , X.U));
    }
}

function as(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, u;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                return r = x(t), i = [], o = [], u = [], r.Sl.nt() ? [ 3 /*break*/ , 3 ] : (r.Sl.forEach((function(t, s) {
                    u.push(r.Bl(s, e, n).then((function(t) {
                        if (t) {
                            r.$l && r.pl.qa(s.targetId, t.fromCache ? "not-current" : "current"), i.push(t);
                            var e = no.cc(s.targetId, t);
                            o.push(e);
                        }
                    })));
                })), [ 4 /*yield*/ , Promise.all(u) ]);

              case 1:
                return s.sent(), r.vl.uh(i), [ 4 /*yield*/ , function(t, e) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                        var n, r, i, o, u, s, a, c, f;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(h) {
                            switch (h.label) {
                              case 0:
                                n = x(t), h.label = 1;

                              case 1:
                                return h.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                    return yr.forEach(e, (function(e) {
                                        return yr.forEach(e.rc, (function(r) {
                                            return n.persistence.Ii.sr(t, e.targetId, r);
                                        })).next((function() {
                                            return yr.forEach(e.oc, (function(r) {
                                                return n.persistence.Ii.rr(t, e.targetId, r);
                                            }));
                                        }));
                                    }));
                                })) ];

                              case 2:
                                return h.sent(), [ 3 /*break*/ , 4 ];

                              case 3:
                                if (!_r(r = h.sent())) throw r;
                                // If `notifyLocalViewChanges` fails, we did not advance the sequence
                                // number for the documents that were included in this transaction.
                                // This might trigger them to be deleted earlier than they otherwise
                                // would have, but it should not invalidate the integrity of the data.
                                                                return E("LocalStore", "Failed to update sequence numbers: " + r), 
                                [ 3 /*break*/ , 4 ];

                              case 4:
                                for (i = 0, o = e; i < o.length; i++) u = o[i], s = u.targetId, u.fromCache || (a = n.dc.get(s), 
                                c = a.Mt, f = a.Bt(c), 
                                // Advance the last limbo free snapshot version
                                n.dc = n.dc.Ht(s, f));
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(r.Sh, o) ];

              case 2:
                s.sent(), s.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function cs(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                return (n = x(t)).currentUser.isEqual(e) ? [ 3 /*break*/ , 3 ] : (E("SyncEngine", "User change. New user:", e.R()), 
                [ 4 /*yield*/ , uo(n.Sh, e) ]);

              case 1:
                return r = i.sent(), n.currentUser = e, 
                // Fails tasks waiting for pending writes requested by previous user.
                function(t, e) {
                    t.kl.forEach((function(t) {
                        t.forEach((function(t) {
                            t.reject(new U(V.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                        }));
                    })), t.kl.clear();
                }(n), 
                // TODO(b/114226417): Consider calling this only in the primary tab.
                n.pl.Qa(e, r.Ac, r.Rc), [ 4 /*yield*/ , as(n, r.mc) ];

              case 2:
                i.sent(), i.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function fs(t, e) {
    var n = x(t), r = n.Nl.get(e);
    if (r && r.yl) return _n().add(r.key);
    var i = _n(), o = n.Dl.get(e);
    if (!o) return i;
    for (var u = 0, s = o; u < s.length; u++) {
        var a = s[u], c = n.Sl.get(a);
        i = i.ye(c.view.fl);
    }
    return i;
}

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */ function hs(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return [ 4 /*yield*/ , vo((n = x(t)).Sh, e.query, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return r = o.sent(), i = e.view.Rl(r), [ 2 /*return*/ , (n.$l && os(n, e.targetId, i.ml), 
                i) ];
            }
        }));
    }));
}

/**
 * Retrieves newly changed documents from remote document cache and raises
 * snapshots if needed.
 */
// PORTING NOTE: Multi-Tab only.
function ls(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
            return [ 2 /*return*/ , mo((e = x(t)).Sh).then((function(t) {
                return as(e, t);
            })) ];
        }));
    }));
}

/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.
function ps(t, e, n, r) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var i, o;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(u) {
            switch (u.label) {
              case 0:
                return [ 4 /*yield*/ , function(t, e) {
                    var n = x(t), r = x(n.Ho);
                    return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
                        return r.gi(t, e).next((function(e) {
                            return e ? n.Ic.Zo(t, e) : yr.resolve(null);
                        }));
                    }));
                }((i = x(t)).Sh, e) ];

              case 1:
                return null === (o = u.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , mu(i.gl) ];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return u.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                "acknowledged" === n || "rejected" === n ? (
                // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                ns(i, e, r || null), es(i, e), function(t, e) {
                    x(x(t).Ho).Ni(e);
                }(i.Sh, e)) : S(), u.label = 4;

              case 4:
                return [ 4 /*yield*/ , as(i, o) ];

              case 5:
                return u.sent(), [ 3 /*break*/ , 7 ];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                E("SyncEngine", "Cannot apply mutation batch with id: " + e), u.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function ds(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, u, s, a, c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(f) {
            switch (f.label) {
              case 0:
                return bs(n = x(t)), _s(n), !0 !== e || !0 === n.Ll ? [ 3 /*break*/ , 3 ] : (r = n.pl.Sa(), 
                [ 4 /*yield*/ , vs(n, r.rt()) ]);

              case 1:
                return i = f.sent(), n.Ll = !0, [ 4 /*yield*/ , Tu(n.gl, !0) ];

              case 2:
                for (f.sent(), o = 0, u = i; o < u.length; o++) s = u[o], iu(n.gl, s);
                return [ 3 /*break*/ , 7 ];

              case 3:
                return !1 !== e || !1 === n.Ll ? [ 3 /*break*/ , 7 ] : (a = [], c = Promise.resolve(), 
                n.Dl.forEach((function(t, e) {
                    n.pl.$a(e) ? a.push(e) : c = c.then((function() {
                        return rs(n, e), po(n.Sh, e, 
                        /*keepPersistedTargetData=*/ !0);
                    })), ou(n.gl, e);
                })), [ 4 /*yield*/ , c ]);

              case 4:
                return f.sent(), [ 4 /*yield*/ , vs(n, a) ];

              case 5:
                return f.sent(), 
                // PORTING NOTE: Multi-Tab only.
                function(t) {
                    var e = x(t);
                    e.Nl.forEach((function(t, n) {
                        ou(e.gl, n);
                    })), e.Ol.Mc(), e.Nl = new Map, e.xl = new an(it.J);
                }(n), n.Ll = !1, [ 4 /*yield*/ , Tu(n.gl, !1) ];

              case 6:
                f.sent(), f.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function vs(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i, o, u, s, a, c, f, h, l, p, d, v;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(y) {
            switch (y.label) {
              case 0:
                n = x(t), r = [], i = [], o = 0, u = e, y.label = 1;

              case 1:
                return o < u.length ? (s = u[o], a = void 0, (c = n.Dl.get(s)) && 0 !== c.length ? [ 4 /*yield*/ , lo(n.Sh, de(c[0])) ] : [ 3 /*break*/ , 7 ]) : [ 3 /*break*/ , 13 ];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                a = y.sent(), f = 0, h = c, y.label = 3;

              case 3:
                return f < h.length ? (l = h[f], p = n.Sl.get(l), [ 4 /*yield*/ , hs(n, p) ]) : [ 3 /*break*/ , 6 ];

              case 4:
                (d = y.sent()).snapshot && i.push(d.snapshot), y.label = 5;

              case 5:
                return f++, [ 3 /*break*/ , 3 ];

              case 6:
                return [ 3 /*break*/ , 11 ];

              case 7:
                return [ 4 /*yield*/ , yo(n.Sh, s) ];

              case 8:
                return v = y.sent(), [ 4 /*yield*/ , lo(n.Sh, v) ];

              case 9:
                return a = y.sent(), [ 4 /*yield*/ , Hu(n, ys(v), s, 
                /*current=*/ !1) ];

              case 10:
                y.sent(), y.label = 11;

              case 11:
                r.push(a), y.label = 12;

              case 12:
                return o++, [ 3 /*break*/ , 1 ];

              case 13:
                return [ 2 /*return*/ , (n.vl.uh(i), r) ];
            }
        }));
    }));
}

/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.
function ys(t) {
    return ue(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
}

/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.
function ms(t) {
    var e = x(t);
    return x(x(e.Sh).persistence).Qo();
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function gs(t, e, n, r) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var i, o, u;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(s) {
            switch (s.label) {
              case 0:
                return (i = x(t)).Ll ? (
                // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                E("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                if (!i.Dl.has(e)) return [ 3 /*break*/ , 8 ];
                switch (n) {
                  case "current":
                  case "not-current":
                    return [ 3 /*break*/ , 2 ];

                  case "rejected":
                    return [ 3 /*break*/ , 5 ];
                }
                return [ 3 /*break*/ , 7 ];

              case 2:
                return [ 4 /*yield*/ , mo(i.Sh) ];

              case 3:
                return o = s.sent(), u = Sn.$e(e, "current" === n), [ 4 /*yield*/ , as(i, o, u) ];

              case 4:
                return s.sent(), [ 3 /*break*/ , 8 ];

              case 5:
                return [ 4 /*yield*/ , po(i.Sh, e, 
                /* keepPersistedTargetData */ !0) ];

              case 6:
                return s.sent(), rs(i, e, r), [ 3 /*break*/ , 8 ];

              case 7:
                S(), s.label = 8;

              case 8:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Adds or removes Watch targets for queries from different tabs. */ function ws(t, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var r, i, o, u, s, a, c, f, h, l;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(p) {
            switch (p.label) {
              case 0:
                if (!(r = bs(t)).Ll) return [ 3 /*break*/ , 10 ];
                i = 0, o = e, p.label = 1;

              case 1:
                return i < o.length ? (u = o[i], r.Dl.has(u) ? (
                // A target might have been added in a previous attempt
                E("SyncEngine", "Adding an already active target " + u), [ 3 /*break*/ , 5 ]) : [ 4 /*yield*/ , yo(r.Sh, u) ]) : [ 3 /*break*/ , 6 ];

              case 2:
                return s = p.sent(), [ 4 /*yield*/ , lo(r.Sh, s) ];

              case 3:
                return a = p.sent(), [ 4 /*yield*/ , Hu(r, ys(s), a.targetId, 
                /*current=*/ !1) ];

              case 4:
                p.sent(), iu(r.gl, a), p.label = 5;

              case 5:
                return i++, [ 3 /*break*/ , 1 ];

              case 6:
                c = function(t) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return r.Dl.has(t) ? [ 4 /*yield*/ , po(r.Sh, t, 
                            /* keepPersistedTargetData */ !1).then((function() {
                                ou(r.gl, t), rs(r, t);
                            })).catch(_i) ] : [ 3 /*break*/ , 2 ];

                            // Release queries that are still active.
                                                      case 1:
                            // Release queries that are still active.
                            e.sent(), e.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }, f = 0, h = n, p.label = 7;

              case 7:
                return f < h.length ? (l = h[f], [ 5 /*yield**/ , c(l) ]) : [ 3 /*break*/ , 10 ];

              case 8:
                p.sent(), p.label = 9;

              case 9:
                return f++, [ 3 /*break*/ , 7 ];

              case 10:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function bs(t) {
    var e = x(t);
    return e.gl.Ch.Bh = Qu.bind(null, e), e.gl.Ch.Sn = fs.bind(null, e), e.gl.Ch.$h = Xu.bind(null, e), 
    e.vl.uh = Ou.bind(null, e.Vl), e.vl.ql = Pu.bind(null, e.Vl), e;
}

function _s(t) {
    var e = x(t);
    return e.gl.Ch.qh = $u.bind(null, e), e.gl.Ch.Uh = Zu.bind(null, e), e
    /**
 * Loads a Firestore bundle into the SDK. The returned promise resolves when
 * the bundle finished loading.
 *
 * @param syncEngine - SyncEngine to use.
 * @param bundleReader - Bundle to load into the SDK.
 * @param task - LoadBundleTask used to update the loading progress to public API.
 */;
}

function Is(t, e, n) {
    var r = x(t);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (function(t, e, n) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var r, i, o, u, s, a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(c) {
                switch (c.label) {
                  case 0:
                    return c.trys.push([ 0, 14, , 15 ]), [ 4 /*yield*/ , e.getMetadata() ];

                  case 1:
                    return r = c.sent(), [ 4 /*yield*/ , function(t, e) {
                        var n = x(t), r = zn(e.createTime);
                        return n.persistence.runTransaction("hasNewerBundle", "readonly", (function(t) {
                            return n.Eo.Ms(t, e.id);
                        })).then((function(t) {
                            return !!t && t.createTime.u(r) >= 0;
                        }));
                    }(t.Sh, r) ];

                  case 2:
                    return c.sent() ? [ 4 /*yield*/ , e.close() ] : [ 3 /*break*/ , 4 ];

                  case 3:
                    return [ 2 /*return*/ , (c.sent(), void n.Ul(function(t) {
                        return {
                            taskState: "Success",
                            documentsLoaded: t.totalDocuments,
                            bytesLoaded: t.totalBytes,
                            totalDocuments: t.totalDocuments,
                            totalBytes: t.totalBytes
                        };
                    }(r))) ];

                  case 4:
                    return n.Ql(Mu(r)), i = new Uu(r, t.Sh, e.Kt), [ 4 /*yield*/ , e.Kl() ];

                  case 5:
                    o = c.sent(), c.label = 6;

                  case 6:
                    return o ? [ 4 /*yield*/ , i.ol(o) ] : [ 3 /*break*/ , 10 ];

                  case 7:
                    return (u = c.sent()) && n.Ql(u), [ 4 /*yield*/ , e.Kl() ];

                  case 8:
                    o = c.sent(), c.label = 9;

                  case 9:
                    return [ 3 /*break*/ , 6 ];

                  case 10:
                    return [ 4 /*yield*/ , i.complete() ];

                  case 11:
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    return s = c.sent(), [ 4 /*yield*/ , as(t, s.zo, 
                    /* remoteEvent */ void 0) ];

                  case 12:
                    // Save metadata, so loading the same bundle will skip.
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    return c.sent(), [ 4 /*yield*/ , function(t, e) {
                        var n = x(t);
                        return n.persistence.runTransaction("Save bundle", "readwrite", (function(t) {
                            return n.Eo.Ls(t, e);
                        }));
                    }(t.Sh, r) ];

                  case 13:
                    // TODO(b/160876443): This currently raises snapshots with
                    // `fromCache=false` if users already listen to some queries and bundles
                    // has newer version.
                    // Save metadata, so loading the same bundle will skip.
                    return c.sent(), n.Ul(s.progress), [ 3 /*break*/ , 15 ];

                  case 14:
                    return N("SyncEngine", "Loading bundle failed with " + (a = c.sent())), n.jl(a), 
                    [ 3 /*break*/ , 15 ];

                  case 15:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */)(r, e, n).then((function() {
        r.pl.Wa();
    }));
}

var Es = /** @class */ function() {
    function t() {
        this.synchronizeTabs = !1;
    }
    return t.prototype.initialize = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Kt = Wo(t.gu.T), this.pl = this.Wl(t), this.persistence = this.Gl(t), 
                    [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return e.sent(), this.zl = this.Hl(t), this.Sh = this.Jl(t), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Hl = function(t) {
        return null;
    }, t.prototype.Jl = function(t) {
        return oo(this.persistence, new ro, t.Yl, this.Kt);
    }, t.prototype.Gl = function(t) {
        return new Do(ko.ra, this.Kt);
    }, t.prototype.Wl = function(t) {
        return new jo;
    }, t.prototype.terminate = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.zl && this.zl.stop(), [ 4 /*yield*/ , this.pl.Lo() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.persistence.Lo() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), Ts = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).Xl = e, i.cacheSizeBytes = n, i.forceOwnership = r, 
        i.synchronizeTabs = !1, i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.initialize = function(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , t.prototype.initialize.call(this, e) ];

                  case 1:
                    return n.sent(), [ 4 /*yield*/ , go(this.Sh) ];

                  case 2:
                    return n.sent(), [ 4 /*yield*/ , this.Xl.initialize(this, e) ];

                  case 3:
                    // Enqueue writes from a previous session
                    return n.sent(), [ 4 /*yield*/ , _s(this.Xl.fa) ];

                  case 4:
                    // Enqueue writes from a previous session
                    return n.sent(), [ 4 /*yield*/ , mu(this.Xl.gl) ];

                  case 5:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.Jl = function(t) {
        return oo(this.persistence, new ro, t.Yl, this.Kt);
    }, e.prototype.Hl = function(t) {
        var e = this.persistence.Ii._r;
        return new Mi(e, t.fs);
    }, e.prototype.Gl = function(t) {
        var e = Zi(t.gu.T, t.gu.persistenceKey), n = void 0 !== this.cacheSizeBytes ? bi.Xs(this.cacheSizeBytes) : bi.ei;
        return new Yi(this.synchronizeTabs, e, t.clientId, n, t.fs, Ho(), Jo(), this.Kt, this.pl, !!this.forceOwnership);
    }, e.prototype.Wl = function(t) {
        return new jo;
    }, e;
}(Es), Ns = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n, /* forceOwnership= */ !1) || this).Xl = e, r.cacheSizeBytes = n, 
        r.synchronizeTabs = !0, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.initialize = function(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var n, r = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4 /*yield*/ , t.prototype.initialize.call(this, e) ];

                  case 1:
                    return i.sent(), n = this.Xl.fa, this.pl instanceof qo ? (this.pl.fa = {
                        nu: ps.bind(null, n),
                        su: gs.bind(null, n),
                        iu: ws.bind(null, n),
                        Qo: ms.bind(null, n),
                        eu: ls.bind(null, n)
                    }, [ 4 /*yield*/ , this.pl.start() ]) : [ 3 /*break*/ , 3 ];

                  case 2:
                    i.sent(), i.label = 3;

                  case 3:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return [ 4 /*yield*/ , this.persistence.Po((function(t) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , ds(this.Xl.fa, t) ];

                                  case 1:
                                    return e.sent(), this.zl && (t && !this.zl.Tr ? this.zl.start(this.Sh) : t || this.zl.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 4:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.Wl = function(t) {
        var e = Ho();
        if (!qo.jn(e)) throw new U(V.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        var n = Zi(t.gu.T, t.gu.persistenceKey);
        return new qo(e, t.fs, n, t.clientId, t.Yl);
    }, e;
}(Ts), As = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t, e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var n = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.Sh ? [ 3 /*break*/ , 2 ] : (this.Sh = t.Sh, this.pl = t.pl, this.Dh = this.Zl(e), 
                    this.gl = this.t_(e), this.Vl = this.e_(e), this.fa = this.n_(e, 
                    /* startAsPrimary=*/ !t.synchronizeTabs), this.pl.da = function(t) {
                        return Yu(n.fa, t, 1 /* SharedClientState */);
                    }, this.gl.Ch.s_ = cs.bind(null, this.fa), [ 4 /*yield*/ , Tu(this.gl, this.fa.$l) ]);

                  case 1:
                    r.sent(), r.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.e_ = function(t) {
        return new Du;
    }, t.prototype.Zl = function(t) {
        var e, n = Wo(t.gu.T), r = (e = t.gu, new Ko(e));
        /** Return the Platform-specific connectivity monitor. */ return function(t, e, n) {
            return new Zo(t, e, n);
        }(t.credentials, r, n);
    }, t.prototype.t_ = function(t) {
        var e, n, r, i, o, u = this;
        return e = this.Sh, n = this.Dh, r = t.fs, i = function(t) {
            return Yu(u.fa, t, 0 /* RemoteStore */);
        }, o = zo.jn() ? new zo : new Fo, new eu(e, n, r, i, o);
    }, t.prototype.n_ = function(t, e) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o, u) {
            var s = new Bu(t, e, n, r, i, o);
            return u && (s.Ll = !0), s;
        }(this.Sh, this.gl, this.Vl, this.pl, t.Yl, t.bl, e);
    }, t.prototype.terminate = function() {
        return function(t) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = x(t), E("RemoteStore", "RemoteStore shutting down."), e.Oh.add(5 /* Shutdown */), 
                        [ 4 /*yield*/ , ru(e) ];

                      case 1:
                        return n.sent(), e.kh.Lo(), 
                        // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                        // triggering spurious listener events with cached data, etc.
                        e.Mh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                    }
                }));
            }));
        }(this.gl);
    }, t;
}();

/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * How many bytes to read each time when `ReadableStreamReader.read()` is
 * called. Only applicable for byte streams that we control (e.g. those backed
 * by an UInt8Array).
 */
/**
 * Builds a `ByteStreamReader` from a UInt8Array.
 * @param source - The data source to use.
 * @param bytesPerRead - How many bytes each `read()` from the returned reader
 *        will read.
 */
function Ss(t, e) {
    void 0 === e && (e = 10240);
    var n = 0;
    return {
        read: function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                var r;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                    return n < t.byteLength ? (r = {
                        value: t.slice(n, n + e),
                        done: !1
                    }, [ 2 /*return*/ , (n += e, r) ]) : [ 2 /*return*/ , {
                        done: !0
                    } ];
                    // TypesScript's lib.dom.d.ts doesn't have proper typings of
                    // ReadableStreamReadResult yet.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                }));
            }));
        },
        cancel: function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                    return [ 2 /*return*/ ];
                }));
            }));
        },
        releaseLock: function() {}
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ var Ds = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.observer.next && this.i_(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.observer.error ? this.i_(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }, t.prototype.r_ = function() {
        this.muted = !0;
    }, t.prototype.i_ = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}(), xs = /** @class */ function() {
    function t(
    /** The reader to read from underlying binary bundle data source. */
    t, e) {
        var n = this;
        this.o_ = t, this.Kt = e, 
        /** Cached bundle metadata. */
        this.metadata = new vr, 
        /**
             * Internal buffer to hold bundle content, accumulating incomplete element
             * content.
             */
        this.buffer = new Uint8Array, this.c_ = new TextDecoder("utf-8"), 
        // Read the metadata (which is the first element).
        this.a_().then((function(t) {
            t && t.il() ? n.metadata.resolve(t.payload.metadata) : n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             " + JSON.stringify(null == t ? void 0 : t.payload)));
        }), (function(t) {
            return n.metadata.reject(t);
        }));
    }
    return t.prototype.close = function() {
        return this.o_.cancel();
    }, t.prototype.getMetadata = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                return [ 2 /*return*/ , this.metadata.promise ];
            }));
        }));
    }, t.prototype.Kl = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.getMetadata() ];

                  case 1:
                    // Makes sure metadata is read before proceeding.
                    return [ 2 /*return*/ , (t.sent(), this.a_()) ];
                }
            }));
        }));
    }, 
    /**
     * Reads from the head of internal buffer, and pulling more data from
     * underlying stream if a complete element cannot be found, until an
     * element(including the prefixed length and the JSON string) is found.
     *
     * Once a complete element is read, it is dropped from internal buffer.
     *
     * Returns either the bundled element, or null if we have reached the end of
     * the stream.
     */
    t.prototype.a_ = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e, n, r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.u_() ];

                  case 1:
                    return null === (t = i.sent()) ? [ 2 /*return*/ , null ] : (e = this.c_.decode(t), 
                    n = Number(e), isNaN(n) && this.h_("length string (" + e + ") is not valid number"), 
                    [ 4 /*yield*/ , this.l_(n) ]);

                  case 2:
                    return r = i.sent(), [ 2 /*return*/ , new Ru(JSON.parse(r), t.length + n) ];
                }
            }));
        }));
    }, 
    /** First index of '{' from the underlying buffer. */ t.prototype.__ = function() {
        return this.buffer.findIndex((function(t) {
            return t === "{".charCodeAt(0);
        }));
    }, 
    /**
     * Reads from the beginning of the internal buffer, until the first '{', and
     * return the content.
     *
     * If reached end of the stream, returns a null.
     */
    t.prototype.u_ = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.__() < 0 ? [ 4 /*yield*/ , this.f_() ] : [ 3 /*break*/ , 3 ];

                  case 1:
                    if (n.sent()) return [ 3 /*break*/ , 3 ];
                    n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 0 ];

                  case 3:
                    // Broke out of the loop because underlying stream is closed, and there
                    // happens to be no more data to process.
                    return 0 === this.buffer.length ? [ 2 /*return*/ , null ] : (
                    // Broke out of the loop because underlying stream is closed, but still
                    // cannot find an open bracket.
                    (t = this.__()) < 0 && this.h_("Reached the end of bundle when a length string is expected."), 
                    e = this.buffer.slice(0, t), [ 2 /*return*/ , (this.buffer = this.buffer.slice(t), 
                    e) ]);
                }
            }));
        }));
    }, 
    /**
     * Reads from a specified position from the internal buffer, for a specified
     * number of bytes, pulling more data from the underlying stream if needed.
     *
     * Returns a string decoded from the read bytes.
     */
    t.prototype.l_ = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.buffer.length < t ? [ 4 /*yield*/ , this.f_() ] : [ 3 /*break*/ , 3 ];

                  case 1:
                    n.sent() && this.h_("Reached the end of bundle when more is expected."), n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 0 ];

                  case 3:
                    // Update the internal buffer to drop the read json string.
                    return e = this.c_.decode(this.buffer.slice(0, t)), [ 2 /*return*/ , (this.buffer = this.buffer.slice(t), 
                    e) ];
                }
            }));
        }));
    }, t.prototype.h_ = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        throw this.o_.cancel(), new Error("Invalid bundle format: " + t);
    }, 
    /**
     * Pulls more data from underlying stream to internal buffer.
     * Returns a boolean indicating whether the stream is finished.
     */
    t.prototype.f_ = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.o_.read() ];

                  case 1:
                    return (t = n.sent()).done || ((e = new Uint8Array(this.buffer.length + t.value.length)).set(this.buffer), 
                    e.set(t.value, this.buffer.length), this.buffer = e), [ 2 /*return*/ , t.done ];
                }
            }));
        }));
    }, t;
}(), ks = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n) if (0 === t[n].length) throw new U(V.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.d_ = new rt(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    return t.prototype.isEqual = function(t) {
        return this.d_.isEqual(t.d_);
    }, t;
}(), Os = 
/**
     * @param _methodName - The public API endpoint that returns this class.
     */
function(t) {
    this._methodName = t;
};

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A class representing a bundle.
 *
 * Takes a bundle stream or buffer, and presents abstractions to read bundled
 * elements out of the underlying content.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ps(t, e, n) {
    if (!n) throw new U(V.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
}

function Ls(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new U(V.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

/**
 * Validates that two boolean options are not set at the same time.
 */ function Cs(t, e, n, r) {
    if (!0 === e && !0 === r) throw new U(V.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function Rs(t) {
    if (!it.Et(t)) throw new U(V.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function Vs(t) {
    if (it.Et(t)) throw new U(V.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */ function Us(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : S();
}

function Ms(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t._), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new U(V.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        var n = Us(t);
        throw new U(V.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
    }
    return t;
}

function qs(t, e) {
    if (e <= 0) throw new U(V.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ var js = /** @class */ function() {
    function t(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new U(V.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new U(V.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        Cs("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), Fs = new Map, zs = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.w_ = "(lite)", this.E_ = new js({}), this.T_ = !1, t instanceof B ? (this.I_ = t, 
        this.m_ = new J) : (this.A_ = t, this.I_ = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new U(V.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new B(t.options.projectId);
        }(t), this.m_ = new W(e));
    }
    return Object.defineProperty(t.prototype, "app", {
        /**
         * The {@link FirebaseApp} associated with this `Firestore` service
         * instance.
         */
        get: function() {
            if (!this.A_) throw new U(V.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.A_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "R_", {
        get: function() {
            return this.T_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "P_", {
        get: function() {
            return void 0 !== this.y_;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.g_ = function(t) {
        if (this.T_) throw new U(V.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this.E_ = new js(t), void 0 !== t.credentials && (this.m_ = function(t) {
            if (!t) return new J;
            switch (t.type) {
              case "gapi":
                var e = t.client;
                // Make sure this really is a Gapi client.
                                return D(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new Y(e, t.sessionIndex || "0");

              case "provider":
                return t.client;

              default:
                throw new U(V.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }, t.prototype.V_ = function() {
        return this.E_;
    }, t.prototype.p_ = function() {
        return this.T_ = !0, this.E_;
    }, t.prototype._delete = function() {
        return this.y_ || (this.y_ = this.b_()), this.y_;
    }, 
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */
    t.prototype.b_ = function() {
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return t = this, (e = Fs.get(t)) && (E("ComponentProvider", "Removing Datastore"), 
        Fs.delete(t), e.terminate()), Promise.resolve();
        var t, e;
    }, t;
}(), Gs = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n) {
        this.v_ = e, this.S_ = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    return Object.defineProperty(t.prototype, "D_", {
        get: function() {
            return this.S_.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
        /**
         * The document's identifier within its collection.
         */
        get: function() {
            return this.S_.path.et();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        /**
         * A string representing the path of the referenced document (relative
         * to the root of the database).
         */
        get: function() {
            return this.S_.path.ot();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        /**
         * The collection this `DocumentReference` belongs to.
         */
        get: function() {
            return new Ks(this.firestore, this.v_, this.S_.path.Z());
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies a custom data converter to this `DocumentReference`, allowing you
     * to use your own custom model objects with Firestore. When you call {@link
     * setDoc}, {@link getDoc}, etc. with the returned `DocumentReference`
     * instance, the provided converter will convert between Firestore data and
     * your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `DocumentReference<U>` that uses the provided converter.
     */
    t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this.S_);
    }, t;
}(), Bs = /** @class */ function() {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    function t(t, e, n) {
        this.v_ = e, this.C_ = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t
        /**
     * Applies a custom data converter to this query, allowing you to use your own
     * custom model objects with Firestore. When you call {@link getDocs} with
     * the returned query, the provided converter will convert between Firestore
     * data and your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `Query<U>` that uses the provided converter.
     */;
    }
    return t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this.C_);
    }, t;
}(), Ks = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, se(r)) || this).firestore = e, i.D_ = r, i.type = "collection", 
        i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "id", {
        /** The collection's identifier. */ get: function() {
            return this.C_.path.et();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
        /**
         * A string representing the path of the referenced collection (relative
         * to the root of the database).
         */
        get: function() {
            return this.C_.path.ot();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        /**
         * A reference to the containing `DocumentReference` if this is a
         * subcollection. If this isn't a subcollection, the reference is null.
         */
        get: function() {
            var t = this.D_.Z();
            return t.nt() ? null : new Gs(this.firestore, 
            /* converter= */ null, new it(t));
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies a custom data converter to this CollectionReference, allowing you
     * to use your own custom model objects with Firestore. When you call {@link
     * addDoc} with the returned `CollectionReference` instance, the provided
     * converter will convert between Firestore data and your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `CollectionReference<U>` that uses the provided converter.
     */
    e.prototype.withConverter = function(t) {
        return new e(this.firestore, t, this.D_);
    }, e;
}(Bs);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Hs(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    if (t instanceof q && (t = t._), Ps("collection", "path", e), t instanceof zs) return Vs(n = et.ct.apply(et, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ e ], r))), 
    new Ks(t, /* converter= */ null, n);
    if (!(t instanceof Gs || t instanceof Ks)) throw new U(V.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    return Vs(n = et.ct.apply(et, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ t.path ], r)).child(et.ct(e))), new Ks(t.firestore, 
    /* converter= */ null, n);
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root Firestore instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function Js(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    if (t instanceof q && (t = t._), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = O.t()), Ps("doc", "path", e), t instanceof zs) return Rs(n = et.ct.apply(et, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ e ], r))), 
    new Gs(t, 
    /* converter= */ null, new it(n));
    if (!(t instanceof Gs || t instanceof Ks)) throw new U(V.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    return Rs(n = t.D_.child(et.ct.apply(et, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ e ], r)))), new Gs(t.firestore, t instanceof Ks ? t.v_ : null, new it(n));
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function Ws(t, e) {
    return t instanceof q && (t = t._), e instanceof q && (e = e._), (t instanceof Gs || t instanceof Ks) && (e instanceof Gs || e instanceof Ks) && t.firestore === e.firestore && t.path === e.path && t.v_ === e.v_
    /**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */;
}

function Qs(t, e) {
    return t instanceof q && (t = t._), e instanceof q && (e = e._), t instanceof Bs && e instanceof Bs && t.firestore === e.firestore && ye(t.C_, e.C_) && t.v_ === e.v_
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */;
}

var Ys = /** @class */ function() {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    function t(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new U(V.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new U(V.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.x_ = t, this.N_ = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * The latitude of this `GeoPoint` instance.
         */
        get: function() {
            return this.x_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * The longitude of this `GeoPoint` instance.
         */
        get: function() {
            return this.N_;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this.x_ === t.x_ && this.N_ === t.N_;
    }, t.prototype.toJSON = function() {
        return {
            latitude: this.x_,
            longitude: this.N_
        };
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.K = function(t) {
        return P(this.x_, t.x_) || P(this.N_, t.N_);
    }, t;
}(), Xs = /^__.*__$/, $s = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.zt = e, this.fieldTransforms = n;
    }
    return t.prototype.O_ = function(t, e) {
        return null !== this.zt ? new Qe(t, this.data, this.zt, e, this.fieldTransforms) : new We(t, this.data, e, this.fieldTransforms);
    }, t;
}(), Zs = /** @class */ function() {
    function t(t, 
    // The fieldMask does not include document transforms.
    e, n) {
        this.data = t, this.zt = e, this.fieldTransforms = n;
    }
    return t.prototype.O_ = function(t, e) {
        return new Qe(t, this.data, this.zt, e, this.fieldTransforms);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ta(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw S();
    }
}

/** A "context" object passed around while parsing user data. */ var ea = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.T = e, this.Kt = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.F_(), this.fieldTransforms = i || [], this.zt = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "k_", {
        get: function() {
            return this.settings.k_;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.M_ = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.T, this.Kt, this.ignoreUndefinedProperties, this.fieldTransforms, this.zt);
    }, t.prototype.L_ = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.M_({
            path: n,
            B_: !1
        });
        return r.q_(t), r;
    }, t.prototype.U_ = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.M_({
            path: n,
            B_: !1
        });
        return r.F_(), r;
    }, t.prototype.Q_ = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.M_({
            path: void 0,
            B_: !0
        });
    }, t.prototype.K_ = function(t) {
        return _a(t, this.settings.methodName, this.settings.j_ || !1, this.path, this.settings.W_);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.zt.find((function(e) {
            return t.st(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.st(e.field);
        }));
    }, t.prototype.F_ = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.q_(this.path.get(t));
    }, t.prototype.q_ = function(t) {
        if (0 === t.length) throw this.K_("Document fields must not be empty");
        if (ta(this.k_) && Xs.test(t)) throw this.K_('Document fields cannot begin and end with "__"');
    }, t;
}(), na = /** @class */ function() {
    function t(t, e, n) {
        this.T = t, this.ignoreUndefinedProperties = e, this.Kt = n || Wo(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.G_ = function(t, e, n, r) {
        return void 0 === r && (r = !1), new ea({
            k_: t,
            methodName: e,
            W_: n,
            path: rt.at(),
            B_: !1,
            j_: r
        }, this.T, this.Kt, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ function ra(t) {
    var e = t.p_(), n = Wo(t.I_);
    return new na(t.I_, !!e.ignoreUndefinedProperties, n);
}

/** Parse document data from a set() call. */ function ia(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var u = t.G_(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    ma("Data must be an object, but it was:", u, r);
    var s, a, c = va(r, u);
    if (o.merge) s = new at(u.zt), a = u.fieldTransforms; else if (o.mergeFields) {
        for (var f = [], h = 0, l = o.mergeFields; h < l.length; h++) {
            var p = ga(e, l[h], n);
            if (!u.contains(p)) throw new U(V.INVALID_ARGUMENT, "Field '" + p + "' is specified in your field mask but missing from your input data.");
            Ia(f, p) || f.push(p);
        }
        s = new at(f), a = u.fieldTransforms.filter((function(t) {
            return s.It(t.field);
        }));
    } else s = null, a = u.fieldTransforms;
    return new $s(new Pt(c), s, a);
}

var oa = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.z_ = function(t) {
        if (2 /* MergeSet */ !== t.k_) throw 1 /* Update */ === t.k_ ? t.K_(this._methodName + "() can only appear at the top level of your update data") : t.K_(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.zt.push(t.path), null;
    }, e.prototype.isEqual = function(t) {
        return t instanceof e;
    }, e;
}(Os);

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function ua(t, e, n) {
    return new ea({
        k_: 3 /* Argument */ ,
        W_: e.settings.W_,
        methodName: t._methodName,
        B_: n
    }, e.T, e.Kt, e.ignoreUndefinedProperties);
}

var sa = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.z_ = function(t) {
        return new Me(t.path, new ke);
    }, e.prototype.isEqual = function(t) {
        return t instanceof e;
    }, e;
}(Os), aa = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).H_ = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.z_ = function(t) {
        var e = ua(this, t, 
        /*array=*/ !0), n = this.H_.map((function(t) {
            return da(t, e);
        })), r = new Oe(n);
        return new Me(t.path, r);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(Os), ca = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).H_ = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.z_ = function(t) {
        var e = ua(this, t, 
        /*array=*/ !0), n = this.H_.map((function(t) {
            return da(t, e);
        })), r = new Le(n);
        return new Me(t.path, r);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(Os), fa = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).J_ = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.z_ = function(t) {
        var e = new Re(t.Kt, Ne(t.Kt, this.J_));
        return new Me(t.path, e);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(Os);

/** Parse update data from an update() call. */ function ha(t, e, n, r) {
    var i = t.G_(1 /* Update */ , e, n);
    ma("Data must be an object, but it was:", i, r);
    var o = [], u = new Lt;
    ut(r, (function(t, r) {
        var s = ba(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                r instanceof q && (r = r._);
        var a = i.U_(s);
        if (r instanceof oa) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(s); else {
            var c = da(r, a);
            null != c && (o.push(s), u.set(s, c));
        }
    }));
    var s = new at(o);
    return new Zs(u.yt(), s, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function la(t, e, n, r, i, o) {
    var u = t.G_(1 /* Update */ , e, n), s = [ ga(e, r, n) ], a = [ i ];
    if (o.length % 2 != 0) throw new U(V.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var c = 0; c < o.length; c += 2) s.push(ga(e, o[c])), a.push(o[c + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var f = [], h = new Lt, l = s.length - 1; l >= 0; --l) if (!Ia(f, s[l])) {
        var p = s[l], d = a[l];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
        d instanceof q && (d = d._);
        var v = u.U_(p);
        if (d instanceof oa) 
        // Add it to the field mask, but don't add anything to updateData.
        f.push(p); else {
            var y = da(d, v);
            null != y && (f.push(p), h.set(p, y));
        }
    }
    var m = new at(f);
    return new Zs(h.yt(), m, u.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function pa(t, e, n, r) {
    return void 0 === r && (r = !1), da(n, t.G_(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function da(t, e) {
    if (
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t instanceof q && (t = t._), ya(t)) return ma("Unsupported field value:", e, t), 
    va(t, e);
    if (t instanceof Os) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!ta(e.k_)) throw e.K_(t._methodName + "() can only be used with update() and set()");
        if (!e.path) throw e.K_(t._methodName + "() is not currently supported inside arrays");
        var n = t.z_(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.zt.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.B_ && 4 /* ArrayArgument */ !== e.k_) throw e.K_("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var u = da(o[i], e.Q_(r));
                null == u && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                u = {
                    nullValue: "NULL_VALUE"
                }), n.push(u), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (t instanceof q && (t = t._), null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return Ne(e.Kt, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = $.fromDate(t);
            return {
                timestampValue: qn(e.Kt, n)
            };
        }
        if (t instanceof $) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            n = new $(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: qn(e.Kt, n)
            };
        }
        if (t instanceof Ys) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof M) return {
            bytesValue: jn(e.Kt, t.l)
        };
        if (t instanceof Gs) {
            n = e.T;
            var r = t.firestore.I_;
            if (!r.isEqual(n)) throw e.K_("Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
            return {
                referenceValue: Gn(t.firestore.I_ || e.T, t.S_.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.K_("Unsupported field value: " + Us(t));
    }(t, e);
}

function va(t, e) {
    var n = {};
    return st(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.zt.push(e.path) : ut(t, (function(t, r) {
        var i = da(r, e.L_(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function ya(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof $ || t instanceof Ys || t instanceof M || t instanceof Gs || t instanceof Os);
}

function ma(t, e, n) {
    if (!ya(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        var r = Us(n);
        throw "an object" === r ? e.K_(t + " a custom object") : e.K_(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function ga(t, e, n) {
    if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    e instanceof q && (e = e._), e instanceof ks) return e.d_;
    if ("string" == typeof e) return ba(t, e);
    throw _a("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ var wa = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function ba(t, e, n) {
    if (e.search(wa) >= 0) throw _a("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return (new (ks.bind.apply(ks, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ void 0 ], e.split("."))))).d_;
    } catch (r) {
        throw _a("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function _a(t, e, n, r, i) {
    var o = r && !r.nt(), u = void 0 !== i, s = "Function " + e + "() called with invalid data";
    n && (s += " (via `toFirestore()`)");
    var a = "";
    return (o || u) && (a += " (found", o && (a += " in field " + r), u && (a += " in document " + i), 
    a += ")"), new U(V.INVALID_ARGUMENT, (s += ". ") + t + a)
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */;
}

function Ia(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ var Ea = /** @class */ function() {
    function t(t) {
        this.Dh = t, 
        // The version of each document that was read during this transaction.
        this.Y_ = new Map, this.mutations = [], this.X_ = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.Z_ = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.tf = new Set;
    }
    return t.prototype.ef = function(t) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var e, n = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                switch (r.label) {
                  case 0:
                    if (this.nf(), this.mutations.length > 0) throw new U(V.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, e) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                            var n, r, i, o, u, s;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(a) {
                                switch (a.label) {
                                  case 0:
                                    return n = x(t), r = Qn(n.Kt) + "/documents", i = {
                                        documents: e.map((function(t) {
                                            return Kn(n.Kt, t);
                                        }))
                                    }, [ 4 /*yield*/ , n.Cu("BatchGetDocuments", r, i) ];

                                  case 1:
                                    return o = a.sent(), u = new Map, o.forEach((function(t) {
                                        var e = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                D(!!e.found), e.found.name, e.found.updateTime;
                                                var n = Hn(t, e.found.name), r = zn(e.found.updateTime), i = new Pt({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return new Vt(n, r, i, {});
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                D(!!e.missing), D(!!e.readTime);
                                                var n = Hn(t, e.missing), r = zn(e.readTime);
                                                return new Ut(n, r);
                                            }(t, e) : S();
                                        }(n.Kt, t);
                                        u.set(e.key.toString(), e);
                                    })), s = [], [ 2 /*return*/ , (e.forEach((function(t) {
                                        var e = u.get(t.toString());
                                        D(!!e), s.push(e);
                                    })), s) ];
                                }
                            }));
                        }));
                    }(this.Dh, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((e = r.sent()).forEach((function(t) {
                        t instanceof Ut || t instanceof Vt ? n.sf(t) : S();
                    })), e) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.O_(t, this.Gt(t))), this.tf.add(t.toString());
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.O_(t, this.rf(t)));
        } catch (t) {
            this.Z_ = t;
        }
        this.tf.add(t.toString());
    }, t.prototype.delete = function(t) {
        this.write(new nn(t, this.Gt(t))), this.tf.add(t.toString());
    }, t.prototype.commit = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.nf(), this.Z_) throw this.Z_;
                    return t = this.Y_, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, n) {
                        var r = it.ft(n);
                        e.mutations.push(new rn(r, e.Gt(r)));
                    })), [ 4 /*yield*/ , function(t, e) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                            var n, r, i;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                                switch (o.label) {
                                  case 0:
                                    return n = x(t), r = Qn(n.Kt) + "/documents", i = {
                                        writes: e.map((function(t) {
                                            return Zn(n.Kt, t);
                                        }))
                                    }, [ 4 /*yield*/ , n.bu("Commit", r, i) ];

                                  case 1:
                                    return o.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.Dh, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return n.sent(), this.X_ = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.sf = function(t) {
        var e;
        if (t instanceof Vt) e = t.version; else {
            if (!(t instanceof Ut)) throw S();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = Z.min();
        }
        var n = this.Y_.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new U(V.ABORTED, "Document version changed between two reads.");
        } else this.Y_.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Gt = function(t) {
        var e = this.Y_.get(t.toString());
        return !this.tf.has(t.toString()) && e ? je.updateTime(e) : je.jt();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.rf = function(t) {
        var e = this.Y_.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.tf.has(t.toString()) && e) {
            if (e.isEqual(Z.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new U(V.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return je.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return je.exists(!0);
    }, t.prototype.write = function(t) {
        this.nf(), this.mutations.push(t);
    }, t.prototype.nf = function() {}, t;
}(), Ta = /** @class */ function() {
    function t(t, e, n, r) {
        this.fs = t, this.Dh = e, this.updateFunction = n, this.Ts = r, this.cf = 5, this.zu = new Qo(this.fs, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.run = function() {
        this.af();
    }, t.prototype.af = function() {
        var t = this;
        this.zu.Bu((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(t, void 0, void 0, (function() {
                var t, e, n = this;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                    return t = new Ea(this.Dh), (e = this.uf(t)) && e.then((function(e) {
                        n.fs.ys((function() {
                            return t.commit().then((function() {
                                n.Ts.resolve(e);
                            })).catch((function(t) {
                                n.hf(t);
                            }));
                        }));
                    })).catch((function(t) {
                        n.hf(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.uf = function(t) {
        try {
            var e = this.updateFunction(t);
            return !yt(e) && e.catch && e.then ? e : (this.Ts.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Ts.reject(t), null;
        }
    }, t.prototype.hf = function(t) {
        var e = this;
        this.cf > 0 && this.lf(t) ? (this.cf -= 1, this.fs.ys((function() {
            return e.af(), Promise.resolve();
        }))) : this.Ts.reject(t);
    }, t.prototype.lf = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !un(e);
        }
        return !1;
    }, t;
}(), Na = /** @class */ function() {
    function t(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e, n) {
        var r = this;
        this.credentials = t, this.fs = e, this.gu = n, this.user = K.UNAUTHENTICATED, this.clientId = O.t(), 
        this._f = function() {}, this.N = new vr, this.credentials.S((function(t) {
            E("FirestoreClient", "Received user=", t.uid), r.user = t, r._f(t), r.N.resolve();
        }));
    }
    return t.prototype.getConfiguration = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.N.promise ];

                  case 1:
                    return [ 2 /*return*/ , (t.sent(), {
                        fs: this.fs,
                        gu: this.gu,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        Yl: this.user,
                        bl: 100
                    }) ];
                }
            }));
        }));
    }, t.prototype.ff = function(t) {
        var e = this;
        this._f = t, 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.N.promise.then((function() {
            return e._f(e.user);
        }));
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.df = function() {
        if (this.fs.wf) throw new U(V.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.terminate = function() {
        var t = this;
        this.fs.Ef();
        var e = new vr;
        return this.fs.Tf((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(t, void 0, void 0, (function() {
                var t, n;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return r.trys.push([ 0, 5, , 6 ]), this.If ? [ 4 /*yield*/ , this.If.terminate() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        r.sent(), r.label = 2;

                      case 2:
                        return this.mf ? [ 4 /*yield*/ , this.mf.terminate() ] : [ 3 /*break*/ , 4 ];

                      case 3:
                        r.sent(), r.label = 4;

                      case 4:
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        return this.credentials.D(), e.resolve(), [ 3 /*break*/ , 6 ];

                      case 5:
                        return t = r.sent(), n = Sr(t, "Failed to shutdown persistence"), e.reject(n), [ 3 /*break*/ , 6 ];

                      case 6:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), e.promise;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */ function Aa(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r, i = this;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
            switch (o.label) {
              case 0:
                return t.fs.Af(), E("FirestoreClient", "Initializing OfflineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 1:
                return n = o.sent(), [ 4 /*yield*/ , e.initialize(n) ];

              case 2:
                return o.sent(), r = n.Yl, t.ff((function(n) {
                    r.isEqual(n) || (r = n, t.fs.bo((function() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(i, void 0, void 0, (function() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , uo(e.Sh, n) ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })));
                })), 
                // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                e.persistence.yo((function() {
                    return t.terminate();
                })), t.mf = e, [ 2 /*return*/ ];
            }
        }));
    }));
}

function Sa(t, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var n, r;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
            switch (i.label) {
              case 0:
                return t.fs.Af(), [ 4 /*yield*/ , Da(t) ];

              case 1:
                return n = i.sent(), E("FirestoreClient", "Initializing OnlineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 2:
                return r = i.sent(), [ 4 /*yield*/ , e.initialize(n, r) ];

              case 3:
                return i.sent(), 
                // The CredentialChangeListener of the online component provider takes
                // precedence over the offline component provider.
                t.ff((function(n) {
                    return t.fs.bo((function() {
                        return function(t, e) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                var n, r;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                                    switch (i.label) {
                                      case 0:
                                        return (n = x(t)).fs.Af(), E("RemoteStore", "RemoteStore received new credentials"), 
                                        r = fu(n), 
                                        // Tear down and re-create our network streams. This will ensure we get a
                                        // fresh auth token for the new user and re-fill the write pipeline with
                                        // new mutations from the LocalStore (since mutations are per-user).
                                        n.Oh.add(3 /* CredentialChange */), [ 4 /*yield*/ , ru(n) ];

                                      case 1:
                                        return i.sent(), r && 
                                        // Don't set the network status to Unknown if we are offline.
                                        n.Mh.set("Unknown" /* Unknown */), [ 4 /*yield*/ , n.Ch.s_(e) ];

                                      case 2:
                                        return i.sent(), n.Oh.delete(3 /* CredentialChange */), [ 4 /*yield*/ , nu(n) ];

                                      case 3:
                                        // Tear down and re-create our network streams. This will ensure we get a
                                        // fresh auth token for the new user and re-fill the write pipeline with
                                        // new mutations from the LocalStore (since mutations are per-user).
                                        return i.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(e.gl, n);
                    }));
                })), t.If = e, [ 2 /*return*/ ];
            }
        }));
    }));
}

function Da(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.mf ? [ 3 /*break*/ , 2 ] : (E("FirestoreClient", "Using default OfflineComponentProvider"), 
                [ 4 /*yield*/ , Aa(t, new Es) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.mf ];
            }
        }));
    }));
}

function xa(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.If ? [ 3 /*break*/ , 2 ] : (E("FirestoreClient", "Using default OnlineComponentProvider"), 
                [ 4 /*yield*/ , Sa(t, new As) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.If ];
            }
        }));
    }));
}

function ka(t) {
    return Da(t).then((function(t) {
        return t.persistence;
    }));
}

function Oa(t) {
    return Da(t).then((function(t) {
        return t.Sh;
    }));
}

function Pa(t) {
    return xa(t).then((function(t) {
        return t.gl;
    }));
}

function La(t) {
    return xa(t).then((function(t) {
        return t.fa;
    }));
}

function Ca(t) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
        var e, n;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
            switch (r.label) {
              case 0:
                return [ 4 /*yield*/ , xa(t) ];

              case 1:
                return e = r.sent(), [ 2 /*return*/ , ((n = e.Vl).Gh = Ku.bind(null, e.fa), n.Jh = Ju.bind(null, e.fa), 
                n) ];
            }
        }));
    }));
}

/** Enables the network connection and re-enqueues all pending operations. */ function Ra(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new vr;
    return t.fs.ys((function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
            var r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return r = function(t, e, n, r, i) {
                        var o = new Ds({
                            next: function(o) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.ys((function() {
                                    return ku(t, u);
                                }));
                                var s = o.docs.has(n);
                                !s && o.fromCache ? 
                                // TODO(dimond): If we're online and the document doesn't
                                // exist then we resolve with a doc.exists set to false. If
                                // we're offline however, we reject the Promise in this
                                // case. Two options: 1) Cache the negative response from
                                // the server so we can deliver that even when you're
                                // offline 2) Actually reject the Promise in the online case
                                // if the document doesn't exist.
                                i.reject(new U(V.UNAVAILABLE, "Failed to get document because the client is offline.")) : s && o.fromCache && r && "server" === r.source ? i.reject(new U(V.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), u = new Cu(se(n.path), o, {
                            includeMetadataChanges: !0,
                            sl: !0
                        });
                        return xu(t, u);
                    }, [ 4 /*yield*/ , Ca(t) ];

                  case 1:
                    return [ 2 /*return*/ , r.apply(void 0, [ o.sent(), t.fs, e, n, i ]) ];
                }
            }));
        }));
    })), i.promise;
}

function Va(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new vr;
    return t.fs.ys((function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
            var r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return r = function(t, e, n, r, i) {
                        var o = new Ds({
                            next: function(n) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.ys((function() {
                                    return ku(t, u);
                                })), n.fromCache && "server" === r.source ? i.reject(new U(V.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), u = new Cu(n, o, {
                            includeMetadataChanges: !0,
                            sl: !0
                        });
                        return xu(t, u);
                    }, [ 4 /*yield*/ , Ca(t) ];

                  case 1:
                    return [ 2 /*return*/ , r.apply(void 0, [ o.sent(), t.fs, e, n, i ]) ];
                }
            }));
        }));
    })), i.promise;
}

var Ua = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.Rf = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Pf = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.yf = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.gf = [], 
        // visible for testing
        this.Vf = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.pf = !1, 
        // List of TimerIds to fast-forward delays for.
        this.bf = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.zu = new Qo(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.vf = function() {
            var e = Jo();
            e && E("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.zu.Uu();
        };
        var e = Jo();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.vf);
    }
    return Object.defineProperty(t.prototype, "wf", {
        get: function() {
            return this.yf;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.ys = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, t.prototype.Tf = function(t) {
        this.Sf(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Df(t);
    }, t.prototype.Ef = function() {
        if (!this.yf) {
            this.yf = !0;
            var t = Jo();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.vf);
        }
    }, t.prototype.enqueue = function(t) {
        return this.Sf(), this.yf ? new Promise((function(t) {})) : this.Df(t);
    }, t.prototype.bo = function(t) {
        var e = this;
        this.ys((function() {
            return e.Pf.push(t), e.Cf();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.Cf = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t, e = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (0 === this.Pf.length) return [ 3 /*break*/ , 5 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.Pf[0]() ];

                  case 2:
                    return n.sent(), this.Pf.shift(), this.zu.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!_r(t = n.sent())) throw t;
                    // Failure will be handled by AsyncQueue
                                        return E("AsyncQueue", "Operation failed with retryable error: " + t), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.Pf.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.zu.Bu((function() {
                        return e.Cf();
                    })), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Df = function(t) {
        var e = this, n = this.Rf.then((function() {
            return e.pf = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.Vf = t, e.pf = !1, T("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.pf = !1, t;
            }));
        }));
        return this.Rf = n, n;
    }, t.prototype.Ir = function(t, e, n) {
        var r = this;
        this.Sf(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.bf.indexOf(t) > -1 && (e = 0);
        var i = Ar.Is(this, t, e, n, (function(t) {
            return r.xf(t);
        }));
        return this.gf.push(i), i;
    }, t.prototype.Sf = function() {
        this.Vf && S();
    }, t.prototype.Af = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Nf = function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
            var t;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.Rf ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.Rf) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.Of = function(t) {
        for (var e = 0, n = this.gf; e < n.length; e++) {
            if (n[e].ds === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.Ff = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Nf().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.gf.sort((function(t, e) {
                return t.ws - e.ws;
            }));
            for (var n = 0, r = e.gf; n < r.length; n++) {
                var i = r[n];
                if (i.Ps(), "all" /* All */ !== t && i.ds === t) break;
            }
            return e.Nf();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.kf = function(t) {
        this.bf.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.xf = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.gf.indexOf(t);
        this.gf.splice(e, 1);
    }, t;
}(), Ma = -1, qa = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this).Mf = new Ua, r.w_ = "name" in e ? e.name : "[DEFAULT]", 
        r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.b_ = function() {
        return this.Lf || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        Fa(this), this.Lf.terminate();
    }, e;
}(zs);

function ja(t) {
    return t.Lf || Fa(t), t.Lf.df(), t.Lf;
}

function Fa(t) {
    var e = t.p_(), n = function(t, e, n) {
        return new G(t, e, n.host, n.ssl, n.experimentalForceLongPolling, n.experimentalAutoDetectLongPolling);
    }(t.I_, t.w_, e);
    t.Lf = new Na(t.m_, t.Mf, n);
}

/**
 * Attempts to enable persistent storage, if possible.
 *
 * Must be called before any other functions (other than
 * {@link initializeFirestore}, {@link getFirestore} or
 * {@link clearIndexedDbPersistence}.
 *
 * If this fails, `enableIndexedDbPersistence()` will reject the promise it
 * returns. Note that even after this failure, the `Firestore` instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The `Firestore` instance to enable persistence for.
 * @param persistenceSettings - Optional settings object to configure
 * persistence.
 * @returns A promise that represents successfully enabling persistent storage.
 */
/**
 * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
 * If the operation fails with a recoverable error (see
 * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
 * but the client remains usable.
 */ function za(t, e, n) {
    var r = this, i = new vr;
    return t.fs.enqueue((function() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(r, void 0, void 0, (function() {
            var r;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return o.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , Aa(t, n) ];

                  case 1:
                    return o.sent(), [ 4 /*yield*/ , Sa(t, e) ];

                  case 2:
                    return o.sent(), i.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!
                    /**
         * Decides whether the provided error allows us to gracefully disable
         * persistence (as opposed to crashing the client).
         */
                    function(t) {
                        return "FirebaseError" === t.name ? t.code === V.FAILED_PRECONDITION || t.code === V.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (22 === t.code || 20 === t.code || 
                        // Firefox Private Browsing mode disables IndexedDb and returns
                        // INVALID_STATE for any usage.
                        11 === t.code);
                    }(r = o.sent())) throw r;
                    return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + r), 
                    i.reject(r), [ 3 /*break*/ , 4 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    })).then((function() {
        return i.promise;
    }));
}

/**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */
function Ga(t) {
    if (t.R_ || t.P_) throw new U(V.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 */ var Ba = /** @class */ function() {
    function t() {}
    return t.prototype.$f = function(t, e) {
        switch (void 0 === e && (e = "none"), wt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return ht(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.Bf(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.qf(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.Uf(lt(t.bytesValue));

          case 7 /* RefValue */ :
            return this.Qf(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.Kf(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.jf(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.Wf(t.mapValue, e);

          default:
            throw S();
        }
    }, t.prototype.Wf = function(t, e) {
        var n = this, r = {};
        return ut(t.fields || {}, (function(t, i) {
            r[t] = n.$f(i, e);
        })), r;
    }, t.prototype.Kf = function(t) {
        return new Ys(ht(t.latitude), ht(t.longitude));
    }, t.prototype.jf = function(t, e) {
        var n = this;
        return (t.values || []).map((function(t) {
            return n.$f(t, e);
        }));
    }, t.prototype.qf = function(t, e) {
        switch (e) {
          case "previous":
            var n = dt(t);
            return null == n ? null : this.$f(n, e);

          case "estimate":
            return this.Bf(vt(t));

          default:
            return null;
        }
    }, t.prototype.Bf = function(t) {
        var e = ft(t);
        return new $(e.seconds, e.nanos);
    }, t.prototype.Gf = function(t, e) {
        var n = et.ct(t);
        D(dr(n));
        var r = new B(n.get(1), n.get(3)), i = new it(n.X(5));
        return r.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        T("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), 
        i;
    }, t;
}(), Ka = /** @class */ function() {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    function t(t, e, n, r, i) {
        this.zf = t, this.Hf = e, this.S_ = n, this.Jf = r, this.v_ = i;
    }
    return Object.defineProperty(t.prototype, "id", {
        /** Property of the `DocumentSnapshot` that provides the document's ID. */ get: function() {
            return this.S_.path.et();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        /**
         * The `DocumentReference` for the document included in the `DocumentSnapshot`.
         */
        get: function() {
            return new Gs(this.zf, this.v_, this.S_);
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */
    t.prototype.exists = function() {
        return null !== this.Jf;
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */
    t.prototype.data = function() {
        if (this.Jf) {
            if (this.v_) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var t = new Ha(this.zf, this.Hf, this.S_, this.Jf, 
                /* converter= */ null);
                return this.v_.fromFirestore(t);
            }
            return this.Hf.$f(this.Jf.vt());
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.prototype.get = function(t) {
        if (this.Jf) {
            var e = this.Jf.data().field(Ja("DocumentSnapshot.get", t));
            if (null !== e) return this.Hf.$f(e);
        }
    }, t;
}(), Ha = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.data = function() {
        return t.prototype.data.call(this);
    }, e;
}(Ka);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */
function Ja(t, e) {
    return "string" == typeof e ? ba(t, e) : e instanceof q ? e._.d_ : e.d_;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wa(t) {
    if (ce(t) && 0 === t.Nt.length) throw new U(V.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link startAt}, {@link startAfter}, {@link
 * endBefore}, {@link endAt}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ var Qa = function() {};

/**
 * Creates a new immutable instance of `query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function Ya(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
        var o = i[r];
        t = o.Yf(t);
    }
    return t;
}

var Xa = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).Xf = e, i.Zf = n, i.td = r, i.type = "where", 
        i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Yf = function(t) {
        var e = ra(t.firestore), n = function(t, e, n, r, i, o, u) {
            var s;
            if (i.ht()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new U(V.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
                if ("in" /* IN */ === o || "not-in" /* NOT_IN */ === o) {
                    ic(u, o);
                    for (var a = [], c = 0, f = u; c < f.length; c++) {
                        var h = f[c];
                        a.push(rc(r, t, h));
                    }
                    s = {
                        arrayValue: {
                            values: a
                        }
                    };
                } else s = rc(r, t, u);
            } else "in" /* IN */ !== o && "not-in" /* NOT_IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || ic(u, o), 
            s = pa(n, "where", u, 
            /* allowArrays= */ "in" /* IN */ === o || "not-in" /* NOT_IN */ === o);
            var l = Bt.create(i, o, s);
            return function(t, e) {
                if (e.xt()) {
                    var n = he(t);
                    if (null !== n && !n.isEqual(e.field)) throw new U(V.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                    var r = fe(t);
                    null !== r && oc(t, e.field, r);
                }
                var i = function(t, e) {
                    for (var n = 0, r = t.filters; n < r.length; n++) {
                        var i = r[n];
                        if (e.indexOf(i.op) >= 0) return i.op;
                    }
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(e.op));
                if (null !== i) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw i === e.op ? new U(V.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new U(V.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
            }(t, l), l;
        }(t.C_, 0, e, t.firestore.I_, this.Xf, this.Zf, this.td);
        return new Bs(t.firestore, t.v_, function(t, e) {
            var n = t.filters.concat([ e ]);
            return new oe(t.path, t.collectionGroup, t.Nt.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t.C_, n));
    }, e;
}(Qa), $a = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).Xf = e, r.ed = n, r.type = "orderBy", r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Yf = function(t) {
        var e = function(t, e, n) {
            if (null !== t.startAt) throw new U(V.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new U(V.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            var r = new ee(e, n);
            return function(t, e) {
                if (null === fe(t)) {
                    // This is the first order by. It must match any inequality.
                    var n = he(t);
                    null !== n && oc(t, n, e.field);
                }
            }(t, r), r;
        }(t.C_, this.Xf, this.ed);
        return new Bs(t.firestore, t.v_, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.Nt.concat([ e ]);
            return new oe(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t.C_, e));
    }, e;
}(Qa), Za = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.nd = n, i.sd = r, i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Yf = function(t) {
        return new Bs(t.firestore, t.v_, ve(t.C_, this.nd, this.sd));
    }, e;
}(Qa), tc = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.rd = n, i.od = r, i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Yf = function(t) {
        var e = nc(t, this.type, this.rd, this.od);
        return new Bs(t.firestore, t.v_, function(t, e) {
            return new oe(t.path, t.collectionGroup, t.Nt.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t.C_, e));
    }, e;
}(Qa), ec = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.rd = n, i.od = r, i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Yf = function(t) {
        var e = nc(t, this.type, this.rd, this.od);
        return new Bs(t.firestore, t.v_, function(t, e) {
            return new oe(t.path, t.collectionGroup, t.Nt.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t.C_, e));
    }, e;
}(Qa);

/**
 * Creates a `QueryConstraint` that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created `Query`.
 */
/** Helper function to create a bound from a document or fields */
function nc(t, e, n, r) {
    if (n[0] instanceof q && (n[0] = n[0]._), n[0] instanceof Ka) return function(t, e, n, r, i) {
        if (!r) throw new U(V.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var o = [], u = 0, s = pe(t); u < s.length; u++) {
            var a = s[u];
            if (a.field.ht()) o.push(At(e, r.key)); else {
                var c = r.field(a.field);
                if (pt(c)) throw new U(V.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === c) {
                    var f = a.field.ot();
                    throw new U(V.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + f + "' (used as the orderBy) does not exist.");
                }
                o.push(c);
            }
        }
        return new Zt(o, i);
    }(t.C_, t.firestore.I_, e, n[0].Jf, r);
    var i = ra(t.firestore);
    return function(t, e, n, r, i, o) {
        // Use explicit order by's because it has to match the query the user made
        var u = t.Nt;
        if (i.length > u.length) throw new U(V.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
        for (var s = [], a = 0; a < i.length; a++) {
            var c = i[a];
            if (u[a].field.ht()) {
                if ("string" != typeof c) throw new U(V.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                if (!le(t) && -1 !== c.indexOf("/")) throw new U(V.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                var f = t.path.child(et.ct(c));
                if (!it.Et(f)) throw new U(V.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + f + "' is not because it contains an odd number of segments.");
                var h = new it(f);
                s.push(At(e, h));
            } else {
                var l = pa(n, r, c);
                s.push(l);
            }
        }
        return new Zt(s, o);
    }(t.C_, t.firestore.I_, i, e, n, r);
}

function rc(t, e, n) {
    if (n instanceof q && (n = n._), "string" == typeof n) {
        if ("" === n) throw new U(V.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!le(e) && -1 !== n.indexOf("/")) throw new U(V.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(et.ct(n));
        if (!it.Et(r)) throw new U(V.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return At(t, new it(r));
    }
    if (n instanceof Gs) return At(t, n.S_);
    throw new U(V.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Us(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function ic(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new U(V.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
    if (t.length > 10) throw new U(V.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
}

function oc(t, e, n) {
    if (!n.isEqual(e)) throw new U(V.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uc(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

function sc(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var ac = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Uf = function(t) {
        return new M(t);
    }, e.prototype.Qf = function(t) {
        var e = this.Gf(t, this.firestore.I_);
        return new Gs(this.firestore, /* converter= */ null, e);
    }, e;
}(Ba), cc = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e
        /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), fc = /** @class */ function(t) {
    /** @hideconstructor protected */
    function e(e, n, r, i, o, u) {
        var s = this;
        return (s = t.call(this, e, n, r, i, u) || this).zf = e, s.ad = e, s.metadata = o, 
        s;
    }
    /**
     * Property of the `DocumentSnapshot` that signals whether or not the data
     * exists. True if the document exists.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.exists = function() {
        return t.prototype.exists.call(this);
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */
    e.prototype.data = function(t) {
        if (void 0 === t && (t = {}), this.Jf) {
            if (this.v_) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var e = new hc(this.zf, this.Hf, this.S_, this.Jf, this.metadata, 
                /* converter= */ null);
                return this.v_.fromFirestore(e, t);
            }
            return this.Hf.$f(this.Jf.vt(), t.serverTimestamps);
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.prototype.get = function(t, e) {
        if (void 0 === e && (e = {}), this.Jf) {
            var n = this.Jf.data().field(Ja("DocumentSnapshot.get", t));
            if (null !== n) return this.Hf.$f(n, e.serverTimestamps);
        }
    }, e;
}(Ka), hc = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.data = function(e) {
        return void 0 === e && (e = {}), t.prototype.data.call(this, e);
    }, e;
}(fc), lc = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n, r) {
        this.zf = t, this.Hf = e, this.ud = r, this.metadata = new cc(r.hasPendingWrites, r.fromCache), 
        this.query = n;
    }
    return Object.defineProperty(t.prototype, "docs", {
        /** An array of all the documents in the `QuerySnapshot`. */ get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        /** The number of documents in the `QuerySnapshot`. */ get: function() {
            return this.ud.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        /** True if there are no documents in the `QuerySnapshot`. */ get: function() {
            return 0 === this.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */
    t.prototype.forEach = function(t, e) {
        var n = this;
        this.ud.docs.forEach((function(r) {
            t.call(e, new hc(n.zf, n.Hf, r.key, r, new cc(n.ud.Ce.has(r.key), n.ud.fromCache), n.query.v_));
        }));
    }, 
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */
    t.prototype.docChanges = function(t) {
        void 0 === t && (t = {});
        var e = !!t.includeMetadataChanges;
        if (e && this.ud.Ne) throw new U(V.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.hd && this.ld === e || (this.hd = 
        /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
        function(t, e) {
            if (t.ud.De.nt()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var n = 0;
                return t.ud.docChanges.map((function(e) {
                    var r = new hc(t.zf, t.Hf, e.doc.key, e.doc, new cc(t.ud.Ce.has(e.doc.key), t.ud.fromCache), t.query.v_);
                    return e.doc, {
                        type: "added",
                        doc: r,
                        oldIndex: -1,
                        newIndex: n++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var r = t.ud.De;
            return t.ud.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var n = new hc(t.zf, t.Hf, e.doc.key, e.doc, new cc(t.ud.Ce.has(e.doc.key), t.ud.fromCache), t.query.v_), i = -1, o = -1;
                return 0 /* Added */ !== e.type && (i = r.indexOf(e.doc.key), r = r.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), {
                    type: pc(e.type),
                    doc: n,
                    oldIndex: i,
                    newIndex: o
                };
            }));
        }(this, e), this.ld = e), this.hd;
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ function pc(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return S();
    }
}

// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function dc(t, e) {
    return t instanceof fc && e instanceof fc ? t.zf === e.zf && t.S_.isEqual(e.S_) && (null === t.Jf ? null === e.Jf : t.Jf.isEqual(e.Jf)) && t.v_ === e.v_ : t instanceof lc && e instanceof lc && t.zf === e.zf && Qs(t.query, e.query) && t.metadata.isEqual(e.metadata) && t.ud.isEqual(e.ud);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ var vc = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Uf = function(t) {
        return new M(t);
    }, e.prototype.Qf = function(t) {
        var e = this.Gf(t, this.firestore.I_);
        return new Gs(this.firestore, /* converter= */ null, e);
    }, e;
}(Ba);

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function yc(t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    t = Ms(t, Gs);
    var o = Ms(t.firestore, qa), u = ra(o);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    return e instanceof q && (e = e._), gc(o, [ ("string" == typeof e || e instanceof ks ? la(u, "updateDoc", t.S_, e, n, r) : ha(u, "updateDoc", t.S_, e)).O_(t.S_, je.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function mc(t) {
    for (var e, n, r, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    t instanceof q && (t = t._);
    var u = {
        includeMetadataChanges: !1
    }, s = 0;
    "object" != typeof i[s] || uc(i[s]) || (u = i[s], s++);
    var a, c, f, h = {
        includeMetadataChanges: u.includeMetadataChanges
    };
    if (uc(i[s])) {
        var l = i[s];
        i[s] = null === (e = l.next) || void 0 === e ? void 0 : e.bind(l), i[s + 1] = null === (n = l.error) || void 0 === n ? void 0 : n.bind(l), 
        i[s + 2] = null === (r = l.complete) || void 0 === r ? void 0 : r.bind(l);
    }
    if (t instanceof Gs) c = Ms(t.firestore, qa), f = se(t.S_.path), a = {
        next: function(e) {
            i[s] && i[s](wc(c, t, e));
        },
        error: i[s + 1],
        complete: i[s + 2]
    }; else {
        var p = Ms(t, Bs);
        c = Ms(p.firestore, qa), f = p.C_;
        var d = new vc(c);
        a = {
            next: function(t) {
                i[s] && i[s](new lc(c, d, p, t));
            },
            error: i[s + 1],
            complete: i[s + 2]
        }, Wa(t.C_);
    }
    return function(t, e, n, r) {
        var i = this, o = new Ds(r), u = new Cu(e, o, n);
        return t.fs.ys((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(i, void 0, void 0, (function() {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = xu, [ 4 /*yield*/ , Ca(t) ];

                      case 1:
                        return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), u ]) ];
                    }
                }));
            }));
        })), function() {
            o.r_(), t.fs.ys((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(i, void 0, void 0, (function() {
                    var e;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = ku, [ 4 /*yield*/ , Ca(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), u ]) ];
                        }
                    }));
                }));
            }));
        };
    }(ja(c), f, h, a);
}

/** Locally writes `mutations` on the async queue. */ function gc(t, e) {
    return function(t, e) {
        var n = this, r = new vr;
        return t.fs.ys((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                var n;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                    switch (i.label) {
                      case 0:
                        return n = Wu, [ 4 /*yield*/ , La(t) ];

                      case 1:
                        return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                    }
                }));
            }));
        })), r.promise;
    }(ja(t), e);
}

/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */ function wc(t, e, n) {
    var r = n.docs.get(e.S_), i = new vc(t);
    return new fc(t, i, e.S_, r, new cc(n.hasPendingWrites, n.fromCache), e.v_);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch#commit} is
 * called.
 */ var bc = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.zf = t, this._d = e, this.fd = [], this.dd = !1, this.wd = ra(t);
    }
    return t.prototype.set = function(t, e, n) {
        this.Ed();
        var r = _c(t, this.zf), i = sc(r.v_, e, n), o = ia(this.wd, "WriteBatch.set", r.S_, i, null !== r.v_, n);
        return this.fd.push(o.O_(r.S_, je.jt())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        this.Ed();
        var o, u = _c(t, this.zf);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return e instanceof q && (e = e._), o = "string" == typeof e || e instanceof ks ? la(this.wd, "WriteBatch.update", u.S_, e, n, r) : ha(this.wd, "WriteBatch.update", u.S_, e), 
        this.fd.push(o.O_(u.S_, je.exists(!0))), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        this.Ed();
        var e = _c(t, this.zf);
        return this.fd = this.fd.concat(new nn(e.S_, je.jt())), this;
    }, 
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned Promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A Promise resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */
    t.prototype.commit = function() {
        return this.Ed(), this.dd = !0, this.fd.length > 0 ? this._d(this.fd) : Promise.resolve();
    }, t.prototype.Ed = function() {
        if (this.dd) throw new U(V.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}();

function _c(t, e) {
    if (t instanceof q && (t = t._), t.firestore !== e) throw new U(V.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ var Ic = /** @class */ function(t) {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this).zf = e, r;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.get = function(e) {
        var n = this, r = _c(e, this.zf), i = new vc(this.zf);
        return t.prototype.get.call(this, e).then((function(t) {
            return new fc(n.zf, i, r.S_, t.Jf, new cc(
            /* hasPendingWrites= */ !1, 
            /* fromCache= */ !1), r.v_);
        }));
    }, e;
}(/** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.zf = t, this.Td = e, this.wd = ra(t)
        /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */;
    }
    return t.prototype.get = function(t) {
        var e = this, n = _c(t, this.zf), r = new ac(this.zf);
        return this.Td.ef([ n.S_ ]).then((function(t) {
            if (!t || 1 !== t.length) return S();
            var i = t[0];
            if (i instanceof Ut) return new Ka(e.zf, r, n.S_, null, n.v_);
            if (i instanceof Vt) return new Ka(e.zf, r, i.key, i, n.v_);
            throw S();
        }));
    }, t.prototype.set = function(t, e, n) {
        var r = _c(t, this.zf), i = sc(r.v_, e, n), o = ia(this.wd, "Transaction.set", r.S_, i, null !== r.v_, n);
        return this.Td.set(r.S_, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        var o, u = _c(t, this.zf);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return e instanceof q && (e = e._), o = "string" == typeof e || e instanceof ks ? la(this.wd, "Transaction.update", u.S_, e, n, r) : ha(this.wd, "Transaction.update", u.S_, e), 
        this.Td.update(u.S_, o), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        var e = _c(t, this.zf);
        return this.Td.delete(e.S_), this;
    }, t;
}()), Ec = /** @class */ function() {
    function t() {}
    return t.prototype.enableIndexedDbPersistence = function(t, e) {
        return function(t, e) {
            Ga(t = Ms(t, qa));
            var n = ja(t), r = t.p_(), i = new As;
            return za(n, i, new Ts(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
        }(t._, {
            forceOwnership: e
        });
    }, t.prototype.enableMultiTabIndexedDbPersistence = function(t) {
        return function(t) {
            Ga(t = Ms(t, qa));
            var e = ja(t), n = t.p_(), r = new As;
            return za(e, r, new Ns(r, n.cacheSizeBytes));
        }(t._);
    }, t.prototype.clearIndexedDbPersistence = function(t) {
        return function(t) {
            var e = this;
            if (t.R_ && !t.P_) throw new U(V.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
            var n = new vr;
            return t.Mf.Tf((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var e;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return r.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                    var e;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return gr.jn() ? (e = t + "main", [ 4 /*yield*/ , gr.delete(e) ]) : [ 2 /*return*/ , Promise.resolve() ];

                                          case 1:
                                            return n.sent(), [ 2 /*return*/ ];
                                        }
                                    }));
                                }));
                            }(Zi(t.I_, t.w_)) ];

                          case 1:
                            return r.sent(), n.resolve(), [ 3 /*break*/ , 3 ];

                          case 2:
                            return e = r.sent(), n.reject(e), [ 3 /*break*/ , 3 ];

                          case 3:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            })), n.promise
            /**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned Promise resolves immediately if there are no outstanding writes.
 * Otherwise, the Promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` Promises are rejected during user
 * changes.
 *
 * @returns A Promise which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */;
        }(t._);
    }, t;
}(), Tc = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, n) || this).Id = r, i.INTERNAL = {
            delete: function() {
                return i.terminate();
            }
        }, e instanceof B || (i.md = e), i;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "I_", {
        get: function() {
            return this._.I_;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.settings = function(t) {
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this._.V_()), t)).merge, this._.g_(t);
    }, e.prototype.useEmulator = function(t, e) {
        !function(t, e, n) {
            var r = (t = Ms(t, zs)).V_();
            "firestore.googleapis.com" !== r.host && r.host !== e && N("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
            t.g_(Object.assign(Object.assign({}, r), {
                host: e + ":" + n,
                ssl: !1
            }));
        }(this._, t, e);
    }, e.prototype.enableNetwork = function() {
        return function(t) {
            var e = this;
            return t.fs.enqueue((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var e, n;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4 /*yield*/ , ka(t) ];

                          case 1:
                            return e = r.sent(), [ 4 /*yield*/ , Pa(t) ];

                          case 2:
                            return n = r.sent(), [ 2 /*return*/ , (e.Vo(!0), function(t) {
                                var e = x(t);
                                return e.Oh.delete(0 /* UserDisabled */), nu(e);
                            }(n)) ];
                        }
                    }));
                }));
            }));
        }
        /** Disables the network connection. Pending operations will not complete. */ (ja(Ms(this._, qa)));
    }, e.prototype.disableNetwork = function() {
        return function(t) {
            var e = this;
            return t.fs.enqueue((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var e, n;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4 /*yield*/ , ka(t) ];

                          case 1:
                            return e = r.sent(), [ 4 /*yield*/ , Pa(t) ];

                          case 2:
                            return n = r.sent(), [ 2 /*return*/ , (e.Vo(!1), function(t) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                    var e;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return (e = x(t)).Oh.add(0 /* UserDisabled */), [ 4 /*yield*/ , ru(e) ];

                                          case 1:
                                            return n.sent(), 
                                            // Set the OnlineState to Offline so get()s return from cache, etc.
                                            e.Mh.set("Offline" /* Offline */), [ 2 /*return*/ ];
                                        }
                                    }));
                                }));
                            }(n)) ];
                        }
                    }));
                }));
            }));
        }
        /**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */ (ja(Ms(this._, qa)));
    }, e.prototype.enablePersistence = function(t) {
        var e = !1, n = !1;
        return t && Cs("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), 
        e ? this.Id.enableMultiTabIndexedDbPersistence(this) : this.Id.enableIndexedDbPersistence(this, n);
    }, e.prototype.clearPersistence = function() {
        return this.Id.clearIndexedDbPersistence(this);
    }, e.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.app._removeServiceInstance("firestore-exp"), 
        this._._delete();
    }, e.prototype.waitForPendingWrites = function() {
        return function(t) {
            var e = this, n = new vr;
            return t.fs.ys((function() {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(e, void 0, void 0, (function() {
                    var e;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return e = ts, [ 4 /*yield*/ , La(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ r.sent(), n ]) ];
                        }
                    }));
                }));
            })), n.promise;
        }(ja(Ms(this._, qa)));
    }, e.prototype.onSnapshotsInSync = function(t) {
        return function(t, e) {
            return function(t, e) {
                var n = this, r = new Ds(e);
                return t.fs.ys((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                        var e;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return e = function(t, e) {
                                    x(t).Wh.add(e), 
                                    // Immediately fire an initial event, indicating all existing listeners
                                    // are in-sync.
                                    e.next();
                                }, [ 4 /*yield*/ , Ca(t) ];

                              case 1:
                                return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), r ]) ];
                            }
                        }));
                    }));
                })), function() {
                    r.r_(), t.fs.ys((function() {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                            var e;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = function(t, e) {
                                        x(t).Wh.delete(e);
                                    }, [ 4 /*yield*/ , Ca(t) ];

                                  case 1:
                                    return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), r ]) ];
                                }
                            }));
                        }));
                    }));
                }
                /**
 * Takes an updateFunction in which a set of reads and writes can be performed
 * atomically. In the updateFunction, the client can read and write values
 * using the supplied transaction object. After the updateFunction, all
 * changes will be committed. If a retryable error occurs (ex: some other
 * client has changed any of the data referenced), then the updateFunction
 * will be called again after a backoff. If the updateFunction still fails
 * after all retries, then the transaction will be rejected.
 *
 * The transaction object passed to the updateFunction contains methods for
 * accessing documents and collections. Unlike other datastore access, data
 * accessed with the transaction will not reflect local changes that have not
 * been committed. For this reason, it is required that all reads are
 * performed before any writes. Transactions must be performed while online.
 */;
            }(ja(t = Ms(t, qa)), uc(e) ? e : {
                next: e
            });
        }(this._, t);
    }, Object.defineProperty(e.prototype, "app", {
        get: function() {
            if (!this.md) throw new U(V.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.md;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.collection = function(t) {
        try {
            return new Mc(this, Hs(this._, t));
        } catch (t) {
            throw kc(t, "collection()", "Firestore.collection()");
        }
    }, e.prototype.doc = function(t) {
        try {
            return new xc(this, Js(this._, t));
        } catch (t) {
            throw kc(t, "doc()", "Firestore.doc()");
        }
    }, e.prototype.collectionGroup = function(t) {
        try {
            return new Rc(this, function(t, e) {
                if (t = Ms(t, zs), Ps("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new U(V.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
                return new Bs(t, 
                /* converter= */ null, 
                /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
                function(t) {
                    return new oe(et.at(), t);
                }(e));
            }(this._, t));
        } catch (t) {
            throw kc(t, "collectionGroup()", "Firestore.collectionGroup()");
        }
    }, e.prototype.runTransaction = function(t) {
        var e = this;
        return function(t, e) {
            return function(t, e) {
                var n = this, r = new vr;
                return t.fs.ys((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                        var n;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return [ 4 /*yield*/ , function(t) {
                                    return xa(t).then((function(t) {
                                        return t.Dh;
                                    }));
                                }(t) ];

                              case 1:
                                return n = i.sent(), new Ta(t.fs, n, e, r).run(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), r.promise;
            }(ja(t), (function(n) {
                return e(new Ic(t, n));
            }));
        }(this._, (function(n) {
            return t(new Sc(e, n));
        }));
    }, e.prototype.batch = function() {
        var t = this;
        return ja(this._), new Dc(new bc(this._, (function(e) {
            return gc(t._, e);
        })));
    }, e.prototype.loadBundle = function(t) {
        throw new U(V.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?');
    }, e.prototype.namedQuery = function(t) {
        throw new U(V.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?');
    }, e;
}(q), Nc = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.Uf = function(t) {
        return new z(new M(t));
    }, e.prototype.Qf = function(t) {
        var e = this.Gf(t, this.firestore.I_);
        return xc.Ad(e, this.firestore, /* converter= */ null);
    }, e;
}(Ba);

/**
 * The persistence provider included with the full Firestore SDK.
 */ function Ac(t) {
    var e;
    e = t, _.setLogLevel(e);
}

/**
 * A reference to a transaction.
 */ var Sc = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).zf = e, r.Hf = new Nc(e), r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.get = function(t) {
        var e = this, n = qc(t);
        return this._.get(n).then((function(t) {
            return new Lc(e.zf, new fc(e.zf._, e.Hf, t.S_, t.Jf, t.metadata, n.v_));
        }));
    }, e.prototype.set = function(t, e, n) {
        var r = qc(t);
        return n ? (Ls("Transaction.set", n), this._.set(r, e, n)) : this._.set(r, e), this;
    }, e.prototype.update = function(t, e, n) {
        for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
        var u = qc(t);
        return 2 === arguments.length ? this._.update(u, e) : (r = this._).update.apply(r, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ u, e, n ], i)), 
        this;
    }, e.prototype.delete = function(t) {
        var e = qc(t);
        return this._.delete(e), this;
    }, e;
}(q), Dc = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.set = function(t, e, n) {
        var r = qc(t);
        return n ? (Ls("WriteBatch.set", n), this._.set(r, e, n)) : this._.set(r, e), this;
    }, e.prototype.update = function(t, e, n) {
        for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
        var u = qc(t);
        return 2 === arguments.length ? this._.update(u, e) : (r = this._).update.apply(r, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ u, e, n ], i)), 
        this;
    }, e.prototype.delete = function(t) {
        var e = qc(t);
        return this._.delete(e), this;
    }, e.prototype.commit = function() {
        return this._.commit();
    }, e;
}(q), xc = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).firestore = e, r.Hf = new Nc(e), r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.Rd = function(t, n, r) {
        if (t.length % 2 != 0) throw new U(V.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.ot() + " has " + t.length);
        return new e(n, new Gs(n._, r, new it(t)));
    }, e.Ad = function(t, n, r) {
        return new e(n, new Gs(n._, r, t));
    }, Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this._.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            return new Mc(this.firestore, this._.parent);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
        get: function() {
            return this._.path;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.collection = function(t) {
        try {
            return new Mc(this.firestore, Hs(this._, t));
        } catch (t) {
            throw kc(t, "collection()", "DocumentReference.collection()");
        }
    }, e.prototype.isEqual = function(t) {
        return t instanceof q && (t = t._), t instanceof Gs && Ws(this._, t);
    }, e.prototype.set = function(t, e) {
        e = Ls("DocumentReference.set", e);
        try {
            return function(t, e, n) {
                t = Ms(t, Gs);
                var r = Ms(t.firestore, qa), i = sc(t.v_, e, n);
                return gc(r, [ ia(ra(r), "setDoc", t.S_, i, null !== t.v_, n).O_(t.S_, je.jt()) ]);
            }(this._, t, e);
        } catch (t) {
            throw kc(t, "setDoc()", "DocumentReference.set()");
        }
    }, e.prototype.update = function(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        try {
            return 1 === arguments.length ? yc(this._, t) : yc.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ this._, t, e ], n));
        } catch (t) {
            throw kc(t, "updateDoc()", "DocumentReference.update()");
        }
    }, e.prototype.delete = function() {
        return gc(Ms((t = this._).firestore, qa), [ new nn(t.S_, je.jt()) ]);
        var t;
        /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A Promise resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */    }, e.prototype.onSnapshot = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = Oc(e), i = Pc(e, (function(e) {
            return new Lc(t.firestore, new fc(t.firestore._, t.Hf, e.S_, e.Jf, e.metadata, t._.v_));
        }));
        return mc(this._, r, i);
    }, e.prototype.get = function(t) {
        var e = this;
        return ("cache" === (null == t ? void 0 : t.source) ? function(t) {
            t = Ms(t, Gs);
            var e = Ms(t.firestore, qa), n = ja(e), r = new vc(e);
            return function(t, e) {
                var n = this, r = new vr;
                return t.fs.ys((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                        var n;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return n = function(t, e, n) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                        var r, i;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(o) {
                                            switch (o.label) {
                                              case 0:
                                                return o.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t, e) {
                                                    var n = x(t);
                                                    return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                        return n.Ic.Jo(t, e);
                                                    }));
                                                }(t, e) ];

                                              case 1:
                                                return (i = o.sent()) instanceof Vt ? n.resolve(i) : i instanceof Ut ? n.resolve(null) : n.reject(new U(V.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                                [ 3 /*break*/ , 3 ];

                                              case 2:
                                                return r = o.sent(), i = Sr(r, "Failed to get document '" + e + " from cache"), 
                                                n.reject(i), [ 3 /*break*/ , 3 ];

                                              case 3:
                                                return [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }, [ 4 /*yield*/ , Oa(t) ];

                              case 1:
                                return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                            }
                        }));
                    }));
                })), r.promise;
            }(n, t.S_).then((function(n) {
                return new fc(e, r, t.S_, n, new cc(n instanceof Vt && n.bt, 
                /* fromCache= */ !0), t.v_);
            }));
        }(this._) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = Ms(t, Gs);
            var e = Ms(t.firestore, qa);
            return Ra(ja(e), t.S_, {
                source: "server"
            }).then((function(n) {
                return wc(e, t, n);
            }));
        }(this._) : function(t) {
            t = Ms(t, Gs);
            var e = Ms(t.firestore, qa);
            return Ra(ja(e), t.S_).then((function(n) {
                return wc(e, t, n);
            }));
        }(this._)).then((function(t) {
            return new Lc(e.firestore, new fc(e.firestore._, e.Hf, t.S_, t.Jf, t.metadata, e._.v_));
        }));
    }, e.prototype.withConverter = function(t) {
        return new e(this.firestore, this._.withConverter(t));
    }, e;
}(q);

/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */
function kc(t, e, n) {
    return t.message = t.message.replace(e, n), t
    /**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */;
}

function Oc(t) {
    for (var e = 0, n = t; e < n.length; e++) {
        var r = n[e];
        if ("object" == typeof r && !uc(r)) return r;
    }
    return {};
}

/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */ function Pc(t, e) {
    var n, r, i;
    return {
        next: function(t) {
            i.next && i.next(e(t));
        },
        error: null === (n = (i = uc(t[0]) ? t[0] : uc(t[1]) ? t[1] : "function" == typeof t[0] ? {
            next: t[0],
            error: t[1],
            complete: t[2]
        } : {
            next: t[1],
            error: t[2],
            complete: t[3]
        }).error) || void 0 === n ? void 0 : n.bind(i),
        complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i)
    };
}

var Lc = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).zf = e, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "ref", {
        get: function() {
            return new xc(this.zf, this._.ref);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this._.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "metadata", {
        get: function() {
            return this._.metadata;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "exists", {
        get: function() {
            return this._.exists();
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.data = function(t) {
        return this._.data(t);
    }, e.prototype.get = function(t, e) {
        return this._.get(t, e);
    }, e.prototype.isEqual = function(t) {
        return dc(this._, t._);
    }, e;
}(q), Cc = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.data = function(t) {
        return this._.data(t);
    }, e;
}(Lc), Rc = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).firestore = e, r.Hf = new Nc(e), r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.prototype.where = function(t, n, r) {
        try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new e(this.firestore, Ya(this._, function(t, e, n) {
                var r = e, i = Ja("where", t);
                return new Xa(i, r, n);
            }(t, n, r)));
        } catch (t) {
            throw kc(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }, e.prototype.orderBy = function(t, n) {
        try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new e(this.firestore, Ya(this._, function(t, e) {
                void 0 === e && (e = "asc");
                var n = e, r = Ja("orderBy", t);
                return new $a(r, n);
            }(t, n)));
        } catch (t) {
            throw kc(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }, e.prototype.limit = function(t) {
        try {
            return new e(this.firestore, Ya(this._, function(t) {
                return qs("limit", t), new Za("limit", t, "F" /* First */);
            }(t)));
        } catch (t) {
            throw kc(t, "limit()", "Query.limit()");
        }
    }, e.prototype.limitToLast = function(t) {
        try {
            return new e(this.firestore, Ya(this._, function(t) {
                return qs("limitToLast", t), new Za("limitToLast", t, "L" /* Last */);
            }(t)));
        } catch (t) {
            throw kc(t, "limitToLast()", "Query.limitToLast()");
        }
    }, e.prototype.startAt = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return new e(this.firestore, Ya(this._, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new tc("startAt", t, /*before=*/ !0);
            }.apply(void 0, t)));
        } catch (t) {
            throw kc(t, "startAt()", "Query.startAt()");
        }
    }, e.prototype.startAfter = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return new e(this.firestore, Ya(this._, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new tc("startAfter", t, 
                /*before=*/ !1);
            }.apply(void 0, t)));
        } catch (t) {
            throw kc(t, "startAfter()", "Query.startAfter()");
        }
    }, e.prototype.endBefore = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return new e(this.firestore, Ya(this._, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new ec("endBefore", t, /*before=*/ !0);
            }.apply(void 0, t)));
        } catch (t) {
            throw kc(t, "endBefore()", "Query.endBefore()");
        }
    }, e.prototype.endAt = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return new e(this.firestore, Ya(this._, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new ec("endAt", t, /*before=*/ !1);
            }.apply(void 0, t)));
        } catch (t) {
            throw kc(t, "endAt()", "Query.endAt()");
        }
    }, e.prototype.isEqual = function(t) {
        return Qs(this._, t._);
    }, e.prototype.get = function(t) {
        var e = this;
        return ("cache" === (null == t ? void 0 : t.source) ? 
        /**
     * Executes the query and returns the results as a `QuerySnapshot` from cache.
     * Returns an error if the document is not currently cached.
     *
     * @returns A Promise that will be resolved with the results of the query.
     */
        function(t) {
            t = Ms(t, Bs);
            var e = Ms(t.firestore, qa), n = ja(e), r = new vc(e);
            return function(t, e) {
                var n = this, r = new vr;
                return t.fs.ys((function() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                        var n;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return n = function(t, e, n) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, (function() {
                                        var r, i, o, u, s;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(a) {
                                            switch (a.label) {
                                              case 0:
                                                return a.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , vo(t, e, 
                                                /* usePreviousResults= */ !0) ];

                                              case 1:
                                                return s = a.sent(), r = new Fu(e, s.Pc), i = r.dl(s.documents), o = r.Ei(i, 
                                                /* updateLimboDocuments= */ !1), n.resolve(o.snapshot), [ 3 /*break*/ , 3 ];

                                              case 2:
                                                return u = a.sent(), s = Sr(u, "Failed to execute query '" + e + " against cache"), 
                                                n.reject(s), [ 3 /*break*/ , 3 ];

                                              case 3:
                                                return [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }, [ 4 /*yield*/ , Oa(t) ];

                              case 1:
                                return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                            }
                        }));
                    }));
                })), r.promise;
            }(n, t.C_).then((function(n) {
                return new lc(e, r, t, n);
            }));
        }(this._) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = Ms(t, Bs);
            var e = Ms(t.firestore, qa), n = ja(e), r = new vc(e);
            return Va(n, t.C_, {
                source: "server"
            }).then((function(n) {
                return new lc(e, r, t, n);
            }));
        }(this._) : function(t) {
            t = Ms(t, Bs);
            var e = Ms(t.firestore, qa), n = ja(e), r = new vc(e);
            return Wa(t.C_), Va(n, t.C_).then((function(n) {
                return new lc(e, r, t, n);
            }));
        }(this._)).then((function(t) {
            return new Uc(e.firestore, new lc(e.firestore._, e.Hf, e._, t.ud));
        }));
    }, e.prototype.onSnapshot = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = Oc(e), i = Pc(e, (function(e) {
            return new Uc(t.firestore, new lc(t.firestore._, t.Hf, t._, e.ud));
        }));
        return mc(this._, r, i);
    }, e.prototype.withConverter = function(t) {
        return new e(this.firestore, this._.withConverter(t));
    }, e;
}(q), Vc = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).zf = e, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "type", {
        get: function() {
            return this._.type;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "doc", {
        get: function() {
            return new Cc(this.zf, this._.doc);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "oldIndex", {
        get: function() {
            return this._.oldIndex;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "newIndex", {
        get: function() {
            return this._.newIndex;
        },
        enumerable: !1,
        configurable: !0
    }), e;
}(q), Uc = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).zf = e, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "query", {
        get: function() {
            return new Rc(this.zf, this._.query);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "metadata", {
        get: function() {
            return this._.metadata;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "size", {
        get: function() {
            return this._.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "empty", {
        get: function() {
            return this._.empty;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "docs", {
        get: function() {
            var t = this;
            return this._.docs.map((function(e) {
                return new Cc(t.zf, e);
            }));
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.docChanges = function(t) {
        var e = this;
        return this._.docChanges(t).map((function(t) {
            return new Vc(e.zf, t);
        }));
    }, e.prototype.forEach = function(t, e) {
        var n = this;
        this._.forEach((function(r) {
            t.call(e, new Cc(n.zf, r));
        }));
    }, e.prototype.isEqual = function(t) {
        return dc(this._, t._);
    }, e;
}(q), Mc = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this).firestore = e, r._ = n, r;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this._.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
        get: function() {
            return this._.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            var t = this._.parent;
            return t ? new xc(this.firestore, t) : null;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.doc = function(t) {
        try {
            return new xc(this.firestore, void 0 === t ? Js(this._) : Js(this._, t));
        } catch (t) {
            throw kc(t, "doc()", "CollectionReference.doc()");
        }
    }, e.prototype.add = function(t) {
        var e = this;
        return function(t, e) {
            var n = Ms(t.firestore, qa), r = Js(t), i = sc(t.v_, e);
            return gc(n, [ ia(ra(t.firestore), "addDoc", r.S_, i, null !== t.v_, {}).O_(r.S_, je.exists(!1)) ]).then((function() {
                return r;
            }));
        }(this._, t).then((function(t) {
            return new xc(e.firestore, t);
        }));
    }, e.prototype.isEqual = function(t) {
        return Ws(this._, t._);
    }, e.prototype.withConverter = function(t) {
        return new e(this.firestore, this._.withConverter(t));
    }, e;
}(Rc);

function qc(t) {
    return t instanceof q && (t = t._), Ms(t, Gs);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */ var jc = /** @class */ function(t) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function e() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return t.call(this, new (ks.bind.apply(ks, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__spreadArrays"])([ void 0 ], e)))) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new e(rt.lt().ot());
    }, e.prototype.isEqual = function(t) {
        return t instanceof q && (t = t._), t instanceof ks && this._.d_.isEqual(t.d_);
    }, e;
}(q), Fc = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(e, t), e.serverTimestamp = function() {
        var t = new sa("serverTimestamp");
        return t._methodName = "FieldValue.serverTimestamp", new e(t);
    }, e.delete = function() {
        var t = new oa("deleteField");
        return t._methodName = "FieldValue.delete", new e(t);
    }, e.arrayUnion = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = 
        /**
 * Returns a special value that can be used with {@link setDoc} or {@link
 * updateDoc} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */
        function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
                        return new aa("arrayUnion", t);
        }.apply(void 0, t);
        return r._methodName = "FieldValue.arrayUnion", new e(r);
    }, e.arrayRemove = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
                        return new ca("arrayRemove", t);
        }.apply(void 0, t);
        return r._methodName = "FieldValue.arrayRemove", new e(r);
    }, e.increment = function(t) {
        var n = function(t) {
            return new fa("increment", t);
        }(t);
        return n._methodName = "FieldValue.increment", new e(n);
    }, e.prototype.isEqual = function(t) {
        return this._.isEqual(t._);
    }, e;
}(q), zc = /** @class */ function() {
    function t() {
        this.Pd = {}, this.yd = new vr, this.gd = {
            taskState: "Running",
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0
        };
    }
    return t.prototype.onProgress = function(t, e, n) {
        this.Pd = {
            next: t,
            error: e,
            complete: n
        };
    }, t.prototype.catch = function(t) {
        return this.yd.promise.catch(t);
    }, t.prototype.then = function(t, e) {
        return this.yd.promise.then(t, e);
    }, 
    /**
     * Notifies all observers that bundle loading has completed, with a provided
     * `LoadBundleTaskProgress` object.
     */
    t.prototype.Ul = function(t) {
        this.Ql(t), this.Pd.complete && this.Pd.complete(), this.yd.resolve(t);
    }, 
    /**
     * Notifies all observers that bundle loading has failed, with a provided
     * `Error` as the reason.
     */
    t.prototype.jl = function(t) {
        this.gd.taskState = "Error", this.Pd.next && this.Pd.next(this.gd), this.Pd.error && this.Pd.error(t), 
        this.yd.reject(t);
    }, 
    /**
     * Notifies a progress update of loading a bundle.
     * @param progress - The new progress.
     */
    t.prototype.Ql = function(t) {
        this.gd = t, this.Pd.next && this.Pd.next(t);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a sentinel for use with {@link updateDoc} or
 * {@link setDoc} with `{merge: true}` to mark a field for deletion.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gc(t, e) {
    var n = new zc;
    return function(t, e, n, r) {
        var i = this, o = function(t, e) {
            return function(t, e) {
                return new xs(t, e);
            }(function(t, e) {
                if (t instanceof Uint8Array) return Ss(t, e);
                if (t instanceof ArrayBuffer) return Ss(new Uint8Array(t), e);
                if (t instanceof ReadableStream) return t.getReader();
                throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
            }("string" == typeof t ? (new TextEncoder).encode(t) : t), e);
        }(n, Wo(e));
        t.fs.ys((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(i, void 0, void 0, (function() {
                var e;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = Is, [ 4 /*yield*/ , La(t) ];

                      case 1:
                        return e.apply(void 0, [ n.sent(), o, r ]), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }(ja(t._), t.I_, e, n), n;
}

function Bc(t, e) {
    return function(t, e) {
        var n = this;
        return t.fs.enqueue((function() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(n, void 0, void 0, (function() {
                var n;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return n = function(t, e) {
                            var n = x(t);
                            return n.persistence.runTransaction("Get named query", "readonly", (function(t) {
                                return n.Eo.$s(t, e);
                            }));
                        }, [ 4 /*yield*/ , Oa(t) ];

                      case 1:
                        return [ 2 /*return*/ , n.apply(void 0, [ r.sent(), e ]) ];
                    }
                }));
            }));
        }));
    }(ja(t._), e).then((function(e) {
        return e ? new Rc(t, new Bs(t._, null, e.query)) : null;
    }));
}


//# sourceMappingURL=prebuilt-30db9a88-9b75cc8d.js.map


/***/ }),

/***/ "QQAA":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-container.component.html */ "m1kx");
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-container.component.scss */ "huSS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "YWyl":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _providers_chatData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/chatData */ "+cpU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");







let FirestoreService = class FirestoreService {
    constructor(fireStore, authFire, chatData, router) {
        this.fireStore = fireStore;
        this.authFire = authFire;
        this.chatData = chatData;
        this.router = router;
    }
    getIdToken() {
        return this.authFire.credential;
    }
    getUID() {
        return 'jebTQjN3KNYOMZYRnWd9QzjCwOA2';
    }
    listAllCounters() {
        return this.fireStore.collection('counters').get();
    }
    getAsyncUserFields() {
        return this.fireStore.collection('users').doc(this.getUID()).valueChanges();
    }
    getChatMessages(chatName) {
        return this.fireStore.collection('chats').doc(chatName).valueChanges();
    }
    getChatById(chatId) {
        return this.fireStore.collection('chats').doc(chatId).valueChanges();
    }
    addUserToChat(chatId, answers) {
        let chatDocRef = this.fireStore.collection('chats').doc(chatId);
        chatDocRef.update({ users: firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.arrayUnion(this.getUID()) });
        this.chatSubscription.unsubscribe();
        //TODO
        if (answers) {
            const sendData1 = { data: 'Qual o seu objetivo para daqui 5 anos? ' + answers.target, type: 'text' };
            const sendData2 = { data: 'Qual o seu hobby? ' + answers.hobby, type: 'text' };
            const sendData3 = { data: 'Qual o seu maior sonho ultimamente? ' + answers.dream, type: 'text' };
            this.sendMessage(this.chatData.user, chatId, sendData1);
            this.sendMessage(this.chatData.user, chatId, sendData2);
            this.sendMessage(this.chatData.user, chatId, sendData3);
        }
        this.router.navigate(['private-chat']);
    }
    enterOnGroupChat(chatId, company, answers) {
        this.getUserInfo().subscribe(res => {
            this.user = {
                data: res.data(),
                id: res.id,
            };
            // this.chatSubscription = this.getChatById(chatId);
            this.chatData.chat = this.getChatById(chatId);
            this.chatSubscription = this.getChatById(chatId).subscribe(chat => {
                if (chat) {
                    this.chatData.chatId = chatId;
                    this.chatData.user = this.user;
                    if (this.user.data.chats.filter(it => it == chatId).length == 0) {
                        let userChatRef = this.fireStore.collection("users").doc(this.user.id);
                        userChatRef.update({ chats: firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.arrayUnion(chatId) });
                    }
                    this.addUserToChat(chatId);
                }
                else {
                    this.chatData.chatId = chatId;
                    this.chatData.user = this.user;
                    const data = { data: 'enter-room', type: 'enter-room' };
                    // create new chat document
                    let docRef = this.fireStore.collection("chats").doc(chatId);
                    docRef.set({
                        counter: company.id,
                        counterName: company.company,
                        date: new Date(),
                        messages: [],
                        users: [],
                    }).then(it => {
                        let doc = this.fireStore.collection("users").doc(this.user.id);
                        doc.update({ chats: firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.arrayUnion(chatId) }).then(el => {
                            // send join message
                            // this.sendMessage({ id: this.user.id, name: this.user.name, }, chatId, data);
                            this.addUserToChat(chatId, answers);
                        });
                    });
                }
            });
        });
    }
    exitGroup(chatId) {
        const myId = this.getUID();
        this.fireStore.collection('chats').doc(chatId).update({ users: firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.arrayRemove(myId) });
        this.fireStore.collection("users").doc(myId).update({ chats: firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.arrayRemove(chatId) });
    }
    getUserInfo(userId) {
        return this.fireStore.collection('users').doc(userId ? userId : this.getUID()).get();
    }
    updateUser(userData) {
        this.fireStore.collection('users').doc(this.getUID()).update(Object.assign({}, userData)).then(it => it);
    }
    sendMessage(user, chatId, data, payload) {
        data.user = user.id;
        data.userName = user.data.name ? user.data.name : "";
        data.timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.Timestamp.now();
        let docRef = this.fireStore.collection("chats").doc(chatId);
        docRef.update({ messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].firestore.FieldValue.arrayUnion(data) });
    }
};
FirestoreService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _providers_chatData__WEBPACK_IMPORTED_MODULE_4__["ChatData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FirestoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirestoreService);



/***/ }),

/***/ "huSS":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "m1kx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "qtYk":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "QQAA");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "x7I3":
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, ErrorCode, Event, EventType, Stat, WebChannel, XhrIo, createWebChannelTransport, getStatEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stat", function() { return Stat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebChannel", function() { return WebChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrIo", function() { return XhrIo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function() { return createWebChannelTransport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatEventTarget", function() { return getStatEventTarget; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var h, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) { var b = typeof a; b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; return "array" == b || "object" == b && "number" == typeof a.length; }
function n(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function ca(a) { return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea); }
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b, c) { return a.call.apply(a.bind, arguments); }
function ha(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function p(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = fa : p = ha; return p.apply(null, arguments); }
function ja(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
function q() { return Date.now(); }
function r(a, b) { function c() { } c.prototype = b.prototype; a.X = b.prototype; a.prototype = new c; a.prototype.constructor = a; a.Kb = function (d, e, f) { for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++)
    g[m - 2] = arguments[m]; return b.prototype[e].apply(d, g); }; }
function t() { this.j = this.j; this.i = this.i; }
var ka = 0;
t.prototype.j = !1;
t.prototype.ja = function () { if (!this.j && (this.j = !0, this.G(), 0 != ka)) {
    var a = ca(this);
} };
t.prototype.G = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var ma = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, na = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function oa(a) { a: {
    var b = pa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function qa(a) { return Array.prototype.concat.apply([], arguments); }
function ra(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function sa(a) { return /^[\s\xa0]*$/.test(a); }
var ta = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function v(a, b) { return -1 != a.indexOf(b); }
function ua(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var w;
a: {
    var va = k.navigator;
    if (va) {
        var wa = va.userAgent;
        if (wa) {
            w = wa;
            break a;
        }
    }
    w = "";
}
function za(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Aa(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ca(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Ba.length; f++)
        c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Da(a) { Da[" "](a); return a; }
Da[" "] = aa;
function Ea(a, b) { var c = Fa; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ga = v(w, "Opera"), x = v(w, "Trident") || v(w, "MSIE"), Ha = v(w, "Edge"), Ia = Ha || x, Ja = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), Ka = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function La() { var a = k.document; return a ? a.documentMode : void 0; }
var Ma;
a: {
    var Na = "", Oa = function () { var a = w; if (Ja)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ha)
        return /Edge\/([\d\.]+)/.exec(a); if (x)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Ka)
        return /WebKit\/(\S+)/.exec(a); if (Ga)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Oa && (Na = Oa ? Oa[1] : "");
    if (x) {
        var Pa = La();
        if (null != Pa && Pa > parseFloat(Na)) {
            Ma = String(Pa);
            break a;
        }
    }
    Ma = Na;
}
var Fa = {};
function Qa(a) { return Ea(a, function () { {
    var b = 0;
    var e = ta(String(Ma)).split("."), f = ta(String(a)).split("."), g = Math.max(e.length, f.length);
    for (var m = 0; 0 == b && m < g; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = ua(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ua(0 == c[2].length, 0 == d[2].length) || ua(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Ra;
if (k.document && x) {
    var Sa = La();
    Ra = Sa ? Sa : parseInt(Ma, 10) || void 0;
}
else
    Ra = void 0;
var Ta = Ra;
var Ua = !x || 9 <= Number(Ta), Va = x && !Qa("9"), Wa = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function y(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
y.prototype.b = function () { this.defaultPrevented = !0; };
function z(a, b) {
    y.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Ja) {
                a: {
                    try {
                        Da(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Xa[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(z, y);
var Xa = { 2: "touch", 3: "pen", 4: "mouse" };
z.prototype.b = function () { z.X.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Va)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var A = "closure_listenable_" + (1E6 * Math.random() | 0), Ya = 0;
function Za(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.ca = e; this.key = ++Ya; this.Y = this.Z = !1; }
function $a(a) { a.Y = !0; a.listener = null; a.proxy = null; a.src = null; a.ca = null; }
function ab(a) { this.src = a; this.a = {}; this.b = 0; }
ab.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var g = bb(a, b, d, e); -1 < g ? (b = a[g], c || (b.Z = !1)) : (b = new Za(b, this.src, f, !!d, e), b.Z = c, a.push(b)); return b; };
function cb(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = ma(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && ($a(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function bb(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d)
        return e;
} return -1; }
var db = "closure_lm_" + (1E6 * Math.random() | 0), eb = {};
function gb(a, b, c, d, e) { if (d && d.once)
    return hb(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        gb(a, b[f], c, d, e);
    return null;
} c = ib(c); return a && a[A] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !1, d, e); }
function jb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var g = n(e) ? !!e.capture : !!e;
    if (g && !Ua)
        return null;
    var m = kb(a);
    m || (a[db] = m = new ab(a));
    c = m.add(b, c, d, g, f);
    if (c.proxy)
        return c;
    d = lb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Wa || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(mb(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function lb() { var a = nb, b = Ua ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function hb(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        hb(a, b[f], c, d, e);
    return null;
} c = ib(c); return a && a[A] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !0, d, e); }
function ob(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        ob(a, b[f], c, d, e);
else
    (d = n(d) ? !!d.capture : !!d, c = ib(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = bb(f, c, d, e), -1 < c && ($a(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = kb(a)) && (b = a.a[b.toString()], a = -1, b && (a = bb(b, c, d, e)), (c = -1 < a ? b[a] : null) && pb(c)); }
function pb(a) { if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[A])
        cb(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(mb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = kb(b)) ? (cb(c, a), 0 == c.b && (c.src = null, b[db] = null)) : $a(a);
    }
} }
function mb(a) { return a in eb ? eb[a] : eb[a] = "on" + a; }
function qb(a, b) { var c = a.listener, d = a.ca || a.src; a.Z && pb(a); return c.call(d, b); }
function nb(a, b) { if (a.Y)
    return !0; if (!Ua) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new z(b, this);
    return qb(a, b);
} return qb(a, new z(b, this)); }
function kb(a) { a = a[db]; return a instanceof ab ? a : null; }
var sb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function ib(a) { if ("function" === typeof a)
    return a; a[sb] || (a[sb] = function (b) { return a.handleEvent(b); }); return a[sb]; }
function D() { t.call(this); this.c = new ab(this); this.J = this; this.C = null; }
r(D, t);
D.prototype[A] = !0;
h = D.prototype;
h.addEventListener = function (a, b, c, d) { gb(this, a, b, c, d); };
h.removeEventListener = function (a, b, c, d) { ob(this, a, b, c, d); };
function E(a, b) { var c, d = a.C; if (d)
    for (c = []; d; d = d.C)
        c.push(d); a = a.J; d = b.type || b; if ("string" === typeof b)
    b = new y(b, a);
else if (b instanceof y)
    b.target = b.target || a;
else {
    var e = b;
    b = new y(d, a);
    Ca(b, e);
} e = !0; if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
        var g = b.a = c[f];
        e = tb(g, d, !0, b) && e;
    } g = b.a = a; e = tb(g, d, !0, b) && e; e = tb(g, d, !1, b) && e; if (c)
    for (f = 0; f < c.length; f++)
        g = b.a = c[f], e = tb(g, d, !1, b) && e; }
h.G = function () { D.X.G.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            $a(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.C = null; };
h.va = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
h.wa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function tb(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.Y && g.capture == c) {
        var m = g.listener, l = g.ca || g.src;
        g.Z && cb(a.c, g);
        e = !1 !== m.call(l, d) && e;
    }
} return e && !d.defaultPrevented; }
var ub = k.JSON.stringify;
function vb() { this.b = this.a = null; }
var xb = new /** @class */ (function () {
    function class_1(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new wb; }, function (a) { a.reset(); });
vb.prototype.add = function (a, b) { var c = xb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function yb() { var a = zb, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function wb() { this.next = this.b = this.a = null; }
wb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
wb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Ab(a) { k.setTimeout(function () { throw a; }, 0); }
function Bb(a, b) { Cb || Db(); Eb || (Cb(), Eb = !0); zb.add(a, b); }
var Cb;
function Db() { var a = k.Promise.resolve(void 0); Cb = function () { a.then(Fb); }; }
var Eb = !1, zb = new vb;
function Fb() { for (var a; a = yb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Ab(c);
    }
    var b = xb;
    b.f(a);
    100 > b.b && (b.b++, a.next = b.a, b.a = a);
} Eb = !1; }
function Gb(a, b) { D.call(this); this.b = a || 1; this.a = b || k; this.f = p(this.Za, this); this.g = q(); }
r(Gb, D);
h = Gb.prototype;
h.aa = !1;
h.M = null;
h.Za = function () { if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), E(this, "tick"), this.aa && (Hb(this), this.start()));
} };
h.start = function () { this.aa = !0; this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Hb(a) { a.aa = !1; a.M && (a.a.clearTimeout(a.M), a.M = null); }
h.G = function () { Gb.X.G.call(this); Hb(this); delete this.a; };
function Ib(a, b, c) { if ("function" === typeof a)
    c && (a = p(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Jb(a) { a.a = Ib(function () { a.a = null; a.c && (a.c = !1, Jb(a)); }, a.h); var b = a.b; a.b = null; a.g.apply(null, b); }
var Kb = /** @class */ (function (_super) {
    __extends(Kb, _super);
    function Kb(a, b) {
        var _this = _super.call(this) || this;
        _this.g = a;
        _this.h = b;
        _this.b = null;
        _this.c = !1;
        _this.a = null;
        return _this;
    }
    Kb.prototype.f = function (a) { this.b = arguments; this.a ? this.c = !0 : Jb(this); };
    Kb.prototype.G = function () { _super.prototype.G.call(this); this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null); };
    return Kb;
}(t));
function F(a) { t.call(this); this.b = a; this.a = {}; }
r(F, t);
var Lb = [];
function Mb(a, b, c, d) { Array.isArray(c) || (c && (Lb[0] = c.toString()), c = Lb); for (var e = 0; e < c.length; e++) {
    var f = gb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Nb(a) { za(a.a, function (b, c) { this.a.hasOwnProperty(c) && pb(b); }, a); a.a = {}; }
F.prototype.G = function () { F.X.G.call(this); Nb(this); };
F.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Ob() { this.a = !0; }
function Pb(a, b, c, d, e, f) { a.info(function () { if (a.a)
    if (f) {
        var g = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
            var u = m[l].split("=");
            if (1 < u.length) {
                var C = u[0];
                u = u[1];
                var B = C.split("_");
                g = 2 <= B.length && "type" == B[1] ? g + (C + "=" + u + "&") : g + (C + "=redacted&");
            }
        }
    }
    else
        g = null;
else
    g = f; return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g; }); }
function Qb(a, b, c, d, e, f, g) { a.info(function () { return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g; }); }
function G(a, b, c, d) { a.info(function () { return "XMLHTTP TEXT (" + b + "): " + Rb(a, c) + (d ? " " + d : ""); }); }
function Sb(a, b) { a.info(function () { return "TIMEOUT: " + b; }); }
Ob.prototype.info = function () { };
function Rb(a, b) { if (!a.a)
    return b; if (!b)
    return null; try {
    var c = JSON.parse(b);
    if (c)
        for (a = 0; a < c.length; a++)
            if (Array.isArray(c[a])) {
                var d = c[a];
                if (!(2 > d.length)) {
                    var e = d[1];
                    if (Array.isArray(e) && !(1 > e.length)) {
                        var f = e[0];
                        if ("noop" != f && "stop" != f && "close" != f)
                            for (var g = 1; g < e.length; g++)
                                e[g] = "";
                    }
                }
            }
    return ub(c);
}
catch (m) {
    return b;
} }
var H = {}, Tb = null;
function Ub() { return Tb = Tb || new D; }
H.Fa = "serverreachability";
function Vb(a) { y.call(this, H.Fa, a); }
r(Vb, y);
function I(a) { var b = Ub(); E(b, new Vb(b, a)); }
H.STAT_EVENT = "statevent";
function Wb(a, b) { y.call(this, H.STAT_EVENT, a); this.stat = b; }
r(Wb, y);
function J(a) { var b = Ub(); E(b, new Wb(b, a)); }
H.Ga = "timingevent";
function Xb(a) { y.call(this, H.Ga, a); }
r(Xb, y);
function K(a, b) { if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Yb = { NO_ERROR: 0, $a: 1, nb: 2, mb: 3, hb: 4, lb: 5, ob: 6, Da: 7, TIMEOUT: 8, rb: 9 };
var Zb = { fb: "complete", Bb: "success", Ea: "error", Da: "abort", tb: "ready", ub: "readystatechange", TIMEOUT: "timeout", pb: "incrementaldata", sb: "progress", ib: "downloadprogress", Jb: "uploadprogress" };
function $b() { }
$b.prototype.a = null;
function ac(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function bc() { }
var L = { OPEN: "a", eb: "b", Ea: "c", qb: "d" };
function cc() { y.call(this, "d"); }
r(cc, y);
function dc() { y.call(this, "c"); }
r(dc, y);
var ec;
function fc() { }
r(fc, $b);
ec = new fc;
function M(a, b, c, d) { this.g = a; this.c = b; this.f = c; this.S = d || 1; this.J = new F(this); this.P = gc; a = Ia ? 125 : void 0; this.R = new Gb(a); this.B = null; this.b = !1; this.j = this.l = this.i = this.H = this.u = this.T = this.o = null; this.s = []; this.a = null; this.D = 0; this.h = this.m = null; this.N = -1; this.A = !1; this.O = 0; this.F = null; this.V = this.C = this.U = this.I = !1; }
var gc = 45E3, hc = {}, ic = {};
h = M.prototype;
h.setTimeout = function (a) { this.P = a; };
function jc(a, b, c) { a.H = 1; a.i = kc(N(b)); a.j = c; a.I = !0; lc(a, null); }
function lc(a, b) { a.u = q(); mc(a); a.l = N(a.i); var c = a.l, d = a.S; Array.isArray(d) || (d = [String(d)]); nc(c.b, "t", d); a.D = 0; a.a = oc(a.g, a.g.C ? b : null); 0 < a.O && (a.F = new Kb(p(a.Ca, a, a.a), a.O)); Mb(a.J, a.a, "readystatechange", a.Xa); b = a.B ? Aa(a.B) : {}; a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b)); I(1); Pb(a.c, a.m, a.l, a.f, a.S, a.j); }
h.Xa = function (a) { a = a.target; var b = this.F; b && 3 == O(a) ? b.f() : this.Ca(a); };
h.Ca = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = O(this.a), c = this.a.ua(), d = this.a.W();
                if (!(3 > b || 3 == b && !Ia && !this.a.$())) {
                    this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? I(3) : I(2));
                    pc(this);
                    var e = this.a.W();
                    this.N = e;
                    var f = this.a.$();
                    this.b = 200 == e;
                    Qb(this.c, this.m, this.l, this.f, this.S, b, e);
                    if (this.b) {
                        if (this.U && !this.C) {
                            b: {
                                if (this.a) {
                                    var g, m = this.a;
                                    if ((g = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(g)) {
                                        var l = g;
                                        break b;
                                    }
                                }
                                l = null;
                            }
                            if (l)
                                G(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.C = !0, qc(this, l);
                            else {
                                this.b = !1;
                                this.h = 3;
                                J(12);
                                P(this);
                                rc(this);
                                break a;
                            }
                        }
                        this.I ? (sc(this, b, f), Ia && this.b && 3 == b && (Mb(this.J, this.R, "tick", this.Wa), this.R.start())) : (G(this.c, this.f, f, null), qc(this, f));
                        4 == b && P(this);
                        this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, mc(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, J(12)) : (this.h = 0, J(13)), P(this), rc(this);
                }
            }
    }
    catch (u) { }
    finally { }
};
function sc(a, b, c) { for (var d = !0; !a.A && a.D < c.length;) {
    var e = vc(a, c);
    if (e == ic) {
        4 == b && (a.h = 4, J(14), d = !1);
        G(a.c, a.f, null, "[Incomplete Response]");
        break;
    }
    else if (e == hc) {
        a.h = 4;
        J(15);
        G(a.c, a.f, c, "[Invalid Chunk]");
        d = !1;
        break;
    }
    else
        G(a.c, a.f, e, null), qc(a, e);
} 4 == b && 0 == c.length && (a.h = 1, J(16), d = !1); a.b = a.b && d; d ? 0 < c.length && !a.V && (a.V = !0, b = a.g, b.a == a && b.U && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc(b), b.F = !0, J(11))) : (G(a.c, a.f, c, "[Invalid Chunked Response]"), P(a), rc(a)); }
h.Wa = function () { if (this.a) {
    var a = O(this.a), b = this.a.$();
    this.D < b.length && (pc(this), sc(this, a, b), this.b && 4 != a && mc(this));
} };
function vc(a, b) { var c = a.D, d = b.indexOf("\n", c); if (-1 == d)
    return ic; c = Number(b.substring(c, d)); if (isNaN(c))
    return hc; d += 1; if (d + c > b.length)
    return ic; b = b.substr(d, c); a.D = d + c; return b; }
h.cancel = function () { this.A = !0; P(this); };
function mc(a) { a.T = q() + a.P; yc(a, a.P); }
function yc(a, b) { if (null != a.o)
    throw Error("WatchDog timer not null"); a.o = K(p(a.Va, a), b); }
function pc(a) { a.o && (k.clearTimeout(a.o), a.o = null); }
h.Va = function () { this.o = null; var a = q(); 0 <= a - this.T ? (Sb(this.c, this.l), 2 != this.H && (I(3), J(17)), P(this), this.h = 2, rc(this)) : yc(this, this.T - a); };
function rc(a) { 0 == a.g.v || a.A || uc(a.g, a); }
function P(a) { pc(a); var b = a.F; b && "function" == typeof b.ja && b.ja(); a.F = null; Hb(a.R); Nb(a.J); a.a && (b = a.a, a.a = null, b.abort(), b.ja()); }
function qc(a, b) {
    try {
        var c = a.g;
        if (0 != c.v && (c.a == a || zc(c.b, a)))
            if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
                try {
                    var d = c.ka.a.parse(b);
                }
                catch (tc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.j) {
                                if (c.a)
                                    if (c.a.u + 3E3 < a.u)
                                        Ac(c), Bc(c);
                                    else
                                        break a;
                                Cc(c);
                                J(18);
                            }
                        }
                    else
                        c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = K(p(c.Sa, c), 6E3));
                    if (1 >= Dc(c.b) && c.ea) {
                        try {
                            c.ea();
                        }
                        catch (tc) { }
                        c.ea = void 0;
                    }
                }
                else
                    Q(c, 11);
            }
            else if ((a.C || c.a == a) && Ac(c), !sa(b))
                for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.P = e[0], e = e[1], 2 == c.v)
                        if ("c" == e[0]) {
                            c.J = e[1];
                            c.ga = e[2];
                            var f = e[3];
                            null != f && (c.ha = f, c.c.info("VER=" + c.ha));
                            var g = e[4];
                            null != g && (c.pa = g, c.c.info("SVER=" + c.pa));
                            var m = e[5];
                            if (null != m && "number" === typeof m && 0 < m) {
                                var l = 1.5 * m;
                                c.D = l;
                                c.c.info("backChannelRequestTimeoutMs_=" + l);
                            }
                            l = c;
                            var u = a.a;
                            if (u) {
                                var C = u.a ? u.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (C) {
                                    var B = l.b;
                                    !B.a && (v(C, "spdy") || v(C, "quic") || v(C, "h2")) && (B.f = B.g, B.a = new Set, B.b && (Ec(B, B.b), B.b = null));
                                }
                                if (l.A) {
                                    var rb = u.a ? u.a.getResponseHeader("X-HTTP-Session-Id") :
                                        null;
                                    rb && (l.na = rb, R(l.B, l.A, rb));
                                }
                            }
                            c.v = 3;
                            c.f && c.f.ta();
                            c.U && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                            l = c;
                            var xa = a;
                            l.la = Fc(l, l.C ? l.ga : null, l.fa);
                            if (xa.C) {
                                Gc(l.b, xa);
                                var ya = xa, xc = l.D;
                                xc && ya.setTimeout(xc);
                                ya.o && (pc(ya), mc(ya));
                                l.a = xa;
                            }
                            else
                                Hc(l);
                            0 < c.g.length && Ic(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || Q(c, 7);
                    else
                        3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? Q(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
        I(4);
    }
    catch (tc) { }
}
function Kc(a) { if (a.K && "function" == typeof a.K)
    return a.K(); if ("string" === typeof a)
    return a.split(""); if (ba(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Lc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (ba(a) || "string" === typeof a)
    na(a, b, void 0);
else {
    if (a.L && "function" == typeof a.L)
        var c = a.L();
    else if (a.K && "function" == typeof a.K)
        c = void 0;
    else if (ba(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function S(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof S)
        for (c = a.L(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
h = S.prototype;
h.K = function () { Mc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
h.L = function () { Mc(this); return this.a.concat(); };
function Mc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        T(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], T(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
h.get = function (a, b) { return T(this.b, a) ? this.b[a] : b; };
h.set = function (a, b) { T(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
h.forEach = function (a, b) { for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function T(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function U(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof U) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new Sc;
    c.c = b.c;
    b.a && (c.a = new S(b.a), c.b = b.b);
    Tc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Uc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Uc(c[5] || "", !0), Tc(this, c[6] || "", !0), this.i = Uc(c[7] || "")) : (this.a = !!b, this.b = new Sc(null, this.a)); }
U.prototype.toString = function () { var a = [], b = this.f; b && a.push(Vc(b, Wc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(Vc(b, Wc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Vc(c, "/" == c.charAt(0) ? Xc : Yc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", Vc(c, Zc)); return a.join(""); };
function N(a) { return new U(a); }
function Pc(a, b, c) { a.f = c ? Uc(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Qc(a, b, c) { a.c = c ? Uc(b, !0) : b; }
function Rc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Tc(a, b, c) { b instanceof Sc ? (a.b = b, $c(a.b, a.a)) : (c || (b = Vc(b, ad)), a.b = new Sc(b, a.a)); }
function R(a, b, c) { a.b.set(b, c); }
function kc(a) { R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function bd(a) { return a instanceof U ? N(a) : new U(a, void 0); }
function cd(a, b, c, d) { var e = new U(null, void 0); a && Pc(e, a); b && Qc(e, b); c && Rc(e, c); d && (e.g = d); return e; }
function Uc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function Vc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, dd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function dd(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Wc = /[#\/\?@]/g, Yc = /[#\?:]/g, Xc = /[#\?]/g, ad = /[#\?@]/g, Zc = /#/g;
function Sc(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function V(a) { a.a || (a.a = new S, a.b = 0, a.c && Oc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
h = Sc.prototype;
h.add = function (a, b) { V(this); this.c = null; a = W(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function ed(a, b) { V(a); b = W(a, b); T(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, T(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a))); }
function fd(a, b) { V(a); b = W(a, b); return T(a.a.b, b); }
h.forEach = function (a, b) { V(this); this.a.forEach(function (c, d) { na(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
h.L = function () { V(this); for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
h.K = function (a) { V(this); var b = []; if ("string" === typeof a)
    fd(this, a) && (b = qa(b, this.a.get(W(this, a))));
else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
        b = qa(b, a[c]);
} return b; };
h.set = function (a, b) { V(this); this.c = null; a = W(this, a); fd(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
h.get = function (a, b) { if (!a)
    return b; a = this.K(a); return 0 < a.length ? String(a[0]) : b; };
function nc(a, b, c) { ed(a, b); 0 < c.length && (a.c = null, a.a.set(W(a, b), ra(c)), a.b += c.length); }
h.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
    }
} return this.c = a.join("&"); };
function W(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function $c(a, b) { b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (ed(this, d), nc(this, e, c)); }, a)); a.f = b; }
var gd = /** @class */ (function () {
    function gd(a, b) {
        this.b = a;
        this.a = b;
    }
    return gd;
}());
function hd(a) { this.g = a || id; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().Lb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var id = 10;
function jd(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function Dc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function zc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function Ec(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Gc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
hd.prototype.cancel = function () {
    var e_1, _a;
    this.c = kd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function kd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.s);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.s);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return ra(a.c);
}
function ld() { }
ld.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
ld.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function md() { this.a = new ld; }
function nd(a, b, c) { var d = c || ""; try {
    Lc(a, function (e, f) { var g = e; n(e) && (g = ub(e)); b.push(d + f + "=" + encodeURIComponent(g)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function od(a, b) { var c = new Ob; if (k.Image) {
    var d = new Image;
    d.onload = ja(pd, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ja(pd, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ja(pd, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ja(pd, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function pd(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var qd = k.JSON.parse;
function X(a) { D.call(this); this.headers = new S; this.H = a || null; this.b = !1; this.s = this.a = null; this.B = ""; this.h = 0; this.f = ""; this.g = this.A = this.l = this.u = !1; this.o = 0; this.m = null; this.I = rd; this.D = this.F = !1; }
r(X, D);
var rd = "", sd = /^https?$/i, td = ["POST", "PUT"];
h = X.prototype;
h.ba = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.B = a;
    this.f = "";
    this.h = 0;
    this.u = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.H ? ac(this.H) : ac(ec);
    this.a.onreadystatechange = p(this.za, this);
    try {
        this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
    }
    catch (f) {
        ud(this, f);
        return;
    }
    a = c || "";
    var e = new S(this.headers);
    d && Lc(d, function (f, g) { e.set(g, f); });
    d = oa(e.L());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        ma(td, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, g) { this.a.setRequestHeader(g, f); }, this);
    this.I && (this.a.responseType = this.I);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        vd(this), 0 < this.o && ((this.D = wd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Ib(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        ud(this, f);
    }
};
function wd(a) { return x && Qa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function pa(a) { return "content-type" == a.toLowerCase(); }
h.xa = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, E(this, "timeout"), this.abort(8)); };
function ud(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; xd(a); yd(a); }
function xd(a) { a.u || (a.u = !0, E(a, "complete"), E(a, "error")); }
h.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, E(this, "complete"), E(this, "abort"), yd(this)); };
h.G = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), yd(this, !0)); X.X.G.call(this); };
h.za = function () { this.j || (this.A || this.l || this.g ? zd(this) : this.Ua()); };
h.Ua = function () { zd(this); };
function zd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != O(a) || 2 != a.W()))
        if (a.l && 4 == O(a))
            Ib(a.za, 0, a);
        else if (E(a, "readystatechange"), 4 == O(a)) {
            a.b = !1;
            try {
                {
                    var l = a.W();
                    a: switch (l) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var b = !0;
                            break a;
                        default: b = !1;
                    }
                    var c;
                    if (!(c = b)) {
                        var d;
                        if (d = 0 === l) {
                            var e = String(a.B).match(Nc)[1] || null;
                            if (!e && k.self && k.self.location) {
                                var f = k.self.location.protocol;
                                e = f.substr(0, f.length - 1);
                            }
                            d = !sd.test(e ? e.toLowerCase() : "");
                        }
                        c = d;
                    }
                    var g = c;
                }
                if (g)
                    E(a, "complete"),
                        E(a, "success");
                else {
                    a.h = 6;
                    try {
                        var m = 2 < O(a) ? a.a.statusText : "";
                    }
                    catch (l) {
                        m = "";
                    }
                    a.f = m + " [" + a.W() + "]";
                    xd(a);
                }
            }
            finally {
                yd(a);
            }
        }
}
function yd(a, b) { if (a.a) {
    vd(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || E(a, "ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function vd(a) { a.a && a.D && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function O(a) { return a.a ? a.a.readyState : 0; }
h.W = function () { try {
    return 2 < O(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
h.$ = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
h.Pa = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return qd(b);
} };
h.ua = function () { return this.h; };
h.Qa = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function Ad(a) { var b = ""; za(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function Bd(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = Ad(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : R(a, b, c)); }
function Cd(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function Dd(a) {
    this.pa = 0;
    this.g = [];
    this.c = new Ob;
    this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null;
    this.Oa = this.R = 0;
    this.La = Cd("failFast", !1, a);
    this.H = this.m = this.j = this.h = this.f = null;
    this.S = !0;
    this.I = this.oa = this.P = -1;
    this.T = this.o = this.u = 0;
    this.Ha = Cd("baseRetryDelayMs", 5E3, a);
    this.Ra = Cd("retryDelaySeedMs", 1E4, a);
    this.Ma = Cd("forwardChannelMaxRetries", 2, a);
    this.ma = Cd("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Na = a && a.g || void 0;
    this.D = void 0;
    this.C = a && a.supportsCrossDomainXhr ||
        !1;
    this.J = "";
    this.b = new hd(a && a.concurrentRequestLimit);
    this.ka = new md;
    this.da = a && a.fastHandshake || !1;
    this.Ia = a && a.b || !1;
    a && a.f && (this.c.a = !1);
    a && a.forceLongPolling && (this.S = !1);
    this.U = !this.da && this.S && a && a.detectBufferingProxy || !1;
    this.ea = void 0;
    this.N = 0;
    this.F = !1;
    this.s = null;
    (this.Ka = a && a.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.");
}
h = Dd.prototype;
h.ha = 8;
h.v = 1;
function Jc(a) { Ed(a); if (3 == a.v) {
    var b = a.R++, c = N(a.B);
    R(c, "SID", a.J);
    R(c, "RID", b);
    R(c, "TYPE", "terminate");
    Fd(a, c);
    b = new M(a, a.c, b, void 0);
    b.H = 2;
    b.i = kc(N(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && ((new Image).src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    mc(b);
} Gd(a); }
function Bc(a) { a.a && (wc(a), a.a.cancel(), a.a = null); }
function Ed(a) { Bc(a); a.j && (k.clearTimeout(a.j), a.j = null); Ac(a); a.b.cancel(); a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null); }
function Hd(a, b) { a.g.push(new gd(a.Oa++, b)); 3 == a.v && Ic(a); }
function Ic(a) { jd(a.b) || a.h || (a.h = !0, Bb(a.Ba, a), a.u = 0); }
function Id(a, b) { if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return !1; if (a.h)
    return a.g = b.s.concat(a.g), !0; if (1 == a.v || 2 == a.v || a.u >= (a.La ? 0 : a.Ma))
    return !1; a.h = K(p(a.Ba, a, b), Jd(a, a.u)); a.u++; return !0; }
h.Ba = function (a) {
    if (this.h)
        if (this.h = null, 1 == this.v) {
            if (!a) {
                this.R = Math.floor(1E5 * Math.random());
                a = this.R++;
                var b = new M(this, this.c, a, void 0), c = this.l;
                this.O && (c ? (c = Aa(c), Ca(c, this.O)) : c = this.O);
                null === this.i && (b.B = c);
                var d;
                if (this.da)
                    a: {
                        for (var e = d = 0; e < this.g.length; e++) {
                            b: {
                                var f = this.g[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.g.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Kd(this, b, d);
                e = N(this.B);
                R(e, "RID", a);
                R(e, "CVER", 22);
                this.A && R(e, "X-HTTP-Session-Id", this.A);
                Fd(this, e);
                this.i && c && Bd(e, this.i, c);
                Ec(this.b, b);
                this.Ia && R(e, "TYPE", "init");
                this.da ? (R(e, "$req", d), R(e, "SID", "null"), b.U = !0, jc(b, e, null)) : jc(b, e, d);
                this.v = 2;
            }
        }
        else
            3 == this.v && (a ? Ld(this, a) : 0 == this.g.length || jd(this.b) || Ld(this));
};
function Ld(a, b) { var c; b ? c = b.f : c = a.R++; var d = N(a.B); R(d, "SID", a.J); R(d, "RID", c); R(d, "AID", a.P); Fd(a, d); a.i && a.l && Bd(d, a.i, a.l); c = new M(a, a.c, c, a.u + 1); null === a.i && (c.B = a.l); b && (a.g = b.s.concat(a.g)); b = Kd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random())); Ec(a.b, c); jc(c, d, b); }
function Fd(a, b) { a.f && Lc({}, function (c, d) { R(b, d, c); }); }
function Kd(a, b, c) { c = Math.min(a.g.length, c); var d = a.f ? p(a.f.Ja, a.f, a) : null; a: for (var e = a.g, f = -1;;) {
    var g = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);
    for (var m = !0, l = 0; l < c; l++) {
        var u = e[l].b, C = e[l].a;
        u -= f;
        if (0 > u)
            f = Math.max(0, e[l].b - 100), m = !1;
        else
            try {
                nd(C, g, "req" + u + "_");
            }
            catch (B) {
                d && d(C);
            }
    }
    if (m) {
        d = g.join("&");
        break a;
    }
} a = a.g.splice(0, c); b.s = a; return d; }
function Hc(a) { a.a || a.j || (a.T = 1, Bb(a.Aa, a), a.o = 0); }
function Cc(a) { if (a.a || a.j || 3 <= a.o)
    return !1; a.T++; a.j = K(p(a.Aa, a), Jd(a, a.o)); a.o++; return !0; }
h.Aa = function () { this.j = null; Md(this); if (this.U && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = K(p(this.Ta, this), a);
} };
h.Ta = function () { this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, J(10), Bc(this), Md(this)); };
function wc(a) { null != a.s && (k.clearTimeout(a.s), a.s = null); }
function Md(a) { a.a = new M(a, a.c, "rpc", a.T); null === a.i && (a.a.B = a.l); a.a.O = 0; var b = N(a.la); R(b, "RID", "rpc"); R(b, "SID", a.J); R(b, "CI", a.H ? "0" : "1"); R(b, "AID", a.P); Fd(a, b); R(b, "TYPE", "xmlhttp"); a.i && a.l && Bd(b, a.i, a.l); a.D && a.a.setTimeout(a.D); var c = a.a; a = a.ga; c.H = 1; c.i = kc(N(b)); c.j = null; c.I = !0; lc(c, a); }
h.Sa = function () { null != this.m && (this.m = null, Bc(this), Cc(this), J(19)); };
function Ac(a) { null != a.m && (k.clearTimeout(a.m), a.m = null); }
function uc(a, b) { var c = null; if (a.a == b) {
    Ac(a);
    wc(a);
    a.a = null;
    var d = 2;
}
else if (zc(a.b, b))
    c = b.s, Gc(a.b, b), d = 1;
else
    return; a.I = b.N; if (0 != a.v)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Ub();
            E(d, new Xb(d, c, b, e));
            Ic(a);
        }
        else
            Hc(a);
    else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Id(a, b) || 2 == d && Cc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                Q(a, 5);
                break;
            case 4:
                Q(a, 10);
                break;
            case 3:
                Q(a, 6);
                break;
            default: Q(a, 2);
        } }
function Jd(a, b) { var c = a.Ha + Math.floor(Math.random() * a.Ra); a.f || (c *= 2); return c * b; }
function Q(a, b) { a.c.info("Error code " + b); if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Ya, a);
    c || (c = new U("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), kc(c));
    od(c.toString(), d);
}
else
    J(2); a.v = 0; a.f && a.f.ra(b); Gd(a); Ed(a); }
h.Ya = function (a) { a ? (this.c.info("Successfully pinged google.com"), J(2)) : (this.c.info("Failed to ping google.com"), J(1)); };
function Gd(a) { a.v = 0; a.I = -1; if (a.f) {
    if (0 != kd(a.b).length || 0 != a.g.length)
        a.b.c.length = 0, ra(a.g), a.g.length = 0;
    a.f.qa();
} }
function Fc(a, b, c) { var d = bd(c); if ("" != d.c)
    b && Qc(d, b + "." + d.c), Rc(d, d.h);
else {
    var e = k.location;
    d = cd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.V && za(a.V, function (f, g) { R(d, g, f); }); b = a.A; c = a.na; b && c && R(d, b, c); R(d, "VER", a.ha); Fd(a, d); return d; }
function oc(a, b) { if (b && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new X(a.Na); b.F = a.C; return b; }
function Nd() { }
h = Nd.prototype;
h.ta = function () { };
h.sa = function () { };
h.ra = function () { };
h.qa = function () { };
h.Ja = function () { };
function Od() { if (x && !(10 <= Number(Ta)))
    throw Error("Environmental error: no available transport."); }
Od.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    D.call(this);
    this.a = new Dd(b);
    this.o = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.l = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = { "X-WebChannel-Client-Profile": b.a });
    this.a.O =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !sa(a) && (this.a.i = a);
    this.m = b && b.supportsCrossDomainXhr || !1;
    this.l = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !sa(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, D);
Y.prototype.g = function () { this.a.f = this.f; this.m && (this.a.C = !0); var a = this.a, b = this.o, c = this.b || void 0; J(0); a.fa = b; a.V = c || {}; a.H = a.S; a.B = Fc(a, null, a.fa); Ic(a); };
Y.prototype.close = function () { Jc(this.a); };
Y.prototype.h = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Hd(this.a, b);
}
else
    this.l ? (b = {}, b.__data__ = ub(a), Hd(this.a, b)) : Hd(this.a, a); };
Y.prototype.G = function () { this.a.f = null; delete this.f; Jc(this.a); delete this.a; Y.X.G.call(this); };
function Pd(a) { cc.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Pd, cc);
function Qd() { dc.call(this); this.status = 1; }
r(Qd, dc);
function Z(a) { this.a = a; }
r(Z, Nd);
Z.prototype.ta = function () { E(this.a, "a"); };
Z.prototype.sa = function (a) { E(this.a, new Pd(a)); };
Z.prototype.ra = function (a) { E(this.a, new Qd(a)); };
Z.prototype.qa = function () { E(this.a, "b"); }; /*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Od.prototype.createWebChannel = Od.prototype.a;
Y.prototype.send = Y.prototype.h;
Y.prototype.open = Y.prototype.g;
Y.prototype.close = Y.prototype.close;
Yb.NO_ERROR = 0;
Yb.TIMEOUT = 8;
Yb.HTTP_ERROR = 6;
Zb.COMPLETE = "complete";
bc.EventType = L;
L.OPEN = "a";
L.CLOSE = "b";
L.ERROR = "c";
L.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.W;
X.prototype.getResponseJson = X.prototype.Pa;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var createWebChannelTransport = function () { return new Od; };
var getStatEventTarget = function () { return Ub(); };
var ErrorCode = Yb;
var EventType = Zb;
var Event = H;
var Stat = { gb: 0, jb: 1, kb: 2, Db: 3, Ib: 4, Fb: 5, Gb: 6, Eb: 7, Cb: 8, Hb: 9, PROXY: 10, NOPROXY: 11, Ab: 12, wb: 13, xb: 14, vb: 15, yb: 16, zb: 17, bb: 18, ab: 19, cb: 20 };
var WebChannel = bc;
var XhrIo = X;

var esm = {
    createWebChannelTransport: createWebChannelTransport,
    getStatEventTarget: getStatEventTarget,
    ErrorCode: ErrorCode,
    EventType: EventType,
    Event: Event,
    Stat: Stat,
    WebChannel: WebChannel,
    XhrIo: XhrIo
};

/* harmony default export */ __webpack_exports__["default"] = (esm);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "xo5E":
/*!*************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/esm5/index.js ***!
  \*************************************************************/
/*! exports provided: registerFirestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFirestore", function() { return P; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "q/0M");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_webchannel_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/webchannel-wrapper */ "x7I3");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prebuilt-30db9a88-9b75cc8d.js */ "PQV/");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/component */ "/6Yf");














var I = {
    Firestore: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["U"],
    GeoPoint: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["n"],
    Timestamp: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["z"],
    Blob: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["L"],
    Transaction: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["j"],
    WriteBatch: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["W"],
    DocumentReference: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["G"],
    DocumentSnapshot: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["Y"],
    Query: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["a"],
    QueryDocumentSnapshot: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["X"],
    QuerySnapshot: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["e"],
    CollectionReference: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["b"],
    FieldPath: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["i"],
    FieldValue: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["r"],
    setLogLevel: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["K"],
    CACHE_SIZE_UNLIMITED: _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["c"]
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function P(e) {
    !
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
    function(e, r) {
        e.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_6__["Component"]("firestore", (function(e) {
            var t = e.getProvider("app").getImmediate();
            return r(t, e.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, I)));
    }(e, (function(e, i) {
        return new _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["U"](e, new _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["Z"](e, i), new _prebuilt_30db9a88_9b75cc8d_js__WEBPACK_IMPORTED_MODULE_5__["q"]);
    })), e.registerVersion("@firebase/firestore", "2.1.2");
}

P(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=default~private-chat-private-chat-module~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module-es2015.js.map