<template>
  <n-space align="center" vertical class="p-4">
    <n-image src="icon.svg"/>
    <LoginCard/>
  </n-space>
</template>

<script setup>
import {NSpace, NImage} from 'naive-ui'
import LoginCard from "../components/website/auth/LoginCard";
const layout = useLayout()
onBeforeMount(() => {
  layout.value = 'website'
})
</script>

<style scoped>

</style>
