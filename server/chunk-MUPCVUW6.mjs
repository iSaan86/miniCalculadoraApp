import './polyfills.server.mjs';
import{A as ge,B as X,C as Y,D as K,E,F as me,H as ve,L as ye,N as _e,P as Ce,Q as Ve,R as J,T as De,U as be,X as Ae,a as le,b as ue,ba as Me,c as de,d as ce,e as x,f as D,g as L,h as m,i as he,j as W,k as h,l as fe,m as $,n as q,o as b,p as A,q as a,r as z,s as g,t as Z,u as d,v as f,w as v,x as p,y as M,z as pe}from"./chunk-KPO2OORC.mjs";import{a as u,b as c}from"./chunk-NDYDZJSS.mjs";var xe=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(z),a(q))},e.\u0275dir=h({type:e});let i=e;return i})(),Pe=(()=>{let e=class e extends xe{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=$(e)))(s||e)}})(),e.\u0275dir=h({type:e,features:[g]});let i=e;return i})(),ee=new m("");var nt={provide:ee,useExisting:D(()=>U),multi:!0};function rt(){let i=J()?J().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var st=new m(""),U=(()=>{let e=class e extends xe{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!rt())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(z),a(q),a(st,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&p("input",function(o){return s._handleInput(o.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(o){return s._compositionEnd(o.target.value)})},features:[E([nt]),g]});let i=e;return i})();var ke=new m(""),Te=new m("");function Ge(i){return i!=null}function je(i){return ve(i)?ue(i):i}function Be(i){let e={};return i.forEach(n=>{e=n!=null?u(u({},e),n):e}),Object.keys(e).length===0?null:e}function Re(i,e){return e.map(n=>n(i))}function ot(i){return!i.validate}function Ue(i){return i.map(e=>ot(e)?e:n=>e.validate(n))}function at(i){if(!i)return null;let e=i.filter(Ge);return e.length==0?null:function(n){return Be(Re(n,e))}}function te(i){return i!=null?at(Ue(i)):null}function lt(i){if(!i)return null;let e=i.filter(Ge);return e.length==0?null:function(n){let t=Re(n,e).map(je);return ce(t).pipe(de(Be))}}function ie(i){return i!=null?lt(Ue(i)):null}function Ee(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ut(i){return i._rawValidators}function dt(i){return i._rawAsyncValidators}function Q(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,e){return Array.isArray(i)?i.includes(e):i===e}function we(i,e){let n=Q(e);return Q(i).forEach(r=>{k(n,r)||n.push(r)}),n}function Fe(i,e){return Q(e).filter(n=>!k(i,n))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=te(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},C=class extends T{get formDirective(){return null}get path(){return null}},N=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},G=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ei=c(u({},ct),{"[class.ng-submitted]":"isSubmitted"}),He=(()=>{let e=class e extends G{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(N,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[g]});let i=e;return i})(),Le=(()=>{let e=class e extends G{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(C,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[g]});let i=e;return i})();var w="VALID",P="INVALID",y="PENDING",F="DISABLED",V=class{},j=class extends V{constructor(e,n){super(),this.value=e,this.source=n}},S=class extends V{constructor(e,n){super(),this.pristine=e,this.source=n}},O=class extends V{constructor(e,n){super(),this.touched=e,this.source=n}},_=class extends V{constructor(e,n){super(),this.status=e,this.source=n}};function We(i){return(H(i)?i.validators:i)||null}function ht(i){return Array.isArray(i)?te(i):i||null}function $e(i,e){return(H(e)?e.asyncValidators:i)||null}function ft(i){return Array.isArray(i)?ie(i):i||null}function H(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function pt(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new x(1e3,"");if(!t[n])throw new x(1001,"")}function gt(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new x(1002,"")})}var B=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new le,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===P}get pending(){return this.status==y}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(we(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Fe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(u({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new O(!0,t))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:t})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t),n&&e.emitEvent!==!1&&this._events.next(new O(!1,t))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(u({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new S(!1,t))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),n&&e.emitEvent!==!1&&this._events.next(new S(!0,t))}markAsPending(e={}){this.status=y;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new _(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(u({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(c(u({},e),{onlySelf:!0}))}),this._updateValue();let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new j(this.value,t)),this._events.next(new _(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(u({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(t=>{t.enable(c(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(u({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===y)&&this._runAsyncValidator(t,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new j(this.value,n)),this._events.next(new _(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(u({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let t=je(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,t){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||t)&&this._events.next(new _(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,t)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(P)?P:w}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new S(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}},R=class extends B{constructor(e,n,t){super(We(n),$e(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){gt(this,!0,e),Object.keys(e).forEach(t=>{pt(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ne=new m("CallSetDisabledState",{providedIn:"root",factory:()=>re}),re="always";function mt(i,e){return[...e.path,i]}function qe(i,e,n=re){ze(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),yt(i,e),Ct(i,e),_t(i,e),vt(i,e)}function Ie(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function vt(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function ze(i,e){let n=ut(i);e.validator!==null?i.setValidators(Ee(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=dt(i);e.asyncValidator!==null?i.setAsyncValidators(Ee(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();Ie(e._rawValidators,r),Ie(e._rawAsyncValidators,r)}function yt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ze(i,e)})}function _t(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ze(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ze(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Ct(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function Vt(i,e){i==null,ze(i,e)}function Dt(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function bt(i){return Object.getPrototypeOf(i.constructor)===Pe}function At(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Mt(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===U?n=s:bt(s)?t=s:r=s}),r||t||n||null}var Et={provide:C,useExisting:D(()=>se)},I=Promise.resolve(),se=(()=>{let e=class e extends C{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new b,this.form=new R({},te(t),ie(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){I.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),qe(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){I.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){I.then(()=>{let r=this._findContainer(t.path),s=new R({});Vt(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){I.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){I.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,At(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(a(ke,10),a(Te,10),a(ne,8))},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&p("submit",function(o){return s.onSubmit(o)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[E([Et]),g]});let i=e;return i})();function Se(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Oe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var wt=class extends B{constructor(e=null,n,t){super(We(n),$e(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ft={provide:N,useExisting:D(()=>oe)},Ne=Promise.resolve(),oe=(()=>{let e=class e extends N{constructor(t,r,s,l,o,tt){super(),this._changeDetectorRef=o,this.callSetDisabledState=tt,this.control=new wt,this._registered=!1,this.name="",this.update=new b,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Mt(this,l)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Dt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){qe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ne.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,s=r!==0&&Ce(r);Ne.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?mt(t,this._parent):[t]}};e.\u0275fac=function(r){return new(r||e)(a(C,9),a(ke,10),a(Te,10),a(ee,10),a(_e,8),a(ne,8))},e.\u0275dir=h({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[E([Ft]),g,fe]});let i=e;return i})(),Xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})(),It={provide:ee,useExisting:D(()=>ae),multi:!0},ae=(()=>{let e=class e extends Pe{writeValue(t){let r=t??"";this.setProperty("value",r)}registerOnChange(t){this.onChange=r=>{t(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=$(e)))(s||e)}})(),e.\u0275dir=h({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&p("input",function(o){return s.onChange(o.target.value)})("blur",function(){return s.onTouched()})},features:[E([It]),g]});let i=e;return i})();var St=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=W({type:e}),e.\u0275inj=L({});let i=e;return i})();var Ye=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:ne,useValue:t.callSetDisabledState??re}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=W({type:e}),e.\u0275inj=L({imports:[St]});let i=e;return i})();var Ke=(()=>{let e=class e{constructor(){this.title="Mini Calculadora",this.numero1=0,this.numero2=0,this.resultado=0}sumar(){this.resultado=this.numero1+this.numero2}restar(){this.resultado=this.numero1-this.numero2}multiplicar(){this.resultado=this.numero1*this.numero2}dividir(){this.resultado=this.numero1/this.numero2}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=he({type:e,selectors:[["app-root"]],standalone:!0,features:[me],decls:21,vars:4,consts:[[1,"container"],["type","number","name","numero1",3,"ngModelChange","ngModel"],["type","number","name","numero2",3,"ngModelChange","ngModel"],["type","submit","value","Suma",1,"btn","btn-primary",3,"click"],["type","submit","value","Resta",1,"btn","btn-primary",3,"click"],["type","submit","value","Multiplica",1,"btn","btn-primary",3,"click"],["type","submit","value","Divide",1,"btn","btn-primary",3,"click"]],template:function(r,s){r&1&&(d(0,"div",0),v(1,"br"),d(2,"h1"),M(3),f(),v(4,"br"),d(5,"form"),M(6," Numero 1: "),d(7,"input",1),K("ngModelChange",function(o){return Y(s.numero1,o)||(s.numero1=o),o}),f(),v(8,"br")(9,"br"),M(10," Numero 2: "),d(11,"input",2),K("ngModelChange",function(o){return Y(s.numero2,o)||(s.numero2=o),o}),f(),v(12,"br")(13,"br"),d(14,"input",3),p("click",function(){return s.sumar()}),f(),d(15,"input",4),p("click",function(){return s.restar()}),f(),d(16,"input",5),p("click",function(){return s.multiplicar()}),f(),d(17,"input",6),p("click",function(){return s.dividir()}),f()(),v(18,"br"),d(19,"p"),M(20),f()()),r&2&&(A(3),pe(s.title),A(4),X("ngModel",s.numero1),A(4),X("ngModel",s.numero2),A(9),ge("Resultado: ",s.resultado,""))},dependencies:[Ye,Xe,U,ae,He,Le,oe,se]});let i=e;return i})();var Je=[];var Qe={providers:[ye({eventCoalescing:!0}),Me(Je),be()]};var Nt={providers:[Ae()]},et=Ve(Qe,Nt);var xt=()=>De(Ke,et),yi=xt;export{yi as a};