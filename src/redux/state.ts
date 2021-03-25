import {v1} from 'uuid';
import img from '../components/Images/illuminate_skeleton.jpg'

export type StyleMyImageType = {
    width: string
    height: string
    border: string
    borderRadius: string
    backgroundPosition: string
    backgroundImage: string
    transition: string
    overflow: string
}
export type StyleImageType = {
    width: string
    height: string
    border: string
    borderRadius: string
    backgroundPosition: string
    backgroundImage: string
    transition: string
    overflow: string
}
export type PostsType = {
    id: string
    post: string
    likesCount: number
}
export type ProfilePageType = {
    header: string[]
    posts: PostsType[]
    aboutMe: string[]
    myPhoto: string
    photoPost: string
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type NewsType = {
    news: string[]
}
export type MusicType = {
    music: string[]
}
export type SettingsType = {
    settings: string[]
}
export type FriendsType = {
    id: string
    name: string
    photo: string
}
export type SideBarType = {
    friends: FriendsType[]
}
export type RootStateTypes = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    newsPage: NewsType
    musicPage: MusicType
    settingsPage: SettingsType
    sideBar: SideBarType
}

export let state: RootStateTypes = {
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
        header: [
            'https://seeklogo.com/images/M/MASON-logo-6EC4494474-seeklogo.com.png',
            'https://github.com/andorey/social_net/blob/master/public/img/ill.png?raw=true'
        ],
        myPhoto: 'https://clutch.ua/crops/ba1ddb/360x0/1/0/2019/05/17/Ns355MiU9gTtcUX1sI0h2JsX8rDxjwTv.jpeg',
        photoPost: img,
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Elon Musk'},
            {id: v1(), name: 'Steve Wozniak'},
            {id: v1(), name: 'Steve Jobs'},
            {id: v1(), name: 'Bill Gates'},
            {id: v1(), name: 'Paul Allen'},
        ],

        messages: [
            {id: v1(), message: 'what you want?'},
            {id: v1(), message: 'Give me you phone!'},
            {id: v1(), message: 'Remember about death'},
            {id: v1(), message: 'Hey, close the window'},
            {id: v1(), message: 'What could I do?'},
        ],
    },
    newsPage: {
        news: [
            'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29109486.jpg',
        ],
    },
    musicPage: {
        music: [
            'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/e9/65/2b/e9652b87-a82b-04f9-661c-0c779c46abe5/source/500x500bb.jpg',
        ]
    },
    settingsPage: {
        settings: [
            img,
        ]
    },
    sideBar: {
        friends: [
            {id: v1(), name: 'Elon Musk', photo: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/66CC/production/_116361362_tes1.png'},
            {id: v1(), name: 'Steve Wozniak', photo: 'https://www.biography.com/.image/t_share/MTE1ODA0OTcxODMwMDUyMzY1/stephen-wozniak-9537334-1-402.jpg'},
            {id: v1(), name: 'Steve Jobs', photo: 'https://image.jimcdn.com/app/cms/image/transf/none/path/s56084e56f6a9d76b/image/id130b469a9f680f5/version/1537164512/image.jpg'},
            {id: v1(), name: 'Bill Gates', photo: 'https://images.pb.pl/filtered/2ea6ee4c-f730-4373-80e9-418d396be87c/d9afcaf1-89c2-5f2a-a915-4463436d050a_w_830.jpg'},
            {id: v1(), name: 'Paul Allen', photo: 'https://photos.geni.com/p13/5f/cc/8c/ef/5344483f7ccd950d/paul-allen_medium.jpg'},
        ]
    }
}


export const styleMyImage = () => ({
    width: '100px',
    height: '100px',
    border: '3px solid silver',
    borderRadius: '50%',
    backgroundPosition: '-17px -15px',
    backgroundSize: '140%',
    backgroundImage: `url(${state.profilePage.myPhoto})`,
    transition: 'all 0.7s',
    overflow: 'hidden'
})

export const styleImage = () => ({
    width: '100px',
    height: '100px',
    border: '3px solid steelblue',
    borderRadius: '90px 90px 10px 10px',
    backgroundPosition: '20px 20px',
    backgroundImage: '',
    transition: 'all 0.7s',
    overflow: 'hidden'
})