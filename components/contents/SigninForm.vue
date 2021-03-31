<template>
  <div class="card">
    <v-card class="mx-auto" max-width="470">
      <v-card-title class="pa-5 mt-10">
        <h4 class="card__title">サインイン</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form class="form mt-5">
          <v-text-field
            v-model="username"
            class="form__field"
            prepend-icon="mdi-account"
            placeholder="ユーザー名"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="form__field"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-lock"
            placeholder="パスワード"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-card-actions>
            <v-btn
              class="info form__btn"
              depressed
              height="40px"
              tile
              @click="signIn"
              >サインイン</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto mt-5" max-width="470">
      <v-card-text class="text-center font-weight-black"
        >登録がまだの方は<span
          style="cursor: pointer; color: rgb(220, 25, 25)"
          @click="$router.push('/signup')"
        >
          こちらから登録</span
        ></v-card-text
      >
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
export default defineComponent({
  setup(props, context) {
    const router = context.root.$router

    const form = reactive({
      username: '',
      password: '',
    })

    const showPassword = ref(false)

    const signIn = async (): Promise<void> => {
      try {
        await Auth.signIn(form.username, form.password)
        await Auth.currentAuthenticatedUser()
        router.push('/')
      } catch (error) {
        console.log('error signing in', error)
      }
    }

    return {
      ...toRefs(form),
      signIn,
      showPassword,
    }
  },
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  top: 25%;
  &__title {
    margin: 0 auto;
  }
}

.form {
  &__field {
    width: 90%;
    margin: 0 auto;
  }

  &__btn {
    display: block;
    font-size: 20px;
    width: 90%;
    margin: 10px auto 10px;
    border-radius: 4px;
  }
}
</style>
