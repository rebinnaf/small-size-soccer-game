<template>
  <div class="flex flex-col items-center bg-neutral text-neutral-content text-center">
    <div class="flex flex-row flex-grow items-center">
      <Counter :number="minutes" :size="30"></Counter>
      <div class="font-mono text-3xl">:</div>
      <Counter :number="seconds" :size="30"></Counter>
    </div>
    <div class="font-mono text-1xl">{{ gameStatus }}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Counter from '@/components/ui/Counter.vue'

@Component({ name: 'Timer', components: { Counter } })
export default class MyComponent extends Vue {
  @Prop() private color!: string

  private seconds = 0

  private minutes = 0

  private gameStatus = 'Game Started'

  mounted() {
    setInterval(this.updateTime, 1000)
  }

  updateTime(): void {
    this.seconds += 1
    if (this.seconds === 60) {
      this.minutes += 1
      this.seconds = 0
    }
    if (this.minutes === 60) {
      this.minutes = 0
    }
  }
}
</script>
<style scoped lang="scss"></style>
