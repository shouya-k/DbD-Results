<template>
  <div>
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '~/components/layout/Header.vue'
import { useCurrentUser } from '~/compositions/user/useCurrentUser'

export default defineComponent({
  components: {
    Header,
  },
  setup(props, context) {
    const { getCurrentUser } = useCurrentUser(context)

    getCurrentUser()

    return {}
  },
})
</script>

<style scoped></style>
