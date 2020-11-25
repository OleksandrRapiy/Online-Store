using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace OnlineStore.Repository.Interfaces
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> FindAllAsync();
        IQueryable<T> FindByConditionAsync(Expression<Func<T, bool>> expression);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
