import {defineStore } from "pinia";


export enum MapTile{
  FlOOR=2,
  WALL=1,
 
}


export const useMapStore=defineStore('map',()=>{
  const map = [
    [1, 1, 1, 1, 2],
    [1, 2, 2, 1, 2],
    [1, 1, 2, 1, 2],
    [1, 1, 1, 1, 2],
    [1, 1, 2, 1, 2],
  ]
  return {
    map
  }
})