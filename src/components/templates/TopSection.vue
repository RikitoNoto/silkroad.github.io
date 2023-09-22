<template>
  <div class="container text-center top_section" ref="top_section">
    <div class="row align-items-center top_section__row">
      <div class="row">
        <div class="row justify-content-center">
          <div class="col">
            マルチプラットフォームにデータを転送する
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-3">
            <TypingText :texts="['Android', 'iPhone', 'Windows', 'MacOS', 'Ubuntu' ]"></TypingText>
          </div>
          <div class="col-1">
            から
          </div>
          <div class="col-3">
            <TypingText :texts="['Android', 'iPhone', 'Windows', 'MacOS', 'Ubuntu' ]"></TypingText>
          </div>
          <div class="col-1">
            へ
          </div>
        </div>
      </div>
    </div>

    <div v-for="(item) in ripples" :key="`${item.top}-${item.left}`">
      <Ripple :top="item.top" :left="item.left" :color="item.color"></Ripple>
    </div>

  </div>
</template>

<script>
import TypingText from '../molecules/TypingText';
import Ripple from '../molecules/Ripple';
export default {
  name: 'TopSection',
  components: {
    TypingText,
    Ripple,
  },
  props: {
  },
  data() {
    return {
      ripples: [],
    };
  },
  methods: {
    tick(){
      let that = this;
      const current = new Date();
      const colors = [
        "rgb(33,150,243,0.3)",
        "rgb(126,217,87,0.3)",
        "rgb(240,175,84,0.3)",
        "rgb(207,80,230,0.3)",
        "rgb(230,88,170,0.3)",
      ];

      // update ripples array.
      // if elpased 10 seconds from create, delete object.
      this.ripples = this.ripples.filter((ripple) => {
        const date = new Date(ripple.current);
        date.setSeconds(date.getSeconds() + 10);
        return (new Date()) - date < 0;
      })

      const max_height = this.$refs.top_section.offsetHeight;
      const max_width = this.$refs.top_section.offsetWidth;

      this.ripples.push({
        top: max_height * Math.random(),
        left: max_width * Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        current,
      });


      setTimeout(function() {
        that.tick();
      }, 3000 + 100 * Math.random());
    },

  },
  mounted() {
    this.tick();
  },
}
</script>

<style lang="scss">

.top_section {
  position: relative;
  &__row{
    height: 50vh;
    font-size: 2.4rem;
  }
}
</style>
