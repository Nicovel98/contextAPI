import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const Checkout = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Crear una instancia del hook useNavigate
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    // Función para manejar el clic en el botón "Regresar"
    const handleGoBackClick = () => {
        navigate('/articulos');
    };

    if (loading) return <div>Cargando..</div>;
    if (error) return <div>Error: {error}</div>;
    if (!article) return <div>No se encuentra el artículo</div>;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Checkout</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={article.image} className="img-fluid" alt={article.title} />
                </div>
                <div className="col-md-6">
                    <p>{article.title}</p>
                    <p><strong>Price: ${article.price}</strong></p>
                    <button onClick={handleGoBackClick} className="btn btn-primary btn-block">Regresar</button>
                    <div className="payment-icons mt-4">
                        <h5>We Accept:</h5>
                        <div className="d-flex justify-content-around">
                            <i className="fab fa-cc-visa fa-2x"></i>
                            <i className="fab fa-cc-mastercard fa-2x"></i>
                            <i className="fab fa-cc-amex fa-2x"></i>
                            <i className="fab fa-paypal fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};