<template>
  <div class="download">
    <p id="downloads" class="fs-2 download__title">ダウンロード</p>
    <p>
      <a type="button" class="btn btn-outline-secondary custom-btn-size download__button" href="/downloads/silkroad-win-1.2.0.zip" download>
        <font-awesome-icon :icon="['fab', 'windows']" />
        Windows 1.2.0 をダウンロード
      </a>
    </p>


    <p>
      <a type="button" class="btn btn-outline-secondary custom-btn-size download__button" href="/downloads/silkroad-mac-1.2.0.zip" download>
        <font-awesome-icon :icon="['fab', 'apple']" />
        MacOS 1.2.0 をダウンロード
      </a>
    </p>

    <p>
      <a type="button" class="btn btn-outline-secondary custom-btn-size download__button" href="/downloads/silkroad-ubuntu-1.2.0.zip" download>
        <font-awesome-icon :icon="['fab', 'ubuntu']" />
        Ubuntu 1.2.0 をダウンロード
      </a>
    </p>

    <a href='https://play.google.com/store/apps/details?id=io.github.silkroad.io.github.rikitonoto&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
      <img alt='Google Play で手に入れよう' src='https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png' style="width:250px" />
    </a>

    <p>
      <a href="https://apps.apple.com/us/app/silk-road/id1659212461">
        <img src ="@/assets/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg" alt="Download on the App store" style="width:250px"/>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Downloads',

  components: {
  },

  mounted () {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss">
.download {
  padding: 2% 5%;

  &__title {
    border-bottom: 1px solid rgb(90,90,90,0.3);
  }
  &__button {

  }
  .custom-btn-size{
    font-size: 1.8rem;
  }
}
</style>
