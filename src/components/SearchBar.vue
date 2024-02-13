<script setup lang="ts">
  import { useTicketsStore } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';
  import { computed, ref, type Ref } from 'vue';
  import { search } from '@/helpers/search';

  let searchQuery: Ref<string> = ref('');
  const store = useTicketsStore();
  const { tickets } = storeToRefs(store);

  const searchResult = computed(() => search(tickets.value, searchQuery.value));

  const hasFocus = ref(false);

  function onClear() {
    searchQuery.value = '';
  }
</script>

<template>
  <div class="wrapper">
    <div class="search-container">
      <span class="search-icon-container">
        <img src="/src/assets/search.svg" class="icon search-icon" />
      </span>
      <textarea class="search" v-model="searchQuery" @focusin="hasFocus = true" @focusout="hasFocus = false" />
      <button class="clear-icon-container" @click="onClear">
        <img src="/src/assets/clear.svg" class="icon" />
      </button>
      <div class="results" v-if="searchResult.success && hasFocus">
        <div :class="'result'" v-for="foundTicket in searchResult.tickets">
          {{ foundTicket.id }} {{ foundTicket.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: block;
  width: 100%;
  height: 50px;
}

.search-container {
  width: 550px;
  margin: auto;
  border-radius: 20px;
  height: fit-content;
  background-color: var(--background2);
  position: absolute;
  left: calc((100% - 550px) / 2);
}

.search {
  height: 40px;
  width: calc(100% - 130px);
  background: transparent;
  resize: none;
  color: var(--text-color);
  border: none;
  padding-left: 20px;
  display: inline;
  position: sticky;
  line-height: 40px;
  margin-top: 5px;
}

.results {
  width: inherit;
  width: 550px;
  margin-top: 5px;
}

.result {
  width: 100% - 20px;
  height: 30px;
  border-bottom: 1px solid #555555;
  line-height: 30px;
  padding-left: 20px;
}

.result:last-child {
  border-bottom: none;
}

.result:hover {
  background-color: #333333;
}

.clear-icon-container {
  float: right;
  width: 50px;
  height: 50px;
  display: inline;
  cursor: pointer;
}

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