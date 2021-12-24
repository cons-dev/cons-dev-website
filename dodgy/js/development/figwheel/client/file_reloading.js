// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35020_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35020_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35021 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35022 = null;
var count__35023 = (0);
var i__35024 = (0);
while(true){
if((i__35024 < count__35023)){
var n = cljs.core._nth.call(null,chunk__35022,i__35024);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35025 = seq__35021;
var G__35026 = chunk__35022;
var G__35027 = count__35023;
var G__35028 = (i__35024 + (1));
seq__35021 = G__35025;
chunk__35022 = G__35026;
count__35023 = G__35027;
i__35024 = G__35028;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35021);
if(temp__5735__auto__){
var seq__35021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35021__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35021__$1);
var G__35029 = cljs.core.chunk_rest.call(null,seq__35021__$1);
var G__35030 = c__4550__auto__;
var G__35031 = cljs.core.count.call(null,c__4550__auto__);
var G__35032 = (0);
seq__35021 = G__35029;
chunk__35022 = G__35030;
count__35023 = G__35031;
i__35024 = G__35032;
continue;
} else {
var n = cljs.core.first.call(null,seq__35021__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35033 = cljs.core.next.call(null,seq__35021__$1);
var G__35034 = null;
var G__35035 = (0);
var G__35036 = (0);
seq__35021 = G__35033;
chunk__35022 = G__35034;
count__35023 = G__35035;
i__35024 = G__35036;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35037){
var vec__35038 = p__35037;
var _ = cljs.core.nth.call(null,vec__35038,(0),null);
var v = cljs.core.nth.call(null,vec__35038,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__35041){
var vec__35042 = p__35041;
var k = cljs.core.nth.call(null,vec__35042,(0),null);
var v = cljs.core.nth.call(null,vec__35042,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35054_35062 = cljs.core.seq.call(null,deps);
var chunk__35055_35063 = null;
var count__35056_35064 = (0);
var i__35057_35065 = (0);
while(true){
if((i__35057_35065 < count__35056_35064)){
var dep_35066 = cljs.core._nth.call(null,chunk__35055_35063,i__35057_35065);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_35066;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35066));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35066,(depth + (1)),state);
} else {
}


var G__35067 = seq__35054_35062;
var G__35068 = chunk__35055_35063;
var G__35069 = count__35056_35064;
var G__35070 = (i__35057_35065 + (1));
seq__35054_35062 = G__35067;
chunk__35055_35063 = G__35068;
count__35056_35064 = G__35069;
i__35057_35065 = G__35070;
continue;
} else {
var temp__5735__auto___35071 = cljs.core.seq.call(null,seq__35054_35062);
if(temp__5735__auto___35071){
var seq__35054_35072__$1 = temp__5735__auto___35071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35054_35072__$1)){
var c__4550__auto___35073 = cljs.core.chunk_first.call(null,seq__35054_35072__$1);
var G__35074 = cljs.core.chunk_rest.call(null,seq__35054_35072__$1);
var G__35075 = c__4550__auto___35073;
var G__35076 = cljs.core.count.call(null,c__4550__auto___35073);
var G__35077 = (0);
seq__35054_35062 = G__35074;
chunk__35055_35063 = G__35075;
count__35056_35064 = G__35076;
i__35057_35065 = G__35077;
continue;
} else {
var dep_35078 = cljs.core.first.call(null,seq__35054_35072__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_35078;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35078));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35078,(depth + (1)),state);
} else {
}


var G__35079 = cljs.core.next.call(null,seq__35054_35072__$1);
var G__35080 = null;
var G__35081 = (0);
var G__35082 = (0);
seq__35054_35062 = G__35079;
chunk__35055_35063 = G__35080;
count__35056_35064 = G__35081;
i__35057_35065 = G__35082;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35058){
var vec__35059 = p__35058;
var seq__35060 = cljs.core.seq.call(null,vec__35059);
var first__35061 = cljs.core.first.call(null,seq__35060);
var seq__35060__$1 = cljs.core.next.call(null,seq__35060);
var x = first__35061;
var xs = seq__35060__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35059,seq__35060,first__35061,seq__35060__$1,x,xs,get_deps__$1){
return (function (p1__35045_SHARP_){
return clojure.set.difference.call(null,p1__35045_SHARP_,x);
});})(vec__35059,seq__35060,first__35061,seq__35060__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35083 = cljs.core.seq.call(null,provides);
var chunk__35084 = null;
var count__35085 = (0);
var i__35086 = (0);
while(true){
if((i__35086 < count__35085)){
var prov = cljs.core._nth.call(null,chunk__35084,i__35086);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35095_35103 = cljs.core.seq.call(null,requires);
var chunk__35096_35104 = null;
var count__35097_35105 = (0);
var i__35098_35106 = (0);
while(true){
if((i__35098_35106 < count__35097_35105)){
var req_35107 = cljs.core._nth.call(null,chunk__35096_35104,i__35098_35106);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35107,prov);


var G__35108 = seq__35095_35103;
var G__35109 = chunk__35096_35104;
var G__35110 = count__35097_35105;
var G__35111 = (i__35098_35106 + (1));
seq__35095_35103 = G__35108;
chunk__35096_35104 = G__35109;
count__35097_35105 = G__35110;
i__35098_35106 = G__35111;
continue;
} else {
var temp__5735__auto___35112 = cljs.core.seq.call(null,seq__35095_35103);
if(temp__5735__auto___35112){
var seq__35095_35113__$1 = temp__5735__auto___35112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35095_35113__$1)){
var c__4550__auto___35114 = cljs.core.chunk_first.call(null,seq__35095_35113__$1);
var G__35115 = cljs.core.chunk_rest.call(null,seq__35095_35113__$1);
var G__35116 = c__4550__auto___35114;
var G__35117 = cljs.core.count.call(null,c__4550__auto___35114);
var G__35118 = (0);
seq__35095_35103 = G__35115;
chunk__35096_35104 = G__35116;
count__35097_35105 = G__35117;
i__35098_35106 = G__35118;
continue;
} else {
var req_35119 = cljs.core.first.call(null,seq__35095_35113__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35119,prov);


var G__35120 = cljs.core.next.call(null,seq__35095_35113__$1);
var G__35121 = null;
var G__35122 = (0);
var G__35123 = (0);
seq__35095_35103 = G__35120;
chunk__35096_35104 = G__35121;
count__35097_35105 = G__35122;
i__35098_35106 = G__35123;
continue;
}
} else {
}
}
break;
}


