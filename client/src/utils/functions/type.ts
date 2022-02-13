
export interface BoardData {
  contents: ContentData[]
  page: number
  pages: number
}

export interface ContentData {
  id: number
  authorId: number
  title: string
  commentCnt: number
  viewCnt: number
  likeCnt: number
  isNotice: boolean
  blameCnt: number
  createdDate: string
  modifiedDate: string
}