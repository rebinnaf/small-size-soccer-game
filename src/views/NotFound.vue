<template>
  <div>
    <h1>Not Found</h1>
    <router-link link-to="/"><h3>go to Home Page</h3></router-link>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ name: 'NotFound', components: {} })
export default class NotFound extends Vue {}
</script>
<style scoped lang="scss"></style>
