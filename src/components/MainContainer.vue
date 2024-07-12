<template>
    <el-card class="box-card">
       <template #header>
         <div class="card-header">
            <slot name="left"></slot>
            <slot name="right"></slot>
         </div>
       </template>
       <!-- 展开的内容部分 -->
      <!-- 后台管理项目中，这里通常会放表格、表单子类的数据 -->
     </el-card>
   </template>

<script setup>

</script>

<style scoped lang="scss">
.box-card {
    min-height: 100vh;
    .card-header {
        display: flex;
        justify-content: space-between;

    }
}
</style>