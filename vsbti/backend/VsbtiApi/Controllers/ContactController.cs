using Microsoft.AspNetCore.Mvc;
using VsbtiApi.Data;
using VsbtiApi.DTOs;
using VsbtiApi.Models;

namespace VsbtiApi.Controllers;

[ApiController]
[Route("api/contact")]
public class ContactController : ControllerBase
{
    private readonly VsbtiDbContext _db;

    public ContactController(VsbtiDbContext db) => _db = db;

    [HttpPost]
    public async Task<IActionResult> Send([FromBody] ContactMessageDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Name) || string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Message))
            return BadRequest(new { error = "Nombre, email y mensaje son obligatorios." });

        var entity = new ContactMessage
        {
            Name = dto.Name,
            Email = dto.Email,
            Subject = dto.Subject,
            Message = dto.Message,
        };

        _db.ContactMessages.Add(entity);
        await _db.SaveChangesAsync();

        return Ok(new { ok = true, message = "Mensaje recibido." });
    }
}
