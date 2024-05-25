<template>
 <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <slot name="right"></slot>
      </div>
    </template>
    <!-- 展开的内容部分 -->
   <!-- 后台管理项目中，这里通常会放表格、表单子类的数据 -->
   <slot></slot>
  </el-card>
</template>

<script setup>
defineProps(['title'])
</script>

<style lang="scss" scoped>
.box-card {
    // height:100vh;
    min-height: 100vh;

    .card-header {
        display: flex;
        justify-content: space-between;
    }
}
</style>