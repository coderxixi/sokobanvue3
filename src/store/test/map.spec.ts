import { it, expect, describe,beforeEach } from "vitest";
import { useMapStore } from "../map";
import { setActivePinia, createPinia } from "pinia"

describe('map',()=>{
  beforeEach(()=>{
    setActivePinia(createPinia())
  })
  it('should',()=>{
    const { map } = useMapStore();
    expect(map).toEqual([
      [1, 1, 1, 1, 2],
      [1, 2, 2, 1, 2],
      [1, 1, 2, 1, 2],
      [1, 1, 1, 1, 2],
      [1, 1, 2, 1, 2],
    ])
  })
})