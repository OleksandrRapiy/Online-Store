using AutoMapper;
using OnlineStore.Models.Dtos;
using OnlineStore.Models.Entities;

namespace OnlineStore.Extentions
{
    public class AutoMapperExtention: Profile
    {
        public AutoMapperExtention()
        {
            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<Product, ProductDTO>().ReverseMap();
        }
    }
}
