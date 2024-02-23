<script setup lang="ts">
  import Close from 'vue-material-design-icons/Close.vue'
  defineProps<{
    onClear: () => void
  }>();
</script>

<template>
  <button class="clear-icon-container" @click="onClear">
    <div class="icon-wrapper">
      <Close :size="45" fill-color="var(--icon-fill)" />
    </div>
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

.icon-wrapper {
  margin-top: 5px;
  margin-right: 5px;
}

button {
  all: unset;
}
</style>