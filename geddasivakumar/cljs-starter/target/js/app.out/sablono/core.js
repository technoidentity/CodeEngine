// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__15410__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__15409 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__15409,(0),null);
var body = cljs.core.nthnext.call(null,vec__15409,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__15410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15411__i = 0, G__15411__a = new Array(arguments.length -  0);
while (G__15411__i < G__15411__a.length) {G__15411__a[G__15411__i] = arguments[G__15411__i + 0]; ++G__15411__i;}
  args = new cljs.core.IndexedSeq(G__15411__a,0);
} 
return G__15410__delegate.call(this,args);};
G__15410.cljs$lang$maxFixedArity = 0;
G__15410.cljs$lang$applyTo = (function (arglist__15412){
var args = cljs.core.seq(arglist__15412);
return G__15410__delegate(args);
});
G__15410.cljs$core$IFn$_invoke$arity$variadic = G__15410__delegate;
return G__15410;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5678__auto__ = (function sablono$core$update_arglists_$_iter__15417(s__15418){
return (new cljs.core.LazySeq(null,(function (){
var s__15418__$1 = s__15418;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15418__$1);
if(temp__4425__auto__){
var s__15418__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15418__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__15418__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__15420 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__15419 = (0);
while(true){
if((i__15419 < size__5677__auto__)){
var args = cljs.core._nth.call(null,c__5676__auto__,i__15419);
cljs.core.chunk_append.call(null,b__15420,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__15421 = (i__15419 + (1));
i__15419 = G__15421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15420),sablono$core$update_arglists_$_iter__15417.call(null,cljs.core.chunk_rest.call(null,s__15418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15420),null);
}
} else {
var args = cljs.core.first.call(null,s__15418__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15417.call(null,cljs.core.rest.call(null,s__15418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5971__auto__ = [];
var len__5964__auto___15427 = arguments.length;
var i__5965__auto___15428 = (0);
while(true){
if((i__5965__auto___15428 < len__5964__auto___15427)){
args__5971__auto__.push((arguments[i__5965__auto___15428]));

var G__15429 = (i__5965__auto___15428 + (1));
i__5965__auto___15428 = G__15429;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((0) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5972__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5678__auto__ = (function sablono$core$iter__15423(s__15424){
return (new cljs.core.LazySeq(null,(function (){
var s__15424__$1 = s__15424;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15424__$1);
if(temp__4425__auto__){
var s__15424__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15424__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__15424__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__15426 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__15425 = (0);
while(true){
if((i__15425 < size__5677__auto__)){
var style = cljs.core._nth.call(null,c__5676__auto__,i__15425);
cljs.core.chunk_append.call(null,b__15426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__15430 = (i__15425 + (1));
i__15425 = G__15430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15426),sablono$core$iter__15423.call(null,cljs.core.chunk_rest.call(null,s__15424__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15426),null);
}
} else {
var style = cljs.core.first.call(null,s__15424__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15423.call(null,cljs.core.rest.call(null,s__15424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq15422){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15422));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to15431 = (function sablono$core$link_to15431(var_args){
var args__5971__auto__ = [];
var len__5964__auto___15434 = arguments.length;
var i__5965__auto___15435 = (0);
while(true){
if((i__5965__auto___15435 < len__5964__auto___15434)){
args__5971__auto__.push((arguments[i__5965__auto___15435]));

var G__15436 = (i__5965__auto___15435 + (1));
i__5965__auto___15435 = G__15436;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((1) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((1)),(0))):null);
return sablono.core.link_to15431.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5972__auto__);
});

sablono.core.link_to15431.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to15431.cljs$lang$maxFixedArity = (1);

sablono.core.link_to15431.cljs$lang$applyTo = (function (seq15432){
var G__15433 = cljs.core.first.call(null,seq15432);
var seq15432__$1 = cljs.core.next.call(null,seq15432);
return sablono.core.link_to15431.cljs$core$IFn$_invoke$arity$variadic(G__15433,seq15432__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15431);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15437 = (function sablono$core$mail_to15437(var_args){
var args__5971__auto__ = [];
var len__5964__auto___15442 = arguments.length;
var i__5965__auto___15443 = (0);
while(true){
if((i__5965__auto___15443 < len__5964__auto___15442)){
args__5971__auto__.push((arguments[i__5965__auto___15443]));

var G__15444 = (i__5965__auto___15443 + (1));
i__5965__auto___15443 = G__15444;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((1) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((1)),(0))):null);
return sablono.core.mail_to15437.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5972__auto__);
});

sablono.core.mail_to15437.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15440){
var vec__15441 = p__15440;
var content = cljs.core.nth.call(null,vec__15441,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4906__auto__ = content;
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to15437.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to15437.cljs$lang$applyTo = (function (seq15438){
var G__15439 = cljs.core.first.call(null,seq15438);
var seq15438__$1 = cljs.core.next.call(null,seq15438);
return sablono.core.mail_to15437.cljs$core$IFn$_invoke$arity$variadic(G__15439,seq15438__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15437);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15445 = (function sablono$core$unordered_list15445(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5678__auto__ = (function sablono$core$unordered_list15445_$_iter__15450(s__15451){
return (new cljs.core.LazySeq(null,(function (){
var s__15451__$1 = s__15451;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15451__$1);
if(temp__4425__auto__){
var s__15451__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15451__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__15451__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__15453 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__15452 = (0);
while(true){
if((i__15452 < size__5677__auto__)){
var x = cljs.core._nth.call(null,c__5676__auto__,i__15452);
cljs.core.chunk_append.call(null,b__15453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15454 = (i__15452 + (1));
i__15452 = G__15454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15453),sablono$core$unordered_list15445_$_iter__15450.call(null,cljs.core.chunk_rest.call(null,s__15451__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15453),null);
}
} else {
var x = cljs.core.first.call(null,s__15451__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list15445_$_iter__15450.call(null,cljs.core.rest.call(null,s__15451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15445);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15455 = (function sablono$core$ordered_list15455(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5678__auto__ = (function sablono$core$ordered_list15455_$_iter__15460(s__15461){
return (new cljs.core.LazySeq(null,(function (){
var s__15461__$1 = s__15461;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15461__$1);
if(temp__4425__auto__){
var s__15461__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15461__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__15461__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__15463 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__15462 = (0);
while(true){
if((i__15462 < size__5677__auto__)){
var x = cljs.core._nth.call(null,c__5676__auto__,i__15462);
cljs.core.chunk_append.call(null,b__15463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15464 = (i__15462 + (1));
i__15462 = G__15464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15463),sablono$core$ordered_list15455_$_iter__15460.call(null,cljs.core.chunk_rest.call(null,s__15461__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15463),null);
}
} else {
var x = cljs.core.first.call(null,s__15461__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15455_$_iter__15460.call(null,cljs.core.rest.call(null,s__15461__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15455);
/**
 * Create an image element.
 */
sablono.core.image15465 = (function sablono$core$image15465(var_args){
var args15466 = [];
var len__5964__auto___15469 = arguments.length;
var i__5965__auto___15470 = (0);
while(true){
if((i__5965__auto___15470 < len__5964__auto___15469)){
args15466.push((arguments[i__5965__auto___15470]));

var G__15471 = (i__5965__auto___15470 + (1));
i__5965__auto___15470 = G__15471;
continue;
} else {
}
break;
}

var G__15468 = args15466.length;
switch (G__15468) {
case 1:
return sablono.core.image15465.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15465.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15466.length)].join('')));

}
});

sablono.core.image15465.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image15465.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image15465.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15465);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__15473_SHARP_,p2__15474_SHARP_){
return [cljs.core.str(p1__15473_SHARP_),cljs.core.str("["),cljs.core.str(p2__15474_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__15475_SHARP_,p2__15476_SHARP_){
return [cljs.core.str(p1__15475_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15476_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field15477 = (function sablono$core$color_field15477(var_args){
var args15478 = [];
var len__5964__auto___15545 = arguments.length;
var i__5965__auto___15546 = (0);
while(true){
if((i__5965__auto___15546 < len__5964__auto___15545)){
args15478.push((arguments[i__5965__auto___15546]));

var G__15547 = (i__5965__auto___15546 + (1));
i__5965__auto___15546 = G__15547;
continue;
} else {
}
break;
}

var G__15480 = args15478.length;
switch (G__15480) {
case 1:
return sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15478.length)].join('')));

}
});

sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.color_field15477.call(null,name__12141__auto__,null);
});

sablono.core.color_field15477.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.color_field15477.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field15477);

/**
 * Creates a date input field.
 */
sablono.core.date_field15481 = (function sablono$core$date_field15481(var_args){
var args15482 = [];
var len__5964__auto___15549 = arguments.length;
var i__5965__auto___15550 = (0);
while(true){
if((i__5965__auto___15550 < len__5964__auto___15549)){
args15482.push((arguments[i__5965__auto___15550]));

var G__15551 = (i__5965__auto___15550 + (1));
i__5965__auto___15550 = G__15551;
continue;
} else {
}
break;
}

var G__15484 = args15482.length;
switch (G__15484) {
case 1:
return sablono.core.date_field15481.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15481.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15482.length)].join('')));

}
});

sablono.core.date_field15481.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.date_field15481.call(null,name__12141__auto__,null);
});

sablono.core.date_field15481.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.date_field15481.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field15481);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15485 = (function sablono$core$datetime_field15485(var_args){
var args15486 = [];
var len__5964__auto___15553 = arguments.length;
var i__5965__auto___15554 = (0);
while(true){
if((i__5965__auto___15554 < len__5964__auto___15553)){
args15486.push((arguments[i__5965__auto___15554]));

var G__15555 = (i__5965__auto___15554 + (1));
i__5965__auto___15554 = G__15555;
continue;
} else {
}
break;
}

var G__15488 = args15486.length;
switch (G__15488) {
case 1:
return sablono.core.datetime_field15485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15486.length)].join('')));

}
});

sablono.core.datetime_field15485.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.datetime_field15485.call(null,name__12141__auto__,null);
});

sablono.core.datetime_field15485.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.datetime_field15485.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field15485);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15489 = (function sablono$core$datetime_local_field15489(var_args){
var args15490 = [];
var len__5964__auto___15557 = arguments.length;
var i__5965__auto___15558 = (0);
while(true){
if((i__5965__auto___15558 < len__5964__auto___15557)){
args15490.push((arguments[i__5965__auto___15558]));

var G__15559 = (i__5965__auto___15558 + (1));
i__5965__auto___15558 = G__15559;
continue;
} else {
}
break;
}

var G__15492 = args15490.length;
switch (G__15492) {
case 1:
return sablono.core.datetime_local_field15489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15490.length)].join('')));

}
});

sablono.core.datetime_local_field15489.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.datetime_local_field15489.call(null,name__12141__auto__,null);
});

sablono.core.datetime_local_field15489.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.datetime_local_field15489.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field15489);

/**
 * Creates a email input field.
 */
sablono.core.email_field15493 = (function sablono$core$email_field15493(var_args){
var args15494 = [];
var len__5964__auto___15561 = arguments.length;
var i__5965__auto___15562 = (0);
while(true){
if((i__5965__auto___15562 < len__5964__auto___15561)){
args15494.push((arguments[i__5965__auto___15562]));

var G__15563 = (i__5965__auto___15562 + (1));
i__5965__auto___15562 = G__15563;
continue;
} else {
}
break;
}

var G__15496 = args15494.length;
switch (G__15496) {
case 1:
return sablono.core.email_field15493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15494.length)].join('')));

}
});

sablono.core.email_field15493.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.email_field15493.call(null,name__12141__auto__,null);
});

sablono.core.email_field15493.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.email_field15493.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15493);

/**
 * Creates a file input field.
 */
sablono.core.file_field15497 = (function sablono$core$file_field15497(var_args){
var args15498 = [];
var len__5964__auto___15565 = arguments.length;
var i__5965__auto___15566 = (0);
while(true){
if((i__5965__auto___15566 < len__5964__auto___15565)){
args15498.push((arguments[i__5965__auto___15566]));

var G__15567 = (i__5965__auto___15566 + (1));
i__5965__auto___15566 = G__15567;
continue;
} else {
}
break;
}

var G__15500 = args15498.length;
switch (G__15500) {
case 1:
return sablono.core.file_field15497.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15497.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15498.length)].join('')));

}
});

sablono.core.file_field15497.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.file_field15497.call(null,name__12141__auto__,null);
});

sablono.core.file_field15497.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.file_field15497.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field15497);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15501 = (function sablono$core$hidden_field15501(var_args){
var args15502 = [];
var len__5964__auto___15569 = arguments.length;
var i__5965__auto___15570 = (0);
while(true){
if((i__5965__auto___15570 < len__5964__auto___15569)){
args15502.push((arguments[i__5965__auto___15570]));

var G__15571 = (i__5965__auto___15570 + (1));
i__5965__auto___15570 = G__15571;
continue;
} else {
}
break;
}

var G__15504 = args15502.length;
switch (G__15504) {
case 1:
return sablono.core.hidden_field15501.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15501.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15502.length)].join('')));

}
});

