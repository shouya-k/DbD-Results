<template>
  <div class="container">
    <div class="container__inner bg">
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
            <overall-results v-show="item === '全体戦績'" />
            <personal-results v-show="item === '個人戦績'" />
            <recent-results v-show="item === '直近記録'" />

            <v-data-table
              v-show="item === '戦績登録'"
              :headers="headers"
              hide-default-footer
              class="elevation-1"
            ></v-data-table>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import OverallResults from '~/components/parts/survivor/OverallResult.vue'
import PersonalResults from '~/components/parts/survivor/PersonalResult.vue'
import RecentResults from '~/components/parts/survivor/RecentResult.vue'
export default {
  components: {
    OverallResults,
    PersonalResults,
    RecentResults,
  },
  data() {
    return {
      tab: null,
      items: ['全体戦績', '個人戦績', '直近記録', '戦績登録'],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  &__inner {
    position: sticky;
    top: 63.9px;
    z-index: 3;
    color: #fff;
    background-color: #272727;
  }

  &__title {
    font-size: 28px;
  }

  &__card {
    width: 90%;
    margin: 50px auto 0;
  }

  &__tab {
    width: 200px;
    font-size: 18px;
    font-weight: bold;
  }
}

.bg {
  background-image: url('~@/assets/img/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
