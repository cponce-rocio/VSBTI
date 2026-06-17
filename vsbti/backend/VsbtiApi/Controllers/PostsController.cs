using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VsbtiApi.Data;

namespace VsbtiApi.Controllers;

[ApiController]
[Route("api/posts")]
public class PostsController : ControllerBase
{
    private readonly VsbtiDbContext _db;

    public PostsController(VsbtiDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] string? category)
    {
        var query = _db.Posts.AsNoTracking().OrderByDescending(p => p.Date);
        var posts = category is null
            ? await query.ToListAsync()
            : await query.Where(p => p.Category == category).ToListAsync();

        return Ok(posts);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var post = await _db.Posts.AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
        return post is null ? NotFound() : Ok(post);
    }
}