sablono.core.hidden_field15501.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.hidden_field15501.call(null,name__12141__auto__,null);
});

sablono.core.hidden_field15501.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.hidden_field15501.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15501);

/**
 * Creates a month input field.
 */
sablono.core.month_field15505 = (function sablono$core$month_field15505(var_args){
var args15506 = [];
var len__5964__auto___15573 = arguments.length;
var i__5965__auto___15574 = (0);
while(true){
if((i__5965__auto___15574 < len__5964__auto___15573)){
args15506.push((arguments[i__5965__auto___15574]));

var G__15575 = (i__5965__auto___15574 + (1));
i__5965__auto___15574 = G__15575;
continue;
} else {
}
break;
}

var G__15508 = args15506.length;
switch (G__15508) {
case 1:
return sablono.core.month_field15505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15506.length)].join('')));

}
});

sablono.core.month_field15505.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.month_field15505.call(null,name__12141__auto__,null);
});

sablono.core.month_field15505.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.month_field15505.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field15505);

/**
 * Creates a number input field.
 */
sablono.core.number_field15509 = (function sablono$core$number_field15509(var_args){
var args15510 = [];
var len__5964__auto___15577 = arguments.length;
var i__5965__auto___15578 = (0);
while(true){
if((i__5965__auto___15578 < len__5964__auto___15577)){
args15510.push((arguments[i__5965__auto___15578]));

var G__15579 = (i__5965__auto___15578 + (1));
i__5965__auto___15578 = G__15579;
continue;
} else {
}
break;
}

var G__15512 = args15510.length;
switch (G__15512) {
case 1:
return sablono.core.number_field15509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15510.length)].join('')));

}
});

