webpackJsonp([0],{564:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(132),i=n(569),o=n(311),s=n(568),c=n(566),_=n(567),u=n(565),h=n(310),a=n(77);n.d(e,"SubjectModuleNgFactory",function(){return d});var l=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},p=function(t){function e(e){return t.call(this,e,[_.a],[])||this}return l(e,t),Object.defineProperty(e.prototype,"_ROUTES_3",{get:function(){return null==this.__ROUTES_3&&(this.__ROUTES_3=[[{path:"",component:u.a}]]),this.__ROUTES_3},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_SubjectService_4",{get:function(){return null==this.__SubjectService_4&&(this.__SubjectService_4=new c.a(this.parent.get(h.a))),this.__SubjectService_4},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._RouterModule_0=new o.g(this.parent.get(o.h,null)),this._SubjectRoutingModule_1=new s.a,this._SubjectModule_2=new i.a,this._SubjectModule_2},e.prototype.getInternal=function(t,e){return t===o.g?this._RouterModule_0:t===s.a?this._SubjectRoutingModule_1:t===i.a?this._SubjectModule_2:t===a.a?this._ROUTES_3:t===c.a?this._SubjectService_4:e},e.prototype.destroyInternal=function(){},e}(r.a),d=new r.b(p,i.a)},565:function(t,e,n){"use strict";var r=n(566);n.d(e,"a",function(){return i});var i=function(){function t(t){this.subjectService=t}return t.prototype.ngOnInit=function(){var t=this;this.subjectService.getApiEndpoint().then(function(e){return t.subjectApiEndpoint=e})},t.ctorParameters=function(){return[{type:r.a}]},t}()},566:function(t,e,n){"use strict";var r=n(1),i=n(310);n.d(e,"a",function(){return o});var o=function(){function t(t){this.appConfig=t}return t.prototype.getApiEndpoint=function(){return Promise.resolve(this.appConfig.apiEndpoint)},t.ctorParameters=function(){return[{type:void 0,decorators:[{type:r.k,args:[i.a]}]}]},t}()},567:function(t,e,n){"use strict";var r=n(565),i=n(133),o=n(28),s=n(94),c=n(59),_=n(58),u=n(76),h=n(566),a=n(57);n.d(e,"a",function(){return b});var l=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},p=function(){function t(t){this._changed=!1,this.context=new r.a(t)}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var r=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),r},t.prototype.checkHost=function(t,e,n,r){},t.prototype.handleEvent=function(t,e){var n=!0;return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),d=o.createRenderComponentType("",0,s.b.None,[],{}),f=function(t){function e(n,r,i,o){return t.call(this,e,d,c.a.HOST,n,r,i,o,_.b.CheckAlways)||this}return l(e,t),e.prototype.createInternal=function(t){return this._el_0=o.selectOrCreateRenderHostElement(this.renderer,"subject",o.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new R(this.viewUtils,this,0,this._el_0),this._SubjectComponent_0_3=new p(this.injectorGet(h.a,this.parentIndex)),this.compView_0.create(this._SubjectComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new u.a(0,this,this._el_0,this._SubjectComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===r.a&&0===e?this._SubjectComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._SubjectComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(i.a),b=new u.b("subject",f,r.a),y=[],v=o.createRenderComponentType("",0,s.b.None,y,{}),R=function(t){function e(n,r,i,o){var s=t.call(this,e,v,c.a.COMPONENT,n,r,i,o,_.b.CheckAlways)||this;return s._expr_11=a.b,s}return l(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);return this._el_0=o.createRenderElement(this.renderer,e,"p",o.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"\n  this is subject component",null),this._el_2=o.createRenderElement(this.renderer,this._el_0,"br",o.EMPTY_INLINE_ARRAY,null),this._text_3=this.renderer.createText(this._el_0,"\n  browser path /subject",null),this._el_4=o.createRenderElement(this.renderer,this._el_0,"br",o.EMPTY_INLINE_ARRAY,null),this._text_5=this.renderer.createText(this._el_0,"\n  this will be lazy loaded",null),this._el_6=o.createRenderElement(this.renderer,this._el_0,"br",o.EMPTY_INLINE_ARRAY,null),this._text_7=this.renderer.createText(this._el_0,"\n  Look at Chrome network part request to chunk file\n",null),this._text_8=this.renderer.createText(e,"\n",null),this._el_9=o.createRenderElement(this.renderer,e,"p",o.EMPTY_INLINE_ARRAY,null),this._text_10=this.renderer.createText(this._el_9,"",null),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._el_6,this._text_7,this._text_8,this._el_9,this._text_10],null),null},e.prototype.detectChangesInternal=function(t){var e=o.inlineInterpolate(1,"\n  access to global settings -> ",this.context.subjectApiEndpoint,"\n");o.checkBinding(t,this._expr_11,e)&&(this.renderer.setText(this._text_10,e),this._expr_11=e)},e}(i.a)},568:function(t,e,n){"use strict";var r=n(565);n.d(e,"a",function(){return i});var i=([{path:"",component:r.a}],function(){function t(){}return t}())},569:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){}return t}()}});