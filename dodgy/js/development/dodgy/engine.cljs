(ns dodgy.engine
  (:require [quil.core :as q :include-macros true]))


;; these define the two functions that an enemy may have


(defn entity-bounds
  "Returns the rectangle representing the bounds of a size 20 square entity."
  [{:keys [:x :y]}]
  [(- x 20) x (- y 20) y])

(defn intersect?
  "Whether the two given rectangles intersect."
  [[axmin axmax aymin aymax] [bxmin bxmax bymin bymax]]
  (and (>= aymax bymin) (<= aymin bymax) (>= axmax bxmin) (<= axmin bxmax)))

(defn player-alive?
  "Returns whether the player has stayed clear of the walls and enemies."
  [player min-x max-x min-y max-y enemies]
  (and (intersect? [(:x player) (:x player) (:y player) (:y player)] [min-x max-x min-y max-y])
       (not-any? (fn [enemy] (intersect? (entity-bounds player) (entity-bounds enemy))) enemies)))

(defn gc-entities
  "Filters out out of bounds entities."
  [max-y entities]
  (filter (fn [ent]
            (let [ent-y (:y ent)]
              (<= ent-y (+ max-y 30))))
          entities))

(defn update-point-square-pos
  "Updates the position of the point dodgy."
  [player max-y point-squares speed]
  (->> point-squares
       (filter (fn [point] (not (intersect? (entity-bounds player) (entity-bounds point)))))
       (gc-entities max-y)
       (map (fn [{mov-fn :mov-fn :as point}]
              (apply mov-fn [point speed])))))

(defn update-enemy-pos
  "Updates the positions of each enemy."
  [max-y enemies speed]
  (->> enemies
       (gc-entities max-y)
       (map (fn [{mov-fn :mov-fn :as enemy}]
              (apply mov-fn [enemy speed])))))


(defn gen-mov-fn []
  (partial (rand-nth [(fn [mul {y :y :as e} speed] (merge e {:y (+ (* (Math/pow speed 1.2) mul) y)}))
                      (fn [mul {y :y :as e} speed] (merge e {:y (+ (* (Math/pow speed 1.1) mul) y)}))
                      (fn [mul {y :y :as e} speed] (merge e {:y (+ (* (Math/pow speed 1.3) mul) y)}))
                      (fn [mul {y :y :as e} speed] (merge e {:y (+ (* speed mul) y)}))
                      (fn [mul {y :y :as e} speed] (merge e {:y (+ (* speed y mul 0.5) y)}))])
           (q/random 1.5 0.5)))

(defn gen-enemies
  "Generates enemies and updates their positions."
  [min-x max-x min-y max-y time speed enemies]
  (let [spawn-freq (/ 60 (* (inc (/ (+ 10 time) 500))
                            (/ (q/width) 700)))]
    (if (and (= 0 (mod time (max 1 (int spawn-freq))))
             (< 0.4 (max speed (- speed)))
             (< 100 time))
      (concat (update-enemy-pos max-y enemies speed)
              (map (fn []
                     {:x       (q/random min-x max-x)
                      :y       (- min-y 20)
                      :mov-fn (gen-mov-fn)})
                   (repeat (max 1 (int (/ 1 spawn-freq))) 1)))
      (update-enemy-pos max-y enemies speed))))

(defn update-score
  "Updates the score of the player."
  [player score point-squares]
  (reduce (fn [acc point]
            (if (intersect? (entity-bounds player) (entity-bounds point))
              (inc acc)
              (+ acc 0))) score point-squares))

(defn gen-point-squares
  "This calculates when the enemies should be spawned in the game.
  the spawn frequency calculation computes the frequency with which
  enemies will spawn."
  [player min-x max-x min-y max-y point-squares speed time]
  (if (and (= 0 (mod time (int (/ 128 (/ (q/width) 700)))))
           (< 0.4 (max speed (- speed))))
    (conj (update-point-square-pos player max-y point-squares speed)
          {:x      (q/random min-x max-x)
           :y      (- min-y 20)
           :mov-fn (gen-mov-fn)})
    (update-point-square-pos player max-y point-squares speed)))

(defn update-player
  "This updates the player state."
  [player-speed-x player-speed-y player-x player-y]
  {:x       (+ player-x player-speed-x)
   :y       (+ player-y player-speed-y)
   :speed-x player-speed-x
   :speed-y player-speed-y})
