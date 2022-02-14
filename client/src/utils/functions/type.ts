
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

export interface DetailData {
  post: PostData
  comment: CommentData[]
}

export interface PostData {
  createdDate?: string
  modifiedDate?: string
  id?: number
  authorId?: number
  title?: string
  content?: string
  commentCnt?: number
  viewCnt?: number
  likeCnt?: number
  isNotice?: boolean
  blameCnt?: number
}

export interface CommentData {
  createdDate?: string
  modifiedDate?: string
  id?: number
  authorId?: number
  content?: string
  likeCnt?: number
  blameCnt?: number
  isAuthor?: boolean
  isDel?: boolean
}
