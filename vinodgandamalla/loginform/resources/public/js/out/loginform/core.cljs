(ns loginform.core
  (:require [reagent.core :as reagent ]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            ;; [clj-time.format :as f]
            ))

(defn input-element
  "An input element which updates its value and on focus parameters on change, blur, and focus"
  [id name type value in-focus]
  [:input {:id id
           :name name
           :class "form-control"
           :type type
           :required ""
           :value @value
           :on-change #(reset! value (-> % .-target .-value))

           ;; Below we change the state of in-focus

           :on-focus #(swap! in-focus not)
           :on-blur #(swap! in-focus not)}])


(defn input-and-prompt
  "Creates an input box and a prompt box that appears above the input when the input comes into focus. Also throws in a little required message"
  [label-value input-name input-type input-element-arg prompt-element required?]
  (let [input-focus (reagent/atom false)]
    (fn []
      [:div
       [:label label-value]
       (if @input-focus
         prompt-element
         [:div])
       [input-element input-name input-name input-type input-element-arg input-focus]
       (if (and required? (= "" @input-element-arg))
         [:div "Field is required!"]
         [:div])])))



(defn email-form
  [email-address-atom]
  (input-and-prompt "Email id"
                    "email"
                    "email"
                    email-address-atom
                    (prompt-message "What's your email?")
                    true))

(defn prompt-message
  "A Prompt that will animate to help the user with a given input"
  [message]
  [:div {:class "my-messages"}
   [:div {:class "prompt message-animation"} [:p message]]])



(defn name-form [name-atom]
  (input-and-prompt "name"
                    "name"
                    "text"
                    name-atom
                    (prompt-message "What's your name?")
                    true))

(defn password-form [password-atom]
  (input-and-prompt "password"
                    "password"
                    "password"
                    password-atom
                    (prompt-message "What's your password?")
                    true))







(def data "Sivakumar@gmail.com")

(defn validationz [x]
  (b/validate {:email-address x}
              :email-address [v/required v/email]))

(defn myvalidationz [y]
  (first (:email-address (first (validationz y)))))


(defn home-page []
  (let [email-address (reagent/atom nil)
        name1 (reagent/atom nil)
        password1 (reagent/atom nil)]
    (fn []
      [:div.container
       [:div {:class "signup-wrapper"}
        [:h2 "Welcome"]
        [:form
         [email-form email-address]
         [name-form name1]
         [password-form password1]]
        ]])))



(reagent/render-component [home-page] (.-body js/document))



;; (def mydata-set {:user-name "siva" :email "geddasiva777@gmail.com" :password "7@hdfhgjkshd@100"})
;; (def my-data1 {:user-name nil :email nil :password nil})

;; (defn validator [data-set]
;;   (b/validate data-set
;;               :user-name [[v/required :message "filed is required"] [v/string :message "Enter valid user name"]]
;;               :email [[v/required :message "file is required"] [v/email :message "Enter valid email-id"]]
;;               :password [[v/required :message "filed is required"] [v/string  :message "Enter valid password"]]
;;               ))

;; ;; (validator data-set)
;; ;; (validator my-data1)



;; (defn input-element [id ttype data-set in-focus]
;;   [:input#id.form-control {:type ttype
;;                            :value (@data-set id)
;;                            :on-change #(swap! data-set assoc id (-> % .-target .-value))
;;                            :on-focus #(swap! in-focus not)
;;                            :on-blur #(swap! in-focus not)}])

;; (defn input-validate [id label ttype data-set]
;;   (let [input-focus (reagent/atom false)]
;;     (fn []
;;       [:div
;;        [:label label]
;;        [input-element id ttype data-set input-focus]
;;        [:div
;;         [str
;;          [validator mydata-set]]]
;;        (let [error (first (validator data-set))]
;;          (if (= error nil)
;;            [:div]
;;            [:div (first (error id))]))
;;        ])))


;; (defn home []
;;   (let [my-data (reagent/atom  {:user-name nil :email nil :password nil})]
;;     (fn []
;;       [:div.container
;;        [input-validate :user-name "User name" "text"  my-data]
;;        [input-validate :email "email-id" "email" my-data ]
;;        [input-validate :password "Password" "password" my-data]])))


;; (defn render-sample []
;;   (reagent/render-component [home]
;;                             (.-body js/document)))

;; (render-sample)
