<template>
  <div class=" relative">
    <!-- 地图 -->
    <Map></Map>
    <!--玩家 -->
    <Player></Player>
    <!-- 箱子 -->
    <Cargo></Cargo>
  </div>
</template>

<script setup>
import Map from "./Map.vue";
import Player from "./Player.vue"
import Cargo from './Cargo.vue'
</script>

<style lang="scss" scoped></style>