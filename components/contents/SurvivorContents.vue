<template>
  <div class="container">
    <div class="container__inner">
      <v-card-title class="text-center justify-center">
        <h1 class="container__title">サバイバー戦績</h1>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" dark centered>
        <v-tabs-slider color="cyan"></v-tabs-slider>
        <v-tab href="#tab-1" class="container__tab">全体戦績</v-tab>
        <v-tab href="#tab-2" class="container__tab">個人戦績</v-tab>
        <v-tab href="#tab-3" class="container__tab">直近戦績</v-tab>
        <v-tab href="#tab-4" class="container__tab">戦績登録</v-tab>
      </v-tabs>
    </div>

    <v-card class="container__card">
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <v-card color="basil" flat>
            <overall-results :results="results" />
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-2">
          <v-card color="basil" flat>
            <personal-results :results="results" />
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-3">
          <v-card color="basil" flat>
            <recent-results :results="results" />
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-4">
          <v-card color="basil" flat>
            <results-form @change-active="changeActive" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import OverallResults from '~/components/parts/survivor/OverallResult.vue'
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
    const tab = ref('tab-1')

    const items = reactive(['全体戦績', '個人戦績', '直近戦績', '戦績登録'])

    const changeActive = () => {
      tab.value = 'tab-3'
    }

    const killers = ref(killerData)

    const { results, getResult } = useGetResult()

    getResult()

    return {
      tab,
      items,
      killers,
      results,
      changeActive,
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