sablono.core.number_field15509.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.number_field15509.call(null,name__12141__auto__,null);
});

sablono.core.number_field15509.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.number_field15509.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field15509);

/**
 * Creates a password input field.
 */
sablono.core.password_field15513 = (function sablono$core$password_field15513(var_args){
var args15514 = [];
var len__5964__auto___15581 = arguments.length;
var i__5965__auto___15582 = (0);
while(true){
if((i__5965__auto___15582 < len__5964__auto___15581)){
args15514.push((arguments[i__5965__auto___15582]));

var G__15583 = (i__5965__auto___15582 + (1));
i__5965__auto___15582 = G__15583;
continue;
} else {
}
break;
}

var G__15516 = args15514.length;
switch (G__15516) {
case 1:
return sablono.core.password_field15513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15514.length)].join('')));

}
});

sablono.core.password_field15513.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.password_field15513.call(null,name__12141__auto__,null);
});

sablono.core.password_field15513.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.password_field15513.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15513);

/**
 * Creates a range input field.
 */
sablono.core.range_field15517 = (function sablono$core$range_field15517(var_args){
var args15518 = [];
var len__5964__auto___15585 = arguments.length;
var i__5965__auto___15586 = (0);
while(true){
if((i__5965__auto___15586 < len__5964__auto___15585)){
args15518.push((arguments[i__5965__auto___15586]));

var G__15587 = (i__5965__auto___15586 + (1));
i__5965__auto___15586 = G__15587;
continue;
} else {
}
break;
}

var G__15520 = args15518.length;
switch (G__15520) {
case 1:
return sablono.core.range_field15517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15518.length)].join('')));

}
});

