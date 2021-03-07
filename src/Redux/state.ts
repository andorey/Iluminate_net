type PostsType = {
    id: number
    post: string
    likesCount: number
}
type ProfilePageType = {
    posts: PostsType[]
}
type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
type SidebarType = {}

type RootStateTypes = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateTypes = {
    profilePage: {
        posts: [
            {id: 1, post: 'How about you?', likesCount: 5},
            {id: 2, post: 'I go to bed, what go you think?', likesCount: 10},
            {id: 3, post: 'I like React and you?', likesCount: 7},
            {id: 4, post: 'I try change location data props', likesCount: 18},
            {id: 5, post: 'Do you want how old are you?', likesCount: 4},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Dimych'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Colin'},
            {id: 5, name: 'Agnieszka'},
        ],

        messages: [
            {id: 1, message: 'Hi, how are you?'},
            {id: 2, message: "Are you O'k?"},
            {id: 3, message: 'Good night my friends. I go to bed'},
            {id: 4, message: 'To go shopping during day'},
            {id: 5, message: 'She is do not know where I live'},
        ],
    },
    sidebar: {}
}

export default state;