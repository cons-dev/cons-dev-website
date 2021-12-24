(ns dodgy.render
  (:require [quil.core :as q  :include-macros true]))


(def enemy-color [0xf5 0x7f 0x17])
(def score-color [0x7c 0x1f 0xa3])
(def player-color [0xe5 0x39 0x35])
(def bg [0xff 0xff 0xff])

(defn render-square [[r g b] thickness size {x :x y :y}]
  (let [inner (- size (* thickness 2))]
    (q/fill r g b)
    (q/rect x y size size)))


(defn render-entities [{spawned? :spawned? player :player enemies :enemies point-squares :point-squares}]
  (q/text (str spawned?) 100 100)
  (q/with-translation [(/ (q/width) 2)
                       (/ (q/height) 2)]

    (dorun (map (partial render-square score-color 2.5 20) point-squares))
    (dorun (map (partial render-square enemy-color 2.5 20) enemies))

    (render-square player-color 2.5 20 player)))

(defn render-state [state]
  (q/background 0xff 0xff 0xff)
  (q/stroke 0xff 0xff 0xff)
  (render-entities state)
  (q/fill player-color)
  (q/text (str (:text state)
               (if (= (int (mod (q/seconds) 2)) 0)
                 "█"
                 "")) 10 20))
