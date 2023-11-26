'use client'
import { RenderUsers } from '@/shared/components/user'
import { useStore } from '@/store/root.store'
import { observer } from 'mobx-react-lite'
import { IUsersSnapshotIn } from '@/store/users.store'

export const HomePage = observer(({ snapshot }: { snapshot: IUsersSnapshotIn }) => {
	const store = useStore(snapshot)
	const { usersStore } = store
	return <RenderUsers users={usersStore.users} />
})
