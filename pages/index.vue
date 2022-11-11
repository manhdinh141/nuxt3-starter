<script setup>
useHead({
  title: 'Home',
})

const name = $ref('Manh')
</script>

<template lang="pug">
.root Hello {{ name }}!
</template>

<style lang="sass" scoped>
.root
  background: antiquewhite
  color: black
</style>
