// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args17921 = [];
var len__5964__auto___17927 = arguments.length;
var i__5965__auto___17928 = (0);
while(true){
if((i__5965__auto___17928 < len__5964__auto___17927)){
args17921.push((arguments[i__5965__auto___17928]));

var G__17929 = (i__5965__auto___17928 + (1));
i__5965__auto___17928 = G__17929;
continue;
} else {
}
break;
}

var G__17923 = args17921.length;
switch (G__17923) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17921.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async17924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17924 = (function (f,blockable,meta17925){
this.f = f;
this.blockable = blockable;
this.meta17925 = meta17925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17926,meta17925__$1){
var self__ = this;
var _17926__$1 = this;
return (new cljs.core.async.t_cljs$core$async17924(self__.f,self__.blockable,meta17925__$1));
});

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17926){
var self__ = this;
var _17926__$1 = this;
return self__.meta17925;
});

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17925","meta17925",1065259854,null)], null);
});

cljs.core.async.t_cljs$core$async17924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17924";

cljs.core.async.t_cljs$core$async17924.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async17924");
});

cljs.core.async.__GT_t_cljs$core$async17924 = (function cljs$core$async$__GT_t_cljs$core$async17924(f__$1,blockable__$1,meta17925){
return (new cljs.core.async.t_cljs$core$async17924(f__$1,blockable__$1,meta17925));
});

}

return (new cljs.core.async.t_cljs$core$async17924(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args17933 = [];
var len__5964__auto___17936 = arguments.length;
var i__5965__auto___17937 = (0);
while(true){
if((i__5965__auto___17937 < len__5964__auto___17936)){
args17933.push((arguments[i__5965__auto___17937]));

var G__17938 = (i__5965__auto___17937 + (1));
i__5965__auto___17937 = G__17938;
continue;
} else {
}
break;
}

var G__17935 = args17933.length;
switch (G__17935) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17933.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args17940 = [];
var len__5964__auto___17943 = arguments.length;
var i__5965__auto___17944 = (0);
while(true){
if((i__5965__auto___17944 < len__5964__auto___17943)){
args17940.push((arguments[i__5965__auto___17944]));

var G__17945 = (i__5965__auto___17944 + (1));
i__5965__auto___17944 = G__17945;
continue;
} else {
}
break;
}

var G__17942 = args17940.length;
switch (G__17942) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17940.length)].join('')));

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
var args17947 = [];
var len__5964__auto___17950 = arguments.length;
var i__5965__auto___17951 = (0);
while(true){
if((i__5965__auto___17951 < len__5964__auto___17950)){
args17947.push((arguments[i__5965__auto___17951]));

var G__17952 = (i__5965__auto___17951 + (1));
i__5965__auto___17951 = G__17952;
continue;
} else {
}
break;
}

var G__17949 = args17947.length;
switch (G__17949) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17947.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17954 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17954);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17954,ret){
return (function (){
return fn1.call(null,val_17954);
});})(val_17954,ret))
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
var args17955 = [];
var len__5964__auto___17958 = arguments.length;
var i__5965__auto___17959 = (0);
while(true){
if((i__5965__auto___17959 < len__5964__auto___17958)){
args17955.push((arguments[i__5965__auto___17959]));

var G__17960 = (i__5965__auto___17959 + (1));
i__5965__auto___17959 = G__17960;
continue;
} else {
}
break;
}

var G__17957 = args17955.length;
switch (G__17957) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17955.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__5809__auto___17962 = n;
var x_17963 = (0);
while(true){
if((x_17963 < n__5809__auto___17962)){
(a[x_17963] = (0));

var G__17964 = (x_17963 + (1));
x_17963 = G__17964;
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

var G__17965 = (i + (1));
i = G__17965;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17969 = (function (alt_flag,flag,meta17970){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17970 = meta17970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17971,meta17970__$1){
var self__ = this;
var _17971__$1 = this;
return (new cljs.core.async.t_cljs$core$async17969(self__.alt_flag,self__.flag,meta17970__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17971){
var self__ = this;
var _17971__$1 = this;
return self__.meta17970;
});})(flag))
;

cljs.core.async.t_cljs$core$async17969.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17969.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17969.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17970","meta17970",1210844072,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17969";

cljs.core.async.t_cljs$core$async17969.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async17969");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17969 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17969(alt_flag__$1,flag__$1,meta17970){
return (new cljs.core.async.t_cljs$core$async17969(alt_flag__$1,flag__$1,meta17970));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17969(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17975 = (function (alt_handler,flag,cb,meta17976){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17976 = meta17976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17977,meta17976__$1){
var self__ = this;
var _17977__$1 = this;
return (new cljs.core.async.t_cljs$core$async17975(self__.alt_handler,self__.flag,self__.cb,meta17976__$1));
});

cljs.core.async.t_cljs$core$async17975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17977){
var self__ = this;
var _17977__$1 = this;
return self__.meta17976;
});

cljs.core.async.t_cljs$core$async17975.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17975.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17976","meta17976",-1488308715,null)], null);
});

cljs.core.async.t_cljs$core$async17975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17975";

cljs.core.async.t_cljs$core$async17975.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async17975");
});

cljs.core.async.__GT_t_cljs$core$async17975 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17975(alt_handler__$1,flag__$1,cb__$1,meta17976){
return (new cljs.core.async.t_cljs$core$async17975(alt_handler__$1,flag__$1,cb__$1,meta17976));
});

}

