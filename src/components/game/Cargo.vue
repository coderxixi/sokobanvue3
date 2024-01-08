<template>
  <div class=" absolute" :style="position">
    <img :src="CargoImg" alt="">
  </div>
</template>

<script setup>
import CargoImg from "../../assets/cargo.png";
import { computed } from "vue"
const cargo = {
  x: 2,
  y: 2
}
function usePostion(){
  const STEP = 32;
  const position = computed(() => {
    return {
      left: cargo.x * STEP + 'px',
      top: cargo.y * STEP + 'px'
    }
  })
  return {
    position
  }
}

const { position } = usePostion()

</script>

<style lang="scss" scoped></style>