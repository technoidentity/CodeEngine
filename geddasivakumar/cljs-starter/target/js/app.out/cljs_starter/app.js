// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_starter.app');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('reagent.core');
goog.require('bouncer.validators');
goog.require('devcards.core');
goog.require('bouncer.core');
goog.require('sablono.core');
goog.require('devtools.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_starter.app.init = (function cljs_starter$app$init(){
devtools.core.set_pref_BANG_.call(null,new cljs.core.Keyword(null,"install-sanity-hints","install-sanity-hints",72546145),true);

devtools.core.install_BANG_.call(null);

return devcards.core.start_devcard_ui_BANG__STAR_.call(null);
});
cljs_starter.app.simple_component = (function cljs_starter$app$simple_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"simple-component","simple-component",-990785005)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simple-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.simple_component], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.simple_parent = (function cljs_starter$app$simple_parent(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I include simple-component"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.simple_component], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"simple-parent","simple-parent",-1317913448)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simple-parent",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.simple_parent], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.hello_component = (function cljs_starter$app$hello_component(name){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hello, ",name,"!"], null);
});
cljs_starter.app.say_hello = (function cljs_starter$app$say_hello(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.hello_component,"world"], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"say-hello-world","say-hello-world",132787879)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"say-hello-world",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.say_hello], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.myspan = (function cljs_starter$app$myspan(col,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),col], null)], null),text], null);
});
cljs_starter.app.hello_clojure = (function cljs_starter$app$hello_clojure(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Welcome to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myspan,"green","Clojure"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myspan,"#003388"," Script"], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"greetings","greetings",2107426774)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"greetings",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.hello_clojure], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.lister = (function cljs_starter$app$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5678__auto__ = (function cljs_starter$app$lister_$_iter__15114(s__15115){
return (new cljs.core.LazySeq(null,(function (){
var s__15115__$1 = s__15115;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15115__$1);
if(temp__4425__auto__){
var s__15115__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15115__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__15115__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__15117 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__15116 = (0);
while(true){
if((i__15116 < size__5677__auto__)){
var item = cljs.core._nth.call(null,c__5676__auto__,i__15116);
cljs.core.chunk_append.call(null,b__15117,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"item",item], null));

var G__15118 = (i__15116 + (1));
i__15116 = G__15118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15117),cljs_starter$app$lister_$_iter__15114.call(null,cljs.core.chunk_rest.call(null,s__15115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15117),null);
}
} else {
var item = cljs.core.first.call(null,s__15115__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"item",item], null),cljs_starter$app$lister_$_iter__15114.call(null,cljs.core.rest.call(null,s__15115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,items);
})()], null);
});
cljs_starter.app.lister1 = (function cljs_starter$app$lister1(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5678__auto__ = (function cljs_starter$app$lister1_$_iter__15123(s__15124){
return (new cljs.core.LazySeq(null,(function (){
var s__15124__$1 = s__15124;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15124__$1);
if(temp__4425__auto__){
var s__15124__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15124__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__15124__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__15126 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__15125 = (0);
while(true){
if((i__15125 < size__5677__auto__)){
var item = cljs.core._nth.call(null,c__5676__auto__,i__15125);
cljs.core.chunk_append.call(null,b__15126,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"item",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__15127 = (i__15125 + (1));
i__15125 = G__15127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15126),cljs_starter$app$lister1_$_iter__15123.call(null,cljs.core.chunk_rest.call(null,s__15124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15126),null);
}
} else {
var item = cljs.core.first.call(null,s__15124__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"item",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),cljs_starter$app$lister1_$_iter__15123.call(null,cljs.core.rest.call(null,s__15124__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,items);
})()], null);
});
cljs_starter.app.lister_user = (function cljs_starter$app$lister_user(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Here is a list:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.lister1,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))))], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"user-list","user-list",346594331)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"user-list",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.lister_user], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.click_count = reagent.core.atom.call(null,(0));
cljs_starter.app.counting_component = (function cljs_starter$app$counting_component(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value:",cljs.core.deref.call(null,cljs_starter.app.click_count),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,cljs_starter.app.click_count,cljs.core.inc);
})], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"counting-clicks","counting-clicks",1761845499)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"counting-clicks",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.counting_component], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.timer_component = (function cljs_starter$app$timer_component(){
var seconds_elapsed = reagent.core.atom.call(null,(0));
return ((function (seconds_elapsed){
return (function (){
setTimeout(((function (seconds_elapsed){
return (function (){
return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
});})(seconds_elapsed))
,(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref.call(null,seconds_elapsed)], null);
});
;})(seconds_elapsed))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"timer",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.timer_component], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.my_atom_input = (function cljs_starter$app$my_atom_input(val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15128_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__15128_SHARP_.target.value);
})], null)], null);
});
cljs_starter.app.shared_state = (function cljs_starter$app$shared_state(){
var value = reagent.core.atom.call(null,"foo");
return ((function (value){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The value is now:",cljs.core.deref.call(null,value)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.my_atom_input,value], null)], null)], null);
});
;})(value))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"state-management","state-management",1444964660)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"state-management",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.shared_state], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.in_text = (function cljs_starter$app$in_text(id_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id-name","input#id-name",563439440),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"in-type","in-type",952450600)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"in-type",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.in_text,"sample"], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.label = (function cljs_starter$app$label(name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.in_text,name], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"label","label",1718410804)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"label",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.label,"first Name"], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.form = (function cljs_starter$app$form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.label,"First Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.label,"Second Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.label,"Place"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.label,"phone No"], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"myForm","myForm",-566986344)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"myForm",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.form], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.mydata = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"docName","docName",-1542504350),"DocumentName",new cljs.core.Keyword(null,"title","title",636505583),"title",new cljs.core.Keyword(null,"empName","empName",-119177181),"Emp Name",new cljs.core.Keyword(null,"date","date",-1463434462),"2014-02-01",new cljs.core.Keyword(null,"location","location",1815599388),"india",new cljs.core.Keyword(null,"isactive","isactive",-1343645553),"false"], null));
cljs_starter.app.input_text = (function cljs_starter$app$input_text(id){
return (function (textbox_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id.form-control","input#id.form-control",1403497366),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),[cljs.core.str("Enter "),cljs.core.str(textbox_name)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15129_SHARP_){
return cljs.core.swap_BANG_.call(null,cljs_starter.app.mydata,cljs.core.assoc,id,p1__15129_SHARP_.target.value);
})], null)], null);
});
});
cljs_starter.app.mylabel = (function cljs_starter$app$mylabel(id){
return (function (labelname){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label#id.control-label","label#id.control-label",7531303),labelname], null);
});
});
cljs_starter.app.myblock = (function cljs_starter$app$myblock(id,labelname){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#id.form-group","div#id.form-group",1518767032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.mylabel.call(null,id),labelname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.input_text.call(null,id),labelname], null)], null);
});
cljs_starter.app.mybutton = (function cljs_starter$app$mybutton(id,fun){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group.form-buttons","div.form-group.form-buttons",-273375052),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#id.btn.btn-primary","button#id.btn.btn-primary",216946329),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),fun], null),"Submit"], null),"\t",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"reset"], null),"Reset"], null)], null);
});
cljs_starter.app.myform = (function cljs_starter$app$myform(id){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.id","form.id",-355544719),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myblock,new cljs.core.Keyword(null,"docName","docName",-1542504350),"Document Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myblock,new cljs.core.Keyword(null,"title","title",636505583),"Titile Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myblock,new cljs.core.Keyword(null,"empName","empName",-119177181),"Employee Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myblock,new cljs.core.Keyword(null,"date","date",-1463434462),"Date (yyyy-mm-dd)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myblock,new cljs.core.Keyword(null,"location","location",1815599388),"Location"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myblock,new cljs.core.Keyword(null,"isactive","isactive",-1343645553),"Is Active"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.mybutton,"submit-1",(function (){
return alert(cljs.core.deref.call(null,cljs_starter.app.mydata));
})], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"Simple-Form","Simple-Form",1758429411)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Simple-Form",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myform,"RRMS Form"], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
/**
 * An input element which updates its value on change
 */