sablono.core.range_field15517.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.range_field15517.call(null,name__12141__auto__,null);
});

sablono.core.range_field15517.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.range_field15517.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field15517);

/**
 * Creates a search input field.
 */
sablono.core.search_field15521 = (function sablono$core$search_field15521(var_args){
var args15522 = [];
var len__5964__auto___15589 = arguments.length;
var i__5965__auto___15590 = (0);
while(true){
if((i__5965__auto___15590 < len__5964__auto___15589)){
args15522.push((arguments[i__5965__auto___15590]));

var G__15591 = (i__5965__auto___15590 + (1));
i__5965__auto___15590 = G__15591;
continue;
} else {
}
break;
}

var G__15524 = args15522.length;
switch (G__15524) {
case 1:
return sablono.core.search_field15521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15522.length)].join('')));

}
});

sablono.core.search_field15521.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.search_field15521.call(null,name__12141__auto__,null);
});

sablono.core.search_field15521.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.search_field15521.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field15521);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15525 = (function sablono$core$tel_field15525(var_args){
var args15526 = [];
var len__5964__auto___15593 = arguments.length;
var i__5965__auto___15594 = (0);
while(true){
if((i__5965__auto___15594 < len__5964__auto___15593)){
args15526.push((arguments[i__5965__auto___15594]));

var G__15595 = (i__5965__auto___15594 + (1));
i__5965__auto___15594 = G__15595;
continue;
} else {
}
break;
}

var G__15528 = args15526.length;
switch (G__15528) {
case 1:
return sablono.core.tel_field15525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15526.length)].join('')));

}
});

