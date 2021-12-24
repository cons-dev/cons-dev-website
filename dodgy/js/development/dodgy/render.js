// Compiled by ClojureScript 1.10.520 {}
goog.provide('dodgy.render');
goog.require('cljs.core');
goog.require('quil.core');
dodgy.render.enemy_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(127),(23)], null);
dodgy.render.score_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(31),(163)], null);
dodgy.render.player_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(229),(57),(53)], null);
dodgy.render.bg = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null);
dodgy.render.render_square = (function dodgy$render$render_square(p__40839,thickness,size,p__40840){
var vec__40841 = p__40839;
var r = cljs.core.nth.call(null,vec__40841,(0),null);
var g = cljs.core.nth.call(null,vec__40841,(1),null);
var b = cljs.core.nth.call(null,vec__40841,(2),null);
var map__40844 = p__40840;
var map__40844__$1 = (((((!((map__40844 == null))))?(((((map__40844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40844):map__40844);
var x = cljs.core.get.call(null,map__40844__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__40844__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inner = (size - (thickness * (2)));
quil.core.fill.call(null,r,g,b);

return quil.core.rect.call(null,x,y,size,size);
});
dodgy.render.render_entities = (function dodgy$render$render_entities(p__40846){
var map__40847 = p__40846;
var map__40847__$1 = (((((!((map__40847 == null))))?(((((map__40847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40847):map__40847);
var spawned_QMARK_ = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"spawned?","spawned?",623337120));
var player = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var enemies = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
var point_squares = cljs.core.get.call(null,map__40847__$1,new cljs.core.Keyword(null,"point-squares","point-squares",-1813917782));
quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(spawned_QMARK_),(100),(100));

var tr__36999__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__36999__auto__);

cljs.core.dorun.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,dodgy.render.render_square,dodgy.render.score_color,2.5,(20)),point_squares));

cljs.core.dorun.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,dodgy.render.render_square,dodgy.render.enemy_color,2.5,(20)),enemies));

return dodgy.render.render_square.call(null,dodgy.render.player_color,2.5,(20),player);
}finally {quil.core.pop_matrix.call(null);
}});
dodgy.render.render_state = (function dodgy$render$render_state(state){
quil.core.background.call(null,(255),(255),(255));

quil.core.stroke.call(null,(255),(255),(255));

dodgy.render.render_entities.call(null,state);

quil.core.fill.call(null,dodgy.render.player_color);

return quil.core.text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state)),((cljs.core._EQ_.call(null,(cljs.core.mod.call(null,quil.core.seconds.call(null),(2)) | (0)),(0)))?"\u2588":"")].join(''),(10),(20));
});

//# sourceMappingURL=render.js.map?rel=1640331881995
