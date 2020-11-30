using OnlineStore.Models;
using OnlineStore.Repository.Interfaces;
using System.Threading.Tasks;

namespace OnlineStore.Repository.Repositories
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private OnlineStoreContext _context;
        private ICategoryRepository _category;
        private IProductRepository _product;

        public RepositoryWrapper(OnlineStoreContext context)
        {
            _context = context;
        }

        public ICategoryRepository Category
        {
            get
            {
                return _category ??= new CategoryRepository(_context);
            }
        }

        public IProductRepository Product
        {
            get
            {
                return _product ??= new ProductRepository(_context);
            }
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
