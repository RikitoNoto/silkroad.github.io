<template>
  <header class="header">
    <img class="header__logo" src="@/assets/logo.png"/>
    <b-nav class="header__nav">
      <b-nav-item class="header__nav__item" href="#">ダウンロード</b-nav-item>
      <b-nav-item class="header__nav__item" href="#">対応デバイス</b-nav-item>
      <b-nav-item class="header__nav__item" href="#">アップデート情報</b-nav-item>
      <b-nav-item class="header__nav__item" href="#">お問い合わせ</b-nav-item>
    </b-nav>
  </header>
  <div class="main">
    <TopSection></TopSection>
    <Devices></Devices>
    <Downloads></Downloads>
    <HowTo></HowTo>
  </div>
  <button type="button" class="btn btn-primary">Bootstrap</button>
</template>

<script>
import Devices from './components/templates/Devices.vue'
import Downloads from './components/templates/Downloads.vue'
import TopSection from './components/templates/TopSection.vue'
import HowTo from './components/templates/HowTo.vue'

export default {
  name: 'App',
  components: {
    TopSection,
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
  z-index: 0;
  justify-content: space-between;
  display: flex;
  padding: 0 2rem;

  &__logo {
    display: inline-block;
    justify-content: left;
    height: 100%;
    position: relative;
    padding: 0.5rem;
  }

  &__nav {
    display: inline-flex;
    height: 100%;
    position: relative;
    align-items: center;

    &__item {
      position: inherit;
      padding: 0 0.5rem;
      font-weight: 600;
      color: grey;
    }
  }
}
</style>
