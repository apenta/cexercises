using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Data.SqlClient;
using System.Configuration;
using System.Transactions;

namespace Critter.Web.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        // Used to reset the database
        public ActionResult Reset()
        {
            var path = Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "bin", "critter.sql");
            var sql = System.IO.File.ReadAllText(path);

            using (TransactionScope scope = new TransactionScope())
            {
                using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["CritterDB"].ConnectionString))
                {
                    conn.Open();
                    SqlCommand cmd = new SqlCommand(sql, conn);
                    cmd.ExecuteNonQuery();
                }

                scope.Complete();
            }
                
            return new HttpStatusCodeResult(200);
        }
    }
}