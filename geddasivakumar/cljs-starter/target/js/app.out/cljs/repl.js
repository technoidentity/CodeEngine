// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21889_21903 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21890_21904 = null;
var count__21891_21905 = (0);
var i__21892_21906 = (0);
while(true){
if((i__21892_21906 < count__21891_21905)){
var f_21907 = cljs.core._nth.call(null,chunk__21890_21904,i__21892_21906);
cljs.core.println.call(null,"  ",f_21907);

var G__21908 = seq__21889_21903;
var G__21909 = chunk__21890_21904;
var G__21910 = count__21891_21905;
var G__21911 = (i__21892_21906 + (1));
seq__21889_21903 = G__21908;
chunk__21890_21904 = G__21909;
count__21891_21905 = G__21910;
i__21892_21906 = G__21911;
continue;
} else {
var temp__4425__auto___21912 = cljs.core.seq.call(null,seq__21889_21903);
if(temp__4425__auto___21912){
var seq__21889_21913__$1 = temp__4425__auto___21912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21889_21913__$1)){
var c__5709__auto___21914 = cljs.core.chunk_first.call(null,seq__21889_21913__$1);
var G__21915 = cljs.core.chunk_rest.call(null,seq__21889_21913__$1);
var G__21916 = c__5709__auto___21914;
var G__21917 = cljs.core.count.call(null,c__5709__auto___21914);
var G__21918 = (0);
seq__21889_21903 = G__21915;
chunk__21890_21904 = G__21916;
count__21891_21905 = G__21917;
i__21892_21906 = G__21918;
continue;
} else {
var f_21919 = cljs.core.first.call(null,seq__21889_21913__$1);
cljs.core.println.call(null,"  ",f_21919);

var G__21920 = cljs.core.next.call(null,seq__21889_21913__$1);
var G__21921 = null;
var G__21922 = (0);
var G__21923 = (0);
seq__21889_21903 = G__21920;
chunk__21890_21904 = G__21921;
count__21891_21905 = G__21922;
i__21892_21906 = G__21923;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21924 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4906__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21924);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21924)))?cljs.core.second.call(null,arglists_21924):arglists_21924));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21893 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21894 = null;
var count__21895 = (0);
var i__21896 = (0);
while(true){
if((i__21896 < count__21895)){
var vec__21897 = cljs.core._nth.call(null,chunk__21894,i__21896);
var name = cljs.core.nth.call(null,vec__21897,(0),null);
var map__21898 = cljs.core.nth.call(null,vec__21897,(1),null);
var map__21898__$1 = ((((!((map__21898 == null)))?((((map__21898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21898):map__21898);
var doc = cljs.core.get.call(null,map__21898__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21898__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21925 = seq__21893;
var G__21926 = chunk__21894;
var G__21927 = count__21895;
var G__21928 = (i__21896 + (1));
seq__21893 = G__21925;
chunk__21894 = G__21926;
count__21895 = G__21927;
i__21896 = G__21928;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21893);
if(temp__4425__auto__){
var seq__21893__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21893__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__21893__$1);
var G__21929 = cljs.core.chunk_rest.call(null,seq__21893__$1);
var G__21930 = c__5709__auto__;
var G__21931 = cljs.core.count.call(null,c__5709__auto__);
var G__21932 = (0);
seq__21893 = G__21929;
chunk__21894 = G__21930;
count__21895 = G__21931;
i__21896 = G__21932;
continue;
} else {
var vec__21900 = cljs.core.first.call(null,seq__21893__$1);
var name = cljs.core.nth.call(null,vec__21900,(0),null);
var map__21901 = cljs.core.nth.call(null,vec__21900,(1),null);
var map__21901__$1 = ((((!((map__21901 == null)))?((((map__21901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21901):map__21901);
var doc = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21901__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21933 = cljs.core.next.call(null,seq__21893__$1);
var G__21934 = null;
var G__21935 = (0);
var G__21936 = (0);
seq__21893 = G__21933;
chunk__21894 = G__21934;
count__21895 = G__21935;
i__21896 = G__21936;
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
}
});

//# sourceMappingURL=repl.js.map