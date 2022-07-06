<template>
  <div>
    <n-card>
      <n-form size="large">
        <n-form-item label="Email:">
          <n-input placeholder="Email" />
        </n-form-item>
        <n-form-item label="Password:">
          <n-input placeholder="Password" />
        </n-form-item>
        <n-button secondary type="primary" class="w-full">
          Login
        </n-button>
      </n-form>
    </n-card>
    <n-card class="my-4" style="background: transparent" content-style="background: transparent">
      <n-space>
        <n-p>New to Elia?</n-p>
        <NuxtLink to="register"><n-gradient-text type="success">Create an Account.</n-gradient-text></NuxtLink>
      </n-space>
    </n-card>
  </div>
</template>

<script setup>
import {NCard, NForm, NFormItem, NInput, NButton, NP, NGradientText, NSpace} from 'naive-ui'
</script>

<style scoped>

</style>
