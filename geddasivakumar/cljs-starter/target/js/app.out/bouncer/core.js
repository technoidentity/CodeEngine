// Compiled by ClojureScript 1.7.122 {}
goog.provide('bouncer.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
bouncer.core.build_multi_step = (function bouncer$core$build_multi_step(var_args){
var args17227 = [];
var len__5964__auto___17233 = arguments.length;
var i__5965__auto___17234 = (0);
while(true){
if((i__5965__auto___17234 < len__5964__auto___17233)){
args17227.push((arguments[i__5965__auto___17234]));

var G__17235 = (i__5965__auto___17234 + (1));
i__5965__auto___17234 = G__17235;
continue;
} else {
}
break;
}

var G__17229 = args17227.length;
switch (G__17229) {
case 2:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17227.length)].join('')));

}
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2 = (function (key_or_vec,fn_vec){
return bouncer.core.build_multi_step.call(null,key_or_vec,fn_vec,cljs.core.PersistentVector.EMPTY);
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3 = (function (key_or_vec,p__17230,acc){
while(true){
var vec__17231 = p__17230;
var f_or_list = cljs.core.nth.call(null,vec__17231,(0),null);
var rest = cljs.core.nthnext.call(null,vec__17231,(1));
if(cljs.core.not.call(null,f_or_list)){
return acc;
} else {
if(cljs.core.sequential_QMARK_.call(null,f_or_list)){
var vec__17232 = f_or_list;
var f = cljs.core.nth.call(null,vec__17232,(0),null);
var opts = cljs.core.nthnext.call(null,vec__17232,(1));
var G__17237 = key_or_vec;
var G__17238 = rest;
var G__17239 = cljs.core.conj.call(null,acc,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,key_or_vec], null),opts));
key_or_vec = G__17237;
p__17230 = G__17238;
acc = G__17239;
continue;
} else {
var G__17240 = key_or_vec;
var G__17241 = rest;
var G__17242 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_or_list,key_or_vec], null));
key_or_vec = G__17240;
p__17230 = G__17241;
acc = G__17242;
continue;

}
}
break;
}
});

bouncer.core.build_multi_step.cljs$lang$maxFixedArity = 3;
/**
 * Takes two arguments:
 * 
 *   `parent-keyword` is a :keyword - or a vector of :keywords denoting a path in a associative structure
 * 
 *   `validations-map` is a map of forms following this spec:
 * 
 * 
 *    {:keyword [f g] :another-keyword h}
 * 
 * 
 *   Merges `:parent-keyword` with every first element of validations-map, transforming it into:
 * 
 * 
 *    ([:parent-keyword :keyword] [f g] [:parent-keyword :another-keyword] h)
 */
