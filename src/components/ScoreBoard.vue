<template>
  <div class="grid grid-cols-11 gap-0 auto-cols-max">
    <TeamBoard color="red" side="left" class="col-span-5"></TeamBoard>
    <Timer></Timer>
    <TeamBoard color="blue" side="right" class="col-span-5"></TeamBoard>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TeamBoard from './TeamBoard.vue'
import Timer from './Timer.vue'

@Component({ name: 'ScoreBoard', components: { TeamBoard, Timer } })
export default class MyComponent extends Vue {}
</script>
<style scoped lang="scss"></style>
