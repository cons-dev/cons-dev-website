// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.cookies');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('goog.net.cookies');
if((typeof reagent !== 'undefined') && (typeof reagent.cookies !== 'undefined') && (typeof reagent.cookies.legacy_setter_QMARK_ !== 'undefined')){
} else {
reagent.cookies.legacy_setter_QMARK_ = (new cljs.core.Delay((function (){
return cljs.core._EQ_.call(null,(6),goog.net.cookies.set.length);
}),null));
}
/**
 * True if the the underlying version of `goog.net.cookies` supports the same-site attribute
 * when setting cookies
 *   
 */
reagent.cookies.supports_same_site_QMARK_ = (function reagent$cookies$supports_same_site_QMARK_(){
return cljs.core.not.call(null,cljs.core.deref.call(null,reagent.cookies.legacy_setter_QMARK_));
});
/**
 * sets a cookie, the max-age for session cookie
 * following optional parameters may be passed in as a map:
 * :max-age - defaults to -1
 * :path - path of the cookie, defaults to the full request path
 * :domain - domain of the cookie, when null the browser will use the full request host name
 * :secure? - boolean specifying whether the cookie should only be sent over a secure channel
 * :raw? - boolean specifying whether content should be stored raw, or as EDN
 * :same-site - A keyword of either :strict, :lax, or :none (defaults to :none). Only supported when `supports-same-site?` is true
 *   
 */
