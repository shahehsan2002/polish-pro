// // ReviewSection.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ReviewSection = ({ isLoggedIn }) => {
//   const navigate = useNavigate();
//   const [reviews, setReviews] = useState([]);
//   const [averageRating, setAverageRating] = useState(0);
//   const [newReview, setNewReview] = useState('');
//   const [newRating, setNewRating] = useState(0);

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     const updatedReviews = [...reviews, { text: newReview, rating: newRating }];
//     setReviews(updatedReviews);
//     setNewReview('');
//     setNewRating(0);
//     const total = updatedReviews.reduce((acc, curr) => acc + curr.rating, 0);
//     setAverageRating(total / updatedReviews.length);
//   };

//   return (
//     <section className="bg-gray-100 p-6 relative">
//       {!isLoggedIn && (
//         <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
//           <button onClick={() => navigate('/login')} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
//         </div>
//       )}
//       <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
//       <div className="mb-4">
//         <form onSubmit={handleReviewSubmit} className="flex flex-col space-y-4">
//           <textarea
//             value={newReview}
//             onChange={(e) => setNewReview(e.target.value)}
//             placeholder="Write your review..."
//             className="p-2 border border-gray-300 rounded"
//             required
//           />
//           <div>
//             <label className="block mb-2">Rating:</label>
//             <select value={newRating} onChange={(e) => setNewRating(parseInt(e.target.value))} required className="p-2 border border-gray-300 rounded">
//               <option value="" disabled>Select rating</option>
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
//               ))}
//             </select>
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Review</button>
//         </form>
//       </div>
      
//       <h3 className="text-xl font-bold">Average Rating: {averageRating.toFixed(1)} / 5</h3>
//       <div className="mt-4">
//         {reviews.slice(-2).map((review, index) => (
//           <div key={index} className="border-b py-2">
//             <p>{review.text}</p>
//             <p className="text-gray-500">{review.rating} Stars</p>
//           </div>
//         ))}
//       </div>
//       <button onClick={() => navigate('/reviews')} className="mt-4 text-blue-500">See All Reviews</button>
//     </section>
//   );
// };

// export default ReviewSection;

// ReviewSection.js
import React, { useState } from 'react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const updatedReviews = [...reviews, { text: newReview, rating: newRating }];
    setReviews(updatedReviews);
    setNewReview('');
    setNewRating(0);
    const total = updatedReviews.reduce((acc, curr) => acc + curr.rating, 0);
    setAverageRating(total / updatedReviews.length);
  };

  return (
    <section className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
      <div className="mb-4">
        <form onSubmit={handleReviewSubmit} className="flex flex-col space-y-4">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review..."
            className="p-2 border border-gray-300 rounded"
            required
          />
          <div>
            <label className="block mb-2">Rating:</label>
            <select value={newRating} onChange={(e) => setNewRating(parseInt(e.target.value))} required className="p-2 border border-gray-300 rounded">
              <option value="" disabled>Select rating</option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>{star} Star{star > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Review</button>
        </form>
      </div>
      
      <h3 className="text-xl font-bold">Average Rating: {averageRating.toFixed(1)} / 5</h3>
      <div className="mt-4">
        {reviews.slice(-2).map((review, index) => (
          <div key={index} className="border-b py-2">
            <p>{review.text}</p>
            <p className="text-gray-500">{review.rating} Stars</p>
          </div>
        ))}
      </div>
      <button className="mt-4 text-blue-500">See All Reviews</button>
    </section>
  );
};

export default ReviewSection;
