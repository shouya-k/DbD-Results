<template>
  <div>
    <v-data-table :headers="tableHead" hide-default-footer class="elevation-1">
      <template #body>
        <tbody class="table__body">
          <tr class="table__tr">
            <td class="table__td" @click="showKillerModal">
              <img class="table__killer-img" :src="killer.image" alt />
              <span class="table__span">{{ killer.name }}</span>
            </td>
            <td class="table__td">
              <input v-model="score" class="table__input" type="text" />
            </td>
            <td class="table__td">
              <img
                class="table__park-img"
                :src="parkImage01"
                alt=""
                @click="showParkModal01"
              />
              <img
                class="table__park-img"
                :src="parkImage02"
                alt=""
                @click="showParkModal02"
              />
              <img
                class="table__park-img"
                :src="parkImage03"
                alt=""
                @click="showParkModal03"
              />
              <img
                class="table__park-img"
                :src="parkImage04"
                alt=""
                @click="showParkModal04"
              />
            </td>
            <td class="table__td">
              <select
                v-model="status"
                class="table__select"
                @change="resultStatus($event)"
              >
                <option value=""></option>
                <option value="0人">0人</option>
                <option value="1人">1人</option>
                <option value="2人">2人</option>
                <option value="3人">3人</option>
                <option value="4人">4人</option>
              </select>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
    <div class="table__footer">
      <v-btn
        class="table__btn"
        color="primary"
        height="40px"
        width="160px"
        @click="createSurvivorResult"
        >登録</v-btn
      >
    </div>
    <killer-modal
      :is-show="killer.modal"
      @hiddenModal="hiddenKillerModal"
      @selectKiller="selectKiller($event)"
    ></killer-modal>
    <park-modal
      :is-show="parkModal01"
      @hiddenModal="hiddenParkModal01"
      @selectPark="selectPark01($event)"
    ></park-modal>
    <park-modal
      :is-show="parkModal02"
      @hiddenModal="hiddenParkModal02"
      @selectPark="selectPark02($event)"
    ></park-modal>
    <park-modal
      :is-show="parkModal03"
      @hiddenModal="hiddenParkModal03"
      @selectPark="selectPark03($event)"
    ></park-modal>
    <park-modal
      :is-show="parkModal04"
      @hiddenModal="hiddenParkModal04"
      @selectPark="selectPark04($event)"
    ></park-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
// import { Auth } from 'aws-amplify'
import KillerModal from '~/components/parts/killer/KillerModal.vue'
import ParkModal from '~/components/parts/killer/ParkModal.vue'
import { useKillerModal } from '~/compositions/survivor/useKillerModal'
import { useParkModal } from '~/compositions/survivor/useParkModal'

export default defineComponent({
  components: {
    KillerModal,
    ParkModal,
  },
  setup() {
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

    const {
      killer,
      showKillerModal,
      hiddenKillerModal,
      selectKiller,
    } = useKillerModal()

    const {
      survivor,
      showParkModal01,
      showParkModal02,
      showParkModal03,
      showParkModal04,
      hiddenParkModal01,
      hiddenParkModal02,
      hiddenParkModal03,
      hiddenParkModal04,
      selectPark01,
      selectPark02,
      selectPark03,
      selectPark04,
    } = useParkModal()

    const form = reactive({
      score: '',
      status: '',
      survival: false,
    })

    const createSurvivorResult = async (): Promise<void> => {
      // const user: any = await Auth.currentAuthenticatedUser()
      // useCreateResult(form, killer, survivor, user.attributes.sub)
    }

    const resultStatus = (event: any) => {
      if (event.target.value === '生存') {
        form.survival = true
      } else {
        form.survival = false
      }
    }

    return {
      tableHead,
      ...toRefs(form),
      killer,
      showKillerModal,
      hiddenKillerModal,
      selectKiller,
      ...toRefs(survivor),
      showParkModal01,
      showParkModal02,
      showParkModal03,
      showParkModal04,
      hiddenParkModal01,
      hiddenParkModal02,
      hiddenParkModal03,
      hiddenParkModal04,
      selectPark01,
      selectPark02,
      selectPark03,
      selectPark04,
      createSurvivorResult,
      resultStatus,
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
    font-family: 'Times New Roman';
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
    cursor: pointer;
  }

  &__images {
    text-align: center;
  }

  &__park-img {
    width: 53px;
    height: 53px;
    margin-right: 3px;
    border: 1px solid #fff;
    border-radius: 2px;
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