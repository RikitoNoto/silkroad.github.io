<template>
  <header class="header">
    <nav class="header__nav">
      <a class="header__nav__button">
        デバイス一覧
      </a>
      <a class="header__nav__button">
        ダウンロード
      </a>
      <a class="header__nav__button">
        使い方
      </a>
    </nav>
  </header>
  <div class="main">
    <Devices></Devices>
    <Downloads></Downloads>
    <HowTo></HowTo>
  </div>
</template>

<script>
import Devices from './components/templates/Devices.vue'
import Downloads from './components/templates/Downloads.vue'
import HowTo from './components/templates/HowTo.vue'

export default {
  name: 'App',
  components: {
    Devices,
    Downloads,
    HowTo,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  --main_color1: #38B6FF;
  --main_color2: #7ED957;
}

.header {
  position: relative;
  height: 50px;
  width: 100vw;
  margin-bottom: 25px;
  z-index: 0;
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--main_color1);
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .2);
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: right;
    height: 100%;
    width: 100%;
    text-align: right;
    position: relative;
    &__button {
      position: inherit;
      color: white;
      z-index: 1;
    }
  }
}
</style>
