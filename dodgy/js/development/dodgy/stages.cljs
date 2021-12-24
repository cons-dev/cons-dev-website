(ns dodgy.stages
  (:require [dodgy.input :as io]
            [dodgy.engine :as engine]
            [reagent.cookies :as cookies]
            [quil.core :as q :include-macros true]))

(defn title-stage
  "The initial stage of the game where the title is displayed."
  [state]
  (merge
   state
   (when (q/key-pressed?)
     {:stage "game"})))

(defn game-stage
  "The function that executes during the game stage."
  [{:as                     state
    enemies                 :enemies
    {player-x       :x
     player-y       :y
     player-speed-x :speed-x
     player-speed-y :speed-y
     :as            player} :player
    time                    :time
    score                   :score
    point-squares           :point-squares
    distance                "distance"}]
  (merge
   state
   (let [new-player-speed-x (+ player-speed-x (io/get-x-accel))
         new-player-speed-y (+ player-speed-y (io/get-y-accel))
         min-x              (- (/ (q/width) 2))
         max-x              (- (/ (q/width) 2) 20)
         min-y              (- (/ (q/height) 2))
         max-y              (- (/ (q/height) 2) 20)
         speed              (q/sqrt (+ (q/pow new-player-speed-x 2) (q/pow new-player-speed-y 2)))]
     (if (engine/player-alive? player min-x max-x min-y max-y enemies)
       {:text          (str "Score: " (:score state) "\n"
                            "Frame: " (:time state) "\n"
                            "Speed: " (.toFixed (:speed state) 1))
        :speed         speed
        :distance      (+ distance speed)
        :player        (engine/update-player new-player-speed-x new-player-speed-y player-x player-y)
        :enemies       (engine/gen-enemies min-x max-x min-y max-y time speed enemies)
        :point-squares (engine/gen-point-squares player min-x max-x min-y max-y point-squares speed time)
        :time          (inc time)
        :score         (engine/update-score player score point-squares)
        :max-score     (:max-score state)}
       {:ignore-keypress true
        :screen-time     0
        :stage           "score"}))))

(defn score-stage
  [{ignore-keypress :ignore-keypress
    score           :score
    time            :time
    distance        :distance
    screen-time     :screen-time
    :as             state}]
  (merge
   state
   (let [restart       (if-not ignore-keypress
                         (q/key-pressed?)
                         false)
         new-max-score (max (cookies/get :max-score 0) score)]
     (cookies/set! :max-score new-max-score {:max-age (Math/pow 2 31)})
     (if-not restart
       {:text            (str "GAME OVER\n"
                              "Frames: " time "\n"
                              "Distance: " (int distance) "\n"
                              "Max score: " new-max-score "\n"
                              "Score: " score
                              (when (< 60 screen-time)
                                "\n\nPRESS ANY KEY TO CONTINUE..."))
        :screen-time     (inc screen-time)
        :ignore-keypress (if (or (q/key-pressed?) (> 30 screen-time))
                           ignore-keypress
                           false)
        :speed           0}
       {:player        {:x -20
                        :y 20}
        :enemies       []
        :point-squares []
        :time          0
        :distance      0
        :score         0
        :stage         "game"}))))

(defn update-stage-state [state]
  (case (:stage state)
    "title" (title-stage state)
    "game"  (game-stage state)
    "score" (score-stage state)))
