import { useMemo } from 'react'
import {
	applySnapshot,
	flow,
	Instance,
	SnapshotIn,
	SnapshotOut,
	types,
} from 'mobx-state-tree'
import { UsersPostsStore } from '@/store/userPosts.store'
import { UsersStore } from '@/store/users.store'
let store: IStore | undefined

const Store = types.model({
	usersPostsStore: UsersPostsStore,
	usersStore: UsersStore,
})

export type IStore = Instance<typeof Store>
export type IStoreSnapshotIn = SnapshotIn<typeof Store>
export type IStoreSnapshotOut = SnapshotOut<typeof Store>

export function initializeStore(snapshot = null) {
	const _store =
		store ??
		Store.create({
			usersPostsStore: UsersPostsStore.create(),
			usersStore: UsersStore.create(),
		})

	// If your page has Next.js data fetching methods that use a Mobx store, it will
	// get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
	if (snapshot) {
		applySnapshot(_store, snapshot)
	}
	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!store) store = _store

	return store
}

export function useStore(initialState: any) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}
