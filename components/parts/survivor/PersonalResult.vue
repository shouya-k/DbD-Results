<template>
  <v-data-table
    :headers="tableHead"
    :items="killers"
    :items-per-page="-1"
    hide-default-footer
    :height="530"
    fixed-header
    class="elevation-1"
  >
    <template #body="{ items: killers }">
      <tbody class="table__body">
        <killer-results
          v-for="killer in killers"
          :id="killer.id"
          :key="killer.id"
          :name="killer.name"
          :img="killer.url"
          :results-data="resultsData"
        />
      </tbody>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import killerData from '~/static/js/killerData'
import killerResults from '~/components/parts/survivor/PersonalResultData.vue'

export default defineComponent({
  components: {
    killerResults,
  },
  props: ['results'],
  setup(props, context) {
    const tableHead = reactive([
      {
        text: '対戦キラー',
        sortable: false,
        class: 'text-center body-2 font-weight-bold',
      },
      { text: '対戦数', class: 'body-2 font-weight-bold', sortable: false },
      { text: '総得点', class: 'body-2 font-weight-bold', sortable: false },
      { text: '平均得点', class: 'body-2 font-weight-bold', sortable: false },
      { text: '脱出数', class: 'body-2 font-weight-bold', sortable: false },
      { text: '脱出率 (%)', class: 'body-2 font-weight-bold', sortable: false },
    ])

    const killers = ref(killerData)

    const resultsData = reactive(props.results)

    return {
      tableHead,
      killers,
      resultsData,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/survivor-table.scss';
</style>
