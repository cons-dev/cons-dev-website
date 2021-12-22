// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('dodgy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('dodgy.render');
goog.require('dodgy.stages');
dodgy.core.default_player_position = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-20),cljs.core.cst$kw$y,(20)], null);
dodgy.core.setup = (function dodgy$core$setup(){
quil.core.frame_rate((30));

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$stage,cljs.core.cst$kw$speed,cljs.core.cst$kw$max_DASH_score,cljs.core.cst$kw$time,cljs.core.cst$kw$point_DASH_squares,cljs.core.cst$kw$score_DASH_color,cljs.core.cst$kw$player,cljs.core.cst$kw$distance,cljs.core.cst$kw$enemies,cljs.core.cst$kw$text],["title",(0),(0),(0),cljs.core.PersistentVector.EMPTY,(0),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-20),cljs.core.cst$kw$y,(20)], null),(0),cljs.core.PersistentVector.EMPTY,["Controls:\n","- The arrow keys control acceleration.\n","\n","Rules:\n","- Hitting orange squares ends the game.\n","- Hitting purple squares increments the score counter.\n","- The longer you play the more frequently red squares spawn.\n","- The squares move at the output of a function of your speed.\n","\n","Good luck!\n","Press any key to continue..."].join('')]);
});
dodgy.core.run_sketch = (function dodgy$core$run_sketch(){
var width = (window.innerWidth - (15));
var height = (window.innerHeight - (20));
dodgy.core.dodgy = ((function (width,height){
return (function dodgy$core$run_sketch_$_dodgy(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"dodgy",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(dodgy.stages.update_stage_state))?((function (width,height){
return (function() { 
var G__6670__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dodgy.stages.update_stage_state,args);
};
var G__6670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6671__i = 0, G__6671__a = new Array(arguments.length -  0);
while (G__6671__i < G__6671__a.length) {G__6671__a[G__6671__i] = arguments[G__6671__i + 0]; ++G__6671__i;}
  args = new cljs.core.IndexedSeq(G__6671__a,0,null);
} 
return G__6670__delegate.call(this,args);};
G__6670.cljs$lang$maxFixedArity = 0;
G__6670.cljs$lang$applyTo = (function (arglist__6672){
var args = cljs.core.seq(arglist__6672);
return G__6670__delegate(args);
});
G__6670.cljs$core$IFn$_invoke$arity$variadic = G__6670__delegate;
return G__6670;
})()
;})(width,height))
:dodgy.stages.update_stage_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(dodgy.core.setup))?((function (width,height){
return (function() { 
var G__6673__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dodgy.core.setup,args);
};
var G__6673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6674__i = 0, G__6674__a = new Array(arguments.length -  0);
while (G__6674__i < G__6674__a.length) {G__6674__a[G__6674__i] = arguments[G__6674__i + 0]; ++G__6674__i;}
  args = new cljs.core.IndexedSeq(G__6674__a,0,null);
} 
return G__6673__delegate.call(this,args);};
G__6673.cljs$lang$maxFixedArity = 0;
G__6673.cljs$lang$applyTo = (function (arglist__6675){
var args = cljs.core.seq(arglist__6675);
return G__6673__delegate(args);
});
G__6673.cljs$core$IFn$_invoke$arity$variadic = G__6673__delegate;
return G__6673;
})()
;})(width,height))
:dodgy.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(dodgy.render.render_state))?((function (width,height){
return (function() { 
var G__6676__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dodgy.render.render_state,args);
};
var G__6676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6677__i = 0, G__6677__a = new Array(arguments.length -  0);
while (G__6677__i < G__6677__a.length) {G__6677__a[G__6677__i] = arguments[G__6677__i + 0]; ++G__6677__i;}
  args = new cljs.core.IndexedSeq(G__6677__a,0,null);
} 
return G__6676__delegate.call(this,args);};
G__6676.cljs$lang$maxFixedArity = 0;
G__6676.cljs$lang$applyTo = (function (arglist__6678){
var args = cljs.core.seq(arglist__6678);
return G__6676__delegate(args);
});
G__6676.cljs$core$IFn$_invoke$arity$variadic = G__6676__delegate;
return G__6676;
})()
;})(width,height))
:dodgy.render.render_state)], 0));
});})(width,height))
;
goog.exportSymbol('dodgy.core.dodgy', dodgy.core.dodgy);

if(cljs.core.truth_(cljs.core.some(((function (width,height){
return (function (p1__5625__5626__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5625__5626__auto__);
});})(width,height))
,null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,dodgy.core.dodgy,cljs.core.cst$kw$host_DASH_id,"dodgy"], null));
}
});
goog.exportSymbol('dodgy.core.run_sketch', dodgy.core.run_sketch);
