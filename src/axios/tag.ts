import { getRequestFactory, postRequestFactory } from './base'

export const tagAjax = {
  listTag: getRequestFactory('tag/list'),
  postTag: postRequestFactory('tag/post'),
}