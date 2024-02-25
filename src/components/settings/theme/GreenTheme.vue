<script setup lang="ts">
  import ThemePreview from './ThemePreview.vue';
  const args = {
    theme: 'green',
    background: 'var(--green-background)',
    textColor: 'var(--green-text-color)',
    columnBackground: 'var(--green-column-background)',
    ticketBackground: 'var(--green-ticket-background)',
    modalHeaderBackground: 'var(--green-header-background)',
  }
</script>

<template>
  <ThemePreview v-bind="args" />
</template>