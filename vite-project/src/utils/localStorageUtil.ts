/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-18 21:25:16
 * @LastEditors: wwy
 * @LastEditTime: 2022-08-18 21:40:14
 */
export class localStorageUtil {
  /**
   * @name: wwy
   * @msg: 设置storage
   * @param {string} key
   * @param {any} value
   * @return {*}
   */
  static setItem(key: string, value: any): void {
    window.localStorage.setItem(key, value)
  }

  /**
   * @name: wwy
   * @msg: 获取storage
   * @param {string} key
   * @return {*}
   */
  static getItem(key: string): string | null {
    return window.localStorage.getItem(key)
  }

  /**
   * @name: wwy
   * @msg: 在storage里是否存在这个key
   * @param {string} key
   * @return {*}
   */
  static hasItem(key: string): boolean {
    for (const itemKey of Object.keys(window.localStorage)) {
      if (itemKey === key) {
        return true
      }
    }
    return false
  }

  /**
   * @name: wwy
   * @msg: 在storage删除这个key
   * @param {string} key
   * @return {*}
   */
  static removeItem(key: string): void {
    window.localStorage.removeItem(key)
  }
}
