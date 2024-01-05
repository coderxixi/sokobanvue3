import { ref, computed } from "vue"; 
import { usePlayerStore } from "../../../store/player";
//玩家位置逻辑
 export function usePosition() {
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
export function useMove() {
  const { movePlayerToLeft, movePlayerToRight, movePlayerToTop, movePlayerToDown } = usePlayerStore();
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