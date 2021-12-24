// Compiled by ClojureScript 1.10.520 {}
goog.provide('dodgy.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('reagent.cookies');
goog.require('dodgy.render');
goog.require('dodgy.stages');
dodgy.core.default_player_position = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-20),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null);
dodgy.core.setup = (function dodgy$core$setup(){
quil.core.frame_rate.call(null,(30));

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"max-score","max-score",-1665682712),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"point-squares","point-squares",-1813917782),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.Keyword(null,"text","text",-1790561697)],["title",(0),(0),(0),cljs.core.PersistentVector.EMPTY,(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-20),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),(0),cljs.core.PersistentVector.EMPTY,["DODGY - a game about dodging squares.\n","Max score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.cookies.get.call(null,new cljs.core.Keyword(null,"max-score","max-score",-1665682712),(0))),"\n","\n","Controls:\n","- The arrow keys control acceleration.\n","\n","Rules:\n","- Hitting orange squares ends the game.\n","- Hitting purple squares increments the score counter.\n","- The longer you play the more frequently orange squares spawn.\n","- The squares move at the output of a function of your speed.\n","\n","Good luck!\n","Press any key to continue..."].join('')]);
});
dodgy.core.run_sketch = (function dodgy$core$run_sketch(){
var width = (window.innerWidth - (15));
var height = (window.innerHeight - (20));
dodgy.core.dodgy = ((function (width,height){
return (function dodgy$core$run_sketch_$_dodgy(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"dodgy",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,dodgy.stages.update_stage_state))?((function (width,height){
return (function() { 
var G__40851__delegate = function (args){
return cljs.core.apply.call(null,dodgy.stages.update_stage_state,args);
};
var G__40851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40852__i = 0, G__40852__a = new Array(arguments.length -  0);
while (G__40852__i < G__40852__a.length) {G__40852__a[G__40852__i] = arguments[G__40852__i + 0]; ++G__40852__i;}
  args = new cljs.core.IndexedSeq(G__40852__a,0,null);
} 
return G__40851__delegate.call(this,args);};
G__40851.cljs$lang$maxFixedArity = 0;
G__40851.cljs$lang$applyTo = (function (arglist__40853){
var args = cljs.core.seq(arglist__40853);
return G__40851__delegate(args);
});
G__40851.cljs$core$IFn$_invoke$arity$variadic = G__40851__delegate;
return G__40851;
})()
;})(width,height))
:dodgy.stages.update_stage_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,dodgy.core.setup))?((function (width,height){
return (function() { 
var G__40854__delegate = function (args){
return cljs.core.apply.call(null,dodgy.core.setup,args);
};
var G__40854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40855__i = 0, G__40855__a = new Array(arguments.length -  0);
while (G__40855__i < G__40855__a.length) {G__40855__a[G__40855__i] = arguments[G__40855__i + 0]; ++G__40855__i;}
  args = new cljs.core.IndexedSeq(G__40855__a,0,null);
} 
return G__40854__delegate.call(this,args);};
G__40854.cljs$lang$maxFixedArity = 0;
G__40854.cljs$lang$applyTo = (function (arglist__40856){
var args = cljs.core.seq(arglist__40856);
return G__40854__delegate(args);
});
G__40854.cljs$core$IFn$_invoke$arity$variadic = G__40854__delegate;
return G__40854;
})()
;})(width,height))
:dodgy.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,dodgy.render.render_state))?((function (width,height){
return (function() { 
var G__40857__delegate = function (args){
return cljs.core.apply.call(null,dodgy.render.render_state,args);
};
var G__40857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40858__i = 0, G__40858__a = new Array(arguments.length -  0);
while (G__40858__i < G__40858__a.length) {G__40858__a[G__40858__i] = arguments[G__40858__i + 0]; ++G__40858__i;}
  args = new cljs.core.IndexedSeq(G__40858__a,0,null);
} 
return G__40857__delegate.call(this,args);};
G__40857.cljs$lang$maxFixedArity = 0;
G__40857.cljs$lang$applyTo = (function (arglist__40859){
var args = cljs.core.seq(arglist__40859);
return G__40857__delegate(args);
});
G__40857.cljs$core$IFn$_invoke$arity$variadic = G__40857__delegate;
return G__40857;
})()
;})(width,height))
:dodgy.render.render_state));
});})(width,height))
;
goog.exportSymbol('dodgy.core.dodgy', dodgy.core.dodgy);

if(cljs.core.truth_(cljs.core.some.call(null,((function (width,height){
return (function (p1__36593__36594__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__36593__36594__auto__);
});})(width,height))
,null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),dodgy.core.dodgy,new cljs.core.Keyword(null,"host-id","host-id",742376279),"dodgy"], null));
}
});
goog.exportSymbol('dodgy.core.run_sketch', dodgy.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1640331882016
