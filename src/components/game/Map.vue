<template>
  <div>
    <div v-for="(row, i) in map" class=" flex">
      <div v-for="(col, j) in map[i]">
        <template v-if="map[i][j] == MapTile.WALL">
          <img :src="wallImg" alt="">
        </template>
        <template v-else-if="map[i][j] == MapTile.FlOOR">
          <img :src="floorImg" alt="">
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import floorImg from "../../assets/floor.png";
import wallImg from "../../assets/wall.png";

import { useMapStore , MapTile } from "../../store/map";
const { map } = useMapStore();

</script>

<style lang="scss" scoped></style>