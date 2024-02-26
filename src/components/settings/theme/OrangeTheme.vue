<script setup lang="ts">
  import ThemePreview from './ThemePreview.vue';
  const args = {
    theme: 'orange',
    background: 'var(--orange-background)',
    textColor: 'var(--orange-text-color)',
    columnBackground: 'var(--orange-column-background)',
    ticketBackground: 'var(--orange-ticket-background)',
    modalHeaderBackground: 'var(--orange-header-background)',
  }
</script>

<template>
  <ThemePreview v-bind="args" />
</template>