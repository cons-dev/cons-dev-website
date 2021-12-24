// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e36043){if((e36043 instanceof Error)){
var e = e36043;
return "Error: Unable to stringify";
} else {
throw e36043;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36046 = arguments.length;
switch (G__36046) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36044_SHARP_){
if(typeof p1__36044_SHARP_ === 'string'){
return p1__36044_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36044_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36049 = arguments.length;
var i__4731__auto___36050 = (0);
while(true){
if((i__4731__auto___36050 < len__4730__auto___36049)){
args__4736__auto__.push((arguments[i__4731__auto___36050]));

var G__36051 = (i__4731__auto___36050 + (1));
i__4731__auto___36050 = G__36051;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36048){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36048));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36053 = arguments.length;
var i__4731__auto___36054 = (0);
while(true){
if((i__4731__auto___36054 < len__4730__auto___36053)){
args__4736__auto__.push((arguments[i__4731__auto___36054]));

var G__36055 = (i__4731__auto___36054 + (1));
i__4731__auto___36054 = G__36055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36052){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36052));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36056){
var map__36057 = p__36056;
var map__36057__$1 = (((((!((map__36057 == null))))?(((((map__36057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36057):map__36057);
var message = cljs.core.get.call(null,map__36057__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36057__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31650__auto___36136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___36136,ch){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___36136,ch){
return (function (state_36108){
var state_val_36109 = (state_36108[(1)]);
if((state_val_36109 === (7))){
var inst_36104 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36110_36137 = state_36108__$1;
(statearr_36110_36137[(2)] = inst_36104);

(statearr_36110_36137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (1))){
var state_36108__$1 = state_36108;
var statearr_36111_36138 = state_36108__$1;
(statearr_36111_36138[(2)] = null);

(statearr_36111_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (4))){
var inst_36061 = (state_36108[(7)]);
var inst_36061__$1 = (state_36108[(2)]);
var state_36108__$1 = (function (){var statearr_36112 = state_36108;
(statearr_36112[(7)] = inst_36061__$1);

return statearr_36112;
})();
if(cljs.core.truth_(inst_36061__$1)){
var statearr_36113_36139 = state_36108__$1;
(statearr_36113_36139[(1)] = (5));

} else {
var statearr_36114_36140 = state_36108__$1;
(statearr_36114_36140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (15))){
var inst_36068 = (state_36108[(8)]);
var inst_36083 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36068);
var inst_36084 = cljs.core.first.call(null,inst_36083);
var inst_36085 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36084);
var inst_36086 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36085)].join('');
var inst_36087 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36086);
var state_36108__$1 = state_36108;
var statearr_36115_36141 = state_36108__$1;
(statearr_36115_36141[(2)] = inst_36087);

(statearr_36115_36141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (13))){
var inst_36092 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36116_36142 = state_36108__$1;
(statearr_36116_36142[(2)] = inst_36092);

(statearr_36116_36142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (6))){
var state_36108__$1 = state_36108;
var statearr_36117_36143 = state_36108__$1;
(statearr_36117_36143[(2)] = null);

(statearr_36117_36143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (17))){
var inst_36090 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36118_36144 = state_36108__$1;
(statearr_36118_36144[(2)] = inst_36090);

(statearr_36118_36144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (3))){
var inst_36106 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36108__$1,inst_36106);
} else {
if((state_val_36109 === (12))){
var inst_36067 = (state_36108[(9)]);
var inst_36081 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36067,opts);
var state_36108__$1 = state_36108;
if(inst_36081){
var statearr_36119_36145 = state_36108__$1;
(statearr_36119_36145[(1)] = (15));

} else {
var statearr_36120_36146 = state_36108__$1;
(statearr_36120_36146[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (2))){
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36108__$1,(4),ch);
} else {
if((state_val_36109 === (11))){
var inst_36068 = (state_36108[(8)]);
var inst_36073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36074 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36068);
var inst_36075 = cljs.core.async.timeout.call(null,(1000));
var inst_36076 = [inst_36074,inst_36075];
var inst_36077 = (new cljs.core.PersistentVector(null,2,(5),inst_36073,inst_36076,null));
var state_36108__$1 = state_36108;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36108__$1,(14),inst_36077);
} else {
if((state_val_36109 === (9))){
var inst_36068 = (state_36108[(8)]);
var inst_36094 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36095 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36068);
var inst_36096 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36095);
var inst_36097 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36096)].join('');
var inst_36098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36097);
var state_36108__$1 = (function (){var statearr_36121 = state_36108;
(statearr_36121[(10)] = inst_36094);

return statearr_36121;
})();
var statearr_36122_36147 = state_36108__$1;
(statearr_36122_36147[(2)] = inst_36098);

(statearr_36122_36147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (5))){
var inst_36061 = (state_36108[(7)]);
var inst_36063 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36064 = (new cljs.core.PersistentArrayMap(null,2,inst_36063,null));
var inst_36065 = (new cljs.core.PersistentHashSet(null,inst_36064,null));
var inst_36066 = figwheel.client.focus_msgs.call(null,inst_36065,inst_36061);
var inst_36067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36066);
var inst_36068 = cljs.core.first.call(null,inst_36066);
var inst_36069 = figwheel.client.autoload_QMARK_.call(null);
var state_36108__$1 = (function (){var statearr_36123 = state_36108;
(statearr_36123[(8)] = inst_36068);

(statearr_36123[(9)] = inst_36067);

return statearr_36123;
})();
if(cljs.core.truth_(inst_36069)){
var statearr_36124_36148 = state_36108__$1;
(statearr_36124_36148[(1)] = (8));

} else {
var statearr_36125_36149 = state_36108__$1;
(statearr_36125_36149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (14))){
var inst_36079 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36126_36150 = state_36108__$1;
(statearr_36126_36150[(2)] = inst_36079);

(statearr_36126_36150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (16))){
var state_36108__$1 = state_36108;
var statearr_36127_36151 = state_36108__$1;
(statearr_36127_36151[(2)] = null);

(statearr_36127_36151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (10))){
var inst_36100 = (state_36108[(2)]);
var state_36108__$1 = (function (){var statearr_36128 = state_36108;
(statearr_36128[(11)] = inst_36100);

return statearr_36128;
})();
var statearr_36129_36152 = state_36108__$1;
(statearr_36129_36152[(2)] = null);

(statearr_36129_36152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (8))){
var inst_36067 = (state_36108[(9)]);
var inst_36071 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36067,opts);
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_36071)){
var statearr_36130_36153 = state_36108__$1;
(statearr_36130_36153[(1)] = (11));

} else {
var statearr_36131_36154 = state_36108__$1;
(statearr_36131_36154[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31650__auto___36136,ch))
;
return ((function (switch__31555__auto__,c__31650__auto___36136,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31556__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31556__auto____0 = (function (){
var statearr_36132 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36132[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31556__auto__);

(statearr_36132[(1)] = (1));

return statearr_36132;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31556__auto____1 = (function (state_36108){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_36108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e36133){if((e36133 instanceof Object)){
var ex__31559__auto__ = e36133;
var statearr_36134_36155 = state_36108;
(statearr_36134_36155[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36156 = state_36108;
state_36108 = G__36156;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31556__auto__ = function(state_36108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31556__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31556__auto____1.call(this,state_36108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31556__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31556__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___36136,ch))
})();
var state__31652__auto__ = (function (){var statearr_36135 = f__31651__auto__.call(null);
(statearr_36135[(6)] = c__31650__auto___36136);

return statearr_36135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___36136,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36157_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36157_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36163 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36163){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36159 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36160 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36161 = true;
var _STAR_print_fn_STAR__temp_val__36162 = ((function (_STAR_print_newline_STAR__orig_val__36159,_STAR_print_fn_STAR__orig_val__36160,_STAR_print_newline_STAR__temp_val__36161,sb,base_path_36163){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__36159,_STAR_print_fn_STAR__orig_val__36160,_STAR_print_newline_STAR__temp_val__36161,sb,base_path_36163))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36161;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36162;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36160;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36159;
}}catch (e36158){if((e36158 instanceof Error)){
var e = e36158;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36163], null));
} else {
var e = e36158;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36163))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36164){
var map__36165 = p__36164;
var map__36165__$1 = (((((!((map__36165 == null))))?(((((map__36165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36165):map__36165);
var opts = map__36165__$1;
var build_id = cljs.core.get.call(null,map__36165__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36165,map__36165__$1,opts,build_id){
return (function (p__36167){
var vec__36168 = p__36167;
var seq__36169 = cljs.core.seq.call(null,vec__36168);
var first__36170 = cljs.core.first.call(null,seq__36169);
var seq__36169__$1 = cljs.core.next.call(null,seq__36169);
var map__36171 = first__36170;
var map__36171__$1 = (((((!((map__36171 == null))))?(((((map__36171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36171):map__36171);
var msg = map__36171__$1;
var msg_name = cljs.core.get.call(null,map__36171__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36169__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36168,seq__36169,first__36170,seq__36169__$1,map__36171,map__36171__$1,msg,msg_name,_,map__36165,map__36165__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36168,seq__36169,first__36170,seq__36169__$1,map__36171,map__36171__$1,msg,msg_name,_,map__36165,map__36165__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36165,map__36165__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36173){
var vec__36174 = p__36173;
var seq__36175 = cljs.core.seq.call(null,vec__36174);
var first__36176 = cljs.core.first.call(null,seq__36175);
var seq__36175__$1 = cljs.core.next.call(null,seq__36175);
var map__36177 = first__36176;
var map__36177__$1 = (((((!((map__36177 == null))))?(((((map__36177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36177):map__36177);
var msg = map__36177__$1;
var msg_name = cljs.core.get.call(null,map__36177__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36175__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36179){
var map__36180 = p__36179;
var map__36180__$1 = (((((!((map__36180 == null))))?(((((map__36180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36180):map__36180);
var on_compile_warning = cljs.core.get.call(null,map__36180__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36180__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36180,map__36180__$1,on_compile_warning,on_compile_fail){
return (function (p__36182){
var vec__36183 = p__36182;
var seq__36184 = cljs.core.seq.call(null,vec__36183);
var first__36185 = cljs.core.first.call(null,seq__36184);
var seq__36184__$1 = cljs.core.next.call(null,seq__36184);
var map__36186 = first__36185;
var map__36186__$1 = (((((!((map__36186 == null))))?(((((map__36186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36186):map__36186);
var msg = map__36186__$1;
var msg_name = cljs.core.get.call(null,map__36186__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36184__$1;
var pred__36188 = cljs.core._EQ_;
var expr__36189 = msg_name;
if(cljs.core.truth_(pred__36188.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36189))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36188.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36189))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36180,map__36180__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__,msg_hist,msg_names,msg){
return (function (state_36278){
var state_val_36279 = (state_36278[(1)]);
if((state_val_36279 === (7))){
var inst_36198 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
if(cljs.core.truth_(inst_36198)){
var statearr_36280_36327 = state_36278__$1;
(statearr_36280_36327[(1)] = (8));

} else {
var statearr_36281_36328 = state_36278__$1;
(statearr_36281_36328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (20))){
var inst_36272 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36282_36329 = state_36278__$1;
(statearr_36282_36329[(2)] = inst_36272);

(statearr_36282_36329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (27))){
var inst_36268 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36283_36330 = state_36278__$1;
(statearr_36283_36330[(2)] = inst_36268);

(statearr_36283_36330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (1))){
var inst_36191 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36278__$1 = state_36278;
if(cljs.core.truth_(inst_36191)){
var statearr_36284_36331 = state_36278__$1;
(statearr_36284_36331[(1)] = (2));

} else {
var statearr_36285_36332 = state_36278__$1;
(statearr_36285_36332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (24))){
var inst_36270 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36286_36333 = state_36278__$1;
(statearr_36286_36333[(2)] = inst_36270);

(statearr_36286_36333[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (4))){
var inst_36276 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36278__$1,inst_36276);
} else {
if((state_val_36279 === (15))){
var inst_36274 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36287_36334 = state_36278__$1;
(statearr_36287_36334[(2)] = inst_36274);

(statearr_36287_36334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (21))){
var inst_36227 = (state_36278[(2)]);
var inst_36228 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36229 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36228);
var state_36278__$1 = (function (){var statearr_36288 = state_36278;
(statearr_36288[(7)] = inst_36227);

return statearr_36288;
})();
var statearr_36289_36335 = state_36278__$1;
(statearr_36289_36335[(2)] = inst_36229);

(statearr_36289_36335[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (31))){
var inst_36257 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36278__$1 = state_36278;
if(inst_36257){
var statearr_36290_36336 = state_36278__$1;
(statearr_36290_36336[(1)] = (34));

} else {
var statearr_36291_36337 = state_36278__$1;
(statearr_36291_36337[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (32))){
var inst_36266 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36292_36338 = state_36278__$1;
(statearr_36292_36338[(2)] = inst_36266);

(statearr_36292_36338[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (33))){
var inst_36253 = (state_36278[(2)]);
var inst_36254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36255 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36254);
var state_36278__$1 = (function (){var statearr_36293 = state_36278;
(statearr_36293[(8)] = inst_36253);

return statearr_36293;
})();
var statearr_36294_36339 = state_36278__$1;
(statearr_36294_36339[(2)] = inst_36255);

(statearr_36294_36339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (13))){
var inst_36212 = figwheel.client.heads_up.clear.call(null);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(16),inst_36212);
} else {
if((state_val_36279 === (22))){
var inst_36233 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36234 = figwheel.client.heads_up.append_warning_message.call(null,inst_36233);
var state_36278__$1 = state_36278;
var statearr_36295_36340 = state_36278__$1;
(statearr_36295_36340[(2)] = inst_36234);

(statearr_36295_36340[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (36))){
var inst_36264 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36296_36341 = state_36278__$1;
(statearr_36296_36341[(2)] = inst_36264);

(statearr_36296_36341[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (29))){
var inst_36244 = (state_36278[(2)]);
var inst_36245 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36246 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36245);
var state_36278__$1 = (function (){var statearr_36297 = state_36278;
(statearr_36297[(9)] = inst_36244);

return statearr_36297;
})();
var statearr_36298_36342 = state_36278__$1;
(statearr_36298_36342[(2)] = inst_36246);

(statearr_36298_36342[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (6))){
var inst_36193 = (state_36278[(10)]);
var state_36278__$1 = state_36278;
var statearr_36299_36343 = state_36278__$1;
(statearr_36299_36343[(2)] = inst_36193);

(statearr_36299_36343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (28))){
var inst_36240 = (state_36278[(2)]);
var inst_36241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36242 = figwheel.client.heads_up.display_warning.call(null,inst_36241);
var state_36278__$1 = (function (){var statearr_36300 = state_36278;
(statearr_36300[(11)] = inst_36240);

return statearr_36300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(29),inst_36242);
} else {
if((state_val_36279 === (25))){
var inst_36238 = figwheel.client.heads_up.clear.call(null);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(28),inst_36238);
} else {
if((state_val_36279 === (34))){
var inst_36259 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(37),inst_36259);
} else {
if((state_val_36279 === (17))){
var inst_36218 = (state_36278[(2)]);
var inst_36219 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36220 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36219);
var state_36278__$1 = (function (){var statearr_36301 = state_36278;
(statearr_36301[(12)] = inst_36218);

return statearr_36301;
})();
var statearr_36302_36344 = state_36278__$1;
(statearr_36302_36344[(2)] = inst_36220);

(statearr_36302_36344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (3))){
var inst_36210 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36278__$1 = state_36278;
if(inst_36210){
var statearr_36303_36345 = state_36278__$1;
(statearr_36303_36345[(1)] = (13));

} else {
var statearr_36304_36346 = state_36278__$1;
(statearr_36304_36346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (12))){
var inst_36206 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36305_36347 = state_36278__$1;
(statearr_36305_36347[(2)] = inst_36206);

(statearr_36305_36347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (2))){
var inst_36193 = (state_36278[(10)]);
var inst_36193__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36278__$1 = (function (){var statearr_36306 = state_36278;
(statearr_36306[(10)] = inst_36193__$1);

return statearr_36306;
})();
if(cljs.core.truth_(inst_36193__$1)){
var statearr_36307_36348 = state_36278__$1;
(statearr_36307_36348[(1)] = (5));

} else {
var statearr_36308_36349 = state_36278__$1;
(statearr_36308_36349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (23))){
var inst_36236 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36278__$1 = state_36278;
if(inst_36236){
var statearr_36309_36350 = state_36278__$1;
(statearr_36309_36350[(1)] = (25));

} else {
var statearr_36310_36351 = state_36278__$1;
(statearr_36310_36351[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (35))){
var state_36278__$1 = state_36278;
var statearr_36311_36352 = state_36278__$1;
(statearr_36311_36352[(2)] = null);

(statearr_36311_36352[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (19))){
var inst_36231 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36278__$1 = state_36278;
if(inst_36231){
var statearr_36312_36353 = state_36278__$1;
(statearr_36312_36353[(1)] = (22));

} else {
var statearr_36313_36354 = state_36278__$1;
(statearr_36313_36354[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (11))){
var inst_36202 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36314_36355 = state_36278__$1;
(statearr_36314_36355[(2)] = inst_36202);

(statearr_36314_36355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (9))){
var inst_36204 = figwheel.client.heads_up.clear.call(null);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(12),inst_36204);
} else {
if((state_val_36279 === (5))){
var inst_36195 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36278__$1 = state_36278;
var statearr_36315_36356 = state_36278__$1;
(statearr_36315_36356[(2)] = inst_36195);

(statearr_36315_36356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (14))){
var inst_36222 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36278__$1 = state_36278;
if(inst_36222){
var statearr_36316_36357 = state_36278__$1;
(statearr_36316_36357[(1)] = (18));

} else {
var statearr_36317_36358 = state_36278__$1;
(statearr_36317_36358[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (26))){
var inst_36248 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36278__$1 = state_36278;
if(inst_36248){
var statearr_36318_36359 = state_36278__$1;
(statearr_36318_36359[(1)] = (30));

} else {
var statearr_36319_36360 = state_36278__$1;
(statearr_36319_36360[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (16))){
var inst_36214 = (state_36278[(2)]);
var inst_36215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36216 = figwheel.client.heads_up.display_exception.call(null,inst_36215);
var state_36278__$1 = (function (){var statearr_36320 = state_36278;
(statearr_36320[(13)] = inst_36214);

return statearr_36320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(17),inst_36216);
} else {
if((state_val_36279 === (30))){
var inst_36250 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36251 = figwheel.client.heads_up.display_warning.call(null,inst_36250);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(33),inst_36251);
} else {
if((state_val_36279 === (10))){
var inst_36208 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36321_36361 = state_36278__$1;
(statearr_36321_36361[(2)] = inst_36208);

(statearr_36321_36361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (18))){
var inst_36224 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36225 = figwheel.client.heads_up.display_exception.call(null,inst_36224);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(21),inst_36225);
} else {
if((state_val_36279 === (37))){
var inst_36261 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36322_36362 = state_36278__$1;
(statearr_36322_36362[(2)] = inst_36261);

(statearr_36322_36362[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (8))){
var inst_36200 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(11),inst_36200);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31650__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31555__auto__,c__31650__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto____0 = (function (){
var statearr_36323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36323[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto__);

(statearr_36323[(1)] = (1));

return statearr_36323;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto____1 = (function (state_36278){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_36278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e36324){if((e36324 instanceof Object)){
var ex__31559__auto__ = e36324;
var statearr_36325_36363 = state_36278;
(statearr_36325_36363[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36364 = state_36278;
state_36278 = G__36364;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto__ = function(state_36278){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto____1.call(this,state_36278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__,msg_hist,msg_names,msg))
})();
var state__31652__auto__ = (function (){var statearr_36326 = f__31651__auto__.call(null);
(statearr_36326[(6)] = c__31650__auto__);

return statearr_36326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__,msg_hist,msg_names,msg))
);

return c__31650__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31650__auto___36393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___36393,ch){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___36393,ch){
return (function (state_36379){
var state_val_36380 = (state_36379[(1)]);
if((state_val_36380 === (1))){
var state_36379__$1 = state_36379;
var statearr_36381_36394 = state_36379__$1;
(statearr_36381_36394[(2)] = null);

(statearr_36381_36394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36380 === (2))){
var state_36379__$1 = state_36379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36379__$1,(4),ch);
} else {
if((state_val_36380 === (3))){
var inst_36377 = (state_36379[(2)]);
var state_36379__$1 = state_36379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36379__$1,inst_36377);
} else {
if((state_val_36380 === (4))){
var inst_36367 = (state_36379[(7)]);
var inst_36367__$1 = (state_36379[(2)]);
var state_36379__$1 = (function (){var statearr_36382 = state_36379;
(statearr_36382[(7)] = inst_36367__$1);

return statearr_36382;
})();
if(cljs.core.truth_(inst_36367__$1)){
var statearr_36383_36395 = state_36379__$1;
(statearr_36383_36395[(1)] = (5));

} else {
var statearr_36384_36396 = state_36379__$1;
(statearr_36384_36396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36380 === (5))){
var inst_36367 = (state_36379[(7)]);
var inst_36369 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36367);
var state_36379__$1 = state_36379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36379__$1,(8),inst_36369);
} else {
if((state_val_36380 === (6))){
var state_36379__$1 = state_36379;
var statearr_36385_36397 = state_36379__$1;
(statearr_36385_36397[(2)] = null);

(statearr_36385_36397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36380 === (7))){
var inst_36375 = (state_36379[(2)]);
var state_36379__$1 = state_36379;
var statearr_36386_36398 = state_36379__$1;
(statearr_36386_36398[(2)] = inst_36375);

(statearr_36386_36398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36380 === (8))){
var inst_36371 = (state_36379[(2)]);
var state_36379__$1 = (function (){var statearr_36387 = state_36379;
(statearr_36387[(8)] = inst_36371);

return statearr_36387;
})();
var statearr_36388_36399 = state_36379__$1;
(statearr_36388_36399[(2)] = null);

(statearr_36388_36399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__31650__auto___36393,ch))
;
return ((function (switch__31555__auto__,c__31650__auto___36393,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31556__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31556__auto____0 = (function (){
var statearr_36389 = [null,null,null,null,null,null,null,null,null];
(statearr_36389[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31556__auto__);

(statearr_36389[(1)] = (1));

return statearr_36389;
});
var figwheel$client$heads_up_plugin_$_state_machine__31556__auto____1 = (function (state_36379){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_36379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e36390){if((e36390 instanceof Object)){
var ex__31559__auto__ = e36390;
var statearr_36391_36400 = state_36379;
(statearr_36391_36400[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36401 = state_36379;
state_36379 = G__36401;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31556__auto__ = function(state_36379){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31556__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31556__auto____1.call(this,state_36379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31556__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31556__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___36393,ch))
})();
var state__31652__auto__ = (function (){var statearr_36392 = f__31651__auto__.call(null);
(statearr_36392[(6)] = c__31650__auto___36393);

return statearr_36392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___36393,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__){
return (function (state_36407){
var state_val_36408 = (state_36407[(1)]);
if((state_val_36408 === (1))){
var inst_36402 = cljs.core.async.timeout.call(null,(3000));
var state_36407__$1 = state_36407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36407__$1,(2),inst_36402);
} else {
if((state_val_36408 === (2))){
var inst_36404 = (state_36407[(2)]);
var inst_36405 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36407__$1 = (function (){var statearr_36409 = state_36407;
(statearr_36409[(7)] = inst_36404);

return statearr_36409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36407__$1,inst_36405);
} else {
return null;
}
}
});})(c__31650__auto__))
;
return ((function (switch__31555__auto__,c__31650__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31556__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31556__auto____0 = (function (){
var statearr_36410 = [null,null,null,null,null,null,null,null];
(statearr_36410[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31556__auto__);

(statearr_36410[(1)] = (1));

return statearr_36410;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31556__auto____1 = (function (state_36407){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_36407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e36411){if((e36411 instanceof Object)){
var ex__31559__auto__ = e36411;
var statearr_36412_36414 = state_36407;
(statearr_36412_36414[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36415 = state_36407;
state_36407 = G__36415;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31556__auto__ = function(state_36407){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31556__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31556__auto____1.call(this,state_36407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31556__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31556__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__))
})();
var state__31652__auto__ = (function (){var statearr_36413 = f__31651__auto__.call(null);
(statearr_36413[(6)] = c__31650__auto__);

return statearr_36413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__))
);

return c__31650__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__,figwheel_version,temp__5735__auto__){
return (function (state_36422){
var state_val_36423 = (state_36422[(1)]);
if((state_val_36423 === (1))){
var inst_36416 = cljs.core.async.timeout.call(null,(2000));
var state_36422__$1 = state_36422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36422__$1,(2),inst_36416);
} else {
if((state_val_36423 === (2))){
var inst_36418 = (state_36422[(2)]);
var inst_36419 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36420 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36419);
var state_36422__$1 = (function (){var statearr_36424 = state_36422;
(statearr_36424[(7)] = inst_36418);

return statearr_36424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36422__$1,inst_36420);
} else {
return null;
}
}
});})(c__31650__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__31555__auto__,c__31650__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto____0 = (function (){
var statearr_36425 = [null,null,null,null,null,null,null,null];
(statearr_36425[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto__);

(statearr_36425[(1)] = (1));

return statearr_36425;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto____1 = (function (state_36422){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_36422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e36426){if((e36426 instanceof Object)){
var ex__31559__auto__ = e36426;
var statearr_36427_36429 = state_36422;
(statearr_36427_36429[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36430 = state_36422;
state_36422 = G__36430;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto__ = function(state_36422){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto____1.call(this,state_36422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__,figwheel_version,temp__5735__auto__))
})();
var state__31652__auto__ = (function (){var statearr_36428 = f__31651__auto__.call(null);
(statearr_36428[(6)] = c__31650__auto__);

return statearr_36428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__,figwheel_version,temp__5735__auto__))
);

return c__31650__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36431){
var map__36432 = p__36431;
var map__36432__$1 = (((((!((map__36432 == null))))?(((((map__36432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36432):map__36432);
var file = cljs.core.get.call(null,map__36432__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36432__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36432__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36434 = "";
var G__36434__$1 = (cljs.core.truth_(file)?[G__36434,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36434);
var G__36434__$2 = (cljs.core.truth_(line)?[G__36434__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36434__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__36434__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36434__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36435){
var map__36436 = p__36435;
var map__36436__$1 = (((((!((map__36436 == null))))?(((((map__36436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36436):map__36436);
var ed = map__36436__$1;
var exception_data = cljs.core.get.call(null,map__36436__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36436__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_36439 = (function (){var G__36438 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36438)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__36438;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_36439);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36440){
var map__36441 = p__36440;
var map__36441__$1 = (((((!((map__36441 == null))))?(((((map__36441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36441):map__36441);
var w = map__36441__$1;
var message = cljs.core.get.call(null,map__36441__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36443 = cljs.core.seq.call(null,plugins);
var chunk__36444 = null;
var count__36445 = (0);
var i__36446 = (0);
while(true){
if((i__36446 < count__36445)){
var vec__36453 = cljs.core._nth.call(null,chunk__36444,i__36446);
var k = cljs.core.nth.call(null,vec__36453,(0),null);
var plugin = cljs.core.nth.call(null,vec__36453,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36459 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36443,chunk__36444,count__36445,i__36446,pl_36459,vec__36453,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36459.call(null,msg_hist);
});})(seq__36443,chunk__36444,count__36445,i__36446,pl_36459,vec__36453,k,plugin))
);
} else {
}


var G__36460 = seq__36443;
var G__36461 = chunk__36444;
var G__36462 = count__36445;
var G__36463 = (i__36446 + (1));
seq__36443 = G__36460;
chunk__36444 = G__36461;
count__36445 = G__36462;
i__36446 = G__36463;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__36443);
if(temp__5735__auto__){
var seq__36443__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36443__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36443__$1);
var G__36464 = cljs.core.chunk_rest.call(null,seq__36443__$1);
var G__36465 = c__4550__auto__;
var G__36466 = cljs.core.count.call(null,c__4550__auto__);
var G__36467 = (0);
seq__36443 = G__36464;
chunk__36444 = G__36465;
count__36445 = G__36466;
i__36446 = G__36467;
continue;
} else {
var vec__36456 = cljs.core.first.call(null,seq__36443__$1);
var k = cljs.core.nth.call(null,vec__36456,(0),null);
var plugin = cljs.core.nth.call(null,vec__36456,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36468 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36443,chunk__36444,count__36445,i__36446,pl_36468,vec__36456,k,plugin,seq__36443__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36468.call(null,msg_hist);
});})(seq__36443,chunk__36444,count__36445,i__36446,pl_36468,vec__36456,k,plugin,seq__36443__$1,temp__5735__auto__))
);
} else {
}


var G__36469 = cljs.core.next.call(null,seq__36443__$1);
var G__36470 = null;
var G__36471 = (0);
var G__36472 = (0);
seq__36443 = G__36469;
chunk__36444 = G__36470;
count__36445 = G__36471;
i__36446 = G__36472;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36474 = arguments.length;
switch (G__36474) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36475_36480 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36476_36481 = null;
var count__36477_36482 = (0);
var i__36478_36483 = (0);
while(true){
if((i__36478_36483 < count__36477_36482)){
var msg_36484 = cljs.core._nth.call(null,chunk__36476_36481,i__36478_36483);
figwheel.client.socket.handle_incoming_message.call(null,msg_36484);


var G__36485 = seq__36475_36480;
var G__36486 = chunk__36476_36481;
var G__36487 = count__36477_36482;
var G__36488 = (i__36478_36483 + (1));
seq__36475_36480 = G__36485;
chunk__36476_36481 = G__36486;
count__36477_36482 = G__36487;
i__36478_36483 = G__36488;
continue;
} else {
var temp__5735__auto___36489 = cljs.core.seq.call(null,seq__36475_36480);
if(temp__5735__auto___36489){
var seq__36475_36490__$1 = temp__5735__auto___36489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36475_36490__$1)){
var c__4550__auto___36491 = cljs.core.chunk_first.call(null,seq__36475_36490__$1);
var G__36492 = cljs.core.chunk_rest.call(null,seq__36475_36490__$1);
var G__36493 = c__4550__auto___36491;
var G__36494 = cljs.core.count.call(null,c__4550__auto___36491);
var G__36495 = (0);
seq__36475_36480 = G__36492;
chunk__36476_36481 = G__36493;
count__36477_36482 = G__36494;
i__36478_36483 = G__36495;
continue;
} else {
var msg_36496 = cljs.core.first.call(null,seq__36475_36490__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36496);


var G__36497 = cljs.core.next.call(null,seq__36475_36490__$1);
var G__36498 = null;
var G__36499 = (0);
var G__36500 = (0);
seq__36475_36480 = G__36497;
chunk__36476_36481 = G__36498;
count__36477_36482 = G__36499;
i__36478_36483 = G__36500;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36505 = arguments.length;
var i__4731__auto___36506 = (0);
while(true){
if((i__4731__auto___36506 < len__4730__auto___36505)){
args__4736__auto__.push((arguments[i__4731__auto___36506]));

var G__36507 = (i__4731__auto___36506 + (1));
i__4731__auto___36506 = G__36507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36502){
var map__36503 = p__36502;
var map__36503__$1 = (((((!((map__36503 == null))))?(((((map__36503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36503):map__36503);
var opts = map__36503__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36501){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36501));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36508){if((e36508 instanceof Error)){
var e = e36508;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36508;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36509){
var map__36510 = p__36509;
var map__36510__$1 = (((((!((map__36510 == null))))?(((((map__36510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36510):map__36510);
var msg_name = cljs.core.get.call(null,map__36510__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1640328141436
