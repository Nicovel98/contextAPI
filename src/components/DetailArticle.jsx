import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const DetailArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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

    const handleGoBackClick = () => {
        // Redirigir a la página de artículos
        navigate('/articulos');
    };

    const handleBuyNowClick = () => {
        navigate(`/checkout/${article.id}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!article) {
        return <div>No article found</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">{article.title}</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={article.image} className="img-fluid" alt={article.title} />
                </div>
                <div className="col-md-6">
                    <p>{article.description}</p>
                    <p><strong>Price: ${article.price}</strong></p>
                    <div className='d-flex'>
                        <div>
                            <button onClick={handleBuyNowClick} className="btn btn-primary btn-block me-2">Comprar ahora</button>
                        </div>
                        <div>
                            <button onClick={handleGoBackClick} className="btn btn-success btn-block">Regresar a Artículos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};