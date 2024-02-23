<script setup lang="ts">
  import SearchWeb from 'vue-material-design-icons/SearchWeb.vue'
</script>

<template>
  <span class="search-icon-container tooltip">
    <div class="icon-wrapper">
      <SearchWeb :size="45" fill-color="var(--icon-fill)" />
    </div>
    <div class="tooltip-text">
      <p>Allows you to search through tickets</p>
      <p>Available keywords: 'title', 'sprint' and 'assignee'</p>
      <p>Example: title = fix and sprint = 1</p>
    </div>
  </span>
</template>

<style scoped>
.search-icon-container {
  float: left;
  width: 50px;
  height: 50px;
}

.icon-wrapper {
  margin-top: 5px;
  margin-left: 5px;
}

button {
  all: unset;
}
</style>