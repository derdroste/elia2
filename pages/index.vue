<template>
  <div>
    <h1 style="color: white">fleter</h1>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
    <n-button>naive-ui</n-button>
  </div>
</template>


<script setup>
import { NButton } from 'naive-ui'

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('installable')
});
window.addEventListener('click', async (e) => {
  console.log(await $fetch('/api/user'))
});
</script>

<style scoped>

</style>
