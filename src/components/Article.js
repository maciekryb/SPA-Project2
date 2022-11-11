import React from 'react';

const Article = ({ title, author, text }) => {
  const styles = {
    marginTop: 40,
  };

  return (
    <>
      <article style={styles}>
        <h4 style={{ marginBottom: 3, textTransform: 'uppercase' }}>{title}</h4>
        <span style={{ display: 'block', marginBottom: 10, fontSize: 14 }}>{author}</span>
        <p style={{ fontSize: 14 }}>{text}</p>
      </article>
    </>
  );
};

export default Article;
