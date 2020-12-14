<template>
  <div> I am a Vue component and I have been clicked {{ times }} </div>
  <div class="mt-4">
    <button @click="times++">Click me</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        times: 0
      }
    }
  }
</script>

<style scoped>

</style>
