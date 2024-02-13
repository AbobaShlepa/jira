<script setup lang="ts">
  import { computed, ref, type Ref } from 'vue';
  import { search } from '@/helpers/search';
  import { OnClickOutside } from '@vueuse/components'
  import SearchResult from './SearchResult.vue';
  import SearchIcon from './SearchIcon.vue';
  import ClearButton from './ClearButton.vue';

  let searchQuery: Ref<string> = ref('');

  const searchResult = computed(() => search(searchQuery.value));

  const hasFocus = ref(false);

  function onClear() {
    searchQuery.value = '';
  }
</script>

<template>
  <div class="wrapper">
    <OnClickOutside @trigger="hasFocus = false">
      <div class="search-container">
        <SearchIcon />
        <textarea class="search" v-model="searchQuery" @focusin="hasFocus = true" />
        <ClearButton :on-clear="onClear" />
        <SearchResult :tickets="searchResult.tickets" v-if="searchQuery.length > 0 && searchResult.success && hasFocus" />
      </div>
    </OnClickOutside>
  </div>
</template>

<style scoped>
.wrapper {
  display: block;
  width: 550px;
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
</style>