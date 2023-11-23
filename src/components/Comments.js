import { useEffect } from 'react';

function Comments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'marcelolara/githubpages-comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comments');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('crossorigin', 'anonymous');

    document.getElementById('comments').appendChild(script);
  }, []);

  return (
    <section id="comments">
      <h4>
        <a href="">Comentarios</a>
      </h4>
    </section>
  );
}

export default Comments;