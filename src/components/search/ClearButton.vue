<script setup lang="ts">
  defineProps<{
    onClear: () => void
  }>();
</script>

<template>
  <button class="clear-icon-container" @click="onClear">
    <img src="/clear.svg" class="icon" />
  </button>
</template>

<style scoped>
.clear-icon-container {
  float: right;
  width: 50px;
  height: 50px;
  display: inline;
  cursor: pointer;
}

.icon {
  position: relative;
  top: 3px;
  left: 10px;
  height: 30px;
  width: 30px;
}

button {
  all: unset;
}
</style>