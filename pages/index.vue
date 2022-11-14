<script setup>
useHead({
  title: 'Home',
})

const form = ref({})
</script>

<template lang="pug">
el-card(shadow="never" header="Organization")
  el-form(ref="form" :model="form")
    el-row(:gutter="15")
      el-col(:sm="24")
        el-form-item(prop="brand_id" label="Brand")
          el-input(v-model="form.bran_id" id="123")
        el-form-item
          el-button(type="primary") This is Button
</template>

<style lang="sass" scoped>
.root
  background: antiquewhite
  color: black
</style>
