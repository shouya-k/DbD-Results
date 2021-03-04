<template>
  <v-card class="mx-auto" max-width="470">
    <v-card-title class="pa-5 mt-10">
      <h4 class="card__title">Confirm Sign up</h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form class="form mt-5">
        <v-text-field
          v-model="form.username"
          class="form__field"
          placeholder="ユーザー名"
          prepend-icon="mdi-account"
          readonly
        ></v-text-field>
        <v-text-field
          v-model="form.confirmCode"
          class="form__field"
          placeholder="確認コード"
          prepend-icon="mdi-lock"
        ></v-text-field>
        <v-card-actions>
          <v-btn
            class="info form__btn"
            depressed
            height="48px"
            tile
            @click="confirmSignUp"
            >送信する</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import { Auth } from 'aws-amplify'
import { useCreateUser } from '~/compositions/user/useCreateUser'

export default defineComponent({
  props: {
    username: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const router = context.root.$router

    const form = reactive({
      username: props.username,
      password: props.password,
      confirmCode: '',
    })

    const confirmSignUp = async (): Promise<void> => {
      try {
        await Auth.confirmSignUp(form.username, form.confirmCode)
        const user = await Auth.signIn(form.username, form.password)
        await useCreateUser(user)
        router.push('/')
      } catch (error) {
        console.log('error confirming sign up', error)
      }
    }

    return {
      form,
      confirmSignUp,
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