return (new cljs.core.async.t_cljs$core$async17975(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17978_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17978_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17979_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17979_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4906__auto__ = wport;
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17980 = (i + (1));
i = G__17980;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4906__auto__ = ret;
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4894__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4894__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4894__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__5971__auto__ = [];
var len__5964__auto___17986 = arguments.length;
var i__5965__auto___17987 = (0);
while(true){
if((i__5965__auto___17987 < len__5964__auto___17986)){
args__5971__auto__.push((arguments[i__5965__auto___17987]));

var G__17988 = (i__5965__auto___17987 + (1));
i__5965__auto___17987 = G__17988;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((1) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5972__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17983){
var map__17984 = p__17983;
var map__17984__$1 = ((((!((map__17984 == null)))?((((map__17984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17984):map__17984);
var opts = map__17984__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17981){
var G__17982 = cljs.core.first.call(null,seq17981);
var seq17981__$1 = cljs.core.next.call(null,seq17981);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17982,seq17981__$1);
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
var args17989 = [];
var len__5964__auto___18039 = arguments.length;
var i__5965__auto___18040 = (0);
while(true){
if((i__5965__auto___18040 < len__5964__auto___18039)){
args17989.push((arguments[i__5965__auto___18040]));

var G__18041 = (i__5965__auto___18040 + (1));
i__5965__auto___18040 = G__18041;
continue;
} else {
}
break;
}

var G__17991 = args17989.length;
switch (G__17991) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17989.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9431__auto___18043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___18043){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___18043){
return (function (state_18015){
var state_val_18016 = (state_18015[(1)]);
if((state_val_18016 === (7))){
var inst_18011 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
var statearr_18017_18044 = state_18015__$1;
(statearr_18017_18044[(2)] = inst_18011);

(statearr_18017_18044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (1))){
var state_18015__$1 = state_18015;
var statearr_18018_18045 = state_18015__$1;
(statearr_18018_18045[(2)] = null);

(statearr_18018_18045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (4))){
var inst_17994 = (state_18015[(7)]);
var inst_17994__$1 = (state_18015[(2)]);
var inst_17995 = (inst_17994__$1 == null);
var state_18015__$1 = (function (){var statearr_18019 = state_18015;
(statearr_18019[(7)] = inst_17994__$1);

return statearr_18019;
})();
if(cljs.core.truth_(inst_17995)){
var statearr_18020_18046 = state_18015__$1;
(statearr_18020_18046[(1)] = (5));

} else {
var statearr_18021_18047 = state_18015__$1;
(statearr_18021_18047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (13))){
var state_18015__$1 = state_18015;
var statearr_18022_18048 = state_18015__$1;
(statearr_18022_18048[(2)] = null);

(statearr_18022_18048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (6))){
var inst_17994 = (state_18015[(7)]);
var state_18015__$1 = state_18015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18015__$1,(11),to,inst_17994);
} else {
if((state_val_18016 === (3))){
var inst_18013 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18015__$1,inst_18013);
} else {
if((state_val_18016 === (12))){
var state_18015__$1 = state_18015;
var statearr_18023_18049 = state_18015__$1;
(statearr_18023_18049[(2)] = null);

(statearr_18023_18049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (2))){
var state_18015__$1 = state_18015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18015__$1,(4),from);
} else {
if((state_val_18016 === (11))){
var inst_18004 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
if(cljs.core.truth_(inst_18004)){
var statearr_18024_18050 = state_18015__$1;
(statearr_18024_18050[(1)] = (12));

} else {
var statearr_18025_18051 = state_18015__$1;
(statearr_18025_18051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (9))){
var state_18015__$1 = state_18015;
var statearr_18026_18052 = state_18015__$1;
(statearr_18026_18052[(2)] = null);

(statearr_18026_18052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (5))){
var state_18015__$1 = state_18015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18027_18053 = state_18015__$1;
(statearr_18027_18053[(1)] = (8));

} else {
var statearr_18028_18054 = state_18015__$1;
(statearr_18028_18054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (14))){
var inst_18009 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
var statearr_18029_18055 = state_18015__$1;
(statearr_18029_18055[(2)] = inst_18009);

(statearr_18029_18055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (10))){
var inst_18001 = (state_18015[(2)]);
var state_18015__$1 = state_18015;
var statearr_18030_18056 = state_18015__$1;
(statearr_18030_18056[(2)] = inst_18001);

(statearr_18030_18056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18016 === (8))){
var inst_17998 = cljs.core.async.close_BANG_.call(null,to);
var state_18015__$1 = state_18015;
var statearr_18031_18057 = state_18015__$1;
(statearr_18031_18057[(2)] = inst_17998);

(statearr_18031_18057[(1)] = (10));


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
});})(c__9431__auto___18043))
;
return ((function (switch__9366__auto__,c__9431__auto___18043){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_18035 = [null,null,null,null,null,null,null,null];
(statearr_18035[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_18035[(1)] = (1));

return statearr_18035;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_18015){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18036){if((e18036 instanceof Object)){
var ex__9370__auto__ = e18036;
var statearr_18037_18058 = state_18015;
(statearr_18037_18058[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18059 = state_18015;
state_18015 = G__18059;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_18015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_18015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___18043))
})();
var state__9433__auto__ = (function (){var statearr_18038 = f__9432__auto__.call(null);
(statearr_18038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___18043);

return statearr_18038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___18043))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18243){
var vec__18244 = p__18243;
var v = cljs.core.nth.call(null,vec__18244,(0),null);
var p = cljs.core.nth.call(null,vec__18244,(1),null);
var job = vec__18244;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9431__auto___18426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___18426,res,vec__18244,v,p,job,jobs,results){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___18426,res,vec__18244,v,p,job,jobs,results){
return (function (state_18249){
var state_val_18250 = (state_18249[(1)]);
if((state_val_18250 === (1))){
var state_18249__$1 = state_18249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18249__$1,(2),res,v);
} else {
if((state_val_18250 === (2))){
var inst_18246 = (state_18249[(2)]);
var inst_18247 = cljs.core.async.close_BANG_.call(null,res);
var state_18249__$1 = (function (){var statearr_18251 = state_18249;
(statearr_18251[(7)] = inst_18246);

return statearr_18251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18249__$1,inst_18247);
} else {
return null;
}
}
});})(c__9431__auto___18426,res,vec__18244,v,p,job,jobs,results))
;
return ((function (switch__9366__auto__,c__9431__auto___18426,res,vec__18244,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0 = (function (){
var statearr_18255 = [null,null,null,null,null,null,null,null];
(statearr_18255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__);

(statearr_18255[(1)] = (1));

return statearr_18255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1 = (function (state_18249){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18256){if((e18256 instanceof Object)){
var ex__9370__auto__ = e18256;
var statearr_18257_18427 = state_18249;
(statearr_18257_18427[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18428 = state_18249;
state_18249 = G__18428;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = function(state_18249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1.call(this,state_18249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___18426,res,vec__18244,v,p,job,jobs,results))
})();
var state__9433__auto__ = (function (){var statearr_18258 = f__9432__auto__.call(null);
(statearr_18258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___18426);

return statearr_18258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___18426,res,vec__18244,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18259){
var vec__18260 = p__18259;
var v = cljs.core.nth.call(null,vec__18260,(0),null);
var p = cljs.core.nth.call(null,vec__18260,(1),null);
var job = vec__18260;
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
var n__5809__auto___18429 = n;
var __18430 = (0);
while(true){
if((__18430 < n__5809__auto___18429)){
var G__18261_18431 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18261_18431) {
case "compute":
var c__9431__auto___18433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18430,c__9431__auto___18433,G__18261_18431,n__5809__auto___18429,jobs,results,process,async){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (__18430,c__9431__auto___18433,G__18261_18431,n__5809__auto___18429,jobs,results,process,async){
return (function (state_18274){
var state_val_18275 = (state_18274[(1)]);
if((state_val_18275 === (1))){
var state_18274__$1 = state_18274;
var statearr_18276_18434 = state_18274__$1;
(statearr_18276_18434[(2)] = null);

(statearr_18276_18434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18275 === (2))){
var state_18274__$1 = state_18274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18274__$1,(4),jobs);
} else {
if((state_val_18275 === (3))){
var inst_18272 = (state_18274[(2)]);
var state_18274__$1 = state_18274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18274__$1,inst_18272);
} else {
if((state_val_18275 === (4))){
var inst_18264 = (state_18274[(2)]);
var inst_18265 = process.call(null,inst_18264);
var state_18274__$1 = state_18274;
if(cljs.core.truth_(inst_18265)){
var statearr_18277_18435 = state_18274__$1;
(statearr_18277_18435[(1)] = (5));

} else {
var statearr_18278_18436 = state_18274__$1;
(statearr_18278_18436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18275 === (5))){
var state_18274__$1 = state_18274;
var statearr_18279_18437 = state_18274__$1;
(statearr_18279_18437[(2)] = null);

(statearr_18279_18437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18275 === (6))){
var state_18274__$1 = state_18274;
var statearr_18280_18438 = state_18274__$1;
(statearr_18280_18438[(2)] = null);

(statearr_18280_18438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18275 === (7))){
var inst_18270 = (state_18274[(2)]);
var state_18274__$1 = state_18274;
var statearr_18281_18439 = state_18274__$1;
(statearr_18281_18439[(2)] = inst_18270);

(statearr_18281_18439[(1)] = (3));


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
});})(__18430,c__9431__auto___18433,G__18261_18431,n__5809__auto___18429,jobs,results,process,async))
;
return ((function (__18430,switch__9366__auto__,c__9431__auto___18433,G__18261_18431,n__5809__auto___18429,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0 = (function (){
var statearr_18285 = [null,null,null,null,null,null,null];
(statearr_18285[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__);

(statearr_18285[(1)] = (1));

return statearr_18285;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1 = (function (state_18274){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18286){if((e18286 instanceof Object)){
var ex__9370__auto__ = e18286;
var statearr_18287_18440 = state_18274;
(statearr_18287_18440[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18441 = state_18274;
state_18274 = G__18441;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = function(state_18274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1.call(this,state_18274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__;
})()
;})(__18430,switch__9366__auto__,c__9431__auto___18433,G__18261_18431,n__5809__auto___18429,jobs,results,process,async))
})();
var state__9433__auto__ = (function (){var statearr_18288 = f__9432__auto__.call(null);
(statearr_18288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___18433);

return statearr_18288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(__18430,c__9431__auto___18433,G__18261_18431,n__5809__auto___18429,jobs,results,process,async))
);


break;
case "async":
var c__9431__auto___18442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18430,c__9431__auto___18442,G__18261_18431,n__5809__auto___18429,jobs,results,process,async){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (__18430,c__9431__auto___18442,G__18261_18431,n__5809__auto___18429,jobs,results,process,async){
return (function (state_18301){
var state_val_18302 = (state_18301[(1)]);
if((state_val_18302 === (1))){
var state_18301__$1 = state_18301;
var statearr_18303_18443 = state_18301__$1;
(statearr_18303_18443[(2)] = null);

(statearr_18303_18443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18302 === (2))){
var state_18301__$1 = state_18301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18301__$1,(4),jobs);
} else {
if((state_val_18302 === (3))){
var inst_18299 = (state_18301[(2)]);
var state_18301__$1 = state_18301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18301__$1,inst_18299);
} else {
if((state_val_18302 === (4))){
var inst_18291 = (state_18301[(2)]);
var inst_18292 = async.call(null,inst_18291);
var state_18301__$1 = state_18301;
if(cljs.core.truth_(inst_18292)){
var statearr_18304_18444 = state_18301__$1;
(statearr_18304_18444[(1)] = (5));

} else {
var statearr_18305_18445 = state_18301__$1;
(statearr_18305_18445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18302 === (5))){
var state_18301__$1 = state_18301;
var statearr_18306_18446 = state_18301__$1;
(statearr_18306_18446[(2)] = null);

(statearr_18306_18446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18302 === (6))){
var state_18301__$1 = state_18301;
var statearr_18307_18447 = state_18301__$1;
(statearr_18307_18447[(2)] = null);

(statearr_18307_18447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18302 === (7))){
var inst_18297 = (state_18301[(2)]);
var state_18301__$1 = state_18301;
var statearr_18308_18448 = state_18301__$1;
(statearr_18308_18448[(2)] = inst_18297);

(statearr_18308_18448[(1)] = (3));


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
});})(__18430,c__9431__auto___18442,G__18261_18431,n__5809__auto___18429,jobs,results,process,async))
;
return ((function (__18430,switch__9366__auto__,c__9431__auto___18442,G__18261_18431,n__5809__auto___18429,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0 = (function (){
var statearr_18312 = [null,null,null,null,null,null,null];
(statearr_18312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__);

(statearr_18312[(1)] = (1));

return statearr_18312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1 = (function (state_18301){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18313){if((e18313 instanceof Object)){
var ex__9370__auto__ = e18313;
var statearr_18314_18449 = state_18301;
(statearr_18314_18449[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18450 = state_18301;
state_18301 = G__18450;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = function(state_18301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1.call(this,state_18301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__;
})()
;})(__18430,switch__9366__auto__,c__9431__auto___18442,G__18261_18431,n__5809__auto___18429,jobs,results,process,async))
})();
var state__9433__auto__ = (function (){var statearr_18315 = f__9432__auto__.call(null);
(statearr_18315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___18442);

return statearr_18315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(__18430,c__9431__auto___18442,G__18261_18431,n__5809__auto___18429,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18451 = (__18430 + (1));
__18430 = G__18451;
continue;
} else {
}
break;
}

var c__9431__auto___18452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___18452,jobs,results,process,async){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___18452,jobs,results,process,async){
return (function (state_18337){
var state_val_18338 = (state_18337[(1)]);
if((state_val_18338 === (1))){
var state_18337__$1 = state_18337;
var statearr_18339_18453 = state_18337__$1;
(statearr_18339_18453[(2)] = null);

(statearr_18339_18453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (2))){
var state_18337__$1 = state_18337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18337__$1,(4),from);
} else {
if((state_val_18338 === (3))){
var inst_18335 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18337__$1,inst_18335);
} else {
if((state_val_18338 === (4))){
var inst_18318 = (state_18337[(7)]);
var inst_18318__$1 = (state_18337[(2)]);
var inst_18319 = (inst_18318__$1 == null);
var state_18337__$1 = (function (){var statearr_18340 = state_18337;
(statearr_18340[(7)] = inst_18318__$1);

return statearr_18340;
})();
if(cljs.core.truth_(inst_18319)){
var statearr_18341_18454 = state_18337__$1;
(statearr_18341_18454[(1)] = (5));

} else {
var statearr_18342_18455 = state_18337__$1;
(statearr_18342_18455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (5))){
var inst_18321 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18337__$1 = state_18337;
var statearr_18343_18456 = state_18337__$1;
(statearr_18343_18456[(2)] = inst_18321);

(statearr_18343_18456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (6))){
var inst_18323 = (state_18337[(8)]);
var inst_18318 = (state_18337[(7)]);
var inst_18323__$1 = cljs.core.async.chan.call(null,(1));
var inst_18324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18325 = [inst_18318,inst_18323__$1];
var inst_18326 = (new cljs.core.PersistentVector(null,2,(5),inst_18324,inst_18325,null));
var state_18337__$1 = (function (){var statearr_18344 = state_18337;
(statearr_18344[(8)] = inst_18323__$1);

return statearr_18344;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18337__$1,(8),jobs,inst_18326);
} else {
if((state_val_18338 === (7))){
var inst_18333 = (state_18337[(2)]);
var state_18337__$1 = state_18337;
var statearr_18345_18457 = state_18337__$1;
(statearr_18345_18457[(2)] = inst_18333);

(statearr_18345_18457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18338 === (8))){
var inst_18323 = (state_18337[(8)]);
var inst_18328 = (state_18337[(2)]);
var state_18337__$1 = (function (){var statearr_18346 = state_18337;
(statearr_18346[(9)] = inst_18328);

return statearr_18346;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18337__$1,(9),results,inst_18323);
} else {
if((state_val_18338 === (9))){
var inst_18330 = (state_18337[(2)]);
var state_18337__$1 = (function (){var statearr_18347 = state_18337;
(statearr_18347[(10)] = inst_18330);

return statearr_18347;
})();
var statearr_18348_18458 = state_18337__$1;
(statearr_18348_18458[(2)] = null);

(statearr_18348_18458[(1)] = (2));


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
});})(c__9431__auto___18452,jobs,results,process,async))
;
return ((function (switch__9366__auto__,c__9431__auto___18452,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0 = (function (){
var statearr_18352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__);

(statearr_18352[(1)] = (1));

return statearr_18352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1 = (function (state_18337){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18353){if((e18353 instanceof Object)){
var ex__9370__auto__ = e18353;
var statearr_18354_18459 = state_18337;
(statearr_18354_18459[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18460 = state_18337;
state_18337 = G__18460;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = function(state_18337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1.call(this,state_18337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___18452,jobs,results,process,async))
})();
var state__9433__auto__ = (function (){var statearr_18355 = f__9432__auto__.call(null);
(statearr_18355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___18452);

return statearr_18355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___18452,jobs,results,process,async))
);


var c__9431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto__,jobs,results,process,async){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto__,jobs,results,process,async){
return (function (state_18393){
var state_val_18394 = (state_18393[(1)]);
if((state_val_18394 === (7))){
var inst_18389 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
var statearr_18395_18461 = state_18393__$1;
(statearr_18395_18461[(2)] = inst_18389);

(statearr_18395_18461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (20))){
var state_18393__$1 = state_18393;
var statearr_18396_18462 = state_18393__$1;
(statearr_18396_18462[(2)] = null);

(statearr_18396_18462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (1))){
var state_18393__$1 = state_18393;
var statearr_18397_18463 = state_18393__$1;
(statearr_18397_18463[(2)] = null);

(statearr_18397_18463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (4))){
var inst_18358 = (state_18393[(7)]);
var inst_18358__$1 = (state_18393[(2)]);
var inst_18359 = (inst_18358__$1 == null);
var state_18393__$1 = (function (){var statearr_18398 = state_18393;
(statearr_18398[(7)] = inst_18358__$1);

return statearr_18398;
})();
if(cljs.core.truth_(inst_18359)){
var statearr_18399_18464 = state_18393__$1;
(statearr_18399_18464[(1)] = (5));

} else {
var statearr_18400_18465 = state_18393__$1;
(statearr_18400_18465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (15))){
var inst_18371 = (state_18393[(8)]);
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18393__$1,(18),to,inst_18371);
} else {
if((state_val_18394 === (21))){
var inst_18384 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
var statearr_18401_18466 = state_18393__$1;
(statearr_18401_18466[(2)] = inst_18384);

(statearr_18401_18466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (13))){
var inst_18386 = (state_18393[(2)]);
var state_18393__$1 = (function (){var statearr_18402 = state_18393;
(statearr_18402[(9)] = inst_18386);

return statearr_18402;
})();
var statearr_18403_18467 = state_18393__$1;
(statearr_18403_18467[(2)] = null);

(statearr_18403_18467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (6))){
var inst_18358 = (state_18393[(7)]);
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18393__$1,(11),inst_18358);
} else {
if((state_val_18394 === (17))){
var inst_18379 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
if(cljs.core.truth_(inst_18379)){
var statearr_18404_18468 = state_18393__$1;
(statearr_18404_18468[(1)] = (19));

} else {
var statearr_18405_18469 = state_18393__$1;
(statearr_18405_18469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (3))){
var inst_18391 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18393__$1,inst_18391);
} else {
if((state_val_18394 === (12))){
var inst_18368 = (state_18393[(10)]);
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18393__$1,(14),inst_18368);
} else {
if((state_val_18394 === (2))){
var state_18393__$1 = state_18393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18393__$1,(4),results);
} else {
if((state_val_18394 === (19))){
var state_18393__$1 = state_18393;
var statearr_18406_18470 = state_18393__$1;
(statearr_18406_18470[(2)] = null);

(statearr_18406_18470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (11))){
var inst_18368 = (state_18393[(2)]);
var state_18393__$1 = (function (){var statearr_18407 = state_18393;
(statearr_18407[(10)] = inst_18368);

return statearr_18407;
})();
var statearr_18408_18471 = state_18393__$1;
(statearr_18408_18471[(2)] = null);

(statearr_18408_18471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (9))){
var state_18393__$1 = state_18393;
var statearr_18409_18472 = state_18393__$1;
(statearr_18409_18472[(2)] = null);

(statearr_18409_18472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (5))){
var state_18393__$1 = state_18393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18410_18473 = state_18393__$1;
(statearr_18410_18473[(1)] = (8));

} else {
var statearr_18411_18474 = state_18393__$1;
(statearr_18411_18474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (14))){
var inst_18373 = (state_18393[(11)]);
var inst_18371 = (state_18393[(8)]);
var inst_18371__$1 = (state_18393[(2)]);
var inst_18372 = (inst_18371__$1 == null);
var inst_18373__$1 = cljs.core.not.call(null,inst_18372);
var state_18393__$1 = (function (){var statearr_18412 = state_18393;
(statearr_18412[(11)] = inst_18373__$1);

(statearr_18412[(8)] = inst_18371__$1);

return statearr_18412;
})();
if(inst_18373__$1){
var statearr_18413_18475 = state_18393__$1;
(statearr_18413_18475[(1)] = (15));

} else {
var statearr_18414_18476 = state_18393__$1;
(statearr_18414_18476[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (16))){
var inst_18373 = (state_18393[(11)]);
var state_18393__$1 = state_18393;
var statearr_18415_18477 = state_18393__$1;
(statearr_18415_18477[(2)] = inst_18373);

(statearr_18415_18477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (10))){
var inst_18365 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
var statearr_18416_18478 = state_18393__$1;
(statearr_18416_18478[(2)] = inst_18365);

(statearr_18416_18478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (18))){
var inst_18376 = (state_18393[(2)]);
var state_18393__$1 = state_18393;
var statearr_18417_18479 = state_18393__$1;
(statearr_18417_18479[(2)] = inst_18376);

(statearr_18417_18479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18394 === (8))){
var inst_18362 = cljs.core.async.close_BANG_.call(null,to);
var state_18393__$1 = state_18393;
var statearr_18418_18480 = state_18393__$1;
(statearr_18418_18480[(2)] = inst_18362);

(statearr_18418_18480[(1)] = (10));


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
});})(c__9431__auto__,jobs,results,process,async))
;
return ((function (switch__9366__auto__,c__9431__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0 = (function (){
var statearr_18422 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__);

(statearr_18422[(1)] = (1));

return statearr_18422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1 = (function (state_18393){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18423){if((e18423 instanceof Object)){
var ex__9370__auto__ = e18423;
var statearr_18424_18481 = state_18393;
(statearr_18424_18481[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18482 = state_18393;
state_18393 = G__18482;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__ = function(state_18393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1.call(this,state_18393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto__,jobs,results,process,async))
})();
var state__9433__auto__ = (function (){var statearr_18425 = f__9432__auto__.call(null);
(statearr_18425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto__);

return statearr_18425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto__,jobs,results,process,async))
);

return c__9431__auto__;
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
var args18483 = [];
var len__5964__auto___18486 = arguments.length;
var i__5965__auto___18487 = (0);
while(true){
if((i__5965__auto___18487 < len__5964__auto___18486)){
args18483.push((arguments[i__5965__auto___18487]));

var G__18488 = (i__5965__auto___18487 + (1));
i__5965__auto___18487 = G__18488;
continue;
} else {
}
break;
}

var G__18485 = args18483.length;
switch (G__18485) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18483.length)].join('')));

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
var args18490 = [];
var len__5964__auto___18493 = arguments.length;
var i__5965__auto___18494 = (0);
while(true){
if((i__5965__auto___18494 < len__5964__auto___18493)){
args18490.push((arguments[i__5965__auto___18494]));

var G__18495 = (i__5965__auto___18494 + (1));
i__5965__auto___18494 = G__18495;
continue;
} else {
}
break;
}

var G__18492 = args18490.length;
switch (G__18492) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18490.length)].join('')));

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
var args18497 = [];
var len__5964__auto___18550 = arguments.length;
var i__5965__auto___18551 = (0);
while(true){
if((i__5965__auto___18551 < len__5964__auto___18550)){
args18497.push((arguments[i__5965__auto___18551]));

var G__18552 = (i__5965__auto___18551 + (1));
i__5965__auto___18551 = G__18552;
continue;
} else {
}
break;
}

var G__18499 = args18497.length;
switch (G__18499) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18497.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9431__auto___18554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___18554,tc,fc){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___18554,tc,fc){
return (function (state_18525){
var state_val_18526 = (state_18525[(1)]);
if((state_val_18526 === (7))){
var inst_18521 = (state_18525[(2)]);
var state_18525__$1 = state_18525;
var statearr_18527_18555 = state_18525__$1;
(statearr_18527_18555[(2)] = inst_18521);

(statearr_18527_18555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (1))){
var state_18525__$1 = state_18525;
var statearr_18528_18556 = state_18525__$1;
(statearr_18528_18556[(2)] = null);

(statearr_18528_18556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (4))){
var inst_18502 = (state_18525[(7)]);
var inst_18502__$1 = (state_18525[(2)]);
var inst_18503 = (inst_18502__$1 == null);
var state_18525__$1 = (function (){var statearr_18529 = state_18525;
(statearr_18529[(7)] = inst_18502__$1);

return statearr_18529;
})();
if(cljs.core.truth_(inst_18503)){
var statearr_18530_18557 = state_18525__$1;
(statearr_18530_18557[(1)] = (5));

} else {
var statearr_18531_18558 = state_18525__$1;
(statearr_18531_18558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (13))){
var state_18525__$1 = state_18525;
var statearr_18532_18559 = state_18525__$1;
(statearr_18532_18559[(2)] = null);

(statearr_18532_18559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (6))){
var inst_18502 = (state_18525[(7)]);
var inst_18508 = p.call(null,inst_18502);
var state_18525__$1 = state_18525;
if(cljs.core.truth_(inst_18508)){
var statearr_18533_18560 = state_18525__$1;
(statearr_18533_18560[(1)] = (9));

} else {
var statearr_18534_18561 = state_18525__$1;
(statearr_18534_18561[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (3))){
var inst_18523 = (state_18525[(2)]);
var state_18525__$1 = state_18525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18525__$1,inst_18523);
} else {
if((state_val_18526 === (12))){
var state_18525__$1 = state_18525;
var statearr_18535_18562 = state_18525__$1;
(statearr_18535_18562[(2)] = null);

(statearr_18535_18562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (2))){
var state_18525__$1 = state_18525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18525__$1,(4),ch);
} else {
if((state_val_18526 === (11))){
var inst_18502 = (state_18525[(7)]);
var inst_18512 = (state_18525[(2)]);
var state_18525__$1 = state_18525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18525__$1,(8),inst_18512,inst_18502);
} else {
if((state_val_18526 === (9))){
var state_18525__$1 = state_18525;
var statearr_18536_18563 = state_18525__$1;
(statearr_18536_18563[(2)] = tc);

(statearr_18536_18563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (5))){
var inst_18505 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18506 = cljs.core.async.close_BANG_.call(null,fc);
var state_18525__$1 = (function (){var statearr_18537 = state_18525;
(statearr_18537[(8)] = inst_18505);

return statearr_18537;
})();
var statearr_18538_18564 = state_18525__$1;
(statearr_18538_18564[(2)] = inst_18506);

(statearr_18538_18564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (14))){
var inst_18519 = (state_18525[(2)]);
var state_18525__$1 = state_18525;
var statearr_18539_18565 = state_18525__$1;
(statearr_18539_18565[(2)] = inst_18519);

(statearr_18539_18565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (10))){
var state_18525__$1 = state_18525;
var statearr_18540_18566 = state_18525__$1;
(statearr_18540_18566[(2)] = fc);

(statearr_18540_18566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18526 === (8))){
var inst_18514 = (state_18525[(2)]);
var state_18525__$1 = state_18525;
if(cljs.core.truth_(inst_18514)){
var statearr_18541_18567 = state_18525__$1;
(statearr_18541_18567[(1)] = (12));

} else {
var statearr_18542_18568 = state_18525__$1;
(statearr_18542_18568[(1)] = (13));

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
});})(c__9431__auto___18554,tc,fc))
;
return ((function (switch__9366__auto__,c__9431__auto___18554,tc,fc){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_18546 = [null,null,null,null,null,null,null,null,null];
(statearr_18546[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_18546[(1)] = (1));

return statearr_18546;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_18525){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18547){if((e18547 instanceof Object)){
var ex__9370__auto__ = e18547;
var statearr_18548_18569 = state_18525;
(statearr_18548_18569[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18570 = state_18525;
state_18525 = G__18570;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_18525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_18525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___18554,tc,fc))
})();
var state__9433__auto__ = (function (){var statearr_18549 = f__9432__auto__.call(null);
(statearr_18549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___18554);

return statearr_18549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___18554,tc,fc))
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
var c__9431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto__){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto__){
return (function (state_18634){
var state_val_18635 = (state_18634[(1)]);
if((state_val_18635 === (7))){
var inst_18630 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18636_18657 = state_18634__$1;
(statearr_18636_18657[(2)] = inst_18630);

(statearr_18636_18657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (1))){
var inst_18614 = init;
var state_18634__$1 = (function (){var statearr_18637 = state_18634;
(statearr_18637[(7)] = inst_18614);

return statearr_18637;
})();
var statearr_18638_18658 = state_18634__$1;
(statearr_18638_18658[(2)] = null);

(statearr_18638_18658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (4))){
var inst_18617 = (state_18634[(8)]);
var inst_18617__$1 = (state_18634[(2)]);
var inst_18618 = (inst_18617__$1 == null);
var state_18634__$1 = (function (){var statearr_18639 = state_18634;
(statearr_18639[(8)] = inst_18617__$1);

return statearr_18639;
})();
if(cljs.core.truth_(inst_18618)){
var statearr_18640_18659 = state_18634__$1;
(statearr_18640_18659[(1)] = (5));

} else {
var statearr_18641_18660 = state_18634__$1;
(statearr_18641_18660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (6))){
var inst_18621 = (state_18634[(9)]);
var inst_18617 = (state_18634[(8)]);
var inst_18614 = (state_18634[(7)]);
var inst_18621__$1 = f.call(null,inst_18614,inst_18617);
var inst_18622 = cljs.core.reduced_QMARK_.call(null,inst_18621__$1);
var state_18634__$1 = (function (){var statearr_18642 = state_18634;
(statearr_18642[(9)] = inst_18621__$1);

return statearr_18642;
})();
if(inst_18622){
var statearr_18643_18661 = state_18634__$1;
(statearr_18643_18661[(1)] = (8));

} else {
var statearr_18644_18662 = state_18634__$1;
(statearr_18644_18662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (3))){
var inst_18632 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18634__$1,inst_18632);
} else {
if((state_val_18635 === (2))){
var state_18634__$1 = state_18634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18634__$1,(4),ch);
} else {
if((state_val_18635 === (9))){
var inst_18621 = (state_18634[(9)]);
var inst_18614 = inst_18621;
var state_18634__$1 = (function (){var statearr_18645 = state_18634;
(statearr_18645[(7)] = inst_18614);

return statearr_18645;
})();
var statearr_18646_18663 = state_18634__$1;
(statearr_18646_18663[(2)] = null);

(statearr_18646_18663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (5))){
var inst_18614 = (state_18634[(7)]);
var state_18634__$1 = state_18634;
var statearr_18647_18664 = state_18634__$1;
(statearr_18647_18664[(2)] = inst_18614);

(statearr_18647_18664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (10))){
var inst_18628 = (state_18634[(2)]);
var state_18634__$1 = state_18634;
var statearr_18648_18665 = state_18634__$1;
(statearr_18648_18665[(2)] = inst_18628);

(statearr_18648_18665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (8))){
var inst_18621 = (state_18634[(9)]);
var inst_18624 = cljs.core.deref.call(null,inst_18621);
var state_18634__$1 = state_18634;
var statearr_18649_18666 = state_18634__$1;
(statearr_18649_18666[(2)] = inst_18624);

(statearr_18649_18666[(1)] = (10));


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
});})(c__9431__auto__))
;
return ((function (switch__9366__auto__,c__9431__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9367__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9367__auto____0 = (function (){
var statearr_18653 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18653[(0)] = cljs$core$async$reduce_$_state_machine__9367__auto__);

(statearr_18653[(1)] = (1));

return statearr_18653;
});
var cljs$core$async$reduce_$_state_machine__9367__auto____1 = (function (state_18634){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18654){if((e18654 instanceof Object)){
var ex__9370__auto__ = e18654;
var statearr_18655_18667 = state_18634;
(statearr_18655_18667[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18668 = state_18634;
state_18634 = G__18668;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9367__auto__ = function(state_18634){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9367__auto____1.call(this,state_18634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9367__auto____0;
cljs$core$async$reduce_$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9367__auto____1;
return cljs$core$async$reduce_$_state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto__))
})();
var state__9433__auto__ = (function (){var statearr_18656 = f__9432__auto__.call(null);
(statearr_18656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto__);

return statearr_18656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto__))
);

return c__9431__auto__;
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
var args18669 = [];
var len__5964__auto___18721 = arguments.length;
var i__5965__auto___18722 = (0);
while(true){
if((i__5965__auto___18722 < len__5964__auto___18721)){
args18669.push((arguments[i__5965__auto___18722]));

var G__18723 = (i__5965__auto___18722 + (1));
i__5965__auto___18722 = G__18723;
continue;
} else {
}
break;
}

var G__18671 = args18669.length;
switch (G__18671) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18669.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto__){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto__){
return (function (state_18696){
var state_val_18697 = (state_18696[(1)]);
if((state_val_18697 === (7))){
var inst_18678 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
var statearr_18698_18725 = state_18696__$1;
(statearr_18698_18725[(2)] = inst_18678);

(statearr_18698_18725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (1))){
var inst_18672 = cljs.core.seq.call(null,coll);
var inst_18673 = inst_18672;
var state_18696__$1 = (function (){var statearr_18699 = state_18696;
(statearr_18699[(7)] = inst_18673);

return statearr_18699;
})();
var statearr_18700_18726 = state_18696__$1;
(statearr_18700_18726[(2)] = null);

(statearr_18700_18726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (4))){
var inst_18673 = (state_18696[(7)]);
var inst_18676 = cljs.core.first.call(null,inst_18673);
var state_18696__$1 = state_18696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18696__$1,(7),ch,inst_18676);
} else {
if((state_val_18697 === (13))){
var inst_18690 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
var statearr_18701_18727 = state_18696__$1;
(statearr_18701_18727[(2)] = inst_18690);

(statearr_18701_18727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (6))){
var inst_18681 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
if(cljs.core.truth_(inst_18681)){
var statearr_18702_18728 = state_18696__$1;
(statearr_18702_18728[(1)] = (8));

} else {
var statearr_18703_18729 = state_18696__$1;
(statearr_18703_18729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (3))){
var inst_18694 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18696__$1,inst_18694);
} else {
if((state_val_18697 === (12))){
var state_18696__$1 = state_18696;
var statearr_18704_18730 = state_18696__$1;
(statearr_18704_18730[(2)] = null);

(statearr_18704_18730[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (2))){
var inst_18673 = (state_18696[(7)]);
var state_18696__$1 = state_18696;
if(cljs.core.truth_(inst_18673)){
var statearr_18705_18731 = state_18696__$1;
(statearr_18705_18731[(1)] = (4));

} else {
var statearr_18706_18732 = state_18696__$1;
(statearr_18706_18732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (11))){
var inst_18687 = cljs.core.async.close_BANG_.call(null,ch);
var state_18696__$1 = state_18696;
var statearr_18707_18733 = state_18696__$1;
(statearr_18707_18733[(2)] = inst_18687);

(statearr_18707_18733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (9))){
var state_18696__$1 = state_18696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18708_18734 = state_18696__$1;
(statearr_18708_18734[(1)] = (11));

} else {
var statearr_18709_18735 = state_18696__$1;
(statearr_18709_18735[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (5))){
var inst_18673 = (state_18696[(7)]);
var state_18696__$1 = state_18696;
var statearr_18710_18736 = state_18696__$1;
(statearr_18710_18736[(2)] = inst_18673);

(statearr_18710_18736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (10))){
var inst_18692 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
var statearr_18711_18737 = state_18696__$1;
(statearr_18711_18737[(2)] = inst_18692);

(statearr_18711_18737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (8))){
var inst_18673 = (state_18696[(7)]);
var inst_18683 = cljs.core.next.call(null,inst_18673);
var inst_18673__$1 = inst_18683;
var state_18696__$1 = (function (){var statearr_18712 = state_18696;
(statearr_18712[(7)] = inst_18673__$1);

return statearr_18712;
})();
var statearr_18713_18738 = state_18696__$1;
(statearr_18713_18738[(2)] = null);

(statearr_18713_18738[(1)] = (2));


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
});})(c__9431__auto__))
;
return ((function (switch__9366__auto__,c__9431__auto__){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_18717 = [null,null,null,null,null,null,null,null];
(statearr_18717[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_18717[(1)] = (1));

return statearr_18717;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_18696){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_18696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e18718){if((e18718 instanceof Object)){
var ex__9370__auto__ = e18718;
var statearr_18719_18739 = state_18696;
(statearr_18719_18739[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18740 = state_18696;
state_18696 = G__18740;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_18696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_18696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto__))
})();
var state__9433__auto__ = (function (){var statearr_18720 = f__9432__auto__.call(null);
(statearr_18720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto__);

return statearr_18720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto__))
);

return c__9431__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5561__auto__ = (((_ == null))?null:_);
var m__5562__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,_);
} else {
var m__5562__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5561__auto__ = (((m == null))?null:m);
var m__5562__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5562__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5561__auto__ = (((m == null))?null:m);
var m__5562__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,m,ch);
} else {
var m__5562__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5561__auto__ = (((m == null))?null:m);
var m__5562__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,m);
} else {
var m__5562__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async18962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18962 = (function (mult,ch,cs,meta18963){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18963 = meta18963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18964,meta18963__$1){
var self__ = this;
var _18964__$1 = this;
return (new cljs.core.async.t_cljs$core$async18962(self__.mult,self__.ch,self__.cs,meta18963__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18964){
var self__ = this;
var _18964__$1 = this;
return self__.meta18963;
});})(cs))
;

cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18962.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18962.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18963","meta18963",-461932324,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18962";

cljs.core.async.t_cljs$core$async18962.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async18962");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18962 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18962(mult__$1,ch__$1,cs__$1,meta18963){
return (new cljs.core.async.t_cljs$core$async18962(mult__$1,ch__$1,cs__$1,meta18963));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18962(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9431__auto___19183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___19183,cs,m,dchan,dctr,done){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___19183,cs,m,dchan,dctr,done){
return (function (state_19095){
var state_val_19096 = (state_19095[(1)]);
if((state_val_19096 === (7))){
var inst_19091 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19097_19184 = state_19095__$1;
(statearr_19097_19184[(2)] = inst_19091);

(statearr_19097_19184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (20))){
var inst_18996 = (state_19095[(7)]);
var inst_19006 = cljs.core.first.call(null,inst_18996);
var inst_19007 = cljs.core.nth.call(null,inst_19006,(0),null);
var inst_19008 = cljs.core.nth.call(null,inst_19006,(1),null);
var state_19095__$1 = (function (){var statearr_19098 = state_19095;
(statearr_19098[(8)] = inst_19007);

return statearr_19098;
})();
if(cljs.core.truth_(inst_19008)){
var statearr_19099_19185 = state_19095__$1;
(statearr_19099_19185[(1)] = (22));

} else {
var statearr_19100_19186 = state_19095__$1;
(statearr_19100_19186[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (27))){
var inst_19043 = (state_19095[(9)]);
var inst_19036 = (state_19095[(10)]);
var inst_19038 = (state_19095[(11)]);
var inst_18967 = (state_19095[(12)]);
var inst_19043__$1 = cljs.core._nth.call(null,inst_19036,inst_19038);
var inst_19044 = cljs.core.async.put_BANG_.call(null,inst_19043__$1,inst_18967,done);
var state_19095__$1 = (function (){var statearr_19101 = state_19095;
(statearr_19101[(9)] = inst_19043__$1);

return statearr_19101;
})();
if(cljs.core.truth_(inst_19044)){
var statearr_19102_19187 = state_19095__$1;
(statearr_19102_19187[(1)] = (30));

} else {
var statearr_19103_19188 = state_19095__$1;
(statearr_19103_19188[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (1))){
var state_19095__$1 = state_19095;
var statearr_19104_19189 = state_19095__$1;
(statearr_19104_19189[(2)] = null);

(statearr_19104_19189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (24))){
var inst_18996 = (state_19095[(7)]);
var inst_19013 = (state_19095[(2)]);
var inst_19014 = cljs.core.next.call(null,inst_18996);
var inst_18976 = inst_19014;
var inst_18977 = null;
var inst_18978 = (0);
var inst_18979 = (0);
var state_19095__$1 = (function (){var statearr_19105 = state_19095;
(statearr_19105[(13)] = inst_18976);

(statearr_19105[(14)] = inst_18977);

(statearr_19105[(15)] = inst_18978);

(statearr_19105[(16)] = inst_19013);

(statearr_19105[(17)] = inst_18979);

return statearr_19105;
})();
var statearr_19106_19190 = state_19095__$1;
(statearr_19106_19190[(2)] = null);

(statearr_19106_19190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (39))){
var state_19095__$1 = state_19095;
var statearr_19110_19191 = state_19095__$1;
(statearr_19110_19191[(2)] = null);

(statearr_19110_19191[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (4))){
var inst_18967 = (state_19095[(12)]);
var inst_18967__$1 = (state_19095[(2)]);
var inst_18968 = (inst_18967__$1 == null);
var state_19095__$1 = (function (){var statearr_19111 = state_19095;
(statearr_19111[(12)] = inst_18967__$1);

return statearr_19111;
})();
if(cljs.core.truth_(inst_18968)){
var statearr_19112_19192 = state_19095__$1;
(statearr_19112_19192[(1)] = (5));

} else {
var statearr_19113_19193 = state_19095__$1;
(statearr_19113_19193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (15))){
var inst_18976 = (state_19095[(13)]);
var inst_18977 = (state_19095[(14)]);
var inst_18978 = (state_19095[(15)]);
var inst_18979 = (state_19095[(17)]);
var inst_18992 = (state_19095[(2)]);
var inst_18993 = (inst_18979 + (1));
var tmp19107 = inst_18976;
var tmp19108 = inst_18977;
var tmp19109 = inst_18978;
var inst_18976__$1 = tmp19107;
var inst_18977__$1 = tmp19108;
var inst_18978__$1 = tmp19109;
var inst_18979__$1 = inst_18993;
var state_19095__$1 = (function (){var statearr_19114 = state_19095;
(statearr_19114[(13)] = inst_18976__$1);

(statearr_19114[(14)] = inst_18977__$1);

(statearr_19114[(15)] = inst_18978__$1);

(statearr_19114[(17)] = inst_18979__$1);

(statearr_19114[(18)] = inst_18992);

return statearr_19114;
})();
var statearr_19115_19194 = state_19095__$1;
(statearr_19115_19194[(2)] = null);

(statearr_19115_19194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (21))){
var inst_19017 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19119_19195 = state_19095__$1;
(statearr_19119_19195[(2)] = inst_19017);

(statearr_19119_19195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (31))){
var inst_19043 = (state_19095[(9)]);
var inst_19047 = done.call(null,null);
var inst_19048 = cljs.core.async.untap_STAR_.call(null,m,inst_19043);
var state_19095__$1 = (function (){var statearr_19120 = state_19095;
(statearr_19120[(19)] = inst_19047);

return statearr_19120;
})();
var statearr_19121_19196 = state_19095__$1;
(statearr_19121_19196[(2)] = inst_19048);

(statearr_19121_19196[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (32))){
var inst_19036 = (state_19095[(10)]);
var inst_19038 = (state_19095[(11)]);
var inst_19037 = (state_19095[(20)]);
var inst_19035 = (state_19095[(21)]);
var inst_19050 = (state_19095[(2)]);
var inst_19051 = (inst_19038 + (1));
var tmp19116 = inst_19036;
var tmp19117 = inst_19037;
var tmp19118 = inst_19035;
var inst_19035__$1 = tmp19118;
var inst_19036__$1 = tmp19116;
var inst_19037__$1 = tmp19117;
var inst_19038__$1 = inst_19051;
var state_19095__$1 = (function (){var statearr_19122 = state_19095;
(statearr_19122[(10)] = inst_19036__$1);

(statearr_19122[(11)] = inst_19038__$1);

(statearr_19122[(20)] = inst_19037__$1);

(statearr_19122[(22)] = inst_19050);

(statearr_19122[(21)] = inst_19035__$1);

return statearr_19122;
})();
var statearr_19123_19197 = state_19095__$1;
(statearr_19123_19197[(2)] = null);

(statearr_19123_19197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (40))){
var inst_19063 = (state_19095[(23)]);
var inst_19067 = done.call(null,null);
var inst_19068 = cljs.core.async.untap_STAR_.call(null,m,inst_19063);
var state_19095__$1 = (function (){var statearr_19124 = state_19095;
(statearr_19124[(24)] = inst_19067);

return statearr_19124;
})();
var statearr_19125_19198 = state_19095__$1;
(statearr_19125_19198[(2)] = inst_19068);

(statearr_19125_19198[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (33))){
var inst_19054 = (state_19095[(25)]);
var inst_19056 = cljs.core.chunked_seq_QMARK_.call(null,inst_19054);
var state_19095__$1 = state_19095;
if(inst_19056){
var statearr_19126_19199 = state_19095__$1;
(statearr_19126_19199[(1)] = (36));

} else {
var statearr_19127_19200 = state_19095__$1;
(statearr_19127_19200[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (13))){
var inst_18986 = (state_19095[(26)]);
var inst_18989 = cljs.core.async.close_BANG_.call(null,inst_18986);
var state_19095__$1 = state_19095;
var statearr_19128_19201 = state_19095__$1;
(statearr_19128_19201[(2)] = inst_18989);

(statearr_19128_19201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (22))){
var inst_19007 = (state_19095[(8)]);
var inst_19010 = cljs.core.async.close_BANG_.call(null,inst_19007);
var state_19095__$1 = state_19095;
var statearr_19129_19202 = state_19095__$1;
(statearr_19129_19202[(2)] = inst_19010);

(statearr_19129_19202[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (36))){
var inst_19054 = (state_19095[(25)]);
var inst_19058 = cljs.core.chunk_first.call(null,inst_19054);
var inst_19059 = cljs.core.chunk_rest.call(null,inst_19054);
var inst_19060 = cljs.core.count.call(null,inst_19058);
var inst_19035 = inst_19059;
var inst_19036 = inst_19058;
var inst_19037 = inst_19060;
var inst_19038 = (0);
var state_19095__$1 = (function (){var statearr_19130 = state_19095;
(statearr_19130[(10)] = inst_19036);

(statearr_19130[(11)] = inst_19038);

(statearr_19130[(20)] = inst_19037);

(statearr_19130[(21)] = inst_19035);

return statearr_19130;
})();
var statearr_19131_19203 = state_19095__$1;
(statearr_19131_19203[(2)] = null);

(statearr_19131_19203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (41))){
var inst_19054 = (state_19095[(25)]);
var inst_19070 = (state_19095[(2)]);
var inst_19071 = cljs.core.next.call(null,inst_19054);
var inst_19035 = inst_19071;
var inst_19036 = null;
var inst_19037 = (0);
var inst_19038 = (0);
var state_19095__$1 = (function (){var statearr_19132 = state_19095;
(statearr_19132[(10)] = inst_19036);

(statearr_19132[(11)] = inst_19038);

(statearr_19132[(20)] = inst_19037);

(statearr_19132[(21)] = inst_19035);

(statearr_19132[(27)] = inst_19070);

return statearr_19132;
})();
var statearr_19133_19204 = state_19095__$1;
(statearr_19133_19204[(2)] = null);

(statearr_19133_19204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (43))){
var state_19095__$1 = state_19095;
var statearr_19134_19205 = state_19095__$1;
(statearr_19134_19205[(2)] = null);

(statearr_19134_19205[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (29))){
var inst_19079 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19135_19206 = state_19095__$1;
(statearr_19135_19206[(2)] = inst_19079);

(statearr_19135_19206[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (44))){
var inst_19088 = (state_19095[(2)]);
var state_19095__$1 = (function (){var statearr_19136 = state_19095;
(statearr_19136[(28)] = inst_19088);

return statearr_19136;
})();
var statearr_19137_19207 = state_19095__$1;
(statearr_19137_19207[(2)] = null);

(statearr_19137_19207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (6))){
var inst_19027 = (state_19095[(29)]);
var inst_19026 = cljs.core.deref.call(null,cs);
var inst_19027__$1 = cljs.core.keys.call(null,inst_19026);
var inst_19028 = cljs.core.count.call(null,inst_19027__$1);
var inst_19029 = cljs.core.reset_BANG_.call(null,dctr,inst_19028);
var inst_19034 = cljs.core.seq.call(null,inst_19027__$1);
var inst_19035 = inst_19034;
var inst_19036 = null;
var inst_19037 = (0);
var inst_19038 = (0);
var state_19095__$1 = (function (){var statearr_19138 = state_19095;
(statearr_19138[(30)] = inst_19029);

(statearr_19138[(10)] = inst_19036);

(statearr_19138[(11)] = inst_19038);

(statearr_19138[(20)] = inst_19037);

(statearr_19138[(21)] = inst_19035);

(statearr_19138[(29)] = inst_19027__$1);

return statearr_19138;
})();
var statearr_19139_19208 = state_19095__$1;
(statearr_19139_19208[(2)] = null);

(statearr_19139_19208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (28))){
var inst_19054 = (state_19095[(25)]);
var inst_19035 = (state_19095[(21)]);
var inst_19054__$1 = cljs.core.seq.call(null,inst_19035);
var state_19095__$1 = (function (){var statearr_19140 = state_19095;
(statearr_19140[(25)] = inst_19054__$1);

return statearr_19140;
})();
if(inst_19054__$1){
var statearr_19141_19209 = state_19095__$1;
(statearr_19141_19209[(1)] = (33));

} else {
var statearr_19142_19210 = state_19095__$1;
(statearr_19142_19210[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (25))){
var inst_19038 = (state_19095[(11)]);
var inst_19037 = (state_19095[(20)]);
var inst_19040 = (inst_19038 < inst_19037);
var inst_19041 = inst_19040;
var state_19095__$1 = state_19095;
if(cljs.core.truth_(inst_19041)){
var statearr_19143_19211 = state_19095__$1;
(statearr_19143_19211[(1)] = (27));

} else {
var statearr_19144_19212 = state_19095__$1;
(statearr_19144_19212[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (34))){
var state_19095__$1 = state_19095;
var statearr_19145_19213 = state_19095__$1;
(statearr_19145_19213[(2)] = null);

(statearr_19145_19213[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (17))){
var state_19095__$1 = state_19095;
var statearr_19146_19214 = state_19095__$1;
(statearr_19146_19214[(2)] = null);

(statearr_19146_19214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (3))){
var inst_19093 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19095__$1,inst_19093);
} else {
if((state_val_19096 === (12))){
var inst_19022 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19147_19215 = state_19095__$1;
(statearr_19147_19215[(2)] = inst_19022);

(statearr_19147_19215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (2))){
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19095__$1,(4),ch);
} else {
if((state_val_19096 === (23))){
var state_19095__$1 = state_19095;
var statearr_19148_19216 = state_19095__$1;
(statearr_19148_19216[(2)] = null);

(statearr_19148_19216[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (35))){
var inst_19077 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19149_19217 = state_19095__$1;
(statearr_19149_19217[(2)] = inst_19077);

(statearr_19149_19217[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (19))){
var inst_18996 = (state_19095[(7)]);
var inst_19000 = cljs.core.chunk_first.call(null,inst_18996);
var inst_19001 = cljs.core.chunk_rest.call(null,inst_18996);
var inst_19002 = cljs.core.count.call(null,inst_19000);
var inst_18976 = inst_19001;
var inst_18977 = inst_19000;
var inst_18978 = inst_19002;
var inst_18979 = (0);
var state_19095__$1 = (function (){var statearr_19150 = state_19095;
(statearr_19150[(13)] = inst_18976);

(statearr_19150[(14)] = inst_18977);

(statearr_19150[(15)] = inst_18978);

(statearr_19150[(17)] = inst_18979);

return statearr_19150;
})();
var statearr_19151_19218 = state_19095__$1;
(statearr_19151_19218[(2)] = null);

(statearr_19151_19218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (11))){
var inst_18976 = (state_19095[(13)]);
var inst_18996 = (state_19095[(7)]);
var inst_18996__$1 = cljs.core.seq.call(null,inst_18976);
var state_19095__$1 = (function (){var statearr_19152 = state_19095;
(statearr_19152[(7)] = inst_18996__$1);

return statearr_19152;
})();
if(inst_18996__$1){
var statearr_19153_19219 = state_19095__$1;
(statearr_19153_19219[(1)] = (16));

} else {
var statearr_19154_19220 = state_19095__$1;
(statearr_19154_19220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (9))){
var inst_19024 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19155_19221 = state_19095__$1;
(statearr_19155_19221[(2)] = inst_19024);

(statearr_19155_19221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (5))){
var inst_18974 = cljs.core.deref.call(null,cs);
var inst_18975 = cljs.core.seq.call(null,inst_18974);
var inst_18976 = inst_18975;
var inst_18977 = null;
var inst_18978 = (0);
var inst_18979 = (0);
var state_19095__$1 = (function (){var statearr_19156 = state_19095;
(statearr_19156[(13)] = inst_18976);

(statearr_19156[(14)] = inst_18977);

(statearr_19156[(15)] = inst_18978);

(statearr_19156[(17)] = inst_18979);

return statearr_19156;
})();
var statearr_19157_19222 = state_19095__$1;
(statearr_19157_19222[(2)] = null);

(statearr_19157_19222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (14))){
var state_19095__$1 = state_19095;
var statearr_19158_19223 = state_19095__$1;
(statearr_19158_19223[(2)] = null);

(statearr_19158_19223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (45))){
var inst_19085 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19159_19224 = state_19095__$1;
(statearr_19159_19224[(2)] = inst_19085);

(statearr_19159_19224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (26))){
var inst_19027 = (state_19095[(29)]);
var inst_19081 = (state_19095[(2)]);
var inst_19082 = cljs.core.seq.call(null,inst_19027);
var state_19095__$1 = (function (){var statearr_19160 = state_19095;
(statearr_19160[(31)] = inst_19081);

return statearr_19160;
})();
if(inst_19082){
var statearr_19161_19225 = state_19095__$1;
(statearr_19161_19225[(1)] = (42));

} else {
var statearr_19162_19226 = state_19095__$1;
(statearr_19162_19226[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (16))){
var inst_18996 = (state_19095[(7)]);
var inst_18998 = cljs.core.chunked_seq_QMARK_.call(null,inst_18996);
var state_19095__$1 = state_19095;
if(inst_18998){
var statearr_19163_19227 = state_19095__$1;
(statearr_19163_19227[(1)] = (19));

} else {
var statearr_19164_19228 = state_19095__$1;
(statearr_19164_19228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (38))){
var inst_19074 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19165_19229 = state_19095__$1;
(statearr_19165_19229[(2)] = inst_19074);

(statearr_19165_19229[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (30))){
var state_19095__$1 = state_19095;
var statearr_19166_19230 = state_19095__$1;
(statearr_19166_19230[(2)] = null);

(statearr_19166_19230[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (10))){
var inst_18977 = (state_19095[(14)]);
var inst_18979 = (state_19095[(17)]);
var inst_18985 = cljs.core._nth.call(null,inst_18977,inst_18979);
var inst_18986 = cljs.core.nth.call(null,inst_18985,(0),null);
var inst_18987 = cljs.core.nth.call(null,inst_18985,(1),null);
var state_19095__$1 = (function (){var statearr_19167 = state_19095;
(statearr_19167[(26)] = inst_18986);

return statearr_19167;
})();
if(cljs.core.truth_(inst_18987)){
var statearr_19168_19231 = state_19095__$1;
(statearr_19168_19231[(1)] = (13));

} else {
var statearr_19169_19232 = state_19095__$1;
(statearr_19169_19232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (18))){
var inst_19020 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19170_19233 = state_19095__$1;
(statearr_19170_19233[(2)] = inst_19020);

(statearr_19170_19233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (42))){
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19095__$1,(45),dchan);
} else {
if((state_val_19096 === (37))){
var inst_19054 = (state_19095[(25)]);
var inst_19063 = (state_19095[(23)]);
var inst_18967 = (state_19095[(12)]);
var inst_19063__$1 = cljs.core.first.call(null,inst_19054);
var inst_19064 = cljs.core.async.put_BANG_.call(null,inst_19063__$1,inst_18967,done);
var state_19095__$1 = (function (){var statearr_19171 = state_19095;
(statearr_19171[(23)] = inst_19063__$1);

return statearr_19171;
})();
if(cljs.core.truth_(inst_19064)){
var statearr_19172_19234 = state_19095__$1;
(statearr_19172_19234[(1)] = (39));

} else {
var statearr_19173_19235 = state_19095__$1;
(statearr_19173_19235[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (8))){
var inst_18978 = (state_19095[(15)]);
var inst_18979 = (state_19095[(17)]);
var inst_18981 = (inst_18979 < inst_18978);
var inst_18982 = inst_18981;
var state_19095__$1 = state_19095;
if(cljs.core.truth_(inst_18982)){
var statearr_19174_19236 = state_19095__$1;
(statearr_19174_19236[(1)] = (10));

} else {
var statearr_19175_19237 = state_19095__$1;
(statearr_19175_19237[(1)] = (11));

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
});})(c__9431__auto___19183,cs,m,dchan,dctr,done))
;
return ((function (switch__9366__auto__,c__9431__auto___19183,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9367__auto__ = null;
var cljs$core$async$mult_$_state_machine__9367__auto____0 = (function (){
var statearr_19179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19179[(0)] = cljs$core$async$mult_$_state_machine__9367__auto__);

(statearr_19179[(1)] = (1));

return statearr_19179;
});
var cljs$core$async$mult_$_state_machine__9367__auto____1 = (function (state_19095){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_19095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e19180){if((e19180 instanceof Object)){
var ex__9370__auto__ = e19180;
var statearr_19181_19238 = state_19095;
(statearr_19181_19238[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19239 = state_19095;
state_19095 = G__19239;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9367__auto__ = function(state_19095){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9367__auto____1.call(this,state_19095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9367__auto____0;
cljs$core$async$mult_$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9367__auto____1;
return cljs$core$async$mult_$_state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___19183,cs,m,dchan,dctr,done))
})();
var state__9433__auto__ = (function (){var statearr_19182 = f__9432__auto__.call(null);
(statearr_19182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___19183);

return statearr_19182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___19183,cs,m,dchan,dctr,done))
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
var args19240 = [];
var len__5964__auto___19243 = arguments.length;
var i__5965__auto___19244 = (0);
while(true){
if((i__5965__auto___19244 < len__5964__auto___19243)){
args19240.push((arguments[i__5965__auto___19244]));

var G__19245 = (i__5965__auto___19244 + (1));
i__5965__auto___19244 = G__19245;
continue;
} else {
}
break;
}

var G__19242 = args19240.length;
switch (G__19242) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19240.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5561__auto__ = (((m == null))?null:m);
var m__5562__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,m,ch);
} else {
var m__5562__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5561__auto__ = (((m == null))?null:m);
var m__5562__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,m,ch);
} else {
var m__5562__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5561__auto__ = (((m == null))?null:m);
var m__5562__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,m);
} else {
var m__5562__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5561__auto__ = (((m == null))?null:m);
var m__5562__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,m,state_map);
} else {
var m__5562__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5561__auto__ = (((m == null))?null:m);
var m__5562__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,m,mode);
} else {
var m__5562__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5971__auto__ = [];
var len__5964__auto___19257 = arguments.length;
var i__5965__auto___19258 = (0);
while(true){
if((i__5965__auto___19258 < len__5964__auto___19257)){
args__5971__auto__.push((arguments[i__5965__auto___19258]));

var G__19259 = (i__5965__auto___19258 + (1));
i__5965__auto___19258 = G__19259;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((3) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5972__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19251){
var map__19252 = p__19251;
var map__19252__$1 = ((((!((map__19252 == null)))?((((map__19252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19252):map__19252);
var opts = map__19252__$1;
var statearr_19254_19260 = state;
(statearr_19254_19260[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__19252,map__19252__$1,opts){
return (function (val){
var statearr_19255_19261 = state;
(statearr_19255_19261[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19252,map__19252__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19256_19262 = state;
(statearr_19256_19262[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19247){
var G__19248 = cljs.core.first.call(null,seq19247);
var seq19247__$1 = cljs.core.next.call(null,seq19247);
var G__19249 = cljs.core.first.call(null,seq19247__$1);
var seq19247__$2 = cljs.core.next.call(null,seq19247__$1);
var G__19250 = cljs.core.first.call(null,seq19247__$2);
var seq19247__$3 = cljs.core.next.call(null,seq19247__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19248,G__19249,G__19250,seq19247__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19426 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19427){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19427 = meta19427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19428,meta19427__$1){
var self__ = this;
var _19428__$1 = this;
return (new cljs.core.async.t_cljs$core$async19426(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19427__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19428){
var self__ = this;
var _19428__$1 = this;
return self__.meta19427;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19427","meta19427",195477383,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19426";

cljs.core.async.t_cljs$core$async19426.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async19426");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19426 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19426(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19427){
return (new cljs.core.async.t_cljs$core$async19426(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19427));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19426(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9431__auto___19589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___19589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___19589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19526){
var state_val_19527 = (state_19526[(1)]);
if((state_val_19527 === (7))){
var inst_19444 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19528_19590 = state_19526__$1;
(statearr_19528_19590[(2)] = inst_19444);

(statearr_19528_19590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (20))){
var inst_19456 = (state_19526[(7)]);
var state_19526__$1 = state_19526;
var statearr_19529_19591 = state_19526__$1;
(statearr_19529_19591[(2)] = inst_19456);

(statearr_19529_19591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (27))){
var state_19526__$1 = state_19526;
var statearr_19530_19592 = state_19526__$1;
(statearr_19530_19592[(2)] = null);

(statearr_19530_19592[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (1))){
var inst_19432 = (state_19526[(8)]);
var inst_19432__$1 = calc_state.call(null);
var inst_19434 = (inst_19432__$1 == null);
var inst_19435 = cljs.core.not.call(null,inst_19434);
var state_19526__$1 = (function (){var statearr_19531 = state_19526;
(statearr_19531[(8)] = inst_19432__$1);

return statearr_19531;
})();
if(inst_19435){
var statearr_19532_19593 = state_19526__$1;
(statearr_19532_19593[(1)] = (2));

} else {
var statearr_19533_19594 = state_19526__$1;
(statearr_19533_19594[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (24))){
var inst_19486 = (state_19526[(9)]);
var inst_19500 = (state_19526[(10)]);
var inst_19479 = (state_19526[(11)]);
var inst_19500__$1 = inst_19479.call(null,inst_19486);
var state_19526__$1 = (function (){var statearr_19534 = state_19526;
(statearr_19534[(10)] = inst_19500__$1);

return statearr_19534;
})();
if(cljs.core.truth_(inst_19500__$1)){
var statearr_19535_19595 = state_19526__$1;
(statearr_19535_19595[(1)] = (29));

} else {
var statearr_19536_19596 = state_19526__$1;
(statearr_19536_19596[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (4))){
var inst_19447 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
if(cljs.core.truth_(inst_19447)){
var statearr_19537_19597 = state_19526__$1;
(statearr_19537_19597[(1)] = (8));

} else {
var statearr_19538_19598 = state_19526__$1;
(statearr_19538_19598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (15))){
var inst_19473 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
if(cljs.core.truth_(inst_19473)){
var statearr_19539_19599 = state_19526__$1;
(statearr_19539_19599[(1)] = (19));

} else {
var statearr_19540_19600 = state_19526__$1;
(statearr_19540_19600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (21))){
var inst_19478 = (state_19526[(12)]);
var inst_19478__$1 = (state_19526[(2)]);
var inst_19479 = cljs.core.get.call(null,inst_19478__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19480 = cljs.core.get.call(null,inst_19478__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19481 = cljs.core.get.call(null,inst_19478__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19526__$1 = (function (){var statearr_19541 = state_19526;
(statearr_19541[(12)] = inst_19478__$1);

(statearr_19541[(13)] = inst_19480);

(statearr_19541[(11)] = inst_19479);

return statearr_19541;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19526__$1,(22),inst_19481);
} else {
if((state_val_19527 === (31))){
var inst_19508 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
if(cljs.core.truth_(inst_19508)){
var statearr_19542_19601 = state_19526__$1;
(statearr_19542_19601[(1)] = (32));

} else {
var statearr_19543_19602 = state_19526__$1;
(statearr_19543_19602[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (32))){
var inst_19485 = (state_19526[(14)]);
var state_19526__$1 = state_19526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19526__$1,(35),out,inst_19485);
} else {
if((state_val_19527 === (33))){
var inst_19478 = (state_19526[(12)]);
var inst_19456 = inst_19478;
var state_19526__$1 = (function (){var statearr_19544 = state_19526;
(statearr_19544[(7)] = inst_19456);

return statearr_19544;
})();
var statearr_19545_19603 = state_19526__$1;
(statearr_19545_19603[(2)] = null);

(statearr_19545_19603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (13))){
var inst_19456 = (state_19526[(7)]);
var inst_19463 = inst_19456.cljs$lang$protocol_mask$partition0$;
var inst_19464 = (inst_19463 & (64));
var inst_19465 = inst_19456.cljs$core$ISeq$;
var inst_19466 = (inst_19464) || (inst_19465);
var state_19526__$1 = state_19526;
if(cljs.core.truth_(inst_19466)){
var statearr_19546_19604 = state_19526__$1;
(statearr_19546_19604[(1)] = (16));

} else {
var statearr_19547_19605 = state_19526__$1;
(statearr_19547_19605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (22))){
var inst_19485 = (state_19526[(14)]);
var inst_19486 = (state_19526[(9)]);
var inst_19484 = (state_19526[(2)]);
var inst_19485__$1 = cljs.core.nth.call(null,inst_19484,(0),null);
var inst_19486__$1 = cljs.core.nth.call(null,inst_19484,(1),null);
var inst_19487 = (inst_19485__$1 == null);
var inst_19488 = cljs.core._EQ_.call(null,inst_19486__$1,change);
var inst_19489 = (inst_19487) || (inst_19488);
var state_19526__$1 = (function (){var statearr_19548 = state_19526;
(statearr_19548[(14)] = inst_19485__$1);

(statearr_19548[(9)] = inst_19486__$1);

return statearr_19548;
})();
if(cljs.core.truth_(inst_19489)){
var statearr_19549_19606 = state_19526__$1;
(statearr_19549_19606[(1)] = (23));

} else {
var statearr_19550_19607 = state_19526__$1;
(statearr_19550_19607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (36))){
var inst_19478 = (state_19526[(12)]);
var inst_19456 = inst_19478;
var state_19526__$1 = (function (){var statearr_19551 = state_19526;
(statearr_19551[(7)] = inst_19456);

return statearr_19551;
})();
var statearr_19552_19608 = state_19526__$1;
(statearr_19552_19608[(2)] = null);

(statearr_19552_19608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (29))){
var inst_19500 = (state_19526[(10)]);
var state_19526__$1 = state_19526;
var statearr_19553_19609 = state_19526__$1;
(statearr_19553_19609[(2)] = inst_19500);

(statearr_19553_19609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (6))){
var state_19526__$1 = state_19526;
var statearr_19554_19610 = state_19526__$1;
(statearr_19554_19610[(2)] = false);

(statearr_19554_19610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (28))){
var inst_19496 = (state_19526[(2)]);
var inst_19497 = calc_state.call(null);
var inst_19456 = inst_19497;
var state_19526__$1 = (function (){var statearr_19555 = state_19526;
(statearr_19555[(15)] = inst_19496);

(statearr_19555[(7)] = inst_19456);

return statearr_19555;
})();
var statearr_19556_19611 = state_19526__$1;
(statearr_19556_19611[(2)] = null);

(statearr_19556_19611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (25))){
var inst_19522 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19557_19612 = state_19526__$1;
(statearr_19557_19612[(2)] = inst_19522);

(statearr_19557_19612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (34))){
var inst_19520 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19558_19613 = state_19526__$1;
(statearr_19558_19613[(2)] = inst_19520);

(statearr_19558_19613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (17))){
var state_19526__$1 = state_19526;
var statearr_19559_19614 = state_19526__$1;
(statearr_19559_19614[(2)] = false);

(statearr_19559_19614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (3))){
var state_19526__$1 = state_19526;
var statearr_19560_19615 = state_19526__$1;
(statearr_19560_19615[(2)] = false);

(statearr_19560_19615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (12))){
var inst_19524 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19526__$1,inst_19524);
} else {
if((state_val_19527 === (2))){
var inst_19432 = (state_19526[(8)]);
var inst_19437 = inst_19432.cljs$lang$protocol_mask$partition0$;
var inst_19438 = (inst_19437 & (64));
var inst_19439 = inst_19432.cljs$core$ISeq$;
var inst_19440 = (inst_19438) || (inst_19439);
var state_19526__$1 = state_19526;
if(cljs.core.truth_(inst_19440)){
var statearr_19561_19616 = state_19526__$1;
(statearr_19561_19616[(1)] = (5));

} else {
var statearr_19562_19617 = state_19526__$1;
(statearr_19562_19617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (23))){
var inst_19485 = (state_19526[(14)]);
var inst_19491 = (inst_19485 == null);
var state_19526__$1 = state_19526;
if(cljs.core.truth_(inst_19491)){
var statearr_19563_19618 = state_19526__$1;
(statearr_19563_19618[(1)] = (26));

} else {
var statearr_19564_19619 = state_19526__$1;
(statearr_19564_19619[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (35))){
var inst_19511 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
if(cljs.core.truth_(inst_19511)){
var statearr_19565_19620 = state_19526__$1;
(statearr_19565_19620[(1)] = (36));

} else {
var statearr_19566_19621 = state_19526__$1;
(statearr_19566_19621[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (19))){
var inst_19456 = (state_19526[(7)]);
var inst_19475 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19456);
var state_19526__$1 = state_19526;
var statearr_19567_19622 = state_19526__$1;
(statearr_19567_19622[(2)] = inst_19475);

(statearr_19567_19622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (11))){
var inst_19456 = (state_19526[(7)]);
var inst_19460 = (inst_19456 == null);
var inst_19461 = cljs.core.not.call(null,inst_19460);
var state_19526__$1 = state_19526;
if(inst_19461){
var statearr_19568_19623 = state_19526__$1;
(statearr_19568_19623[(1)] = (13));

} else {
var statearr_19569_19624 = state_19526__$1;
(statearr_19569_19624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (9))){
var inst_19432 = (state_19526[(8)]);
var state_19526__$1 = state_19526;
var statearr_19570_19625 = state_19526__$1;
(statearr_19570_19625[(2)] = inst_19432);

(statearr_19570_19625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (5))){
var state_19526__$1 = state_19526;
var statearr_19571_19626 = state_19526__$1;
(statearr_19571_19626[(2)] = true);

(statearr_19571_19626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (14))){
var state_19526__$1 = state_19526;
var statearr_19572_19627 = state_19526__$1;
(statearr_19572_19627[(2)] = false);

(statearr_19572_19627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (26))){
var inst_19486 = (state_19526[(9)]);
var inst_19493 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19486);
var state_19526__$1 = state_19526;
var statearr_19573_19628 = state_19526__$1;
(statearr_19573_19628[(2)] = inst_19493);

(statearr_19573_19628[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (16))){
var state_19526__$1 = state_19526;
var statearr_19574_19629 = state_19526__$1;
(statearr_19574_19629[(2)] = true);

(statearr_19574_19629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (38))){
var inst_19516 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19575_19630 = state_19526__$1;
(statearr_19575_19630[(2)] = inst_19516);

(statearr_19575_19630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (30))){
var inst_19486 = (state_19526[(9)]);
var inst_19480 = (state_19526[(13)]);
var inst_19479 = (state_19526[(11)]);
var inst_19503 = cljs.core.empty_QMARK_.call(null,inst_19479);
var inst_19504 = inst_19480.call(null,inst_19486);
var inst_19505 = cljs.core.not.call(null,inst_19504);
var inst_19506 = (inst_19503) && (inst_19505);
var state_19526__$1 = state_19526;
var statearr_19576_19631 = state_19526__$1;
(statearr_19576_19631[(2)] = inst_19506);

(statearr_19576_19631[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (10))){
var inst_19432 = (state_19526[(8)]);
var inst_19452 = (state_19526[(2)]);
var inst_19453 = cljs.core.get.call(null,inst_19452,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19454 = cljs.core.get.call(null,inst_19452,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19455 = cljs.core.get.call(null,inst_19452,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19456 = inst_19432;
var state_19526__$1 = (function (){var statearr_19577 = state_19526;
(statearr_19577[(16)] = inst_19453);

(statearr_19577[(17)] = inst_19454);

(statearr_19577[(7)] = inst_19456);

(statearr_19577[(18)] = inst_19455);

return statearr_19577;
})();
var statearr_19578_19632 = state_19526__$1;
(statearr_19578_19632[(2)] = null);

(statearr_19578_19632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (18))){
var inst_19470 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19579_19633 = state_19526__$1;
(statearr_19579_19633[(2)] = inst_19470);

(statearr_19579_19633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (37))){
var state_19526__$1 = state_19526;
var statearr_19580_19634 = state_19526__$1;
(statearr_19580_19634[(2)] = null);

(statearr_19580_19634[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19527 === (8))){
var inst_19432 = (state_19526[(8)]);
var inst_19449 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19432);
var state_19526__$1 = state_19526;
var statearr_19581_19635 = state_19526__$1;
(statearr_19581_19635[(2)] = inst_19449);

(statearr_19581_19635[(1)] = (10));


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
});})(c__9431__auto___19589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9366__auto__,c__9431__auto___19589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9367__auto__ = null;
var cljs$core$async$mix_$_state_machine__9367__auto____0 = (function (){
var statearr_19585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19585[(0)] = cljs$core$async$mix_$_state_machine__9367__auto__);

(statearr_19585[(1)] = (1));

return statearr_19585;
});
var cljs$core$async$mix_$_state_machine__9367__auto____1 = (function (state_19526){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_19526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e19586){if((e19586 instanceof Object)){
var ex__9370__auto__ = e19586;
var statearr_19587_19636 = state_19526;
(statearr_19587_19636[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19637 = state_19526;
state_19526 = G__19637;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9367__auto__ = function(state_19526){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9367__auto____1.call(this,state_19526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9367__auto____0;
cljs$core$async$mix_$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9367__auto____1;
return cljs$core$async$mix_$_state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___19589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9433__auto__ = (function (){var statearr_19588 = f__9432__auto__.call(null);
(statearr_19588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___19589);

return statearr_19588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___19589,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5561__auto__ = (((p == null))?null:p);
var m__5562__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5562__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5561__auto__ = (((p == null))?null:p);
var m__5562__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,p,v,ch);
} else {
var m__5562__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19638 = [];
var len__5964__auto___19641 = arguments.length;
var i__5965__auto___19642 = (0);
while(true){
if((i__5965__auto___19642 < len__5964__auto___19641)){
args19638.push((arguments[i__5965__auto___19642]));

var G__19643 = (i__5965__auto___19642 + (1));
i__5965__auto___19642 = G__19643;
continue;
} else {
}
break;
}

var G__19640 = args19638.length;
switch (G__19640) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19638.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5561__auto__ = (((p == null))?null:p);
var m__5562__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,p);
} else {
var m__5562__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5561__auto__ = (((p == null))?null:p);
var m__5562__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,p,v);
} else {
var m__5562__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,p,v);
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
var args19646 = [];
var len__5964__auto___19771 = arguments.length;
var i__5965__auto___19772 = (0);
while(true){
if((i__5965__auto___19772 < len__5964__auto___19771)){
args19646.push((arguments[i__5965__auto___19772]));

var G__19773 = (i__5965__auto___19772 + (1));
i__5965__auto___19772 = G__19773;
continue;
} else {
}
break;
}

var G__19648 = args19646.length;
switch (G__19648) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19646.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4906__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4906__auto__,mults){
return (function (p1__19645_SHARP_){
if(cljs.core.truth_(p1__19645_SHARP_.call(null,topic))){
return p1__19645_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19645_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4906__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19649 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19650){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19650 = meta19650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19651,meta19650__$1){
var self__ = this;
var _19651__$1 = this;
return (new cljs.core.async.t_cljs$core$async19649(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19650__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19651){
var self__ = this;
var _19651__$1 = this;
return self__.meta19650;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19649.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19649.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19650","meta19650",-2124429676,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19649";

cljs.core.async.t_cljs$core$async19649.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async19649");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19649 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19650){
return (new cljs.core.async.t_cljs$core$async19649(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19650));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19649(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9431__auto___19775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___19775,mults,ensure_mult,p){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___19775,mults,ensure_mult,p){
return (function (state_19723){
var state_val_19724 = (state_19723[(1)]);
if((state_val_19724 === (7))){
var inst_19719 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19725_19776 = state_19723__$1;
(statearr_19725_19776[(2)] = inst_19719);

(statearr_19725_19776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (20))){
var state_19723__$1 = state_19723;
var statearr_19726_19777 = state_19723__$1;
(statearr_19726_19777[(2)] = null);

(statearr_19726_19777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (1))){
var state_19723__$1 = state_19723;
var statearr_19727_19778 = state_19723__$1;
(statearr_19727_19778[(2)] = null);

(statearr_19727_19778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (24))){
var inst_19702 = (state_19723[(7)]);
var inst_19711 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19702);
var state_19723__$1 = state_19723;
var statearr_19728_19779 = state_19723__$1;
(statearr_19728_19779[(2)] = inst_19711);

(statearr_19728_19779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (4))){
var inst_19654 = (state_19723[(8)]);
var inst_19654__$1 = (state_19723[(2)]);
var inst_19655 = (inst_19654__$1 == null);
var state_19723__$1 = (function (){var statearr_19729 = state_19723;
(statearr_19729[(8)] = inst_19654__$1);

return statearr_19729;
})();
if(cljs.core.truth_(inst_19655)){
var statearr_19730_19780 = state_19723__$1;
(statearr_19730_19780[(1)] = (5));

} else {
var statearr_19731_19781 = state_19723__$1;
(statearr_19731_19781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (15))){
var inst_19696 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19732_19782 = state_19723__$1;
(statearr_19732_19782[(2)] = inst_19696);

(statearr_19732_19782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (21))){
var inst_19716 = (state_19723[(2)]);
var state_19723__$1 = (function (){var statearr_19733 = state_19723;
(statearr_19733[(9)] = inst_19716);

return statearr_19733;
})();
var statearr_19734_19783 = state_19723__$1;
(statearr_19734_19783[(2)] = null);

(statearr_19734_19783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (13))){
var inst_19678 = (state_19723[(10)]);
var inst_19680 = cljs.core.chunked_seq_QMARK_.call(null,inst_19678);
var state_19723__$1 = state_19723;
if(inst_19680){
var statearr_19735_19784 = state_19723__$1;
(statearr_19735_19784[(1)] = (16));

} else {
var statearr_19736_19785 = state_19723__$1;
(statearr_19736_19785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (22))){
var inst_19708 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
if(cljs.core.truth_(inst_19708)){
var statearr_19737_19786 = state_19723__$1;
(statearr_19737_19786[(1)] = (23));

} else {
var statearr_19738_19787 = state_19723__$1;
(statearr_19738_19787[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (6))){
var inst_19702 = (state_19723[(7)]);
var inst_19704 = (state_19723[(11)]);
var inst_19654 = (state_19723[(8)]);
var inst_19702__$1 = topic_fn.call(null,inst_19654);
var inst_19703 = cljs.core.deref.call(null,mults);
var inst_19704__$1 = cljs.core.get.call(null,inst_19703,inst_19702__$1);
var state_19723__$1 = (function (){var statearr_19739 = state_19723;
(statearr_19739[(7)] = inst_19702__$1);

(statearr_19739[(11)] = inst_19704__$1);

return statearr_19739;
})();
if(cljs.core.truth_(inst_19704__$1)){
var statearr_19740_19788 = state_19723__$1;
(statearr_19740_19788[(1)] = (19));

} else {
var statearr_19741_19789 = state_19723__$1;
(statearr_19741_19789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (25))){
var inst_19713 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19742_19790 = state_19723__$1;
(statearr_19742_19790[(2)] = inst_19713);

(statearr_19742_19790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (17))){
var inst_19678 = (state_19723[(10)]);
var inst_19687 = cljs.core.first.call(null,inst_19678);
var inst_19688 = cljs.core.async.muxch_STAR_.call(null,inst_19687);
var inst_19689 = cljs.core.async.close_BANG_.call(null,inst_19688);
var inst_19690 = cljs.core.next.call(null,inst_19678);
var inst_19664 = inst_19690;
var inst_19665 = null;
var inst_19666 = (0);
var inst_19667 = (0);
var state_19723__$1 = (function (){var statearr_19743 = state_19723;
(statearr_19743[(12)] = inst_19667);

(statearr_19743[(13)] = inst_19689);

(statearr_19743[(14)] = inst_19666);

(statearr_19743[(15)] = inst_19665);

(statearr_19743[(16)] = inst_19664);

return statearr_19743;
})();
var statearr_19744_19791 = state_19723__$1;
(statearr_19744_19791[(2)] = null);

(statearr_19744_19791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (3))){
var inst_19721 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19723__$1,inst_19721);
} else {
if((state_val_19724 === (12))){
var inst_19698 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19745_19792 = state_19723__$1;
(statearr_19745_19792[(2)] = inst_19698);

(statearr_19745_19792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (2))){
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19723__$1,(4),ch);
} else {
if((state_val_19724 === (23))){
var state_19723__$1 = state_19723;
var statearr_19746_19793 = state_19723__$1;
(statearr_19746_19793[(2)] = null);

(statearr_19746_19793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (19))){
var inst_19704 = (state_19723[(11)]);
var inst_19654 = (state_19723[(8)]);
var inst_19706 = cljs.core.async.muxch_STAR_.call(null,inst_19704);
var state_19723__$1 = state_19723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19723__$1,(22),inst_19706,inst_19654);
} else {
if((state_val_19724 === (11))){
var inst_19678 = (state_19723[(10)]);
var inst_19664 = (state_19723[(16)]);
var inst_19678__$1 = cljs.core.seq.call(null,inst_19664);
var state_19723__$1 = (function (){var statearr_19747 = state_19723;
(statearr_19747[(10)] = inst_19678__$1);

return statearr_19747;
})();
if(inst_19678__$1){
var statearr_19748_19794 = state_19723__$1;
(statearr_19748_19794[(1)] = (13));

} else {
var statearr_19749_19795 = state_19723__$1;
(statearr_19749_19795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (9))){
var inst_19700 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19750_19796 = state_19723__$1;
(statearr_19750_19796[(2)] = inst_19700);

(statearr_19750_19796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (5))){
var inst_19661 = cljs.core.deref.call(null,mults);
var inst_19662 = cljs.core.vals.call(null,inst_19661);
var inst_19663 = cljs.core.seq.call(null,inst_19662);
var inst_19664 = inst_19663;
var inst_19665 = null;
var inst_19666 = (0);
var inst_19667 = (0);
var state_19723__$1 = (function (){var statearr_19751 = state_19723;
(statearr_19751[(12)] = inst_19667);

(statearr_19751[(14)] = inst_19666);

(statearr_19751[(15)] = inst_19665);

(statearr_19751[(16)] = inst_19664);

return statearr_19751;
})();
var statearr_19752_19797 = state_19723__$1;
(statearr_19752_19797[(2)] = null);

(statearr_19752_19797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (14))){
var state_19723__$1 = state_19723;
var statearr_19756_19798 = state_19723__$1;
(statearr_19756_19798[(2)] = null);

(statearr_19756_19798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (16))){
var inst_19678 = (state_19723[(10)]);
var inst_19682 = cljs.core.chunk_first.call(null,inst_19678);
var inst_19683 = cljs.core.chunk_rest.call(null,inst_19678);
var inst_19684 = cljs.core.count.call(null,inst_19682);
var inst_19664 = inst_19683;
var inst_19665 = inst_19682;
var inst_19666 = inst_19684;
var inst_19667 = (0);
var state_19723__$1 = (function (){var statearr_19757 = state_19723;
(statearr_19757[(12)] = inst_19667);

(statearr_19757[(14)] = inst_19666);

(statearr_19757[(15)] = inst_19665);

(statearr_19757[(16)] = inst_19664);

return statearr_19757;
})();
var statearr_19758_19799 = state_19723__$1;
(statearr_19758_19799[(2)] = null);

(statearr_19758_19799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (10))){
var inst_19667 = (state_19723[(12)]);
var inst_19666 = (state_19723[(14)]);
var inst_19665 = (state_19723[(15)]);
var inst_19664 = (state_19723[(16)]);
var inst_19672 = cljs.core._nth.call(null,inst_19665,inst_19667);
var inst_19673 = cljs.core.async.muxch_STAR_.call(null,inst_19672);
var inst_19674 = cljs.core.async.close_BANG_.call(null,inst_19673);
var inst_19675 = (inst_19667 + (1));
var tmp19753 = inst_19666;
var tmp19754 = inst_19665;
var tmp19755 = inst_19664;
var inst_19664__$1 = tmp19755;
var inst_19665__$1 = tmp19754;
var inst_19666__$1 = tmp19753;
var inst_19667__$1 = inst_19675;
var state_19723__$1 = (function (){var statearr_19759 = state_19723;
(statearr_19759[(12)] = inst_19667__$1);

(statearr_19759[(14)] = inst_19666__$1);

(statearr_19759[(15)] = inst_19665__$1);

(statearr_19759[(16)] = inst_19664__$1);

(statearr_19759[(17)] = inst_19674);

return statearr_19759;
})();
var statearr_19760_19800 = state_19723__$1;
(statearr_19760_19800[(2)] = null);

(statearr_19760_19800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (18))){
var inst_19693 = (state_19723[(2)]);
var state_19723__$1 = state_19723;
var statearr_19761_19801 = state_19723__$1;
(statearr_19761_19801[(2)] = inst_19693);

(statearr_19761_19801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19724 === (8))){
var inst_19667 = (state_19723[(12)]);
var inst_19666 = (state_19723[(14)]);
var inst_19669 = (inst_19667 < inst_19666);
var inst_19670 = inst_19669;
var state_19723__$1 = state_19723;
if(cljs.core.truth_(inst_19670)){
var statearr_19762_19802 = state_19723__$1;
(statearr_19762_19802[(1)] = (10));

} else {
var statearr_19763_19803 = state_19723__$1;
(statearr_19763_19803[(1)] = (11));

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
});})(c__9431__auto___19775,mults,ensure_mult,p))
;
return ((function (switch__9366__auto__,c__9431__auto___19775,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_19767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19767[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_19767[(1)] = (1));

return statearr_19767;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_19723){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_19723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e19768){if((e19768 instanceof Object)){
var ex__9370__auto__ = e19768;
var statearr_19769_19804 = state_19723;
(statearr_19769_19804[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19805 = state_19723;
state_19723 = G__19805;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_19723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_19723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___19775,mults,ensure_mult,p))
})();
var state__9433__auto__ = (function (){var statearr_19770 = f__9432__auto__.call(null);
(statearr_19770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___19775);

return statearr_19770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___19775,mults,ensure_mult,p))
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
var args19806 = [];
var len__5964__auto___19809 = arguments.length;
var i__5965__auto___19810 = (0);
while(true){
if((i__5965__auto___19810 < len__5964__auto___19809)){
args19806.push((arguments[i__5965__auto___19810]));

var G__19811 = (i__5965__auto___19810 + (1));
i__5965__auto___19810 = G__19811;
continue;
} else {
}
break;
}

var G__19808 = args19806.length;
switch (G__19808) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19806.length)].join('')));

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
var args19813 = [];
var len__5964__auto___19816 = arguments.length;
var i__5965__auto___19817 = (0);
while(true){
if((i__5965__auto___19817 < len__5964__auto___19816)){
args19813.push((arguments[i__5965__auto___19817]));

var G__19818 = (i__5965__auto___19817 + (1));
i__5965__auto___19817 = G__19818;
continue;
} else {
}
break;
}

var G__19815 = args19813.length;
switch (G__19815) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19813.length)].join('')));

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
var args19820 = [];
var len__5964__auto___19891 = arguments.length;
var i__5965__auto___19892 = (0);
while(true){
if((i__5965__auto___19892 < len__5964__auto___19891)){
args19820.push((arguments[i__5965__auto___19892]));

var G__19893 = (i__5965__auto___19892 + (1));
i__5965__auto___19892 = G__19893;
continue;
} else {
}
break;
}

var G__19822 = args19820.length;
switch (G__19822) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19820.length)].join('')));

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
var c__9431__auto___19895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___19895,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___19895,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19861){
var state_val_19862 = (state_19861[(1)]);
if((state_val_19862 === (7))){
var state_19861__$1 = state_19861;
var statearr_19863_19896 = state_19861__$1;
(statearr_19863_19896[(2)] = null);

(statearr_19863_19896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (1))){
var state_19861__$1 = state_19861;
var statearr_19864_19897 = state_19861__$1;
(statearr_19864_19897[(2)] = null);

(statearr_19864_19897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (4))){
var inst_19825 = (state_19861[(7)]);
var inst_19827 = (inst_19825 < cnt);
var state_19861__$1 = state_19861;
if(cljs.core.truth_(inst_19827)){
var statearr_19865_19898 = state_19861__$1;
(statearr_19865_19898[(1)] = (6));

} else {
var statearr_19866_19899 = state_19861__$1;
(statearr_19866_19899[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (15))){
var inst_19857 = (state_19861[(2)]);
var state_19861__$1 = state_19861;
var statearr_19867_19900 = state_19861__$1;
(statearr_19867_19900[(2)] = inst_19857);

(statearr_19867_19900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (13))){
var inst_19850 = cljs.core.async.close_BANG_.call(null,out);
var state_19861__$1 = state_19861;
var statearr_19868_19901 = state_19861__$1;
(statearr_19868_19901[(2)] = inst_19850);

(statearr_19868_19901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (6))){
var state_19861__$1 = state_19861;
var statearr_19869_19902 = state_19861__$1;
(statearr_19869_19902[(2)] = null);

(statearr_19869_19902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (3))){
var inst_19859 = (state_19861[(2)]);
var state_19861__$1 = state_19861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19861__$1,inst_19859);
} else {
if((state_val_19862 === (12))){
var inst_19847 = (state_19861[(8)]);
var inst_19847__$1 = (state_19861[(2)]);
var inst_19848 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19847__$1);
var state_19861__$1 = (function (){var statearr_19870 = state_19861;
(statearr_19870[(8)] = inst_19847__$1);

return statearr_19870;
})();
if(cljs.core.truth_(inst_19848)){
var statearr_19871_19903 = state_19861__$1;
(statearr_19871_19903[(1)] = (13));

} else {
var statearr_19872_19904 = state_19861__$1;
(statearr_19872_19904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (2))){
var inst_19824 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19825 = (0);
var state_19861__$1 = (function (){var statearr_19873 = state_19861;
(statearr_19873[(7)] = inst_19825);

(statearr_19873[(9)] = inst_19824);

return statearr_19873;
})();
var statearr_19874_19905 = state_19861__$1;
(statearr_19874_19905[(2)] = null);

(statearr_19874_19905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (11))){
var inst_19825 = (state_19861[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19861,(10),Object,null,(9));
var inst_19834 = chs__$1.call(null,inst_19825);
var inst_19835 = done.call(null,inst_19825);
var inst_19836 = cljs.core.async.take_BANG_.call(null,inst_19834,inst_19835);
var state_19861__$1 = state_19861;
var statearr_19875_19906 = state_19861__$1;
(statearr_19875_19906[(2)] = inst_19836);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (9))){
var inst_19825 = (state_19861[(7)]);
var inst_19838 = (state_19861[(2)]);
var inst_19839 = (inst_19825 + (1));
var inst_19825__$1 = inst_19839;
var state_19861__$1 = (function (){var statearr_19876 = state_19861;
(statearr_19876[(7)] = inst_19825__$1);

(statearr_19876[(10)] = inst_19838);

return statearr_19876;
})();
var statearr_19877_19907 = state_19861__$1;
(statearr_19877_19907[(2)] = null);

(statearr_19877_19907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (5))){
var inst_19845 = (state_19861[(2)]);
var state_19861__$1 = (function (){var statearr_19878 = state_19861;
(statearr_19878[(11)] = inst_19845);

return statearr_19878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19861__$1,(12),dchan);
} else {
if((state_val_19862 === (14))){
var inst_19847 = (state_19861[(8)]);
var inst_19852 = cljs.core.apply.call(null,f,inst_19847);
var state_19861__$1 = state_19861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19861__$1,(16),out,inst_19852);
} else {
if((state_val_19862 === (16))){
var inst_19854 = (state_19861[(2)]);
var state_19861__$1 = (function (){var statearr_19879 = state_19861;
(statearr_19879[(12)] = inst_19854);

return statearr_19879;
})();
var statearr_19880_19908 = state_19861__$1;
(statearr_19880_19908[(2)] = null);

(statearr_19880_19908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (10))){
var inst_19829 = (state_19861[(2)]);
var inst_19830 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19861__$1 = (function (){var statearr_19881 = state_19861;
(statearr_19881[(13)] = inst_19829);

return statearr_19881;
})();
var statearr_19882_19909 = state_19861__$1;
(statearr_19882_19909[(2)] = inst_19830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19862 === (8))){
var inst_19843 = (state_19861[(2)]);
var state_19861__$1 = state_19861;
var statearr_19883_19910 = state_19861__$1;
(statearr_19883_19910[(2)] = inst_19843);

(statearr_19883_19910[(1)] = (5));


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
});})(c__9431__auto___19895,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9366__auto__,c__9431__auto___19895,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_19887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19887[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_19887[(1)] = (1));

return statearr_19887;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_19861){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_19861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e19888){if((e19888 instanceof Object)){
var ex__9370__auto__ = e19888;
var statearr_19889_19911 = state_19861;
(statearr_19889_19911[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19912 = state_19861;
state_19861 = G__19912;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_19861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_19861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___19895,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9433__auto__ = (function (){var statearr_19890 = f__9432__auto__.call(null);
(statearr_19890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___19895);

return statearr_19890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___19895,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19914 = [];
var len__5964__auto___19970 = arguments.length;
var i__5965__auto___19971 = (0);
while(true){
if((i__5965__auto___19971 < len__5964__auto___19970)){
args19914.push((arguments[i__5965__auto___19971]));

var G__19972 = (i__5965__auto___19971 + (1));
i__5965__auto___19971 = G__19972;
continue;
} else {
}
break;
}

var G__19916 = args19914.length;
switch (G__19916) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19914.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9431__auto___19974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___19974,out){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___19974,out){
return (function (state_19946){
var state_val_19947 = (state_19946[(1)]);
if((state_val_19947 === (7))){
var inst_19925 = (state_19946[(7)]);
var inst_19926 = (state_19946[(8)]);
var inst_19925__$1 = (state_19946[(2)]);
var inst_19926__$1 = cljs.core.nth.call(null,inst_19925__$1,(0),null);
var inst_19927 = cljs.core.nth.call(null,inst_19925__$1,(1),null);
var inst_19928 = (inst_19926__$1 == null);
var state_19946__$1 = (function (){var statearr_19948 = state_19946;
(statearr_19948[(7)] = inst_19925__$1);

(statearr_19948[(9)] = inst_19927);

(statearr_19948[(8)] = inst_19926__$1);

return statearr_19948;
})();
if(cljs.core.truth_(inst_19928)){
var statearr_19949_19975 = state_19946__$1;
(statearr_19949_19975[(1)] = (8));

} else {
var statearr_19950_19976 = state_19946__$1;
(statearr_19950_19976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (1))){
var inst_19917 = cljs.core.vec.call(null,chs);
var inst_19918 = inst_19917;
var state_19946__$1 = (function (){var statearr_19951 = state_19946;
(statearr_19951[(10)] = inst_19918);

return statearr_19951;
})();
var statearr_19952_19977 = state_19946__$1;
(statearr_19952_19977[(2)] = null);

(statearr_19952_19977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (4))){
var inst_19918 = (state_19946[(10)]);
var state_19946__$1 = state_19946;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19946__$1,(7),inst_19918);
} else {
if((state_val_19947 === (6))){
var inst_19942 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
var statearr_19953_19978 = state_19946__$1;
(statearr_19953_19978[(2)] = inst_19942);

(statearr_19953_19978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (3))){
var inst_19944 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19946__$1,inst_19944);
} else {
if((state_val_19947 === (2))){
var inst_19918 = (state_19946[(10)]);
var inst_19920 = cljs.core.count.call(null,inst_19918);
var inst_19921 = (inst_19920 > (0));
var state_19946__$1 = state_19946;
if(cljs.core.truth_(inst_19921)){
var statearr_19955_19979 = state_19946__$1;
(statearr_19955_19979[(1)] = (4));

} else {
var statearr_19956_19980 = state_19946__$1;
(statearr_19956_19980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (11))){
var inst_19918 = (state_19946[(10)]);
var inst_19935 = (state_19946[(2)]);
var tmp19954 = inst_19918;
var inst_19918__$1 = tmp19954;
var state_19946__$1 = (function (){var statearr_19957 = state_19946;
(statearr_19957[(10)] = inst_19918__$1);

(statearr_19957[(11)] = inst_19935);

return statearr_19957;
})();
var statearr_19958_19981 = state_19946__$1;
(statearr_19958_19981[(2)] = null);

(statearr_19958_19981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (9))){
var inst_19926 = (state_19946[(8)]);
var state_19946__$1 = state_19946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19946__$1,(11),out,inst_19926);
} else {
if((state_val_19947 === (5))){
var inst_19940 = cljs.core.async.close_BANG_.call(null,out);
var state_19946__$1 = state_19946;
var statearr_19959_19982 = state_19946__$1;
(statearr_19959_19982[(2)] = inst_19940);

(statearr_19959_19982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (10))){
var inst_19938 = (state_19946[(2)]);
var state_19946__$1 = state_19946;
var statearr_19960_19983 = state_19946__$1;
(statearr_19960_19983[(2)] = inst_19938);

(statearr_19960_19983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19947 === (8))){
var inst_19918 = (state_19946[(10)]);
var inst_19925 = (state_19946[(7)]);
var inst_19927 = (state_19946[(9)]);
var inst_19926 = (state_19946[(8)]);
var inst_19930 = (function (){var cs = inst_19918;
var vec__19923 = inst_19925;
var v = inst_19926;
var c = inst_19927;
return ((function (cs,vec__19923,v,c,inst_19918,inst_19925,inst_19927,inst_19926,state_val_19947,c__9431__auto___19974,out){
return (function (p1__19913_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19913_SHARP_);
});
;})(cs,vec__19923,v,c,inst_19918,inst_19925,inst_19927,inst_19926,state_val_19947,c__9431__auto___19974,out))
})();
var inst_19931 = cljs.core.filterv.call(null,inst_19930,inst_19918);
var inst_19918__$1 = inst_19931;
var state_19946__$1 = (function (){var statearr_19961 = state_19946;
(statearr_19961[(10)] = inst_19918__$1);

return statearr_19961;
})();
var statearr_19962_19984 = state_19946__$1;
(statearr_19962_19984[(2)] = null);

(statearr_19962_19984[(1)] = (2));


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
});})(c__9431__auto___19974,out))
;
return ((function (switch__9366__auto__,c__9431__auto___19974,out){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_19966 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19966[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_19966[(1)] = (1));

return statearr_19966;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_19946){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_19946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e19967){if((e19967 instanceof Object)){
var ex__9370__auto__ = e19967;
var statearr_19968_19985 = state_19946;
(statearr_19968_19985[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19986 = state_19946;
state_19946 = G__19986;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_19946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_19946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___19974,out))
})();
var state__9433__auto__ = (function (){var statearr_19969 = f__9432__auto__.call(null);
(statearr_19969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___19974);

return statearr_19969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___19974,out))
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
var args19987 = [];
var len__5964__auto___20036 = arguments.length;
var i__5965__auto___20037 = (0);
while(true){
if((i__5965__auto___20037 < len__5964__auto___20036)){
args19987.push((arguments[i__5965__auto___20037]));

var G__20038 = (i__5965__auto___20037 + (1));
i__5965__auto___20037 = G__20038;
continue;
} else {
}
break;
}

var G__19989 = args19987.length;
switch (G__19989) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19987.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9431__auto___20040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___20040,out){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___20040,out){
return (function (state_20013){
var state_val_20014 = (state_20013[(1)]);
if((state_val_20014 === (7))){
var inst_19995 = (state_20013[(7)]);
var inst_19995__$1 = (state_20013[(2)]);
var inst_19996 = (inst_19995__$1 == null);
var inst_19997 = cljs.core.not.call(null,inst_19996);
var state_20013__$1 = (function (){var statearr_20015 = state_20013;
(statearr_20015[(7)] = inst_19995__$1);

return statearr_20015;
})();
if(inst_19997){
var statearr_20016_20041 = state_20013__$1;
(statearr_20016_20041[(1)] = (8));

} else {
var statearr_20017_20042 = state_20013__$1;
(statearr_20017_20042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (1))){
var inst_19990 = (0);
var state_20013__$1 = (function (){var statearr_20018 = state_20013;
(statearr_20018[(8)] = inst_19990);

return statearr_20018;
})();
var statearr_20019_20043 = state_20013__$1;
(statearr_20019_20043[(2)] = null);

(statearr_20019_20043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (4))){
var state_20013__$1 = state_20013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20013__$1,(7),ch);
} else {
if((state_val_20014 === (6))){
var inst_20008 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20020_20044 = state_20013__$1;
(statearr_20020_20044[(2)] = inst_20008);

(statearr_20020_20044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (3))){
var inst_20010 = (state_20013[(2)]);
var inst_20011 = cljs.core.async.close_BANG_.call(null,out);
var state_20013__$1 = (function (){var statearr_20021 = state_20013;
(statearr_20021[(9)] = inst_20010);

return statearr_20021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20013__$1,inst_20011);
} else {
if((state_val_20014 === (2))){
var inst_19990 = (state_20013[(8)]);
var inst_19992 = (inst_19990 < n);
var state_20013__$1 = state_20013;
if(cljs.core.truth_(inst_19992)){
var statearr_20022_20045 = state_20013__$1;
(statearr_20022_20045[(1)] = (4));

} else {
var statearr_20023_20046 = state_20013__$1;
(statearr_20023_20046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (11))){
var inst_19990 = (state_20013[(8)]);
var inst_20000 = (state_20013[(2)]);
var inst_20001 = (inst_19990 + (1));
var inst_19990__$1 = inst_20001;
var state_20013__$1 = (function (){var statearr_20024 = state_20013;
(statearr_20024[(8)] = inst_19990__$1);

(statearr_20024[(10)] = inst_20000);

return statearr_20024;
})();
var statearr_20025_20047 = state_20013__$1;
(statearr_20025_20047[(2)] = null);

(statearr_20025_20047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (9))){
var state_20013__$1 = state_20013;
var statearr_20026_20048 = state_20013__$1;
(statearr_20026_20048[(2)] = null);

(statearr_20026_20048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (5))){
var state_20013__$1 = state_20013;
var statearr_20027_20049 = state_20013__$1;
(statearr_20027_20049[(2)] = null);

(statearr_20027_20049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (10))){
var inst_20005 = (state_20013[(2)]);
var state_20013__$1 = state_20013;
var statearr_20028_20050 = state_20013__$1;
(statearr_20028_20050[(2)] = inst_20005);

(statearr_20028_20050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20014 === (8))){
var inst_19995 = (state_20013[(7)]);
var state_20013__$1 = state_20013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20013__$1,(11),out,inst_19995);
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
});})(c__9431__auto___20040,out))
;
return ((function (switch__9366__auto__,c__9431__auto___20040,out){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_20032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20032[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_20032[(1)] = (1));

return statearr_20032;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_20013){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_20013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e20033){if((e20033 instanceof Object)){
var ex__9370__auto__ = e20033;
var statearr_20034_20051 = state_20013;
(statearr_20034_20051[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20052 = state_20013;
state_20013 = G__20052;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_20013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_20013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___20040,out))
})();
var state__9433__auto__ = (function (){var statearr_20035 = f__9432__auto__.call(null);
(statearr_20035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___20040);

return statearr_20035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___20040,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20060 = (function (map_LT_,f,ch,meta20061){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20061 = meta20061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20062,meta20061__$1){
var self__ = this;
var _20062__$1 = this;
return (new cljs.core.async.t_cljs$core$async20060(self__.map_LT_,self__.f,self__.ch,meta20061__$1));
});

cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20062){
var self__ = this;
var _20062__$1 = this;
return self__.meta20061;
});

cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20063 = (function (map_LT_,f,ch,meta20061,_,fn1,meta20064){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20061 = meta20061;
this._ = _;
this.fn1 = fn1;
this.meta20064 = meta20064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20065,meta20064__$1){
var self__ = this;
var _20065__$1 = this;
return (new cljs.core.async.t_cljs$core$async20063(self__.map_LT_,self__.f,self__.ch,self__.meta20061,self__._,self__.fn1,meta20064__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20065){
var self__ = this;
var _20065__$1 = this;
return self__.meta20064;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20053_SHARP_){
return f1.call(null,(((p1__20053_SHARP_ == null))?null:self__.f.call(null,p1__20053_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20063.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20061","meta20061",-291877127,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20060","cljs.core.async/t_cljs$core$async20060",-511643003,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20064","meta20064",11608380,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20063";

cljs.core.async.t_cljs$core$async20063.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async20063");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20063 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20063(map_LT___$1,f__$1,ch__$1,meta20061__$1,___$2,fn1__$1,meta20064){
return (new cljs.core.async.t_cljs$core$async20063(map_LT___$1,f__$1,ch__$1,meta20061__$1,___$2,fn1__$1,meta20064));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20063(self__.map_LT_,self__.f,self__.ch,self__.meta20061,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4894__auto__ = ret;
if(cljs.core.truth_(and__4894__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4894__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20061","meta20061",-291877127,null)], null);
});

cljs.core.async.t_cljs$core$async20060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20060";

cljs.core.async.t_cljs$core$async20060.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async20060");
});

cljs.core.async.__GT_t_cljs$core$async20060 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20060(map_LT___$1,f__$1,ch__$1,meta20061){
return (new cljs.core.async.t_cljs$core$async20060(map_LT___$1,f__$1,ch__$1,meta20061));
});

}

return (new cljs.core.async.t_cljs$core$async20060(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20069 = (function (map_GT_,f,ch,meta20070){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20070 = meta20070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20071,meta20070__$1){
var self__ = this;
var _20071__$1 = this;
return (new cljs.core.async.t_cljs$core$async20069(self__.map_GT_,self__.f,self__.ch,meta20070__$1));
});

cljs.core.async.t_cljs$core$async20069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20071){
var self__ = this;
var _20071__$1 = this;
return self__.meta20070;
});

cljs.core.async.t_cljs$core$async20069.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20069.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20069.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20070","meta20070",-366425507,null)], null);
});

cljs.core.async.t_cljs$core$async20069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20069";

cljs.core.async.t_cljs$core$async20069.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async20069");
});

cljs.core.async.__GT_t_cljs$core$async20069 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20069(map_GT___$1,f__$1,ch__$1,meta20070){
return (new cljs.core.async.t_cljs$core$async20069(map_GT___$1,f__$1,ch__$1,meta20070));
});

}

return (new cljs.core.async.t_cljs$core$async20069(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20075 = (function (filter_GT_,p,ch,meta20076){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20076 = meta20076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20077,meta20076__$1){
var self__ = this;
var _20077__$1 = this;
return (new cljs.core.async.t_cljs$core$async20075(self__.filter_GT_,self__.p,self__.ch,meta20076__$1));
});

cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20077){
var self__ = this;
var _20077__$1 = this;
return self__.meta20076;
});

cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20075.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20076","meta20076",-1016377761,null)], null);
});

cljs.core.async.t_cljs$core$async20075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20075";

cljs.core.async.t_cljs$core$async20075.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async/t_cljs$core$async20075");
});

cljs.core.async.__GT_t_cljs$core$async20075 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20075(filter_GT___$1,p__$1,ch__$1,meta20076){
return (new cljs.core.async.t_cljs$core$async20075(filter_GT___$1,p__$1,ch__$1,meta20076));
});

}

return (new cljs.core.async.t_cljs$core$async20075(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args20078 = [];
var len__5964__auto___20122 = arguments.length;
var i__5965__auto___20123 = (0);
while(true){
if((i__5965__auto___20123 < len__5964__auto___20122)){
args20078.push((arguments[i__5965__auto___20123]));

var G__20124 = (i__5965__auto___20123 + (1));
i__5965__auto___20123 = G__20124;
continue;
} else {
}
break;
}

var G__20080 = args20078.length;
switch (G__20080) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20078.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9431__auto___20126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___20126,out){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___20126,out){
return (function (state_20101){
var state_val_20102 = (state_20101[(1)]);
if((state_val_20102 === (7))){
var inst_20097 = (state_20101[(2)]);
var state_20101__$1 = state_20101;
var statearr_20103_20127 = state_20101__$1;
(statearr_20103_20127[(2)] = inst_20097);

(statearr_20103_20127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20102 === (1))){
var state_20101__$1 = state_20101;
var statearr_20104_20128 = state_20101__$1;
(statearr_20104_20128[(2)] = null);

(statearr_20104_20128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20102 === (4))){
var inst_20083 = (state_20101[(7)]);
var inst_20083__$1 = (state_20101[(2)]);
var inst_20084 = (inst_20083__$1 == null);
var state_20101__$1 = (function (){var statearr_20105 = state_20101;
(statearr_20105[(7)] = inst_20083__$1);

return statearr_20105;
})();
if(cljs.core.truth_(inst_20084)){
var statearr_20106_20129 = state_20101__$1;
(statearr_20106_20129[(1)] = (5));

} else {
var statearr_20107_20130 = state_20101__$1;
(statearr_20107_20130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20102 === (6))){
var inst_20083 = (state_20101[(7)]);
var inst_20088 = p.call(null,inst_20083);
var state_20101__$1 = state_20101;
if(cljs.core.truth_(inst_20088)){
var statearr_20108_20131 = state_20101__$1;
(statearr_20108_20131[(1)] = (8));

} else {
var statearr_20109_20132 = state_20101__$1;
(statearr_20109_20132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20102 === (3))){
var inst_20099 = (state_20101[(2)]);
var state_20101__$1 = state_20101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20101__$1,inst_20099);
} else {
if((state_val_20102 === (2))){
var state_20101__$1 = state_20101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20101__$1,(4),ch);
} else {
if((state_val_20102 === (11))){
var inst_20091 = (state_20101[(2)]);
var state_20101__$1 = state_20101;
var statearr_20110_20133 = state_20101__$1;
(statearr_20110_20133[(2)] = inst_20091);

(statearr_20110_20133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20102 === (9))){
var state_20101__$1 = state_20101;
var statearr_20111_20134 = state_20101__$1;
(statearr_20111_20134[(2)] = null);

(statearr_20111_20134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20102 === (5))){
var inst_20086 = cljs.core.async.close_BANG_.call(null,out);
var state_20101__$1 = state_20101;
var statearr_20112_20135 = state_20101__$1;
(statearr_20112_20135[(2)] = inst_20086);

(statearr_20112_20135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20102 === (10))){
var inst_20094 = (state_20101[(2)]);
var state_20101__$1 = (function (){var statearr_20113 = state_20101;
(statearr_20113[(8)] = inst_20094);

return statearr_20113;
})();
var statearr_20114_20136 = state_20101__$1;
(statearr_20114_20136[(2)] = null);

(statearr_20114_20136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20102 === (8))){
var inst_20083 = (state_20101[(7)]);
var state_20101__$1 = state_20101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20101__$1,(11),out,inst_20083);
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
});})(c__9431__auto___20126,out))
;
return ((function (switch__9366__auto__,c__9431__auto___20126,out){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_20118 = [null,null,null,null,null,null,null,null,null];
(statearr_20118[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_20118[(1)] = (1));

return statearr_20118;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_20101){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_20101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e20119){if((e20119 instanceof Object)){
var ex__9370__auto__ = e20119;
var statearr_20120_20137 = state_20101;
(statearr_20120_20137[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20138 = state_20101;
state_20101 = G__20138;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_20101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_20101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___20126,out))
})();
var state__9433__auto__ = (function (){var statearr_20121 = f__9432__auto__.call(null);
(statearr_20121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___20126);

return statearr_20121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___20126,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20139 = [];
var len__5964__auto___20142 = arguments.length;
var i__5965__auto___20143 = (0);
while(true){
if((i__5965__auto___20143 < len__5964__auto___20142)){
args20139.push((arguments[i__5965__auto___20143]));

var G__20144 = (i__5965__auto___20143 + (1));
i__5965__auto___20143 = G__20144;
continue;
} else {
}
break;
}

var G__20141 = args20139.length;
switch (G__20141) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20139.length)].join('')));

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
var c__9431__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto__){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto__){
return (function (state_20311){
var state_val_20312 = (state_20311[(1)]);
if((state_val_20312 === (7))){
var inst_20307 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20313_20354 = state_20311__$1;
(statearr_20313_20354[(2)] = inst_20307);

(statearr_20313_20354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (20))){
var inst_20277 = (state_20311[(7)]);
var inst_20288 = (state_20311[(2)]);
var inst_20289 = cljs.core.next.call(null,inst_20277);
var inst_20263 = inst_20289;
var inst_20264 = null;
var inst_20265 = (0);
var inst_20266 = (0);
var state_20311__$1 = (function (){var statearr_20314 = state_20311;
(statearr_20314[(8)] = inst_20263);

(statearr_20314[(9)] = inst_20265);

(statearr_20314[(10)] = inst_20266);

(statearr_20314[(11)] = inst_20264);

(statearr_20314[(12)] = inst_20288);

return statearr_20314;
})();
var statearr_20315_20355 = state_20311__$1;
(statearr_20315_20355[(2)] = null);

(statearr_20315_20355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (1))){
var state_20311__$1 = state_20311;
var statearr_20316_20356 = state_20311__$1;
(statearr_20316_20356[(2)] = null);

(statearr_20316_20356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (4))){
var inst_20252 = (state_20311[(13)]);
var inst_20252__$1 = (state_20311[(2)]);
var inst_20253 = (inst_20252__$1 == null);
var state_20311__$1 = (function (){var statearr_20317 = state_20311;
(statearr_20317[(13)] = inst_20252__$1);

return statearr_20317;
})();
if(cljs.core.truth_(inst_20253)){
var statearr_20318_20357 = state_20311__$1;
(statearr_20318_20357[(1)] = (5));

} else {
var statearr_20319_20358 = state_20311__$1;
(statearr_20319_20358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (15))){
var state_20311__$1 = state_20311;
var statearr_20323_20359 = state_20311__$1;
(statearr_20323_20359[(2)] = null);

(statearr_20323_20359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (21))){
var state_20311__$1 = state_20311;
var statearr_20324_20360 = state_20311__$1;
(statearr_20324_20360[(2)] = null);

(statearr_20324_20360[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (13))){
var inst_20263 = (state_20311[(8)]);
var inst_20265 = (state_20311[(9)]);
var inst_20266 = (state_20311[(10)]);
var inst_20264 = (state_20311[(11)]);
var inst_20273 = (state_20311[(2)]);
var inst_20274 = (inst_20266 + (1));
var tmp20320 = inst_20263;
var tmp20321 = inst_20265;
var tmp20322 = inst_20264;
var inst_20263__$1 = tmp20320;
var inst_20264__$1 = tmp20322;
var inst_20265__$1 = tmp20321;
var inst_20266__$1 = inst_20274;
var state_20311__$1 = (function (){var statearr_20325 = state_20311;
(statearr_20325[(8)] = inst_20263__$1);

(statearr_20325[(14)] = inst_20273);

(statearr_20325[(9)] = inst_20265__$1);

(statearr_20325[(10)] = inst_20266__$1);

(statearr_20325[(11)] = inst_20264__$1);

return statearr_20325;
})();
var statearr_20326_20361 = state_20311__$1;
(statearr_20326_20361[(2)] = null);

(statearr_20326_20361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (22))){
var state_20311__$1 = state_20311;
var statearr_20327_20362 = state_20311__$1;
(statearr_20327_20362[(2)] = null);

(statearr_20327_20362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (6))){
var inst_20252 = (state_20311[(13)]);
var inst_20261 = f.call(null,inst_20252);
var inst_20262 = cljs.core.seq.call(null,inst_20261);
var inst_20263 = inst_20262;
var inst_20264 = null;
var inst_20265 = (0);
var inst_20266 = (0);
var state_20311__$1 = (function (){var statearr_20328 = state_20311;
(statearr_20328[(8)] = inst_20263);

(statearr_20328[(9)] = inst_20265);

(statearr_20328[(10)] = inst_20266);

(statearr_20328[(11)] = inst_20264);

return statearr_20328;
})();
var statearr_20329_20363 = state_20311__$1;
(statearr_20329_20363[(2)] = null);

(statearr_20329_20363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (17))){
var inst_20277 = (state_20311[(7)]);
var inst_20281 = cljs.core.chunk_first.call(null,inst_20277);
var inst_20282 = cljs.core.chunk_rest.call(null,inst_20277);
var inst_20283 = cljs.core.count.call(null,inst_20281);
var inst_20263 = inst_20282;
var inst_20264 = inst_20281;
var inst_20265 = inst_20283;
var inst_20266 = (0);
var state_20311__$1 = (function (){var statearr_20330 = state_20311;
(statearr_20330[(8)] = inst_20263);

(statearr_20330[(9)] = inst_20265);

(statearr_20330[(10)] = inst_20266);

(statearr_20330[(11)] = inst_20264);

return statearr_20330;
})();
var statearr_20331_20364 = state_20311__$1;
(statearr_20331_20364[(2)] = null);

(statearr_20331_20364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (3))){
var inst_20309 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20311__$1,inst_20309);
} else {
if((state_val_20312 === (12))){
var inst_20297 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20332_20365 = state_20311__$1;
(statearr_20332_20365[(2)] = inst_20297);

(statearr_20332_20365[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (2))){
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20311__$1,(4),in$);
} else {
if((state_val_20312 === (23))){
var inst_20305 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20333_20366 = state_20311__$1;
(statearr_20333_20366[(2)] = inst_20305);

(statearr_20333_20366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (19))){
var inst_20292 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20334_20367 = state_20311__$1;
(statearr_20334_20367[(2)] = inst_20292);

(statearr_20334_20367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (11))){
var inst_20263 = (state_20311[(8)]);
var inst_20277 = (state_20311[(7)]);
var inst_20277__$1 = cljs.core.seq.call(null,inst_20263);
var state_20311__$1 = (function (){var statearr_20335 = state_20311;
(statearr_20335[(7)] = inst_20277__$1);

return statearr_20335;
})();
if(inst_20277__$1){
var statearr_20336_20368 = state_20311__$1;
(statearr_20336_20368[(1)] = (14));

} else {
var statearr_20337_20369 = state_20311__$1;
(statearr_20337_20369[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (9))){
var inst_20299 = (state_20311[(2)]);
var inst_20300 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20311__$1 = (function (){var statearr_20338 = state_20311;
(statearr_20338[(15)] = inst_20299);

return statearr_20338;
})();
if(cljs.core.truth_(inst_20300)){
var statearr_20339_20370 = state_20311__$1;
(statearr_20339_20370[(1)] = (21));

} else {
var statearr_20340_20371 = state_20311__$1;
(statearr_20340_20371[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (5))){
var inst_20255 = cljs.core.async.close_BANG_.call(null,out);
var state_20311__$1 = state_20311;
var statearr_20341_20372 = state_20311__$1;
(statearr_20341_20372[(2)] = inst_20255);

(statearr_20341_20372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (14))){
var inst_20277 = (state_20311[(7)]);
var inst_20279 = cljs.core.chunked_seq_QMARK_.call(null,inst_20277);
var state_20311__$1 = state_20311;
if(inst_20279){
var statearr_20342_20373 = state_20311__$1;
(statearr_20342_20373[(1)] = (17));

} else {
var statearr_20343_20374 = state_20311__$1;
(statearr_20343_20374[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (16))){
var inst_20295 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20344_20375 = state_20311__$1;
(statearr_20344_20375[(2)] = inst_20295);

(statearr_20344_20375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (10))){
var inst_20266 = (state_20311[(10)]);
var inst_20264 = (state_20311[(11)]);
var inst_20271 = cljs.core._nth.call(null,inst_20264,inst_20266);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20311__$1,(13),out,inst_20271);
} else {
if((state_val_20312 === (18))){
var inst_20277 = (state_20311[(7)]);
var inst_20286 = cljs.core.first.call(null,inst_20277);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20311__$1,(20),out,inst_20286);
} else {
if((state_val_20312 === (8))){
var inst_20265 = (state_20311[(9)]);
var inst_20266 = (state_20311[(10)]);
var inst_20268 = (inst_20266 < inst_20265);
var inst_20269 = inst_20268;
var state_20311__$1 = state_20311;
if(cljs.core.truth_(inst_20269)){
var statearr_20345_20376 = state_20311__$1;
(statearr_20345_20376[(1)] = (10));

} else {
var statearr_20346_20377 = state_20311__$1;
(statearr_20346_20377[(1)] = (11));

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
});})(c__9431__auto__))
;
return ((function (switch__9366__auto__,c__9431__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9367__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9367__auto____0 = (function (){
var statearr_20350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20350[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9367__auto__);

(statearr_20350[(1)] = (1));

return statearr_20350;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9367__auto____1 = (function (state_20311){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_20311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e20351){if((e20351 instanceof Object)){
var ex__9370__auto__ = e20351;
var statearr_20352_20378 = state_20311;
(statearr_20352_20378[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20379 = state_20311;
state_20311 = G__20379;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9367__auto__ = function(state_20311){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9367__auto____1.call(this,state_20311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9367__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9367__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto__))
})();
var state__9433__auto__ = (function (){var statearr_20353 = f__9432__auto__.call(null);
(statearr_20353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto__);

return statearr_20353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto__))
);

return c__9431__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20380 = [];
var len__5964__auto___20383 = arguments.length;
var i__5965__auto___20384 = (0);
while(true){
if((i__5965__auto___20384 < len__5964__auto___20383)){
args20380.push((arguments[i__5965__auto___20384]));

var G__20385 = (i__5965__auto___20384 + (1));
i__5965__auto___20384 = G__20385;
continue;
} else {
}
break;
}

var G__20382 = args20380.length;
switch (G__20382) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20380.length)].join('')));

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
var args20387 = [];
var len__5964__auto___20390 = arguments.length;
var i__5965__auto___20391 = (0);
while(true){
if((i__5965__auto___20391 < len__5964__auto___20390)){
args20387.push((arguments[i__5965__auto___20391]));

var G__20392 = (i__5965__auto___20391 + (1));
i__5965__auto___20391 = G__20392;
continue;
} else {
}
break;
}

var G__20389 = args20387.length;
switch (G__20389) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20387.length)].join('')));

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
var args20394 = [];
var len__5964__auto___20445 = arguments.length;
var i__5965__auto___20446 = (0);
while(true){
if((i__5965__auto___20446 < len__5964__auto___20445)){
args20394.push((arguments[i__5965__auto___20446]));

var G__20447 = (i__5965__auto___20446 + (1));
i__5965__auto___20446 = G__20447;
continue;
} else {
}
break;
}

var G__20396 = args20394.length;
switch (G__20396) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20394.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9431__auto___20449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___20449,out){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___20449,out){
return (function (state_20420){
var state_val_20421 = (state_20420[(1)]);
if((state_val_20421 === (7))){
var inst_20415 = (state_20420[(2)]);
var state_20420__$1 = state_20420;
var statearr_20422_20450 = state_20420__$1;
(statearr_20422_20450[(2)] = inst_20415);

(statearr_20422_20450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (1))){
var inst_20397 = null;
var state_20420__$1 = (function (){var statearr_20423 = state_20420;
(statearr_20423[(7)] = inst_20397);

return statearr_20423;
})();
var statearr_20424_20451 = state_20420__$1;
(statearr_20424_20451[(2)] = null);

(statearr_20424_20451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (4))){
var inst_20400 = (state_20420[(8)]);
var inst_20400__$1 = (state_20420[(2)]);
var inst_20401 = (inst_20400__$1 == null);
var inst_20402 = cljs.core.not.call(null,inst_20401);
var state_20420__$1 = (function (){var statearr_20425 = state_20420;
(statearr_20425[(8)] = inst_20400__$1);

return statearr_20425;
})();
if(inst_20402){
var statearr_20426_20452 = state_20420__$1;
(statearr_20426_20452[(1)] = (5));

} else {
var statearr_20427_20453 = state_20420__$1;
(statearr_20427_20453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (6))){
var state_20420__$1 = state_20420;
var statearr_20428_20454 = state_20420__$1;
(statearr_20428_20454[(2)] = null);

(statearr_20428_20454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (3))){
var inst_20417 = (state_20420[(2)]);
var inst_20418 = cljs.core.async.close_BANG_.call(null,out);
var state_20420__$1 = (function (){var statearr_20429 = state_20420;
(statearr_20429[(9)] = inst_20417);

return statearr_20429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20420__$1,inst_20418);
} else {
if((state_val_20421 === (2))){
var state_20420__$1 = state_20420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20420__$1,(4),ch);
} else {
if((state_val_20421 === (11))){
var inst_20400 = (state_20420[(8)]);
var inst_20409 = (state_20420[(2)]);
var inst_20397 = inst_20400;
var state_20420__$1 = (function (){var statearr_20430 = state_20420;
(statearr_20430[(10)] = inst_20409);

(statearr_20430[(7)] = inst_20397);

return statearr_20430;
})();
var statearr_20431_20455 = state_20420__$1;
(statearr_20431_20455[(2)] = null);

(statearr_20431_20455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (9))){
var inst_20400 = (state_20420[(8)]);
var state_20420__$1 = state_20420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20420__$1,(11),out,inst_20400);
} else {
if((state_val_20421 === (5))){
var inst_20400 = (state_20420[(8)]);
var inst_20397 = (state_20420[(7)]);
var inst_20404 = cljs.core._EQ_.call(null,inst_20400,inst_20397);
var state_20420__$1 = state_20420;
if(inst_20404){
var statearr_20433_20456 = state_20420__$1;
(statearr_20433_20456[(1)] = (8));

} else {
var statearr_20434_20457 = state_20420__$1;
(statearr_20434_20457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (10))){
var inst_20412 = (state_20420[(2)]);
var state_20420__$1 = state_20420;
var statearr_20435_20458 = state_20420__$1;
(statearr_20435_20458[(2)] = inst_20412);

(statearr_20435_20458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20421 === (8))){
var inst_20397 = (state_20420[(7)]);
var tmp20432 = inst_20397;
var inst_20397__$1 = tmp20432;
var state_20420__$1 = (function (){var statearr_20436 = state_20420;
(statearr_20436[(7)] = inst_20397__$1);

return statearr_20436;
})();
var statearr_20437_20459 = state_20420__$1;
(statearr_20437_20459[(2)] = null);

(statearr_20437_20459[(1)] = (2));


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
});})(c__9431__auto___20449,out))
;
return ((function (switch__9366__auto__,c__9431__auto___20449,out){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_20441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20441[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_20441[(1)] = (1));

return statearr_20441;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_20420){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_20420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e20442){if((e20442 instanceof Object)){
var ex__9370__auto__ = e20442;
var statearr_20443_20460 = state_20420;
(statearr_20443_20460[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20461 = state_20420;
state_20420 = G__20461;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_20420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_20420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___20449,out))
})();
var state__9433__auto__ = (function (){var statearr_20444 = f__9432__auto__.call(null);
(statearr_20444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___20449);

return statearr_20444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___20449,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20462 = [];
var len__5964__auto___20532 = arguments.length;
var i__5965__auto___20533 = (0);
while(true){
if((i__5965__auto___20533 < len__5964__auto___20532)){
args20462.push((arguments[i__5965__auto___20533]));

var G__20534 = (i__5965__auto___20533 + (1));
i__5965__auto___20533 = G__20534;
continue;
} else {
}
break;
}

var G__20464 = args20462.length;
switch (G__20464) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20462.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9431__auto___20536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___20536,out){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___20536,out){
return (function (state_20502){
var state_val_20503 = (state_20502[(1)]);
if((state_val_20503 === (7))){
var inst_20498 = (state_20502[(2)]);
var state_20502__$1 = state_20502;
var statearr_20504_20537 = state_20502__$1;
(statearr_20504_20537[(2)] = inst_20498);

(statearr_20504_20537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (1))){
var inst_20465 = (new Array(n));
var inst_20466 = inst_20465;
var inst_20467 = (0);
var state_20502__$1 = (function (){var statearr_20505 = state_20502;
(statearr_20505[(7)] = inst_20466);

(statearr_20505[(8)] = inst_20467);

return statearr_20505;
})();
var statearr_20506_20538 = state_20502__$1;
(statearr_20506_20538[(2)] = null);

(statearr_20506_20538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (4))){
var inst_20470 = (state_20502[(9)]);
var inst_20470__$1 = (state_20502[(2)]);
var inst_20471 = (inst_20470__$1 == null);
var inst_20472 = cljs.core.not.call(null,inst_20471);
var state_20502__$1 = (function (){var statearr_20507 = state_20502;
(statearr_20507[(9)] = inst_20470__$1);

return statearr_20507;
})();
if(inst_20472){
var statearr_20508_20539 = state_20502__$1;
(statearr_20508_20539[(1)] = (5));

} else {
var statearr_20509_20540 = state_20502__$1;
(statearr_20509_20540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (15))){
var inst_20492 = (state_20502[(2)]);
var state_20502__$1 = state_20502;
var statearr_20510_20541 = state_20502__$1;
(statearr_20510_20541[(2)] = inst_20492);

(statearr_20510_20541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (13))){
var state_20502__$1 = state_20502;
var statearr_20511_20542 = state_20502__$1;
(statearr_20511_20542[(2)] = null);

(statearr_20511_20542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (6))){
var inst_20467 = (state_20502[(8)]);
var inst_20488 = (inst_20467 > (0));
var state_20502__$1 = state_20502;
if(cljs.core.truth_(inst_20488)){
var statearr_20512_20543 = state_20502__$1;
(statearr_20512_20543[(1)] = (12));

} else {
var statearr_20513_20544 = state_20502__$1;
(statearr_20513_20544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (3))){
var inst_20500 = (state_20502[(2)]);
var state_20502__$1 = state_20502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20502__$1,inst_20500);
} else {
if((state_val_20503 === (12))){
var inst_20466 = (state_20502[(7)]);
var inst_20490 = cljs.core.vec.call(null,inst_20466);
var state_20502__$1 = state_20502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20502__$1,(15),out,inst_20490);
} else {
if((state_val_20503 === (2))){
var state_20502__$1 = state_20502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20502__$1,(4),ch);
} else {
if((state_val_20503 === (11))){
var inst_20482 = (state_20502[(2)]);
var inst_20483 = (new Array(n));
var inst_20466 = inst_20483;
var inst_20467 = (0);
var state_20502__$1 = (function (){var statearr_20514 = state_20502;
(statearr_20514[(10)] = inst_20482);

(statearr_20514[(7)] = inst_20466);

(statearr_20514[(8)] = inst_20467);

return statearr_20514;
})();
var statearr_20515_20545 = state_20502__$1;
(statearr_20515_20545[(2)] = null);

(statearr_20515_20545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (9))){
var inst_20466 = (state_20502[(7)]);
var inst_20480 = cljs.core.vec.call(null,inst_20466);
var state_20502__$1 = state_20502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20502__$1,(11),out,inst_20480);
} else {
if((state_val_20503 === (5))){
var inst_20470 = (state_20502[(9)]);
var inst_20466 = (state_20502[(7)]);
var inst_20467 = (state_20502[(8)]);
var inst_20475 = (state_20502[(11)]);
var inst_20474 = (inst_20466[inst_20467] = inst_20470);
var inst_20475__$1 = (inst_20467 + (1));
var inst_20476 = (inst_20475__$1 < n);
var state_20502__$1 = (function (){var statearr_20516 = state_20502;
(statearr_20516[(12)] = inst_20474);

(statearr_20516[(11)] = inst_20475__$1);

return statearr_20516;
})();
if(cljs.core.truth_(inst_20476)){
var statearr_20517_20546 = state_20502__$1;
(statearr_20517_20546[(1)] = (8));

} else {
var statearr_20518_20547 = state_20502__$1;
(statearr_20518_20547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (14))){
var inst_20495 = (state_20502[(2)]);
var inst_20496 = cljs.core.async.close_BANG_.call(null,out);
var state_20502__$1 = (function (){var statearr_20520 = state_20502;
(statearr_20520[(13)] = inst_20495);

return statearr_20520;
})();
var statearr_20521_20548 = state_20502__$1;
(statearr_20521_20548[(2)] = inst_20496);

(statearr_20521_20548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (10))){
var inst_20486 = (state_20502[(2)]);
var state_20502__$1 = state_20502;
var statearr_20522_20549 = state_20502__$1;
(statearr_20522_20549[(2)] = inst_20486);

(statearr_20522_20549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20503 === (8))){
var inst_20466 = (state_20502[(7)]);
var inst_20475 = (state_20502[(11)]);
var tmp20519 = inst_20466;
var inst_20466__$1 = tmp20519;
var inst_20467 = inst_20475;
var state_20502__$1 = (function (){var statearr_20523 = state_20502;
(statearr_20523[(7)] = inst_20466__$1);

(statearr_20523[(8)] = inst_20467);

return statearr_20523;
})();
var statearr_20524_20550 = state_20502__$1;
(statearr_20524_20550[(2)] = null);

(statearr_20524_20550[(1)] = (2));


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
});})(c__9431__auto___20536,out))
;
return ((function (switch__9366__auto__,c__9431__auto___20536,out){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_20528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20528[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_20528[(1)] = (1));

return statearr_20528;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_20502){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_20502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e20529){if((e20529 instanceof Object)){
var ex__9370__auto__ = e20529;
var statearr_20530_20551 = state_20502;
(statearr_20530_20551[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20552 = state_20502;
state_20502 = G__20552;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_20502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_20502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___20536,out))
})();
var state__9433__auto__ = (function (){var statearr_20531 = f__9432__auto__.call(null);
(statearr_20531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___20536);

return statearr_20531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___20536,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20553 = [];
var len__5964__auto___20627 = arguments.length;
var i__5965__auto___20628 = (0);
while(true){
if((i__5965__auto___20628 < len__5964__auto___20627)){
args20553.push((arguments[i__5965__auto___20628]));

var G__20629 = (i__5965__auto___20628 + (1));
i__5965__auto___20628 = G__20629;
continue;
} else {
}
break;
}

var G__20555 = args20553.length;
switch (G__20555) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20553.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9431__auto___20631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9431__auto___20631,out){
return (function (){
var f__9432__auto__ = (function (){var switch__9366__auto__ = ((function (c__9431__auto___20631,out){
return (function (state_20597){
var state_val_20598 = (state_20597[(1)]);
if((state_val_20598 === (7))){
var inst_20593 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
var statearr_20599_20632 = state_20597__$1;
(statearr_20599_20632[(2)] = inst_20593);

(statearr_20599_20632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (1))){
var inst_20556 = [];
var inst_20557 = inst_20556;
var inst_20558 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20597__$1 = (function (){var statearr_20600 = state_20597;
(statearr_20600[(7)] = inst_20558);

(statearr_20600[(8)] = inst_20557);

return statearr_20600;
})();
var statearr_20601_20633 = state_20597__$1;
(statearr_20601_20633[(2)] = null);

(statearr_20601_20633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (4))){
var inst_20561 = (state_20597[(9)]);
var inst_20561__$1 = (state_20597[(2)]);
var inst_20562 = (inst_20561__$1 == null);
var inst_20563 = cljs.core.not.call(null,inst_20562);
var state_20597__$1 = (function (){var statearr_20602 = state_20597;
(statearr_20602[(9)] = inst_20561__$1);

return statearr_20602;
})();
if(inst_20563){
var statearr_20603_20634 = state_20597__$1;
(statearr_20603_20634[(1)] = (5));

} else {
var statearr_20604_20635 = state_20597__$1;
(statearr_20604_20635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (15))){
var inst_20587 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
var statearr_20605_20636 = state_20597__$1;
(statearr_20605_20636[(2)] = inst_20587);

(statearr_20605_20636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (13))){
var state_20597__$1 = state_20597;
var statearr_20606_20637 = state_20597__$1;
(statearr_20606_20637[(2)] = null);

(statearr_20606_20637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (6))){
var inst_20557 = (state_20597[(8)]);
var inst_20582 = inst_20557.length;
var inst_20583 = (inst_20582 > (0));
var state_20597__$1 = state_20597;
if(cljs.core.truth_(inst_20583)){
var statearr_20607_20638 = state_20597__$1;
(statearr_20607_20638[(1)] = (12));

} else {
var statearr_20608_20639 = state_20597__$1;
(statearr_20608_20639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (3))){
var inst_20595 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20597__$1,inst_20595);
} else {
if((state_val_20598 === (12))){
var inst_20557 = (state_20597[(8)]);
var inst_20585 = cljs.core.vec.call(null,inst_20557);
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20597__$1,(15),out,inst_20585);
} else {
if((state_val_20598 === (2))){
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20597__$1,(4),ch);
} else {
if((state_val_20598 === (11))){
var inst_20565 = (state_20597[(10)]);
var inst_20561 = (state_20597[(9)]);
var inst_20575 = (state_20597[(2)]);
var inst_20576 = [];
var inst_20577 = inst_20576.push(inst_20561);
var inst_20557 = inst_20576;
var inst_20558 = inst_20565;
var state_20597__$1 = (function (){var statearr_20609 = state_20597;
(statearr_20609[(11)] = inst_20575);

(statearr_20609[(7)] = inst_20558);

(statearr_20609[(12)] = inst_20577);

(statearr_20609[(8)] = inst_20557);

return statearr_20609;
})();
var statearr_20610_20640 = state_20597__$1;
(statearr_20610_20640[(2)] = null);

(statearr_20610_20640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (9))){
var inst_20557 = (state_20597[(8)]);
var inst_20573 = cljs.core.vec.call(null,inst_20557);
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20597__$1,(11),out,inst_20573);
} else {
if((state_val_20598 === (5))){
var inst_20565 = (state_20597[(10)]);
var inst_20561 = (state_20597[(9)]);
var inst_20558 = (state_20597[(7)]);
var inst_20565__$1 = f.call(null,inst_20561);
var inst_20566 = cljs.core._EQ_.call(null,inst_20565__$1,inst_20558);
var inst_20567 = cljs.core.keyword_identical_QMARK_.call(null,inst_20558,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20568 = (inst_20566) || (inst_20567);
var state_20597__$1 = (function (){var statearr_20611 = state_20597;
(statearr_20611[(10)] = inst_20565__$1);

return statearr_20611;
})();
if(cljs.core.truth_(inst_20568)){
var statearr_20612_20641 = state_20597__$1;
(statearr_20612_20641[(1)] = (8));

} else {
var statearr_20613_20642 = state_20597__$1;
(statearr_20613_20642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (14))){
var inst_20590 = (state_20597[(2)]);
var inst_20591 = cljs.core.async.close_BANG_.call(null,out);
var state_20597__$1 = (function (){var statearr_20615 = state_20597;
(statearr_20615[(13)] = inst_20590);

return statearr_20615;
})();
var statearr_20616_20643 = state_20597__$1;
(statearr_20616_20643[(2)] = inst_20591);

(statearr_20616_20643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (10))){
var inst_20580 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
var statearr_20617_20644 = state_20597__$1;
(statearr_20617_20644[(2)] = inst_20580);

(statearr_20617_20644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (8))){
var inst_20565 = (state_20597[(10)]);
var inst_20561 = (state_20597[(9)]);
var inst_20557 = (state_20597[(8)]);
var inst_20570 = inst_20557.push(inst_20561);
var tmp20614 = inst_20557;
var inst_20557__$1 = tmp20614;
var inst_20558 = inst_20565;
var state_20597__$1 = (function (){var statearr_20618 = state_20597;
(statearr_20618[(14)] = inst_20570);

(statearr_20618[(7)] = inst_20558);

(statearr_20618[(8)] = inst_20557__$1);

return statearr_20618;
})();
var statearr_20619_20645 = state_20597__$1;
(statearr_20619_20645[(2)] = null);

(statearr_20619_20645[(1)] = (2));


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
});})(c__9431__auto___20631,out))
;
return ((function (switch__9366__auto__,c__9431__auto___20631,out){
return (function() {
var cljs$core$async$state_machine__9367__auto__ = null;
var cljs$core$async$state_machine__9367__auto____0 = (function (){
var statearr_20623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20623[(0)] = cljs$core$async$state_machine__9367__auto__);

(statearr_20623[(1)] = (1));

return statearr_20623;
});
var cljs$core$async$state_machine__9367__auto____1 = (function (state_20597){
while(true){
var ret_value__9368__auto__ = (function (){try{while(true){
var result__9369__auto__ = switch__9366__auto__.call(null,state_20597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9369__auto__;
}
break;
}
}catch (e20624){if((e20624 instanceof Object)){
var ex__9370__auto__ = e20624;
var statearr_20625_20646 = state_20597;
(statearr_20625_20646[(5)] = ex__9370__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20647 = state_20597;
state_20597 = G__20647;
continue;
} else {
return ret_value__9368__auto__;
}
break;
}
});
cljs$core$async$state_machine__9367__auto__ = function(state_20597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9367__auto____1.call(this,state_20597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9367__auto____0;
cljs$core$async$state_machine__9367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9367__auto____1;
return cljs$core$async$state_machine__9367__auto__;
})()
;})(switch__9366__auto__,c__9431__auto___20631,out))
})();
var state__9433__auto__ = (function (){var statearr_20626 = f__9432__auto__.call(null);
(statearr_20626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9431__auto___20631);

return statearr_20626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9433__auto__);
});})(c__9431__auto___20631,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map