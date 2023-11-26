import { IUser } from '@/store/users.store'
import { Card, CardHeader, Flex, Avatar, Box, Heading, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useParams, useRouter } from 'next/navigation'

export const UserCard = observer(({ user }: { user: IUser }) => {
	const params = useParams()
	const router = useRouter()

	return (
		<Card
			maxW="md"
			bg={user.id === Number(params.userId) && '#efefef'}
			_hover={{ bg: '#efefef', cursor: 'pointer' }}
			onClick={() => router.push(`/users/${user.id}/posts`, { scroll: true })}
		>
			<CardHeader>
				<Flex>
					<Flex flexDir="column" flex="1" gap="4" flexWrap="wrap">
						<Avatar name={user.name} />

						<Box>
							<Heading size="sm">{user.username}</Heading>
							<Text>{user.name}</Text>
						</Box>
					</Flex>
				</Flex>
			</CardHeader>
		</Card>
	)
})
