<template>
  <div></div>
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'

import * as THREE from 'three'
import GroundImage from '@/assets/textures/ground-material.jpg'
import BaseMesh from './BaseMesh.vue'

@Component({
  name: 'Ground',
  components: {}
})
export default class Ground extends BaseMesh {
  protected material!: THREE.MeshBasicMaterial

  // computed
  get groundSize(): number {
    return this.frustumSize / 2
  }

  mounted() {
    this.initialize()
  }

  generateGeometry(): THREE.PlaneGeometry {
    return new THREE.PlaneGeometry((this.groundSize * 4) / 3, this.groundSize)
  }

  generateMaterial(): THREE.MeshBasicMaterial {
    return new THREE.MeshBasicMaterial({
      map: this.textureLoader.load(GroundImage)
    })
  }

  configMesh(): void {
    this.mesh.rotation.x = Math.PI * -0.5
  }
}
</script>
<style scoped lang="scss"></style>
