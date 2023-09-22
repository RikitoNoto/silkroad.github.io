<template>
  <div class="contact">
    <p id="contact" class="fs-2 contact__title">お問い合わせ</p>

    <p class="fs-5">
      お問い合わせは<a class="link-secondary" href="mailto:silkroad.transport.app@gmail.com">こちら</a>
    </p>

    <p class="fs-5">
      または、<a class="link-secondary" href="https://github.com/RikitoNoto/silkroad/issues">GithubのIssue</a>へ
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
  }
}
</script>

<style lang="scss">
.contact {
  padding: 2% 5%;

  &__title {
    border-bottom: 1px solid rgb(90,90,90,0.3);
  }
}
</style>
