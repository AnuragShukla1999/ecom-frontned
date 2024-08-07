import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Slices/cartSlice.jsx';

import { toast } from 'react-toastify';

const ProductsPerPage = 5;

const Product = () => {


    // const { products } = useSelector((state) => state.product)
    const { isAuthenticated } = useSelector((state) => state.user);

    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);


    const dispatch = useDispatch();

    var a = 5;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const indexOfLastProduct = currentPage * ProductsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
        setCurrentProducts(currentProducts.slice(indexOfFirstProduct, indexOfLastProduct));
    }, [currentPage]);


    const totalPages = Math.ceil(currentProducts.length / ProductsPerPage);


    const handleAddToCart = async (product) => {
        if (isAuthenticated) {

            try {
                const res = await fetch("http://localhost:7070/api/addtocart", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId,
                        productId: item.id,
                        quantity: item.quantity,
                    }),
                })
            } catch (error) {

            }
            dispatch(addToCart({ ...product, quantity: 1 }));
        } else {
            toast.error('Please log in first to add items to the cart.');
        }
    };

    // const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await fetch("http://localhost:7070/api/getallproduct");

            const resData = await res.json();

            console.log(resData);

            setCurrentProducts(resData);

            // dispatch(products(resData))
        } catch (error) {
            console.log("Error", error)
        }
    };


    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className='w-full max-w-7xl mx-auto px-4 py-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {currentProducts.map(product => (
                    <div
                        key={product.id}
                        className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white flex flex-col"
                    >
                        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-700 mb-2 text-sm">{product.description}</p>
                        <p className="font-bold text-lg mb-2">Price: ${product.price}</p>
                        <p className="text-gray-600 mb-2">Rating: {product.rating}</p>
                        <p className="text-gray-600">Stock: {product.stock}</p>

                        <button
                            className='mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out'
                            onClick={() => handleAddToCart(product)}
                        >
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8 mb-16 space-x-4">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    className={`bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="self-center text-lg">{currentPage} / {totalPages}</span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    className={`bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>

    );
};

export default Product;
