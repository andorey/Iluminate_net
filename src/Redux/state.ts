import {v1} from "uuid";

type PostsType = {
    id: string
    post: string
    likesCount: number
}
type ProfilePageType = {
    posts: PostsType[]
    aboutMe: string[]
    myPhoto: string
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
            {id: v1(), post: 'How about you?', likesCount: 5},
            {id: v1(), post: 'I go to bed, what go you think?', likesCount: 10},
            {id: v1(), post: 'I like React and you?', likesCount: 7},
            {id: v1(), post: 'I try change location data props', likesCount: 18},
            {id: v1(), post: 'Do you want how old are you?', likesCount: 4},
        ],
        aboutMe: [
            'I am JS & TS Developer.',
            'And I think that React is very cool framework!',
            'If you don\'t believe me... You\'re right too'
        ],
        myPhoto: "https://clutch.ua/crops/ba1ddb/360x0/1/0/2019/05/17/Ns355MiU9gTtcUX1sI0h2JsX8rDxjwTv.jpeg"
    },
    dialogsPage: {
        dialogs: [
            {id: 0, name: 'Mask'},
            {id: 1, name: 'Wozniak'},
            {id: 2, name: 'Jobs'},
            {id: 3, name: 'Gates'},
            {id: 4, name: 'Allen'},
        ],

        messages: [
            {id: 0, message: 'what you want?'},
            {id: 1, message: 'Give me you phone!'},
            {id: 2, message: 'Remember about death'},
            {id: 3, message: 'Hey, close the window'},
            {id: 4, message: 'What could I do?'},
        ],
    },
    sidebar: {}
}

export default state;