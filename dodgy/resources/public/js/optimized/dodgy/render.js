// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('dodgy.render');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
dodgy.render.enemy_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(127),(23)], null);
dodgy.render.score_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(31),(163)], null);
dodgy.render.player_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(229),(57),(53)], null);
dodgy.render.bg = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null);
dodgy.render.render_square = (function dodgy$render$render_square(p__7155,thickness,size,p__7156){
var vec__7157 = p__7155;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7157,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7157,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7157,(2),null);
var map__7160 = p__7156;
var map__7160__$1 = (((((!((map__7160 == null))))?(((((map__7160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7160):map__7160);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7160__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7160__$1,cljs.core.cst$kw$y);
var inner = (size - (thickness * (2)));
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r,g,b);

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,size,size);
});
dodgy.render.render_entities = (function dodgy$render$render_entities(p__7162){
var map__7163 = p__7162;
var map__7163__$1 = (((((!((map__7163 == null))))?(((((map__7163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7163):map__7163);
var spawned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7163__$1,cljs.core.cst$kw$spawned_QMARK_);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7163__$1,cljs.core.cst$kw$player);
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7163__$1,cljs.core.cst$kw$enemies);
var point_squares = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7163__$1,cljs.core.cst$kw$point_DASH_squares);
quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(spawned_QMARK_),(100),(100));

var tr__7011__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__7011__auto__);

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dodgy.render.render_square,dodgy.render.score_color,2.5,(20)),point_squares));

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dodgy.render.render_square,dodgy.render.enemy_color,2.5,(20)),enemies));

return dodgy.render.render_square(dodgy.render.player_color,2.5,(20),player);
}finally {quil.core.pop_matrix();
}});
dodgy.render.render_state = (function dodgy$render$render_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

dodgy.render.render_entities(state);

quil.core.fill.cljs$core$IFn$_invoke$arity$1(dodgy.render.player_color);

return quil.core.text.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(state)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.mod(quil.core.seconds(),(2)) | (0)),(0)))?"\u2588":"")].join(''),(10),(20));
});
