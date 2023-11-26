import { Instance, SnapshotIn, SnapshotOut, flow, types } from 'mobx-state-tree'

const Company = types.model({
	name: types.string,
	catchPhrase: types.string,
	bs: types.string,
})
const Geo = types.model({
	lat: types.string,
	lng: types.string,
})

const Address = types.model({
	street: types.string,
	suite: types.string,
	city: types.string,
	zipcode: types.string,
	geo: Geo,
})

const User = types.model({
	id: types.identifierNumber,
	name: types.string,
	username: types.string,
	email: types.string,
	address: Address,
	phone: types.string,
	website: types.string,
	company: Company,
})
export type IUser = Instance<typeof User>

export const UsersStore = types
	.model({
		users: types.array(User),
	})
	.actions((self) => {
		const fetchUsersAll = flow(function* () {
			const response = yield fetch(`https://jsonplaceholder.typicode.com/users`)
			const users = yield response.json()
			self.users = users
		})

		return { fetchUsersAll }
	})

export type IUsers = Instance<typeof UsersStore>
export type IUsersSnapshotIn = SnapshotIn<typeof UsersStore>
export type IUsersSnapshotOut = SnapshotOut<typeof UsersStore>
