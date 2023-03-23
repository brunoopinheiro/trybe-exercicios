import PostService from "./PostService";

const postService = new PostService();

console.log('1: storage', postService.getPosts());

postService.createPost('new post');
postService.createPost('another post');

console.log('2: storage', postService.getPosts());
