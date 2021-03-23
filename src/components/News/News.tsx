import React from "react";
import css from './News.module.css';
import {NewsType} from "../../redux/state";

type NewsPageType = {
    newsData: NewsType
}

export function News(props: NewsPageType) {
    const myNews = props.newsData.news.map(el => <img src={el} alt=""/> )

    return (
        <div>{myNews}</div>
    )
}