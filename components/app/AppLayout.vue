<template>
  <n-layout has-sider style="height: 100vh" sider-placement="right">
    <n-layout>
      <slot/>
    </n-layout>
    <app-menu/>
  </n-layout>
</template>

<script setup>
import { NLayout } from 'naive-ui'
import AppMenu from "./AppMenu";
</script>


