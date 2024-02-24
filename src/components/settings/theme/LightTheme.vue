<script setup lang="ts">
  import ThemePreview from './ThemePreview.vue';
  const args = {
    theme: 'light',
    background: 'var(--light-background)',
    textColor: 'var(--light-text-color)',
    columnBackground: 'var(--light-column-background)',
    ticketBackground: 'var(--light-ticket-background)',
    modalHeaderBackground: 'var(--light-header-background)',
  }
</script>

<template>
  <ThemePreview v-bind="args" />
</template>