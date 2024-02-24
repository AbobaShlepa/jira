<script setup lang="ts">
  import ThemePreview from './ThemePreview.vue';
  const args = {
    theme: 'dark',
    background: 'var(--dark-background)',
    textColor: 'var(--dark-text-color)',
    columnBackground: 'var(--dark-column-background)',
    ticketBackground: 'var(--dark-ticket-background)',
    modalHeaderBackground: 'var(--dark-header-background)',
  }
</script>

<template>
  <ThemePreview v-bind="args" />
</template>