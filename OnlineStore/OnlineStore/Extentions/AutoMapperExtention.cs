using AutoMapper;
using OnlineStore.Models.Dtos;
using OnlineStore.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStore.Extentions
{
    public class AutoMapperExtention: Profile
    {
        public AutoMapperExtention()
        {
            CreateMap<Category, CategoryDTO>().ReverseMap();
        }
    }
}
