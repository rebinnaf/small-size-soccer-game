<template>
  <div
    :class="`h-20 flex flex-row items-center justify-center text-center border-2 font-mono text-3xl ${bgClass}`"
  >
    <span v-if="!isLeft" :class="scoreClass">
      {{ score }}
    </span>
    <div class="flex-grow">
      {{ name }}
    </div>
    <span v-if="isLeft" :class="scoreClass">
      {{ score }}
    </span>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { Colors, Sides } from '@/utils/constants'

@Component({ name: 'TeamBoard', components: {} })
export default class MyComponent extends Vue {
  @Prop({ default: Colors.RED }) private color!: Colors

  @Prop({ default: 'Team' }) private name!: string

  @Prop({ default: Sides.LEFT }) private side!: Sides

  @Prop({ default: 0 }) private score!: number

  get isLeft() {
    return this.side === Sides.LEFT
  }

  get bgClass() {
    return `bg-${this.color}-500 border-${this.color}-800 `
  }

  get scoreClass() {
    return `p-5 border-l-2 border-r-2 border-${this.color}-800`
  }
}
</script>
<style scoped lang="scss"></style>
