export interface Comment {
  content: string
  post: string
}
export interface Ucomment {
  content: string
}

export interface Root {
  message: string
  total: number
  comments: Comment[]
}

export interface CommentDetials {
  _id: string
  content: string
  commentCreator: CommentCreator
  post: string
  createdAt: string
  id: string
}

export interface CommentCreator {
  _id: string
  name: string
  photo: string
}
