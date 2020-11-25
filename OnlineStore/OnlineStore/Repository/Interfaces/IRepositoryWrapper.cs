using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStore.Repository.Interfaces
{
    public interface IRepositoryWrapper
    {
        ICategoryRepository Category { get; }

        Task SaveAsync();
    }
}
