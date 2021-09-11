<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import * as THREE from 'three'

import { generateGroundMaterial } from '../utils/materials'
import { generateGroundGeometry } from '../utils/geometries'

@Component({
  name: 'Ground',
  components: {}
})
export default class Ground extends Vue {
  @Prop() private scene!: THREE.Scene

  @Prop() private frustumSize!: number

  private material = generateGroundMaterial()

  private geometry!: THREE.PlaneGeometry

  private mesh!: THREE.Mesh

  mounted() {
    this.initializeGround()
  }

  private initializeGround() {
    this.geometry = generateGroundGeometry(this.frustumSize / 2)
    this.material = generateGroundMaterial()
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.rotation.x = Math.PI * -0.5

    this.scene.add(this.mesh)
  }
}
</script>
<style scoped lang="scss"></style>
