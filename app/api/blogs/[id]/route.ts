import { addPosts, deletePost, getById, updatePost } from "@/app/lib/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:Request,res:Response)=>{
    try{
        const id=req.url.split("blogs/")[1];
        const post=getById(id);
        if(post){
            return NextResponse.json({message:"Ok",post},{status:200});
        }
        else{
            return NextResponse.json({message:"Post do not exists"},{status:404});
        }
    }
    catch(err){
        return NextResponse.json({message:"Error in dynamic get",err}.err,{status:500});
    }
};

export const PUT = async(req:Request,res:Response)=>{
    try{
        const {title,desc}=await req.json();
        const id=req.url.split("blogs/")[1];
        updatePost(id,title,desc);
        return NextResponse.json({message:"Update successful"},{status:201});
    }
    catch(err){
        return NextResponse.json({message:"Error in update",err}.err,{status:500});
    }
};

export const DELETE = async(req:Request,res:Response)=>{
    try{
        const id=req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({message:"Delete successfull"},{status:200});
    }
    catch(err){
        return NextResponse.json({message:"Error in dynamic delete",err}.err,{status:500});
    }
};