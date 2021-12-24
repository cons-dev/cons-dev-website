// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.cookies');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('goog.net.cookies');
if((typeof reagent !== 'undefined') && (typeof reagent.cookies !== 'undefined') && (typeof reagent.cookies.legacy_setter_QMARK_ !== 'undefined')){
} else {
reagent.cookies.legacy_setter_QMARK_ = (new cljs.core.Delay((function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),goog.net.cookies.set.length);
}),null));
}
/**
 * True if the the underlying version of `goog.net.cookies` supports the same-site attribute
 * when setting cookies
 *   
 */
reagent.cookies.supports_same_site_QMARK_ = (function reagent$cookies$supports_same_site_QMARK_(){
return cljs.core.not(cljs.core.deref(reagent.cookies.legacy_setter_QMARK_));
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
var len__4730__auto___6586 = arguments.length;
var i__4731__auto___6587 = (0);
while(true){
if((i__4731__auto___6587 < len__4730__auto___6586)){
args__4736__auto__.push((arguments[i__4731__auto___6587]));

var G__6588 = (i__4731__auto___6587 + (1));
i__4731__auto___6587 = G__6588;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.cookies.set_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.cookies.set_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,content,p__6573){
var vec__6574 = p__6573;
var map__6577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6574,(0),null);
var map__6577__$1 = (((((!((map__6577 == null))))?(((((map__6577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6577):map__6577);
var opts = map__6577__$1;
var max_age = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6577__$1,cljs.core.cst$kw$max_DASH_age);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6577__$1,cljs.core.cst$kw$path);
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6577__$1,cljs.core.cst$kw$domain);
var secure_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6577__$1,cljs.core.cst$kw$secure_QMARK_);
var raw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6577__$1,cljs.core.cst$kw$raw_QMARK_);
var same_site = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6577__$1,cljs.core.cst$kw$same_DASH_site);
var k__$1 = cljs.core.name(k);
var content__$1 = (cljs.core.truth_(raw_QMARK_)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(content):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0)));
if(cljs.core.not(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$raw_QMARK_))){
return goog.net.cookies.set(k__$1,content__$1);
} else {
if(cljs.core.truth_(cljs.core.deref(reagent.cookies.legacy_setter_QMARK_))){
return goog.net.cookies.set(k__$1,content__$1,(function (){var or__4131__auto__ = max_age;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})(),path,domain,cljs.core.boolean$(secure_QMARK_));
} else {
return goog.net.cookies.set(k__$1,content__$1,({"maxAge": (function (){var or__4131__auto__ = max_age;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})(), "path": path, "domain": domain, "sameSite": (function (){var pred__6579 = cljs.core._EQ_;
var expr__6580 = same_site;
if(cljs.core.truth_((function (){var G__6582 = cljs.core.cst$kw$strict;
var G__6583 = expr__6580;
return (pred__6579.cljs$core$IFn$_invoke$arity$2 ? pred__6579.cljs$core$IFn$_invoke$arity$2(G__6582,G__6583) : pred__6579.call(null,G__6582,G__6583));
})())){
return goog.net.Cookies.SameSite.STRICT;
} else {
if(cljs.core.truth_((function (){var G__6584 = cljs.core.cst$kw$lax;
var G__6585 = expr__6580;
return (pred__6579.cljs$core$IFn$_invoke$arity$2 ? pred__6579.cljs$core$IFn$_invoke$arity$2(G__6584,G__6585) : pred__6579.call(null,G__6584,G__6585));
})())){
return goog.net.Cookies.SameSite.LAX;
} else {
return goog.net.Cookies.SameSite.NONE;
}
}
})(), "secure": cljs.core.boolean$(secure_QMARK_)}));

}
}
});

reagent.cookies.set_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.cookies.set_BANG_.cljs$lang$applyTo = (function (seq6570){
var G__6571 = cljs.core.first(seq6570);
var seq6570__$1 = cljs.core.next(seq6570);
var G__6572 = cljs.core.first(seq6570__$1);
var seq6570__$2 = cljs.core.next(seq6570__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6571,G__6572,seq6570__$2);
});

reagent.cookies.read_edn_value = (function reagent$cookies$read_edn_value(v){
if(cljs.core.truth_(v)){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
return null;
}
});
reagent.cookies.read_raw_value = (function reagent$cookies$read_raw_value(v){
return v;
});
reagent.cookies.get_value = (function reagent$cookies$get_value(k,r,default$){
var or__4131__auto__ = (function (){var G__6590 = goog.net.cookies.get(cljs.core.name(k));
return (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(G__6590) : r.call(null,G__6590));
})();
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
var len__4730__auto___6597 = arguments.length;
var i__4731__auto___6598 = (0);
while(true){
if((i__4731__auto___6598 < len__4730__auto___6597)){
args__4736__auto__.push((arguments[i__4731__auto___6598]));

var G__6599 = (i__4731__auto___6598 + (1));
i__4731__auto___6598 = G__6599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.cookies.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.cookies.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__6593){
var vec__6594 = p__6593;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6594,(0),null);
return reagent.cookies.get_value(k,reagent.cookies.read_edn_value,default$);
});

reagent.cookies.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.cookies.get.cljs$lang$applyTo = (function (seq6591){
var G__6592 = cljs.core.first(seq6591);
var seq6591__$1 = cljs.core.next(seq6591);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6592,seq6591__$1);
});

/**
 * gets the value at the key (as string), optional default when value is not found
 */
reagent.cookies.get_raw = (function reagent$cookies$get_raw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6606 = arguments.length;
var i__4731__auto___6607 = (0);
while(true){
if((i__4731__auto___6607 < len__4730__auto___6606)){
args__4736__auto__.push((arguments[i__4731__auto___6607]));

var G__6608 = (i__4731__auto___6607 + (1));
i__4731__auto___6607 = G__6608;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.cookies.get_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.cookies.get_raw.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__6602){
var vec__6603 = p__6602;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6603,(0),null);
return reagent.cookies.get_value(k,reagent.cookies.read_raw_value,default$);
});

reagent.cookies.get_raw.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.cookies.get_raw.cljs$lang$applyTo = (function (seq6600){
var G__6601 = cljs.core.first(seq6600);
var seq6600__$1 = cljs.core.next(seq6600);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6601,seq6600__$1);
});

/**
 * is the key present in the cookies
 */
reagent.cookies.contains_key_QMARK_ = (function reagent$cookies$contains_key_QMARK_(k){
return goog.net.cookies.containsKey(cljs.core.name(k));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,goog.net.cookies.getKeys());
});
/**
 * returns cookie values (as edn)
 */
reagent.cookies.vals = (function reagent$cookies$vals(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.cookies.read_edn_value,goog.net.cookies.getValues());
});
/**
 * returns cookie values (as strings)
 */
reagent.cookies.raw_vals = (function reagent$cookies$raw_vals(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.cookies.read_raw_value,goog.net.cookies.getValues());
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
var G__6610 = arguments.length;
switch (G__6610) {
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
return goog.net.cookies.remove(cljs.core.name(k));
});

reagent.cookies.remove_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (k,path,domain){
return goog.net.cookies.remove(cljs.core.name(k),path,domain);
});

reagent.cookies.remove_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * removes all cookies
 */
reagent.cookies.clear_BANG_ = (function reagent$cookies$clear_BANG_(){
return goog.net.cookies.clear();
});
