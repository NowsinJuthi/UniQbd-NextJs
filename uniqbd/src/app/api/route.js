import { NextResponse } from "next/server";
import { ConnectDB } from "../../../server/config/db";
import userModel from "../../../server/models/Users";

const LoadDB = async ()=>{
    await ConnectDB();
}

LoadDB();

export async function GET(request){
    return NextResponse.json({msg:"Get method hit"})
}

export async function POST(request){
    const {name,email,password} = await request.json();
    await userModel.create({
        name,
        email, 
        password
    })
    return NextResponse.json({msg:"User created"})
}