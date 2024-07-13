<template>
    <div class="common-layout">
      <el-container class="w">
        <el-header class="top">
            <Nav></Nav>
        </el-header>
        <el-container>
          <el-main><router-view></router-view></el-main>
          <el-aside class="sidebar">
            <Bar></Bar>
          </el-aside>
        </el-container>
        <el-footer><Footer/></el-footer>
      </el-container>
    </div>
</template>

<script setup>
import Bar from '@/components/Bar.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped lang="scss">
:deep(){
  // 顶部
.top {
  display: flex;
  align-items: center;
  .logo {
    width: 100px;
    color:teal;
    font-size: 20px;
    font-weight: 650;
    margin-right: 30px;
  }
  .el-menu {
    flex-grow: 1;
  }
}

.el-main {
  width: 500px;
}

// 右侧边栏
.sidebar {
  padding: 20px;
}
}
</style>