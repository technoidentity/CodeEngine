// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(var_args){
var args__5971__auto__ = [];
var len__5964__auto___21485 = arguments.length;
var i__5965__auto___21486 = (0);
while(true){
if((i__5965__auto___21486 < len__5964__auto___21485)){
args__5971__auto__.push((arguments[i__5965__auto___21486]));

var G__21487 = (i__5965__auto___21486 + (1));
i__5965__auto___21486 = G__21487;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((0) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((0)),(0))):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__5972__auto__);
});

cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_.call(null,(function (p1__21482_SHARP_){
return (p1__21482_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__21483_SHARP_){
return p1__21483_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.call(null,cljs.core._EQ_,args);

}
});

cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0);

cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq21484){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21484));
});
cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod.call(null,y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod.call(null,y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod.call(null,y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__21489 = cljs_time.internal.core.days_in_month.call(null,(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,month,(1)))?(11):(month - (1))));
var G__21489__$1 = (cljs.core.truth_((function (){var and__4894__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,year);
if(cljs.core.truth_(and__4894__auto__)){
return cljs_time.internal.core._EQ_.call(null,month,(2));
} else {
return and__4894__auto__;
}
})())?(G__21489 + (1)):G__21489);
return G__21489__$1;
});
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__21490){
var map__21493 = p__21490;
var map__21493__$1 = ((((!((map__21493 == null)))?((((map__21493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21493):map__21493);
var d = map__21493__$1;
var years = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var days = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis = cljs.core.get.call(null,map__21493__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var months__$1 = (months + (1));
var _GT__LT_ = ((function (months__$1,map__21493,map__21493__$1,d,years,months,days,hours,minutes,seconds,millis){
return (function cljs_time$internal$core$valid_date_QMARK__$__GT__LT_(a,b,x){
return ((x >= a)) && ((x <= b));
});})(months__$1,map__21493,map__21493__$1,d,years,months,days,hours,minutes,seconds,millis))
;
if(cljs.core.truth_((function (){var and__4894__auto__ = years;
if(cljs.core.truth_(and__4894__auto__)){
var and__4894__auto____$1 = _GT__LT_.call(null,(1),(12),months__$1);
if(cljs.core.truth_(and__4894__auto____$1)){
var and__4894__auto____$2 = _GT__LT_.call(null,(1),cljs_time.internal.core.year_corrected_dim.call(null,years,months__$1),days);
if(cljs.core.truth_(and__4894__auto____$2)){
var and__4894__auto____$3 = _GT__LT_.call(null,(0),(23),hours);
if(cljs.core.truth_(and__4894__auto____$3)){
var and__4894__auto____$4 = _GT__LT_.call(null,(0),(59),minutes);
if(cljs.core.truth_(and__4894__auto____$4)){
var and__4894__auto____$5 = _GT__LT_.call(null,(0),(60),seconds);
if(cljs.core.truth_(and__4894__auto____$5)){
return _GT__LT_.call(null,(0),(999),millis);
} else {
return and__4894__auto____$5;
}
} else {
return and__4894__auto____$4;
}
} else {
return and__4894__auto____$3;
}
} else {
return and__4894__auto____$2;
}
} else {
return and__4894__auto____$1;
}
} else {
return and__4894__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.call(null,"Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-date","invalid-date",2030506573),new cljs.core.Keyword(null,"date","date",-1463434462),d], null));
}
});
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__21496_SHARP_,p2__21495_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,p2__21495_SHARP_,x))){
return p1__21496_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Formats a string using goog.string.format.
 */
cljs_time.internal.core.format = (function cljs_time$internal$core$format(var_args){
var args__5971__auto__ = [];
var len__5964__auto___21499 = arguments.length;
var i__5965__auto___21500 = (0);
while(true){
if((i__5965__auto___21500 < len__5964__auto___21499)){
args__5971__auto__.push((arguments[i__5965__auto___21500]));

var G__21501 = (i__5965__auto___21500 + (1));
i__5965__auto___21500 = G__21501;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((1) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((1)),(0))):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5972__auto__);
});

cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.call(null,(function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
});

cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1);

cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq21497){
var G__21498 = cljs.core.first.call(null,seq21497);
var seq21497__$1 = cljs.core.next.call(null,seq21497);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(G__21498,seq21497__$1);
});
/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(var_args){
var args21502 = [];
var len__5964__auto___21505 = arguments.length;
var i__5965__auto___21506 = (0);
while(true){
if((i__5965__auto___21506 < len__5964__auto___21505)){
args21502.push((arguments[i__5965__auto___21506]));

var G__21507 = (i__5965__auto___21506 + (1));
i__5965__auto___21506 = G__21507;
continue;
} else {
}
break;
}

var G__21504 = args21502.length;
switch (G__21504) {
case 1:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21502.length)].join('')));

}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str("0"),cljs.core.str(n)].join('');
} else {
return [cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if(((1) > zeros)){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str(clojure.string.join.call(null,cljs.core.take.call(null,(zeros - cljs.core.count.call(null,[cljs.core.str(n)].join(''))),cljs.core.repeat.call(null,"0")))),cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = 2;
cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",-1394072564)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weeks","weeks",1844596125)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",-45571637)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689)], null),scale_fn);
});

//# sourceMappingURL=core.js.map