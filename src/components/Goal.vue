<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'

import * as THREE from 'three'
import GoalImage from '@/assets/textures/goal-material.png'
import BaseMesh from './BaseMesh.vue'

@Component({
  name: 'Goal',
  components: {}
})
export default class Goal extends BaseMesh {
  @Prop() private side!: string

  protected material!: THREE.MeshLambertMaterial

  // computed
  get radius() {
    return this.frustumSize / 80
  }

  get size() {
    return this.frustumSize / 10
  }

  get isLeftSide() {
    return this.side === 'left'
  }

  get posX() {
    return this.isLeftSide ? -3.1 * this.size : 3.1 * this.size
  }

  mounted() {
    this.initialize()
  }

  generateGeometry(): THREE.BoxGeometry {
    return new THREE.BoxGeometry(this.size / 4, this.size, 1.5 * this.size)
  }

  generateMaterial(): THREE.MeshLambertMaterial[] {
    const clothTexture = this.textureLoader.load(GoalImage)
    clothTexture.anisotropy = 16

    const clothMaterial = new THREE.MeshLambertMaterial({
      alphaMap: clothTexture,
      side: THREE.DoubleSide,
      alphaTest: 0.9
    })

    const transparentMaterial = new THREE.MeshLambertMaterial({
      opacity: 0,
      color: 0x00_00_ff,
      transparent: true
    })
    return [
      transparentMaterial,
      clothMaterial,
      clothMaterial,
      transparentMaterial,
      clothMaterial,
      clothMaterial
    ]
  }

  configMesh() {
    this.mesh.castShadow = true

    this.mesh.position.set(this.posX, this.size / 2, 0)
    if (!this.isLeftSide) {
      this.mesh.rotation.y = Math.PI
    }
  }
}
</script>
<style scoped lang="scss"></style>
