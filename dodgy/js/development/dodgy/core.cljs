(ns dodgy.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [reagent.cookies :as cookies]
            [dodgy.render :as render]
            [dodgy.stages :as stages]))

(def ^:private default-player-position
  {:x -20
   :y 20})

(defn setup []
  (q/frame-rate 30)
  {:text
   (str
    "DODGY - a game about dodging squares.\n"
    "Max score: " (cookies/get :max-score 0) "\n"
    "\n"
    "Controls:\n"
    "- The arrow keys control acceleration.\n"
    "\n"
    "Rules:\n"
    "- Hitting orange squares ends the game.\n"
    "- Hitting purple squares increments the score counter.\n"
    "- The longer you play the more frequently orange squares spawn.\n"
    "- The squares move at the output of a function of your speed.\n"
    "\n"
    "Good luck!\n"
    "Press any key to continue...")
   :speed         0
   :distance      0
   :player        {:x -20
                   :y 20}
   :enemies       []
   :point-squares []
   :time          0
   :score         0
   :max-score     0
   :stage         "title"})



(defn ^:export run-sketch []
  (let [width  (- (.-innerWidth js/window) 15)
        height (- (.-innerHeight js/window) 20)]
    (q/defsketch dodgy
      :host "dodgy"
      :size [width height]
      :setup setup
      :update stages/update-stage-state
      :draw render/render-state
      :middleware [m/fun-mode])))
