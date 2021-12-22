// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('dodgy.input');
goog.require('cljs.core');
goog.require('cljs.core.constants');
dodgy.input.keystates = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
dodgy.input.keys_by_code = new cljs.core.PersistentArrayMap(null, 4, [(37),cljs.core.cst$kw$left,(38),cljs.core.cst$kw$up,(39),cljs.core.cst$kw$right,(40),cljs.core.cst$kw$down], null);
dodgy.input.update_keystate_BANG_ = (function dodgy$input$update_keystate_BANG_(state,code){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dodgy.input.keys_by_code,code);
if(cljs.core.truth_(temp__5735__auto__)){
var k = temp__5735__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dodgy.input.keystates,cljs.core.assoc,k,state);
} else {
return null;
}
});
window.addEventListener("keydown",(function (e){
return dodgy.input.update_keystate_BANG_(cljs.core.cst$kw$pressed,e.keyCode);
}));
window.addEventListener("keyup",(function (e){
return dodgy.input.update_keystate_BANG_(null,e.keyCode);
}));
dodgy.input.get_x_accel = (function dodgy$input$get_x_accel(){
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dodgy.input.keystates),cljs.core.cst$kw$left),cljs.core.cst$kw$pressed))?-0.5:(0)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dodgy.input.keystates),cljs.core.cst$kw$right),cljs.core.cst$kw$pressed))?0.5:(0)));
});
dodgy.input.get_y_accel = (function dodgy$input$get_y_accel(){
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dodgy.input.keystates),cljs.core.cst$kw$up),cljs.core.cst$kw$pressed))?-0.5:(0)) + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dodgy.input.keystates),cljs.core.cst$kw$down),cljs.core.cst$kw$pressed))?0.5:(0)));
});
