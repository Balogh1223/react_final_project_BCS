import { useParams, useNavigate } from "react-router-dom";

function Details({ trees }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const tree = trees.find(
    (item) => item.id === Number(id)
  );

  if (!tree) {
    return <h1>Nincs ilyen utazás</h1>;
  }

  return (
    <div>
      <h1>{tree.destination}</h1>

      <img
        src={tree.img_url}
        alt={tree.name}
        width="500"
      />

      <p><strong>Ár:</strong>{tree.price}</p>
      <p><strong>Darab:</strong>{tree.stock}</p>
      <p><strong>Leírás:</strong>{tree.describtion}</p>

      <button onClick={() => navigate(-1)}>
        Vissza
      </button>
    </div>
  );
}

export default Details;