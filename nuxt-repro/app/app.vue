<script setup>
const { data } = await useSanityQuery('*[_type == "home"][0]');
</script>

<template>
  <div>
    <h1>Home</h1>
    <code>{{ data }}</code>
  </div>
</template>
