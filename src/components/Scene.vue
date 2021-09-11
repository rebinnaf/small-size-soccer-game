<template>
  <div>
    <Ground :scene="scene" :frustum-size="frustumSize"></Ground>
    <Ball :scene="scene" :frustum-size="frustumSize"></Ball>
    <Goal :scene="scene" :frustum-size="frustumSize" side="right"></Goal>
    <Goal :scene="scene" :frustum-size="frustumSize" side="left"></Goal>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { generateBackgroundMaterial } from '@/utils/materials'
import Ground from './Ground.vue'
import Ball from './Ball.vue'
import Goal from './Goal.vue'

@Component({
  name: 'Scene',
  components: { Ground, Ball, Goal }
})
export default class Scene extends Vue {
  private renderer = new THREE.WebGLRenderer({ antialias: true })

  private camera!: THREE.PerspectiveCamera

  private scene = new THREE.Scene()

  private frustumSize = 60

  private controls!: OrbitControls

  mounted() {
    this.initializeScene()
  }

  private initializeScene() {
    this.scene.background = generateBackgroundMaterial()
    this.scene.fog = new THREE.Fog(0x30_e0_30, 500, 10_000)
    const aspect = window.innerWidth / window.innerHeight

    this.camera = new THREE.PerspectiveCamera(this.frustumSize, aspect, 1, 100)
    this.camera.position.set(0, this.frustumSize / 3, this.frustumSize / 2)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.target.set(0, 5, 0)
    this.controls.maxPolarAngle = Math.PI * 0.5
    this.controls.minDistance = 0
    this.controls.maxDistance = 5000

    const ambientLight = new THREE.AmbientLight(0xff_ff_ff, 0.6)
    this.scene.add(ambientLight)

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.append(this.renderer.domElement)

    this.animate()
  }

  resizeRendererToDisplaySize() {
    const canvas = this.renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      this.renderer.setSize(width, height, false)
    }
    return needResize
  }

  animate() {
    if (this.resizeRendererToDisplaySize()) {
      const canvas = this.renderer.domElement
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight
      this.camera.updateProjectionMatrix()
    }
    this.renderer.render(this.scene, this.camera)
    this.controls.update()
    requestAnimationFrame(this.animate)
  }
}
</script>
<style scoped lang="scss"></style>
