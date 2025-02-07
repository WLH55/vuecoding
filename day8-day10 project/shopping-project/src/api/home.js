import wlhrequest from "@/utils/request";

// 获取首页数据
export const getHomeData = () => {
  return wlhrequest.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
