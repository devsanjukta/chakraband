document.addEventListener('DOMContentLoaded', () => {
  const feed = document.getElementById('insta-feed');
  
  // Demo JSON endpoint—swap in your actual Instagram feed API
  fetch('https://api.example.com/chakra/insta-feed')
    .then(res => res.json())
    .then(posts => {
      posts.slice(0,6).forEach(p => {
        const img = document.createElement('img');
        img.src = p.media_url;
        img.alt = p.caption || 'Chakra Instagram post';
        feed.appendChild(img);
      });
    })
    .catch(err => {
      feed.innerHTML = '<p>Unable to load feed</p>';
      console.error(err);
    });
});
