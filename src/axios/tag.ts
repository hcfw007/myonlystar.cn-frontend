import { getRequestFactory, postRequestFactory } from './base'

export const tagAjax = {
  getTagList: getRequestFactory('tag/list'),
  postTag: postRequestFactory('tag/create'),
}