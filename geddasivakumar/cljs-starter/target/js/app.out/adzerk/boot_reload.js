// Compiled by ClojureScript 1.7.122 {}
goog.provide('adzerk.boot_reload');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('cljs_starter.app');
adzerk.boot_reload.client.connect.call(null,"ws://localhost:46220",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return cljs_starter.app.init.call(null);
})], null));

//# sourceMappingURL=boot_reload.js.map