sablono.core.tel_field15525.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.tel_field15525.call(null,name__12141__auto__,null);
});

sablono.core.tel_field15525.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.tel_field15525.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field15525);

/**
 * Creates a text input field.
 */
sablono.core.text_field15529 = (function sablono$core$text_field15529(var_args){
var args15530 = [];
var len__5964__auto___15597 = arguments.length;
var i__5965__auto___15598 = (0);
while(true){
if((i__5965__auto___15598 < len__5964__auto___15597)){
args15530.push((arguments[i__5965__auto___15598]));

var G__15599 = (i__5965__auto___15598 + (1));
i__5965__auto___15598 = G__15599;
continue;
} else {
}
break;
}

var G__15532 = args15530.length;
switch (G__15532) {
case 1:
return sablono.core.text_field15529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15530.length)].join('')));

}
});

sablono.core.text_field15529.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.text_field15529.call(null,name__12141__auto__,null);
});

sablono.core.text_field15529.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.text_field15529.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15529);

/**
 * Creates a time input field.
 */
sablono.core.time_field15533 = (function sablono$core$time_field15533(var_args){
var args15534 = [];
var len__5964__auto___15601 = arguments.length;
var i__5965__auto___15602 = (0);
while(true){
if((i__5965__auto___15602 < len__5964__auto___15601)){
args15534.push((arguments[i__5965__auto___15602]));

var G__15603 = (i__5965__auto___15602 + (1));
i__5965__auto___15602 = G__15603;
continue;
} else {
}
break;
}

var G__15536 = args15534.length;
switch (G__15536) {
case 1:
return sablono.core.time_field15533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15534.length)].join('')));

}
});

