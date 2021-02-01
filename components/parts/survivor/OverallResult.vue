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
    <template v-slot:body="{ items: killers }">
      <tbody class="table__body">
        <tr v-for="killer in killers" :key="killer.id" class="table__tr pa-10">
          <td class="table__td--name">
            <img class="table__img" :src="killer.url" />
            <span class="table__span">{{ killer.name }}</span>
          </td>
          <td class="table__td">20</td>
          <td class="table__td">12,000,000</td>
          <td class="table__td">200,000</td>
          <td class="table__td">5</td>
          <td class="table__td">50%</td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import killerData from '~/static/js/killerData'

export default defineComponent({
  setup() {
    const tableHead = reactive([
      {
        text: '対戦キラー',
        align: 'start',
        value: 'name',
        sortable: false,
        class: 'text-center body-2 font-weight-bold',
      },
      { text: '対戦数', class: 'body-2 font-weight-bold' },
      { text: '総得点', class: 'body-2 font-weight-bold' },
      { text: '平均得点', class: 'body-2 font-weight-bold' },
      { text: '脱出数', class: 'body-2 font-weight-bold' },
      { text: '脱出率 (%)', class: 'body-2 font-weight-bold' },
    ])

    const killers = ref(killerData)

    return {
      tableHead,
      killers,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/survivor-table.scss';
</style>
