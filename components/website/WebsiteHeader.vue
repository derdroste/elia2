<template>
  <n-page-header class="px-4 py-2">
    <template #avatar>
      <n-image
          src="icon.svg"
          width="50"
      />
    </template>
    <template #title>
      <NuxtLink
          to="/website"
          style="text-decoration: none; color: inherit"
      >
        Elia
      </NuxtLink>
    </template>
  </n-page-header>
</template>

<script setup>
import {NPageHeader, NAvatar, NImage} from 'naive-ui'
</script>

<style scoped>

</style>
