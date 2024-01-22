<script setup>
import PageContainer from '@/components/PageContainer.vue';
import { ref } from 'vue';
import { Edit, Delete } from '@element-plus/icons-vue'
import {articleCategoryListService,addArticleCategoryService,updateArticleCategoryService,removeArticleCategoryService} from '@/api/article'
import { ElMessage,ElMessageBox } from 'element-plus'

const form = ref(null)

// 表格数据
const tableData = ref([
    {
        "id": 3,
        "categoryName": "美食",
        "categoryAlias": "my",
        "createTime": "2023-09-02 12:06:59",
        "updateTime": "2023-09-02 12:06:59"
    },
    {
        "id": 4,
        "categoryName": "娱乐",
        "categoryAlias": "yl",
        "createTime": "2023-09-02 12:08:16",
        "updateTime": "2023-09-02 12:08:16"
    },
    {
        "id": 5,
        "categoryName": "军事",
        "categoryAlias": "js",
        "createTime": "2023-09-02 12:08:33",
        "updateTime": "2023-09-02 12:08:33"
    }
])
// 弹层开关
const dialogVisible = ref(false)


const title = ref('')

// 表单数据
const formData = ref({
    categoryName: '',
    categoryAlias: ''

})



//t_article_request：获取分类列表请求
const  getCateGoryList = async() =>{
    const res = await articleCategoryListService()
    tableData.value = res.data
}
getCateGoryList()

// 绑定表单校验规则
const rules = {
    categoryName: [
        { required: true, message: '请输入分类名称', trigger: 'blur' },
        { pattern: /^\S{1,10}$/, message: '分类名必须是1-10位的非空字符', trigger: 'blur' },
    ],
    categoryAlias: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9]{1,15}$/, message: '分类别名必须是1-15位的字母数字', trigger: 'blur' }
    ],
}

//t_article_request：添加分类请求
const addCategory = async() =>{
    await form.value.validate() //预校验
    await addArticleCategoryService(formData.value)
    getCateGoryList()
    dialogVisible.value = false
    ElMessage.success('修改成功')
}

//t_article_request：更新分类请求
const updateCategory = async() =>{
    await form.value.validate() //预校验
    await updateArticleCategoryService(formData.value)
    getCateGoryList()
    dialogVisible.value = false
    ElMessage.success('更新成功')
}

// t_article_request：分类删除请求
const delArticleCategory = async(row) =>{
    await ElMessageBox.confirm('你确认要进行删除么','温馨提示', {
      type: 'warning',
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    })
    await removeArticleCategoryService(row.id)
    getCateGoryList()
    ElMessage.success('删除成功')
}

// 展示编辑弹窗
const showEditDialog = (row) => {
    dialogVisible.value = true
    title.value = '编辑分类'
    formData.value.categoryName = row.categoryName
    formData.value.categoryAlias = row.categoryAlias
    // 扩展id属性
    formData.value.id = row.id
}

// 展示添加弹窗
const showAddDialog = () => {
    dialogVisible.value = true
    title.value = '添加分类'
    formData.value.categoryName = ''
    formData.value.categoryAlias = ''
}

</script>

<template>
    <PageContainer title="文章分类">
        <template #right>
            <el-button type="primary" class="button" @click="showAddDialog">添加分类</el-button>
        </template>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column prop="categoryName" label="分类名称" />
            <el-table-column prop="categoryAlias" label="分类别名" />
            <el-table-column label="操作" width="100">
                <template #default="{row}">
                    <el-button type="primary" :icon="Edit" circle plain @click="showEditDialog(row)" />
                    <el-button type="danger" :icon="Delete" circle plain @click="delArticleCategory(row)"/>
                </template>
            </el-table-column>
        </el-table>
        <!-- 弹层 -->
        <el-dialog v-model="dialogVisible" :title="title" width="30%">
            <el-form :model="formData" ref="form" :rules="rules" label-width="100px" style="padding-right: 30px">
                <el-form-item label="分类名称" prop="categoryName">
                    <el-input v-model="formData.categoryName" minlength="1" maxlength="10"></el-input>
                </el-form-item>
                <el-form-item label="分类别名" prop="categoryAlias">
                    <el-input v-model="formData.categoryAlias" minlength="1" maxlength="15"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="title==='添加分类'?addCategory():updateCategory()">确认</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        取消
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </PageContainer>
</template>



<style lang="scss" scoped></style>