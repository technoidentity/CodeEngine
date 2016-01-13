// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_apps.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('bouncer.validators');
goog.require('bouncer.core');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
cljs_apps.core.validator = (function cljs_apps$core$validator(data_set){
return cljs.core.first.call(null,bouncer.core.validate.call(null,data_set,new cljs.core.Keyword(null,"user-name","user-name",1302913545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid user name"], null)], null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.email,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid email-id"], null)], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.Keyword(null,"message","message",-406056002),"Filed is required"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.string,new cljs.core.Keyword(null,"message","message",-406056002),"Enter valid password"], null)], null)));
});
cljs_apps.core.input_element = (function cljs_apps$core$input_element(id,ttype,data_set,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#id.form-control","input#id.form-control",1403497366),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),ttype,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,data_set).call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__6767_SHARP_){
return cljs.core.swap_BANG_.call(null,data_set,cljs.core.assoc,id,p1__6767_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.reset_BANG_.call(null,in_focus,"on");
})], null)], null);
});
cljs_apps.core.input_validate = (function cljs_apps$core$input_validate(id,label,ttype,data_set){
var input_focus = reagent.core.atom.call(null,null);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.input_element,id,ttype,data_set,input_focus], null),(cljs.core.truth_(cljs.core.deref.call(null,input_focus))?((cljs.core._EQ_.call(null,null,cljs_apps.core.validator.call(null,cljs.core.deref.call(null,data_set))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),[cljs.core.str(cljs.core.first.call(null,cljs_apps.core.validator.call(null,cljs.core.deref.call(null,data_set)).call(null,id)))].join('')], null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null);
});
;})(input_focus))
});
cljs_apps.core.home = (function cljs_apps$core$home(){
var my_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (my_data){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Form validation using Bouncer Library"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.input_validate,new cljs.core.Keyword(null,"user-name","user-name",1302913545),"User name","text",my_data], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.input_validate,new cljs.core.Keyword(null,"email","email",1415816706),"email-id","email",my_data], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.input_validate,new cljs.core.Keyword(null,"password","password",417022471),"Password","password",my_data], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (my_data){
return (function (){
if(cljs.core._EQ_.call(null,null,cljs_apps.core.validator.call(null,cljs.core.deref.call(null,my_data)))){
return alert("You are successfully Registered");
} else {
return alert("please enter valid inputs");
}
});})(my_data))
], null),"Submit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str(cljs.core.deref.call(null,my_data))].join('')], null)], null)], null);
});
;})(my_data))
});
cljs_apps.core.render_sample = (function cljs_apps$core$render_sample(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_apps.core.home], null),document.getElementById("app"));
});
cljs_apps.core.render_sample.call(null);

//# sourceMappingURL=core.js.map