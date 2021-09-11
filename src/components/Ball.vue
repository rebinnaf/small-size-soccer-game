<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import * as THREE from 'three'

import { generateBallMaterial } from '../utils/materials'
import { generateBallGeometry } from '../utils/geometries'

@Component({
  name: 'Ball',
  components: {}
})
export default class Ground extends Vue {
  @Prop() private scene!: THREE.Scene

  @Prop() private frustumSize!: number

  // computed
  get radius() {
    return this.frustumSize / 80
  }

  private material = generateBallMaterial()

  private geometry!: THREE.SphereGeometry

  private mesh!: THREE.Mesh

  mounted() {
    this.initializeGround()
  }

  private initializeGround() {
    this.geometry = generateBallGeometry(this.radius)
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.castShadow = true
    this.mesh.position.set(0, this.radius, 0)

    this.scene.add(this.mesh)
  }
}
</script>
<style scoped lang="scss"></style>
