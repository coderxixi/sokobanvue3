<template>
  <div class="absolute" :style="position">
   <img :src="kepperImg" alt="">
  </div>
</template>

<script setup>
import { ref,computed } from "vue";
import kepperImg from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
//玩家位置逻辑
function usePosition(){
  const { player } = usePlayerStore();
  //* -------- -------- */
  const STEP = 32;
  //玩家位置
  const position = computed(() => {
    return {
      left: player.x * STEP + 'px',
      top: player.y * STEP + 'px',
    }
  })
  return {
    position
  }
}
//移动逻辑
function useMove(){
  const {  movePlayerToLeft, movePlayerToRight, movePlayerToTop, movePlayerToDown } = usePlayerStore();
  //添加键盘监听事件
  function handleKeyDown(e) {
    switch (e.code) {
      case 'ArrowUp':
        movePlayerToTop();
        break;
      case 'ArrowDown':
        movePlayerToDown();
        break;
      case 'ArrowLeft':
        movePlayerToLeft();
        break;
      case 'ArrowRight':
        movePlayerToRight();
        break;
    }
  }


  window.addEventListener('keydown', handleKeyDown)
}
const { position } =   usePosition();
useMove();



</script>

<style lang="scss" scoped>

</style>