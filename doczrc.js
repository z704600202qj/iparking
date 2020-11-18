import * as path from 'path'
const SRC = path.resolve(__dirname, 'src')
export default {
  base: '/base-path/',
    menu: ['Started', 'Components'],
    files: './scr/components/**/*.{md,markdown,mdx}', // 识别的文件后缀
    dest: 'iparking', // 打包出来的文件目录名
    title: 'react-ui', // 站点标题
    typescript: true, // 组件源文件是通过typescript开发，需要打开此选项
  };