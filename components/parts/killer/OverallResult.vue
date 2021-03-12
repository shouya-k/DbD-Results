<template>
  <v-data-table
    :headers="tableHead"
    :items="killers"
    :items-per-page="-1"
    hide-default-footer
    :height="531"
    fixed-header
    class="elevation-1"
  >
    <template #body="{}">
      <tbody class="table__body">
        <killer-results
          v-for="killer in killers"
          :id="killer.id"
          :key="killer.id"
          :name="killer.name"
          :img="killer.url"
        />
      </tbody>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import KillerResults from '~/components/parts/killer/OverallResultData.vue'
import killerData from '~/static/js/killerData'

export default defineComponent({
  components: {
    KillerResults,
  },
  setup(props, context) {
    const tableHead = reactive([
      {
        text: '使用キラー',
        align: 'center',
        sortable: false,
        class: 'body-2 font-weight-bold',
      },
      {
        text: '対戦数',
        class: 'body-2 font-weight-bold',
        sortable: false,
      },
      {
        text: '総得点',
        class: 'body-2 font-weight-bold',
        sortable: false,
      },
      {
        text: '平均得点',
        class: 'body-2 font-weight-bold',
        sortable: false,
      },
      {
        text: '処刑数',
        class: 'body-2 font-weight-bold',
        sortable: false,
      },
      {
        text: '全滅率 (%)',
        class: 'body-2 font-weight-bold',
        sortable: false,
      },
    ])

    const killers = reactive([...killerData])

    // const resultsData = reactive(props.results)

    return {
      tableHead,
      killers,
      // resultsData,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/survivor-table.scss';
</style>
