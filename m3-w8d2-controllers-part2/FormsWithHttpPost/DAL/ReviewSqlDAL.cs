using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FormsWithHttpPost.Models;
using System.Data.SqlClient;
using System.Configuration;

namespace FormsWithHttpPost.DAL
{
    public class ReviewSqlDAL : IReviewDAL
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["squirrelReviews"].ConnectionString;

        public List<Review> GetAllReviews()
        {
            throw new NotImplementedException();
        }

        public bool SaveReview(Review newReview)
        {
            throw new NotImplementedException();
        }
    }
}