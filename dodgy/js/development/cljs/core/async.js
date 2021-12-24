// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31710 = arguments.length;
switch (G__31710) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31711 = (function (f,blockable,meta31712){
this.f = f;
this.blockable = blockable;
this.meta31712 = meta31712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31713,meta31712__$1){
var self__ = this;
var _31713__$1 = this;
return (new cljs.core.async.t_cljs$core$async31711(self__.f,self__.blockable,meta31712__$1));
});

cljs.core.async.t_cljs$core$async31711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31713){
var self__ = this;
var _31713__$1 = this;
return self__.meta31712;
});

cljs.core.async.t_cljs$core$async31711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31712","meta31712",1828052451,null)], null);
});

cljs.core.async.t_cljs$core$async31711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31711";

cljs.core.async.t_cljs$core$async31711.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31711");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31711.
 */
cljs.core.async.__GT_t_cljs$core$async31711 = (function cljs$core$async$__GT_t_cljs$core$async31711(f__$1,blockable__$1,meta31712){
return (new cljs.core.async.t_cljs$core$async31711(f__$1,blockable__$1,meta31712));
});

}

return (new cljs.core.async.t_cljs$core$async31711(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31717 = arguments.length;
switch (G__31717) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31720 = arguments.length;
switch (G__31720) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31723 = arguments.length;
switch (G__31723) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31725 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31725);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31725,ret){
return (function (){
return fn1.call(null,val_31725);
});})(val_31725,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31727 = arguments.length;
switch (G__31727) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___31729 = n;
var x_31730 = (0);
while(true){
if((x_31730 < n__4607__auto___31729)){
(a[x_31730] = (0));

var G__31731 = (x_31730 + (1));
x_31730 = G__31731;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31732 = (i + (1));
i = G__31732;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31733 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31733 = (function (flag,meta31734){
this.flag = flag;
this.meta31734 = meta31734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31735,meta31734__$1){
var self__ = this;
var _31735__$1 = this;
return (new cljs.core.async.t_cljs$core$async31733(self__.flag,meta31734__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31735){
var self__ = this;
var _31735__$1 = this;
return self__.meta31734;
});})(flag))
;

cljs.core.async.t_cljs$core$async31733.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31733.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31734","meta31734",407484719,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31733.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31733";

cljs.core.async.t_cljs$core$async31733.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31733");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31733.
 */
cljs.core.async.__GT_t_cljs$core$async31733 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31733(flag__$1,meta31734){
return (new cljs.core.async.t_cljs$core$async31733(flag__$1,meta31734));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31733(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31736 = (function (flag,cb,meta31737){
this.flag = flag;
this.cb = cb;
this.meta31737 = meta31737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31738,meta31737__$1){
var self__ = this;
var _31738__$1 = this;
return (new cljs.core.async.t_cljs$core$async31736(self__.flag,self__.cb,meta31737__$1));
});

cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31738){
var self__ = this;
var _31738__$1 = this;
return self__.meta31737;
});

cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31737","meta31737",-1390292890,null)], null);
});

cljs.core.async.t_cljs$core$async31736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31736";

cljs.core.async.t_cljs$core$async31736.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async31736");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31736.
 */
cljs.core.async.__GT_t_cljs$core$async31736 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31736(flag__$1,cb__$1,meta31737){
return (new cljs.core.async.t_cljs$core$async31736(flag__$1,cb__$1,meta31737));
});

}

