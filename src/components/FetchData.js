import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                <ul className="list-group">
                    {data.map(post => (
                        <li key={post.id} className="list-group-item">
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FetchData;
