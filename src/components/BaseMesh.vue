<template>
  <div></div>
</template>
<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator'

import * as THREE from 'three'

export default abstract class BaseMesh extends Vue {
  @Prop() protected scene!: THREE.Scene

  @Prop() protected frustumSize!: number

  protected textureImage!: string

  protected textureLoader = new THREE.TextureLoader()

  protected abstract material: THREE.Material | THREE.Material[]

  protected geometry!: THREE.ShapeGeometry

  protected mesh!: THREE.Mesh

  abstract generateGeometry(size: number): THREE.ShapeGeometry

  abstract generateMaterial(): THREE.Material | THREE.Material[]

  abstract configMesh(): void

  protected initialize() {
    this.geometry = this.generateGeometry(this.frustumSize / 2)
    this.material = this.generateMaterial()
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.configMesh()
    this.scene.add(this.mesh)
  }
}
</script>
<style scoped lang="scss"></style>
