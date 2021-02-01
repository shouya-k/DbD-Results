<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/layout/Header.vue'
import Content from '~/components/contents/SurvivorContents.vue'

export default defineComponent({
  components: {
    Header,
    Content,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
