<template>
  <n-config-provider :theme="darkTheme">
    <website-layout/>
    <slot/>
  </n-config-provider>
</template>

<script setup>
import {NConfigProvider, darkTheme} from 'naive-ui'
import WebsiteLayout from "../components/website/WebsiteLayout";
</script>

<style scoped>

</style>
