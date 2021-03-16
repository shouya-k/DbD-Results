<template>
  <div class="head">
    <v-app-bar color="dark" class="bg" dark flat fixed>
      <v-toolbar-title class="head__title"
        >Dead by Daylight Result</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <nuxt-link
        to="/signin"
        class="head__link"
        active-class="head__link--active"
        >サインイン</nuxt-link
      >

      <nuxt-link
        to="/signup"
        class="head__link"
        active-class="head__link--active"
        >サインアップ</nuxt-link
      >
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.head {
  margin-bottom: 64px;

  &__title {
    font-size: 24px;
    font-weight: bold;
  }

  &__link {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin-right: 20px;

    &:hover {
      color: red;
    }

    &--active {
      color: rgb(220, 25, 25);
    }
  }
}

.bg {
  background-image: url('~@/assets/img/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
