import { UserCard } from '@/shared/components/user'
import { IUser } from '@/store/users.store'
import { SimpleGrid } from '@chakra-ui/react'
export const RenderUsers = ({ users }: { users: IUser[] }) => {
	return (
		<SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))" p={4}>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</SimpleGrid>
	)
}
