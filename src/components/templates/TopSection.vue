<template>
  <div class="container text-center top_section">
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
  </div>
</template>

<script>
import TypingText from '../molecules/TypingText';
export default {
  name: 'TopSection',
  components: {
    TypingText,
  },
  props: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
}
</script>

<style lang="scss">

.top_section {
  &__row{
    height: 50vh;
    font-size: 2.4rem;
  }
}
</style>
