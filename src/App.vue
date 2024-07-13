<script setup>
import { useUserStore } from '@/stores'
import zh from 'element-plus/es/locale/lang/zh-cn.mjs'

const userStore = useUserStore()
</script>

<template>
  <!-- 国际化处理 -->
  <el-config-provider :locale="zh">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
