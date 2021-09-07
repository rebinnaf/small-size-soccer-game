<template>
  <div><div></div></div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import * as THREE from "three";

@Component({ name: "Ground", components: {} })
export default class MyComponent extends Vue {
  @Prop() private msg!: string;

  @Watch("msg")
  msgChanged(newValue: string) {
    this.msg = newValue;
  }

  private renderer = new THREE.WebGLRenderer({ alpha: true });

  private material = new THREE.MeshNormalMaterial();

  private camera!: THREE.PerspectiveCamera;

  private scene = new THREE.Scene();

  private geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);

  private mesh = new THREE.Mesh(this.geometry, this.material);

  mounted() {
    this.msg = "";

    this.camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    this.camera.position.z = 5;

    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setAnimationLoop(this.animation);
    document.body.append(this.renderer.domElement);
  }

  animation(time) {
    this.mesh.rotation.x = time / 2000;
    this.mesh.rotation.y = time / 1000;

    this.renderer.render(this.scene, this.camera);
  }
}
</script>
<style scoped lang="scss"></style>
