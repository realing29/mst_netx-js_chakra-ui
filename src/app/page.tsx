import { HomePage } from '@/app/components/HomePage'
import { initializeStore } from '@/store/root.store'
import { getSnapshot } from 'mobx-state-tree'

export default async function Home() {
	const store = initializeStore()
	await store.usersStore.fetchUsersAll()
	const snapshot = getSnapshot(store)
	return <HomePage snapshot={snapshot} />
}