bouncer.core.merge_path = (function bouncer$core$merge_path(parent_key,validations_map){
var parent_key__$1 = (((parent_key instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_key], null):parent_key);
return cljs.core.mapcat.call(null,((function (parent_key__$1){
return (function (p__17245){
var vec__17246 = p__17245;
var key = cljs.core.nth.call(null,vec__17246,(0),null);
var validations = cljs.core.nth.call(null,vec__17246,(1),null);
if(cljs.core.vector_QMARK_.call(null,key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,key)),validations], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))),validations], null);
}
});})(parent_key__$1))
,validations_map);
});
bouncer.core.build_steps = (function bouncer$core$build_steps(p__17247){
var vec__17251 = p__17247;
var head = cljs.core.nth.call(null,vec__17251,(0),null);
var tail = cljs.core.nthnext.call(null,vec__17251,(1));
var forms = vec__17251;
var forms__$1 = ((cljs.core.map_QMARK_.call(null,head))?cljs.core.vec.call(null,cljs.core.mapcat.call(null,cljs.core.identity,head)):forms);
return cljs.core.reduce.call(null,((function (forms__$1,vec__17251,head,tail,forms){
return (function (acc,p__17252){
var vec__17253 = p__17252;
var key_or_vec = cljs.core.nth.call(null,vec__17253,(0),null);
var sym_or_coll = cljs.core.nth.call(null,vec__17253,(1),null);
var rule = vec__17253;
if(cljs.core.vector_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer.core.build_multi_step.call(null,key_or_vec,sym_or_coll));
} else {
if(cljs.core.map_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer$core$build_steps.call(null,bouncer.core.merge_path.call(null,key_or_vec,sym_or_coll)));
} else {
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_or_coll,key_or_vec], null));

}
}
});})(forms__$1,vec__17251,head,tail,forms))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),forms__$1));
});
bouncer.core.pre_condition_met_QMARK_ = (function bouncer$core$pre_condition_met_QMARK_(pre_fn,map){
var or__4906__auto__ = (pre_fn == null);
if(or__4906__auto__){
return or__4906__auto__;
} else {
return pre_fn.call(null,map);
}
});
/**
 * Wraps pred in the context of validating a single value
 * 
 *   - `acc`  is the map being validated
 * 
 *   - `pred` is a validator
 * 
 *   - `k`    the path to the value to be validated in the associative structure `acc`
 * 
 *   - `args` any extra args to pred
 * 
 *   It only runs pred if:
 * 
 *   - the validator contains a pre-condition *and* it is met or;
 *   - the validator is optional  *and* there is a non-nil value to be validated (this information is read from pred's metadata) or;
 *   - there are no previous errors for the given path
 * 
 *   Returns `acc` augmented with a namespace qualified ::errors keyword
 */
bouncer.core.wrap = (function bouncer$core$wrap(message_fn,acc,p__17255){
var vec__17262 = p__17255;
var pred = cljs.core.nth.call(null,vec__17262,(0),null);
var k = cljs.core.nth.call(null,vec__17262,(1),null);
var args = cljs.core.nthnext.call(null,vec__17262,(2));
var k__$1 = ((cljs.core.vector_QMARK_.call(null,k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var error_path = cljs.core.cons.call(null,new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289),k__$1);
var map__17263 = cljs.core.meta.call(null,pred);
var map__17263__$1 = ((((!((map__17263 == null)))?((((map__17263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17263):map__17263);
var metadata = map__17263__$1;
var optional = cljs.core.get.call(null,map__17263__$1,new cljs.core.Keyword(null,"optional","optional",2053951509),false);
var default_message_format = cljs.core.get.call(null,map__17263__$1,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"Custom validation failed for %s");
var meta_with_defaults = cljs.core.merge.call(null,metadata,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),default_message_format,new cljs.core.Keyword(null,"optional","optional",2053951509),optional], null));
var vec__17264 = cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.keyword_QMARK_),args);
var args__$1 = cljs.core.nth.call(null,vec__17264,(0),null);
var opts = cljs.core.nth.call(null,vec__17264,(1),null);
var map__17265 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__17265__$1 = ((((!((map__17265 == null)))?((((map__17265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17265):map__17265);
var message = cljs.core.get.call(null,map__17265__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var pre = cljs.core.get.call(null,map__17265__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));
var pred_subject = cljs.core.get_in.call(null,acc,k__$1);
if(cljs.core.truth_(bouncer.core.pre_condition_met_QMARK_.call(null,pre,acc))){
if(cljs.core.truth_((function (){var or__4906__auto__ = (function (){var and__4894__auto__ = optional;
if(cljs.core.truth_(and__4894__auto__)){
return (pred_subject == null);
} else {
return and__4894__auto__;
}
})();
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
var or__4906__auto____$1 = !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,acc,error_path)));
if(or__4906__auto____$1){
return or__4906__auto____$1;
} else {
return cljs.core.apply.call(null,pred,pred_subject,args__$1);
}
}
})())){
return acc;
} else {
return cljs.core.update_in.call(null,acc,error_path,((function (k__$1,error_path,map__17263,map__17263__$1,metadata,optional,default_message_format,meta_with_defaults,vec__17264,args__$1,opts,map__17265,map__17265__$1,message,pre,pred_subject,vec__17262,pred,k,args){
return (function (p1__17254_SHARP_){
return cljs.core.conj.call(null,p1__17254_SHARP_,message_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),k__$1,new cljs.core.Keyword(null,"value","value",305978217),pred_subject,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.seq.call(null,args__$1),new cljs.core.Keyword(null,"metadata","metadata",1799301597),meta_with_defaults,new cljs.core.Keyword(null,"message","message",-406056002),message], null)));
});})(k__$1,error_path,map__17263,map__17263__$1,metadata,optional,default_message_format,meta_with_defaults,vec__17264,args__$1,opts,map__17265,map__17265__$1,message,pre,pred_subject,vec__17262,pred,k,args))
);
}
} else {
return acc;
}
});
/**
 * Internal Use.
 * 
 *   Chain of responsibility.
 * 
 *   Takes the current state and a collection of validators `fs`
 * 
 *   Will run all validators against `old-state` and eventually return a vector with the result - the errors map - and the new state - the original map augmented with the errors map.
 * 
 *   See also `wrap`
 */
