<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-17 12:36:35
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 16:01:08
-->
<script setup lang="ts">
import LoginView from "/src/view/Login/index.vue"
import { useGettersService } from "/src/store/service/getters-service"
import { localStorageUtil } from "/src/utils/localStorageUtil"
import { useLogoOut } from "./service/user-exit-service.ts"
import { useLoginDialog } from "./service/login-dialog-service.ts"

interface PopOptions {
  label: string
  fun: any
}

const { isAuth, store } = useGettersService()
const { handleExit } = useLogoOut(store, localStorageUtil)
const { showModal, openLoginModal, handleCloseModal } = useLoginDialog()

const popSelectOptions: Array<PopOptions> = [
  {
    label: "Exit",
    fun: handleExit
  }
]
</script>

<template>
  <div class="layout-header-user-view">
    <div class="option-button">
      <!-- 用户头像 -->
      <n-popover trigger="hover" v-if="isAuth">
        <template #trigger>
          <n-avatar round size="medium" src="/src/assets/images/p.jpg" />
        </template>
        <n-list hoverable clickable>
          <n-list-item v-for="(item, index) of popSelectOptions" :key="index">
            <span class="popover-item-text" @click="item.fun">
              {{ item.label }}
            </span>
          </n-list-item>
        </n-list>
      </n-popover>

      <!-- 登录按钮 -->
      <n-button color="#0f4b80" @click="openLoginModal" v-if="!isAuth">
        Sign in
      </n-button>
    </div>

    <LoginView
      :showModal="showModal"
      @closeModal="handleCloseModal"
    ></LoginView>
  </div>
</template>

<style scoped lang="scss">
.layout-header-user-view {
  .option-button {
    display: flex;
    flex-flow: row wrap;
    gap: 8px 12px;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>

<style lang="scss">
.popover-item-text {
  min-width: 50px;

  text-align: center;

  display: inline-block;

  cursor: pointer;

  &:hover {
    color: #2080f0;
  }
}
</style>
