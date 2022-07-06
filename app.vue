<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  const layout = useLayout()
</script>

<style>
body {
  background: #000;
}
a {
  text-decoration: none;
}
.w-full {
  width: 100%;
}
.p-2 {
  padding: 0.5rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.m-2 {
  margin: 0.5rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.m-4 {
  margin: 1rem;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
