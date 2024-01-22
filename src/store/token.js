import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
import {userGetInfoService} from '@/api/user'

// 定义store
// defineStore('仓库的唯一标识',()=>{...})

export const useTokenStore = defineStore('token',()=>{
    // token相关
    // 声明数据 state ref()
    const token = ref('')
  

    // 声明操作数据的方法 actions (函数)
    const setToken = (newToken) =>{
        token.value = newToken
    }

    const removeToken = () =>{
        token.value = ''
    }


    // 用户相关
    const user = ref({})

    const getUser = async() =>{
        const res =  await userGetInfoService()
        user.value = res.data
    }



   
    return {
        token,setToken,removeToken,user,getUser
    }
},{
	persist: true,  // 开启当前仓库的持久化
	/* persist: {
		key: 'wzCount', //修改localStorage的key，默认用仓库唯一标识做为key
		paths:['count'] //存储的是哪些数据，默认存储整个state数据
	} */
})