<template>
  <n-space align="center" vertical class="p-4">
    <n-image src="icon.svg"/>
    <RegisterCard/>
  </n-space>
</template>

<script setup>
import {NSpace, NImage} from 'naive-ui'
import RegisterCard from "../components/website/auth/RegisterCard";
const layout = useLayout()
onBeforeMount(() => {
  layout.value = 'website'
})
</script>

<style scoped>

</style>
