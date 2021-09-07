<template>
  <div>Ground:<Ground></Ground></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ground from "@/components/Ground.vue";

@Component({ name: "Layout", components: { Ground } })
export default class MyComponent extends Vue {}
</script>
<style scoped lang="scss"></style>
