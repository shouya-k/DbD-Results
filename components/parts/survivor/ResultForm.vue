<template>
  <div>
    <v-data-table
      :headers="tableHead"
      :items="desserts2"
      hide-default-footer
      class="elevation-1"
    >
      <template #body>
        <tbody class="table__body">
          <tr class="table__tr">
            <td class="table__td table__td--name">
              <img class="table__killer-img" :src="killers[0].url" alt="" />
              <span class="table__span">トラッパー</span>
            </td>
            <td class="table__td">
              <input class="table__input" type="text" />
            </td>
            <td class="table__td">
              <img class="table__park-img" :src="park[0]" />
              <img class="table__park-img" :src="park[0]" />
              <img class="table__park-img" :src="park[0]" />
              <img class="table__park-img" :src="park[0]" />
            </td>
            <td class="table__td">
              <select class="table__select">
                <option></option>
                <option value="0">生存</option>
                <option value="1">死亡</option>
              </select>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
    <div class="table__footer">
      <v-btn class="table__btn" color="primary" height="34px" width="160px"
        >登録</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import killerData from '~/static/js/killerData'
import parkData from '~/static/js/parkData'

export default defineComponent({
  setup() {
    const tableHead = reactive([
      {
        text: '対戦キラー',
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
        text: 'ステータス',
        sortable: false,
        class: 'text-center body-2 font-weight-bold',
      },
    ])

    const killers = ref(killerData)
    const park = ref(parkData)

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
  &__head {
    width: 20%;
  }

  &__td {
    color: #fff;
    text-align: center;

    &:first-child {
      padding: 16px 10px 16px 20px;
    }
  }

  &__killer-img {
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto 5px;
    border: 1px solid #fff;
  }

  &__images {
    text-align: center;
  }

  &__park-img {
    width: 53px;
    height: 53px;
    margin-right: 3px;
    border: 1px solid #fff;
    border-radius: 6px;
  }

  &__input {
    width: 50%;
    font-size: 30px;
    padding: 5px 0;
    outline: none;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 6px;
  }

  &__select {
    color: #fff;
    font-size: 1.4rem;
    padding: 10px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 10px;
  }

  &__footer {
    padding: 15px 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  &__btn {
    // font-weight: bold;
    font-size: 18px;
  }
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 18px;
  height: auto;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td:first-child {
  width: 18%;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td:last-child {
  width: 18%;
}

.theme--dark.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: none;
}
</style>
