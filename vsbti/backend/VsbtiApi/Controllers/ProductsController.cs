using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VsbtiApi.Data;

namespace VsbtiApi.Controllers;

[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    private readonly VsbtiDbContext _db;

    public ProductsController(VsbtiDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] string? category)
    {
        var query = _db.Products.AsNoTracking().OrderByDescending(p => p.Featured).ThenBy(p => p.Name);
        var products = category is null
            ? await query.ToListAsync()
            : await query.Where(p => p.Category == category).ToListAsync();

        return Ok(products);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var product = await _db.Products.AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
        return product is null ? NotFound() : Ok(product);
    }
}
