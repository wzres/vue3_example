<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useTokenStore } from '@/store/token'
import { useRouter } from 'vue-router'; 
const router = useRouter()
const tokenStore = useTokenStore()
onMounted(() => {
    tokenStore.getUser()
})
const avatar = ref("https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png")
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (key) => {
	if(key === 'logout'){
		// 退出登录
		//在清除之前需要添加一个确认框
		// 清除pinia的本地数据(token + user信息)
		//userStore.removeToken()
		//userStore.setUser({})
		//跳转到登录页
	    router.push('/login')
	}else {
		// 跳转路由
		router.push(`/user/${key}`)
	}
}
</script>

<template>
    <el-container>
        <el-aside width="200px">
            <div class=""></div>
            <el-menu router active-text-color="#ffd04b" background-color="#232323" :default-active="$route.path"
                text-color="#fff">
                <!--与多级菜单同级的菜单项-->
                <el-menu-item index="/article/category">
                    <el-icon>
                        <Aim />
                    </el-icon> <span>分类管理</span>
                </el-menu-item>
                <!--与多级菜单同级的菜单项-->
                <el-menu-item index="/article/manage">
                    <el-icon>
                        <Aim />
                    </el-icon> <span>文章管理</span>
                </el-menu-item>

                <!--多级菜单-->
                <el-sub-menu>
                    <template #title>
                        <el-icon>
                            <Aim />
                        </el-icon> <span>用户管理</span>
                    </template>
                    <!--展开的每一个菜单项-->
                    <el-menu-item index="/user/avatar">
                        <el-icon>
                            <Aim />
                        </el-icon> <span>更换头像</span>
                    </el-menu-item>
                    <el-menu-item index="/user/info">
                        <el-icon>
                            <Aim />
                        </el-icon> <span>用户信息</span>
                    </el-menu-item>
                    <el-menu-item index="/user/resetPassword">
                        <el-icon>
                            <Aim />
                        </el-icon> <span>重置密码</span>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <div>
                    大事件：<strong>{{ tokenStore.user.nickname || tokenStore.user.username }}</strong>
                </div>
                <!-- 下拉菜单标题 -->
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown_box">
                        <el-avatar :src="avatar" />
                        <el-icon>
                            <arrow-down />
                        </el-icon>
                    </span>
                    <!-- 折叠的下拉部分 -->
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="info" :icon="User">基本资料</el-dropdown-item>
                            <el-dropdown-item command="avatar" :icon="Crop">更换头像</el-dropdown-item>
                            <el-dropdown-item command="resetPassword" :icon="EditPen">重置密码</el-dropdown-item>
                            <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>大事件 ©2023 Created by wzres</el-footer>
        </el-container>
    </el-container>
</template>



<style lang="scss" scoped>
.el-container {
    height: 100vh;
    
}

.el-aside {
    background-color: #232323;

    .el-menu {
        border-right: none;
    } 
}
.el-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: palegoldenrod;

        .el-dropdown_box {
            display: flex;
            align-items: center;
            outline: none;
            .el-avatar {
                margin-right: 10px;
            }
        }
    }

.el-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #666;
}

</style>