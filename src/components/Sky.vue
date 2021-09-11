<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import * as THREE from 'three'

import { generateSkyMaterial } from '../utils/materials'
import { generateSkyGeometry } from '../utils/geometries'

@Component({
  name: 'Sky',
  components: {}
})
export default class Ground extends Vue {
  @Prop() private scene!: THREE.Scene

  @Prop() private frustumSize!: number

  private material = generateSkyMaterial()

  private geometry!: THREE.PlaneGeometry

  private mesh!: THREE.Mesh

  mounted() {
    this.initializeGround()
  }

  private initializeGround() {
    this.geometry = generateSkyGeometry(this.frustumSize * 4)
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.position.set(0, this.frustumSize / 2, -this.frustumSize / 4)
    this.mesh.rotation.x = Math.PI * 0.25

    this.scene.add(this.mesh)
  }
}
</script>
<style scoped lang="scss"></style>
