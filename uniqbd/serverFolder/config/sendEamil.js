import { sendEmail } from "./emailService.js"

const sendEmailFun = async ({sendTo, subject, text,html})=>{
    console.log(sendTo)
    const result = await sendEmail(sendTo, subject, text, html);
    if(result.success){
        return true;
    }else{
        return false
    }
}

export default sendEmailFun;