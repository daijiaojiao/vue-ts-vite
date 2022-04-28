# 使用 vite 指定模板下载

```
pnpm create vite my-vue-app -- -- template vue-ts
```

# 按需引入组件

```
pnpm i unplugin-vue-components -D
```

# 安装 ant-design-vue

```
pnpm install ant-design-vue --save
```

```
// vite.config.js
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    /* ... */
    Components({
      resolvers: [AntDesignVueResolver()],
      // 使用ts建议设置为src/auto-import.d.ts
      dts: "src/auto-imports.d.ts",
    }),
  ],
};

// main.ts
import "ant-design-vue/dist/antd.css";
```

# 自动导入 vue3 的 hooks，借助 unplugin-auto-import/vite 插件

## 支持 vue, vue-router, vue-i18n, @vueuse/head, @vueuse/core 等自动引入

安装插件

```
pnpm i -D unplugin-auto-import
```
# 配置eslint pretter
```
pnpm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```
eslint: ESLint 的核心代码

prettier：prettier 插件的核心代码

eslint-config-prettier：解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效

eslint-plugin-prettier：将 prettier 作为 ESLint 规范来使用

eslint-plugin-vue：包含常用的 vue 规范

@typescript-eslint/parser：ESLint 的解析器，用于解析 typescript，从而检查和规范 Typescript 代码

@typescript-eslint/eslint-plugin：包含了各类定义好的检测 Typescript 代码的规范
————————————————
版权声明：本文为CSDN博主「huoyou123」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_43404937/article/details/122589337