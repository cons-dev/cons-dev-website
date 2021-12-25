// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('dodgy.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
/**
 * Returns the rectangle representing the bounds of a size 20 square entity.
 */
dodgy.engine.entity_bounds = (function dodgy$engine$entity_bounds(p__7107){
var map__7108 = p__7107;
var map__7108__$1 = (((((!((map__7108 == null))))?(((((map__7108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7108):map__7108);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7108__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7108__$1,cljs.core.cst$kw$y);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (20)),x,(y - (20)),y], null);
});
/**
 * Whether the two given rectangles intersect.
 */
dodgy.engine.intersect_QMARK_ = (function dodgy$engine$intersect_QMARK_(p__7110,p__7111){
var vec__7112 = p__7110;
var axmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7112,(0),null);
var axmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7112,(1),null);
var aymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7112,(2),null);
var aymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7112,(3),null);
var vec__7115 = p__7111;
var bxmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7115,(0),null);
var bxmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7115,(1),null);
var bymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7115,(2),null);
var bymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7115,(3),null);
return (((aymax >= bymin)) && ((aymin <= bymax)) && ((axmax >= bxmin)) && ((axmin <= bxmax)));
});
/**
 * Returns whether the player has stayed clear of the walls and enemies.
 */
dodgy.engine.player_alive_QMARK_ = (function dodgy$engine$player_alive_QMARK_(player,min_x,max_x,min_y,max_y,enemies){
return ((dodgy.engine.intersect_QMARK_(dodgy.engine.entity_bounds(player),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_x,max_x,min_y,max_y], null))) && (cljs.core.not_any_QMARK_((function (enemy){
return dodgy.engine.intersect_QMARK_(dodgy.engine.entity_bounds(player),dodgy.engine.entity_bounds(enemy));
}),enemies)));
});
/**
 * Filters out out of bounds entities.
 */
dodgy.engine.gc_entities = (function dodgy$engine$gc_entities(max_y,entities){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ent){
var ent_y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(ent);
return (ent_y <= (max_y + (30)));
}),entities);
});
/**
 * Updates the position of the point dodgy.
 */
dodgy.engine.update_point_square_pos = (function dodgy$engine$update_point_square_pos(player,max_y,point_squares,speed){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7118){
var map__7119 = p__7118;
var map__7119__$1 = (((((!((map__7119 == null))))?(((((map__7119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7119):map__7119);
var point = map__7119__$1;
var mov_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7119__$1,cljs.core.cst$kw$mov_DASH_fn);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mov_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,speed], null));
}),dodgy.engine.gc_entities(max_y,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (point){
return (!(dodgy.engine.intersect_QMARK_(dodgy.engine.entity_bounds(player),dodgy.engine.entity_bounds(point))));
}),point_squares)));
});
/**
 * Updates the positions of each enemy.
 */
dodgy.engine.update_enemy_pos = (function dodgy$engine$update_enemy_pos(max_y,enemies,speed){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7121){
var map__7122 = p__7121;
var map__7122__$1 = (((((!((map__7122 == null))))?(((((map__7122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7122):map__7122);
var enemy = map__7122__$1;
var mov_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7122__$1,cljs.core.cst$kw$mov_DASH_fn);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mov_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enemy,speed], null));
}),dodgy.engine.gc_entities(max_y,enemies));
});
dodgy.engine.gen_mov_fn = (function dodgy$engine$gen_mov_fn(){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.rand_nth(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (mul,p__7124,speed){
var map__7125 = p__7124;
var map__7125__$1 = (((((!((map__7125 == null))))?(((((map__7125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7125):map__7125);
var e = map__7125__$1;
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7125__$1,cljs.core.cst$kw$y);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,((Math.pow(speed,1.2) * mul) + y)], null)], 0));
}),(function (mul,p__7127,speed){
var map__7128 = p__7127;
var map__7128__$1 = (((((!((map__7128 == null))))?(((((map__7128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7128):map__7128);
var e = map__7128__$1;
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7128__$1,cljs.core.cst$kw$y);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,((Math.pow(speed,1.1) * mul) + y)], null)], 0));
}),(function (mul,p__7130,speed){
var map__7131 = p__7130;
var map__7131__$1 = (((((!((map__7131 == null))))?(((((map__7131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7131):map__7131);
var e = map__7131__$1;
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7131__$1,cljs.core.cst$kw$y);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,((Math.pow(speed,1.3) * mul) + y)], null)], 0));
}),(function (mul,p__7133,speed){
var map__7134 = p__7133;
var map__7134__$1 = (((((!((map__7134 == null))))?(((((map__7134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7134):map__7134);
var e = map__7134__$1;
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7134__$1,cljs.core.cst$kw$y);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,((speed * mul) + y)], null)], 0));
}),(function (mul,p__7136,speed){
var map__7137 = p__7136;
var map__7137__$1 = (((((!((map__7137 == null))))?(((((map__7137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7137):map__7137);
var e = map__7137__$1;
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7137__$1,cljs.core.cst$kw$y);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y,((((speed * y) * mul) * 0.5) + y)], null)], 0));
})], null)),quil.core.random.cljs$core$IFn$_invoke$arity$2(1.5,0.5));
});
/**
 * Generates enemies and updates their positions.
 */
dodgy.engine.gen_enemies = (function dodgy$engine$gen_enemies(min_x,max_x,min_y,max_y,time,speed,enemies){
var spawn_freq = ((60) / (((((10) + time) / (500)) + (1)) * (quil.core.width() / (700))));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(time,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (spawn_freq | (0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})())) && (((100) < time)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(dodgy.engine.update_enemy_pos(max_y,enemies,speed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (spawn_freq){
return (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2(min_x,max_x),cljs.core.cst$kw$y,(min_y - (20)),cljs.core.cst$kw$mov_DASH_fn,dodgy.engine.gen_mov_fn()], null);
});})(spawn_freq))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (((1) / spawn_freq) | (0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),(1))));
} else {
return dodgy.engine.update_enemy_pos(max_y,enemies,speed);
}
});
/**
 * Updates the score of the player.
 */
dodgy.engine.update_score = (function dodgy$engine$update_score(player,score,point_squares){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,point){
if(dodgy.engine.intersect_QMARK_(dodgy.engine.entity_bounds(player),dodgy.engine.entity_bounds(point))){
return (acc + (1));
} else {
return (acc + (0));
}
}),score,point_squares);
});
/**
 * This calculates when the enemies should be spawned in the game.
 *   the spawn frequency calculation computes the frequency with which
 *   enemies will spawn.
 */
dodgy.engine.gen_point_squares = (function dodgy$engine$gen_point_squares(player,min_x,max_x,min_y,max_y,point_squares,speed,time){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(time,(((128) / (quil.core.width() / (700))) | (0))))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})())))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dodgy.engine.update_point_square_pos(player,max_y,point_squares,speed),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2(min_x,max_x),cljs.core.cst$kw$y,(min_y - (20)),cljs.core.cst$kw$mov_DASH_fn,dodgy.engine.gen_mov_fn()], null));
} else {
return dodgy.engine.update_point_square_pos(player,max_y,point_squares,speed);
}
});
/**
 * This updates the player state.
 */
dodgy.engine.update_player = (function dodgy$engine$update_player(player_speed_x,player_speed_y,player_x,player_y){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(player_x + player_speed_x),cljs.core.cst$kw$y,(player_y + player_speed_y),cljs.core.cst$kw$speed_DASH_x,player_speed_x,cljs.core.cst$kw$speed_DASH_y,player_speed_y], null);
});
