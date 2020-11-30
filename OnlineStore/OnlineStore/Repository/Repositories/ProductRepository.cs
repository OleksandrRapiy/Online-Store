using OnlineStore.Models;
using OnlineStore.Models.Entities;
using OnlineStore.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStore.Repository.Repositories
{
    public class ProductRepository: RepositoryBase<Product>, IProductRepository
    {
        public ProductRepository(OnlineStoreContext context) : base(context)
        {

        }
    }
}
