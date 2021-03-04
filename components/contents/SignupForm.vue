<template>
  <div class="card">
    <signup-confirm
      v-if="confirm"
      :username="username"
      :password="password"
    ></signup-confirm>
    <v-card v-else class="mx-auto" max-width="470">
      <v-card-title class="pa-5 mt-10">
        <h4 class="card__title">サインアップ</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form ref="formRules" class="form mt-5">
          <v-text-field
            v-model="username"
            class="form__field"
            prepend-icon="mdi-account"
            placeholder="ユーザー名"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            v-model="email"
            class="form__field"
            prepend-icon="mdi-email"
            placeholder="メールアドレス"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="form__field"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-lock"
            placeholder="パスワード"
            :rules="[required]"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <v-text-field
            v-model="passwordConfirm"
            :type="showPasswordConfirm ? 'text' : 'password'"
            class="form__field"
            :append-icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-autorenew"
            placeholder="パスワードの確認"
            :rules="[required, confirmPassword]"
            @click:append="showPasswordConfirm = !showPasswordConfirm"
          ></v-text-field>
          <v-card-actions>
            <v-btn
              class="info form__btn"
              depressed
              tile
              height="40px"
              @click="signUp"
              >登録</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto mt-5" max-width="470"
      ><v-card-text v-if="confirm" class="text-center font-weight-black">
        メールアドレスに確認コードを送信しました。<br />メールを確認してコードを入力してください。
      </v-card-text>
      <v-card-text v-else class="text-center font-weight-black"
        >既に登録済みの方は<span
          style="cursor: pointer; color: rgb(220, 25, 25)"
          @click="$router.push('/signin')"
        >
          こちらからサインイン</span
        ></v-card-text
      >
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
import SignupConfirm from '~/components/parts/SignupConfirm.vue'

export default defineComponent({
  components: {
    SignupConfirm,
  },
  setup() {
    const form = reactive({
      username: '',
      email: '',
      img:
        'https://user-images.githubusercontent.com/65233189/102001614-7166f300-3d37-11eb-84a8-3e14ba2b84f8.png',
      password: '',
      passwordConfirm: '',
      confirm: false,
    })

    const showPassword = ref(false)
    const showPasswordConfirm = ref(false)

    const formRules = ref()
    const required = ref((value: string) => !!value || '必ず入力してください。')
    const confirmPassword = ref(
      (value: string) =>
        (!!value && value === form.password) || 'パスワードが一致していません'
    )

    const signUp = async (): Promise<void> => {
      if (formRules.value.validate()) {
        try {
          const { user } = await Auth.signUp({
            username: form.username,
            password: form.password,
            attributes: {
              email: form.email,
              picture: form.img,
              nickname: form.username,
            },
          })
          console.log(user)
          form.confirm = true
        } catch (error) {
          console.log('error signing up:', error)
        }
      }
    }

    return {
      ...toRefs(form),
      showPassword,
      showPasswordConfirm,
      formRules,
      required,
      confirmPassword,
      signUp,
    }
  },
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  top: 10%;
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
