import React from "react";
import css from './News.module.css';

type NewsType = {
    news: string[]
}

type NewsPageType = {
    newsData: NewsType
}

export function News(props: NewsPageType) {
    const myNews = props.newsData.news.map(el => <img src={el} alt=""/> )

    return (
        <div>{myNews}</div>
    )
}