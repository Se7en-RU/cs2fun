<template>
  <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  <button type="button" class="btn btn-light" @click="$colorMode.preference = 'light'">Light</button>
  <button type="button" class="btn btn-dark" @click="$colorMode.preference = 'dark'">Dark</button>
</template>
<script setup lang ="ts">
enum Theme {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

// const colorMode = useColorMode()
// function changeTheme(theme: Theme): void {
//   colorMode.value = theme;
  // if (theme === colorMode.value) {
  //   colorMode.value = Theme.System;
  // } else {
  //   colorMode.value = theme;
  // }
// }
</script>