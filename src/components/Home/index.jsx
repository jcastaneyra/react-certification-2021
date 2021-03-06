import React from 'react';
import Header from '../Header';
import Content from '../Content';
import VideoDetail from '../VideoDetail';
import youtube from '../../apis/youtube';

const Home = () => {
  const [search, setSearch] = React.useState('');
  const [items, setItems] = React.useState([]);
  const [current, setCurrent] = React.useState(null);

  React.useEffect(() => {
    const debounceHandler = setTimeout(() => {
      youtube
        .get('/search', {
          params: {
            q: search,
            maxResults: 5,
          },
        })
        .then((response) => {
          console.log(response);
          setItems(response.data.items);
        });
    }, 1000);
    // cleanUp function
    return () => {
      clearTimeout(debounceHandler);
    };
  }, [search]);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      {current === null ? (
        <Content items={items} setCurrent={setCurrent} />
      ) : (
        <VideoDetail items={items} current={current} setCurrent={setCurrent} />
      )}
    </div>
  );
};

export default Home;
