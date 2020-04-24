import { getPosts, getAuthors } from './api';

it('should load posts data', async () => {
  let posts = await getPosts();

  posts = posts.data;

  expect(posts).toBeDefined()
  expect(posts[0].title).toEqual('AssCo has revamped the theory of versioning')
})

it('should load authors data', async () => {
  let authors = await getAuthors();

  authors = authors.data;

  expect(authors).toBeDefined()
  expect(authors[0].name).toEqual('Jemma Chadwick')
})
