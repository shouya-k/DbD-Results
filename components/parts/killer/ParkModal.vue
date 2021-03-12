<template>
  <v-card v-show="isShow">
    <div class="modal">
      <p class="modal__title">使用パーク</p>
      <div
        v-for="img in images"
        :key="img.id"
        class="modal__image"
        @click="selectPark(img)"
      >
        <img class="modal__img" :src="img.url" />
        <p class="modal__name">{{ img.name }}</p>
      </div>
    </div>
    <div class="modal__mask" @click="hiddenModal"></div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import ParkData from '~/static/js/killerParkData'

export default defineComponent({
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const modal = reactive({
      images: ParkData,
    })

    const hiddenModal = () => {
      context.emit('hiddenModal')
    }

    const selectPark = (img: {}) => {
      context.emit('selectPark', img)
    }

    return {
      ...toRefs(modal),
      hiddenModal,
      selectPark,
    }
  },
})
</script>

<style lang="scss" scoped>
.modal {
  width: 60%;
  height: 80%;
  overflow-y: scroll;
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
    position: sticky;
    top: 0;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    padding-top: 25px;
    margin-bottom: 30px;
    background-color: #1f1f1f;
    z-index: 8;
  }

  &__image {
    width: 16%;
    float: left;
    padding-top: 10px;
    margin-left: 5px;
    margin-bottom: 15px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.12);
    }
  }
  &__name {
    font-size: 0.9rem;
    text-align: center;
    font-weight: bold;
    margin: 0;
  }

  &__img {
    display: block;
    margin: 0 auto 5px;
    width: 60px;
    height: 60px;
    border: 1px solid #fff;
  }

  &__mask {
    background-color: rgba(0, 0, 0, 0.8);
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
