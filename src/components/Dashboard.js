import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
  ];

  const handleCardClick = (id) => {
    navigate(`/map/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dashboard</h1>
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm cursor-pointer"
              onClick={() => handleCardClick(card.id)}
            >
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
