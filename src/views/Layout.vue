<template>
  <div>Ground:<Scene></Scene></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Scene from '@/components/Scene.vue'

@Component({ name: 'Layout', components: { Scene } })
export default class MyComponent extends Vue {}
</script>
<style scoped lang="scss"></style>
