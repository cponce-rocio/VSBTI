using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VsbtiApi.Data;
using VsbtiApi.DTOs;
using VsbtiApi.Models;

namespace VsbtiApi.Controllers;

[ApiController]
[Route("api/newsletter")]
public class NewsletterController : ControllerBase
{
    private readonly VsbtiDbContext _db;

    public NewsletterController(VsbtiDbContext db) => _db = db;

    [HttpPost]
    public async Task<IActionResult> Subscribe([FromBody] NewsletterSubscribeDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Email) || !dto.Email.Contains('@'))
            return BadRequest(new { error = "Email inválido." });

        var exists = await _db.NewsletterSubscribers.AnyAsync(s => s.Email == dto.Email);
        if (!exists)
        {
            _db.NewsletterSubscribers.Add(new NewsletterSubscriber { Email = dto.Email });
            await _db.SaveChangesAsync();
        }

        return Ok(new { ok = true, message = "Suscripción registrada." });
    }
}