cljs_starter.app.input_element = (function cljs_starter$app$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id.form-control","input#id.form-control",1403497366),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15130_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__15130_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
})], null)], null);
});
/**
 * Creates an input box and a prompt box that appears above the input comes into focus.
 */
cljs_starter.app.input_and_prompt = (function cljs_starter$app$input_and_prompt(label_value,input_name,input_type,input_element_arg,prompt_element,required_QMARK_){
var input_focus = reagent.core.atom.call(null,false);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label_value], null),(cljs.core.truth_(cljs.core.deref.call(null,input_focus))?prompt_element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null),(cljs.core.truth_((function (){var and__4894__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4894__auto__)){
return cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,input_element_arg));
} else {
return and__4894__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"Field is required!"], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null);
});
;})(input_focus))
});
/**
 * A prompt that will animate to help the user with a given input
 */
cljs_starter.app.prompt_message = (function cljs_starter$app$prompt_message(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-message","div.my-message",-1069052019),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prompt.message-animation","div.prompt.message-animation",-402255612),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null)], null)], null);
});
cljs_starter.app.wrap_as_element_in_form = (function cljs_starter$app$wrap_as_element_in_form(element){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.form-group","div.row.form-group",-1875300700),element], null);
});
/**
 * Check if the value is nil, then apply the predicate
 */
