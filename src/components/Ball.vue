<template>
  <div></div>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'

import * as THREE from 'three'

import BallImage from '@/assets/textures/ball-material.png'
import BaseMesh from './BaseMesh.vue'

@Component({
  name: 'Ball',
  components: {}
})
export default class Ball extends BaseMesh {
  protected material!: THREE.MeshLambertMaterial

  // computed
  get radius() {
    return this.frustumSize / 100
  }

  mounted() {
    this.initialize()
  }

  generateGeometry(): THREE.SphereGeometry {
    return new THREE.SphereGeometry(this.radius, this.radius * 20, this.radius * 10)
  }

  generateMaterial(): THREE.MeshLambertMaterial {
    return new THREE.MeshLambertMaterial({
      color: '#ffffff',
      map: this.textureLoader.load(BallImage)
    })
  }

  configMesh(): void {
    this.mesh.castShadow = true
    this.mesh.position.set(0, this.radius, 0)
  }
}
</script>
<style scoped lang="scss"></style>
