using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineStore.Models.Dtos;
using OnlineStore.Models.Entities;
using OnlineStore.Repository.Interfaces;

namespace OnlineStore.Controllers
{
    [Route("api/product")]
    [ApiController]
    [ProducesResponseType(400)]
    public class ProductController : ControllerBase
    {
        private readonly IRepositoryWrapper _wrapper;
        private readonly IMapper _mapper;

        public ProductController(IRepositoryWrapper wrapper, IMapper mapper)
        {
            _wrapper = wrapper;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<ProductDTO>))]
        public async Task<IActionResult> GetProducts()
        {
            List<Product> products = await _wrapper.Product.FindAllAsync().Include("Category").ToListAsync();

            if (products != null)
            {
                List<ProductDTO> productDTOs = new List<ProductDTO>();
                foreach (var product in products)
                {
                    productDTOs.Add(_mapper.Map<ProductDTO>(product));
                }

                return Ok(productDTOs);
            }

            return BadRequest();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(200, Type = typeof(ProductDTO))]
        public async Task<IActionResult> GetProducts(int id)
        {
            Product product = await _wrapper.Product.FindByConditionAsync(x => x.Id == id).Include("Category").FirstOrDefaultAsync();

            if (product != null)
            {
                ProductDTO productDTO = _mapper.Map<ProductDTO>(product);
                
                return Ok(productDTO);
            }

            return BadRequest();
        }


        [HttpGet("by-category/{categoryId:int}")]
        [ProducesResponseType(200, Type = typeof(List<ProductDTO>))]
        public async Task<IActionResult> GetByCategory(int categoryId)
        {
            List<Product> products = await _wrapper.Product.FindByConditionAsync(x => x.CategoryId == categoryId).Include("Category").ToListAsync();

            if (products != null)
            {
                List<ProductDTO> productDTOs = new List<ProductDTO>();
                foreach (var product in products)
                {
                    productDTOs.Add(_mapper.Map<ProductDTO>(product));
                }

                return Ok(productDTOs);
            }

            return BadRequest();
        }
    }
}