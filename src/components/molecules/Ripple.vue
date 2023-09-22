<template>
  <div class="ripples" :style="position">
    <div class="ripple"></div>
    <div class="ripple delay1"></div>
    <div class="ripple delay2"></div>
  </div>
</template>

<script>
export default {
  name: 'Ripple',
  props: {
    // position top.
    top: {
      type: Number,
      default: () => 0,
    },
    // position left.
    left: {
      type: Number,
      default: () => 0,
    },
    // ripple color.
    color: {
      type: String,
      default: () => 'rgb(0, 0, 0, 0.3)',
    },

  },
  computed: {
    position(){
      return {
        '--position_top': this.top  + 'px',
        '--position_left': this.left  + 'px',
        '--color': this.color,
      }
    },
  },
}
</script>

<style scoped>
.ripples{
  position: absolute;
  top: var(--position_top);
  left: var(--position_left);
}

.ripple {
  position: absolute;
  /* margin:  0 auto; */
  top: -150px;
  left: -150px;
  width: 300px;
  height: 300px;
  /* border-radius: 300px / 150px; */
  border-radius: 150px;
  border: 10px solid var(--color);
  transform: scale(0.01, 0.01);
  opacity: 0;
  animation: 3s ease-out 3s running spread;
}

@keyframes spread {
  from {
    opacity: 1;
  }
  to {
    transform: scale(1,1);
    opacity: 0;
  }
}

.delay1 {
  animation-delay: 3.3s;
}

.delay2 {
  animation-delay: 3.7s;
}
</style>
