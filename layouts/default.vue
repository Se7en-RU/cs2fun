<template>
  <div>
    <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
useHead({
  htmlAttrs: {
    'lang': 'ru',
    'data-bs-theme': () => colorMode.value,
  },
})
</script>