var G__35124 = seq__35083;
var G__35125 = chunk__35084;
var G__35126 = count__35085;
var G__35127 = (i__35086 + (1));
seq__35083 = G__35124;
chunk__35084 = G__35125;
count__35085 = G__35126;
i__35086 = G__35127;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35083);
if(temp__5735__auto__){
var seq__35083__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35083__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35083__$1);
var G__35128 = cljs.core.chunk_rest.call(null,seq__35083__$1);
var G__35129 = c__4550__auto__;
var G__35130 = cljs.core.count.call(null,c__4550__auto__);
var G__35131 = (0);
seq__35083 = G__35128;
chunk__35084 = G__35129;
count__35085 = G__35130;
i__35086 = G__35131;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35083__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35099_35132 = cljs.core.seq.call(null,requires);
var chunk__35100_35133 = null;
var count__35101_35134 = (0);
var i__35102_35135 = (0);
while(true){
if((i__35102_35135 < count__35101_35134)){
var req_35136 = cljs.core._nth.call(null,chunk__35100_35133,i__35102_35135);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35136,prov);


var G__35137 = seq__35099_35132;
var G__35138 = chunk__35100_35133;
var G__35139 = count__35101_35134;
var G__35140 = (i__35102_35135 + (1));
seq__35099_35132 = G__35137;
chunk__35100_35133 = G__35138;
count__35101_35134 = G__35139;
i__35102_35135 = G__35140;
continue;
} else {
var temp__5735__auto___35141__$1 = cljs.core.seq.call(null,seq__35099_35132);
if(temp__5735__auto___35141__$1){
var seq__35099_35142__$1 = temp__5735__auto___35141__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35099_35142__$1)){
var c__4550__auto___35143 = cljs.core.chunk_first.call(null,seq__35099_35142__$1);
var G__35144 = cljs.core.chunk_rest.call(null,seq__35099_35142__$1);
var G__35145 = c__4550__auto___35143;
var G__35146 = cljs.core.count.call(null,c__4550__auto___35143);
var G__35147 = (0);
seq__35099_35132 = G__35144;
chunk__35100_35133 = G__35145;
count__35101_35134 = G__35146;
i__35102_35135 = G__35147;
continue;
} else {
var req_35148 = cljs.core.first.call(null,seq__35099_35142__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35148,prov);


var G__35149 = cljs.core.next.call(null,seq__35099_35142__$1);
var G__35150 = null;
var G__35151 = (0);
var G__35152 = (0);
seq__35099_35132 = G__35149;
chunk__35100_35133 = G__35150;
count__35101_35134 = G__35151;
i__35102_35135 = G__35152;
continue;
}
} else {
}
}
break;
}


