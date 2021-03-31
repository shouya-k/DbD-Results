<template>
  <div class="head">
    <v-app-bar color="dark" class="bg" dark flat fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="head__title"
        >Dead by Daylight Result</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn
        class="mr-3 head__img--opacity"
        active-class="head__img--active"
        link
        nuxt
        to="/"
        icon
      >
        <v-icon large>mdi-home</v-icon>
      </v-btn>

      <v-btn
        link
        nuxt
        to="/killer"
        class="mr-3 head__img--opacity"
        active-class="head__img--active"
        icon
      >
        <img :src="killer" alt="" class="head__img" />
      </v-btn>

      <v-btn
        link
        nuxt
        to="/survivor"
        class="mr-3 head__img--opacity"
        active-class="head__img--active"
        icon
      >
        <img :src="survivor" alt="" class="head__img" />
      </v-btn>

      <v-btn
        link
        nuxt
        to="/profile"
        class="mr-3 head__img--opacity"
        active-class="head__img--active"
        icon
      >
        <v-icon large>mdi-account</v-icon>
      </v-btn>

      <v-btn icon @click="signOut">
        <v-icon title="サインアウト">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group active-class=" text--accent-4">
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
import { defineComponent, reactive, ref, toRefs } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'

export default defineComponent({
  setup(props, context) {
    const router = context.root.$router
    const drawer = ref(false)

    const img = reactive({
      home:
        'https://user-images.githubusercontent.com/65233189/109669633-a277f680-7bb5-11eb-8d63-5da840da149f.png',
      killer:
        'https://lh3.googleusercontent.com/mbA7AC303n01peLXr_QgVlx85wZuOu-uIc519UnfwXe1JrgNzNgPLB1Ma4dsqIZzGfWf0s8WB2PrebXxmuri5MkcP9jLnt7DLHrP19KCHgAa=w130',
      survivor:
        'https://lh3.googleusercontent.com/tz9kF04ruHt1ivDZDecG-AQbVjfZuD7cP5ADD_hHKI1rGmUF3W2_FV5MhXiNNbM1Cl6N3ejK5gSfaHJNBR0Xp-Z8AwJ-xbj2a5kUdtcJeM4=w120',
      profile:
        'https://user-images.githubusercontent.com/65233189/109669036-11088480-7bb5-11eb-80bb-b065ddd647c3.png',
    })

    const signOut = async () => {
      try {
        await Auth.signOut()
        router.push('/signin')
      } catch (error) {
        console.log('error signing out: ', error)
      }
    }

    return {
      drawer,
      ...toRefs(img),
      signOut,
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

  &__img {
    width: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: #fff;

    &--opacity {
      opacity: 0.4;

      &:hover {
        opacity: 1;
      }
    }

    &--active {
      opacity: 1;
    }
  }
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: rgba(0, 0, 0, 0);
}
</style>
