import React from 'react';

export const CommentsAndOtherWork = () => {
  const [commentsAndOtherWork, setCommentsAndOtherWorks] =
    React.useState('');
  return (
    <label htmlFor="commentsAndOtherWork">
      Comments and other work requested:
      <textarea
        name="commentsAndOtherWork"
        id="commentsAndOtherWork"
        value={commentsAndOtherWork}
        onChange={(e) => setCommentsAndOtherWorks(e.target.value)}
      ></textarea>
    </label>
  );
};
