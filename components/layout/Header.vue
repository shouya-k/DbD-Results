<template>
  <div class="head">
    <v-app-bar color="dark" class="bg" dark flat fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="head__title"
        >Dead by Daylight Result</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn link nuxt to="/" class="mr-3" icon>
        <v-icon title="ホーム">mdi-home</v-icon>
      </v-btn>

      <v-btn link nuxt to="/profile" class="mr-3" icon>
        <v-icon title="プロフィール">mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon title="サインアウト">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/" nuxt>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item>

          <v-list-item to="/profile" nuxt>
            <v-list-item-title>プロフィール</v-list-item-title>
          </v-list-item>

          <v-list-item to="/killer" nuxt>
            <v-list-item-title>キラー戦績</v-list-item-title>
          </v-list-item>

          <v-list-item to="/survivor" nuxt>
            <v-list-item-title>サバイバー戦績</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      drawer: false,
    }
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
}

.bg {
  background-image: url('~@/assets/img/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
