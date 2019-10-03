import GhostContentApi from '@tryghost/content-api'

const api = new GhostContentApi({
  url: 'https://rashmimanandhar.ghost.io',
  key: '718aee97f76c460c9cba17c2de',
  version: 'v2'
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags, authors'
    })
    .catch(err => {
      console.log(err)
    })
}
