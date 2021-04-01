<template>
  <div class="container">
    <div class="container__inner">
      <v-card-title class="text-center justify-center">
        <h1 class="container__title">キラー戦績</h1>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" dark centered>
        <v-tabs-slider color="cyan"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item" class="container__tab">
          {{ item }}
        </v-tab>
      </v-tabs>
    </div>

    <v-card class="container__card">
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card color="basil" flat>
            <overall-result v-show="item === '全体戦績'" :results="results" />
            <personal-result v-show="item === '個人戦績'" :results="results" />
            <recent-result v-show="item === '直近戦績'" :results="results" />
            <result-form v-show="item === '戦績登録'" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import OverallResult from '~/components/parts/killer/OverallResult.vue'
import PersonalResult from '~/components/parts/killer/PersonalResult.vue'
import RecentResult from '~/components/parts/killer/RecentResult.vue'
import ResultForm from '~/components/parts/killer/ResultForm.vue'
import { useGetResult } from '~/compositions/killer/useGetResult'

export default defineComponent({
  components: {
    OverallResult,
    PersonalResult,
    RecentResult,
    ResultForm,
  },
  setup(props, context) {
    const tab = ref(null)

    const items = reactive(['全体戦績', '個人戦績', '直近戦績', '戦績登録'])

    // const killers = ref(killerData)

    const { results, getResult } = useGetResult()

    getResult()

    return {
      tab,
      items,
      results,
    }
  },
})
</script>

<style lang="scss" scoped>
.container {
  &__inner {
    position: sticky;
    top: 63.9px;
    z-index: 3;
    color: #fff;
  }

  &__title {
    font-size: 28px;
  }

  &__card {
    width: 80%;
    margin: 50px auto 0;
  }

  &__tab {
    width: 18%;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
