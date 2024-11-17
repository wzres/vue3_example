import request from '@/utils/request'

const commonApi = 'fruits'

export const listApi = (param) => request.get(`${commonApi}/list`,{params:param})

export const addApi = (param) => request.post(`${commonApi}/add`,param)

export const modifyApi = (param) => request.put(`${commonApi}/update`,param)

export const removeAPi = (id) => request.delete(`${commonApi}/remove`,{params:{id}})