<template>
  <v-data-table
    :headers="tableHead"
    hide-default-footer
    :height="530"
    fixed-header
    class="elevation-1"
  >
    <template #body>
      <tbody class="table__body">
        <tr
          :class="{
            'table__tr--win': true,
            'table__tr--lose': false,
          }"
        >
          <td class="table__td table__td--name">
            <img class="table__img" :src="killers[1].url" />
            <span class="table__span">{{ killers[1].name }}</span>
          </td>
          <td class="table__td">24,000</td>
          <td class="table__images">
            <img class="table__park-img" :src="park[0].url" alt="" />
            <img class="table__park-img" :src="park[1].url" alt="" />
            <img class="table__park-img" :src="park[2].url" alt="" />
            <img class="table__park-img" :src="park[3].url" alt="" />
          </td>
          <td class="table__td">3</td>
        </tr>
        <tr
          :class="{
            'table__tr--win': false,
            'table__tr--lose': true,
          }"
        >
          <td class="table__td table__td--name">
            <img class="table__img" :src="killers[1].url" />
            <span class="table__span">{{ killers[1].name }}</span>
          </td>
          <td class="table__td">8,000</td>
          <td class="table__images">
            <img class="table__park-img" :src="park[4].url" alt="" />
            <img class="table__park-img" :src="park[6].url" alt="" />
            <img class="table__park-img" :src="park[8].url" alt="" />
            <img class="table__park-img" :src="park[10].url" alt="" />
          </td>
          <td class="table__td">1</td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import killerData from '~/static/js/killerData'
import parkData from '~/static/js/killerParkData'

export default defineComponent({
  setup(props, context) {
    const tableHead = reactive([
      {
        text: '使用キラー',
        align: 'start',
        sortable: false,
        class: 'text-center body-2 font-weight-bold',
      },
      {
        text: '獲得得点',
        sortable: false,
        class: 'text-center body-2 font-weight-bold',
      },
      {
        text: '使用パーク',
        sortable: false,
        class: 'text-center body-2 font-weight-bold',
      },
      {
        text: '処刑数',
        sortable: false,
        class: 'text-center body-2 font-weight-bold',
      },
    ])

    const killers = ref(killerData)
    const park = ref(parkData)

    // console.log(props.results)

    return {
      tableHead,
      killers,
      park,
    }
  },
})
</script>

<style lang="scss" scoped>
.table {
  &__tr {
    &--win {
      background-color: rgb(252, 160, 157);
      opacity: 0.8;
      &:hover {
        background-color: rgb(252, 160, 157) !important;
        opacity: 1;
      }
    }

    &--lose {
      background-color: rgb(135, 175, 245);
      opacity: 0.8;
      &:hover {
        background-color: rgb(135, 175, 245) !important;
        opacity: 1;
      }
    }
  }

  &__td {
    color: #fff;
    font-weight: bold;
    text-align: center;

    &--name {
      display: flex;
    }

    &:first-child {
      border-left: 1px solid #fff;
      padding: 16px 10px 16px 20px;
    }

    &:last-child {
      border-right: 1px solid #fff;
    }
  }

  &__span {
    margin: auto 0 auto 5px;
    font-weight: bold;
  }

  &__img {
    width: 36px;
    height: 36px;
    display: block;
    margin: auto 0;
  }

  &__images {
    text-align: center;
  }

  &__park-img {
    width: 40px;
    height: 40px;
    margin-right: 3px;
  }
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 16px;
  height: auto;
  border-top: 1px solid rgba(255, 255, 255);
  border-bottom: 1px solid rgba(255, 255, 255);
}
</style>
