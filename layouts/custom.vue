<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "nuxt/app";
const router = useRouter();
const activeIndex = ref<string>("/");
const handleSelect = (key: string, keyPath: string[]) => {
  router.push(key);
};
</script>
<template>
  <div>
    <el-menu
      active-text-color="#0cc16a"
      :default-active="activeIndex"
      class="el-menu-header"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/">学习笔记</el-menu-item>
      <el-menu-item index="/utils">常用方法 </el-menu-item>
      <el-menu-item index="/mine">关于我</el-menu-item>
    </el-menu>
    <slot />
  </div>
</template>
<style lang="scss">
.el-menu-header,
.el-main-body {
  margin: 0 auto;
  width: 1200px;
}
</style>
