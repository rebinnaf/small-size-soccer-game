<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({ name: 'TemplateComponent', components: {} })
export default class MyComponent extends Vue {
  @Prop() private msg!: string

  @Watch('msg')
  msgChanged(newValue: string) {
    this.msg = newValue
  }

  mounted() {
    this.msg = 'hi'
  }
}
</script>
<style scoped lang="scss"></style>
