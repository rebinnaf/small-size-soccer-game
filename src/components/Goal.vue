<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import * as THREE from 'three'
import { generateGoalMaterial } from '../utils/materials'

@Component({
  name: 'Goal',
  components: {}
})
export default class Ground extends Vue {
  @Prop() private scene!: THREE.Scene

  @Prop() private frustumSize!: number

  @Prop() private side!: string

  // computed
  get size() {
    return this.frustumSize / 10
  }

  get isLeftSide() {
    return this.side === 'left'
  }

  get posX() {
    return this.isLeftSide ? -3.1 * this.size : 3.1 * this.size
  }

  private material = generateGoalMaterial()

  private geometry!: THREE.BoxGeometry

  private mesh!: THREE.Mesh

  mounted() {
    this.initializeGround()
  }

  private initializeGround() {
    this.geometry = new THREE.BoxGeometry(this.size / 4, this.size, 1.5 * this.size)
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.castShadow = true

    this.mesh.position.set(this.posX, this.size / 2, 0)
    if (!this.isLeftSide) {
      this.mesh.rotation.y = Math.PI
    }
    this.scene.add(this.mesh)
  }
}
</script>
<style scoped lang="scss"></style>
