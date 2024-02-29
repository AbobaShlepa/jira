<script setup lang="ts">
  import ThemePreview from './ThemePreview.vue';
  const args = {
    theme: 'purple',
    background: 'var(--purple-background)',
    textColor: 'var(--purple-text-color)',
    columnBackground: 'var(--purple-column-background)',
    ticketBackground: 'var(--purple-ticket-background)',
    modalHeaderBackground: 'var(--purple-header-background)',
  }
</script>

<template>
  <ThemePreview v-bind="args" />
</template>