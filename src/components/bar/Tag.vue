<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>标签</span>
            </div>
        </template>
        <!-- 展开的内容部分 -->
        <!-- 后台管理项目中，这里通常会放表格、表单子类的数据 -->
        <div class="flex gap-2">
            <el-tag class='tag-item' v-for="tag in tags" :key="tag.name"  :type="tag.type">
                {{ tag.name }}
            </el-tag>
        </div>
    </el-card>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([
  { name: 'Tag 1', type: 'primary' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
  { name: 'Tag 5', type: 'primary' },
  { name: 'Tag 5', type: 'success' },
  { name: 'Tag 5', type: 'info' },
])
</script>

<style scoped lang="scss">
.tag-item {
    margin-right: 15px;
    margin-bottom: 10px;
}
</style>