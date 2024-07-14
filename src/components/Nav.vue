<template>
    <div class="logo">威仔资源网</div>
    <el-menu
            active-text-color="orange" 
            :default-active="selectedIndex"
            text-color="teal"
            mode="horizontal"
            @Select="selected"
            
          >
      <el-menu-item index="3">
      <el-icon><Aim /></el-icon> <span>首页</span>
        </el-menu-item>
                <!--多级菜单-->
                <el-sub-menu  v-for="(item, index) in exampleArr" :key="item.id" unique-opened :index="item.id">
                <template #title>
                    <el-icon><Aim /></el-icon> <span>{{ item.name }}</span>
                </template>
                <!--展开的每一个菜单项-->
				<el-menu-item v-for="(subItem, index) in item.children" :key="subItem.id" :index="subItem.id">
                    <el-icon><Aim /></el-icon> <span>{{ subItem.name }}</span>
                </el-menu-item>
                
				<!-- <el-menu-item index="/xx">
					<el-icon><Aim /></el-icon> <span>xx列表2</span>
                </el-menu-item> -->
			</el-sub-menu>

            </el-menu>
</template>

<script setup>
import { ref } from 'vue';
const exampleArr = ref([
    {
        id:1,
        name:'父分类1',
        children:[
            {id:11,name:'子分类1-1'},
            {id:12,name:'子分类1-2'}
        ],
    },
    {
        id:2,
        name:'父分类2',
        children:[
            {id:21,name:'子分类2-1'},
            {id:22,name:'子分类2-2'}
        ],
    }
])
</script>

<style scoped lang="scss">
</style>