sablono.core.time_field15533.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.time_field15533.call(null,name__12141__auto__,null);
});

sablono.core.time_field15533.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.time_field15533.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field15533);

/**
 * Creates a url input field.
 */
sablono.core.url_field15537 = (function sablono$core$url_field15537(var_args){
var args15538 = [];
var len__5964__auto___15605 = arguments.length;
var i__5965__auto___15606 = (0);
while(true){
if((i__5965__auto___15606 < len__5964__auto___15605)){
args15538.push((arguments[i__5965__auto___15606]));

var G__15607 = (i__5965__auto___15606 + (1));
i__5965__auto___15606 = G__15607;
continue;
} else {
}
break;
}

var G__15540 = args15538.length;
switch (G__15540) {
case 1:
return sablono.core.url_field15537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15538.length)].join('')));

}
});

sablono.core.url_field15537.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.url_field15537.call(null,name__12141__auto__,null);
});

sablono.core.url_field15537.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.url_field15537.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field15537);

/**
 * Creates a week input field.
 */
sablono.core.week_field15541 = (function sablono$core$week_field15541(var_args){
var args15542 = [];
var len__5964__auto___15609 = arguments.length;
var i__5965__auto___15610 = (0);
while(true){
if((i__5965__auto___15610 < len__5964__auto___15609)){
args15542.push((arguments[i__5965__auto___15610]));

var G__15611 = (i__5965__auto___15610 + (1));
i__5965__auto___15610 = G__15611;
continue;
} else {
}
break;
}

var G__15544 = args15542.length;
switch (G__15544) {
case 1:
return sablono.core.week_field15541.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15541.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15542.length)].join('')));

}
});

sablono.core.week_field15541.cljs$core$IFn$_invoke$arity$1 = (function (name__12141__auto__){
return sablono.core.week_field15541.call(null,name__12141__auto__,null);
});

sablono.core.week_field15541.cljs$core$IFn$_invoke$arity$2 = (function (name__12141__auto__,value__12142__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12141__auto__,value__12142__auto__);
});

sablono.core.week_field15541.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field15541);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15613 = (function sablono$core$check_box15613(var_args){
var args15614 = [];
var len__5964__auto___15617 = arguments.length;
var i__5965__auto___15618 = (0);
while(true){
if((i__5965__auto___15618 < len__5964__auto___15617)){
args15614.push((arguments[i__5965__auto___15618]));

var G__15619 = (i__5965__auto___15618 + (1));
i__5965__auto___15618 = G__15619;
continue;
} else {
}
break;
}

var G__15616 = args15614.length;
switch (G__15616) {
case 1:
return sablono.core.check_box15613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15613.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15614.length)].join('')));

}
});

sablono.core.check_box15613.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box15613.call(null,name,null);
});

sablono.core.check_box15613.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box15613.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box15613.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box15613.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15613);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15621 = (function sablono$core$radio_button15621(var_args){
var args15622 = [];
var len__5964__auto___15625 = arguments.length;
var i__5965__auto___15626 = (0);
while(true){
if((i__5965__auto___15626 < len__5964__auto___15625)){
args15622.push((arguments[i__5965__auto___15626]));

var G__15627 = (i__5965__auto___15626 + (1));
i__5965__auto___15626 = G__15627;
continue;
} else {
}
break;
}

var G__15624 = args15622.length;
switch (G__15624) {
case 1:
return sablono.core.radio_button15621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15621.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15622.length)].join('')));

}
});

sablono.core.radio_button15621.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button15621.call(null,group,null);
});

