<template>
  <div class="news">
    <p id="news" class="fs-2 news__title">News</p>
    <div class="row justify-content-center">
      <div class="col-8">
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">2023/09/21</th>
              <td>v1.2.0</td>
              <td>デザインの変更、その他バグの修正</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: {
  }
}
</script>

<style lang="scss">
.news {
  padding: 2% 5%;

  &__title {
    border-bottom: 1px solid rgb(90,90,90,0.3);
  }
}
</style>
