
export interface BoardData {
  contents: ContentData[]
  page: number
  pages: number
}

export interface ContentData {
  id: number
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
  id: number
  title: string
  content: string
  commentCnt: number
  viewCnt: number
  likeCnt: number
	isUsers: boolean
  isNotice: boolean
  blameCnt: number
	createdDate: string
  modifiedDate: string
}

export interface CommentData {
	boardId: number
	postId: number
  id: number
  authorId: number
  content: string
  likeCnt: number
  blameCnt: number
	isUsers: boolean
  isAuthor: boolean
	isLiked : boolean
  isDel: boolean
	createdDate: string
  modifiedDate: string
}
