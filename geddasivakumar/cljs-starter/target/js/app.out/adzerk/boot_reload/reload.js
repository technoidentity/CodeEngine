// Compiled by ClojureScript 1.7.122 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__15008_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15008_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__15013 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15014 = null;
var count__15015 = (0);
var i__15016 = (0);
while(true){
if((i__15016 < count__15015)){
var s = cljs.core._nth.call(null,chunk__15014,i__15016);
var temp__4425__auto___15017 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15017)){
var sheet_15018 = temp__4425__auto___15017;
var temp__4425__auto___15019__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15018.href,changed);
if(cljs.core.truth_(temp__4425__auto___15019__$1)){
var href_uri_15020 = temp__4425__auto___15019__$1;
sheet_15018.ownerNode.href = href_uri_15020.makeUnique().toString();
} else {
}
} else {
}

var G__15021 = seq__15013;
var G__15022 = chunk__15014;
var G__15023 = count__15015;
var G__15024 = (i__15016 + (1));
seq__15013 = G__15021;
chunk__15014 = G__15022;
count__15015 = G__15023;
i__15016 = G__15024;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15013);
if(temp__4425__auto__){
var seq__15013__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15013__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__15013__$1);
var G__15025 = cljs.core.chunk_rest.call(null,seq__15013__$1);
var G__15026 = c__5709__auto__;
var G__15027 = cljs.core.count.call(null,c__5709__auto__);
var G__15028 = (0);
seq__15013 = G__15025;
chunk__15014 = G__15026;
count__15015 = G__15027;
i__15016 = G__15028;
continue;
} else {
var s = cljs.core.first.call(null,seq__15013__$1);
var temp__4425__auto___15029__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15029__$1)){
var sheet_15030 = temp__4425__auto___15029__$1;
var temp__4425__auto___15031__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15030.href,changed);
if(cljs.core.truth_(temp__4425__auto___15031__$2)){
var href_uri_15032 = temp__4425__auto___15031__$2;
sheet_15030.ownerNode.href = href_uri_15032.makeUnique().toString();
} else {
}
} else {
}

var G__15033 = cljs.core.next.call(null,seq__15013__$1);
var G__15034 = null;
var G__15035 = (0);
var G__15036 = (0);
seq__15013 = G__15033;
chunk__15014 = G__15034;
count__15015 = G__15035;
i__15016 = G__15036;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__15041 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15042 = null;
var count__15043 = (0);
var i__15044 = (0);
while(true){
if((i__15044 < count__15043)){
var s = cljs.core._nth.call(null,chunk__15042,i__15044);
var temp__4425__auto___15045 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15045)){
var image_15046 = temp__4425__auto___15045;
var temp__4425__auto___15047__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15046.src,changed);
if(cljs.core.truth_(temp__4425__auto___15047__$1)){
var href_uri_15048 = temp__4425__auto___15047__$1;
image_15046.src = href_uri_15048.makeUnique().toString();
} else {
}
} else {
}

var G__15049 = seq__15041;
var G__15050 = chunk__15042;
var G__15051 = count__15043;
var G__15052 = (i__15044 + (1));
seq__15041 = G__15049;
chunk__15042 = G__15050;
count__15043 = G__15051;
i__15044 = G__15052;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15041);
if(temp__4425__auto__){
var seq__15041__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15041__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__15041__$1);
var G__15053 = cljs.core.chunk_rest.call(null,seq__15041__$1);
var G__15054 = c__5709__auto__;
var G__15055 = cljs.core.count.call(null,c__5709__auto__);
var G__15056 = (0);
seq__15041 = G__15053;
chunk__15042 = G__15054;
count__15043 = G__15055;
i__15044 = G__15056;
continue;
} else {
var s = cljs.core.first.call(null,seq__15041__$1);
var temp__4425__auto___15057__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15057__$1)){
var image_15058 = temp__4425__auto___15057__$1;
var temp__4425__auto___15059__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15058.src,changed);
if(cljs.core.truth_(temp__4425__auto___15059__$2)){
var href_uri_15060 = temp__4425__auto___15059__$2;
image_15058.src = href_uri_15060.makeUnique().toString();
} else {
}
} else {
}

