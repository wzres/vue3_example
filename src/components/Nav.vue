<template>
    <div class="logo">威仔资源网</div>
    <el-menu
            mode="horizontal"
		    active-text-color="teal" 
            background-color="white" 
            text-color="gary"
          >
			<!--多级菜单-->
            <el-sub-menu index="1" unique-opened>
                <template #title>
                    <el-icon><Aim /></el-icon> <span>xx管理</span>
                </template>
                <!--展开的每一个菜单项-->
				<el-menu-item index="1-1">
                    <el-icon><Aim /></el-icon> <span>xx列表1</span>
                </el-menu-item>
                
				<el-menu-item index="1-2">
					<el-icon><Aim /></el-icon> <span>xx列表2</span>
                </el-menu-item>
                
				<el-menu-item index="1-3">
                    <el-icon><Aim /></el-icon> <span>xx列表3</span>
                </el-menu-item>
			</el-sub-menu>
			
			<!--与多级菜单同级的菜单项-->
            <el-menu-item index="2">
                <el-icon><Aim /></el-icon> <span>xx管理</span>
            </el-menu-item>
			<!--与多级菜单同级的菜单项-->
            <el-menu-item index="3">
                <el-icon><Aim /></el-icon> <span>xx管理</span>
            </el-menu-item>

			<!--多级菜单-->
            <el-sub-menu index="4">
                <template #title>
                    <el-icon><Aim /></el-icon> <span>xx管理</span>
                </template>
			   <!--展开的每一个菜单项-->
                <el-menu-item index="4-1">
                    <el-icon><Aim /></el-icon> <span>xx列表1</span>
                </el-menu-item>
                <el-menu-item index="4-2">
					<el-icon><Aim /></el-icon> <span>xx列表2</span>
                </el-menu-item>
            </el-sub-menu>
    </el-menu>
</template>

<script setup>

</script>

<style scoped lang="scss">
</style>