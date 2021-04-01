<template>
  <div class="main">
    <Header />
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/layout/Header.vue'
import Content from '~/components/contents/KillerContents.vue'
import { useCurrentUser } from '~/compositions/user/useCurrentUser'

export default defineComponent({
  components: {
    Header,
    Content,
  },
  setup(props, context) {
    const { getCurrentUser } = useCurrentUser(context)

    getCurrentUser()

    return {}
  },
})
</script>

<style scoped>
.main {
  overflow: hidden;
  position: relative;
}
</style>
