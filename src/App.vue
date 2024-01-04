<script setup>
 import { useMapStore } from "./store/map";

 const {map} = useMapStore();
</script>

<template>
  <div class="bg-red-500">
   {{ map }}
  </div>
 
</template>

<style scoped>

</style>
