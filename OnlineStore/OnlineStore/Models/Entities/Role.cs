using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineStore.Models.Entities
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public Roles Roles { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }

    public enum Roles
    {
        Admin,
        Moderator,
        Cutomer
    }
}
