import { PostCommentAction } from './PostCommentAction';
import { PostCardContent } from './PostCardContent';
import { PostSubmit } from './PostSubmit';
import { PostTitle } from './PostTitle';
import { PostContentActions } from './PostContentActions';

export const Post = {
  Title: PostTitle,
  Submit: PostSubmit,
  CardContent: PostCardContent,
  CommentAction: PostCommentAction,
  ContentActions: PostContentActions,
};
