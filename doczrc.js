import { css } from 'docz-plugin-css'

export default {
  dest: 'iparking', // 打包出来的文件目录名
  title: 'react-ui', // 站点标题
  typescript: true, // 组件源文件是通过typescript开发，需要打开此选项
  plugins: [
    css({
      preprocessor: 'less',
    }),
  ],
  files: 'src/components/**/*.{markdown,mdx}',
};