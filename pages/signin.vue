<template>
  <div>
    <Head />
    <Form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Head from '~/components/layout/LoginHeader.vue'
import Form from '~/components/contents/SigninForm.vue'

export default defineComponent({
  components: {
    Head,
    Form,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
