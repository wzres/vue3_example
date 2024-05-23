<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu router
		    active-text-color="#ffd04b" 
            background-color="teal" 
            :default-active="$route.path"
            text-color="#fff"
          >
			
			<!--与多级菜单同级的菜单项-->
            <el-menu-item index="/article/category">
                <el-icon><Aim /></el-icon> <span>分类管理</span>
            </el-menu-item>
			<!--与多级菜单同级的菜单项-->
            <el-menu-item index="/article/manage">
                <el-icon><Aim /></el-icon> <span>文章管理</span>
            </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header><h4>测试管理系统</h4></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-container {
    height: 100vh;
}
.el-aside {
    background-color: teal;
}
.el-menu {
  border-right:none
}
</style>