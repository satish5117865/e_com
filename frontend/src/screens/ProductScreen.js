import react from 'react';
import { useParams } from 'react-router-dom';

function ProductScreen() {
  const parmas = useParams();
  const { slug } = parmas;
  // Assuming product data is fetched or passed as props

  return (
    <div>
      <h1> {slug}</h1>
    </div>
  );
}

export default ProductScreen;
