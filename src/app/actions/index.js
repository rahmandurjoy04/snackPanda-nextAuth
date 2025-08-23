'use server'
import signIn from "@/authin";
import { redirect } from "next/dist/server/api-utils";
export async function doSocialLogin(formData){
    const action = formData.get('action');
await signIn(action)
    
}
export async function doLogout(){


}