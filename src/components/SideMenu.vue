<script setup lang="ts">
  import { ref } from 'vue';

  let shown = ref(true);

  function toggleMenu() {
    shown.value = !shown.value;
  }

</script>

<template>
  <div class="flex vertical">
    <button @click="toggleMenu">
      {{ shown ? 'Show' : 'Hide' }}
    </button>
    <div v-bind:style="{ visibility: shown ? 'visible' : 'hidden' }">
      <button>
        +
      </button>

      <button>
        -
      </button>

      <button>
        *
      </button>

      <button>
        *
      </button>
    </div>
  </div>
</template>

<style scoped>
.vertical {
  writing-mode: vertical-rl;
}

button {
  height: 100px;
}
</style>