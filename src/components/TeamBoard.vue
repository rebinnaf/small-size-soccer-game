<template>
  <div :class="bgClass">
    <div>Score:</div>
    <div>name:</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({ name: 'TeamBoard', components: {} })
export default class MyComponent extends Vue {
  @Prop() private color!: string

  get bgClass() {
    return `bg-${this.color}-500 border-2 border-${this.color}-800 h-20`
  }
}
</script>
<style scoped lang="scss"></style>
