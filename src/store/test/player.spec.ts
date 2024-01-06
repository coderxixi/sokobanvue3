import { it, describe, expect, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { setActivePinia, createPinia } from "pinia"
import { useMapStore } from "../map";

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('sholud move to left', () => {

   const {map,setupMap}=useMapStore()
    setupMap([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
  ])
    const { movePlayerToLeft, player } = usePlayerStore();
    player.x = 1;
    player.y = 1;
    movePlayerToLeft();
    expect(player.x).toBe(0);
  })

  it('sholud move to right', () => {
    const { movePlayerToRight, player } = usePlayerStore();
    player.x = 1;
    player.y = 1;
    movePlayerToRight();
    expect(player.x).toBe(2);
  })

  it('sholud move to Top', () => {
    const { movePlayerToTop, player } = usePlayerStore();
    player.x = 1;
    player.y = 1;
    movePlayerToTop();
    expect(player.y).toBe(0);
  })

  it('sholud move to Down', () => {
    const { movePlayerToDown, player } = usePlayerStore();
    player.x = 1;
    player.y = 1;
    movePlayerToDown();
    expect(player.y).toBe(2);
  })

  it('should not move to left when collision wall',()=>{
    const { movePlayerToLeft, player } = usePlayerStore();
    player.x = 1;
    player.y = 1;
    movePlayerToLeft();
    expect(player.x).toBe(1);
  })
})