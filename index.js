import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://seusite.com/wp-json/wp/v2/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData( ); 
  }, []);

  if (loading) return <div>Carregando dados...</div>;
  if (error) return <div>Erro: {error}</div>;

  const postDates = posts.map((post) => new Date(post.date).toLocaleDateString());
  const postCountByDate = postDates.reduce((acc, date) => {
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(postCountByDate),
    datasets: [
      {
        label: 'Número de Posts',
        data: Object.values(postCountByDate),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        
      },
    ],
  };

  // *
  return (
    <div className="container">
      <h1 className="mt-5">Dashboard do WordPress</h1>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Posts por data</h5>
              <Bar data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;