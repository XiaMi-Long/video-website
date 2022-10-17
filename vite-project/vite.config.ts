/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-08-16 21:29:20
 * @LastEditors: wwy
 * @LastEditTime: 2022-10-16 20:55:55
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// import.meta.url 返回模块的绝对的 `file:` URL。
// url模块中fileURLToPath()函数，返回完全解析的特定于平台的 Node.js 文件路径
// path模块中dirname()函数，返回路径的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 配置别名
    },
  },

  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
      dts: './auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: true,
    }),
  ],
})