sablono.core.radio_button15621.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button15621.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button15621.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button15621.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15621);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15629 = (function sablono$core$select_options15629(coll){
var iter__5678__auto__ = (function sablono$core$select_options15629_$_iter__15638(s__15639){
return (new cljs.core.LazySeq(null,(function (){
var s__15639__$1 = s__15639;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15639__$1);
if(temp__4425__auto__){
var s__15639__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15639__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__15639__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__15641 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__15640 = (0);
while(true){
if((i__15640 < size__5677__auto__)){
var x = cljs.core._nth.call(null,c__5676__auto__,i__15640);
cljs.core.chunk_append.call(null,b__15641,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15644 = x;
var text = cljs.core.nth.call(null,vec__15644,(0),null);
var val = cljs.core.nth.call(null,vec__15644,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15644,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options15629.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__15646 = (i__15640 + (1));
i__15640 = G__15646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15641),sablono$core$select_options15629_$_iter__15638.call(null,cljs.core.chunk_rest.call(null,s__15639__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15641),null);
}
} else {
var x = cljs.core.first.call(null,s__15639__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15645 = x;
var text = cljs.core.nth.call(null,vec__15645,(0),null);
var val = cljs.core.nth.call(null,vec__15645,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15645,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options15629.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options15629_$_iter__15638.call(null,cljs.core.rest.call(null,s__15639__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15629);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15647 = (function sablono$core$drop_down15647(var_args){
var args15648 = [];
var len__5964__auto___15651 = arguments.length;
var i__5965__auto___15652 = (0);
while(true){
if((i__5965__auto___15652 < len__5964__auto___15651)){
args15648.push((arguments[i__5965__auto___15652]));

var G__15653 = (i__5965__auto___15652 + (1));
i__5965__auto___15652 = G__15653;
continue;
} else {
}
break;
}

var G__15650 = args15648.length;
switch (G__15650) {
case 2:
return sablono.core.drop_down15647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15647.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15648.length)].join('')));

}
});

sablono.core.drop_down15647.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15647.call(null,name,options,null);
});

sablono.core.drop_down15647.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down15647.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15647);
/**
 * Creates a text area element.
 */
sablono.core.text_area15655 = (function sablono$core$text_area15655(var_args){
var args15656 = [];
var len__5964__auto___15659 = arguments.length;
var i__5965__auto___15660 = (0);
while(true){
if((i__5965__auto___15660 < len__5964__auto___15659)){
args15656.push((arguments[i__5965__auto___15660]));

var G__15661 = (i__5965__auto___15660 + (1));
i__5965__auto___15660 = G__15661;
continue;
} else {
}
break;
}

var G__15658 = args15656.length;
switch (G__15658) {
case 1:
return sablono.core.text_area15655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15656.length)].join('')));

}
});

sablono.core.text_area15655.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area15655.call(null,name,null);
});

sablono.core.text_area15655.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area15655.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15655);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15663 = (function sablono$core$label15663(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15663);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15664 = (function sablono$core$submit_button15664(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15664);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15665 = (function sablono$core$reset_button15665(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15665);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15666 = (function sablono$core$form_to15666(var_args){
var args__5971__auto__ = [];
var len__5964__auto___15671 = arguments.length;
var i__5965__auto___15672 = (0);
while(true){
if((i__5965__auto___15672 < len__5964__auto___15671)){
args__5971__auto__.push((arguments[i__5965__auto___15672]));

var G__15673 = (i__5965__auto___15672 + (1));
i__5965__auto___15672 = G__15673;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((1) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((1)),(0))):null);
return sablono.core.form_to15666.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5972__auto__);
});

sablono.core.form_to15666.cljs$core$IFn$_invoke$arity$variadic = (function (p__15669,body){
var vec__15670 = p__15669;
var method = cljs.core.nth.call(null,vec__15670,(0),null);
var action = cljs.core.nth.call(null,vec__15670,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to15666.cljs$lang$maxFixedArity = (1);

sablono.core.form_to15666.cljs$lang$applyTo = (function (seq15667){
var G__15668 = cljs.core.first.call(null,seq15667);
var seq15667__$1 = cljs.core.next.call(null,seq15667);
return sablono.core.form_to15666.cljs$core$IFn$_invoke$arity$variadic(G__15668,seq15667__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15666);

//# sourceMappingURL=core.js.map