<template>
  <div>
    <n-config-provider :theme="darkTheme">
      <app-layout>
        <slot/>
      </app-layout>
    </n-config-provider>
  </div>
</template>

<script setup>
import AppLayout from '../components/app/AppLayout'
import {NConfigProvider, darkTheme} from 'naive-ui'
</script>

<style scoped>

</style>
