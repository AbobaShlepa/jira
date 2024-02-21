<script setup lang="ts">

  defineProps<{
    onClick: () => void,
    tooltipText: string
  }>();

</script>

<template>
  <button @click="onClick" class="tooltip item">
    <slot>
      Here could be icon
    </slot>
    <span class="tooltip-text">
      {{ tooltipText }}
    </span>
  </button>
</template>

<style scoped>
  button {
    all: unset;
    height: var(--button-size);
    width: var(--button-size);
    cursor: pointer;
  }

  .icon {
    height: var(--button-size);
    width: var(--button-size);
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltip-text {
    visibility: hidden;
    width: 120px;
    background-color: var(--subcontainer-background);
    color: var(--text-title);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    min-height: calc(var(--button-size) - 20px);
    height: fit-content;
    line-height: calc(var(--button-size) - 20px);

    position: absolute;
    z-index: 1;
    top: 5px;
    right: 105%;
  }

  .tooltip:hover .tooltip-text {
    visibility: visible;
  }

  .item:hover {
    background: var(--subcontainer-background);
  }
</style>