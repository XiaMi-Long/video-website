/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-19 15:56:26
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-19 15:58:31
 */
export function useLoginDialog() {
  let showModal = ref<boolean>(false)

  /**
   * @name: wwy
   * @msg: 打开登录弹窗
   * @return {*}
   */
  function openLoginModal(): void {
    showModal.value = true
  }

  /**
   * @name: wwy
   * @msg: 关闭登录弹窗
   * @return {*}
   */
  function handleCloseModal(): void {
    showModal.value = false
  }

  return { showModal, openLoginModal, handleCloseModal }
}
