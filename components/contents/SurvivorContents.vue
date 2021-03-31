<template>
  <div class="container">
    <div class="container__inner">
      <v-card-title class="text-center justify-center">
        <h1 class="container__title">サバイバー戦績</h1>
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
            <overall-results v-show="item === '全体戦績'" :results="results" />
            <personal-results v-show="item === '個人戦績'" :results="results" />
            <recent-results v-show="item === '直近戦績'" :results="results" />
            <results-form v-show="item === '戦績登録'" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import OverallResults from '~/components/parts/survivor/OverallResult.vue'
// import OverallResults from '~/components/parts/survivor/OverallTest.vue'
import PersonalResults from '~/components/parts/survivor/PersonalResult.vue'
import RecentResults from '~/components/parts/survivor/RecentResult.vue'
import ResultsForm from '~/components/parts/survivor/ResultForm.vue'
import killerData from '~/static/js/killerData'
import { useGetResult } from '~/compositions/survivor/useGetResult'
export default defineComponent({
  components: {
    OverallResults,
    PersonalResults,
    RecentResults,
    ResultsForm,
  },
  setup(props, context) {
    const tab = ref(null)

    const items = reactive(['全体戦績', '個人戦績', '直近戦績', '戦績登録'])

    const killers = ref(killerData)

    // console.log(props.results)

    const { results, getResult } = useGetResult()

    getResult()

    return {
      tab,
      items,
      killers,
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
    width: 20%;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
