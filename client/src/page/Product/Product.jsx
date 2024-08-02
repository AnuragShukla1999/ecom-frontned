import React, { useState, useEffect } from 'react';
import { products } from '../../ProductData.js'

const ProductsPerPage = 5;

const Product = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);

    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        
        const indexOfLastProduct = currentPage * ProductsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
        setCurrentProducts(products.slice(indexOfFirstProduct, indexOfLastProduct));
    }, [currentPage]);

   
    const totalPages = Math.ceil(products.length / ProductsPerPage);

    return (
        <div>
            <div className="flex flex-wrap gap-12 m-8">
                {currentProducts.map(product => (
                    <div key={product.id} className="border border-gray-300 rounded-xl m-2 p-4 w-64">
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <img src={product.thumbnail} alt={product.title} className="w-full h-auto mb-2" />
                        <p className="text-gray-700 mb-2">{product.description}</p>
                        <p className="font-bold mb-2">Price: ${product.price}</p>
                        <p className="text-gray-600 mb-2">Rating: {product.rating}</p>
                        <p className="text-gray-600">Stock: {product.stock}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <button 
                    onClick={() => paginate(currentPage - 1)} 
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="mx-4 self-center">{currentPage} / {totalPages}</span>
                <button 
                    onClick={() => paginate(currentPage + 1)} 
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Product;
