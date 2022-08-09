<template>
  <div @click="NewCard()" id="container">


    <div class="card">
      <span>Oblique strategies by Brian Eno and Peter Schmidt</span>
    </div>

    <TransitionGroup @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <div class="card" v-for="(phrase, i) in phrases" :key="i" :data-xoffset="offsets[i][0]"
        :data-yoffset="offsets[i][1]" :data-rotoffset="offsets[i][2]" :style="{ zIndex: i }">
        <span>{{ phrase }}</span>
      </div>
    </TransitionGroup>

  </div>
</template>
<script>
import phrases from './phrases';
import gsap from 'gsap'
import carddeal_01 from '../assets/sounds/carddeal_01.mp3'
import carddeal_02 from '../assets/sounds/carddeal_02.mp3'
import carddeal_03 from '../assets/sounds/carddeal_03.mp3'
import carddeal_04 from '../assets/sounds/carddeal_04.mp3'

export default {
  data: () => ({
    phrases: [],
    offsets: [],
    sounds: [carddeal_01, carddeal_02, carddeal_03, carddeal_04],
  }),

  async fetch() {

  },
  methods: {
    async NewCard() {

      const audio = new Audio(this.sounds[Math.floor(Math.random() * this.sounds.length)])
      audio.play()

      const maxMovement = 100;
      const yoffset = (Math.random() * maxMovement) - (maxMovement / 2)
      const xoffset = (Math.random() * maxMovement) - (maxMovement / 2)
      const maxRotation = 5;
      const rotoffset = (Math.random() * maxRotation) - (maxRotation / 2)
      this.offsets.push([xoffset, yoffset, rotoffset])
      this.phrases.push(phrases.random())
    },
    onBeforeEnter(el) {
      // el.style.opacity = 0.5
      el.style.transform = `translate(${el.dataset.xoffset}px, 100vh) rotate(0)`
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        y: el.dataset.yoffset,
        x: el.dataset.xoffset,
        rotation: el.dataset.rotoffset,
        // delay: 1,
        // transform: `translate(calc(${el.dataset.xoffset}px - 50%), calc(${el.dataset.xoffset}px - 50%)) rotate(${el.dataset.rotoffset}deg)`,
        onComplete: done
      })
    },
    onLeave(el, done) {
      gsap.to(el, {
        onComplete: done
      })
    }
  },
}
</script>
<style>
body {
  font-family: 'Open Sans', sans-serif;
  background: #000;
  font-size: 32px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


#container {
  position: absolute;
  left: calc(50% - 300px);
  top: calc(50% - 200px);
}

.card {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 600px;
  height: 400px;
  background: #D8D8D5;
  border-radius: 20px;
  padding: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 20px #00000017;
}

.card:hover {
  cursor: pointer;
}
</style>