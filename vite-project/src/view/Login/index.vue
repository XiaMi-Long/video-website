<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-08-18 12:05:44
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 17:49:08
-->
<script setup lang="ts">
import LogoTextView from "/src/components/LogoText/index.vue"
import { computed } from "@vue/runtime-core"

import { useLoginService } from "./service/login-service"

interface Props {
  showModal: boolean
}

interface Emit {
  (e: "closeModal", closeModal: boolean): void
}

const props = defineProps<Props>()
const emits = defineEmits<Emit>()

const tabsValue = ref<string | number>("Signin")
const { userForm, userFormRules, userFormRef, handleModalLogin } =
  useLoginService()

/**
 * @name: wwy
 * @msg: 接受弹窗组件emit关闭弹窗
 * @return {*}
 */
function handleClickLoginModal(): void {
  emits("closeModal", false)
}

/**
 * @name: wwy
 * @msg: tab标签切换回调
 * @return {*}
 */
function handleTabsUpdate(value: string | number): void {
  tabsValue.value = value
}

const isSignin = computed(() => tabsValue.value === "Signin")
</script>

<template>
  <div>
    <n-modal
      v-model:show="props.showModal"
      transform-origin="center"
      :mask-closable="false"
      :close-on-esc="false"
      :on-mask-click="handleClickLoginModal"
    >
      <n-card
        style="width: 600px"
        title=""
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <template #header>
          <div class="card-header">
            <LogoTextView> VIDEO </LogoTextView>
          </div>
        </template>
        <n-tabs
          type="line"
          v-model:value="tabsValue"
          :on-update:value="handleTabsUpdate"
          animated
          justify-content="space-evenly"
        >
          <n-tab-pane name="Signin" tab="登录" display-directive="show">
            <n-form
              ref="userFormRef"
              :model="userForm"
              :rules="userFormRules"
              size="medium"
              label-placement="left"
              label-width="auto"
            >
              <n-form-item label="姓名" path="userName">
                <n-input
                  v-model:value="userForm.userName"
                  placeholder="输入姓名"
                  clearable
                  autocomplete="off"
                  :maxlength="15"
                />
              </n-form-item>
              <n-form-item label="密码" path="password">
                <n-input
                  type="password"
                  show-password-on="click"
                  v-model:value="userForm.password"
                  :input-props="{ autocomplete: 'on' }"
                  placeholder="输入密码"
                  clearable
                  :maxlength="30"
                />
              </n-form-item>
            </n-form>
          </n-tab-pane>
          <n-tab-pane name="register" tab="注册" display-directive="show">
            register
          </n-tab-pane>
        </n-tabs>

        <template #footer>
          <n-space justify="end">
            <n-button
              color="#2080f0"
              ghost
              @click="handleModalLogin(emits)"
              v-if="isSignin"
            >
              登录
            </n-button>
            <n-button color="#2080f0" ghost v-if="!isSignin"> 注册 </n-button>
            <n-button type="info" @click="handleClickLoginModal">
              关闭
            </n-button>
          </n-space>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<style scoped lang="scss">
.card-header {
  text-align: center;
  .title {
    font-weight: bold;

    color: #2080f0;

    font-size: 18px;

    cursor: pointer;
  }
}
</style>
