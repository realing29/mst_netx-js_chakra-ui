import { IUser } from '@/store/users.store'
import { Link } from '@chakra-ui/next-js'
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Flex,
	Avatar,
	Box,
	Heading,
	Text,
	IconButton,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

export const UserCard = observer(({ user }: { user: IUser }) => {
	return (
		<Card maxW="md">
			<CardHeader>
				<Flex>
					<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
						<Avatar name={user.name} />

						<Box>
							<Heading size="sm">{user.username}</Heading>
							<Text>{user.name}</Text>
						</Box>
					</Flex>
					<IconButton variant="ghost" colorScheme="gray" aria-label="See menu" />
				</Flex>
			</CardHeader>
			<CardBody>
				<Heading size="sm">Contacts</Heading>

				<Text>{user.website}</Text>
				<Text>{user.email}</Text>
				<Text>{user.phone}</Text>
			</CardBody>
			<CardBody>
				<Heading size="sm">Company</Heading>
				<Text>{user.company.name}</Text>
				<Text>{user.company.catchPhrase}</Text>
				<Text>{user.company.bs}</Text>
			</CardBody>

			<CardFooter
				justify="space-between"
				flexWrap="wrap"
				sx={{
					'& > button': {
						minW: '136px',
					},
				}}
			>
				<Link href={`/users/${user.id}/posts`}>Посмотреть посты</Link>
			</CardFooter>
		</Card>
	)
})
