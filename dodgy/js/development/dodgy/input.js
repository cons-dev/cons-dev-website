// Compiled by ClojureScript 1.10.520 {}
goog.provide('dodgy.input');
goog.require('cljs.core');
dodgy.input.keystates = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
dodgy.input.keys_by_code = new cljs.core.PersistentArrayMap(null, 4, [(37),new cljs.core.Keyword(null,"left","left",-399115937),(38),new cljs.core.Keyword(null,"up","up",-269712113),(39),new cljs.core.Keyword(null,"right","right",-452581833),(40),new cljs.core.Keyword(null,"down","down",1565245570)], null);
dodgy.input.update_keystate_BANG_ = (function dodgy$input$update_keystate_BANG_(state,code){
var temp__5735__auto__ = cljs.core.get.call(null,dodgy.input.keys_by_code,code);
if(cljs.core.truth_(temp__5735__auto__)){
var k = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,dodgy.input.keystates,cljs.core.assoc,k,state);
} else {
return null;
}
});
window.addEventListener("keydown",(function (e){
return dodgy.input.update_keystate_BANG_.call(null,new cljs.core.Keyword(null,"pressed","pressed",1100937946),e.keyCode);
}));
window.addEventListener("keyup",(function (e){
return dodgy.input.update_keystate_BANG_.call(null,null,e.keyCode);
}));
dodgy.input.get_x_accel = (function dodgy$input$get_x_accel(){
return (((cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,dodgy.input.keystates),new cljs.core.Keyword(null,"left","left",-399115937)),new cljs.core.Keyword(null,"pressed","pressed",1100937946)))?-0.5:(0)) + ((cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,dodgy.input.keystates),new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"pressed","pressed",1100937946)))?0.5:(0)));
});
dodgy.input.get_y_accel = (function dodgy$input$get_y_accel(){
return (((cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,dodgy.input.keystates),new cljs.core.Keyword(null,"up","up",-269712113)),new cljs.core.Keyword(null,"pressed","pressed",1100937946)))?-0.5:(0)) + ((cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,dodgy.input.keystates),new cljs.core.Keyword(null,"down","down",1565245570)),new cljs.core.Keyword(null,"pressed","pressed",1100937946)))?0.5:(0)));
});

//# sourceMappingURL=input.js.map?rel=1640331881956
