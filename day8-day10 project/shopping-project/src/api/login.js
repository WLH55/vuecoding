import wlhrequest from "@/utils/request";

//获取图形验证码
export const getPicCode = () =>{
  return wlhrequest.get('/captcha/image');
}
