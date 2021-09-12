<template>
  <div class="flex flex-row w-full text-center justify-center items-center">
    <div>
      <div class="font-mono countdown" :style="{ fontSize: size + 'px' }">
        <span :style="`--value: ${number}`" class=""></span>
      </div>
      <div v-if="hasSubtitle">
        <slot name="subtitle"
          ><span :style="{ fontSize: size / 2 + 'px' }">{{ subtitle }}</span></slot
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({ name: 'Counter', components: {} })
export default class MyComponent extends Vue {
  @Prop({ default: '00' }) private number!: string

  @Prop({ default: '' }) private subtitle!: string

  @Prop({ default: 30 }) private size!: number

  get hasSubtitle() {
    return this.subtitle.length > 0
  }
}
</script>
<style scoped lang="scss"></style>