cljs_starter.app.check_nil_then_predicate = (function cljs_starter$app$check_nil_then_predicate(value,predicate){
if((value == null)){
return false;
} else {
return predicate.call(null,value);
}
});
cljs_starter.app.eight_or_more_characters_QMARK_ = (function cljs_starter$app$eight_or_more_characters_QMARK_(word){
return cljs_starter.app.check_nil_then_predicate.call(null,word,(function (arg){
(cljs.core.count > arg);

return (7);
}));
});
cljs_starter.app.has_special_character_QMARK_ = (function cljs_starter$app$has_special_character_QMARK_(word){
return cljs_starter.app.check_nil_then_predicate.call(null,word,(function (arg){
return cljs.core.boolean$.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\w+/,arg)));
}));
});
cljs_starter.app.has_number_QMARK_ = (function cljs_starter$app$has_number_QMARK_(word){
return cljs_starter.app.check_nil_then_predicate.call(null,word,(function (arg){
return cljs.core.boolean$.call(null,cljs.core.re_seq.call(null,/\d+/,arg));
}));
});
/**
 * A list to describe which password requirements have been met so far
 */
cljs_starter.app.password_requirements = (function cljs_starter$app$password_requirements(password,requirements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (req){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(req)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),req], null));
}),cljs.core.doall.call(null,cljs.core.filter.call(null,(function (req){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015).cljs$core$IFn$_invoke$arity$1(req).call(null,cljs.core.deref.call(null,password)));
}),requirements)))], null)], null);
});
cljs_starter.app.email_form = (function cljs_starter$app$email_form(email_atom){
return cljs_starter.app.input_and_prompt.call(null,"email","email","email",email_atom,cljs_starter.app.prompt_message.call(null,"What's your email?"),true);
});
cljs_starter.app.name_form = (function cljs_starter$app$name_form(name_atom){
return cljs_starter.app.input_and_prompt.call(null,"name","name","text",name_atom,cljs_starter.app.prompt_message.call(null,"What's your name?"),true);
});
cljs_starter.app.password_form = (function cljs_starter$app$password_form(password){
var password_type_atom = reagent.core.atom.call(null,"password");
return ((function (password_type_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.input_and_prompt.call(null,"password","password",cljs.core.deref.call(null,password_type_atom),password,cljs_starter.app.prompt_message.call(null,"What's your password?"),true)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.password_requirements,password,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"8 or more characters",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),cljs_starter.app.eight_or_more_characters_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"At least one special character",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),cljs_starter.app.has_special_character_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"At least one number",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),cljs_starter.app.has_number_QMARK_], null)], null)], null)], null);
});
;})(password_type_atom))
});
cljs_starter.app.home_page = (function cljs_starter$app$home_page(){
var email_address = reagent.core.atom.call(null,null);
var name = reagent.core.atom.call(null,null);
var password = reagent.core.atom.call(null,null);
return ((function (email_address,name,password){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.signup-form","div.signup-form",615141950),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Simple login-form"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs_starter.app.wrap_as_element_in_form.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.email_form,email_address], null)),cljs_starter.app.wrap_as_element_in_form.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.name_form,name], null)),cljs_starter.app.wrap_as_element_in_form.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.password_form,password], null))], null)], null)], null);
});
;})(email_address,name,password))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"log-in-validation","log-in-validation",-1060269081)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"log-in-validation",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.home_page], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
cljs_starter.app.set_value_BANG_ = (function cljs_starter$app$set_value_BANG_(id,value){
cljs.core.swap_BANG_.call(null,cljs_starter.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return cljs.core.swap_BANG_.call(null,cljs_starter.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
cljs_starter.app.get_value = (function cljs_starter$app$get_value(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_starter.app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
cljs_starter.app.row = (function cljs_starter$app$row(var_args){
var args__5971__auto__ = [];
var len__5964__auto___15133 = arguments.length;
var i__5965__auto___15134 = (0);
while(true){
if((i__5965__auto___15134 < len__5964__auto___15133)){
args__5971__auto__.push((arguments[i__5965__auto___15134]));

var G__15135 = (i__5965__auto___15134 + (1));
i__5965__auto___15134 = G__15135;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((1) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((1)),(0))):null);
return cljs_starter.app.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5972__auto__);
});

cljs_starter.app.row.cljs$core$IFn$_invoke$arity$variadic = (function (label,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
});

cljs_starter.app.row.cljs$lang$maxFixedArity = (1);

cljs_starter.app.row.cljs$lang$applyTo = (function (seq15131){
var G__15132 = cljs.core.first.call(null,seq15131);
var seq15131__$1 = cljs.core.next.call(null,seq15131);
return cljs_starter.app.row.cljs$core$IFn$_invoke$arity$variadic(G__15132,seq15131__$1);
});
cljs_starter.app.text_input = (function cljs_starter$app$text_input(id,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs_starter.app.get_value.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15136_SHARP_){
return cljs_starter.app.set_value_BANG_.call(null,id,p1__15136_SHARP_.target.value);
})], null)], null)], null);
});
cljs_starter.app.list_item = (function cljs_starter$app$list_item(id,k,v,selections){
var handle_click_BANG_ = (function cljs_starter$app$list_item_$_handle_click_BANG_(){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.not);

return cljs_starter.app.set_value_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(k.call(null,cljs.core.deref.call(null,selections)))?" active":null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_click_BANG_], null),v], null);
});
cljs_starter.app.selection_list = (function cljs_starter$app$selection_list(var_args){
var args__5971__auto__ = [];
var len__5964__auto___15150 = arguments.length;
var i__5965__auto___15151 = (0);
while(true){
if((i__5965__auto___15151 < len__5964__auto___15150)){
args__5971__auto__.push((arguments[i__5965__auto___15151]));

var G__15152 = (i__5965__auto___15151 + (1));
i__5965__auto___15151 = G__15152;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((2) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((2)),(0))):null);
return cljs_starter.app.selection_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5972__auto__);
});