bouncer.core.wrap_chain = (function bouncer$core$wrap_chain(var_args){
var args__5971__auto__ = [];
var len__5964__auto___17271 = arguments.length;
var i__5965__auto___17272 = (0);
while(true){
if((i__5965__auto___17272 < len__5964__auto___17271)){
args__5971__auto__.push((arguments[i__5965__auto___17272]));

var G__17273 = (i__5965__auto___17272 + (1));
i__5965__auto___17272 = G__17273;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((2) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((2)),(0))):null);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5972__auto__);
});

bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic = (function (old_state,message_fn,fs){
var new_state = cljs.core.reduce.call(null,cljs.core.partial.call(null,bouncer.core.wrap,message_fn),old_state,fs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289).cljs$core$IFn$_invoke$arity$1(new_state),new_state], null);
});

bouncer.core.wrap_chain.cljs$lang$maxFixedArity = (2);

bouncer.core.wrap_chain.cljs$lang$applyTo = (function (seq17268){
var G__17269 = cljs.core.first.call(null,seq17268);
var seq17268__$1 = cljs.core.next.call(null,seq17268);
var G__17270 = cljs.core.first.call(null,seq17268__$1);
var seq17268__$2 = cljs.core.next.call(null,seq17268__$1);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic(G__17269,G__17270,seq17268__$2);
});
/**
 * Internal use.
 * 
 *   Validates the map m using the validation functions fs.
 * 
 *   Returns a vector where the first element is the map of validation errors if any and the second is the original map (possibly) augmented with the errors map.
 */
bouncer.core.validate_STAR_ = (function bouncer$core$validate_STAR_(message_fn,m,fs){
var G__17279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
var vec__17280 = G__17279;
var errors = cljs.core.nth.call(null,vec__17280,(0),null);
var state = cljs.core.nth.call(null,vec__17280,(1),null);
var ret = vec__17280;
var fs__$1 = fs;
var G__17279__$1 = G__17279;
var fs__$2 = fs__$1;
while(true){
var vec__17281 = G__17279__$1;
var errors__$1 = cljs.core.nth.call(null,vec__17281,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__17281,(1),null);
var ret__$1 = vec__17281;
var fs__$3 = fs__$2;
if(cljs.core.seq.call(null,fs__$3)){
var G__17282 = bouncer.core.wrap_chain.call(null,state__$1,message_fn,cljs.core.first.call(null,fs__$3));
var G__17283 = cljs.core.rest.call(null,fs__$3);
G__17279__$1 = G__17282;
fs__$2 = G__17283;
continue;
} else {
return ret__$1;
}
break;
}
});
/**
 * Use together with `validate`, e.g.:
 * 
 * 
 *    (core/validate core/with-default-messages {}
 *                   :name v/required)
 */
