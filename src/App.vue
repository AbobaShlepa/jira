<script setup lang="ts">
</script>

<template>
  <nav class="navigation">
    <button type="button">
      <router-link to="/board/1">Board</router-link>
    </button>
    <button type="button">
      <router-link to="/new">Add new ticket</router-link>
    </button>
  </nav>
  <router-view></router-view>
</template>

<style scoped></style>