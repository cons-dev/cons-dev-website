// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35696){
var map__35697 = p__35696;
var map__35697__$1 = (((((!((map__35697 == null))))?(((((map__35697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35697):map__35697);
var m = map__35697__$1;
var n = cljs.core.get.call(null,map__35697__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35697__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35699_35731 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35700_35732 = null;
var count__35701_35733 = (0);
var i__35702_35734 = (0);
while(true){
if((i__35702_35734 < count__35701_35733)){
var f_35735 = cljs.core._nth.call(null,chunk__35700_35732,i__35702_35734);
cljs.core.println.call(null,"  ",f_35735);


var G__35736 = seq__35699_35731;
var G__35737 = chunk__35700_35732;
var G__35738 = count__35701_35733;
var G__35739 = (i__35702_35734 + (1));
seq__35699_35731 = G__35736;
chunk__35700_35732 = G__35737;
count__35701_35733 = G__35738;
i__35702_35734 = G__35739;
continue;
} else {
var temp__5735__auto___35740 = cljs.core.seq.call(null,seq__35699_35731);
if(temp__5735__auto___35740){
var seq__35699_35741__$1 = temp__5735__auto___35740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35699_35741__$1)){
var c__4550__auto___35742 = cljs.core.chunk_first.call(null,seq__35699_35741__$1);
var G__35743 = cljs.core.chunk_rest.call(null,seq__35699_35741__$1);
var G__35744 = c__4550__auto___35742;
var G__35745 = cljs.core.count.call(null,c__4550__auto___35742);
var G__35746 = (0);
seq__35699_35731 = G__35743;
chunk__35700_35732 = G__35744;
count__35701_35733 = G__35745;
i__35702_35734 = G__35746;
continue;
} else {
var f_35747 = cljs.core.first.call(null,seq__35699_35741__$1);
cljs.core.println.call(null,"  ",f_35747);


var G__35748 = cljs.core.next.call(null,seq__35699_35741__$1);
var G__35749 = null;
var G__35750 = (0);
var G__35751 = (0);
seq__35699_35731 = G__35748;
chunk__35700_35732 = G__35749;
count__35701_35733 = G__35750;
i__35702_35734 = G__35751;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35752 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35752);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35752)))?cljs.core.second.call(null,arglists_35752):arglists_35752));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35703_35753 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35704_35754 = null;
var count__35705_35755 = (0);
var i__35706_35756 = (0);
while(true){
if((i__35706_35756 < count__35705_35755)){
var vec__35717_35757 = cljs.core._nth.call(null,chunk__35704_35754,i__35706_35756);
var name_35758 = cljs.core.nth.call(null,vec__35717_35757,(0),null);
var map__35720_35759 = cljs.core.nth.call(null,vec__35717_35757,(1),null);
var map__35720_35760__$1 = (((((!((map__35720_35759 == null))))?(((((map__35720_35759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35720_35759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35720_35759):map__35720_35759);
var doc_35761 = cljs.core.get.call(null,map__35720_35760__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35762 = cljs.core.get.call(null,map__35720_35760__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35758);

cljs.core.println.call(null," ",arglists_35762);

if(cljs.core.truth_(doc_35761)){
cljs.core.println.call(null," ",doc_35761);
} else {
}


var G__35763 = seq__35703_35753;
var G__35764 = chunk__35704_35754;
var G__35765 = count__35705_35755;
var G__35766 = (i__35706_35756 + (1));
seq__35703_35753 = G__35763;
chunk__35704_35754 = G__35764;
count__35705_35755 = G__35765;
i__35706_35756 = G__35766;
continue;
} else {
var temp__5735__auto___35767 = cljs.core.seq.call(null,seq__35703_35753);
if(temp__5735__auto___35767){
var seq__35703_35768__$1 = temp__5735__auto___35767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35703_35768__$1)){
var c__4550__auto___35769 = cljs.core.chunk_first.call(null,seq__35703_35768__$1);
var G__35770 = cljs.core.chunk_rest.call(null,seq__35703_35768__$1);
var G__35771 = c__4550__auto___35769;
var G__35772 = cljs.core.count.call(null,c__4550__auto___35769);
var G__35773 = (0);
seq__35703_35753 = G__35770;
chunk__35704_35754 = G__35771;
count__35705_35755 = G__35772;
i__35706_35756 = G__35773;
continue;
} else {
var vec__35722_35774 = cljs.core.first.call(null,seq__35703_35768__$1);
var name_35775 = cljs.core.nth.call(null,vec__35722_35774,(0),null);
var map__35725_35776 = cljs.core.nth.call(null,vec__35722_35774,(1),null);
var map__35725_35777__$1 = (((((!((map__35725_35776 == null))))?(((((map__35725_35776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35725_35776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35725_35776):map__35725_35776);
var doc_35778 = cljs.core.get.call(null,map__35725_35777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35779 = cljs.core.get.call(null,map__35725_35777__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35775);

cljs.core.println.call(null," ",arglists_35779);

if(cljs.core.truth_(doc_35778)){
cljs.core.println.call(null," ",doc_35778);
} else {
}


var G__35780 = cljs.core.next.call(null,seq__35703_35768__$1);
var G__35781 = null;
var G__35782 = (0);
var G__35783 = (0);
seq__35703_35753 = G__35780;
chunk__35704_35754 = G__35781;
count__35705_35755 = G__35782;
i__35706_35756 = G__35783;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__35727 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35728 = null;
var count__35729 = (0);
var i__35730 = (0);
while(true){
if((i__35730 < count__35729)){
var role = cljs.core._nth.call(null,chunk__35728,i__35730);
var temp__5735__auto___35784__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35784__$1)){
var spec_35785 = temp__5735__auto___35784__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35785));
} else {
}


var G__35786 = seq__35727;
var G__35787 = chunk__35728;
var G__35788 = count__35729;
var G__35789 = (i__35730 + (1));
seq__35727 = G__35786;
chunk__35728 = G__35787;
count__35729 = G__35788;
i__35730 = G__35789;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__35727);
if(temp__5735__auto____$1){
var seq__35727__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35727__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35727__$1);
var G__35790 = cljs.core.chunk_rest.call(null,seq__35727__$1);
var G__35791 = c__4550__auto__;
var G__35792 = cljs.core.count.call(null,c__4550__auto__);
var G__35793 = (0);
seq__35727 = G__35790;
chunk__35728 = G__35791;
count__35729 = G__35792;
i__35730 = G__35793;
continue;
} else {
var role = cljs.core.first.call(null,seq__35727__$1);
var temp__5735__auto___35794__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35794__$2)){
var spec_35795 = temp__5735__auto___35794__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35795));
} else {
}


var G__35796 = cljs.core.next.call(null,seq__35727__$1);
var G__35797 = null;
var G__35798 = (0);
var G__35799 = (0);
seq__35727 = G__35796;
chunk__35728 = G__35797;
count__35729 = G__35798;
i__35730 = G__35799;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35800 = cljs.core.conj.call(null,via,t);
var G__35801 = cljs.core.ex_cause.call(null,t);
via = G__35800;
t = G__35801;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35804 = datafied_throwable;
var map__35804__$1 = (((((!((map__35804 == null))))?(((((map__35804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35804):map__35804);
var via = cljs.core.get.call(null,map__35804__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35804__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35804__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35805 = cljs.core.last.call(null,via);
var map__35805__$1 = (((((!((map__35805 == null))))?(((((map__35805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35805):map__35805);
var type = cljs.core.get.call(null,map__35805__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35805__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35805__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35806 = data;
var map__35806__$1 = (((((!((map__35806 == null))))?(((((map__35806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35806):map__35806);
var problems = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35806__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35807 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35807__$1 = (((((!((map__35807 == null))))?(((((map__35807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35807):map__35807);
var top_data = map__35807__$1;
var source = cljs.core.get.call(null,map__35807__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35812 = phase;
var G__35812__$1 = (((G__35812 instanceof cljs.core.Keyword))?G__35812.fqn:null);
switch (G__35812__$1) {
case "read-source":
var map__35813 = data;
var map__35813__$1 = (((((!((map__35813 == null))))?(((((map__35813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35813):map__35813);
var line = cljs.core.get.call(null,map__35813__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35813__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35815 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35815__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35815,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35815);
var G__35815__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35815__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35815__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35815__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35815__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35816 = top_data;
var G__35816__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35816,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35816);
var G__35816__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35816__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35816__$1);
var G__35816__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35816__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35816__$2);
var G__35816__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35816__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35816__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35816__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35816__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35817 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35817,(0),null);
var method = cljs.core.nth.call(null,vec__35817,(1),null);
var file = cljs.core.nth.call(null,vec__35817,(2),null);
var line = cljs.core.nth.call(null,vec__35817,(3),null);
var G__35820 = top_data;
var G__35820__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35820,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35820);
var G__35820__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35820__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35820__$1);
var G__35820__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35820__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35820__$2);
var G__35820__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35820__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35820__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35820__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35820__$4;
}

break;
case "execution":
var vec__35821 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35821,(0),null);
var method = cljs.core.nth.call(null,vec__35821,(1),null);
var file = cljs.core.nth.call(null,vec__35821,(2),null);
var line = cljs.core.nth.call(null,vec__35821,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35821,source__$1,method,file,line,G__35812,G__35812__$1,map__35804,map__35804__$1,via,trace,phase,map__35805,map__35805__$1,type,message,data,map__35806,map__35806__$1,problems,fn,caller,map__35807,map__35807__$1,top_data,source){
return (function (p1__35803_SHARP_){
var or__4131__auto__ = (p1__35803_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35803_SHARP_);
}
});})(vec__35821,source__$1,method,file,line,G__35812,G__35812__$1,map__35804,map__35804__$1,via,trace,phase,map__35805,map__35805__$1,type,message,data,map__35806,map__35806__$1,problems,fn,caller,map__35807,map__35807__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35824 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35824__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35824,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35824);
var G__35824__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35824__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35824__$1);
var G__35824__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__35824__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35824__$2);
var G__35824__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35824__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35824__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35824__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35824__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35812__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35828){
var map__35829 = p__35828;
var map__35829__$1 = (((((!((map__35829 == null))))?(((((map__35829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35829):map__35829);
var triage_data = map__35829__$1;
var phase = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35831 = phase;
var G__35831__$1 = (((G__35831 instanceof cljs.core.Keyword))?G__35831.fqn:null);
switch (G__35831__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35832_35841 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35833_35842 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35834_35843 = true;
var _STAR_print_fn_STAR__temp_val__35835_35844 = ((function (_STAR_print_newline_STAR__orig_val__35832_35841,_STAR_print_fn_STAR__orig_val__35833_35842,_STAR_print_newline_STAR__temp_val__35834_35843,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35832_35841,_STAR_print_fn_STAR__orig_val__35833_35842,_STAR_print_newline_STAR__temp_val__35834_35843,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35834_35843;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35835_35844;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35832_35841,_STAR_print_fn_STAR__orig_val__35833_35842,_STAR_print_newline_STAR__temp_val__35834_35843,_STAR_print_fn_STAR__temp_val__35835_35844,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35832_35841,_STAR_print_fn_STAR__orig_val__35833_35842,_STAR_print_newline_STAR__temp_val__35834_35843,_STAR_print_fn_STAR__temp_val__35835_35844,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35826_SHARP_){
return cljs.core.dissoc.call(null,p1__35826_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35832_35841,_STAR_print_fn_STAR__orig_val__35833_35842,_STAR_print_newline_STAR__temp_val__35834_35843,_STAR_print_fn_STAR__temp_val__35835_35844,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35832_35841,_STAR_print_fn_STAR__orig_val__35833_35842,_STAR_print_newline_STAR__temp_val__35834_35843,_STAR_print_fn_STAR__temp_val__35835_35844,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35833_35842;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35832_35841;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35836_35845 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35837_35846 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35838_35847 = true;
var _STAR_print_fn_STAR__temp_val__35839_35848 = ((function (_STAR_print_newline_STAR__orig_val__35836_35845,_STAR_print_fn_STAR__orig_val__35837_35846,_STAR_print_newline_STAR__temp_val__35838_35847,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35836_35845,_STAR_print_fn_STAR__orig_val__35837_35846,_STAR_print_newline_STAR__temp_val__35838_35847,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35838_35847;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35839_35848;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35836_35845,_STAR_print_fn_STAR__orig_val__35837_35846,_STAR_print_newline_STAR__temp_val__35838_35847,_STAR_print_fn_STAR__temp_val__35839_35848,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35836_35845,_STAR_print_fn_STAR__orig_val__35837_35846,_STAR_print_newline_STAR__temp_val__35838_35847,_STAR_print_fn_STAR__temp_val__35839_35848,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35827_SHARP_){
return cljs.core.dissoc.call(null,p1__35827_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35836_35845,_STAR_print_fn_STAR__orig_val__35837_35846,_STAR_print_newline_STAR__temp_val__35838_35847,_STAR_print_fn_STAR__temp_val__35839_35848,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35836_35845,_STAR_print_fn_STAR__orig_val__35837_35846,_STAR_print_newline_STAR__temp_val__35838_35847,_STAR_print_fn_STAR__temp_val__35839_35848,sb__4661__auto__,G__35831,G__35831__$1,loc,class_name,simple_class,cause_type,format,map__35829,map__35829__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35837_35846;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35836_35845;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35831__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1640328141016
