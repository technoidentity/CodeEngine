(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] cljs-starter.app))
(client/connect "ws://localhost:46220" {:on-jsload (fn* [] (cljs-starter.app/init))})