cljs_starter.app.selection_list.cljs$core$IFn$_invoke$arity$variadic = (function (id,label,items){
var selections = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15140){
var vec__15141 = p__15140;
var k = cljs.core.nth.call(null,vec__15141,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),items)));
return ((function (selections){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5678__auto__ = ((function (selections){
return (function cljs_starter$app$iter__15142(s__15143){
return (new cljs.core.LazySeq(null,((function (selections){
return (function (){
var s__15143__$1 = s__15143;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15143__$1);
if(temp__4425__auto__){
var s__15143__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15143__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__15143__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__15145 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__15144 = (0);
while(true){
if((i__15144 < size__5677__auto__)){
var vec__15148 = cljs.core._nth.call(null,c__5676__auto__,i__15144);
var k = cljs.core.nth.call(null,vec__15148,(0),null);
var v = cljs.core.nth.call(null,vec__15148,(1),null);
cljs.core.chunk_append.call(null,b__15145,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.list_item,id,k,v,selections], null));

var G__15153 = (i__15144 + (1));
i__15144 = G__15153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15145),cljs_starter$app$iter__15142.call(null,cljs.core.chunk_rest.call(null,s__15143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15145),null);
}
} else {
var vec__15149 = cljs.core.first.call(null,s__15143__$2);
var k = cljs.core.nth.call(null,vec__15149,(0),null);
var v = cljs.core.nth.call(null,vec__15149,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.list_item,id,k,v,selections], null),cljs_starter$app$iter__15142.call(null,cljs.core.rest.call(null,s__15143__$2)));
}
} else {
return null;
}
break;
}
});})(selections))
,null,null));
});})(selections))
;
return iter__5678__auto__.call(null,items);
})()], null)], null)], null);
});
;})(selections))
});

