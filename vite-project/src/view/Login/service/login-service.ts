/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-18 15:07:34
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 22:19:04
 */
import { userLoginRequest } from "/src/api/Login"
import { localStorageUtil } from "/src/utils/localStorageUtil"
import { useStore } from "vuex"

export interface FormUser {
  userName: string
  password: string
}

export interface FormUserRules {
  userName: Object
  password: Object
}

export function useLoginService() {
  const store = useStore()
  const message = useMessage()

  const userFormRef = ref<any | null>(null)
  const userForm = ref<FormUser>({
    userName: "admin",
    password: "admin123"
  })
  const userFormRules: FormUserRules = {
    userName: {
      required: true,
      message: "请输入用户名",
      trigger: "blur"
    },
    password: {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    }
  }

  /**
   * @name: wwy
   * @msg: 登录校验
   * @return {*}
   */
  function handleModalLogin(emits: Emit): void {
    userFormRef.value?.validate(async (success: Array<Object> | undefined) => {
      if (!success) {
        const res = await userLoginRequest(
          userForm.value.userName,
          userForm.value.password
        )
        console.log(res)
        if (res.code === 0) {
          // TODO 测试待删除
          res.token = true
          localStorageUtil.setItem("auth", res.token)
          store.commit("SET_AUTH_IS_AUTH", true)
          message.success("登录成功", { duration: 5000 })
          emits("closeModal", false)
        } else {
          message.error("登录失败", { duration: 5000 })
        }
      }
    })
  }

  return {
    userFormRef,
    userForm,
    userFormRules,
    handleModalLogin
  }
}
