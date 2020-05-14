import React from 'react';
import { Link } from 'react-router-dom';
import TagList from './TagList';

const Feed = ({ articles }) => (
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
                    <TagList tags={article.tagList} />
                </Link>
            </div>
        ))}
    </div>
);

export default Feed;