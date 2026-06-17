namespace VsbtiApi.Models;

public class Post
{
    public int Id { get; set; }
    public string Category { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public string? Content { get; set; }
    public DateTime Date { get; set; }
}
