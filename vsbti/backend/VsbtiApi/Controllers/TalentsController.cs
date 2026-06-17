using Microsoft.AspNetCore.Mvc;
using VsbtiApi.Data;
using VsbtiApi.DTOs;
using VsbtiApi.Models;

namespace VsbtiApi.Controllers;

[ApiController]
[Route("api/talents")]
public class TalentsController : ControllerBase
{
    private readonly VsbtiDbContext _db;

    public TalentsController(VsbtiDbContext db) => _db = db;

    [HttpPost]
    public async Task<IActionResult> Send([FromBody] TalentProposalDto dto)
    {
        if (string.IsNullOrWhiteSpace(dto.Name) || string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Message))
            return BadRequest(new { error = "Nombre, email y mensaje son obligatorios." });

        var entity = new TalentProposal
        {
            Name = dto.Name,
            Email = dto.Email,
            Type = dto.Type,
            Message = dto.Message,
        };

        _db.TalentProposals.Add(entity);
        await _db.SaveChangesAsync();

        return Ok(new { ok = true, message = "Propuesta recibida." });
    }
}