bouncer.core.with_default_messages = (function bouncer$core$with_default_messages(error){
var map__17286 = error;
var map__17286__$1 = ((((!((map__17286 == null)))?((((map__17286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17286):map__17286);
var message = cljs.core.get.call(null,map__17286__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var path = cljs.core.get.call(null,map__17286__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata = cljs.core.get.call(null,map__17286__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
return goog.string.format((function (){var or__4906__auto__ = message;
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141).cljs$core$IFn$_invoke$arity$1(metadata);
}
})(),cljs.core.name.call(null,cljs.core.peek.call(null,path)));
});
/**
 * Takes a
 * 
 *   - `message-fn` (optional) responsible for transforming error metadata into
 *   the validation result (defaults to `with-default-messages`)
 * 
 *   - `m` map to be validated
 * 
 *   - `forms` validations to be performed on the map
 * 
 *   forms can be a single validator set or a sequence of key/value pairs where:
 * 
 *   key   ==> :keyword or [:a :path]
 * 
 *   value ==> validation-function or
 *          validator-set or
 *         [[validation-function args+opts]] or
 *         [validation-function another-validation-function] or
 *         [validation-function [another-validation-function args+opts]]
 * 
 *   e.g.:
 * 
 * 
 *    (core/validate a-map
 *             :name v/required
 *             :age  [v/required
 *                   [v/number :message "age must be a number"]]
 *             [:passport :number] v/positive)
 * 
 * 
 *   Returns a vector where the first element is the map of validation errors if
 *   any and the second is the original map (possibly) augmented with the errors
 *   map.
 * 
 *   See also `defvalidator`
 */
bouncer.core.validate = (function bouncer$core$validate(var_args){
var args__5971__auto__ = [];
var len__5964__auto___17291 = arguments.length;
var i__5965__auto___17292 = (0);
while(true){
if((i__5965__auto___17292 < len__5964__auto___17291)){
args__5971__auto__.push((arguments[i__5965__auto___17292]));

var G__17293 = (i__5965__auto___17292 + (1));
i__5965__auto___17292 = G__17293;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((0) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((0)),(0))):null);
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(argseq__5972__auto__);
});

bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__17289 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.core.with_default_messages,args], null));
var message_fn = cljs.core.nth.call(null,vec__17289,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__17289,(1),null);
var vec__17290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null);
var m = cljs.core.nth.call(null,vec__17290,(0),null);
var forms = cljs.core.nth.call(null,vec__17290,(1),null);
return bouncer.core.validate_STAR_.call(null,message_fn,m,bouncer.core.build_steps.call(null,forms));
});

bouncer.core.validate.cljs$lang$maxFixedArity = (0);

bouncer.core.validate.cljs$lang$applyTo = (function (seq17288){
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17288));
});
/**
 * Takes a map and one or more validation functions with semantics provided by "validate". Returns true if the map passes all validations. False otherwise.
 */
bouncer.core.valid_QMARK_ = (function bouncer$core$valid_QMARK_(var_args){
var args__5971__auto__ = [];
var len__5964__auto___17295 = arguments.length;
var i__5965__auto___17296 = (0);
while(true){
if((i__5965__auto___17296 < len__5964__auto___17295)){
args__5971__auto__.push((arguments[i__5965__auto___17296]));

var G__17297 = (i__5965__auto___17296 + (1));
i__5965__auto___17296 = G__17297;
continue;
} else {
}
break;
}

var argseq__5972__auto__ = ((((0) < args__5971__auto__.length))?(new cljs.core.IndexedSeq(args__5971__auto__.slice((0)),(0))):null);
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5972__auto__);
});

bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.apply.call(null,bouncer.core.validate,args)));
});

bouncer.core.valid_QMARK_.cljs$lang$maxFixedArity = (0);

bouncer.core.valid_QMARK_.cljs$lang$applyTo = (function (seq17294){
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17294));
});

//# sourceMappingURL=core.js.map