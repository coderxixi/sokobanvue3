import {defineStore } from "pinia";


export enum MapTile{
  FlOOR=2,
  WALL=1,
 
}

type Map=MapTile[][];
export const useMapStore=defineStore('map',()=>{
  const map = [
    [1, 1, 1, 1, 2],
    [1, 2, 2, 1, 2],
    [1, 1, 2, 1, 2],
    [1, 1, 1, 1, 2],
    [1, 1, 2, 1, 2],
  ]

  function setupMap(newMap:Map){
    map.splice(0,map.length,...newMap)
  }
  return {
    map, setupMap
  }
})