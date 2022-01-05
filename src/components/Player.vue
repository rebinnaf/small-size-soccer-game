<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'

import * as THREE from 'three'

import BaseMesh from './BaseMesh.vue'

@Component({
  name: 'Ball',
  components: {}
})
export default class Player extends BaseMesh {
  @Prop() protected teamColor!: string

  protected material!: THREE.MeshPhongMaterial

  // computed
  get radius() {
    return this.frustumSize / 50
  }

  mounted() {
    this.initialize()
  }

  generateGeometry(): THREE.CylinderGeometry {
    const radiusTop = this.radius // ui: radiusTop
    const radiusBottom = this.radius // ui: radiusBottom
    const height = this.radius // ui: height
    const radialSegments = 12 // ui: radialSegments
    return new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
  }

  generateMaterial(): THREE.MeshPhongMaterial {
    return new THREE.MeshPhongMaterial({ color: this.teamColor })
  }

  configMesh() {
    this.mesh.castShadow = true
    this.mesh.position.set(10, this.radius, 0)
  }
}
</script>
<style scoped lang="scss"></style>
