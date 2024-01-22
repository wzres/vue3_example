import request from '@/utils/request'

export const articleCategoryListService = () =>{
    return request.get('/category')
}

export const addArticleCategoryService = (formData) =>{
    return request.post('/category',formData)
}

export const updateArticleCategoryService = (formData) =>{
    return request.put('/category',formData)
}

export const removeArticleCategoryService = (id) => {
    return request.delete('/category',{params:{id}})
}