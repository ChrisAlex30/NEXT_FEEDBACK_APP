import { NextResponse } from "next/server"
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