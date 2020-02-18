import React from 'react';
import { Link } from 'react-router-dom';

const Feed = ({ articles }) => {
    const renderTag = item => (
        <li key={item} className="tag-default tag-pill tag-outline">
            {item}
        </li>
    );

    return (
        <div>
            {articles.map((article, inx) => (
                <div key={inx} className="article-preview">
                    <div className="article-meta">
                        <Link to={`/profiles/article/${article.author.username}`}>
                            <img src={article.author.image} alt="" />
                        </Link>
                        <div className="info">
                            <Link to={`/profiles/article/${article.author.username}`} className="author">
                                {article.author.username}
                            </Link>
                            <span className="date">{article.createdAt}</span>
                        </div>
                    </div>
                    <Link to={`/articles/${article.slug}`} className="preview-link">
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <span>Read more...</span>
                        <ul className="tag-list">
                            {article.tagList.map(renderTag)}
                        </ul>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Feed;
