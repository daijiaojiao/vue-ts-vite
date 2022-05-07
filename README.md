# 这是一个 vue3+vite+ts 的项目模板

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

# 安装 vueuse

```
pnpm i @vueuse/core
```

# 配置 eslint pretter

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

# husky 和 lint-staged 构建代码工作流

```
pnpm i husky lint-staged @commitlint/cli @commitlint/config-conventional -D

pnpx huskyinit

<!-- 修改 ./husky/pre-commit 钩子 -->
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint-staged

<!-- 修改 ./husky/commit-msg -->
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpx --no-install commitlint --config .commitlintrc.js --edit $1

<!-- package.json 配置： -->
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,vue,md}": "eslint --config .eslintrc.js",
  "*.{ts,tsx,js,json,html,yml,css,less,md}": "prettier --write"
},
```

## 根目录创建** .commitlintrc.js**

```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
}
```

# 配置 sass

```
pnpm install sass
```

# 设置特定的包管理器

```
<!-- 在package.json文件中添加packageManager -->
```

# 指定 node 版本号

```
<!-- 在项目根目录添加.nvmrc文件，并指定node版本 -->
```
