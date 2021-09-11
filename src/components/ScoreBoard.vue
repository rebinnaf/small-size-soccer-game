<template>
  <div class="grid grid-cols-2 gap-0">
    <TeamBoard color="red">1</TeamBoard>
    <TeamBoard color="blue">9</TeamBoard>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TeamBoard from './TeamBoard.vue'

@Component({ name: 'ScorePalette', components: { TeamBoard } })
export default class MyComponent extends Vue {}
</script>
<style scoped lang="scss"></style>
