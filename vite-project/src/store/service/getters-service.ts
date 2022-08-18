/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-18 21:45:50
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 23:45:58
 */
import { useStore } from "vuex"

export function useGettersService() {
  const store = useStore()
  const isAuth = computed(() => store.getters.getIsAuthor)

  return {
    isAuth,
    store
  }
}
