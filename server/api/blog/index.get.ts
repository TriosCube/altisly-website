import { getPublishedPosts } from '~/server/utils/postsDb'

export default defineEventHandler(() => getPublishedPosts())