return (new cljs.core.async.t_cljs$core$async31736(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31739_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31739_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31740_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31740_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31741 = (i + (1));
i = G__31741;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31747 = arguments.length;
var i__4731__auto___31748 = (0);
while(true){
if((i__4731__auto___31748 < len__4730__auto___31747)){
args__4736__auto__.push((arguments[i__4731__auto___31748]));

var G__31749 = (i__4731__auto___31748 + (1));
i__4731__auto___31748 = G__31749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31744){
var map__31745 = p__31744;
var map__31745__$1 = (((((!((map__31745 == null))))?(((((map__31745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31745):map__31745);
var opts = map__31745__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31742){
var G__31743 = cljs.core.first.call(null,seq31742);
var seq31742__$1 = cljs.core.next.call(null,seq31742);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31743,seq31742__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31751 = arguments.length;
switch (G__31751) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31650__auto___31797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___31797){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___31797){
return (function (state_31775){
var state_val_31776 = (state_31775[(1)]);
if((state_val_31776 === (7))){
var inst_31771 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31777_31798 = state_31775__$1;
(statearr_31777_31798[(2)] = inst_31771);

(statearr_31777_31798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (1))){
var state_31775__$1 = state_31775;
var statearr_31778_31799 = state_31775__$1;
(statearr_31778_31799[(2)] = null);

(statearr_31778_31799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (4))){
var inst_31754 = (state_31775[(7)]);
var inst_31754__$1 = (state_31775[(2)]);
var inst_31755 = (inst_31754__$1 == null);
var state_31775__$1 = (function (){var statearr_31779 = state_31775;
(statearr_31779[(7)] = inst_31754__$1);

return statearr_31779;
})();
if(cljs.core.truth_(inst_31755)){
var statearr_31780_31800 = state_31775__$1;
(statearr_31780_31800[(1)] = (5));

} else {
var statearr_31781_31801 = state_31775__$1;
(statearr_31781_31801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (13))){
var state_31775__$1 = state_31775;
var statearr_31782_31802 = state_31775__$1;
(statearr_31782_31802[(2)] = null);

(statearr_31782_31802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (6))){
var inst_31754 = (state_31775[(7)]);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31775__$1,(11),to,inst_31754);
} else {
if((state_val_31776 === (3))){
var inst_31773 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31775__$1,inst_31773);
} else {
if((state_val_31776 === (12))){
var state_31775__$1 = state_31775;
var statearr_31783_31803 = state_31775__$1;
(statearr_31783_31803[(2)] = null);

(statearr_31783_31803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (2))){
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31775__$1,(4),from);
} else {
if((state_val_31776 === (11))){
var inst_31764 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
if(cljs.core.truth_(inst_31764)){
var statearr_31784_31804 = state_31775__$1;
(statearr_31784_31804[(1)] = (12));

} else {
var statearr_31785_31805 = state_31775__$1;
(statearr_31785_31805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (9))){
var state_31775__$1 = state_31775;
var statearr_31786_31806 = state_31775__$1;
(statearr_31786_31806[(2)] = null);

(statearr_31786_31806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (5))){
var state_31775__$1 = state_31775;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31787_31807 = state_31775__$1;
(statearr_31787_31807[(1)] = (8));

} else {
var statearr_31788_31808 = state_31775__$1;
(statearr_31788_31808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (14))){
var inst_31769 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31789_31809 = state_31775__$1;
(statearr_31789_31809[(2)] = inst_31769);

(statearr_31789_31809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (10))){
var inst_31761 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31790_31810 = state_31775__$1;
(statearr_31790_31810[(2)] = inst_31761);

(statearr_31790_31810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (8))){
var inst_31758 = cljs.core.async.close_BANG_.call(null,to);
var state_31775__$1 = state_31775;
var statearr_31791_31811 = state_31775__$1;
(statearr_31791_31811[(2)] = inst_31758);

(statearr_31791_31811[(1)] = (10));


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
});})(c__31650__auto___31797))
;
return ((function (switch__31555__auto__,c__31650__auto___31797){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_31792 = [null,null,null,null,null,null,null,null];
(statearr_31792[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_31792[(1)] = (1));

return statearr_31792;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_31775){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_31775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e31793){if((e31793 instanceof Object)){
var ex__31559__auto__ = e31793;
var statearr_31794_31812 = state_31775;
(statearr_31794_31812[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31813 = state_31775;
state_31775 = G__31813;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_31775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_31775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___31797))
})();
var state__31652__auto__ = (function (){var statearr_31795 = f__31651__auto__.call(null);
(statearr_31795[(6)] = c__31650__auto___31797);

return statearr_31795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___31797))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31814){
var vec__31815 = p__31814;
var v = cljs.core.nth.call(null,vec__31815,(0),null);
var p = cljs.core.nth.call(null,vec__31815,(1),null);
var job = vec__31815;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31650__auto___31986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___31986,res,vec__31815,v,p,job,jobs,results){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___31986,res,vec__31815,v,p,job,jobs,results){
return (function (state_31822){
var state_val_31823 = (state_31822[(1)]);
if((state_val_31823 === (1))){
var state_31822__$1 = state_31822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31822__$1,(2),res,v);
} else {
if((state_val_31823 === (2))){
var inst_31819 = (state_31822[(2)]);
var inst_31820 = cljs.core.async.close_BANG_.call(null,res);
var state_31822__$1 = (function (){var statearr_31824 = state_31822;
(statearr_31824[(7)] = inst_31819);

return statearr_31824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31822__$1,inst_31820);
} else {
return null;
}
}
});})(c__31650__auto___31986,res,vec__31815,v,p,job,jobs,results))
;
return ((function (switch__31555__auto__,c__31650__auto___31986,res,vec__31815,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0 = (function (){
var statearr_31825 = [null,null,null,null,null,null,null,null];
(statearr_31825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__);

(statearr_31825[(1)] = (1));

return statearr_31825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1 = (function (state_31822){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_31822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e31826){if((e31826 instanceof Object)){
var ex__31559__auto__ = e31826;
var statearr_31827_31987 = state_31822;
(statearr_31827_31987[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31988 = state_31822;
state_31822 = G__31988;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = function(state_31822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1.call(this,state_31822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___31986,res,vec__31815,v,p,job,jobs,results))
})();
var state__31652__auto__ = (function (){var statearr_31828 = f__31651__auto__.call(null);
(statearr_31828[(6)] = c__31650__auto___31986);

return statearr_31828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___31986,res,vec__31815,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31829){
var vec__31830 = p__31829;
var v = cljs.core.nth.call(null,vec__31830,(0),null);
var p = cljs.core.nth.call(null,vec__31830,(1),null);
var job = vec__31830;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___31989 = n;
var __31990 = (0);
while(true){
if((__31990 < n__4607__auto___31989)){
var G__31833_31991 = type;
var G__31833_31992__$1 = (((G__31833_31991 instanceof cljs.core.Keyword))?G__31833_31991.fqn:null);
switch (G__31833_31992__$1) {
case "compute":
var c__31650__auto___31994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31990,c__31650__auto___31994,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (__31990,c__31650__auto___31994,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async){
return (function (state_31846){
var state_val_31847 = (state_31846[(1)]);
if((state_val_31847 === (1))){
var state_31846__$1 = state_31846;
var statearr_31848_31995 = state_31846__$1;
(statearr_31848_31995[(2)] = null);

(statearr_31848_31995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (2))){
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31846__$1,(4),jobs);
} else {
if((state_val_31847 === (3))){
var inst_31844 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31846__$1,inst_31844);
} else {
if((state_val_31847 === (4))){
var inst_31836 = (state_31846[(2)]);
var inst_31837 = process.call(null,inst_31836);
var state_31846__$1 = state_31846;
if(cljs.core.truth_(inst_31837)){
var statearr_31849_31996 = state_31846__$1;
(statearr_31849_31996[(1)] = (5));

} else {
var statearr_31850_31997 = state_31846__$1;
(statearr_31850_31997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (5))){
var state_31846__$1 = state_31846;
var statearr_31851_31998 = state_31846__$1;
(statearr_31851_31998[(2)] = null);

(statearr_31851_31998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (6))){
var state_31846__$1 = state_31846;
var statearr_31852_31999 = state_31846__$1;
(statearr_31852_31999[(2)] = null);

(statearr_31852_31999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31847 === (7))){
var inst_31842 = (state_31846[(2)]);
var state_31846__$1 = state_31846;
var statearr_31853_32000 = state_31846__$1;
(statearr_31853_32000[(2)] = inst_31842);

(statearr_31853_32000[(1)] = (3));


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
});})(__31990,c__31650__auto___31994,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async))
;
return ((function (__31990,switch__31555__auto__,c__31650__auto___31994,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0 = (function (){
var statearr_31854 = [null,null,null,null,null,null,null];
(statearr_31854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__);

(statearr_31854[(1)] = (1));

return statearr_31854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1 = (function (state_31846){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_31846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e31855){if((e31855 instanceof Object)){
var ex__31559__auto__ = e31855;
var statearr_31856_32001 = state_31846;
(statearr_31856_32001[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32002 = state_31846;
state_31846 = G__32002;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = function(state_31846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1.call(this,state_31846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__;
})()
;})(__31990,switch__31555__auto__,c__31650__auto___31994,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async))
})();
var state__31652__auto__ = (function (){var statearr_31857 = f__31651__auto__.call(null);
(statearr_31857[(6)] = c__31650__auto___31994);

return statearr_31857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(__31990,c__31650__auto___31994,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async))
);


break;
case "async":
var c__31650__auto___32003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31990,c__31650__auto___32003,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (__31990,c__31650__auto___32003,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async){
return (function (state_31870){
var state_val_31871 = (state_31870[(1)]);
if((state_val_31871 === (1))){
var state_31870__$1 = state_31870;
var statearr_31872_32004 = state_31870__$1;
(statearr_31872_32004[(2)] = null);

(statearr_31872_32004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (2))){
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31870__$1,(4),jobs);
} else {
if((state_val_31871 === (3))){
var inst_31868 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31870__$1,inst_31868);
} else {
if((state_val_31871 === (4))){
var inst_31860 = (state_31870[(2)]);
var inst_31861 = async.call(null,inst_31860);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31861)){
var statearr_31873_32005 = state_31870__$1;
(statearr_31873_32005[(1)] = (5));

} else {
var statearr_31874_32006 = state_31870__$1;
(statearr_31874_32006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (5))){
var state_31870__$1 = state_31870;
var statearr_31875_32007 = state_31870__$1;
(statearr_31875_32007[(2)] = null);

(statearr_31875_32007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (6))){
var state_31870__$1 = state_31870;
var statearr_31876_32008 = state_31870__$1;
(statearr_31876_32008[(2)] = null);

(statearr_31876_32008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (7))){
var inst_31866 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31877_32009 = state_31870__$1;
(statearr_31877_32009[(2)] = inst_31866);

(statearr_31877_32009[(1)] = (3));


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
});})(__31990,c__31650__auto___32003,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async))
;
return ((function (__31990,switch__31555__auto__,c__31650__auto___32003,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0 = (function (){
var statearr_31878 = [null,null,null,null,null,null,null];
(statearr_31878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__);

(statearr_31878[(1)] = (1));

return statearr_31878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1 = (function (state_31870){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_31870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e31879){if((e31879 instanceof Object)){
var ex__31559__auto__ = e31879;
var statearr_31880_32010 = state_31870;
(statearr_31880_32010[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32011 = state_31870;
state_31870 = G__32011;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = function(state_31870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1.call(this,state_31870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__;
})()
;})(__31990,switch__31555__auto__,c__31650__auto___32003,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async))
})();
var state__31652__auto__ = (function (){var statearr_31881 = f__31651__auto__.call(null);
(statearr_31881[(6)] = c__31650__auto___32003);

return statearr_31881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(__31990,c__31650__auto___32003,G__31833_31991,G__31833_31992__$1,n__4607__auto___31989,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31833_31992__$1)].join('')));

}

var G__32012 = (__31990 + (1));
__31990 = G__32012;
continue;
} else {
}
break;
}

var c__31650__auto___32013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___32013,jobs,results,process,async){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___32013,jobs,results,process,async){
return (function (state_31903){
var state_val_31904 = (state_31903[(1)]);
if((state_val_31904 === (7))){
var inst_31899 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31905_32014 = state_31903__$1;
(statearr_31905_32014[(2)] = inst_31899);

(statearr_31905_32014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (1))){
var state_31903__$1 = state_31903;
var statearr_31906_32015 = state_31903__$1;
(statearr_31906_32015[(2)] = null);

(statearr_31906_32015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (4))){
var inst_31884 = (state_31903[(7)]);
var inst_31884__$1 = (state_31903[(2)]);
var inst_31885 = (inst_31884__$1 == null);
var state_31903__$1 = (function (){var statearr_31907 = state_31903;
(statearr_31907[(7)] = inst_31884__$1);

return statearr_31907;
})();
if(cljs.core.truth_(inst_31885)){
var statearr_31908_32016 = state_31903__$1;
(statearr_31908_32016[(1)] = (5));

} else {
var statearr_31909_32017 = state_31903__$1;
(statearr_31909_32017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (6))){
var inst_31889 = (state_31903[(8)]);
var inst_31884 = (state_31903[(7)]);
var inst_31889__$1 = cljs.core.async.chan.call(null,(1));
var inst_31890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31891 = [inst_31884,inst_31889__$1];
var inst_31892 = (new cljs.core.PersistentVector(null,2,(5),inst_31890,inst_31891,null));
var state_31903__$1 = (function (){var statearr_31910 = state_31903;
(statearr_31910[(8)] = inst_31889__$1);

return statearr_31910;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31903__$1,(8),jobs,inst_31892);
} else {
if((state_val_31904 === (3))){
var inst_31901 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31903__$1,inst_31901);
} else {
if((state_val_31904 === (2))){
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31903__$1,(4),from);
} else {
if((state_val_31904 === (9))){
var inst_31896 = (state_31903[(2)]);
var state_31903__$1 = (function (){var statearr_31911 = state_31903;
(statearr_31911[(9)] = inst_31896);

return statearr_31911;
})();
var statearr_31912_32018 = state_31903__$1;
(statearr_31912_32018[(2)] = null);

(statearr_31912_32018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (5))){
var inst_31887 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31903__$1 = state_31903;
var statearr_31913_32019 = state_31903__$1;
(statearr_31913_32019[(2)] = inst_31887);

(statearr_31913_32019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (8))){
var inst_31889 = (state_31903[(8)]);
var inst_31894 = (state_31903[(2)]);
var state_31903__$1 = (function (){var statearr_31914 = state_31903;
(statearr_31914[(10)] = inst_31894);

return statearr_31914;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31903__$1,(9),results,inst_31889);
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
});})(c__31650__auto___32013,jobs,results,process,async))
;
return ((function (switch__31555__auto__,c__31650__auto___32013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0 = (function (){
var statearr_31915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__);

(statearr_31915[(1)] = (1));

return statearr_31915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1 = (function (state_31903){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_31903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e31916){if((e31916 instanceof Object)){
var ex__31559__auto__ = e31916;
var statearr_31917_32020 = state_31903;
(statearr_31917_32020[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32021 = state_31903;
state_31903 = G__32021;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = function(state_31903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1.call(this,state_31903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___32013,jobs,results,process,async))
})();
var state__31652__auto__ = (function (){var statearr_31918 = f__31651__auto__.call(null);
(statearr_31918[(6)] = c__31650__auto___32013);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___32013,jobs,results,process,async))
);


var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__,jobs,results,process,async){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__,jobs,results,process,async){
return (function (state_31956){
var state_val_31957 = (state_31956[(1)]);
if((state_val_31957 === (7))){
var inst_31952 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31958_32022 = state_31956__$1;
(statearr_31958_32022[(2)] = inst_31952);

(statearr_31958_32022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (20))){
var state_31956__$1 = state_31956;
var statearr_31959_32023 = state_31956__$1;
(statearr_31959_32023[(2)] = null);

(statearr_31959_32023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (1))){
var state_31956__$1 = state_31956;
var statearr_31960_32024 = state_31956__$1;
(statearr_31960_32024[(2)] = null);

(statearr_31960_32024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (4))){
var inst_31921 = (state_31956[(7)]);
var inst_31921__$1 = (state_31956[(2)]);
var inst_31922 = (inst_31921__$1 == null);
var state_31956__$1 = (function (){var statearr_31961 = state_31956;
(statearr_31961[(7)] = inst_31921__$1);

return statearr_31961;
})();
if(cljs.core.truth_(inst_31922)){
var statearr_31962_32025 = state_31956__$1;
(statearr_31962_32025[(1)] = (5));

} else {
var statearr_31963_32026 = state_31956__$1;
(statearr_31963_32026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (15))){
var inst_31934 = (state_31956[(8)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31956__$1,(18),to,inst_31934);
} else {
if((state_val_31957 === (21))){
var inst_31947 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31964_32027 = state_31956__$1;
(statearr_31964_32027[(2)] = inst_31947);

(statearr_31964_32027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (13))){
var inst_31949 = (state_31956[(2)]);
var state_31956__$1 = (function (){var statearr_31965 = state_31956;
(statearr_31965[(9)] = inst_31949);

return statearr_31965;
})();
var statearr_31966_32028 = state_31956__$1;
(statearr_31966_32028[(2)] = null);

(statearr_31966_32028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (6))){
var inst_31921 = (state_31956[(7)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31956__$1,(11),inst_31921);
} else {
if((state_val_31957 === (17))){
var inst_31942 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
if(cljs.core.truth_(inst_31942)){
var statearr_31967_32029 = state_31956__$1;
(statearr_31967_32029[(1)] = (19));

} else {
var statearr_31968_32030 = state_31956__$1;
(statearr_31968_32030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (3))){
var inst_31954 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31956__$1,inst_31954);
} else {
if((state_val_31957 === (12))){
var inst_31931 = (state_31956[(10)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31956__$1,(14),inst_31931);
} else {
if((state_val_31957 === (2))){
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31956__$1,(4),results);
} else {
if((state_val_31957 === (19))){
var state_31956__$1 = state_31956;
var statearr_31969_32031 = state_31956__$1;
(statearr_31969_32031[(2)] = null);

(statearr_31969_32031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (11))){
var inst_31931 = (state_31956[(2)]);
var state_31956__$1 = (function (){var statearr_31970 = state_31956;
(statearr_31970[(10)] = inst_31931);

return statearr_31970;
})();
var statearr_31971_32032 = state_31956__$1;
(statearr_31971_32032[(2)] = null);

(statearr_31971_32032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (9))){
var state_31956__$1 = state_31956;
var statearr_31972_32033 = state_31956__$1;
(statearr_31972_32033[(2)] = null);

(statearr_31972_32033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (5))){
var state_31956__$1 = state_31956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31973_32034 = state_31956__$1;
(statearr_31973_32034[(1)] = (8));

} else {
var statearr_31974_32035 = state_31956__$1;
(statearr_31974_32035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (14))){
var inst_31936 = (state_31956[(11)]);
var inst_31934 = (state_31956[(8)]);
var inst_31934__$1 = (state_31956[(2)]);
var inst_31935 = (inst_31934__$1 == null);
var inst_31936__$1 = cljs.core.not.call(null,inst_31935);
var state_31956__$1 = (function (){var statearr_31975 = state_31956;
(statearr_31975[(11)] = inst_31936__$1);

(statearr_31975[(8)] = inst_31934__$1);

return statearr_31975;
})();
if(inst_31936__$1){
var statearr_31976_32036 = state_31956__$1;
(statearr_31976_32036[(1)] = (15));

} else {
var statearr_31977_32037 = state_31956__$1;
(statearr_31977_32037[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (16))){
var inst_31936 = (state_31956[(11)]);
var state_31956__$1 = state_31956;
var statearr_31978_32038 = state_31956__$1;
(statearr_31978_32038[(2)] = inst_31936);

(statearr_31978_32038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (10))){
var inst_31928 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31979_32039 = state_31956__$1;
(statearr_31979_32039[(2)] = inst_31928);

(statearr_31979_32039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (18))){
var inst_31939 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31980_32040 = state_31956__$1;
(statearr_31980_32040[(2)] = inst_31939);

(statearr_31980_32040[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (8))){
var inst_31925 = cljs.core.async.close_BANG_.call(null,to);
var state_31956__$1 = state_31956;
var statearr_31981_32041 = state_31956__$1;
(statearr_31981_32041[(2)] = inst_31925);

(statearr_31981_32041[(1)] = (10));


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
});})(c__31650__auto__,jobs,results,process,async))
;
return ((function (switch__31555__auto__,c__31650__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0 = (function (){
var statearr_31982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__);

(statearr_31982[(1)] = (1));

return statearr_31982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1 = (function (state_31956){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_31956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e31983){if((e31983 instanceof Object)){
var ex__31559__auto__ = e31983;
var statearr_31984_32042 = state_31956;
(statearr_31984_32042[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32043 = state_31956;
state_31956 = G__32043;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__ = function(state_31956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1.call(this,state_31956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31556__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__,jobs,results,process,async))
})();
var state__31652__auto__ = (function (){var statearr_31985 = f__31651__auto__.call(null);
(statearr_31985[(6)] = c__31650__auto__);

return statearr_31985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__,jobs,results,process,async))
);

return c__31650__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32045 = arguments.length;
switch (G__32045) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32048 = arguments.length;
switch (G__32048) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32051 = arguments.length;
switch (G__32051) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31650__auto___32100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___32100,tc,fc){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___32100,tc,fc){
return (function (state_32077){
var state_val_32078 = (state_32077[(1)]);
if((state_val_32078 === (7))){
var inst_32073 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32079_32101 = state_32077__$1;
(statearr_32079_32101[(2)] = inst_32073);

(statearr_32079_32101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (1))){
var state_32077__$1 = state_32077;
var statearr_32080_32102 = state_32077__$1;
(statearr_32080_32102[(2)] = null);

(statearr_32080_32102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (4))){
var inst_32054 = (state_32077[(7)]);
var inst_32054__$1 = (state_32077[(2)]);
var inst_32055 = (inst_32054__$1 == null);
var state_32077__$1 = (function (){var statearr_32081 = state_32077;
(statearr_32081[(7)] = inst_32054__$1);

return statearr_32081;
})();
if(cljs.core.truth_(inst_32055)){
var statearr_32082_32103 = state_32077__$1;
(statearr_32082_32103[(1)] = (5));

} else {
var statearr_32083_32104 = state_32077__$1;
(statearr_32083_32104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (13))){
var state_32077__$1 = state_32077;
var statearr_32084_32105 = state_32077__$1;
(statearr_32084_32105[(2)] = null);

(statearr_32084_32105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (6))){
var inst_32054 = (state_32077[(7)]);
var inst_32060 = p.call(null,inst_32054);
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32060)){
var statearr_32085_32106 = state_32077__$1;
(statearr_32085_32106[(1)] = (9));

} else {
var statearr_32086_32107 = state_32077__$1;
(statearr_32086_32107[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (3))){
var inst_32075 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32077__$1,inst_32075);
} else {
if((state_val_32078 === (12))){
var state_32077__$1 = state_32077;
var statearr_32087_32108 = state_32077__$1;
(statearr_32087_32108[(2)] = null);

(statearr_32087_32108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (2))){
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32077__$1,(4),ch);
} else {
if((state_val_32078 === (11))){
var inst_32054 = (state_32077[(7)]);
var inst_32064 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32077__$1,(8),inst_32064,inst_32054);
} else {
if((state_val_32078 === (9))){
var state_32077__$1 = state_32077;
var statearr_32088_32109 = state_32077__$1;
(statearr_32088_32109[(2)] = tc);

(statearr_32088_32109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (5))){
var inst_32057 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32058 = cljs.core.async.close_BANG_.call(null,fc);
var state_32077__$1 = (function (){var statearr_32089 = state_32077;
(statearr_32089[(8)] = inst_32057);

return statearr_32089;
})();
var statearr_32090_32110 = state_32077__$1;
(statearr_32090_32110[(2)] = inst_32058);

(statearr_32090_32110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (14))){
var inst_32071 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32091_32111 = state_32077__$1;
(statearr_32091_32111[(2)] = inst_32071);

(statearr_32091_32111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (10))){
var state_32077__$1 = state_32077;
var statearr_32092_32112 = state_32077__$1;
(statearr_32092_32112[(2)] = fc);

(statearr_32092_32112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (8))){
var inst_32066 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32066)){
var statearr_32093_32113 = state_32077__$1;
(statearr_32093_32113[(1)] = (12));

} else {
var statearr_32094_32114 = state_32077__$1;
(statearr_32094_32114[(1)] = (13));

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
});})(c__31650__auto___32100,tc,fc))
;
return ((function (switch__31555__auto__,c__31650__auto___32100,tc,fc){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_32095 = [null,null,null,null,null,null,null,null,null];
(statearr_32095[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_32095[(1)] = (1));

return statearr_32095;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_32077){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_32077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e32096){if((e32096 instanceof Object)){
var ex__31559__auto__ = e32096;
var statearr_32097_32115 = state_32077;
(statearr_32097_32115[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32116 = state_32077;
state_32077 = G__32116;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_32077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_32077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___32100,tc,fc))
})();
var state__31652__auto__ = (function (){var statearr_32098 = f__31651__auto__.call(null);
(statearr_32098[(6)] = c__31650__auto___32100);

return statearr_32098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___32100,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__){
return (function (state_32137){
var state_val_32138 = (state_32137[(1)]);
if((state_val_32138 === (7))){
var inst_32133 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32139_32157 = state_32137__$1;
(statearr_32139_32157[(2)] = inst_32133);

(statearr_32139_32157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (1))){
var inst_32117 = init;
var state_32137__$1 = (function (){var statearr_32140 = state_32137;
(statearr_32140[(7)] = inst_32117);

return statearr_32140;
})();
var statearr_32141_32158 = state_32137__$1;
(statearr_32141_32158[(2)] = null);

(statearr_32141_32158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (4))){
var inst_32120 = (state_32137[(8)]);
var inst_32120__$1 = (state_32137[(2)]);
var inst_32121 = (inst_32120__$1 == null);
var state_32137__$1 = (function (){var statearr_32142 = state_32137;
(statearr_32142[(8)] = inst_32120__$1);

return statearr_32142;
})();
if(cljs.core.truth_(inst_32121)){
var statearr_32143_32159 = state_32137__$1;
(statearr_32143_32159[(1)] = (5));

} else {
var statearr_32144_32160 = state_32137__$1;
(statearr_32144_32160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (6))){
var inst_32124 = (state_32137[(9)]);
var inst_32117 = (state_32137[(7)]);
var inst_32120 = (state_32137[(8)]);
var inst_32124__$1 = f.call(null,inst_32117,inst_32120);
var inst_32125 = cljs.core.reduced_QMARK_.call(null,inst_32124__$1);
var state_32137__$1 = (function (){var statearr_32145 = state_32137;
(statearr_32145[(9)] = inst_32124__$1);

return statearr_32145;
})();
if(inst_32125){
var statearr_32146_32161 = state_32137__$1;
(statearr_32146_32161[(1)] = (8));

} else {
var statearr_32147_32162 = state_32137__$1;
(statearr_32147_32162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (3))){
var inst_32135 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32137__$1,inst_32135);
} else {
if((state_val_32138 === (2))){
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32137__$1,(4),ch);
} else {
if((state_val_32138 === (9))){
var inst_32124 = (state_32137[(9)]);
var inst_32117 = inst_32124;
var state_32137__$1 = (function (){var statearr_32148 = state_32137;
(statearr_32148[(7)] = inst_32117);

return statearr_32148;
})();
var statearr_32149_32163 = state_32137__$1;
(statearr_32149_32163[(2)] = null);

(statearr_32149_32163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (5))){
var inst_32117 = (state_32137[(7)]);
var state_32137__$1 = state_32137;
var statearr_32150_32164 = state_32137__$1;
(statearr_32150_32164[(2)] = inst_32117);

(statearr_32150_32164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (10))){
var inst_32131 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32151_32165 = state_32137__$1;
(statearr_32151_32165[(2)] = inst_32131);

(statearr_32151_32165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (8))){
var inst_32124 = (state_32137[(9)]);
var inst_32127 = cljs.core.deref.call(null,inst_32124);
var state_32137__$1 = state_32137;
var statearr_32152_32166 = state_32137__$1;
(statearr_32152_32166[(2)] = inst_32127);

(statearr_32152_32166[(1)] = (10));


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
});})(c__31650__auto__))
;
return ((function (switch__31555__auto__,c__31650__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31556__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31556__auto____0 = (function (){
var statearr_32153 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32153[(0)] = cljs$core$async$reduce_$_state_machine__31556__auto__);

(statearr_32153[(1)] = (1));

return statearr_32153;
});
var cljs$core$async$reduce_$_state_machine__31556__auto____1 = (function (state_32137){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_32137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e32154){if((e32154 instanceof Object)){
var ex__31559__auto__ = e32154;
var statearr_32155_32167 = state_32137;
(statearr_32155_32167[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32168 = state_32137;
state_32137 = G__32168;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31556__auto__ = function(state_32137){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31556__auto____1.call(this,state_32137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31556__auto____0;
cljs$core$async$reduce_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31556__auto____1;
return cljs$core$async$reduce_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__))
})();
var state__31652__auto__ = (function (){var statearr_32156 = f__31651__auto__.call(null);
(statearr_32156[(6)] = c__31650__auto__);

return statearr_32156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__))
);

return c__31650__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__,f__$1){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__,f__$1){
return (function (state_32174){
var state_val_32175 = (state_32174[(1)]);
if((state_val_32175 === (1))){
var inst_32169 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32174__$1,(2),inst_32169);
} else {
if((state_val_32175 === (2))){
var inst_32171 = (state_32174[(2)]);
var inst_32172 = f__$1.call(null,inst_32171);
var state_32174__$1 = state_32174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32174__$1,inst_32172);
} else {
return null;
}
}
});})(c__31650__auto__,f__$1))
;
return ((function (switch__31555__auto__,c__31650__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31556__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31556__auto____0 = (function (){
var statearr_32176 = [null,null,null,null,null,null,null];
(statearr_32176[(0)] = cljs$core$async$transduce_$_state_machine__31556__auto__);

(statearr_32176[(1)] = (1));

return statearr_32176;
});
var cljs$core$async$transduce_$_state_machine__31556__auto____1 = (function (state_32174){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_32174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e32177){if((e32177 instanceof Object)){
var ex__31559__auto__ = e32177;
var statearr_32178_32180 = state_32174;
(statearr_32178_32180[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32181 = state_32174;
state_32174 = G__32181;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31556__auto__ = function(state_32174){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31556__auto____1.call(this,state_32174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31556__auto____0;
cljs$core$async$transduce_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31556__auto____1;
return cljs$core$async$transduce_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__,f__$1))
})();
var state__31652__auto__ = (function (){var statearr_32179 = f__31651__auto__.call(null);
(statearr_32179[(6)] = c__31650__auto__);

return statearr_32179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__,f__$1))
);

return c__31650__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32183 = arguments.length;
switch (G__32183) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__){
return (function (state_32208){
var state_val_32209 = (state_32208[(1)]);
if((state_val_32209 === (7))){
var inst_32190 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32210_32231 = state_32208__$1;
(statearr_32210_32231[(2)] = inst_32190);

(statearr_32210_32231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (1))){
var inst_32184 = cljs.core.seq.call(null,coll);
var inst_32185 = inst_32184;
var state_32208__$1 = (function (){var statearr_32211 = state_32208;
(statearr_32211[(7)] = inst_32185);

return statearr_32211;
})();
var statearr_32212_32232 = state_32208__$1;
(statearr_32212_32232[(2)] = null);

(statearr_32212_32232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (4))){
var inst_32185 = (state_32208[(7)]);
var inst_32188 = cljs.core.first.call(null,inst_32185);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32208__$1,(7),ch,inst_32188);
} else {
if((state_val_32209 === (13))){
var inst_32202 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32213_32233 = state_32208__$1;
(statearr_32213_32233[(2)] = inst_32202);

(statearr_32213_32233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (6))){
var inst_32193 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
if(cljs.core.truth_(inst_32193)){
var statearr_32214_32234 = state_32208__$1;
(statearr_32214_32234[(1)] = (8));

} else {
var statearr_32215_32235 = state_32208__$1;
(statearr_32215_32235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (3))){
var inst_32206 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32208__$1,inst_32206);
} else {
if((state_val_32209 === (12))){
var state_32208__$1 = state_32208;
var statearr_32216_32236 = state_32208__$1;
(statearr_32216_32236[(2)] = null);

(statearr_32216_32236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (2))){
var inst_32185 = (state_32208[(7)]);
var state_32208__$1 = state_32208;
if(cljs.core.truth_(inst_32185)){
var statearr_32217_32237 = state_32208__$1;
(statearr_32217_32237[(1)] = (4));

} else {
var statearr_32218_32238 = state_32208__$1;
(statearr_32218_32238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (11))){
var inst_32199 = cljs.core.async.close_BANG_.call(null,ch);
var state_32208__$1 = state_32208;
var statearr_32219_32239 = state_32208__$1;
(statearr_32219_32239[(2)] = inst_32199);

(statearr_32219_32239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (9))){
var state_32208__$1 = state_32208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32220_32240 = state_32208__$1;
(statearr_32220_32240[(1)] = (11));

} else {
var statearr_32221_32241 = state_32208__$1;
(statearr_32221_32241[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (5))){
var inst_32185 = (state_32208[(7)]);
var state_32208__$1 = state_32208;
var statearr_32222_32242 = state_32208__$1;
(statearr_32222_32242[(2)] = inst_32185);

(statearr_32222_32242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (10))){
var inst_32204 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32223_32243 = state_32208__$1;
(statearr_32223_32243[(2)] = inst_32204);

(statearr_32223_32243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (8))){
var inst_32185 = (state_32208[(7)]);
var inst_32195 = cljs.core.next.call(null,inst_32185);
var inst_32185__$1 = inst_32195;
var state_32208__$1 = (function (){var statearr_32224 = state_32208;
(statearr_32224[(7)] = inst_32185__$1);

return statearr_32224;
})();
var statearr_32225_32244 = state_32208__$1;
(statearr_32225_32244[(2)] = null);

(statearr_32225_32244[(1)] = (2));


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
});})(c__31650__auto__))
;
return ((function (switch__31555__auto__,c__31650__auto__){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_32226 = [null,null,null,null,null,null,null,null];
(statearr_32226[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_32226[(1)] = (1));

return statearr_32226;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_32208){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_32208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e32227){if((e32227 instanceof Object)){
var ex__31559__auto__ = e32227;
var statearr_32228_32245 = state_32208;
(statearr_32228_32245[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32246 = state_32208;
state_32208 = G__32246;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_32208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_32208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__))
})();
var state__31652__auto__ = (function (){var statearr_32229 = f__31651__auto__.call(null);
(statearr_32229[(6)] = c__31650__auto__);

return statearr_32229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__))
);

return c__31650__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32247 = (function (ch,cs,meta32248){
this.ch = ch;
this.cs = cs;
this.meta32248 = meta32248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32249,meta32248__$1){
var self__ = this;
var _32249__$1 = this;
return (new cljs.core.async.t_cljs$core$async32247(self__.ch,self__.cs,meta32248__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32249){
var self__ = this;
var _32249__$1 = this;
return self__.meta32248;
});})(cs))
;

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32247.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32248","meta32248",-1983991994,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32247";

cljs.core.async.t_cljs$core$async32247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32247");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32247.
 */
cljs.core.async.__GT_t_cljs$core$async32247 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32247(ch__$1,cs__$1,meta32248){
return (new cljs.core.async.t_cljs$core$async32247(ch__$1,cs__$1,meta32248));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32247(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31650__auto___32469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___32469,cs,m,dchan,dctr,done){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___32469,cs,m,dchan,dctr,done){
return (function (state_32384){
var state_val_32385 = (state_32384[(1)]);
if((state_val_32385 === (7))){
var inst_32380 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32386_32470 = state_32384__$1;
(statearr_32386_32470[(2)] = inst_32380);

(statearr_32386_32470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (20))){
var inst_32283 = (state_32384[(7)]);
var inst_32295 = cljs.core.first.call(null,inst_32283);
var inst_32296 = cljs.core.nth.call(null,inst_32295,(0),null);
var inst_32297 = cljs.core.nth.call(null,inst_32295,(1),null);
var state_32384__$1 = (function (){var statearr_32387 = state_32384;
(statearr_32387[(8)] = inst_32296);

return statearr_32387;
})();
if(cljs.core.truth_(inst_32297)){
var statearr_32388_32471 = state_32384__$1;
(statearr_32388_32471[(1)] = (22));

} else {
var statearr_32389_32472 = state_32384__$1;
(statearr_32389_32472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (27))){
var inst_32332 = (state_32384[(9)]);
var inst_32327 = (state_32384[(10)]);
var inst_32325 = (state_32384[(11)]);
var inst_32252 = (state_32384[(12)]);
var inst_32332__$1 = cljs.core._nth.call(null,inst_32325,inst_32327);
var inst_32333 = cljs.core.async.put_BANG_.call(null,inst_32332__$1,inst_32252,done);
var state_32384__$1 = (function (){var statearr_32390 = state_32384;
(statearr_32390[(9)] = inst_32332__$1);

return statearr_32390;
})();
if(cljs.core.truth_(inst_32333)){
var statearr_32391_32473 = state_32384__$1;
(statearr_32391_32473[(1)] = (30));

} else {
var statearr_32392_32474 = state_32384__$1;
(statearr_32392_32474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (1))){
var state_32384__$1 = state_32384;
var statearr_32393_32475 = state_32384__$1;
(statearr_32393_32475[(2)] = null);

(statearr_32393_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (24))){
var inst_32283 = (state_32384[(7)]);
var inst_32302 = (state_32384[(2)]);
var inst_32303 = cljs.core.next.call(null,inst_32283);
var inst_32261 = inst_32303;
var inst_32262 = null;
var inst_32263 = (0);
var inst_32264 = (0);
var state_32384__$1 = (function (){var statearr_32394 = state_32384;
(statearr_32394[(13)] = inst_32262);

(statearr_32394[(14)] = inst_32263);

(statearr_32394[(15)] = inst_32302);

(statearr_32394[(16)] = inst_32261);

(statearr_32394[(17)] = inst_32264);

return statearr_32394;
})();
var statearr_32395_32476 = state_32384__$1;
(statearr_32395_32476[(2)] = null);

(statearr_32395_32476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (39))){
var state_32384__$1 = state_32384;
var statearr_32399_32477 = state_32384__$1;
(statearr_32399_32477[(2)] = null);

(statearr_32399_32477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (4))){
var inst_32252 = (state_32384[(12)]);
var inst_32252__$1 = (state_32384[(2)]);
var inst_32253 = (inst_32252__$1 == null);
var state_32384__$1 = (function (){var statearr_32400 = state_32384;
(statearr_32400[(12)] = inst_32252__$1);

return statearr_32400;
})();
if(cljs.core.truth_(inst_32253)){
var statearr_32401_32478 = state_32384__$1;
(statearr_32401_32478[(1)] = (5));

} else {
var statearr_32402_32479 = state_32384__$1;
(statearr_32402_32479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (15))){
var inst_32262 = (state_32384[(13)]);
var inst_32263 = (state_32384[(14)]);
var inst_32261 = (state_32384[(16)]);
var inst_32264 = (state_32384[(17)]);
var inst_32279 = (state_32384[(2)]);
var inst_32280 = (inst_32264 + (1));
var tmp32396 = inst_32262;
var tmp32397 = inst_32263;
var tmp32398 = inst_32261;
var inst_32261__$1 = tmp32398;
var inst_32262__$1 = tmp32396;
var inst_32263__$1 = tmp32397;
var inst_32264__$1 = inst_32280;
var state_32384__$1 = (function (){var statearr_32403 = state_32384;
(statearr_32403[(13)] = inst_32262__$1);

(statearr_32403[(14)] = inst_32263__$1);

(statearr_32403[(18)] = inst_32279);

(statearr_32403[(16)] = inst_32261__$1);

(statearr_32403[(17)] = inst_32264__$1);

return statearr_32403;
})();
var statearr_32404_32480 = state_32384__$1;
(statearr_32404_32480[(2)] = null);

(statearr_32404_32480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (21))){
var inst_32306 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32408_32481 = state_32384__$1;
(statearr_32408_32481[(2)] = inst_32306);

(statearr_32408_32481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (31))){
var inst_32332 = (state_32384[(9)]);
var inst_32336 = done.call(null,null);
var inst_32337 = cljs.core.async.untap_STAR_.call(null,m,inst_32332);
var state_32384__$1 = (function (){var statearr_32409 = state_32384;
(statearr_32409[(19)] = inst_32336);

return statearr_32409;
})();
var statearr_32410_32482 = state_32384__$1;
(statearr_32410_32482[(2)] = inst_32337);

(statearr_32410_32482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (32))){
var inst_32327 = (state_32384[(10)]);
var inst_32325 = (state_32384[(11)]);
var inst_32326 = (state_32384[(20)]);
var inst_32324 = (state_32384[(21)]);
var inst_32339 = (state_32384[(2)]);
var inst_32340 = (inst_32327 + (1));
var tmp32405 = inst_32325;
var tmp32406 = inst_32326;
var tmp32407 = inst_32324;
var inst_32324__$1 = tmp32407;
var inst_32325__$1 = tmp32405;
var inst_32326__$1 = tmp32406;
var inst_32327__$1 = inst_32340;
var state_32384__$1 = (function (){var statearr_32411 = state_32384;
(statearr_32411[(10)] = inst_32327__$1);

(statearr_32411[(11)] = inst_32325__$1);

(statearr_32411[(20)] = inst_32326__$1);

(statearr_32411[(21)] = inst_32324__$1);

(statearr_32411[(22)] = inst_32339);

return statearr_32411;
})();
var statearr_32412_32483 = state_32384__$1;
(statearr_32412_32483[(2)] = null);

(statearr_32412_32483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (40))){
var inst_32352 = (state_32384[(23)]);
var inst_32356 = done.call(null,null);
var inst_32357 = cljs.core.async.untap_STAR_.call(null,m,inst_32352);
var state_32384__$1 = (function (){var statearr_32413 = state_32384;
(statearr_32413[(24)] = inst_32356);

return statearr_32413;
})();
var statearr_32414_32484 = state_32384__$1;
(statearr_32414_32484[(2)] = inst_32357);

(statearr_32414_32484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (33))){
var inst_32343 = (state_32384[(25)]);
var inst_32345 = cljs.core.chunked_seq_QMARK_.call(null,inst_32343);
var state_32384__$1 = state_32384;
if(inst_32345){
var statearr_32415_32485 = state_32384__$1;
(statearr_32415_32485[(1)] = (36));

} else {
var statearr_32416_32486 = state_32384__$1;
(statearr_32416_32486[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (13))){
var inst_32273 = (state_32384[(26)]);
var inst_32276 = cljs.core.async.close_BANG_.call(null,inst_32273);
var state_32384__$1 = state_32384;
var statearr_32417_32487 = state_32384__$1;
(statearr_32417_32487[(2)] = inst_32276);

(statearr_32417_32487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (22))){
var inst_32296 = (state_32384[(8)]);
var inst_32299 = cljs.core.async.close_BANG_.call(null,inst_32296);
var state_32384__$1 = state_32384;
var statearr_32418_32488 = state_32384__$1;
(statearr_32418_32488[(2)] = inst_32299);

(statearr_32418_32488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (36))){
var inst_32343 = (state_32384[(25)]);
var inst_32347 = cljs.core.chunk_first.call(null,inst_32343);
var inst_32348 = cljs.core.chunk_rest.call(null,inst_32343);
var inst_32349 = cljs.core.count.call(null,inst_32347);
var inst_32324 = inst_32348;
var inst_32325 = inst_32347;
var inst_32326 = inst_32349;
var inst_32327 = (0);
var state_32384__$1 = (function (){var statearr_32419 = state_32384;
(statearr_32419[(10)] = inst_32327);

(statearr_32419[(11)] = inst_32325);

(statearr_32419[(20)] = inst_32326);

(statearr_32419[(21)] = inst_32324);

return statearr_32419;
})();
var statearr_32420_32489 = state_32384__$1;
(statearr_32420_32489[(2)] = null);

(statearr_32420_32489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (41))){
var inst_32343 = (state_32384[(25)]);
var inst_32359 = (state_32384[(2)]);
var inst_32360 = cljs.core.next.call(null,inst_32343);
var inst_32324 = inst_32360;
var inst_32325 = null;
var inst_32326 = (0);
var inst_32327 = (0);
var state_32384__$1 = (function (){var statearr_32421 = state_32384;
(statearr_32421[(10)] = inst_32327);

(statearr_32421[(11)] = inst_32325);

(statearr_32421[(20)] = inst_32326);

(statearr_32421[(21)] = inst_32324);

(statearr_32421[(27)] = inst_32359);

return statearr_32421;
})();
var statearr_32422_32490 = state_32384__$1;
(statearr_32422_32490[(2)] = null);

(statearr_32422_32490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (43))){
var state_32384__$1 = state_32384;
var statearr_32423_32491 = state_32384__$1;
(statearr_32423_32491[(2)] = null);

(statearr_32423_32491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (29))){
var inst_32368 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32424_32492 = state_32384__$1;
(statearr_32424_32492[(2)] = inst_32368);

(statearr_32424_32492[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (44))){
var inst_32377 = (state_32384[(2)]);
var state_32384__$1 = (function (){var statearr_32425 = state_32384;
(statearr_32425[(28)] = inst_32377);

return statearr_32425;
})();
var statearr_32426_32493 = state_32384__$1;
(statearr_32426_32493[(2)] = null);

(statearr_32426_32493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (6))){
var inst_32316 = (state_32384[(29)]);
var inst_32315 = cljs.core.deref.call(null,cs);
var inst_32316__$1 = cljs.core.keys.call(null,inst_32315);
var inst_32317 = cljs.core.count.call(null,inst_32316__$1);
var inst_32318 = cljs.core.reset_BANG_.call(null,dctr,inst_32317);
var inst_32323 = cljs.core.seq.call(null,inst_32316__$1);
var inst_32324 = inst_32323;
var inst_32325 = null;
var inst_32326 = (0);
var inst_32327 = (0);
var state_32384__$1 = (function (){var statearr_32427 = state_32384;
(statearr_32427[(10)] = inst_32327);

(statearr_32427[(11)] = inst_32325);

(statearr_32427[(20)] = inst_32326);

(statearr_32427[(29)] = inst_32316__$1);

(statearr_32427[(30)] = inst_32318);

(statearr_32427[(21)] = inst_32324);

return statearr_32427;
})();
var statearr_32428_32494 = state_32384__$1;
(statearr_32428_32494[(2)] = null);

(statearr_32428_32494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (28))){
var inst_32343 = (state_32384[(25)]);
var inst_32324 = (state_32384[(21)]);
var inst_32343__$1 = cljs.core.seq.call(null,inst_32324);
var state_32384__$1 = (function (){var statearr_32429 = state_32384;
(statearr_32429[(25)] = inst_32343__$1);

return statearr_32429;
})();
if(inst_32343__$1){
var statearr_32430_32495 = state_32384__$1;
(statearr_32430_32495[(1)] = (33));

} else {
var statearr_32431_32496 = state_32384__$1;
(statearr_32431_32496[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (25))){
var inst_32327 = (state_32384[(10)]);
var inst_32326 = (state_32384[(20)]);
var inst_32329 = (inst_32327 < inst_32326);
var inst_32330 = inst_32329;
var state_32384__$1 = state_32384;
if(cljs.core.truth_(inst_32330)){
var statearr_32432_32497 = state_32384__$1;
(statearr_32432_32497[(1)] = (27));

} else {
var statearr_32433_32498 = state_32384__$1;
(statearr_32433_32498[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (34))){
var state_32384__$1 = state_32384;
var statearr_32434_32499 = state_32384__$1;
(statearr_32434_32499[(2)] = null);

(statearr_32434_32499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (17))){
var state_32384__$1 = state_32384;
var statearr_32435_32500 = state_32384__$1;
(statearr_32435_32500[(2)] = null);

(statearr_32435_32500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (3))){
var inst_32382 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32384__$1,inst_32382);
} else {
if((state_val_32385 === (12))){
var inst_32311 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32436_32501 = state_32384__$1;
(statearr_32436_32501[(2)] = inst_32311);

(statearr_32436_32501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (2))){
var state_32384__$1 = state_32384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32384__$1,(4),ch);
} else {
if((state_val_32385 === (23))){
var state_32384__$1 = state_32384;
var statearr_32437_32502 = state_32384__$1;
(statearr_32437_32502[(2)] = null);

(statearr_32437_32502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (35))){
var inst_32366 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32438_32503 = state_32384__$1;
(statearr_32438_32503[(2)] = inst_32366);

(statearr_32438_32503[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (19))){
var inst_32283 = (state_32384[(7)]);
var inst_32287 = cljs.core.chunk_first.call(null,inst_32283);
var inst_32288 = cljs.core.chunk_rest.call(null,inst_32283);
var inst_32289 = cljs.core.count.call(null,inst_32287);
var inst_32261 = inst_32288;
var inst_32262 = inst_32287;
var inst_32263 = inst_32289;
var inst_32264 = (0);
var state_32384__$1 = (function (){var statearr_32439 = state_32384;
(statearr_32439[(13)] = inst_32262);

(statearr_32439[(14)] = inst_32263);

(statearr_32439[(16)] = inst_32261);

(statearr_32439[(17)] = inst_32264);

return statearr_32439;
})();
var statearr_32440_32504 = state_32384__$1;
(statearr_32440_32504[(2)] = null);

(statearr_32440_32504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (11))){
var inst_32283 = (state_32384[(7)]);
var inst_32261 = (state_32384[(16)]);
var inst_32283__$1 = cljs.core.seq.call(null,inst_32261);
var state_32384__$1 = (function (){var statearr_32441 = state_32384;
(statearr_32441[(7)] = inst_32283__$1);

return statearr_32441;
})();
if(inst_32283__$1){
var statearr_32442_32505 = state_32384__$1;
(statearr_32442_32505[(1)] = (16));

} else {
var statearr_32443_32506 = state_32384__$1;
(statearr_32443_32506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (9))){
var inst_32313 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32444_32507 = state_32384__$1;
(statearr_32444_32507[(2)] = inst_32313);

(statearr_32444_32507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (5))){
var inst_32259 = cljs.core.deref.call(null,cs);
var inst_32260 = cljs.core.seq.call(null,inst_32259);
var inst_32261 = inst_32260;
var inst_32262 = null;
var inst_32263 = (0);
var inst_32264 = (0);
var state_32384__$1 = (function (){var statearr_32445 = state_32384;
(statearr_32445[(13)] = inst_32262);

(statearr_32445[(14)] = inst_32263);

(statearr_32445[(16)] = inst_32261);

(statearr_32445[(17)] = inst_32264);

return statearr_32445;
})();
var statearr_32446_32508 = state_32384__$1;
(statearr_32446_32508[(2)] = null);

(statearr_32446_32508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (14))){
var state_32384__$1 = state_32384;
var statearr_32447_32509 = state_32384__$1;
(statearr_32447_32509[(2)] = null);

(statearr_32447_32509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (45))){
var inst_32374 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32448_32510 = state_32384__$1;
(statearr_32448_32510[(2)] = inst_32374);

(statearr_32448_32510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (26))){
var inst_32316 = (state_32384[(29)]);
var inst_32370 = (state_32384[(2)]);
var inst_32371 = cljs.core.seq.call(null,inst_32316);
var state_32384__$1 = (function (){var statearr_32449 = state_32384;
(statearr_32449[(31)] = inst_32370);

return statearr_32449;
})();
if(inst_32371){
var statearr_32450_32511 = state_32384__$1;
(statearr_32450_32511[(1)] = (42));

} else {
var statearr_32451_32512 = state_32384__$1;
(statearr_32451_32512[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (16))){
var inst_32283 = (state_32384[(7)]);
var inst_32285 = cljs.core.chunked_seq_QMARK_.call(null,inst_32283);
var state_32384__$1 = state_32384;
if(inst_32285){
var statearr_32452_32513 = state_32384__$1;
(statearr_32452_32513[(1)] = (19));

} else {
var statearr_32453_32514 = state_32384__$1;
(statearr_32453_32514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (38))){
var inst_32363 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32454_32515 = state_32384__$1;
(statearr_32454_32515[(2)] = inst_32363);

(statearr_32454_32515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (30))){
var state_32384__$1 = state_32384;
var statearr_32455_32516 = state_32384__$1;
(statearr_32455_32516[(2)] = null);

(statearr_32455_32516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (10))){
var inst_32262 = (state_32384[(13)]);
var inst_32264 = (state_32384[(17)]);
var inst_32272 = cljs.core._nth.call(null,inst_32262,inst_32264);
var inst_32273 = cljs.core.nth.call(null,inst_32272,(0),null);
var inst_32274 = cljs.core.nth.call(null,inst_32272,(1),null);
var state_32384__$1 = (function (){var statearr_32456 = state_32384;
(statearr_32456[(26)] = inst_32273);

return statearr_32456;
})();
if(cljs.core.truth_(inst_32274)){
var statearr_32457_32517 = state_32384__$1;
(statearr_32457_32517[(1)] = (13));

} else {
var statearr_32458_32518 = state_32384__$1;
(statearr_32458_32518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (18))){
var inst_32309 = (state_32384[(2)]);
var state_32384__$1 = state_32384;
var statearr_32459_32519 = state_32384__$1;
(statearr_32459_32519[(2)] = inst_32309);

(statearr_32459_32519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (42))){
var state_32384__$1 = state_32384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32384__$1,(45),dchan);
} else {
if((state_val_32385 === (37))){
var inst_32352 = (state_32384[(23)]);
var inst_32343 = (state_32384[(25)]);
var inst_32252 = (state_32384[(12)]);
var inst_32352__$1 = cljs.core.first.call(null,inst_32343);
var inst_32353 = cljs.core.async.put_BANG_.call(null,inst_32352__$1,inst_32252,done);
var state_32384__$1 = (function (){var statearr_32460 = state_32384;
(statearr_32460[(23)] = inst_32352__$1);

return statearr_32460;
})();
if(cljs.core.truth_(inst_32353)){
var statearr_32461_32520 = state_32384__$1;
(statearr_32461_32520[(1)] = (39));

} else {
var statearr_32462_32521 = state_32384__$1;
(statearr_32462_32521[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32385 === (8))){
var inst_32263 = (state_32384[(14)]);
var inst_32264 = (state_32384[(17)]);
var inst_32266 = (inst_32264 < inst_32263);
var inst_32267 = inst_32266;
var state_32384__$1 = state_32384;
if(cljs.core.truth_(inst_32267)){
var statearr_32463_32522 = state_32384__$1;
(statearr_32463_32522[(1)] = (10));

} else {
var statearr_32464_32523 = state_32384__$1;
(statearr_32464_32523[(1)] = (11));

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
});})(c__31650__auto___32469,cs,m,dchan,dctr,done))
;
return ((function (switch__31555__auto__,c__31650__auto___32469,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31556__auto__ = null;
var cljs$core$async$mult_$_state_machine__31556__auto____0 = (function (){
var statearr_32465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32465[(0)] = cljs$core$async$mult_$_state_machine__31556__auto__);

(statearr_32465[(1)] = (1));

return statearr_32465;
});
var cljs$core$async$mult_$_state_machine__31556__auto____1 = (function (state_32384){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_32384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e32466){if((e32466 instanceof Object)){
var ex__31559__auto__ = e32466;
var statearr_32467_32524 = state_32384;
(statearr_32467_32524[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32525 = state_32384;
state_32384 = G__32525;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31556__auto__ = function(state_32384){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31556__auto____1.call(this,state_32384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31556__auto____0;
cljs$core$async$mult_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31556__auto____1;
return cljs$core$async$mult_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___32469,cs,m,dchan,dctr,done))
})();
var state__31652__auto__ = (function (){var statearr_32468 = f__31651__auto__.call(null);
(statearr_32468[(6)] = c__31650__auto___32469);

return statearr_32468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___32469,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32527 = arguments.length;
switch (G__32527) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32539 = arguments.length;
var i__4731__auto___32540 = (0);
while(true){
if((i__4731__auto___32540 < len__4730__auto___32539)){
args__4736__auto__.push((arguments[i__4731__auto___32540]));

var G__32541 = (i__4731__auto___32540 + (1));
i__4731__auto___32540 = G__32541;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32533){
var map__32534 = p__32533;
var map__32534__$1 = (((((!((map__32534 == null))))?(((((map__32534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32534):map__32534);
var opts = map__32534__$1;
var statearr_32536_32542 = state;
(statearr_32536_32542[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__32534,map__32534__$1,opts){
return (function (val){
var statearr_32537_32543 = state;
(statearr_32537_32543[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32534,map__32534__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32538_32544 = state;
(statearr_32538_32544[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32529){
var G__32530 = cljs.core.first.call(null,seq32529);
var seq32529__$1 = cljs.core.next.call(null,seq32529);
var G__32531 = cljs.core.first.call(null,seq32529__$1);
var seq32529__$2 = cljs.core.next.call(null,seq32529__$1);
var G__32532 = cljs.core.first.call(null,seq32529__$2);
var seq32529__$3 = cljs.core.next.call(null,seq32529__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32530,G__32531,G__32532,seq32529__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32545 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32546){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32546 = meta32546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32547,meta32546__$1){
var self__ = this;
var _32547__$1 = this;
return (new cljs.core.async.t_cljs$core$async32545(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32546__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32547){
var self__ = this;
var _32547__$1 = this;
return self__.meta32546;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32546","meta32546",-2065181560,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32545";

cljs.core.async.t_cljs$core$async32545.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32545");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32545.
 */
cljs.core.async.__GT_t_cljs$core$async32545 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32545(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32546){
return (new cljs.core.async.t_cljs$core$async32545(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32546));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32545(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31650__auto___32709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___32709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___32709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32649){
var state_val_32650 = (state_32649[(1)]);
if((state_val_32650 === (7))){
var inst_32564 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32651_32710 = state_32649__$1;
(statearr_32651_32710[(2)] = inst_32564);

(statearr_32651_32710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (20))){
var inst_32576 = (state_32649[(7)]);
var state_32649__$1 = state_32649;
var statearr_32652_32711 = state_32649__$1;
(statearr_32652_32711[(2)] = inst_32576);

(statearr_32652_32711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (27))){
var state_32649__$1 = state_32649;
var statearr_32653_32712 = state_32649__$1;
(statearr_32653_32712[(2)] = null);

(statearr_32653_32712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (1))){
var inst_32551 = (state_32649[(8)]);
var inst_32551__$1 = calc_state.call(null);
var inst_32553 = (inst_32551__$1 == null);
var inst_32554 = cljs.core.not.call(null,inst_32553);
var state_32649__$1 = (function (){var statearr_32654 = state_32649;
(statearr_32654[(8)] = inst_32551__$1);

return statearr_32654;
})();
if(inst_32554){
var statearr_32655_32713 = state_32649__$1;
(statearr_32655_32713[(1)] = (2));

} else {
var statearr_32656_32714 = state_32649__$1;
(statearr_32656_32714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (24))){
var inst_32609 = (state_32649[(9)]);
var inst_32623 = (state_32649[(10)]);
var inst_32600 = (state_32649[(11)]);
var inst_32623__$1 = inst_32600.call(null,inst_32609);
var state_32649__$1 = (function (){var statearr_32657 = state_32649;
(statearr_32657[(10)] = inst_32623__$1);

return statearr_32657;
})();
if(cljs.core.truth_(inst_32623__$1)){
var statearr_32658_32715 = state_32649__$1;
(statearr_32658_32715[(1)] = (29));

} else {
var statearr_32659_32716 = state_32649__$1;
(statearr_32659_32716[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (4))){
var inst_32567 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32567)){
var statearr_32660_32717 = state_32649__$1;
(statearr_32660_32717[(1)] = (8));

} else {
var statearr_32661_32718 = state_32649__$1;
(statearr_32661_32718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (15))){
var inst_32594 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32594)){
var statearr_32662_32719 = state_32649__$1;
(statearr_32662_32719[(1)] = (19));

} else {
var statearr_32663_32720 = state_32649__$1;
(statearr_32663_32720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (21))){
var inst_32599 = (state_32649[(12)]);
var inst_32599__$1 = (state_32649[(2)]);
var inst_32600 = cljs.core.get.call(null,inst_32599__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32601 = cljs.core.get.call(null,inst_32599__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32602 = cljs.core.get.call(null,inst_32599__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32649__$1 = (function (){var statearr_32664 = state_32649;
(statearr_32664[(12)] = inst_32599__$1);

(statearr_32664[(13)] = inst_32601);

(statearr_32664[(11)] = inst_32600);

return statearr_32664;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32649__$1,(22),inst_32602);
} else {
if((state_val_32650 === (31))){
var inst_32631 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32631)){
var statearr_32665_32721 = state_32649__$1;
(statearr_32665_32721[(1)] = (32));

} else {
var statearr_32666_32722 = state_32649__$1;
(statearr_32666_32722[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (32))){
var inst_32608 = (state_32649[(14)]);
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32649__$1,(35),out,inst_32608);
} else {
if((state_val_32650 === (33))){
var inst_32599 = (state_32649[(12)]);
var inst_32576 = inst_32599;
var state_32649__$1 = (function (){var statearr_32667 = state_32649;
(statearr_32667[(7)] = inst_32576);

return statearr_32667;
})();
var statearr_32668_32723 = state_32649__$1;
(statearr_32668_32723[(2)] = null);

(statearr_32668_32723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (13))){
var inst_32576 = (state_32649[(7)]);
var inst_32583 = inst_32576.cljs$lang$protocol_mask$partition0$;
var inst_32584 = (inst_32583 & (64));
var inst_32585 = inst_32576.cljs$core$ISeq$;
var inst_32586 = (cljs.core.PROTOCOL_SENTINEL === inst_32585);
var inst_32587 = ((inst_32584) || (inst_32586));
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32587)){
var statearr_32669_32724 = state_32649__$1;
(statearr_32669_32724[(1)] = (16));

} else {
var statearr_32670_32725 = state_32649__$1;
(statearr_32670_32725[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (22))){
var inst_32609 = (state_32649[(9)]);
var inst_32608 = (state_32649[(14)]);
var inst_32607 = (state_32649[(2)]);
var inst_32608__$1 = cljs.core.nth.call(null,inst_32607,(0),null);
var inst_32609__$1 = cljs.core.nth.call(null,inst_32607,(1),null);
var inst_32610 = (inst_32608__$1 == null);
var inst_32611 = cljs.core._EQ_.call(null,inst_32609__$1,change);
var inst_32612 = ((inst_32610) || (inst_32611));
var state_32649__$1 = (function (){var statearr_32671 = state_32649;
(statearr_32671[(9)] = inst_32609__$1);

(statearr_32671[(14)] = inst_32608__$1);

return statearr_32671;
})();
if(cljs.core.truth_(inst_32612)){
var statearr_32672_32726 = state_32649__$1;
(statearr_32672_32726[(1)] = (23));

} else {
var statearr_32673_32727 = state_32649__$1;
(statearr_32673_32727[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (36))){
var inst_32599 = (state_32649[(12)]);
var inst_32576 = inst_32599;
var state_32649__$1 = (function (){var statearr_32674 = state_32649;
(statearr_32674[(7)] = inst_32576);

return statearr_32674;
})();
var statearr_32675_32728 = state_32649__$1;
(statearr_32675_32728[(2)] = null);

(statearr_32675_32728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (29))){
var inst_32623 = (state_32649[(10)]);
var state_32649__$1 = state_32649;
var statearr_32676_32729 = state_32649__$1;
(statearr_32676_32729[(2)] = inst_32623);

(statearr_32676_32729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (6))){
var state_32649__$1 = state_32649;
var statearr_32677_32730 = state_32649__$1;
(statearr_32677_32730[(2)] = false);

(statearr_32677_32730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (28))){
var inst_32619 = (state_32649[(2)]);
var inst_32620 = calc_state.call(null);
var inst_32576 = inst_32620;
var state_32649__$1 = (function (){var statearr_32678 = state_32649;
(statearr_32678[(15)] = inst_32619);

(statearr_32678[(7)] = inst_32576);

return statearr_32678;
})();
var statearr_32679_32731 = state_32649__$1;
(statearr_32679_32731[(2)] = null);

(statearr_32679_32731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (25))){
var inst_32645 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32680_32732 = state_32649__$1;
(statearr_32680_32732[(2)] = inst_32645);

(statearr_32680_32732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (34))){
var inst_32643 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32681_32733 = state_32649__$1;
(statearr_32681_32733[(2)] = inst_32643);

(statearr_32681_32733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (17))){
var state_32649__$1 = state_32649;
var statearr_32682_32734 = state_32649__$1;
(statearr_32682_32734[(2)] = false);

(statearr_32682_32734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (3))){
var state_32649__$1 = state_32649;
var statearr_32683_32735 = state_32649__$1;
(statearr_32683_32735[(2)] = false);

(statearr_32683_32735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (12))){
var inst_32647 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32649__$1,inst_32647);
} else {
if((state_val_32650 === (2))){
var inst_32551 = (state_32649[(8)]);
var inst_32556 = inst_32551.cljs$lang$protocol_mask$partition0$;
var inst_32557 = (inst_32556 & (64));
var inst_32558 = inst_32551.cljs$core$ISeq$;
var inst_32559 = (cljs.core.PROTOCOL_SENTINEL === inst_32558);
var inst_32560 = ((inst_32557) || (inst_32559));
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32560)){
var statearr_32684_32736 = state_32649__$1;
(statearr_32684_32736[(1)] = (5));

} else {
var statearr_32685_32737 = state_32649__$1;
(statearr_32685_32737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (23))){
var inst_32608 = (state_32649[(14)]);
var inst_32614 = (inst_32608 == null);
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32614)){
var statearr_32686_32738 = state_32649__$1;
(statearr_32686_32738[(1)] = (26));

} else {
var statearr_32687_32739 = state_32649__$1;
(statearr_32687_32739[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (35))){
var inst_32634 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32634)){
var statearr_32688_32740 = state_32649__$1;
(statearr_32688_32740[(1)] = (36));

} else {
var statearr_32689_32741 = state_32649__$1;
(statearr_32689_32741[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (19))){
var inst_32576 = (state_32649[(7)]);
var inst_32596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32576);
var state_32649__$1 = state_32649;
var statearr_32690_32742 = state_32649__$1;
(statearr_32690_32742[(2)] = inst_32596);

(statearr_32690_32742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (11))){
var inst_32576 = (state_32649[(7)]);
var inst_32580 = (inst_32576 == null);
var inst_32581 = cljs.core.not.call(null,inst_32580);
var state_32649__$1 = state_32649;
if(inst_32581){
var statearr_32691_32743 = state_32649__$1;
(statearr_32691_32743[(1)] = (13));

} else {
var statearr_32692_32744 = state_32649__$1;
(statearr_32692_32744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (9))){
var inst_32551 = (state_32649[(8)]);
var state_32649__$1 = state_32649;
var statearr_32693_32745 = state_32649__$1;
(statearr_32693_32745[(2)] = inst_32551);

(statearr_32693_32745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (5))){
var state_32649__$1 = state_32649;
var statearr_32694_32746 = state_32649__$1;
(statearr_32694_32746[(2)] = true);

(statearr_32694_32746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (14))){
var state_32649__$1 = state_32649;
var statearr_32695_32747 = state_32649__$1;
(statearr_32695_32747[(2)] = false);

(statearr_32695_32747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (26))){
var inst_32609 = (state_32649[(9)]);
var inst_32616 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32609);
var state_32649__$1 = state_32649;
var statearr_32696_32748 = state_32649__$1;
(statearr_32696_32748[(2)] = inst_32616);

(statearr_32696_32748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (16))){
var state_32649__$1 = state_32649;
var statearr_32697_32749 = state_32649__$1;
(statearr_32697_32749[(2)] = true);

(statearr_32697_32749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (38))){
var inst_32639 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32698_32750 = state_32649__$1;
(statearr_32698_32750[(2)] = inst_32639);

(statearr_32698_32750[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (30))){
var inst_32609 = (state_32649[(9)]);
var inst_32601 = (state_32649[(13)]);
var inst_32600 = (state_32649[(11)]);
var inst_32626 = cljs.core.empty_QMARK_.call(null,inst_32600);
var inst_32627 = inst_32601.call(null,inst_32609);
var inst_32628 = cljs.core.not.call(null,inst_32627);
var inst_32629 = ((inst_32626) && (inst_32628));
var state_32649__$1 = state_32649;
var statearr_32699_32751 = state_32649__$1;
(statearr_32699_32751[(2)] = inst_32629);

(statearr_32699_32751[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (10))){
var inst_32551 = (state_32649[(8)]);
var inst_32572 = (state_32649[(2)]);
var inst_32573 = cljs.core.get.call(null,inst_32572,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32574 = cljs.core.get.call(null,inst_32572,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32575 = cljs.core.get.call(null,inst_32572,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32576 = inst_32551;
var state_32649__$1 = (function (){var statearr_32700 = state_32649;
(statearr_32700[(16)] = inst_32573);

(statearr_32700[(17)] = inst_32574);

(statearr_32700[(18)] = inst_32575);

(statearr_32700[(7)] = inst_32576);

return statearr_32700;
})();
var statearr_32701_32752 = state_32649__$1;
(statearr_32701_32752[(2)] = null);

(statearr_32701_32752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (18))){
var inst_32591 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32702_32753 = state_32649__$1;
(statearr_32702_32753[(2)] = inst_32591);

(statearr_32702_32753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (37))){
var state_32649__$1 = state_32649;
var statearr_32703_32754 = state_32649__$1;
(statearr_32703_32754[(2)] = null);

(statearr_32703_32754[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (8))){
var inst_32551 = (state_32649[(8)]);
var inst_32569 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32551);
var state_32649__$1 = state_32649;
var statearr_32704_32755 = state_32649__$1;
(statearr_32704_32755[(2)] = inst_32569);

(statearr_32704_32755[(1)] = (10));


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
});})(c__31650__auto___32709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31555__auto__,c__31650__auto___32709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31556__auto__ = null;
var cljs$core$async$mix_$_state_machine__31556__auto____0 = (function (){
var statearr_32705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32705[(0)] = cljs$core$async$mix_$_state_machine__31556__auto__);

(statearr_32705[(1)] = (1));

return statearr_32705;
});
var cljs$core$async$mix_$_state_machine__31556__auto____1 = (function (state_32649){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_32649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e32706){if((e32706 instanceof Object)){
var ex__31559__auto__ = e32706;
var statearr_32707_32756 = state_32649;
(statearr_32707_32756[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32757 = state_32649;
state_32649 = G__32757;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31556__auto__ = function(state_32649){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31556__auto____1.call(this,state_32649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31556__auto____0;
cljs$core$async$mix_$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31556__auto____1;
return cljs$core$async$mix_$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___32709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31652__auto__ = (function (){var statearr_32708 = f__31651__auto__.call(null);
(statearr_32708[(6)] = c__31650__auto___32709);

return statearr_32708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___32709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32759 = arguments.length;
switch (G__32759) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32763 = arguments.length;
switch (G__32763) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__32761_SHARP_){
if(cljs.core.truth_(p1__32761_SHARP_.call(null,topic))){
return p1__32761_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32761_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32764 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32765){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32765 = meta32765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32766,meta32765__$1){
var self__ = this;
var _32766__$1 = this;
return (new cljs.core.async.t_cljs$core$async32764(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32765__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32766){
var self__ = this;
var _32766__$1 = this;
return self__.meta32765;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32764.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32765","meta32765",110403638,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32764";

cljs.core.async.t_cljs$core$async32764.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32764");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32764.
 */
cljs.core.async.__GT_t_cljs$core$async32764 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32764(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32765){
return (new cljs.core.async.t_cljs$core$async32764(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32765));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32764(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31650__auto___32884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___32884,mults,ensure_mult,p){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___32884,mults,ensure_mult,p){
return (function (state_32838){
var state_val_32839 = (state_32838[(1)]);
if((state_val_32839 === (7))){
var inst_32834 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32840_32885 = state_32838__$1;
(statearr_32840_32885[(2)] = inst_32834);

(statearr_32840_32885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (20))){
var state_32838__$1 = state_32838;
var statearr_32841_32886 = state_32838__$1;
(statearr_32841_32886[(2)] = null);

(statearr_32841_32886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (1))){
var state_32838__$1 = state_32838;
var statearr_32842_32887 = state_32838__$1;
(statearr_32842_32887[(2)] = null);

(statearr_32842_32887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (24))){
var inst_32817 = (state_32838[(7)]);
var inst_32826 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32817);
var state_32838__$1 = state_32838;
var statearr_32843_32888 = state_32838__$1;
(statearr_32843_32888[(2)] = inst_32826);

(statearr_32843_32888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (4))){
var inst_32769 = (state_32838[(8)]);
var inst_32769__$1 = (state_32838[(2)]);
var inst_32770 = (inst_32769__$1 == null);
var state_32838__$1 = (function (){var statearr_32844 = state_32838;
(statearr_32844[(8)] = inst_32769__$1);

return statearr_32844;
})();
if(cljs.core.truth_(inst_32770)){
var statearr_32845_32889 = state_32838__$1;
(statearr_32845_32889[(1)] = (5));

} else {
var statearr_32846_32890 = state_32838__$1;
(statearr_32846_32890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (15))){
var inst_32811 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32847_32891 = state_32838__$1;
(statearr_32847_32891[(2)] = inst_32811);

(statearr_32847_32891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (21))){
var inst_32831 = (state_32838[(2)]);
var state_32838__$1 = (function (){var statearr_32848 = state_32838;
(statearr_32848[(9)] = inst_32831);

return statearr_32848;
})();
var statearr_32849_32892 = state_32838__$1;
(statearr_32849_32892[(2)] = null);

(statearr_32849_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (13))){
var inst_32793 = (state_32838[(10)]);
var inst_32795 = cljs.core.chunked_seq_QMARK_.call(null,inst_32793);
var state_32838__$1 = state_32838;
if(inst_32795){
var statearr_32850_32893 = state_32838__$1;
(statearr_32850_32893[(1)] = (16));

} else {
var statearr_32851_32894 = state_32838__$1;
(statearr_32851_32894[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (22))){
var inst_32823 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
if(cljs.core.truth_(inst_32823)){
var statearr_32852_32895 = state_32838__$1;
(statearr_32852_32895[(1)] = (23));

} else {
var statearr_32853_32896 = state_32838__$1;
(statearr_32853_32896[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (6))){
var inst_32817 = (state_32838[(7)]);
var inst_32769 = (state_32838[(8)]);
var inst_32819 = (state_32838[(11)]);
var inst_32817__$1 = topic_fn.call(null,inst_32769);
var inst_32818 = cljs.core.deref.call(null,mults);
var inst_32819__$1 = cljs.core.get.call(null,inst_32818,inst_32817__$1);
var state_32838__$1 = (function (){var statearr_32854 = state_32838;
(statearr_32854[(7)] = inst_32817__$1);

(statearr_32854[(11)] = inst_32819__$1);

return statearr_32854;
})();
if(cljs.core.truth_(inst_32819__$1)){
var statearr_32855_32897 = state_32838__$1;
(statearr_32855_32897[(1)] = (19));

} else {
var statearr_32856_32898 = state_32838__$1;
(statearr_32856_32898[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (25))){
var inst_32828 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32857_32899 = state_32838__$1;
(statearr_32857_32899[(2)] = inst_32828);

(statearr_32857_32899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (17))){
var inst_32793 = (state_32838[(10)]);
var inst_32802 = cljs.core.first.call(null,inst_32793);
var inst_32803 = cljs.core.async.muxch_STAR_.call(null,inst_32802);
var inst_32804 = cljs.core.async.close_BANG_.call(null,inst_32803);
var inst_32805 = cljs.core.next.call(null,inst_32793);
var inst_32779 = inst_32805;
var inst_32780 = null;
var inst_32781 = (0);
var inst_32782 = (0);
var state_32838__$1 = (function (){var statearr_32858 = state_32838;
(statearr_32858[(12)] = inst_32782);

(statearr_32858[(13)] = inst_32780);

(statearr_32858[(14)] = inst_32781);

(statearr_32858[(15)] = inst_32779);

(statearr_32858[(16)] = inst_32804);

return statearr_32858;
})();
var statearr_32859_32900 = state_32838__$1;
(statearr_32859_32900[(2)] = null);

(statearr_32859_32900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (3))){
var inst_32836 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32838__$1,inst_32836);
} else {
if((state_val_32839 === (12))){
var inst_32813 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32860_32901 = state_32838__$1;
(statearr_32860_32901[(2)] = inst_32813);

(statearr_32860_32901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (2))){
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32838__$1,(4),ch);
} else {
if((state_val_32839 === (23))){
var state_32838__$1 = state_32838;
var statearr_32861_32902 = state_32838__$1;
(statearr_32861_32902[(2)] = null);

(statearr_32861_32902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (19))){
var inst_32769 = (state_32838[(8)]);
var inst_32819 = (state_32838[(11)]);
var inst_32821 = cljs.core.async.muxch_STAR_.call(null,inst_32819);
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32838__$1,(22),inst_32821,inst_32769);
} else {
if((state_val_32839 === (11))){
var inst_32793 = (state_32838[(10)]);
var inst_32779 = (state_32838[(15)]);
var inst_32793__$1 = cljs.core.seq.call(null,inst_32779);
var state_32838__$1 = (function (){var statearr_32862 = state_32838;
(statearr_32862[(10)] = inst_32793__$1);

return statearr_32862;
})();
if(inst_32793__$1){
var statearr_32863_32903 = state_32838__$1;
(statearr_32863_32903[(1)] = (13));

} else {
var statearr_32864_32904 = state_32838__$1;
(statearr_32864_32904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (9))){
var inst_32815 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32865_32905 = state_32838__$1;
(statearr_32865_32905[(2)] = inst_32815);

(statearr_32865_32905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (5))){
var inst_32776 = cljs.core.deref.call(null,mults);
var inst_32777 = cljs.core.vals.call(null,inst_32776);
var inst_32778 = cljs.core.seq.call(null,inst_32777);
var inst_32779 = inst_32778;
var inst_32780 = null;
var inst_32781 = (0);
var inst_32782 = (0);
var state_32838__$1 = (function (){var statearr_32866 = state_32838;
(statearr_32866[(12)] = inst_32782);

(statearr_32866[(13)] = inst_32780);

(statearr_32866[(14)] = inst_32781);

(statearr_32866[(15)] = inst_32779);

return statearr_32866;
})();
var statearr_32867_32906 = state_32838__$1;
(statearr_32867_32906[(2)] = null);

(statearr_32867_32906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (14))){
var state_32838__$1 = state_32838;
var statearr_32871_32907 = state_32838__$1;
(statearr_32871_32907[(2)] = null);

(statearr_32871_32907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (16))){
var inst_32793 = (state_32838[(10)]);
var inst_32797 = cljs.core.chunk_first.call(null,inst_32793);
var inst_32798 = cljs.core.chunk_rest.call(null,inst_32793);
var inst_32799 = cljs.core.count.call(null,inst_32797);
var inst_32779 = inst_32798;
var inst_32780 = inst_32797;
var inst_32781 = inst_32799;
var inst_32782 = (0);
var state_32838__$1 = (function (){var statearr_32872 = state_32838;
(statearr_32872[(12)] = inst_32782);

(statearr_32872[(13)] = inst_32780);

(statearr_32872[(14)] = inst_32781);

(statearr_32872[(15)] = inst_32779);

return statearr_32872;
})();
var statearr_32873_32908 = state_32838__$1;
(statearr_32873_32908[(2)] = null);

(statearr_32873_32908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (10))){
var inst_32782 = (state_32838[(12)]);
var inst_32780 = (state_32838[(13)]);
var inst_32781 = (state_32838[(14)]);
var inst_32779 = (state_32838[(15)]);
var inst_32787 = cljs.core._nth.call(null,inst_32780,inst_32782);
var inst_32788 = cljs.core.async.muxch_STAR_.call(null,inst_32787);
var inst_32789 = cljs.core.async.close_BANG_.call(null,inst_32788);
var inst_32790 = (inst_32782 + (1));
var tmp32868 = inst_32780;
var tmp32869 = inst_32781;
var tmp32870 = inst_32779;
var inst_32779__$1 = tmp32870;
var inst_32780__$1 = tmp32868;
var inst_32781__$1 = tmp32869;
var inst_32782__$1 = inst_32790;
var state_32838__$1 = (function (){var statearr_32874 = state_32838;
(statearr_32874[(12)] = inst_32782__$1);

(statearr_32874[(13)] = inst_32780__$1);

(statearr_32874[(14)] = inst_32781__$1);

(statearr_32874[(15)] = inst_32779__$1);

(statearr_32874[(17)] = inst_32789);

return statearr_32874;
})();
var statearr_32875_32909 = state_32838__$1;
(statearr_32875_32909[(2)] = null);

(statearr_32875_32909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (18))){
var inst_32808 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32876_32910 = state_32838__$1;
(statearr_32876_32910[(2)] = inst_32808);

(statearr_32876_32910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (8))){
var inst_32782 = (state_32838[(12)]);
var inst_32781 = (state_32838[(14)]);
var inst_32784 = (inst_32782 < inst_32781);
var inst_32785 = inst_32784;
var state_32838__$1 = state_32838;
if(cljs.core.truth_(inst_32785)){
var statearr_32877_32911 = state_32838__$1;
(statearr_32877_32911[(1)] = (10));

} else {
var statearr_32878_32912 = state_32838__$1;
(statearr_32878_32912[(1)] = (11));

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
});})(c__31650__auto___32884,mults,ensure_mult,p))
;
return ((function (switch__31555__auto__,c__31650__auto___32884,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_32879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32879[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_32879[(1)] = (1));

return statearr_32879;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_32838){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_32838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e32880){if((e32880 instanceof Object)){
var ex__31559__auto__ = e32880;
var statearr_32881_32913 = state_32838;
(statearr_32881_32913[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32914 = state_32838;
state_32838 = G__32914;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_32838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_32838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___32884,mults,ensure_mult,p))
})();
var state__31652__auto__ = (function (){var statearr_32882 = f__31651__auto__.call(null);
(statearr_32882[(6)] = c__31650__auto___32884);

return statearr_32882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___32884,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32916 = arguments.length;
switch (G__32916) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32919 = arguments.length;
switch (G__32919) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32922 = arguments.length;
switch (G__32922) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31650__auto___32989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___32989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___32989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32961){
var state_val_32962 = (state_32961[(1)]);
if((state_val_32962 === (7))){
var state_32961__$1 = state_32961;
var statearr_32963_32990 = state_32961__$1;
(statearr_32963_32990[(2)] = null);

(statearr_32963_32990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (1))){
var state_32961__$1 = state_32961;
var statearr_32964_32991 = state_32961__$1;
(statearr_32964_32991[(2)] = null);

(statearr_32964_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (4))){
var inst_32925 = (state_32961[(7)]);
var inst_32927 = (inst_32925 < cnt);
var state_32961__$1 = state_32961;
if(cljs.core.truth_(inst_32927)){
var statearr_32965_32992 = state_32961__$1;
(statearr_32965_32992[(1)] = (6));

} else {
var statearr_32966_32993 = state_32961__$1;
(statearr_32966_32993[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (15))){
var inst_32957 = (state_32961[(2)]);
var state_32961__$1 = state_32961;
var statearr_32967_32994 = state_32961__$1;
(statearr_32967_32994[(2)] = inst_32957);

(statearr_32967_32994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (13))){
var inst_32950 = cljs.core.async.close_BANG_.call(null,out);
var state_32961__$1 = state_32961;
var statearr_32968_32995 = state_32961__$1;
(statearr_32968_32995[(2)] = inst_32950);

(statearr_32968_32995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (6))){
var state_32961__$1 = state_32961;
var statearr_32969_32996 = state_32961__$1;
(statearr_32969_32996[(2)] = null);

(statearr_32969_32996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (3))){
var inst_32959 = (state_32961[(2)]);
var state_32961__$1 = state_32961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32961__$1,inst_32959);
} else {
if((state_val_32962 === (12))){
var inst_32947 = (state_32961[(8)]);
var inst_32947__$1 = (state_32961[(2)]);
var inst_32948 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32947__$1);
var state_32961__$1 = (function (){var statearr_32970 = state_32961;
(statearr_32970[(8)] = inst_32947__$1);

return statearr_32970;
})();
if(cljs.core.truth_(inst_32948)){
var statearr_32971_32997 = state_32961__$1;
(statearr_32971_32997[(1)] = (13));

} else {
var statearr_32972_32998 = state_32961__$1;
(statearr_32972_32998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (2))){
var inst_32924 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32925 = (0);
var state_32961__$1 = (function (){var statearr_32973 = state_32961;
(statearr_32973[(9)] = inst_32924);

(statearr_32973[(7)] = inst_32925);

return statearr_32973;
})();
var statearr_32974_32999 = state_32961__$1;
(statearr_32974_32999[(2)] = null);

(statearr_32974_32999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (11))){
var inst_32925 = (state_32961[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32961,(10),Object,null,(9));
var inst_32934 = chs__$1.call(null,inst_32925);
var inst_32935 = done.call(null,inst_32925);
var inst_32936 = cljs.core.async.take_BANG_.call(null,inst_32934,inst_32935);
var state_32961__$1 = state_32961;
var statearr_32975_33000 = state_32961__$1;
(statearr_32975_33000[(2)] = inst_32936);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32961__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (9))){
var inst_32925 = (state_32961[(7)]);
var inst_32938 = (state_32961[(2)]);
var inst_32939 = (inst_32925 + (1));
var inst_32925__$1 = inst_32939;
var state_32961__$1 = (function (){var statearr_32976 = state_32961;
(statearr_32976[(10)] = inst_32938);

(statearr_32976[(7)] = inst_32925__$1);

return statearr_32976;
})();
var statearr_32977_33001 = state_32961__$1;
(statearr_32977_33001[(2)] = null);

(statearr_32977_33001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (5))){
var inst_32945 = (state_32961[(2)]);
var state_32961__$1 = (function (){var statearr_32978 = state_32961;
(statearr_32978[(11)] = inst_32945);

return statearr_32978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32961__$1,(12),dchan);
} else {
if((state_val_32962 === (14))){
var inst_32947 = (state_32961[(8)]);
var inst_32952 = cljs.core.apply.call(null,f,inst_32947);
var state_32961__$1 = state_32961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32961__$1,(16),out,inst_32952);
} else {
if((state_val_32962 === (16))){
var inst_32954 = (state_32961[(2)]);
var state_32961__$1 = (function (){var statearr_32979 = state_32961;
(statearr_32979[(12)] = inst_32954);

return statearr_32979;
})();
var statearr_32980_33002 = state_32961__$1;
(statearr_32980_33002[(2)] = null);

(statearr_32980_33002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (10))){
var inst_32929 = (state_32961[(2)]);
var inst_32930 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32961__$1 = (function (){var statearr_32981 = state_32961;
(statearr_32981[(13)] = inst_32929);

return statearr_32981;
})();
var statearr_32982_33003 = state_32961__$1;
(statearr_32982_33003[(2)] = inst_32930);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32961__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32962 === (8))){
var inst_32943 = (state_32961[(2)]);
var state_32961__$1 = state_32961;
var statearr_32983_33004 = state_32961__$1;
(statearr_32983_33004[(2)] = inst_32943);

(statearr_32983_33004[(1)] = (5));


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
});})(c__31650__auto___32989,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31555__auto__,c__31650__auto___32989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_32984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32984[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_32984[(1)] = (1));

return statearr_32984;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_32961){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_32961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e32985){if((e32985 instanceof Object)){
var ex__31559__auto__ = e32985;
var statearr_32986_33005 = state_32961;
(statearr_32986_33005[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33006 = state_32961;
state_32961 = G__33006;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_32961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_32961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___32989,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31652__auto__ = (function (){var statearr_32987 = f__31651__auto__.call(null);
(statearr_32987[(6)] = c__31650__auto___32989);

return statearr_32987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___32989,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33009 = arguments.length;
switch (G__33009) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31650__auto___33063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___33063,out){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___33063,out){
return (function (state_33041){
var state_val_33042 = (state_33041[(1)]);
if((state_val_33042 === (7))){
var inst_33020 = (state_33041[(7)]);
var inst_33021 = (state_33041[(8)]);
var inst_33020__$1 = (state_33041[(2)]);
var inst_33021__$1 = cljs.core.nth.call(null,inst_33020__$1,(0),null);
var inst_33022 = cljs.core.nth.call(null,inst_33020__$1,(1),null);
var inst_33023 = (inst_33021__$1 == null);
var state_33041__$1 = (function (){var statearr_33043 = state_33041;
(statearr_33043[(7)] = inst_33020__$1);

(statearr_33043[(9)] = inst_33022);

(statearr_33043[(8)] = inst_33021__$1);

return statearr_33043;
})();
if(cljs.core.truth_(inst_33023)){
var statearr_33044_33064 = state_33041__$1;
(statearr_33044_33064[(1)] = (8));

} else {
var statearr_33045_33065 = state_33041__$1;
(statearr_33045_33065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (1))){
var inst_33010 = cljs.core.vec.call(null,chs);
var inst_33011 = inst_33010;
var state_33041__$1 = (function (){var statearr_33046 = state_33041;
(statearr_33046[(10)] = inst_33011);

return statearr_33046;
})();
var statearr_33047_33066 = state_33041__$1;
(statearr_33047_33066[(2)] = null);

(statearr_33047_33066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (4))){
var inst_33011 = (state_33041[(10)]);
var state_33041__$1 = state_33041;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33041__$1,(7),inst_33011);
} else {
if((state_val_33042 === (6))){
var inst_33037 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33048_33067 = state_33041__$1;
(statearr_33048_33067[(2)] = inst_33037);

(statearr_33048_33067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (3))){
var inst_33039 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33041__$1,inst_33039);
} else {
if((state_val_33042 === (2))){
var inst_33011 = (state_33041[(10)]);
var inst_33013 = cljs.core.count.call(null,inst_33011);
var inst_33014 = (inst_33013 > (0));
var state_33041__$1 = state_33041;
if(cljs.core.truth_(inst_33014)){
var statearr_33050_33068 = state_33041__$1;
(statearr_33050_33068[(1)] = (4));

} else {
var statearr_33051_33069 = state_33041__$1;
(statearr_33051_33069[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (11))){
var inst_33011 = (state_33041[(10)]);
var inst_33030 = (state_33041[(2)]);
var tmp33049 = inst_33011;
var inst_33011__$1 = tmp33049;
var state_33041__$1 = (function (){var statearr_33052 = state_33041;
(statearr_33052[(10)] = inst_33011__$1);

(statearr_33052[(11)] = inst_33030);

return statearr_33052;
})();
var statearr_33053_33070 = state_33041__$1;
(statearr_33053_33070[(2)] = null);

(statearr_33053_33070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (9))){
var inst_33021 = (state_33041[(8)]);
var state_33041__$1 = state_33041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33041__$1,(11),out,inst_33021);
} else {
if((state_val_33042 === (5))){
var inst_33035 = cljs.core.async.close_BANG_.call(null,out);
var state_33041__$1 = state_33041;
var statearr_33054_33071 = state_33041__$1;
(statearr_33054_33071[(2)] = inst_33035);

(statearr_33054_33071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (10))){
var inst_33033 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33055_33072 = state_33041__$1;
(statearr_33055_33072[(2)] = inst_33033);

(statearr_33055_33072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33042 === (8))){
var inst_33020 = (state_33041[(7)]);
var inst_33022 = (state_33041[(9)]);
var inst_33021 = (state_33041[(8)]);
var inst_33011 = (state_33041[(10)]);
var inst_33025 = (function (){var cs = inst_33011;
var vec__33016 = inst_33020;
var v = inst_33021;
var c = inst_33022;
return ((function (cs,vec__33016,v,c,inst_33020,inst_33022,inst_33021,inst_33011,state_val_33042,c__31650__auto___33063,out){
return (function (p1__33007_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33007_SHARP_);
});
;})(cs,vec__33016,v,c,inst_33020,inst_33022,inst_33021,inst_33011,state_val_33042,c__31650__auto___33063,out))
})();
var inst_33026 = cljs.core.filterv.call(null,inst_33025,inst_33011);
var inst_33011__$1 = inst_33026;
var state_33041__$1 = (function (){var statearr_33056 = state_33041;
(statearr_33056[(10)] = inst_33011__$1);

return statearr_33056;
})();
var statearr_33057_33073 = state_33041__$1;
(statearr_33057_33073[(2)] = null);

(statearr_33057_33073[(1)] = (2));


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
});})(c__31650__auto___33063,out))
;
return ((function (switch__31555__auto__,c__31650__auto___33063,out){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_33058 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33058[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_33058[(1)] = (1));

return statearr_33058;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_33041){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_33041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e33059){if((e33059 instanceof Object)){
var ex__31559__auto__ = e33059;
var statearr_33060_33074 = state_33041;
(statearr_33060_33074[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33075 = state_33041;
state_33041 = G__33075;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_33041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_33041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___33063,out))
})();
var state__31652__auto__ = (function (){var statearr_33061 = f__31651__auto__.call(null);
(statearr_33061[(6)] = c__31650__auto___33063);

return statearr_33061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___33063,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33077 = arguments.length;
switch (G__33077) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31650__auto___33122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___33122,out){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___33122,out){
return (function (state_33101){
var state_val_33102 = (state_33101[(1)]);
if((state_val_33102 === (7))){
var inst_33083 = (state_33101[(7)]);
var inst_33083__$1 = (state_33101[(2)]);
var inst_33084 = (inst_33083__$1 == null);
var inst_33085 = cljs.core.not.call(null,inst_33084);
var state_33101__$1 = (function (){var statearr_33103 = state_33101;
(statearr_33103[(7)] = inst_33083__$1);

return statearr_33103;
})();
if(inst_33085){
var statearr_33104_33123 = state_33101__$1;
(statearr_33104_33123[(1)] = (8));

} else {
var statearr_33105_33124 = state_33101__$1;
(statearr_33105_33124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (1))){
var inst_33078 = (0);
var state_33101__$1 = (function (){var statearr_33106 = state_33101;
(statearr_33106[(8)] = inst_33078);

return statearr_33106;
})();
var statearr_33107_33125 = state_33101__$1;
(statearr_33107_33125[(2)] = null);

(statearr_33107_33125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (4))){
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33101__$1,(7),ch);
} else {
if((state_val_33102 === (6))){
var inst_33096 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33108_33126 = state_33101__$1;
(statearr_33108_33126[(2)] = inst_33096);

(statearr_33108_33126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (3))){
var inst_33098 = (state_33101[(2)]);
var inst_33099 = cljs.core.async.close_BANG_.call(null,out);
var state_33101__$1 = (function (){var statearr_33109 = state_33101;
(statearr_33109[(9)] = inst_33098);

return statearr_33109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33101__$1,inst_33099);
} else {
if((state_val_33102 === (2))){
var inst_33078 = (state_33101[(8)]);
var inst_33080 = (inst_33078 < n);
var state_33101__$1 = state_33101;
if(cljs.core.truth_(inst_33080)){
var statearr_33110_33127 = state_33101__$1;
(statearr_33110_33127[(1)] = (4));

} else {
var statearr_33111_33128 = state_33101__$1;
(statearr_33111_33128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (11))){
var inst_33078 = (state_33101[(8)]);
var inst_33088 = (state_33101[(2)]);
var inst_33089 = (inst_33078 + (1));
var inst_33078__$1 = inst_33089;
var state_33101__$1 = (function (){var statearr_33112 = state_33101;
(statearr_33112[(10)] = inst_33088);

(statearr_33112[(8)] = inst_33078__$1);

return statearr_33112;
})();
var statearr_33113_33129 = state_33101__$1;
(statearr_33113_33129[(2)] = null);

(statearr_33113_33129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (9))){
var state_33101__$1 = state_33101;
var statearr_33114_33130 = state_33101__$1;
(statearr_33114_33130[(2)] = null);

(statearr_33114_33130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (5))){
var state_33101__$1 = state_33101;
var statearr_33115_33131 = state_33101__$1;
(statearr_33115_33131[(2)] = null);

(statearr_33115_33131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (10))){
var inst_33093 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33116_33132 = state_33101__$1;
(statearr_33116_33132[(2)] = inst_33093);

(statearr_33116_33132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (8))){
var inst_33083 = (state_33101[(7)]);
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33101__$1,(11),out,inst_33083);
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
});})(c__31650__auto___33122,out))
;
return ((function (switch__31555__auto__,c__31650__auto___33122,out){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_33117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33117[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_33117[(1)] = (1));

return statearr_33117;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_33101){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_33101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e33118){if((e33118 instanceof Object)){
var ex__31559__auto__ = e33118;
var statearr_33119_33133 = state_33101;
(statearr_33119_33133[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33134 = state_33101;
state_33101 = G__33134;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_33101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_33101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___33122,out))
})();
var state__31652__auto__ = (function (){var statearr_33120 = f__31651__auto__.call(null);
(statearr_33120[(6)] = c__31650__auto___33122);

return statearr_33120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___33122,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33136 = (function (f,ch,meta33137){
this.f = f;
this.ch = ch;
this.meta33137 = meta33137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33138,meta33137__$1){
var self__ = this;
var _33138__$1 = this;
return (new cljs.core.async.t_cljs$core$async33136(self__.f,self__.ch,meta33137__$1));
});

cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33138){
var self__ = this;
var _33138__$1 = this;
return self__.meta33137;
});

cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33139 = (function (f,ch,meta33137,_,fn1,meta33140){
this.f = f;
this.ch = ch;
this.meta33137 = meta33137;
this._ = _;
this.fn1 = fn1;
this.meta33140 = meta33140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33141,meta33140__$1){
var self__ = this;
var _33141__$1 = this;
return (new cljs.core.async.t_cljs$core$async33139(self__.f,self__.ch,self__.meta33137,self__._,self__.fn1,meta33140__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33141){
var self__ = this;
var _33141__$1 = this;
return self__.meta33140;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33139.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33135_SHARP_){
return f1.call(null,(((p1__33135_SHARP_ == null))?null:self__.f.call(null,p1__33135_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33139.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33137","meta33137",1256119667,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33136","cljs.core.async/t_cljs$core$async33136",-1782844847,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33140","meta33140",154705695,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33139";

cljs.core.async.t_cljs$core$async33139.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33139");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33139.
 */
cljs.core.async.__GT_t_cljs$core$async33139 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33139(f__$1,ch__$1,meta33137__$1,___$2,fn1__$1,meta33140){
return (new cljs.core.async.t_cljs$core$async33139(f__$1,ch__$1,meta33137__$1,___$2,fn1__$1,meta33140));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33139(self__.f,self__.ch,self__.meta33137,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33137","meta33137",1256119667,null)], null);
});

cljs.core.async.t_cljs$core$async33136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33136";

cljs.core.async.t_cljs$core$async33136.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33136");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33136.
 */
cljs.core.async.__GT_t_cljs$core$async33136 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33136(f__$1,ch__$1,meta33137){
return (new cljs.core.async.t_cljs$core$async33136(f__$1,ch__$1,meta33137));
});

}

return (new cljs.core.async.t_cljs$core$async33136(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33142 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33142 = (function (f,ch,meta33143){
this.f = f;
this.ch = ch;
this.meta33143 = meta33143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33144,meta33143__$1){
var self__ = this;
var _33144__$1 = this;
return (new cljs.core.async.t_cljs$core$async33142(self__.f,self__.ch,meta33143__$1));
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33144){
var self__ = this;
var _33144__$1 = this;
return self__.meta33143;
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33143","meta33143",1383972894,null)], null);
});

cljs.core.async.t_cljs$core$async33142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33142";

cljs.core.async.t_cljs$core$async33142.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33142");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33142.
 */
cljs.core.async.__GT_t_cljs$core$async33142 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33142(f__$1,ch__$1,meta33143){
return (new cljs.core.async.t_cljs$core$async33142(f__$1,ch__$1,meta33143));
});

}

return (new cljs.core.async.t_cljs$core$async33142(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33145 = (function (p,ch,meta33146){
this.p = p;
this.ch = ch;
this.meta33146 = meta33146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33147,meta33146__$1){
var self__ = this;
var _33147__$1 = this;
return (new cljs.core.async.t_cljs$core$async33145(self__.p,self__.ch,meta33146__$1));
});

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33147){
var self__ = this;
var _33147__$1 = this;
return self__.meta33146;
});

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33145.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33146","meta33146",-90495775,null)], null);
});

cljs.core.async.t_cljs$core$async33145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33145";

cljs.core.async.t_cljs$core$async33145.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33145");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33145.
 */
cljs.core.async.__GT_t_cljs$core$async33145 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33145(p__$1,ch__$1,meta33146){
return (new cljs.core.async.t_cljs$core$async33145(p__$1,ch__$1,meta33146));
});

}

return (new cljs.core.async.t_cljs$core$async33145(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33149 = arguments.length;
switch (G__33149) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31650__auto___33189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___33189,out){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___33189,out){
return (function (state_33170){
var state_val_33171 = (state_33170[(1)]);
if((state_val_33171 === (7))){
var inst_33166 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
var statearr_33172_33190 = state_33170__$1;
(statearr_33172_33190[(2)] = inst_33166);

(statearr_33172_33190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (1))){
var state_33170__$1 = state_33170;
var statearr_33173_33191 = state_33170__$1;
(statearr_33173_33191[(2)] = null);

(statearr_33173_33191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (4))){
var inst_33152 = (state_33170[(7)]);
var inst_33152__$1 = (state_33170[(2)]);
var inst_33153 = (inst_33152__$1 == null);
var state_33170__$1 = (function (){var statearr_33174 = state_33170;
(statearr_33174[(7)] = inst_33152__$1);

return statearr_33174;
})();
if(cljs.core.truth_(inst_33153)){
var statearr_33175_33192 = state_33170__$1;
(statearr_33175_33192[(1)] = (5));

} else {
var statearr_33176_33193 = state_33170__$1;
(statearr_33176_33193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (6))){
var inst_33152 = (state_33170[(7)]);
var inst_33157 = p.call(null,inst_33152);
var state_33170__$1 = state_33170;
if(cljs.core.truth_(inst_33157)){
var statearr_33177_33194 = state_33170__$1;
(statearr_33177_33194[(1)] = (8));

} else {
var statearr_33178_33195 = state_33170__$1;
(statearr_33178_33195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (3))){
var inst_33168 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33170__$1,inst_33168);
} else {
if((state_val_33171 === (2))){
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33170__$1,(4),ch);
} else {
if((state_val_33171 === (11))){
var inst_33160 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
var statearr_33179_33196 = state_33170__$1;
(statearr_33179_33196[(2)] = inst_33160);

(statearr_33179_33196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (9))){
var state_33170__$1 = state_33170;
var statearr_33180_33197 = state_33170__$1;
(statearr_33180_33197[(2)] = null);

(statearr_33180_33197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (5))){
var inst_33155 = cljs.core.async.close_BANG_.call(null,out);
var state_33170__$1 = state_33170;
var statearr_33181_33198 = state_33170__$1;
(statearr_33181_33198[(2)] = inst_33155);

(statearr_33181_33198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (10))){
var inst_33163 = (state_33170[(2)]);
var state_33170__$1 = (function (){var statearr_33182 = state_33170;
(statearr_33182[(8)] = inst_33163);

return statearr_33182;
})();
var statearr_33183_33199 = state_33170__$1;
(statearr_33183_33199[(2)] = null);

(statearr_33183_33199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (8))){
var inst_33152 = (state_33170[(7)]);
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33170__$1,(11),out,inst_33152);
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
});})(c__31650__auto___33189,out))
;
return ((function (switch__31555__auto__,c__31650__auto___33189,out){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_33184 = [null,null,null,null,null,null,null,null,null];
(statearr_33184[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_33184[(1)] = (1));

return statearr_33184;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_33170){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_33170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e33185){if((e33185 instanceof Object)){
var ex__31559__auto__ = e33185;
var statearr_33186_33200 = state_33170;
(statearr_33186_33200[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33201 = state_33170;
state_33170 = G__33201;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_33170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_33170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___33189,out))
})();
var state__31652__auto__ = (function (){var statearr_33187 = f__31651__auto__.call(null);
(statearr_33187[(6)] = c__31650__auto___33189);

return statearr_33187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___33189,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33203 = arguments.length;
switch (G__33203) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto__){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto__){
return (function (state_33266){
var state_val_33267 = (state_33266[(1)]);
if((state_val_33267 === (7))){
var inst_33262 = (state_33266[(2)]);
var state_33266__$1 = state_33266;
var statearr_33268_33306 = state_33266__$1;
(statearr_33268_33306[(2)] = inst_33262);

(statearr_33268_33306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (20))){
var inst_33232 = (state_33266[(7)]);
var inst_33243 = (state_33266[(2)]);
var inst_33244 = cljs.core.next.call(null,inst_33232);
var inst_33218 = inst_33244;
var inst_33219 = null;
var inst_33220 = (0);
var inst_33221 = (0);
var state_33266__$1 = (function (){var statearr_33269 = state_33266;
(statearr_33269[(8)] = inst_33218);

(statearr_33269[(9)] = inst_33221);

(statearr_33269[(10)] = inst_33219);

(statearr_33269[(11)] = inst_33220);

(statearr_33269[(12)] = inst_33243);

return statearr_33269;
})();
var statearr_33270_33307 = state_33266__$1;
(statearr_33270_33307[(2)] = null);

(statearr_33270_33307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (1))){
var state_33266__$1 = state_33266;
var statearr_33271_33308 = state_33266__$1;
(statearr_33271_33308[(2)] = null);

(statearr_33271_33308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (4))){
var inst_33207 = (state_33266[(13)]);
var inst_33207__$1 = (state_33266[(2)]);
var inst_33208 = (inst_33207__$1 == null);
var state_33266__$1 = (function (){var statearr_33272 = state_33266;
(statearr_33272[(13)] = inst_33207__$1);

return statearr_33272;
})();
if(cljs.core.truth_(inst_33208)){
var statearr_33273_33309 = state_33266__$1;
(statearr_33273_33309[(1)] = (5));

} else {
var statearr_33274_33310 = state_33266__$1;
(statearr_33274_33310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (15))){
var state_33266__$1 = state_33266;
var statearr_33278_33311 = state_33266__$1;
(statearr_33278_33311[(2)] = null);

(statearr_33278_33311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (21))){
var state_33266__$1 = state_33266;
var statearr_33279_33312 = state_33266__$1;
(statearr_33279_33312[(2)] = null);

(statearr_33279_33312[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (13))){
var inst_33218 = (state_33266[(8)]);
var inst_33221 = (state_33266[(9)]);
var inst_33219 = (state_33266[(10)]);
var inst_33220 = (state_33266[(11)]);
var inst_33228 = (state_33266[(2)]);
var inst_33229 = (inst_33221 + (1));
var tmp33275 = inst_33218;
var tmp33276 = inst_33219;
var tmp33277 = inst_33220;
var inst_33218__$1 = tmp33275;
var inst_33219__$1 = tmp33276;
var inst_33220__$1 = tmp33277;
var inst_33221__$1 = inst_33229;
var state_33266__$1 = (function (){var statearr_33280 = state_33266;
(statearr_33280[(8)] = inst_33218__$1);

(statearr_33280[(14)] = inst_33228);

(statearr_33280[(9)] = inst_33221__$1);

(statearr_33280[(10)] = inst_33219__$1);

(statearr_33280[(11)] = inst_33220__$1);

return statearr_33280;
})();
var statearr_33281_33313 = state_33266__$1;
(statearr_33281_33313[(2)] = null);

(statearr_33281_33313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (22))){
var state_33266__$1 = state_33266;
var statearr_33282_33314 = state_33266__$1;
(statearr_33282_33314[(2)] = null);

(statearr_33282_33314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (6))){
var inst_33207 = (state_33266[(13)]);
var inst_33216 = f.call(null,inst_33207);
var inst_33217 = cljs.core.seq.call(null,inst_33216);
var inst_33218 = inst_33217;
var inst_33219 = null;
var inst_33220 = (0);
var inst_33221 = (0);
var state_33266__$1 = (function (){var statearr_33283 = state_33266;
(statearr_33283[(8)] = inst_33218);

(statearr_33283[(9)] = inst_33221);

(statearr_33283[(10)] = inst_33219);

(statearr_33283[(11)] = inst_33220);

return statearr_33283;
})();
var statearr_33284_33315 = state_33266__$1;
(statearr_33284_33315[(2)] = null);

(statearr_33284_33315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (17))){
var inst_33232 = (state_33266[(7)]);
var inst_33236 = cljs.core.chunk_first.call(null,inst_33232);
var inst_33237 = cljs.core.chunk_rest.call(null,inst_33232);
var inst_33238 = cljs.core.count.call(null,inst_33236);
var inst_33218 = inst_33237;
var inst_33219 = inst_33236;
var inst_33220 = inst_33238;
var inst_33221 = (0);
var state_33266__$1 = (function (){var statearr_33285 = state_33266;
(statearr_33285[(8)] = inst_33218);

(statearr_33285[(9)] = inst_33221);

(statearr_33285[(10)] = inst_33219);

(statearr_33285[(11)] = inst_33220);

return statearr_33285;
})();
var statearr_33286_33316 = state_33266__$1;
(statearr_33286_33316[(2)] = null);

(statearr_33286_33316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (3))){
var inst_33264 = (state_33266[(2)]);
var state_33266__$1 = state_33266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33266__$1,inst_33264);
} else {
if((state_val_33267 === (12))){
var inst_33252 = (state_33266[(2)]);
var state_33266__$1 = state_33266;
var statearr_33287_33317 = state_33266__$1;
(statearr_33287_33317[(2)] = inst_33252);

(statearr_33287_33317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (2))){
var state_33266__$1 = state_33266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33266__$1,(4),in$);
} else {
if((state_val_33267 === (23))){
var inst_33260 = (state_33266[(2)]);
var state_33266__$1 = state_33266;
var statearr_33288_33318 = state_33266__$1;
(statearr_33288_33318[(2)] = inst_33260);

(statearr_33288_33318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (19))){
var inst_33247 = (state_33266[(2)]);
var state_33266__$1 = state_33266;
var statearr_33289_33319 = state_33266__$1;
(statearr_33289_33319[(2)] = inst_33247);

(statearr_33289_33319[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (11))){
var inst_33218 = (state_33266[(8)]);
var inst_33232 = (state_33266[(7)]);
var inst_33232__$1 = cljs.core.seq.call(null,inst_33218);
var state_33266__$1 = (function (){var statearr_33290 = state_33266;
(statearr_33290[(7)] = inst_33232__$1);

return statearr_33290;
})();
if(inst_33232__$1){
var statearr_33291_33320 = state_33266__$1;
(statearr_33291_33320[(1)] = (14));

} else {
var statearr_33292_33321 = state_33266__$1;
(statearr_33292_33321[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (9))){
var inst_33254 = (state_33266[(2)]);
var inst_33255 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33266__$1 = (function (){var statearr_33293 = state_33266;
(statearr_33293[(15)] = inst_33254);

return statearr_33293;
})();
if(cljs.core.truth_(inst_33255)){
var statearr_33294_33322 = state_33266__$1;
(statearr_33294_33322[(1)] = (21));

} else {
var statearr_33295_33323 = state_33266__$1;
(statearr_33295_33323[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (5))){
var inst_33210 = cljs.core.async.close_BANG_.call(null,out);
var state_33266__$1 = state_33266;
var statearr_33296_33324 = state_33266__$1;
(statearr_33296_33324[(2)] = inst_33210);

(statearr_33296_33324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (14))){
var inst_33232 = (state_33266[(7)]);
var inst_33234 = cljs.core.chunked_seq_QMARK_.call(null,inst_33232);
var state_33266__$1 = state_33266;
if(inst_33234){
var statearr_33297_33325 = state_33266__$1;
(statearr_33297_33325[(1)] = (17));

} else {
var statearr_33298_33326 = state_33266__$1;
(statearr_33298_33326[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (16))){
var inst_33250 = (state_33266[(2)]);
var state_33266__$1 = state_33266;
var statearr_33299_33327 = state_33266__$1;
(statearr_33299_33327[(2)] = inst_33250);

(statearr_33299_33327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33267 === (10))){
var inst_33221 = (state_33266[(9)]);
var inst_33219 = (state_33266[(10)]);
var inst_33226 = cljs.core._nth.call(null,inst_33219,inst_33221);
var state_33266__$1 = state_33266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33266__$1,(13),out,inst_33226);
} else {
if((state_val_33267 === (18))){
var inst_33232 = (state_33266[(7)]);
var inst_33241 = cljs.core.first.call(null,inst_33232);
var state_33266__$1 = state_33266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33266__$1,(20),out,inst_33241);
} else {
if((state_val_33267 === (8))){
var inst_33221 = (state_33266[(9)]);
var inst_33220 = (state_33266[(11)]);
var inst_33223 = (inst_33221 < inst_33220);
var inst_33224 = inst_33223;
var state_33266__$1 = state_33266;
if(cljs.core.truth_(inst_33224)){
var statearr_33300_33328 = state_33266__$1;
(statearr_33300_33328[(1)] = (10));

} else {
var statearr_33301_33329 = state_33266__$1;
(statearr_33301_33329[(1)] = (11));

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
});})(c__31650__auto__))
;
return ((function (switch__31555__auto__,c__31650__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31556__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31556__auto____0 = (function (){
var statearr_33302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33302[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31556__auto__);

(statearr_33302[(1)] = (1));

return statearr_33302;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31556__auto____1 = (function (state_33266){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_33266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e33303){if((e33303 instanceof Object)){
var ex__31559__auto__ = e33303;
var statearr_33304_33330 = state_33266;
(statearr_33304_33330[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33331 = state_33266;
state_33266 = G__33331;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31556__auto__ = function(state_33266){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31556__auto____1.call(this,state_33266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31556__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31556__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto__))
})();
var state__31652__auto__ = (function (){var statearr_33305 = f__31651__auto__.call(null);
(statearr_33305[(6)] = c__31650__auto__);

return statearr_33305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto__))
);

return c__31650__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33333 = arguments.length;
switch (G__33333) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33336 = arguments.length;
switch (G__33336) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33339 = arguments.length;
switch (G__33339) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31650__auto___33386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___33386,out){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___33386,out){
return (function (state_33363){
var state_val_33364 = (state_33363[(1)]);
if((state_val_33364 === (7))){
var inst_33358 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33365_33387 = state_33363__$1;
(statearr_33365_33387[(2)] = inst_33358);

(statearr_33365_33387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (1))){
var inst_33340 = null;
var state_33363__$1 = (function (){var statearr_33366 = state_33363;
(statearr_33366[(7)] = inst_33340);

return statearr_33366;
})();
var statearr_33367_33388 = state_33363__$1;
(statearr_33367_33388[(2)] = null);

(statearr_33367_33388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (4))){
var inst_33343 = (state_33363[(8)]);
var inst_33343__$1 = (state_33363[(2)]);
var inst_33344 = (inst_33343__$1 == null);
var inst_33345 = cljs.core.not.call(null,inst_33344);
var state_33363__$1 = (function (){var statearr_33368 = state_33363;
(statearr_33368[(8)] = inst_33343__$1);

return statearr_33368;
})();
if(inst_33345){
var statearr_33369_33389 = state_33363__$1;
(statearr_33369_33389[(1)] = (5));

} else {
var statearr_33370_33390 = state_33363__$1;
(statearr_33370_33390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (6))){
var state_33363__$1 = state_33363;
var statearr_33371_33391 = state_33363__$1;
(statearr_33371_33391[(2)] = null);

(statearr_33371_33391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (3))){
var inst_33360 = (state_33363[(2)]);
var inst_33361 = cljs.core.async.close_BANG_.call(null,out);
var state_33363__$1 = (function (){var statearr_33372 = state_33363;
(statearr_33372[(9)] = inst_33360);

return statearr_33372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33363__$1,inst_33361);
} else {
if((state_val_33364 === (2))){
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33363__$1,(4),ch);
} else {
if((state_val_33364 === (11))){
var inst_33343 = (state_33363[(8)]);
var inst_33352 = (state_33363[(2)]);
var inst_33340 = inst_33343;
var state_33363__$1 = (function (){var statearr_33373 = state_33363;
(statearr_33373[(10)] = inst_33352);

(statearr_33373[(7)] = inst_33340);

return statearr_33373;
})();
var statearr_33374_33392 = state_33363__$1;
(statearr_33374_33392[(2)] = null);

(statearr_33374_33392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (9))){
var inst_33343 = (state_33363[(8)]);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33363__$1,(11),out,inst_33343);
} else {
if((state_val_33364 === (5))){
var inst_33340 = (state_33363[(7)]);
var inst_33343 = (state_33363[(8)]);
var inst_33347 = cljs.core._EQ_.call(null,inst_33343,inst_33340);
var state_33363__$1 = state_33363;
if(inst_33347){
var statearr_33376_33393 = state_33363__$1;
(statearr_33376_33393[(1)] = (8));

} else {
var statearr_33377_33394 = state_33363__$1;
(statearr_33377_33394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (10))){
var inst_33355 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33378_33395 = state_33363__$1;
(statearr_33378_33395[(2)] = inst_33355);

(statearr_33378_33395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (8))){
var inst_33340 = (state_33363[(7)]);
var tmp33375 = inst_33340;
var inst_33340__$1 = tmp33375;
var state_33363__$1 = (function (){var statearr_33379 = state_33363;
(statearr_33379[(7)] = inst_33340__$1);

return statearr_33379;
})();
var statearr_33380_33396 = state_33363__$1;
(statearr_33380_33396[(2)] = null);

(statearr_33380_33396[(1)] = (2));


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
});})(c__31650__auto___33386,out))
;
return ((function (switch__31555__auto__,c__31650__auto___33386,out){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_33381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33381[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_33381[(1)] = (1));

return statearr_33381;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_33363){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_33363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e33382){if((e33382 instanceof Object)){
var ex__31559__auto__ = e33382;
var statearr_33383_33397 = state_33363;
(statearr_33383_33397[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33398 = state_33363;
state_33363 = G__33398;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_33363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_33363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___33386,out))
})();
var state__31652__auto__ = (function (){var statearr_33384 = f__31651__auto__.call(null);
(statearr_33384[(6)] = c__31650__auto___33386);

return statearr_33384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___33386,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33400 = arguments.length;
switch (G__33400) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31650__auto___33466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___33466,out){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___33466,out){
return (function (state_33438){
var state_val_33439 = (state_33438[(1)]);
if((state_val_33439 === (7))){
var inst_33434 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33440_33467 = state_33438__$1;
(statearr_33440_33467[(2)] = inst_33434);

(statearr_33440_33467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (1))){
var inst_33401 = (new Array(n));
var inst_33402 = inst_33401;
var inst_33403 = (0);
var state_33438__$1 = (function (){var statearr_33441 = state_33438;
(statearr_33441[(7)] = inst_33402);

(statearr_33441[(8)] = inst_33403);

return statearr_33441;
})();
var statearr_33442_33468 = state_33438__$1;
(statearr_33442_33468[(2)] = null);

(statearr_33442_33468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (4))){
var inst_33406 = (state_33438[(9)]);
var inst_33406__$1 = (state_33438[(2)]);
var inst_33407 = (inst_33406__$1 == null);
var inst_33408 = cljs.core.not.call(null,inst_33407);
var state_33438__$1 = (function (){var statearr_33443 = state_33438;
(statearr_33443[(9)] = inst_33406__$1);

return statearr_33443;
})();
if(inst_33408){
var statearr_33444_33469 = state_33438__$1;
(statearr_33444_33469[(1)] = (5));

} else {
var statearr_33445_33470 = state_33438__$1;
(statearr_33445_33470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (15))){
var inst_33428 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33446_33471 = state_33438__$1;
(statearr_33446_33471[(2)] = inst_33428);

(statearr_33446_33471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (13))){
var state_33438__$1 = state_33438;
var statearr_33447_33472 = state_33438__$1;
(statearr_33447_33472[(2)] = null);

(statearr_33447_33472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (6))){
var inst_33403 = (state_33438[(8)]);
var inst_33424 = (inst_33403 > (0));
var state_33438__$1 = state_33438;
if(cljs.core.truth_(inst_33424)){
var statearr_33448_33473 = state_33438__$1;
(statearr_33448_33473[(1)] = (12));

} else {
var statearr_33449_33474 = state_33438__$1;
(statearr_33449_33474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (3))){
var inst_33436 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33438__$1,inst_33436);
} else {
if((state_val_33439 === (12))){
var inst_33402 = (state_33438[(7)]);
var inst_33426 = cljs.core.vec.call(null,inst_33402);
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33438__$1,(15),out,inst_33426);
} else {
if((state_val_33439 === (2))){
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33438__$1,(4),ch);
} else {
if((state_val_33439 === (11))){
var inst_33418 = (state_33438[(2)]);
var inst_33419 = (new Array(n));
var inst_33402 = inst_33419;
var inst_33403 = (0);
var state_33438__$1 = (function (){var statearr_33450 = state_33438;
(statearr_33450[(7)] = inst_33402);

(statearr_33450[(8)] = inst_33403);

(statearr_33450[(10)] = inst_33418);

return statearr_33450;
})();
var statearr_33451_33475 = state_33438__$1;
(statearr_33451_33475[(2)] = null);

(statearr_33451_33475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (9))){
var inst_33402 = (state_33438[(7)]);
var inst_33416 = cljs.core.vec.call(null,inst_33402);
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33438__$1,(11),out,inst_33416);
} else {
if((state_val_33439 === (5))){
var inst_33411 = (state_33438[(11)]);
var inst_33406 = (state_33438[(9)]);
var inst_33402 = (state_33438[(7)]);
var inst_33403 = (state_33438[(8)]);
var inst_33410 = (inst_33402[inst_33403] = inst_33406);
var inst_33411__$1 = (inst_33403 + (1));
var inst_33412 = (inst_33411__$1 < n);
var state_33438__$1 = (function (){var statearr_33452 = state_33438;
(statearr_33452[(11)] = inst_33411__$1);

(statearr_33452[(12)] = inst_33410);

return statearr_33452;
})();
if(cljs.core.truth_(inst_33412)){
var statearr_33453_33476 = state_33438__$1;
(statearr_33453_33476[(1)] = (8));

} else {
var statearr_33454_33477 = state_33438__$1;
(statearr_33454_33477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (14))){
var inst_33431 = (state_33438[(2)]);
var inst_33432 = cljs.core.async.close_BANG_.call(null,out);
var state_33438__$1 = (function (){var statearr_33456 = state_33438;
(statearr_33456[(13)] = inst_33431);

return statearr_33456;
})();
var statearr_33457_33478 = state_33438__$1;
(statearr_33457_33478[(2)] = inst_33432);

(statearr_33457_33478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (10))){
var inst_33422 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33458_33479 = state_33438__$1;
(statearr_33458_33479[(2)] = inst_33422);

(statearr_33458_33479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (8))){
var inst_33411 = (state_33438[(11)]);
var inst_33402 = (state_33438[(7)]);
var tmp33455 = inst_33402;
var inst_33402__$1 = tmp33455;
var inst_33403 = inst_33411;
var state_33438__$1 = (function (){var statearr_33459 = state_33438;
(statearr_33459[(7)] = inst_33402__$1);

(statearr_33459[(8)] = inst_33403);

return statearr_33459;
})();
var statearr_33460_33480 = state_33438__$1;
(statearr_33460_33480[(2)] = null);

(statearr_33460_33480[(1)] = (2));


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
});})(c__31650__auto___33466,out))
;
return ((function (switch__31555__auto__,c__31650__auto___33466,out){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_33461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33461[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_33461[(1)] = (1));

return statearr_33461;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_33438){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_33438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e33462){if((e33462 instanceof Object)){
var ex__31559__auto__ = e33462;
var statearr_33463_33481 = state_33438;
(statearr_33463_33481[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33482 = state_33438;
state_33438 = G__33482;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_33438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_33438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___33466,out))
})();
var state__31652__auto__ = (function (){var statearr_33464 = f__31651__auto__.call(null);
(statearr_33464[(6)] = c__31650__auto___33466);

return statearr_33464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___33466,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33484 = arguments.length;
switch (G__33484) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31650__auto___33554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31650__auto___33554,out){
return (function (){
var f__31651__auto__ = (function (){var switch__31555__auto__ = ((function (c__31650__auto___33554,out){
return (function (state_33526){
var state_val_33527 = (state_33526[(1)]);
if((state_val_33527 === (7))){
var inst_33522 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
var statearr_33528_33555 = state_33526__$1;
(statearr_33528_33555[(2)] = inst_33522);

(statearr_33528_33555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (1))){
var inst_33485 = [];
var inst_33486 = inst_33485;
var inst_33487 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33526__$1 = (function (){var statearr_33529 = state_33526;
(statearr_33529[(7)] = inst_33487);

(statearr_33529[(8)] = inst_33486);

return statearr_33529;
})();
var statearr_33530_33556 = state_33526__$1;
(statearr_33530_33556[(2)] = null);

(statearr_33530_33556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (4))){
var inst_33490 = (state_33526[(9)]);
var inst_33490__$1 = (state_33526[(2)]);
var inst_33491 = (inst_33490__$1 == null);
var inst_33492 = cljs.core.not.call(null,inst_33491);
var state_33526__$1 = (function (){var statearr_33531 = state_33526;
(statearr_33531[(9)] = inst_33490__$1);

return statearr_33531;
})();
if(inst_33492){
var statearr_33532_33557 = state_33526__$1;
(statearr_33532_33557[(1)] = (5));

} else {
var statearr_33533_33558 = state_33526__$1;
(statearr_33533_33558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (15))){
var inst_33516 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
var statearr_33534_33559 = state_33526__$1;
(statearr_33534_33559[(2)] = inst_33516);

(statearr_33534_33559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (13))){
var state_33526__$1 = state_33526;
var statearr_33535_33560 = state_33526__$1;
(statearr_33535_33560[(2)] = null);

(statearr_33535_33560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (6))){
var inst_33486 = (state_33526[(8)]);
var inst_33511 = inst_33486.length;
var inst_33512 = (inst_33511 > (0));
var state_33526__$1 = state_33526;
if(cljs.core.truth_(inst_33512)){
var statearr_33536_33561 = state_33526__$1;
(statearr_33536_33561[(1)] = (12));

} else {
var statearr_33537_33562 = state_33526__$1;
(statearr_33537_33562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (3))){
var inst_33524 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33526__$1,inst_33524);
} else {
if((state_val_33527 === (12))){
var inst_33486 = (state_33526[(8)]);
var inst_33514 = cljs.core.vec.call(null,inst_33486);
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33526__$1,(15),out,inst_33514);
} else {
if((state_val_33527 === (2))){
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33526__$1,(4),ch);
} else {
if((state_val_33527 === (11))){
var inst_33490 = (state_33526[(9)]);
var inst_33494 = (state_33526[(10)]);
var inst_33504 = (state_33526[(2)]);
var inst_33505 = [];
var inst_33506 = inst_33505.push(inst_33490);
var inst_33486 = inst_33505;
var inst_33487 = inst_33494;
var state_33526__$1 = (function (){var statearr_33538 = state_33526;
(statearr_33538[(7)] = inst_33487);

(statearr_33538[(11)] = inst_33506);

(statearr_33538[(12)] = inst_33504);

(statearr_33538[(8)] = inst_33486);

return statearr_33538;
})();
var statearr_33539_33563 = state_33526__$1;
(statearr_33539_33563[(2)] = null);

(statearr_33539_33563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (9))){
var inst_33486 = (state_33526[(8)]);
var inst_33502 = cljs.core.vec.call(null,inst_33486);
var state_33526__$1 = state_33526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33526__$1,(11),out,inst_33502);
} else {
if((state_val_33527 === (5))){
var inst_33487 = (state_33526[(7)]);
var inst_33490 = (state_33526[(9)]);
var inst_33494 = (state_33526[(10)]);
var inst_33494__$1 = f.call(null,inst_33490);
var inst_33495 = cljs.core._EQ_.call(null,inst_33494__$1,inst_33487);
var inst_33496 = cljs.core.keyword_identical_QMARK_.call(null,inst_33487,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33497 = ((inst_33495) || (inst_33496));
var state_33526__$1 = (function (){var statearr_33540 = state_33526;
(statearr_33540[(10)] = inst_33494__$1);

return statearr_33540;
})();
if(cljs.core.truth_(inst_33497)){
var statearr_33541_33564 = state_33526__$1;
(statearr_33541_33564[(1)] = (8));

} else {
var statearr_33542_33565 = state_33526__$1;
(statearr_33542_33565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (14))){
var inst_33519 = (state_33526[(2)]);
var inst_33520 = cljs.core.async.close_BANG_.call(null,out);
var state_33526__$1 = (function (){var statearr_33544 = state_33526;
(statearr_33544[(13)] = inst_33519);

return statearr_33544;
})();
var statearr_33545_33566 = state_33526__$1;
(statearr_33545_33566[(2)] = inst_33520);

(statearr_33545_33566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (10))){
var inst_33509 = (state_33526[(2)]);
var state_33526__$1 = state_33526;
var statearr_33546_33567 = state_33526__$1;
(statearr_33546_33567[(2)] = inst_33509);

(statearr_33546_33567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33527 === (8))){
var inst_33486 = (state_33526[(8)]);
var inst_33490 = (state_33526[(9)]);
var inst_33494 = (state_33526[(10)]);
var inst_33499 = inst_33486.push(inst_33490);
var tmp33543 = inst_33486;
var inst_33486__$1 = tmp33543;
var inst_33487 = inst_33494;
var state_33526__$1 = (function (){var statearr_33547 = state_33526;
(statearr_33547[(7)] = inst_33487);

(statearr_33547[(8)] = inst_33486__$1);

(statearr_33547[(14)] = inst_33499);

return statearr_33547;
})();
var statearr_33548_33568 = state_33526__$1;
(statearr_33548_33568[(2)] = null);

(statearr_33548_33568[(1)] = (2));


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
});})(c__31650__auto___33554,out))
;
return ((function (switch__31555__auto__,c__31650__auto___33554,out){
return (function() {
var cljs$core$async$state_machine__31556__auto__ = null;
var cljs$core$async$state_machine__31556__auto____0 = (function (){
var statearr_33549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33549[(0)] = cljs$core$async$state_machine__31556__auto__);

(statearr_33549[(1)] = (1));

return statearr_33549;
});
var cljs$core$async$state_machine__31556__auto____1 = (function (state_33526){
while(true){
var ret_value__31557__auto__ = (function (){try{while(true){
var result__31558__auto__ = switch__31555__auto__.call(null,state_33526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31558__auto__;
}
break;
}
}catch (e33550){if((e33550 instanceof Object)){
var ex__31559__auto__ = e33550;
var statearr_33551_33569 = state_33526;
(statearr_33551_33569[(5)] = ex__31559__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33570 = state_33526;
state_33526 = G__33570;
continue;
} else {
return ret_value__31557__auto__;
}
break;
}
});
cljs$core$async$state_machine__31556__auto__ = function(state_33526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31556__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31556__auto____1.call(this,state_33526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31556__auto____0;
cljs$core$async$state_machine__31556__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31556__auto____1;
return cljs$core$async$state_machine__31556__auto__;
})()
;})(switch__31555__auto__,c__31650__auto___33554,out))
})();
var state__31652__auto__ = (function (){var statearr_33552 = f__31651__auto__.call(null);
(statearr_33552[(6)] = c__31650__auto___33554);

return statearr_33552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31652__auto__);
});})(c__31650__auto___33554,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1640328138933