cljs_starter.app.selection_list.cljs$lang$maxFixedArity = (2);

cljs_starter.app.selection_list.cljs$lang$applyTo = (function (seq15137){
var G__15138 = cljs.core.first.call(null,seq15137);
var seq15137__$1 = cljs.core.next.call(null,seq15137);
var G__15139 = cljs.core.first.call(null,seq15137__$1);
var seq15137__$2 = cljs.core.next.call(null,seq15137__$1);
return cljs_starter.app.selection_list.cljs$core$IFn$_invoke$arity$variadic(G__15138,G__15139,seq15137__$2);
});
cljs_starter.app.home = (function cljs_starter$app$home(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last Name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,cljs_starter.app.state)));
})], null),"Submit"], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"Reagent-form","Reagent-form",-323835527)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reagent-form",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.home], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.slider = (function cljs_starter$app$slider(id,label,val,min,max){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-starter.app","div","cljs-starter.app/div",-161917335),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id","input#id",349305031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15154_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__15154_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id","input#id",349305031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15155_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__15155_SHARP_.target.value);
})], null)], null)], null);
});
cljs_starter.app.mybody = (function cljs_starter$app$mybody(){
var atom1 = reagent.core.atom.call(null,null);
var atom2 = reagent.core.atom.call(null,null);
return ((function (atom1,atom2){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.slider,"height","height",atom1,(1),(250)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.slider,"weight","weigth",atom2,(1),(500)], null)], null);
});
;})(atom1,atom2))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"my-sliders","my-sliders",170148254)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"my-sliders",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.mybody], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cljs_starter.app.input_element1 = (function cljs_starter$app$input_element1(id,type,min,max,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id.form-control","input#id.form-control",1403497366),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.deref.call(null,val).call(null,id) | (0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
var w = cljs.core.deref.call(null,val).call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var h = (cljs.core.deref.call(null,val).call(null,new cljs.core.Keyword(null,"height","height",1025178622)) / (100));
var b = cljs.core.deref.call(null,val).call(null,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
cljs.core.swap_BANG_.call(null,val,cljs.core.assoc,id,v);

var G__15157 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__15157) {
case "height":
return cljs.core.swap_BANG_.call(null,val,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),((w * (10000)) / (v * v)));

break;
case "weight":
return cljs.core.swap_BANG_.call(null,val,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(v / (h * h)));

break;
case "bmi":
return cljs.core.swap_BANG_.call(null,val,cljs.core.assoc,new cljs.core.Keyword(null,"weight","weight",-1262796205),((v * h) * h));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(id)].join('')));

}
})], null)], null)], null);
});
cljs_starter.app.myslider1 = (function cljs_starter$app$myslider1(id,label,min,max,val){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-2","div.col-sm-2",-509844827),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.input_element1,id,"number",min,max,val], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-10","div.col-sm-10",353164674),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.input_element1,id,"range",min,max,val], null)], null)], null)], null);
});
cljs_starter.app.my_bmi_component = (function cljs_starter$app$my_bmi_component(){
var my_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80),new cljs.core.Keyword(null,"bmi","bmi",1421979636),(24)], null));
return ((function (my_data){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myslider1,new cljs.core.Keyword(null,"height","height",1025178622),"Height",(100),(220),my_data], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myslider1,new cljs.core.Keyword(null,"weight","weight",-1262796205),"Weight",(30),(150),my_data], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.myslider1,new cljs.core.Keyword(null,"bmi","bmi",1421979636),"BMI",(10),(60),my_data], null)], null);
});
;})(my_data))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs_starter.app","cljs_starter.app",-586714206),new cljs.core.Keyword(null,"bmi-component","bmi-component",-916423875)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"bmi-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_starter.app.my_bmi_component], null)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=app.js.map