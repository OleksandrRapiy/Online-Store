using Microsoft.EntityFrameworkCore;
using OnlineStore.Models;
using OnlineStore.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace OnlineStore.Repository.Repositories
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected OnlineStoreContext Context { get; set; }
        public RepositoryBase(OnlineStoreContext context)
        {
            Context = context;
        }

        public IQueryable<T> FindAllAsync()
        {
            return Context.Set<T>().AsNoTracking();
        }

        public IQueryable<T> FindByConditionAsync(Expression<Func<T, bool>> expression)
        {
            return Context.Set<T>().Where(expression).AsNoTracking();
        }

        public void Create(T entity)
        {
            Context.Set<T>().Add(entity);
        }

        public void Update(T entity)
        {
            Context.Set<T>().Update(entity);
        }

        public void Delete(T entity)
        {
            Context.Set<T>().Remove(entity);
        }
    }
}
