﻿using System.ComponentModel.DataAnnotations;

namespace OnlineStore.Models.Entities
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Image { get; set; }
    }
}