var G__15061 = cljs.core.next.call(null,seq__15041__$1);
var G__15062 = null;
var G__15063 = (0);
var G__15064 = (0);
seq__15041 = G__15061;
chunk__15042 = G__15062;
count__15043 = G__15063;
i__15044 = G__15064;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15067){
var map__15070 = p__15067;
var map__15070__$1 = ((((!((map__15070 == null)))?((((map__15070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15070):map__15070);
var on_jsload = cljs.core.get.call(null,map__15070__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15070,map__15070__$1,on_jsload){
return (function (p1__15065_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15065_SHARP_,".js");
});})(map__15070,map__15070__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15070,map__15070__$1,on_jsload){
return (function (p1__15066_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15066_SHARP_).makeUnique());
});})(js_files,map__15070,map__15070__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15070,map__15070__$1,on_jsload){
return (function() { 
var G__15072__delegate = function (_){
return on_jsload.call(null);
};
var G__15072 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15073__i = 0, G__15073__a = new Array(arguments.length -  0);
while (G__15073__i < G__15073__a.length) {G__15073__a[G__15073__i] = arguments[G__15073__i + 0]; ++G__15073__i;}
  _ = new cljs.core.IndexedSeq(G__15073__a,0);
} 
return G__15072__delegate.call(this,_);};
G__15072.cljs$lang$maxFixedArity = 0;
G__15072.cljs$lang$applyTo = (function (arglist__15074){
var _ = cljs.core.seq(arglist__15074);
return G__15072__delegate(_);
});
G__15072.cljs$core$IFn$_invoke$arity$variadic = G__15072__delegate;
return G__15072;
})()
;})(js_files,map__15070,map__15070__$1,on_jsload))
,((function (js_files,map__15070,map__15070__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15070,map__15070__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__15079_15083 = cljs.core.seq.call(null,things_to_log);
var chunk__15080_15084 = null;
var count__15081_15085 = (0);
var i__15082_15086 = (0);
while(true){
if((i__15082_15086 < count__15081_15085)){
var t_15087 = cljs.core._nth.call(null,chunk__15080_15084,i__15082_15086);
console.log(t_15087);

var G__15088 = seq__15079_15083;
var G__15089 = chunk__15080_15084;
var G__15090 = count__15081_15085;
var G__15091 = (i__15082_15086 + (1));
seq__15079_15083 = G__15088;
chunk__15080_15084 = G__15089;
count__15081_15085 = G__15090;
i__15082_15086 = G__15091;
continue;
} else {
var temp__4425__auto___15092 = cljs.core.seq.call(null,seq__15079_15083);
if(temp__4425__auto___15092){
var seq__15079_15093__$1 = temp__4425__auto___15092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15079_15093__$1)){
var c__5709__auto___15094 = cljs.core.chunk_first.call(null,seq__15079_15093__$1);
var G__15095 = cljs.core.chunk_rest.call(null,seq__15079_15093__$1);
var G__15096 = c__5709__auto___15094;
var G__15097 = cljs.core.count.call(null,c__5709__auto___15094);
var G__15098 = (0);
seq__15079_15083 = G__15095;
chunk__15080_15084 = G__15096;
count__15081_15085 = G__15097;
i__15082_15086 = G__15098;
continue;
} else {
var t_15099 = cljs.core.first.call(null,seq__15079_15093__$1);
console.log(t_15099);

var G__15100 = cljs.core.next.call(null,seq__15079_15093__$1);
var G__15101 = null;
var G__15102 = (0);
var G__15103 = (0);
seq__15079_15083 = G__15100;
chunk__15080_15084 = G__15101;
count__15081_15085 = G__15102;
i__15082_15086 = G__15103;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__15105 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15105,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15105);

adzerk.boot_reload.reload.reload_css.call(null,G__15105);

adzerk.boot_reload.reload.reload_img.call(null,G__15105);

return G__15105;
});

//# sourceMappingURL=reload.js.map