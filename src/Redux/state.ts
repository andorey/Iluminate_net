import {v1} from "uuid";
import img from '../components/Images/illuminate_skeleton.jpg'

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
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
type SidebarType = {}

type NewsType = {
    news: string[]
}
type MusicType = {
    music: string[]
}
type SettingsType = {
    settings: string[]
}
type RootStateTypes = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    newsPage: NewsType
    musicPage: MusicType
    settingsPage: SettingsType
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
            {id: v1(), name: 'Mask'},
            {id: v1(), name: 'Wozniak'},
            {id: v1(), name: 'Jobs'},
            {id: v1(), name: 'Gates'},
            {id: v1(), name: 'Allen'},
        ],

        messages: [
            {id: v1(), message: 'what you want?'},
            {id: v1(), message: 'Give me you phone!'},
            {id: v1(), message: 'Remember about death'},
            {id: v1(), message: 'Hey, close the window'},
            {id: v1(), message: 'What could I do?'},
        ],
    },
    sidebar: {},
    newsPage: {
        news: [
            "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29109486.jpg",
        ],
    },
    musicPage: {
        music: [
            "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/e9/65/2b/e9652b87-a82b-04f9-661c-0c779c46abe5/source/500x500bb.jpg",
        ]
    },
    settingsPage: {
        settings: [
            img,
        ]
    }
}

export default state;