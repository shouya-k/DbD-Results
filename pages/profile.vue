<template>
  <div>
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/layout/Header.vue'

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
