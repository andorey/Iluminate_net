import React from "react";
import css from './Friends.module.css';

type FriendsType = {
    id: string
    name: string
    photo: string
}
type SideBarType = {
    friends: FriendsType[]
}
type DataFriendsType = {
    dataFriends: SideBarType
}

export function Friends(props: DataFriendsType) {

    const friends = props.dataFriends.friends.map(el => {
        const elName = el.name.split(/\s/g)

        return (
            <div className={css.friend} key={el.id}>
                <div className={css.avatar}><img src={el.photo} alt=""/></div>
                <span>{elName[0]}<br/>{elName[1]}</span>
            </div> )
    })

    return (
        <div className={css.title}>
            {'Friend List:'}
            <div className={css.bar}>
                {friends}
            </div>
        </div>
    )
}
