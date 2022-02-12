export interface PostDB {
  createdDate: string
  modifiedDate: string
  id: number
  authorId: number
  title: string
  content: string
  commentCnt: number
  viewCnt: number
  likeCnt: number
  isNotice: boolean
  blameCnt: number
}
