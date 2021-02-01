<template>
  <v-card>
    <div class="modal">
      <p class="modal__title">対戦キラー</p>
      <div v-for="img in images" :key="img.id" class="modal__image">
        <img class="modal__img" :src="img.url" />
        <p class="modal__name">{{ img.name }}</p>
      </div>
    </div>
    <div class="modal__mask"></div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import killerData from '~/static/js/killerData'
export default defineComponent({
  setup(props, context) {
    const form = reactive({
      images: killerData,
    })

    return {
      ...toRefs(form),
    }
  },
})
</script>

<style lang="scss" scoped>
.modal {
  width: 60%;
  padding: 20px;
  background-color: #1f1f1f;
  color: #fff;
  border: 1px solid black;

  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 6;

  &__title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }

  &__image {
    width: 16%;
    float: left;
    padding-top: 20px;
    margin-left: 5px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.12);
    }
  }
  &__name {
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
  }

  &__img {
    display: block;
    margin: 0 auto 5px;
    width: 60px;
    height: 60px;
    border: 1px solid #fff;
  }

  &__mask {
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0.6;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
  }

  &__hidden {
    display: none;
  }
}
</style>
