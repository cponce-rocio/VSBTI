using Microsoft.EntityFrameworkCore;
using VsbtiApi.Data;

var builder = WebApplication.CreateBuilder(args);

// === Servicios ===
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "VSBTI® API",
        Version = "v1",
        Description = "API del ecosistema digital VSBTI® (Posts, Productos, Newsletter, Contacto, Talentos)."
    });
});

builder.Services.AddDbContext<VsbtiDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Default") ?? "Data Source=vsbti.db"));

const string FrontendCorsPolicy = "FrontendCors";
builder.Services.AddCors(options =>
{
    options.AddPolicy(FrontendCorsPolicy, policy =>
    {
        // Desarrollo local
        policy
            .WithOrigins(
                "http://localhost:5173",
                "http://127.0.0.1:5173",
                "http://localhost:3000",
                "http://127.0.0.1:3000"
            )
            // Producción - usar variables de entorno para URLs
            .SetIsOriginAllowed(origin =>
            {
                if (origin.Contains("vercel.app") || origin.Contains("vsbti.vercel.app"))
                    return true;
                if (origin.Contains("localhost") || origin.Contains("127.0.0.1"))
                    return true;
                return false;
            })
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

// === Migraciones / creación de base de datos al iniciar ===
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<VsbtiDbContext>();
    db.Database.EnsureCreated();
}

// === Middleware pipeline ===
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(FrontendCorsPolicy);
app.UseAuthorization();
app.MapControllers();

app.MapGet("/", () => Results.Redirect("/swagger"));

app.Run();
