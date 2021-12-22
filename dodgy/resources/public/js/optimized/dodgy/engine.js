// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('dodgy.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
/**
 * Returns the rectangle representing the bounds of a size 20 square entity.
 */
dodgy.engine.entity_bounds = (function dodgy$engine$entity_bounds(p__6555){
var map__6556 = p__6555;
var map__6556__$1 = (((((!((map__6556 == null))))?(((((map__6556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6556):map__6556);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6556__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6556__$1,cljs.core.cst$kw$y);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (20)),x,(y - (20)),y], null);
});
/**
 * Whether the two given rectangles intersect.
 */
dodgy.engine.intersect_QMARK_ = (function dodgy$engine$intersect_QMARK_(p__6558,p__6559){
var vec__6560 = p__6558;
var axmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6560,(0),null);
var axmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6560,(1),null);
var aymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6560,(2),null);
var aymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6560,(3),null);
var vec__6563 = p__6559;
var bxmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6563,(0),null);
var bxmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6563,(1),null);
var bymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6563,(2),null);
var bymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6563,(3),null);
return (((aymax >= bymin)) && ((aymin <= bymax)) && ((axmax >= bxmin)) && ((axmin <= bxmax)));
});
/**
 * Returns whether the player has stayed clear of the walls and enemies.
 */
dodgy.engine.player_alive_QMARK_ = (function dodgy$engine$player_alive_QMARK_(player,min_x,max_x,min_y,max_y,enemies){
return ((dodgy.engine.intersect_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(player),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(player),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(player),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_x,max_x,min_y,max_y], null))) && (cljs.core.not_any_QMARK_((function (enemy_color){
return dodgy.engine.intersect_QMARK_(dodgy.engine.entity_bounds(player),dodgy.engine.entity_bounds(enemy_color));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (point){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point) + (cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(point) * speed)),cljs.core.cst$kw$speed_DASH_mul,cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(point)], null);
}),dodgy.engine.gc_entities(max_y,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (point){
return (!(dodgy.engine.intersect_QMARK_(dodgy.engine.entity_bounds(player),dodgy.engine.entity_bounds(point))));
}),point_squares)));
});
/**
 * Updates the positions of each enemy-color.
 */
dodgy.engine.update_enemy_pos = (function dodgy$engine$update_enemy_pos(max_y,enemies,speed){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (enemy_color){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy_color),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy_color) + (cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(enemy_color) * speed)),cljs.core.cst$kw$speed_DASH_mul,cljs.core.cst$kw$speed_DASH_mul.cljs$core$IFn$_invoke$arity$1(enemy_color)], null);
}),dodgy.engine.gc_entities(max_y,enemies));
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
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2(min_x,max_x),cljs.core.cst$kw$y,(min_y - (20)),cljs.core.cst$kw$speed_DASH_mul,quil.core.random.cljs$core$IFn$_invoke$arity$2(1.5,0.5)], null);
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
 * Updates the score-color of the player.
 */
dodgy.engine.update_score = (function dodgy$engine$update_score(player,score_color,point_squares){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,point){
if(dodgy.engine.intersect_QMARK_(dodgy.engine.entity_bounds(player),dodgy.engine.entity_bounds(point))){
return (acc + (1));
} else {
return (acc + (0));
}
}),score_color,point_squares);
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dodgy.engine.update_point_square_pos(player,max_y,point_squares,speed),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.random.cljs$core$IFn$_invoke$arity$2(min_x,max_x),cljs.core.cst$kw$y,(min_y - (20)),cljs.core.cst$kw$speed_DASH_mul,quil.core.random.cljs$core$IFn$_invoke$arity$2(1.5,0.5)], null));
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
