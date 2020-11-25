using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using OnlineStore.Repository.Interfaces;
using OnlineStore.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace OnlineStore.Extentions
{
    public static class ServiceExtension
    {
        public static void ConfigureRepositoryWrapper(this IServiceCollection service)
        {
            service.AddScoped<IRepositoryWrapper, RepositoryWrapper>();
        }

        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors();
        }

        public static void ConfigureAutoMapper(this IServiceCollection service)
        {
            service.AddAutoMapper(typeof(AutoMapperExtention));
        }

        public static void ConfigureSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("Online Store API", new Microsoft.OpenApi.Models.OpenApiInfo()
                {
                    Title = "Store API ",
                    License = new Microsoft.OpenApi.Models.OpenApiLicense()
                    {
                        Name = "MIT License",
                        Url = new Uri("https://en.wikipedia.org/wiki/MIT_License")
                    }
                });

                var xmlCommentFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlCommentFullPath = Path.Combine(AppContext.BaseDirectory, xmlCommentFile);
                options.IncludeXmlComments(xmlCommentFullPath);
            });

        }
    }
}
