import { NextRequest, NextResponse } from "next/server"
import {prisma} from "@/utils/db"


export const GET=async()=>{
    try{

        const feedBack=await prisma.feedBack.findMany()
        
        return NextResponse.json(feedBack)
    }
    catch(err){
        console.log(err);
        return NextResponse.json({msg:"Server Error"})
    }

}

export const POST=async(req: NextRequest)=>{
    try{
        const body=await req.json()    
        const feedBack=await prisma.feedBack.create({
            data:body
        })
        return NextResponse.json(feedBack)
    }
    catch(err){
        console.log(err);
        return NextResponse.json({msg:"Server Error"})
    }

}