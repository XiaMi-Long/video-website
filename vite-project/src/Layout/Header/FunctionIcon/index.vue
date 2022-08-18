<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-17 12:01:33
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-17 12:40:33
-->
<script setup lang="ts">
import { SearchFilled, FormatListBulletedFilled } from "@vicons/material"
</script>

<template>
  <div class="function-icon-view">
    <n-space>
      <n-icon size="25" class="icon">
        <FormatListBulletedFilled></FormatListBulletedFilled>
      </n-icon>
      <n-icon size="25" class="icon">
        <SearchFilled></SearchFilled>
      </n-icon>
    </n-space>
  </div>
</template>

<style scoped lang="scss">
.function-icon-view {
  .icon {
    color: var(--layout-header-icon-color);
  }
}
</style>
