<script setup>
import { ref } from "vue";
import { VueUiCarouselTable } from "vue-data-ui";
import "vue-data-ui/style.css";

// 从文件中直接 import
import configJson from "@/assets/config.json";
import datasetJson from "@/assets/revenue.json";

// 使用 ref 包装，让其保持响应式
const config = ref(configJson);
const dataset = ref(datasetJson);

// function containsAnchor(value) {
//   if (typeof value !== 'string') return false
//   return value.toLowerCase().includes('href')
// }
</script>

<template>
  <div style="width: 1400px">
    <VueUiCarouselTable :config="config" :dataset="dataset" />
  </div>
</template>

<!-- <a href="https://example.com" target="_blank">链接</a> -->


<!-- <template>
  <VueUiCarouselTable :config="config" :dataset="dataset">
    <template #cell="{ row, colIndex }">
      <div v-if="containsAnchor(row[colIndex])"
           v-html="row[colIndex]"
           style="white-space: nowrap;">
      </div>
      <div v-else>
        {{ row[colIndex] }} 
      </div>
    </template>
  </VueUiCarouselTable>
</template> -->
