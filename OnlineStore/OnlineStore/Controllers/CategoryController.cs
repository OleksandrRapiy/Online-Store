using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineStore.Models;
using OnlineStore.Models.Dtos;
using OnlineStore.Models.Entities;
using OnlineStore.Repository.Interfaces;

namespace OnlineStore.Controllers
{
    [Route("api/category")]
    [ApiController]
    [ProducesResponseType(400)]
    public class CategoryController : ControllerBase
    {
        private readonly IRepositoryWrapper _wrapper;
        private readonly IMapper _mapper;

        public CategoryController(IRepositoryWrapper wrapper, IMapper mapper)
        {
            _wrapper = wrapper;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<CategoryDTO>))]
        public async Task<IActionResult> GetCategories()
        {
            List<Category> categories = await _wrapper.Category.FindAllAsync().ToListAsync();
            List<CategoryDTO> categoryDTOs = new List<CategoryDTO>();

            categories.ForEach((item) =>
            {
                categoryDTOs.Add(_mapper.Map<CategoryDTO>(item));
            });

            return Ok(categories);
        }
    }
}