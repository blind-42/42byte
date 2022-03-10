export interface BoardList {
  contents: BoardPre[]
  page: number
  pages: number
}

export interface BoardPre {
  id: number
  name: string
  isDel: number
  managerId: number
}

export interface BoardData {
	id: number
	name: string
  contents: PostPre[]
  page: number
  pages: number
}

export interface PostPre {
  id: number
  title: string
  commentCnt: number
  viewCnt: number
  likeCnt: number
  isNotice: boolean
	isDel: number
	type: string
	isImage: number
  createdDate: string
  modifiedDate: string
}

export interface PostData {
  boardId: number
  boardName: string
  commentCnt: number
  content: string
  createdDate: string
  id: number
  isLiked: boolean
  isNotice: boolean
  isUsers: boolean
  likeCnt: number
  modifiedDate: string
  title: string
  type: string
  viewCnt: number
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
  isDel: number
	createdDate: string
  modifiedDate: string
  recomments: RecommentData[]
}

export interface RecommentData {
  authorId: number
  blameCnt: number
  content: string
  createdDate: string
  id: number
  isAuthor: boolean
  isDel: number
  isLiked: boolean
  isUsers: boolean
  likeCnt: number
  modifiedDate: string
  postId: number
  targetAuthorId: number
}

export interface CommentPre {
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

export interface UserData {
  createdDate: string
  modifiedDate: string
  hashId: string
  profileImageUrl: string
  roleType: string
}