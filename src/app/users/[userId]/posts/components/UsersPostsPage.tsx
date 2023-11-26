'use client'

import { PostCard } from './PostCard'
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import { IStoreSnapshotIn, useStore } from '@/store/root.store'
import { observer } from 'mobx-react-lite'
import { UserCard } from './UserCard'

export const UsersPostsPage = observer(({ snapshot }: { snapshot: IStoreSnapshotIn }) => {
	const store = useStore(snapshot)
	const { usersPostsStore, usersStore } = store
	return (
		<Flex>
			<SimpleGrid
				w="250px"
				spacing={4}
				templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
				p={4}
			>
				{usersStore.users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</SimpleGrid>
			<Box>
				<SimpleGrid
					spacing={4}
					templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
					p={4}
				>
					{usersPostsStore.viewPosts.map((post) => (
						<PostCard key={post.id} post={post} />
					))}
				</SimpleGrid>
				<Flex justifyContent="center">
					<Button
						isDisabled={usersPostsStore.isViewedAllPosts}
						onClick={usersPostsStore.moreView}
					>
						{usersPostsStore.isViewedAllPosts ? 'Показаны все записи' : 'Показать еще'}
					</Button>
				</Flex>
			</Box>
		</Flex>
	)
})
