<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <website-header/>
      </n-layout-header>
      <n-layout-content>
        <slot/>
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script setup>
import {NSpace, NLayout, NLayoutHeader, NLayoutContent} from 'naive-ui'
import WebsiteHeader from "./WebsiteHeader";
</script>

<style scoped>

</style>