reagent.cookies.set_BANG_ = (function reagent$cookies$set_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2245 = arguments.length;
var i__4731__auto___2246 = (0);
while(true){
if((i__4731__auto___2246 < len__4730__auto___2245)){
args__4736__auto__.push((arguments[i__4731__auto___2246]));

var G__2247 = (i__4731__auto___2246 + (1));
i__4731__auto___2246 = G__2247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.cookies.set_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.cookies.set_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,content,p__2236){
var vec__2237 = p__2236;
var map__2240 = cljs.core.nth.call(null,vec__2237,(0),null);
var map__2240__$1 = (((((!((map__2240 == null))))?(((((map__2240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2240):map__2240);
var opts = map__2240__$1;
var max_age = cljs.core.get.call(null,map__2240__$1,new cljs.core.Keyword(null,"max-age","max-age",-270129271));
var path = cljs.core.get.call(null,map__2240__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var domain = cljs.core.get.call(null,map__2240__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var secure_QMARK_ = cljs.core.get.call(null,map__2240__$1,new cljs.core.Keyword(null,"secure?","secure?",-368029718));
var raw_QMARK_ = cljs.core.get.call(null,map__2240__$1,new cljs.core.Keyword(null,"raw?","raw?",394379982));
var same_site = cljs.core.get.call(null,map__2240__$1,new cljs.core.Keyword(null,"same-site","same-site",-580539552));
var k__$1 = cljs.core.name.call(null,k);
var content__$1 = (cljs.core.truth_(raw_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(content):cljs.core.pr_str.call(null,content));
if(cljs.core.not.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"raw?","raw?",394379982)))){
return goog.net.cookies.set(k__$1,content__$1);
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,reagent.cookies.legacy_setter_QMARK_))){
return goog.net.cookies.set(k__$1,content__$1,(function (){var or__4131__auto__ = max_age;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})(),path,domain,cljs.core.boolean$.call(null,secure_QMARK_));
} else {
return goog.net.cookies.set(k__$1,content__$1,({"maxAge": (function (){var or__4131__auto__ = max_age;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})(), "path": path, "domain": domain, "sameSite": (function (){var pred__2242 = cljs.core._EQ_;
var expr__2243 = same_site;
if(cljs.core.truth_(pred__2242.call(null,new cljs.core.Keyword(null,"strict","strict",-665564191),expr__2243))){
return goog.net.Cookies.SameSite.STRICT;
} else {
if(cljs.core.truth_(pred__2242.call(null,new cljs.core.Keyword(null,"lax","lax",1673471068),expr__2243))){
return goog.net.Cookies.SameSite.LAX;
} else {
return goog.net.Cookies.SameSite.NONE;
}
}
})(), "secure": cljs.core.boolean$.call(null,secure_QMARK_)}));

}
}
});

reagent.cookies.set_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.cookies.set_BANG_.cljs$lang$applyTo = (function (seq2233){
var G__2234 = cljs.core.first.call(null,seq2233);
var seq2233__$1 = cljs.core.next.call(null,seq2233);
var G__2235 = cljs.core.first.call(null,seq2233__$1);
var seq2233__$2 = cljs.core.next.call(null,seq2233__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2234,G__2235,seq2233__$2);
});

reagent.cookies.read_edn_value = (function reagent$cookies$read_edn_value(v){
if(cljs.core.truth_(v)){
return cljs.reader.read_string.call(null,v);
} else {
return null;
}
});
reagent.cookies.read_raw_value = (function reagent$cookies$read_raw_value(v){
return v;
});
reagent.cookies.get_value = (function reagent$cookies$get_value(k,r,default$){
var or__4131__auto__ = r.call(null,goog.net.cookies.get(cljs.core.name.call(null,k)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});
/**
 * gets the value at the key (as edn), optional default when value is not found
 */
reagent.cookies.get = (function reagent$cookies$get(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2254 = arguments.length;
var i__4731__auto___2255 = (0);
while(true){
if((i__4731__auto___2255 < len__4730__auto___2254)){
args__4736__auto__.push((arguments[i__4731__auto___2255]));

var G__2256 = (i__4731__auto___2255 + (1));
i__4731__auto___2255 = G__2256;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.cookies.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.cookies.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__2250){
var vec__2251 = p__2250;
var default$ = cljs.core.nth.call(null,vec__2251,(0),null);
return reagent.cookies.get_value.call(null,k,reagent.cookies.read_edn_value,default$);
});

reagent.cookies.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.cookies.get.cljs$lang$applyTo = (function (seq2248){
var G__2249 = cljs.core.first.call(null,seq2248);
var seq2248__$1 = cljs.core.next.call(null,seq2248);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2249,seq2248__$1);
});

/**
 * gets the value at the key (as string), optional default when value is not found
 */
reagent.cookies.get_raw = (function reagent$cookies$get_raw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2263 = arguments.length;
var i__4731__auto___2264 = (0);
while(true){
if((i__4731__auto___2264 < len__4730__auto___2263)){
args__4736__auto__.push((arguments[i__4731__auto___2264]));

var G__2265 = (i__4731__auto___2264 + (1));
i__4731__auto___2264 = G__2265;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.cookies.get_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.cookies.get_raw.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__2259){
var vec__2260 = p__2259;
var default$ = cljs.core.nth.call(null,vec__2260,(0),null);
return reagent.cookies.get_value.call(null,k,reagent.cookies.read_raw_value,default$);
});

reagent.cookies.get_raw.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.cookies.get_raw.cljs$lang$applyTo = (function (seq2257){
var G__2258 = cljs.core.first.call(null,seq2257);
var seq2257__$1 = cljs.core.next.call(null,seq2257);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2258,seq2257__$1);
});

/**
 * is the key present in the cookies
 */
reagent.cookies.contains_key_QMARK_ = (function reagent$cookies$contains_key_QMARK_(k){
return goog.net.cookies.containsKey(cljs.core.name.call(null,k));
});
/**
 * is the value present in the cookies (as string)
 */
reagent.cookies.contains_val_QMARK_ = (function reagent$cookies$contains_val_QMARK_(v){
return goog.net.cookies.containsValue(v);
});
/**
 * returns the number of cookies
 */
reagent.cookies.count = (function reagent$cookies$count(){
return goog.net.cookies.getCount();
});
/**
 * returns all the keys for the cookies
 */
reagent.cookies.keys = (function reagent$cookies$keys(){
return cljs.core.map.call(null,cljs.core.keyword,goog.net.cookies.getKeys());
});
/**
 * returns cookie values (as edn)
 */
reagent.cookies.vals = (function reagent$cookies$vals(){
return cljs.core.map.call(null,reagent.cookies.read_edn_value,goog.net.cookies.getValues());
});
/**
 * returns cookie values (as strings)
 */
reagent.cookies.raw_vals = (function reagent$cookies$raw_vals(){
return cljs.core.map.call(null,reagent.cookies.read_raw_value,goog.net.cookies.getValues());
});
/**
 * true if no cookies are set
 */
reagent.cookies.empty_QMARK_ = (function reagent$cookies$empty_QMARK_(){
return goog.net.cookies.isEmpty();
});
/**
 * removes a cookie, optionally for a specific path and/or domain
 */
reagent.cookies.remove_BANG_ = (function reagent$cookies$remove_BANG_(var_args){
var G__2267 = arguments.length;
switch (G__2267) {
case 1:
return reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (k){
return goog.net.cookies.remove(cljs.core.name.call(null,k));
});

reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (k,path,domain){
return goog.net.cookies.remove(cljs.core.name.call(null,k),path,domain);
});

reagent.cookies.remove_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * removes all cookies
 */
reagent.cookies.clear_BANG_ = (function reagent$cookies$clear_BANG_(){
return goog.net.cookies.clear();
});

//# sourceMappingURL=cookies.js.map
