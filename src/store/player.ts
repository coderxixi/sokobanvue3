import { defineStore } from "pinia";
import { reactive} from 'vue'  
import { MapTile, useMapStore } from "./map";
export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1,
  }) ;
  //向左移动
  function movePlayerToLeft(){
    const {map}=useMapStore();
    const isWall=map[player.x-1][player.y]==MapTile.WALL;
     if(isWall){
      return
     }
    player.x-=1
  }

  //向右移动
  function movePlayerToRight(){
    player.x+=1
  
  }
  //向上移动
  function movePlayerToTop(){
    player.y -= 1
  }
  //向下移动
  function movePlayerToDown(){
    player.y += 1
  
  }

  return {
    player, movePlayerToLeft, movePlayerToRight, movePlayerToTop, movePlayerToDown
  }
})