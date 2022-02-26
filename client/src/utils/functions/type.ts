
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
	isLiked: boolean
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
  recomments: RecommentData[]
}

export interface RecommentData {
  rootCommentId: number
	targetAuthorId: number
}

export interface CommentPreData {
  id: number
  boardId: number
  postId: number
  authorId: number
  content: string
	commentCnt: number
  likeCnt: number
  blameCnt: number
  isAuthor: boolean
  isDel: boolean
	title: string
  createdDate: string
  modifiedDate: string
}