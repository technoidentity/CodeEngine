// Compiled by ClojureScript 1.7.170 {}
goog.provide('loginform.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('bouncer.core');
goog.require('bouncer.validators');
/**
 * An input element which updates its value and on focus parameters on change, blur, and focus
 */
loginform.core.input_element = (function loginform$core$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),name,cljs.core.deref.call(null,value),(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),type,id,"form-control",(function (p1__6799_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__6799_SHARP_.target.value);
}),""])], null);
});
/**
 * Creates an input box and a prompt box that appears above the input when the input comes into focus. Also throws in a little required message
 */
loginform.core.input_and_prompt = (function loginform$core$input_and_prompt(label_value,input_name,input_type,input_element_arg,prompt_element,required_QMARK_){
var input_focus = reagent.core.atom.call(null,false);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label_value], null),(cljs.core.truth_(cljs.core.deref.call(null,input_focus))?prompt_element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [loginform.core.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null),(cljs.core.truth_((function (){var and__4659__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,input_element_arg));
} else {
return and__4659__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Field is required!"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null);
});
;})(input_focus))
});
loginform.core.email_form = (function loginform$core$email_form(email_address_atom){
return loginform.core.input_and_prompt.call(null,"Email id","email","email",email_address_atom,loginform.core.prompt_message.call(null,"What's your email?"),true);
});
/**
 * A Prompt that will animate to help the user with a given input
 */
loginform.core.prompt_message = (function loginform$core$prompt_message(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-messages"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"prompt message-animation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null)], null)], null);
});
loginform.core.name_form = (function loginform$core$name_form(name_atom){
return loginform.core.input_and_prompt.call(null,"name","name","text",name_atom,loginform.core.prompt_message.call(null,"What's your name?"),true);
});
loginform.core.password_form = (function loginform$core$password_form(password_atom){
return loginform.core.input_and_prompt.call(null,"password","password","password",password_atom,loginform.core.prompt_message.call(null,"What's your password?"),true);
});
loginform.core.data = "Sivakumar@gmail.com";
loginform.core.validationz = (function loginform$core$validationz(x){
return bouncer.core.validate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email-address","email-address",-910550248),x], null),new cljs.core.Keyword(null,"email-address","email-address",-910550248),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,bouncer.validators.email], null));
});
loginform.core.myvalidationz = (function loginform$core$myvalidationz(y){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"email-address","email-address",-910550248).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,loginform.core.validationz.call(null,y))));
});
loginform.core.home_page = (function loginform$core$home_page(){
var email_address = reagent.core.atom.call(null,null);
var name1 = reagent.core.atom.call(null,null);
var password1 = reagent.core.atom.call(null,null);
return ((function (email_address,name1,password1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"signup-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loginform.core.email_form,email_address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loginform.core.name_form,name1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loginform.core.password_form,password1], null)], null)], null)], null);
});
;})(email_address,name1,password1))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loginform.core.home_page], null),document.body);

//# sourceMappingURL=core.js.map