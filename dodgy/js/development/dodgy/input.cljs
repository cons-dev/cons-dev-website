(ns dodgy.input)

(def keystates (atom {}))
(def keys-by-code {37 :left 38 :up 39 :right 40 :down})

(defn update-keystate! [state code]
  (when-let [k (get keys-by-code code)]
    (swap! keystates assoc k state)))

(.addEventListener js/window "keydown" (fn [e] (update-keystate! :pressed (. e -keyCode))))
(.addEventListener js/window "keyup" (fn [e] (update-keystate! nil (. e -keyCode))))

(defn get-x-accel []
  (+ (if (= (get @keystates :left) :pressed) -0.5 0)
     (if (= (get @keystates :right) :pressed) 0.5 0)))

(defn get-y-accel []
  (+ (if (= (get @keystates :up) :pressed) -0.5 0)
     (if (= (get @keystates :down) :pressed) 0.5 0)))
