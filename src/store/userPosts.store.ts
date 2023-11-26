import { Instance, SnapshotIn, SnapshotOut, flow, types } from 'mobx-state-tree'

const Post = types.model({
	userId: types.number,
	id: types.identifierNumber,
	title: types.string,
	body: types.string,
})

export const UsersPostsStore = types
	.model({
		allPosts: types.array(Post),
		addViewPostsCount: 3,
		countViewPosts: 3,
	})
	.views((self) => ({
		get viewPosts() {
			return self.allPosts.slice(0, self.countViewPosts)
		},
		get isViewedAllPosts() {
			return self.allPosts.length <= self.countViewPosts
		},
	}))
	.actions((self) => {
		const fetchTodosAll = flow(function* ({ userId }) {
			const response = yield fetch(
				`https://jsonplaceholder.typicode.com/users/${userId}/posts`,
			)
			const posts = yield response.json()
			self.allPosts = posts
		})

		const moreView = () => {
			self.countViewPosts += self.addViewPostsCount
		}

		return { fetchTodosAll, moreView }
	})

export type IPost = Instance<typeof Post>
export type IPostSnapshotIn = SnapshotIn<typeof Post>
export type IPostSnapshotOut = SnapshotOut<typeof Post>
