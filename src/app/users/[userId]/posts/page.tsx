import { UsersPostsPage } from './components/UsersPostsPage'
import { initializeStore } from '@/store/root.store'
import { getSnapshot } from 'mobx-state-tree'

export default async function Home({ params }) {
	const { userId } = params
	const store = initializeStore()
	await store.usersPostsStore.fetchTodosAll({ userId })
	await store.usersStore.fetchUsersAll()
	const snapshot = getSnapshot(store)
	return <UsersPostsPage snapshot={snapshot} />
}
