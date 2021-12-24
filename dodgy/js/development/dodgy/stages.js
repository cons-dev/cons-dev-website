// Compiled by ClojureScript 1.10.520 {}
goog.provide('dodgy.stages');
goog.require('cljs.core');
goog.require('dodgy.input');
goog.require('dodgy.engine');
goog.require('reagent.cookies');
goog.require('quil.core');
/**
 * The initial stage of the game where the title is displayed.
 */
dodgy.stages.title_stage = (function dodgy$stages$title_stage(state){
return cljs.core.merge.call(null,state,(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stage","stage",1843544772),"game"], null):null));
});
/**
 * The function that executes during the game stage.
 */
dodgy.stages.game_stage = (function dodgy$stages$game_stage(p__40827){
var map__40828 = p__40827;
var map__40828__$1 = (((((!((map__40828 == null))))?(((((map__40828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40828):map__40828);
var state = map__40828__$1;
var enemies = cljs.core.get.call(null,map__40828__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
var map__40829 = cljs.core.get.call(null,map__40828__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var map__40829__$1 = (((((!((map__40829 == null))))?(((((map__40829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40829):map__40829);
var player = map__40829__$1;
var player_x = cljs.core.get.call(null,map__40829__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var player_y = cljs.core.get.call(null,map__40829__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var player_speed_x = cljs.core.get.call(null,map__40829__$1,new cljs.core.Keyword(null,"speed-x","speed-x",1659280388));
var player_speed_y = cljs.core.get.call(null,map__40829__$1,new cljs.core.Keyword(null,"speed-y","speed-y",21921581));
var time = cljs.core.get.call(null,map__40828__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var score = cljs.core.get.call(null,map__40828__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var point_squares = cljs.core.get.call(null,map__40828__$1,new cljs.core.Keyword(null,"point-squares","point-squares",-1813917782));
var distance = cljs.core.get.call(null,map__40828__$1,"distance");
return cljs.core.merge.call(null,state,(function (){var new_player_speed_x = (player_speed_x + dodgy.input.get_x_accel.call(null));
var new_player_speed_y = (player_speed_y + dodgy.input.get_y_accel.call(null));
var min_x = (- (quil.core.width.call(null) / (2)));
var max_x = ((quil.core.width.call(null) / (2)) - (20));
var min_y = (- (quil.core.height.call(null) / (2)));
var max_y = ((quil.core.height.call(null) / (2)) - (20));
var speed = quil.core.sqrt.call(null,(quil.core.pow.call(null,new_player_speed_x,(2)) + quil.core.pow.call(null,new_player_speed_y,(2))));
if(dodgy.engine.player_alive_QMARK_.call(null,player,min_x,max_x,min_y,max_y,enemies)){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"max-score","max-score",-1665682712),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"point-squares","point-squares",-1813917782),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"enemies","enemies",2114285722),new cljs.core.Keyword(null,"text","text",-1790561697)],[speed,new cljs.core.Keyword(null,"max-score","max-score",-1665682712).cljs$core$IFn$_invoke$arity$1(state),(time + (1)),dodgy.engine.gen_point_squares.call(null,player,min_x,max_x,min_y,max_y,point_squares,speed,time),dodgy.engine.update_score.call(null,player,score,point_squares),dodgy.engine.update_player.call(null,new_player_speed_x,new_player_speed_y,player_x,player_y),(distance + speed),dodgy.engine.gen_enemies.call(null,min_x,max_x,min_y,max_y,time,speed,enemies),["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state)),"\n","Frame: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state)),"\n","Speed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(state).toFixed((1)))].join('')]);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ignore-keypress","ignore-keypress",-1432330114),true,new cljs.core.Keyword(null,"screen-time","screen-time",-444900532),(0),new cljs.core.Keyword(null,"stage","stage",1843544772),"score"], null);
}
})());
});
dodgy.stages.score_stage = (function dodgy$stages$score_stage(p__40832){
var map__40833 = p__40832;
var map__40833__$1 = (((((!((map__40833 == null))))?(((((map__40833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40833):map__40833);
var state = map__40833__$1;
var ignore_keypress = cljs.core.get.call(null,map__40833__$1,new cljs.core.Keyword(null,"ignore-keypress","ignore-keypress",-1432330114));
var score = cljs.core.get.call(null,map__40833__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var time = cljs.core.get.call(null,map__40833__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var distance = cljs.core.get.call(null,map__40833__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var screen_time = cljs.core.get.call(null,map__40833__$1,new cljs.core.Keyword(null,"screen-time","screen-time",-444900532));
return cljs.core.merge.call(null,state,(function (){var restart = ((cljs.core.not.call(null,ignore_keypress))?quil.core.key_pressed_QMARK_.call(null):false);
var new_max_score = (function (){var x__4219__auto__ = reagent.cookies.get.call(null,new cljs.core.Keyword(null,"max-score","max-score",-1665682712),(0));
var y__4220__auto__ = score;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
reagent.cookies.set_BANG_.call(null,new cljs.core.Keyword(null,"max-score","max-score",-1665682712),new_max_score,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-age","max-age",-270129271),Math.pow((2),(31))], null));

if(cljs.core.not.call(null,restart)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),["GAME OVER\n","Frames: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time),"\n","Distance: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((distance | (0))),"\n","Max score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_max_score),"\n","Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score),((((60) < screen_time))?"\n\nPRESS ANY KEY TO CONTINUE...":null)].join(''),new cljs.core.Keyword(null,"screen-time","screen-time",-444900532),(screen_time + (1)),new cljs.core.Keyword(null,"ignore-keypress","ignore-keypress",-1432330114),(cljs.core.truth_((function (){var or__4131__auto__ = quil.core.key_pressed_QMARK_.call(null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((30) > screen_time);
}
})())?ignore_keypress:false),new cljs.core.Keyword(null,"speed","speed",1257663751),(0)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-20),new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"point-squares","point-squares",-1813917782),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"time","time",1385887882),(0),new cljs.core.Keyword(null,"distance","distance",-1671893894),(0),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"stage","stage",1843544772),"game"], null);
}
})());
});
dodgy.stages.update_stage_state = (function dodgy$stages$update_stage_state(state){
var G__40835 = new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(state);
switch (G__40835) {
case "title":
return dodgy.stages.title_stage.call(null,state);

break;
case "game":
return dodgy.stages.game_stage.call(null,state);

break;
case "score":
return dodgy.stages.score_stage.call(null,state);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40835)].join('')));

}
});

//# sourceMappingURL=stages.js.map?rel=1640331881979
