<template>
  <div class="overflow-hidden h-200">
    <ScoreBoard></ScoreBoard>
    <Scene class="flex-grow"></Scene>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Scene from '@/components/Scene.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'

@Component({ name: 'Layout', components: { Scene, ScoreBoard } })
export default class MyComponent extends Vue {}
</script>
<style scoped lang="scss"></style>
