<template>
  <div>
    <Head />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Head from '~/components/layout/Header.vue'

export default defineComponent({
  components: {
    Head,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
