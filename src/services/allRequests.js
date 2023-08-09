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
    return await commonRequest(`${base_URL}/cateogries`,"POST",body)
}

