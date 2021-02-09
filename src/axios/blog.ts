import { getRequestFactory, postRequestFactory } from './base'

export const blogAjax = {
  listBlog: getRequestFactory('blog/list'),
  postBlog: postRequestFactory('blog/post'),
}