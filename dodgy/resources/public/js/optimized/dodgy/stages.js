// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('dodgy.stages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dodgy.input');
goog.require('dodgy.engine');
goog.require('quil.core');
/**
 * The initial stage of the game where the title is displayed.
 */
dodgy.stages.title_stage = (function dodgy$stages$title_stage(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,(cljs.core.truth_(quil.core.key_pressed_QMARK_())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stage,"game"], null):null)], 0));
});
/**
 * The function that executes during the game stage.
 */
dodgy.stages.game_stage = (function dodgy$stages$game_stage(p__6570){
var map__6571 = p__6570;
var map__6571__$1 = (((((!((map__6571 == null))))?(((((map__6571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6571):map__6571);
var state = map__6571__$1;
var enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6571__$1,cljs.core.cst$kw$enemies);
var map__6572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6571__$1,cljs.core.cst$kw$player);
var map__6572__$1 = (((((!((map__6572 == null))))?(((((map__6572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6572):map__6572);
var player = map__6572__$1;
var player_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6572__$1,cljs.core.cst$kw$x);
var player_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6572__$1,cljs.core.cst$kw$y);
var player_speed_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6572__$1,cljs.core.cst$kw$speed_DASH_x);
var player_speed_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6572__$1,cljs.core.cst$kw$speed_DASH_y);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6571__$1,cljs.core.cst$kw$time);
var score_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6571__$1,cljs.core.cst$kw$score_DASH_color);
var point_squares = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6571__$1,cljs.core.cst$kw$point_DASH_squares);
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6571__$1,"distance");
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,(function (){var new_player_speed_x = (player_speed_x + dodgy.input.get_x_accel());
var new_player_speed_y = (player_speed_y + dodgy.input.get_y_accel());
var min_x = (- (quil.core.width() / (2)));
var max_x = ((quil.core.width() / (2)) - (20));
var min_y = (- (quil.core.height() / (2)));
var max_y = ((quil.core.height() / (2)) - (20));
var speed = quil.core.sqrt((quil.core.pow(new_player_speed_x,(2)) + quil.core.pow(new_player_speed_y,(2))));
if(dodgy.engine.player_alive_QMARK_(player,min_x,max_x,min_y,max_y,enemies)){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$speed,cljs.core.cst$kw$max_DASH_score,cljs.core.cst$kw$time,cljs.core.cst$kw$point_DASH_squares,cljs.core.cst$kw$score_DASH_color,cljs.core.cst$kw$player,cljs.core.cst$kw$distance,cljs.core.cst$kw$enemies,cljs.core.cst$kw$text],[speed,cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state),(time + (1)),dodgy.engine.gen_point_squares(player,min_x,max_x,min_y,max_y,point_squares,speed,time),dodgy.engine.update_score(player,score_color,point_squares),dodgy.engine.update_player(new_player_speed_x,new_player_speed_y,player_x,player_y),(distance + speed),dodgy.engine.gen_enemies(min_x,max_x,min_y,max_y,time,speed,enemies),["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$score_DASH_color.cljs$core$IFn$_invoke$arity$1(state)),"\n","Frame: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state)),"\n","Speed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$speed.cljs$core$IFn$_invoke$arity$1(state).toFixed((1)))].join('')]);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ignore_DASH_keypress,true,cljs.core.cst$kw$screen_DASH_time,(0),cljs.core.cst$kw$stage,"score-color"], null);
}
})()], 0));
});
dodgy.stages.score_stage = (function dodgy$stages$score_stage(state){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,(function (){var restart = ((cljs.core.not(cljs.core.cst$kw$ignore_DASH_keypress.cljs$core$IFn$_invoke$arity$1(state)))?quil.core.key_pressed_QMARK_():false);
var max_score = (function (){var x__4219__auto__ = cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state);
var y__4220__auto__ = cljs.core.cst$kw$score_DASH_color.cljs$core$IFn$_invoke$arity$1(state);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
if(cljs.core.not(restart)){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$text,["GAME OVER\n","Frames: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(state)),"\n","Distance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$distance.cljs$core$IFn$_invoke$arity$1(state) | (0))),"\n","Max score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max_DASH_score.cljs$core$IFn$_invoke$arity$1(state)),"\n","Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$score_DASH_color.cljs$core$IFn$_invoke$arity$1(state)),((((60) < cljs.core.cst$kw$screen_DASH_time.cljs$core$IFn$_invoke$arity$1(state)))?"\n\nPRESS ANY KEY TO CONTINUE...":null)].join(''),cljs.core.cst$kw$screen_DASH_time,(cljs.core.cst$kw$screen_DASH_time.cljs$core$IFn$_invoke$arity$1(state) + (1)),cljs.core.cst$kw$ignore_DASH_keypress,(cljs.core.truth_((function (){var or__4131__auto__ = quil.core.key_pressed_QMARK_();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((30) > cljs.core.cst$kw$screen_DASH_time.cljs$core$IFn$_invoke$arity$1(state));
}
})())?cljs.core.cst$kw$ignore_DASH_keypress.cljs$core$IFn$_invoke$arity$1(state):false),cljs.core.cst$kw$speed,(0),cljs.core.cst$kw$max_DASH_score,max_score], null);
} else {
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$player,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(-20),cljs.core.cst$kw$y,(20)], null),cljs.core.cst$kw$enemies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$point_DASH_squares,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$time,(0),cljs.core.cst$kw$distance,(0),cljs.core.cst$kw$score_DASH_color,(0),cljs.core.cst$kw$stage,"game"], null);
}
})()], 0));
});
dodgy.stages.update_stage_state = (function dodgy$stages$update_stage_state(state){
var G__6575 = cljs.core.cst$kw$stage.cljs$core$IFn$_invoke$arity$1(state);
switch (G__6575) {
case "title":
return dodgy.stages.title_stage(state);

break;
case "game":
return dodgy.stages.game_stage(state);

break;
case "score-color":
return dodgy.stages.score_stage(state);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6575)].join('')));

}
});
