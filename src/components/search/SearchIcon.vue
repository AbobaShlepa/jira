<script setup lang="ts">
</script>

<template>
  <span class="search-icon-container tooltip">
    <img src="/search.svg" class="icon search-icon" @mouseover=""/>
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

.icon {
  position: relative;
  top: 3px;
  left: 10px;
  height: 30px;
  width: 30px;
}

.search-icon {
  top: 10px;
}

button {
  all: unset;
}

</style>