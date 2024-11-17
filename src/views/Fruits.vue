<template>
        <el-button @click="publish" type="primary">发布</el-button>
       <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="60"/>
            <el-table-column prop="type" label="水果类型" />
            <el-table-column prop="price" label="水果价格" />
            <el-table-column label="操作" width="100">
                <template #default="{row}">
                    <el-button @click="editFruits(row)" type="primary" :icon="Edit" circle plain/>
                    <el-button @click="removeFruits(row.id)" type="danger" :icon="Delete" circle plain/>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
		v-model:current-page="pagination.pageNum"
		v-model:page-size="pagination.pageSize"
		:page-sizes="[2,3,5,7]"
		:small="false"
		:disabled="false"
		:background="false"
		layout="jumper, total, sizes, prev, pager, next"
		:total="total"
		@size-change="onSizeChange"
		@current-change="onCurrentChange"
		/>

        <!-- 弹层 -->
        <el-dialog v-model="dialogVisible" :title="title" width="30%">
            <el-form ref="ruleFormRef" :model="formData" :rules="rules" label-width="120px" class="demo-ruleForm"
                :size="formSize" status-icon>
                <el-form-item label="水果类型" prop="type">
                    <el-input :prefix-icon="User" placeholder="请输入水果类型" v-model="formData.type" />
                </el-form-item>

                <el-form-item label="水果价格" prop="price">
                    <el-input :prefix-icon="User" placeholder="请输入水果价格" v-model="formData.price" />
                </el-form-item>

            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="updateFruits">确认</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        取消
                    </el-button>
                </span>
            </template>
        </el-dialog>

</template>

<script setup>
import {Edit,Delete} from '@element-plus/icons-vue'
import {ref} from 'vue'
import {listApi,addApi,modifyApi,removeAPi} from '@/api/fruits'
const tableData = ref([])
import { ElMessage } from 'element-plus'

const pagination = ref({
    pageNum:1,
    pageSize:3
})

const total = ref()

// 列表请求
const render = async() => {
    const res = await listApi(pagination.value)
    tableData.value = res.data.items
    total.value = res.data.total
}

render()

//点击分页事件
const onSizeChange = (size) => {
    //console.log(`onSizeChange：每页显示${size}条`)
    //每页条数发生变化时，重新从第一页渲染
    pagination.value.pageNum = 1
    //更新每页条数
    pagination.value.pageSize = size
    //重新渲染
    render()
}

const onCurrentChange = (page) => {
    //console.log(`onCurrentChange：当前第${page}页`)
    //更新当前页
    pagination.value.pageNum = page
    //重新渲染
    render()
}




// 弹层

const dialogVisible = ref(false)
const title = ref('')

const formData = ref({})


const publish = () =>{
    dialogVisible.value = true,
    title.value = '增加水果'
    formData.value = {}
}

const editFruits = (row) => {
    dialogVisible.value = true,
    title.value = '修改水果'
    formData.value = {...row}
}

// 修改或者增加
const updateFruits = () => {
    if(!formData.value.id){
        // 无id 说明是增加
        addFruits()
    }else {
        // 有id 说明是修改
        modifyFruits()
    }
}
// 增加
const addFruits = async() =>{
    await addApi(formData.value)
    ElMessage.success('增加成功')
    render()
    dialogVisible.value = false
}

// 修改
const modifyFruits = async() =>{
    await modifyApi(formData.value)
    ElMessage.success('修改成功')
    render()
    dialogVisible.value = false
}

// 删除
const removeFruits = async(id) => {
    await removeAPi(id)
    ElMessage.success('删除成功')
    render()
}

</script>

<style scoped lang="scss">

</style>