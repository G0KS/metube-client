import { base_URL } from "./baseUrl";
import { commonRequest } from "./commonRequest";

// Add video
export const addVideo = async (body)=>{
    return await commonRequest(`${base_URL}/videos`,"POST",body)
} 

// Get all videos
export const getVideos = async ()=>{
    return await commonRequest(`${base_URL}/videos`,"GET",{})
} 

// Delete video
export const deleteVideo = async (id)=>{
    return await commonRequest(`${base_URL}/videos/${id}`,"DELETE",{})
}

// Add category 
export const addCategory = async (body)=>{
    return await commonRequest(`${base_URL}/categories`,"POST",body)
}

// Get all categories
export const getCategories = async ()=>{
    return await commonRequest(`${base_URL}/categories`,"GET",{})
} 

// Delete category
export const deleteCategory = async (id)=>{
    return await commonRequest(`${base_URL}/categories/${id}`,"DELETE",{})
}

// Add history 
export const addHistory = async (body)=>{
    return await commonRequest(`${base_URL}/watchhistory`,"POST",body)
}

// Get all histories
export const getHistories = async ()=>{
    return await commonRequest(`${base_URL}/watchhistory`,"GET",{})
} 

// Get single video
export const getAVideo = async (id)=>{
    return await commonRequest(`${base_URL}/videos/${id}`,"GET",{})
} 

// Get updated category
export const updatedCategory = async (id,body)=>{
    return await commonRequest(`${base_URL}/categories/${id}`,"PUT",body)
}