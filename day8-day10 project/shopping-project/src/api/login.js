import wlhrequest from "@/utils/request";

//获取图形验证码
export const getPicCode = () =>{
  return wlhrequest.get('/captcha/image');
}
// 获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return wlhrequest.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
// 验证码登录
export const codeLogin = (mobile, smsCode) => {
  return wlhrequest.post('/passport/login', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  })
}

