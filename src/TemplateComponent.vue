<template>
<div></div>
</template>
<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';

@Component({ name: 'TemplateComponent', components: {} })
export default class MyComponent extends Vue {
  @Prop() private msg!: string;

  @Watch('msg')
  msgChanged(newVal: string) {
    this.msg = newVal;
  }
}
</script>
<style scoped lang="scss">

</style>
