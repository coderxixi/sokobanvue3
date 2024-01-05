<template>
  <div class="absolute" :style="position">
   <img :src="kepperImg" alt="">
  </div>
</template>

<script setup>
import kepperImg from "../../assets/keeper.png";
import { usePosition, useMove } from "./hooks/Player.js"
const { position } =   usePosition();
useMove();



</script>

<style lang="scss" scoped>

</style>