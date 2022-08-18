/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-18 15:07:34
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 17:23:22
 */
import { userLoginRequest } from "/src/api/Login"

export interface FormUser {
  userName: string
  password: string
}

export interface FormUserRules {
  userName: Object
  password: Object
}

export function useLoginService() {
  const message = useMessage()
  const userFormRef = ref<FormInst | null>(null)
  const userForm = ref<FormUser>({
    userName: "",
    password: ""
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
  function handleModalLogin(emits: defineEmits): void {
    userFormRef.value?.validate(async (success: Array<Object> | undefined) => {
      if (!success) {
        const res = await userLoginRequest(
          userForm.value.userName,
          userForm.value.password
        )
        console.log(res)
        if (res.code === 0) {
          emits("closeModal", false)
          message.success("登录成功", { duration: 5000 })
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
