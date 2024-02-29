<script setup lang="ts">
  import { useThemeStore } from '@/stores/themeStore';

  const store = useThemeStore();
  const { setTheme } = store;
  defineProps<{
    theme: string,
    background: string,
    textColor: string,
    columnBackground: string,
    ticketBackground: string,
    modalHeaderBackground: string
  }>();

</script>

<template>
  <div class="selector text" @click="setTheme(theme)">
    <span>{{ theme }}</span>
    <div class="content">
      <div class="column">
        <div class="header">ToDo</div>
        <div class="column-body">
          <div class="ticket">
            <p>#1</p>
            <p>Choose theme</p>
          </div>
          <div class="ticket">
            <p>#2</p>
            <p>Choose theme</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .selector {
    background-color: v-bind(background);
  }

  .content {
    position: relative;
    left: 20%;
    margin-bottom: 20px;
    width: 50%;
  }

  .text {
    color: v-bind(textColor);
  }

  .selector:hover {
    box-shadow: 5px 5px 8px 5px grey;
  }

  .column {
    border: 1px solid v-bind(textColor);
    background-color: v-bind(columnBackground);
  }

  .column,
  .header {

    border-bottom: 1px solid v-bind(textColor);
  }

  .header {
    text-align: center;
    background-color: v-bind(modalHeaderBackground);
  }

  .ticket {
    margin: 10px 10px 0 10px;
    border: 1px solid v-bind(textColor);
    background-color: v-bind(ticketBackground);
  }

  .ticket:last-child {
    margin-bottom: 10px;
  }

  .ticket p {
    margin-left: 10px
  }

  .text span {
    margin-left: 10px;
  }
</style>