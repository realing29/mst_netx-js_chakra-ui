import { IPost } from '@/store/userPosts.store'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

export const PostCard = observer(({ post }: { post: IPost }) => {
	return (
		<Card>
			<CardHeader>
				<Heading size="md"> {post.title}</Heading>
			</CardHeader>
			<CardBody>
				<Text>{post.body}</Text>
			</CardBody>
			<CardFooter>
				<Button>View here</Button>
			</CardFooter>
		</Card>
	)
})
