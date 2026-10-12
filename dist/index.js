"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=q(function(m,v){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),t=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),l=require('@stdlib/blas-ext-base-sleft-pad-circular/dist').ndarray;function f(a){var r=a[0],e=a[1],s=c(a[2]);return l(d(r,0),s,u(r),i(r,0),t(r),u(e),i(e,0),t(e)),e}v.exports=f
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
