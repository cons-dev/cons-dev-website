// Compiled by ClojureScript 1.10.520 {}
goog.provide('dodgy.engine');
goog.require('cljs.core');
goog.require('quil.core');
/**
 * Returns the rectangle representing the bounds of a size 20 square entity.
 */
dodgy.engine.entity_bounds = (function dodgy$engine$entity_bounds(p__40791){
var map__40792 = p__40791;
var map__40792__$1 = (((((!((map__40792 == null))))?(((((map__40792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40792):map__40792);
var x = cljs.core.get.call(null,map__40792__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__40792__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (20)),x,(y - (20)),y], null);
});
/**
 * Whether the two given rectangles intersect.
 */
dodgy.engine.intersect_QMARK_ = (function dodgy$engine$intersect_QMARK_(p__40794,p__40795){
var vec__40796 = p__40794;
var axmin = cljs.core.nth.call(null,vec__40796,(0),null);
var axmax = cljs.core.nth.call(null,vec__40796,(1),null);
var aymin = cljs.core.nth.call(null,vec__40796,(2),null);
var aymax = cljs.core.nth.call(null,vec__40796,(3),null);
var vec__40799 = p__40795;
var bxmin = cljs.core.nth.call(null,vec__40799,(0),null);
var bxmax = cljs.core.nth.call(null,vec__40799,(1),null);
var bymin = cljs.core.nth.call(null,vec__40799,(2),null);
var bymax = cljs.core.nth.call(null,vec__40799,(3),null);
return (((aymax >= bymin)) && ((aymin <= bymax)) && ((axmax >= bxmin)) && ((axmin <= bxmax)));
});
/**
 * Returns whether the player has stayed clear of the walls and enemies.
 */
dodgy.engine.player_alive_QMARK_ = (function dodgy$engine$player_alive_QMARK_(player,min_x,max_x,min_y,max_y,enemies){
return ((dodgy.engine.intersect_QMARK_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(player)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [min_x,max_x,min_y,max_y], null))) && (cljs.core.not_any_QMARK_.call(null,(function (enemy){
return dodgy.engine.intersect_QMARK_.call(null,dodgy.engine.entity_bounds.call(null,player),dodgy.engine.entity_bounds.call(null,enemy));
}),enemies)));
});
/**
 * Filters out out of bounds entities.
 */
dodgy.engine.gc_entities = (function dodgy$engine$gc_entities(max_y,entities){
return cljs.core.filter.call(null,(function (ent){
var ent_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ent);
return (ent_y <= (max_y + (30)));
}),entities);
});
/**
 * Updates the position of the point dodgy.
 */
dodgy.engine.update_point_square_pos = (function dodgy$engine$update_point_square_pos(player,max_y,point_squares,speed){
return cljs.core.map.call(null,(function (p__40802){
var map__40803 = p__40802;
var map__40803__$1 = (((((!((map__40803 == null))))?(((((map__40803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40803):map__40803);
var point = map__40803__$1;
var mov_fn = cljs.core.get.call(null,map__40803__$1,new cljs.core.Keyword(null,"mov-fn","mov-fn",-1755506319));
return cljs.core.apply.call(null,mov_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point,speed], null));
}),dodgy.engine.gc_entities.call(null,max_y,cljs.core.filter.call(null,(function (point){
return (!(dodgy.engine.intersect_QMARK_.call(null,dodgy.engine.entity_bounds.call(null,player),dodgy.engine.entity_bounds.call(null,point))));
}),point_squares)));
});
/**
 * Updates the positions of each enemy.
 */
dodgy.engine.update_enemy_pos = (function dodgy$engine$update_enemy_pos(max_y,enemies,speed){
return cljs.core.map.call(null,(function (p__40805){
var map__40806 = p__40805;
var map__40806__$1 = (((((!((map__40806 == null))))?(((((map__40806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40806):map__40806);
var enemy = map__40806__$1;
var mov_fn = cljs.core.get.call(null,map__40806__$1,new cljs.core.Keyword(null,"mov-fn","mov-fn",-1755506319));
return cljs.core.apply.call(null,mov_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enemy,speed], null));
}),dodgy.engine.gc_entities.call(null,max_y,enemies));
});
dodgy.engine.gen_mov_fn = (function dodgy$engine$gen_mov_fn(){
return cljs.core.partial.call(null,cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (mul,p__40808,speed){
var map__40809 = p__40808;
var map__40809__$1 = (((((!((map__40809 == null))))?(((((map__40809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40809):map__40809);
var e = map__40809__$1;
var y = cljs.core.get.call(null,map__40809__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.merge.call(null,e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),((Math.pow(speed,1.2) * mul) + y)], null));
}),(function (mul,p__40811,speed){
var map__40812 = p__40811;
var map__40812__$1 = (((((!((map__40812 == null))))?(((((map__40812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40812):map__40812);
var e = map__40812__$1;
var y = cljs.core.get.call(null,map__40812__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.merge.call(null,e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),((Math.pow(speed,1.1) * mul) + y)], null));
}),(function (mul,p__40814,speed){
var map__40815 = p__40814;
var map__40815__$1 = (((((!((map__40815 == null))))?(((((map__40815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40815):map__40815);
var e = map__40815__$1;
var y = cljs.core.get.call(null,map__40815__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.merge.call(null,e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),((Math.pow(speed,1.3) * mul) + y)], null));
}),(function (mul,p__40817,speed){
var map__40818 = p__40817;
var map__40818__$1 = (((((!((map__40818 == null))))?(((((map__40818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40818):map__40818);
var e = map__40818__$1;
var y = cljs.core.get.call(null,map__40818__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.merge.call(null,e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),((speed * mul) + y)], null));
}),(function (mul,p__40820,speed){
var map__40821 = p__40820;
var map__40821__$1 = (((((!((map__40821 == null))))?(((((map__40821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40821):map__40821);
var e = map__40821__$1;
var y = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.merge.call(null,e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),((((speed * y) * mul) * 0.5) + y)], null));
})], null)),quil.core.random.call(null,1.5,0.5));
});
/**
 * Generates enemies and updates their positions.
 */
dodgy.engine.gen_enemies = (function dodgy$engine$gen_enemies(min_x,max_x,min_y,max_y,time,speed,enemies){
var spawn_freq = ((60) / (((((10) + time) / (500)) + (1)) * (quil.core.width.call(null) / (700))));
if(((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,time,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (spawn_freq | (0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})())) && (((100) < time)))){
return cljs.core.concat.call(null,dodgy.engine.update_enemy_pos.call(null,max_y,enemies,speed),cljs.core.map.call(null,((function (spawn_freq){
return (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,min_x,max_x),new cljs.core.Keyword(null,"y","y",-1757859776),(min_y - (20)),new cljs.core.Keyword(null,"mov-fn","mov-fn",-1755506319),dodgy.engine.gen_mov_fn.call(null)], null);
});})(spawn_freq))
,cljs.core.repeat.call(null,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (((1) / spawn_freq) | (0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),(1))));
} else {
return dodgy.engine.update_enemy_pos.call(null,max_y,enemies,speed);
}
});
/**
 * Updates the score of the player.
 */
dodgy.engine.update_score = (function dodgy$engine$update_score(player,score,point_squares){
return cljs.core.reduce.call(null,(function (acc,point){
if(dodgy.engine.intersect_QMARK_.call(null,dodgy.engine.entity_bounds.call(null,player),dodgy.engine.entity_bounds.call(null,point))){
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
if(((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,time,(((128) / (quil.core.width.call(null) / (700))) | (0))))) && ((0.4 < (function (){var x__4219__auto__ = speed;
var y__4220__auto__ = (- speed);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})())))){
return cljs.core.conj.call(null,dodgy.engine.update_point_square_pos.call(null,player,max_y,point_squares,speed),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,min_x,max_x),new cljs.core.Keyword(null,"y","y",-1757859776),(min_y - (20)),new cljs.core.Keyword(null,"mov-fn","mov-fn",-1755506319),dodgy.engine.gen_mov_fn.call(null)], null));
} else {
return dodgy.engine.update_point_square_pos.call(null,player,max_y,point_squares,speed);
}
});
/**
 * This updates the player state.
 */
dodgy.engine.update_player = (function dodgy$engine$update_player(player_speed_x,player_speed_y,player_x,player_y){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(player_x + player_speed_x),new cljs.core.Keyword(null,"y","y",-1757859776),(player_y + player_speed_y),new cljs.core.Keyword(null,"speed-x","speed-x",1659280388),player_speed_x,new cljs.core.Keyword(null,"speed-y","speed-y",21921581),player_speed_y], null);
});

//# sourceMappingURL=engine.js.map?rel=1640331881941