var G__35153 = cljs.core.next.call(null,seq__35083__$1);
var G__35154 = null;
var G__35155 = (0);
var G__35156 = (0);
seq__35083 = G__35153;
chunk__35084 = G__35154;
count__35085 = G__35155;
i__35086 = G__35156;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35157_35161 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35158_35162 = null;
var count__35159_35163 = (0);
var i__35160_35164 = (0);
while(true){
if((i__35160_35164 < count__35159_35163)){
var ns_35165 = cljs.core._nth.call(null,chunk__35158_35162,i__35160_35164);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35165);


var G__35166 = seq__35157_35161;
var G__35167 = chunk__35158_35162;
var G__35168 = count__35159_35163;
var G__35169 = (i__35160_35164 + (1));
seq__35157_35161 = G__35166;
chunk__35158_35162 = G__35167;
count__35159_35163 = G__35168;
i__35160_35164 = G__35169;
continue;
} else {
var temp__5735__auto___35170 = cljs.core.seq.call(null,seq__35157_35161);
if(temp__5735__auto___35170){
var seq__35157_35171__$1 = temp__5735__auto___35170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35157_35171__$1)){
var c__4550__auto___35172 = cljs.core.chunk_first.call(null,seq__35157_35171__$1);
var G__35173 = cljs.core.chunk_rest.call(null,seq__35157_35171__$1);
var G__35174 = c__4550__auto___35172;
var G__35175 = cljs.core.count.call(null,c__4550__auto___35172);
var G__35176 = (0);
seq__35157_35161 = G__35173;
chunk__35158_35162 = G__35174;
count__35159_35163 = G__35175;
i__35160_35164 = G__35176;
continue;
} else {
var ns_35177 = cljs.core.first.call(null,seq__35157_35171__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35177);


var G__35178 = cljs.core.next.call(null,seq__35157_35171__$1);
var G__35179 = null;
var G__35180 = (0);
var G__35181 = (0);
seq__35157_35161 = G__35178;
chunk__35158_35162 = G__35179;
count__35159_35163 = G__35180;
i__35160_35164 = G__35181;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35182__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35183__i = 0, G__35183__a = new Array(arguments.length -  0);
while (G__35183__i < G__35183__a.length) {G__35183__a[G__35183__i] = arguments[G__35183__i + 0]; ++G__35183__i;}
  args = new cljs.core.IndexedSeq(G__35183__a,0,null);
} 
return G__35182__delegate.call(this,args);};
G__35182.cljs$lang$maxFixedArity = 0;
G__35182.cljs$lang$applyTo = (function (arglist__35184){
var args = cljs.core.seq(arglist__35184);
return G__35182__delegate(args);
});
G__35182.cljs$core$IFn$_invoke$arity$variadic = G__35182__delegate;
return G__35182;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35185_SHARP_,p2__35186_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35185_SHARP_)),p2__35186_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35187_SHARP_,p2__35188_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35187_SHARP_),p2__35188_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35189 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35189.addCallback(((function (G__35189){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35189))
);

G__35189.addErrback(((function (G__35189){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35189))
);

return G__35189;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35190){if((e35190 instanceof Error)){
var e = e35190;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35190;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35191){if((e35191 instanceof Error)){
var e = e35191;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35191;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35192 = cljs.core._EQ_;
var expr__35193 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35192.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35193))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35192.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35193))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35192.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35193))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35192,expr__35193){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35192,expr__35193))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35195,callback){
var map__35196 = p__35195;
var map__35196__$1 = (((((!((map__35196 == null))))?(((((map__35196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35196):map__35196);
var file_msg = map__35196__$1;
var request_url = cljs.core.get.call(null,map__35196__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35196,map__35196__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35196,map__35196__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__){
return (function (state_35234){
var state_val_35235 = (state_35234[(1)]);
if((state_val_35235 === (7))){
var inst_35230 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
var statearr_35236_35262 = state_35234__$1;
(statearr_35236_35262[(2)] = inst_35230);

(statearr_35236_35262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (1))){
var state_35234__$1 = state_35234;
var statearr_35237_35263 = state_35234__$1;
(statearr_35237_35263[(2)] = null);

(statearr_35237_35263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (4))){
var inst_35200 = (state_35234[(7)]);
var inst_35200__$1 = (state_35234[(2)]);
var state_35234__$1 = (function (){var statearr_35238 = state_35234;
(statearr_35238[(7)] = inst_35200__$1);

return statearr_35238;
})();
if(cljs.core.truth_(inst_35200__$1)){
var statearr_35239_35264 = state_35234__$1;
(statearr_35239_35264[(1)] = (5));

} else {
var statearr_35240_35265 = state_35234__$1;
(statearr_35240_35265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (15))){
var inst_35215 = (state_35234[(8)]);
var inst_35213 = (state_35234[(9)]);
var inst_35217 = inst_35215.call(null,inst_35213);
var state_35234__$1 = state_35234;
var statearr_35241_35266 = state_35234__$1;
(statearr_35241_35266[(2)] = inst_35217);

(statearr_35241_35266[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (13))){
var inst_35224 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
var statearr_35242_35267 = state_35234__$1;
(statearr_35242_35267[(2)] = inst_35224);

(statearr_35242_35267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (6))){
var state_35234__$1 = state_35234;
var statearr_35243_35268 = state_35234__$1;
(statearr_35243_35268[(2)] = null);

(statearr_35243_35268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (17))){
var inst_35221 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
var statearr_35244_35269 = state_35234__$1;
(statearr_35244_35269[(2)] = inst_35221);

(statearr_35244_35269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (3))){
var inst_35232 = (state_35234[(2)]);
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35234__$1,inst_35232);
} else {
if((state_val_35235 === (12))){
var state_35234__$1 = state_35234;
var statearr_35245_35270 = state_35234__$1;
(statearr_35245_35270[(2)] = null);

(statearr_35245_35270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (2))){
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35234__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35235 === (11))){
var inst_35205 = (state_35234[(10)]);
var inst_35211 = figwheel.client.file_reloading.blocking_load.call(null,inst_35205);
var state_35234__$1 = state_35234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35234__$1,(14),inst_35211);
} else {
if((state_val_35235 === (9))){
var inst_35205 = (state_35234[(10)]);
var state_35234__$1 = state_35234;
if(cljs.core.truth_(inst_35205)){
var statearr_35246_35271 = state_35234__$1;
(statearr_35246_35271[(1)] = (11));

} else {
var statearr_35247_35272 = state_35234__$1;
(statearr_35247_35272[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (5))){
var inst_35200 = (state_35234[(7)]);
var inst_35206 = (state_35234[(11)]);
var inst_35205 = cljs.core.nth.call(null,inst_35200,(0),null);
var inst_35206__$1 = cljs.core.nth.call(null,inst_35200,(1),null);
var state_35234__$1 = (function (){var statearr_35248 = state_35234;
(statearr_35248[(10)] = inst_35205);

(statearr_35248[(11)] = inst_35206__$1);

return statearr_35248;
})();
if(cljs.core.truth_(inst_35206__$1)){
var statearr_35249_35273 = state_35234__$1;
(statearr_35249_35273[(1)] = (8));

} else {
var statearr_35250_35274 = state_35234__$1;
(statearr_35250_35274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (14))){
var inst_35215 = (state_35234[(8)]);
var inst_35205 = (state_35234[(10)]);
var inst_35213 = (state_35234[(2)]);
var inst_35214 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35215__$1 = cljs.core.get.call(null,inst_35214,inst_35205);
var state_35234__$1 = (function (){var statearr_35251 = state_35234;
(statearr_35251[(8)] = inst_35215__$1);

(statearr_35251[(9)] = inst_35213);

return statearr_35251;
})();
if(cljs.core.truth_(inst_35215__$1)){
var statearr_35252_35275 = state_35234__$1;
(statearr_35252_35275[(1)] = (15));

} else {
var statearr_35253_35276 = state_35234__$1;
(statearr_35253_35276[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (16))){
var inst_35213 = (state_35234[(9)]);
var inst_35219 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35213);
var state_35234__$1 = state_35234;
var statearr_35254_35277 = state_35234__$1;
(statearr_35254_35277[(2)] = inst_35219);

(statearr_35254_35277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (10))){
var inst_35226 = (state_35234[(2)]);
var state_35234__$1 = (function (){var statearr_35255 = state_35234;
(statearr_35255[(12)] = inst_35226);

return statearr_35255;
})();
var statearr_35256_35278 = state_35234__$1;
(statearr_35256_35278[(2)] = null);

(statearr_35256_35278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35235 === (8))){
var inst_35206 = (state_35234[(11)]);
var inst_35208 = eval(inst_35206);
var state_35234__$1 = state_35234;
var statearr_35257_35279 = state_35234__$1;
(statearr_35257_35279[(2)] = inst_35208);

(statearr_35257_35279[(1)] = (10));


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
});})(c__31650__auto__))
;
return ((function (switch__31555__auto__,c__31650__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31556__auto__ = null;
var figwheel$client$file_reloading$state_machine__31556__auto____0 = (function (){
var statearr_35258 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35258[(0)] = figwheel$client$file_reloading$state_machine__31556__auto__);

(statearr_35258[(1)] = (1));

return statearr_35258;
});
var figwheel$client$file_reloading$state_machine__31556__auto____1 = (function (state_35234){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_35234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e35259){if((e35259 instanceof Object)){
var ex__31559__auto__ = e35259;
var statearr_35260_35280 = state_35234;
(statearr_35260_35280[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35281 = state_35234;
state_35234 = G__35281;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31556__auto__ = function(state_35234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31556__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31556__auto____1.call(this,state_35234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31556__auto____0;
figwheel$client$file_reloading$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31556__auto____1;
return figwheel$client$file_reloading$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__))
})();
var state__31652__auto__ = (function (){var statearr_35261 = f__31651__auto__.call(null);
(statearr_35261[(6)] = c__31650__auto__);

return statearr_35261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__))
);

return c__31650__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35283 = arguments.length;
switch (G__35283) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35285,callback){
var map__35286 = p__35285;
var map__35286__$1 = (((((!((map__35286 == null))))?(((((map__35286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35286):map__35286);
var file_msg = map__35286__$1;
var namespace = cljs.core.get.call(null,map__35286__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35286,map__35286__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35286,map__35286__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35288){
var map__35289 = p__35288;
var map__35289__$1 = (((((!((map__35289 == null))))?(((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35289):map__35289);
var file_msg = map__35289__$1;
var namespace = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35291){
var map__35292 = p__35291;
var map__35292__$1 = (((((!((map__35292 == null))))?(((((map__35292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35292):map__35292);
var file_msg = map__35292__$1;
var namespace = cljs.core.get.call(null,map__35292__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35294,callback){
var map__35295 = p__35294;
var map__35295__$1 = (((((!((map__35295 == null))))?(((((map__35295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35295):map__35295);
var file_msg = map__35295__$1;
var request_url = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31650__auto___35345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___35345,out){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___35345,out){
return (function (state_35330){
var state_val_35331 = (state_35330[(1)]);
if((state_val_35331 === (1))){
var inst_35304 = cljs.core.seq.call(null,files);
var inst_35305 = cljs.core.first.call(null,inst_35304);
var inst_35306 = cljs.core.next.call(null,inst_35304);
var inst_35307 = files;
var state_35330__$1 = (function (){var statearr_35332 = state_35330;
(statearr_35332[(7)] = inst_35306);

(statearr_35332[(8)] = inst_35307);

(statearr_35332[(9)] = inst_35305);

return statearr_35332;
})();
var statearr_35333_35346 = state_35330__$1;
(statearr_35333_35346[(2)] = null);

(statearr_35333_35346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35331 === (2))){
var inst_35313 = (state_35330[(10)]);
var inst_35307 = (state_35330[(8)]);
var inst_35312 = cljs.core.seq.call(null,inst_35307);
var inst_35313__$1 = cljs.core.first.call(null,inst_35312);
var inst_35314 = cljs.core.next.call(null,inst_35312);
var inst_35315 = (inst_35313__$1 == null);
var inst_35316 = cljs.core.not.call(null,inst_35315);
var state_35330__$1 = (function (){var statearr_35334 = state_35330;
(statearr_35334[(10)] = inst_35313__$1);

(statearr_35334[(11)] = inst_35314);

return statearr_35334;
})();
if(inst_35316){
var statearr_35335_35347 = state_35330__$1;
(statearr_35335_35347[(1)] = (4));

} else {
var statearr_35336_35348 = state_35330__$1;
(statearr_35336_35348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35331 === (3))){
var inst_35328 = (state_35330[(2)]);
var state_35330__$1 = state_35330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35330__$1,inst_35328);
} else {
if((state_val_35331 === (4))){
var inst_35313 = (state_35330[(10)]);
var inst_35318 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35313);
var state_35330__$1 = state_35330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35330__$1,(7),inst_35318);
} else {
if((state_val_35331 === (5))){
var inst_35324 = cljs.core.async.close_BANG_.call(null,out);
var state_35330__$1 = state_35330;
var statearr_35337_35349 = state_35330__$1;
(statearr_35337_35349[(2)] = inst_35324);

(statearr_35337_35349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35331 === (6))){
var inst_35326 = (state_35330[(2)]);
var state_35330__$1 = state_35330;
var statearr_35338_35350 = state_35330__$1;
(statearr_35338_35350[(2)] = inst_35326);

(statearr_35338_35350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35331 === (7))){
var inst_35314 = (state_35330[(11)]);
var inst_35320 = (state_35330[(2)]);
var inst_35321 = cljs.core.async.put_BANG_.call(null,out,inst_35320);
var inst_35307 = inst_35314;
var state_35330__$1 = (function (){var statearr_35339 = state_35330;
(statearr_35339[(8)] = inst_35307);

(statearr_35339[(12)] = inst_35321);

return statearr_35339;
})();
var statearr_35340_35351 = state_35330__$1;
(statearr_35340_35351[(2)] = null);

(statearr_35340_35351[(1)] = (2));


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
});})(c__31650__auto___35345,out))
;
return ((function (switch__31555__auto__,c__31650__auto___35345,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto____0 = (function (){
var statearr_35341 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35341[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto__);

(statearr_35341[(1)] = (1));

return statearr_35341;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto____1 = (function (state_35330){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_35330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e35342){if((e35342 instanceof Object)){
var ex__31559__auto__ = e35342;
var statearr_35343_35352 = state_35330;
(statearr_35343_35352[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35353 = state_35330;
state_35330 = G__35353;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto__ = function(state_35330){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto____1.call(this,state_35330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___35345,out))
})();
var state__31652__auto__ = (function (){var statearr_35344 = f__31651__auto__.call(null);
(statearr_35344[(6)] = c__31650__auto___35345);

return statearr_35344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___35345,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35354,opts){
var map__35355 = p__35354;
var map__35355__$1 = (((((!((map__35355 == null))))?(((((map__35355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35355):map__35355);
var eval_body = cljs.core.get.call(null,map__35355__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35355__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35357){var e = e35357;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35358_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35358_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35359){
var vec__35360 = p__35359;
var k = cljs.core.nth.call(null,vec__35360,(0),null);
var v = cljs.core.nth.call(null,vec__35360,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35363){
var vec__35364 = p__35363;
var k = cljs.core.nth.call(null,vec__35364,(0),null);
var v = cljs.core.nth.call(null,vec__35364,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35370,p__35371){
var map__35372 = p__35370;
var map__35372__$1 = (((((!((map__35372 == null))))?(((((map__35372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35372):map__35372);
var opts = map__35372__$1;
var before_jsload = cljs.core.get.call(null,map__35372__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35372__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35372__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35373 = p__35371;
var map__35373__$1 = (((((!((map__35373 == null))))?(((((map__35373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35373):map__35373);
var msg = map__35373__$1;
var files = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35527){
var state_val_35528 = (state_35527[(1)]);
if((state_val_35528 === (7))){
var inst_35389 = (state_35527[(7)]);
var inst_35387 = (state_35527[(8)]);
var inst_35388 = (state_35527[(9)]);
var inst_35390 = (state_35527[(10)]);
var inst_35395 = cljs.core._nth.call(null,inst_35388,inst_35390);
var inst_35396 = figwheel.client.file_reloading.eval_body.call(null,inst_35395,opts);
var inst_35397 = (inst_35390 + (1));
var tmp35529 = inst_35389;
var tmp35530 = inst_35387;
var tmp35531 = inst_35388;
var inst_35387__$1 = tmp35530;
var inst_35388__$1 = tmp35531;
var inst_35389__$1 = tmp35529;
var inst_35390__$1 = inst_35397;
var state_35527__$1 = (function (){var statearr_35532 = state_35527;
(statearr_35532[(11)] = inst_35396);

(statearr_35532[(7)] = inst_35389__$1);

(statearr_35532[(8)] = inst_35387__$1);

(statearr_35532[(9)] = inst_35388__$1);

(statearr_35532[(10)] = inst_35390__$1);

return statearr_35532;
})();
var statearr_35533_35616 = state_35527__$1;
(statearr_35533_35616[(2)] = null);

(statearr_35533_35616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (20))){
var inst_35430 = (state_35527[(12)]);
var inst_35438 = figwheel.client.file_reloading.sort_files.call(null,inst_35430);
var state_35527__$1 = state_35527;
var statearr_35534_35617 = state_35527__$1;
(statearr_35534_35617[(2)] = inst_35438);

(statearr_35534_35617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (27))){
var state_35527__$1 = state_35527;
var statearr_35535_35618 = state_35527__$1;
(statearr_35535_35618[(2)] = null);

(statearr_35535_35618[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (1))){
var inst_35379 = (state_35527[(13)]);
var inst_35376 = before_jsload.call(null,files);
var inst_35377 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35378 = (function (){return ((function (inst_35379,inst_35376,inst_35377,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35367_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35367_SHARP_);
});
;})(inst_35379,inst_35376,inst_35377,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35379__$1 = cljs.core.filter.call(null,inst_35378,files);
var inst_35380 = cljs.core.not_empty.call(null,inst_35379__$1);
var state_35527__$1 = (function (){var statearr_35536 = state_35527;
(statearr_35536[(14)] = inst_35376);

(statearr_35536[(13)] = inst_35379__$1);

(statearr_35536[(15)] = inst_35377);

return statearr_35536;
})();
if(cljs.core.truth_(inst_35380)){
var statearr_35537_35619 = state_35527__$1;
(statearr_35537_35619[(1)] = (2));

} else {
var statearr_35538_35620 = state_35527__$1;
(statearr_35538_35620[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (24))){
var state_35527__$1 = state_35527;
var statearr_35539_35621 = state_35527__$1;
(statearr_35539_35621[(2)] = null);

(statearr_35539_35621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (39))){
var inst_35480 = (state_35527[(16)]);
var state_35527__$1 = state_35527;
var statearr_35540_35622 = state_35527__$1;
(statearr_35540_35622[(2)] = inst_35480);

(statearr_35540_35622[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (46))){
var inst_35522 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
var statearr_35541_35623 = state_35527__$1;
(statearr_35541_35623[(2)] = inst_35522);

(statearr_35541_35623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (4))){
var inst_35424 = (state_35527[(2)]);
var inst_35425 = cljs.core.List.EMPTY;
var inst_35426 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35425);
var inst_35427 = (function (){return ((function (inst_35424,inst_35425,inst_35426,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35368_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35368_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35368_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35368_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_35424,inst_35425,inst_35426,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35428 = cljs.core.filter.call(null,inst_35427,files);
var inst_35429 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35430 = cljs.core.concat.call(null,inst_35428,inst_35429);
var state_35527__$1 = (function (){var statearr_35542 = state_35527;
(statearr_35542[(17)] = inst_35424);

(statearr_35542[(18)] = inst_35426);

(statearr_35542[(12)] = inst_35430);

return statearr_35542;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35543_35624 = state_35527__$1;
(statearr_35543_35624[(1)] = (16));

} else {
var statearr_35544_35625 = state_35527__$1;
(statearr_35544_35625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (15))){
var inst_35414 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
var statearr_35545_35626 = state_35527__$1;
(statearr_35545_35626[(2)] = inst_35414);

(statearr_35545_35626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (21))){
var inst_35440 = (state_35527[(19)]);
var inst_35440__$1 = (state_35527[(2)]);
var inst_35441 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35440__$1);
var state_35527__$1 = (function (){var statearr_35546 = state_35527;
(statearr_35546[(19)] = inst_35440__$1);

return statearr_35546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35527__$1,(22),inst_35441);
} else {
if((state_val_35528 === (31))){
var inst_35525 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35527__$1,inst_35525);
} else {
if((state_val_35528 === (32))){
var inst_35480 = (state_35527[(16)]);
var inst_35485 = inst_35480.cljs$lang$protocol_mask$partition0$;
var inst_35486 = (inst_35485 & (64));
var inst_35487 = inst_35480.cljs$core$ISeq$;
var inst_35488 = (cljs.core.PROTOCOL_SENTINEL === inst_35487);
var inst_35489 = ((inst_35486) || (inst_35488));
var state_35527__$1 = state_35527;
if(cljs.core.truth_(inst_35489)){
var statearr_35547_35627 = state_35527__$1;
(statearr_35547_35627[(1)] = (35));

} else {
var statearr_35548_35628 = state_35527__$1;
(statearr_35548_35628[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (40))){
var inst_35502 = (state_35527[(20)]);
var inst_35501 = (state_35527[(2)]);
var inst_35502__$1 = cljs.core.get.call(null,inst_35501,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35503 = cljs.core.get.call(null,inst_35501,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35504 = cljs.core.not_empty.call(null,inst_35502__$1);
var state_35527__$1 = (function (){var statearr_35549 = state_35527;
(statearr_35549[(21)] = inst_35503);

(statearr_35549[(20)] = inst_35502__$1);

return statearr_35549;
})();
if(cljs.core.truth_(inst_35504)){
var statearr_35550_35629 = state_35527__$1;
(statearr_35550_35629[(1)] = (41));

} else {
var statearr_35551_35630 = state_35527__$1;
(statearr_35551_35630[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (33))){
var state_35527__$1 = state_35527;
var statearr_35552_35631 = state_35527__$1;
(statearr_35552_35631[(2)] = false);

(statearr_35552_35631[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (13))){
var inst_35400 = (state_35527[(22)]);
var inst_35404 = cljs.core.chunk_first.call(null,inst_35400);
var inst_35405 = cljs.core.chunk_rest.call(null,inst_35400);
var inst_35406 = cljs.core.count.call(null,inst_35404);
var inst_35387 = inst_35405;
var inst_35388 = inst_35404;
var inst_35389 = inst_35406;
var inst_35390 = (0);
var state_35527__$1 = (function (){var statearr_35553 = state_35527;
(statearr_35553[(7)] = inst_35389);

(statearr_35553[(8)] = inst_35387);

(statearr_35553[(9)] = inst_35388);

(statearr_35553[(10)] = inst_35390);

return statearr_35553;
})();
var statearr_35554_35632 = state_35527__$1;
(statearr_35554_35632[(2)] = null);

(statearr_35554_35632[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (22))){
var inst_35444 = (state_35527[(23)]);
var inst_35440 = (state_35527[(19)]);
var inst_35448 = (state_35527[(24)]);
var inst_35443 = (state_35527[(25)]);
var inst_35443__$1 = (state_35527[(2)]);
var inst_35444__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35443__$1);
var inst_35445 = (function (){var all_files = inst_35440;
var res_SINGLEQUOTE_ = inst_35443__$1;
var res = inst_35444__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35444,inst_35440,inst_35448,inst_35443,inst_35443__$1,inst_35444__$1,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35369_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35369_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35444,inst_35440,inst_35448,inst_35443,inst_35443__$1,inst_35444__$1,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35446 = cljs.core.filter.call(null,inst_35445,inst_35443__$1);
var inst_35447 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35448__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35447);
var inst_35449 = cljs.core.not_empty.call(null,inst_35448__$1);
var state_35527__$1 = (function (){var statearr_35555 = state_35527;
(statearr_35555[(26)] = inst_35446);

(statearr_35555[(23)] = inst_35444__$1);

(statearr_35555[(24)] = inst_35448__$1);

(statearr_35555[(25)] = inst_35443__$1);

return statearr_35555;
})();
if(cljs.core.truth_(inst_35449)){
var statearr_35556_35633 = state_35527__$1;
(statearr_35556_35633[(1)] = (23));

} else {
var statearr_35557_35634 = state_35527__$1;
(statearr_35557_35634[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (36))){
var state_35527__$1 = state_35527;
var statearr_35558_35635 = state_35527__$1;
(statearr_35558_35635[(2)] = false);

(statearr_35558_35635[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (41))){
var inst_35502 = (state_35527[(20)]);
var inst_35506 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35507 = cljs.core.map.call(null,inst_35506,inst_35502);
var inst_35508 = cljs.core.pr_str.call(null,inst_35507);
var inst_35509 = ["figwheel-no-load meta-data: ",inst_35508].join('');
var inst_35510 = figwheel.client.utils.log.call(null,inst_35509);
var state_35527__$1 = state_35527;
var statearr_35559_35636 = state_35527__$1;
(statearr_35559_35636[(2)] = inst_35510);

(statearr_35559_35636[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (43))){
var inst_35503 = (state_35527[(21)]);
var inst_35513 = (state_35527[(2)]);
var inst_35514 = cljs.core.not_empty.call(null,inst_35503);
var state_35527__$1 = (function (){var statearr_35560 = state_35527;
(statearr_35560[(27)] = inst_35513);

return statearr_35560;
})();
if(cljs.core.truth_(inst_35514)){
var statearr_35561_35637 = state_35527__$1;
(statearr_35561_35637[(1)] = (44));

} else {
var statearr_35562_35638 = state_35527__$1;
(statearr_35562_35638[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (29))){
var inst_35446 = (state_35527[(26)]);
var inst_35444 = (state_35527[(23)]);
var inst_35480 = (state_35527[(16)]);
var inst_35440 = (state_35527[(19)]);
var inst_35448 = (state_35527[(24)]);
var inst_35443 = (state_35527[(25)]);
var inst_35476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35479 = (function (){var all_files = inst_35440;
var res_SINGLEQUOTE_ = inst_35443;
var res = inst_35444;
var files_not_loaded = inst_35446;
var dependencies_that_loaded = inst_35448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35446,inst_35444,inst_35480,inst_35440,inst_35448,inst_35443,inst_35476,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35478){
var map__35563 = p__35478;
var map__35563__$1 = (((((!((map__35563 == null))))?(((((map__35563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35563):map__35563);
var namespace = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35446,inst_35444,inst_35480,inst_35440,inst_35448,inst_35443,inst_35476,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35480__$1 = cljs.core.group_by.call(null,inst_35479,inst_35446);
var inst_35482 = (inst_35480__$1 == null);
var inst_35483 = cljs.core.not.call(null,inst_35482);
var state_35527__$1 = (function (){var statearr_35565 = state_35527;
(statearr_35565[(28)] = inst_35476);

(statearr_35565[(16)] = inst_35480__$1);

return statearr_35565;
})();
if(inst_35483){
var statearr_35566_35639 = state_35527__$1;
(statearr_35566_35639[(1)] = (32));

} else {
var statearr_35567_35640 = state_35527__$1;
(statearr_35567_35640[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (44))){
var inst_35503 = (state_35527[(21)]);
var inst_35516 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35503);
var inst_35517 = cljs.core.pr_str.call(null,inst_35516);
var inst_35518 = ["not required: ",inst_35517].join('');
var inst_35519 = figwheel.client.utils.log.call(null,inst_35518);
var state_35527__$1 = state_35527;
var statearr_35568_35641 = state_35527__$1;
(statearr_35568_35641[(2)] = inst_35519);

(statearr_35568_35641[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (6))){
var inst_35421 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
var statearr_35569_35642 = state_35527__$1;
(statearr_35569_35642[(2)] = inst_35421);

(statearr_35569_35642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (28))){
var inst_35446 = (state_35527[(26)]);
var inst_35473 = (state_35527[(2)]);
var inst_35474 = cljs.core.not_empty.call(null,inst_35446);
var state_35527__$1 = (function (){var statearr_35570 = state_35527;
(statearr_35570[(29)] = inst_35473);

return statearr_35570;
})();
if(cljs.core.truth_(inst_35474)){
var statearr_35571_35643 = state_35527__$1;
(statearr_35571_35643[(1)] = (29));

} else {
var statearr_35572_35644 = state_35527__$1;
(statearr_35572_35644[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (25))){
var inst_35444 = (state_35527[(23)]);
var inst_35460 = (state_35527[(2)]);
var inst_35461 = cljs.core.not_empty.call(null,inst_35444);
var state_35527__$1 = (function (){var statearr_35573 = state_35527;
(statearr_35573[(30)] = inst_35460);

return statearr_35573;
})();
if(cljs.core.truth_(inst_35461)){
var statearr_35574_35645 = state_35527__$1;
(statearr_35574_35645[(1)] = (26));

} else {
var statearr_35575_35646 = state_35527__$1;
(statearr_35575_35646[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (34))){
var inst_35496 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
if(cljs.core.truth_(inst_35496)){
var statearr_35576_35647 = state_35527__$1;
(statearr_35576_35647[(1)] = (38));

} else {
var statearr_35577_35648 = state_35527__$1;
(statearr_35577_35648[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (17))){
var state_35527__$1 = state_35527;
var statearr_35578_35649 = state_35527__$1;
(statearr_35578_35649[(2)] = recompile_dependents);

(statearr_35578_35649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (3))){
var state_35527__$1 = state_35527;
var statearr_35579_35650 = state_35527__$1;
(statearr_35579_35650[(2)] = null);

(statearr_35579_35650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (12))){
var inst_35417 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
var statearr_35580_35651 = state_35527__$1;
(statearr_35580_35651[(2)] = inst_35417);

(statearr_35580_35651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (2))){
var inst_35379 = (state_35527[(13)]);
var inst_35386 = cljs.core.seq.call(null,inst_35379);
var inst_35387 = inst_35386;
var inst_35388 = null;
var inst_35389 = (0);
var inst_35390 = (0);
var state_35527__$1 = (function (){var statearr_35581 = state_35527;
(statearr_35581[(7)] = inst_35389);

(statearr_35581[(8)] = inst_35387);

(statearr_35581[(9)] = inst_35388);

(statearr_35581[(10)] = inst_35390);

return statearr_35581;
})();
var statearr_35582_35652 = state_35527__$1;
(statearr_35582_35652[(2)] = null);

(statearr_35582_35652[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (23))){
var inst_35446 = (state_35527[(26)]);
var inst_35444 = (state_35527[(23)]);
var inst_35440 = (state_35527[(19)]);
var inst_35448 = (state_35527[(24)]);
var inst_35443 = (state_35527[(25)]);
var inst_35451 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35453 = (function (){var all_files = inst_35440;
var res_SINGLEQUOTE_ = inst_35443;
var res = inst_35444;
var files_not_loaded = inst_35446;
var dependencies_that_loaded = inst_35448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35446,inst_35444,inst_35440,inst_35448,inst_35443,inst_35451,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35452){
var map__35583 = p__35452;
var map__35583__$1 = (((((!((map__35583 == null))))?(((((map__35583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35583):map__35583);
var request_url = cljs.core.get.call(null,map__35583__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35446,inst_35444,inst_35440,inst_35448,inst_35443,inst_35451,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35454 = cljs.core.reverse.call(null,inst_35448);
var inst_35455 = cljs.core.map.call(null,inst_35453,inst_35454);
var inst_35456 = cljs.core.pr_str.call(null,inst_35455);
var inst_35457 = figwheel.client.utils.log.call(null,inst_35456);
var state_35527__$1 = (function (){var statearr_35585 = state_35527;
(statearr_35585[(31)] = inst_35451);

return statearr_35585;
})();
var statearr_35586_35653 = state_35527__$1;
(statearr_35586_35653[(2)] = inst_35457);

(statearr_35586_35653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (35))){
var state_35527__$1 = state_35527;
var statearr_35587_35654 = state_35527__$1;
(statearr_35587_35654[(2)] = true);

(statearr_35587_35654[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (19))){
var inst_35430 = (state_35527[(12)]);
var inst_35436 = figwheel.client.file_reloading.expand_files.call(null,inst_35430);
var state_35527__$1 = state_35527;
var statearr_35588_35655 = state_35527__$1;
(statearr_35588_35655[(2)] = inst_35436);

(statearr_35588_35655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (11))){
var state_35527__$1 = state_35527;
var statearr_35589_35656 = state_35527__$1;
(statearr_35589_35656[(2)] = null);

(statearr_35589_35656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (9))){
var inst_35419 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
var statearr_35590_35657 = state_35527__$1;
(statearr_35590_35657[(2)] = inst_35419);

(statearr_35590_35657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (5))){
var inst_35389 = (state_35527[(7)]);
var inst_35390 = (state_35527[(10)]);
var inst_35392 = (inst_35390 < inst_35389);
var inst_35393 = inst_35392;
var state_35527__$1 = state_35527;
if(cljs.core.truth_(inst_35393)){
var statearr_35591_35658 = state_35527__$1;
(statearr_35591_35658[(1)] = (7));

} else {
var statearr_35592_35659 = state_35527__$1;
(statearr_35592_35659[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (14))){
var inst_35400 = (state_35527[(22)]);
var inst_35409 = cljs.core.first.call(null,inst_35400);
var inst_35410 = figwheel.client.file_reloading.eval_body.call(null,inst_35409,opts);
var inst_35411 = cljs.core.next.call(null,inst_35400);
var inst_35387 = inst_35411;
var inst_35388 = null;
var inst_35389 = (0);
var inst_35390 = (0);
var state_35527__$1 = (function (){var statearr_35593 = state_35527;
(statearr_35593[(7)] = inst_35389);

(statearr_35593[(8)] = inst_35387);

(statearr_35593[(9)] = inst_35388);

(statearr_35593[(10)] = inst_35390);

(statearr_35593[(32)] = inst_35410);

return statearr_35593;
})();
var statearr_35594_35660 = state_35527__$1;
(statearr_35594_35660[(2)] = null);

(statearr_35594_35660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (45))){
var state_35527__$1 = state_35527;
var statearr_35595_35661 = state_35527__$1;
(statearr_35595_35661[(2)] = null);

(statearr_35595_35661[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (26))){
var inst_35446 = (state_35527[(26)]);
var inst_35444 = (state_35527[(23)]);
var inst_35440 = (state_35527[(19)]);
var inst_35448 = (state_35527[(24)]);
var inst_35443 = (state_35527[(25)]);
var inst_35463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35465 = (function (){var all_files = inst_35440;
var res_SINGLEQUOTE_ = inst_35443;
var res = inst_35444;
var files_not_loaded = inst_35446;
var dependencies_that_loaded = inst_35448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35446,inst_35444,inst_35440,inst_35448,inst_35443,inst_35463,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35464){
var map__35596 = p__35464;
var map__35596__$1 = (((((!((map__35596 == null))))?(((((map__35596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35596):map__35596);
var namespace = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35446,inst_35444,inst_35440,inst_35448,inst_35443,inst_35463,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35466 = cljs.core.map.call(null,inst_35465,inst_35444);
var inst_35467 = cljs.core.pr_str.call(null,inst_35466);
var inst_35468 = figwheel.client.utils.log.call(null,inst_35467);
var inst_35469 = (function (){var all_files = inst_35440;
var res_SINGLEQUOTE_ = inst_35443;
var res = inst_35444;
var files_not_loaded = inst_35446;
var dependencies_that_loaded = inst_35448;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35446,inst_35444,inst_35440,inst_35448,inst_35443,inst_35463,inst_35465,inst_35466,inst_35467,inst_35468,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35446,inst_35444,inst_35440,inst_35448,inst_35443,inst_35463,inst_35465,inst_35466,inst_35467,inst_35468,state_val_35528,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35470 = setTimeout(inst_35469,(10));
var state_35527__$1 = (function (){var statearr_35598 = state_35527;
(statearr_35598[(33)] = inst_35468);

(statearr_35598[(34)] = inst_35463);

return statearr_35598;
})();
var statearr_35599_35662 = state_35527__$1;
(statearr_35599_35662[(2)] = inst_35470);

(statearr_35599_35662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (16))){
var state_35527__$1 = state_35527;
var statearr_35600_35663 = state_35527__$1;
(statearr_35600_35663[(2)] = reload_dependents);

(statearr_35600_35663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (38))){
var inst_35480 = (state_35527[(16)]);
var inst_35498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35480);
var state_35527__$1 = state_35527;
var statearr_35601_35664 = state_35527__$1;
(statearr_35601_35664[(2)] = inst_35498);

(statearr_35601_35664[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (30))){
var state_35527__$1 = state_35527;
var statearr_35602_35665 = state_35527__$1;
(statearr_35602_35665[(2)] = null);

(statearr_35602_35665[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (10))){
var inst_35400 = (state_35527[(22)]);
var inst_35402 = cljs.core.chunked_seq_QMARK_.call(null,inst_35400);
var state_35527__$1 = state_35527;
if(inst_35402){
var statearr_35603_35666 = state_35527__$1;
(statearr_35603_35666[(1)] = (13));

} else {
var statearr_35604_35667 = state_35527__$1;
(statearr_35604_35667[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (18))){
var inst_35434 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
if(cljs.core.truth_(inst_35434)){
var statearr_35605_35668 = state_35527__$1;
(statearr_35605_35668[(1)] = (19));

} else {
var statearr_35606_35669 = state_35527__$1;
(statearr_35606_35669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (42))){
var state_35527__$1 = state_35527;
var statearr_35607_35670 = state_35527__$1;
(statearr_35607_35670[(2)] = null);

(statearr_35607_35670[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (37))){
var inst_35493 = (state_35527[(2)]);
var state_35527__$1 = state_35527;
var statearr_35608_35671 = state_35527__$1;
(statearr_35608_35671[(2)] = inst_35493);

(statearr_35608_35671[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35528 === (8))){
var inst_35387 = (state_35527[(8)]);
var inst_35400 = (state_35527[(22)]);
var inst_35400__$1 = cljs.core.seq.call(null,inst_35387);
var state_35527__$1 = (function (){var statearr_35609 = state_35527;
(statearr_35609[(22)] = inst_35400__$1);

return statearr_35609;
})();
if(inst_35400__$1){
var statearr_35610_35672 = state_35527__$1;
(statearr_35610_35672[(1)] = (10));

} else {
var statearr_35611_35673 = state_35527__$1;
(statearr_35611_35673[(1)] = (11));

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
});})(c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31555__auto__,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto____0 = (function (){
var statearr_35612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35612[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto__);

(statearr_35612[(1)] = (1));

return statearr_35612;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto____1 = (function (state_35527){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_35527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e35613){if((e35613 instanceof Object)){
var ex__31559__auto__ = e35613;
var statearr_35614_35674 = state_35527;
(statearr_35614_35674[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35675 = state_35527;
state_35527 = G__35675;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto__ = function(state_35527){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto____1.call(this,state_35527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31652__auto__ = (function (){var statearr_35615 = f__31651__auto__.call(null);
(statearr_35615[(6)] = c__31650__auto__);

return statearr_35615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__,map__35372,map__35372__$1,opts,before_jsload,on_jsload,reload_dependents,map__35373,map__35373__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31650__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35678,link){
var map__35679 = p__35678;
var map__35679__$1 = (((((!((map__35679 == null))))?(((((map__35679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35679):map__35679);
var file = cljs.core.get.call(null,map__35679__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__35679,map__35679__$1,file){
return (function (p1__35676_SHARP_,p2__35677_SHARP_){
if(cljs.core._EQ_.call(null,p1__35676_SHARP_,p2__35677_SHARP_)){
return p1__35676_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__35679,map__35679__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35682){
var map__35683 = p__35682;
var map__35683__$1 = (((((!((map__35683 == null))))?(((((map__35683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35683):map__35683);
var match_length = cljs.core.get.call(null,map__35683__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35683__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35681_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35681_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35685_SHARP_,p2__35686_SHARP_){
return cljs.core.assoc.call(null,p1__35685_SHARP_,cljs.core.get.call(null,p2__35686_SHARP_,key),p2__35686_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35687 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35687);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35687);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35688,p__35689){
var map__35690 = p__35688;
var map__35690__$1 = (((((!((map__35690 == null))))?(((((map__35690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35690):map__35690);
var on_cssload = cljs.core.get.call(null,map__35690__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35691 = p__35689;
var map__35691__$1 = (((((!((map__35691 == null))))?(((((map__35691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35691):map__35691);
var files_msg = map__35691__$1;
var files = cljs.core.get.call(null,map__35691__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1640328140869
