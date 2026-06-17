using Microsoft.EntityFrameworkCore;
using VsbtiApi.Models;

namespace VsbtiApi.Data;

public class VsbtiDbContext : DbContext
{
    public VsbtiDbContext(DbContextOptions<VsbtiDbContext> options) : base(options) { }

    public DbSet<Post> Posts => Set<Post>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<NewsletterSubscriber> NewsletterSubscribers => Set<NewsletterSubscriber>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
    public DbSet<TalentProposal> TalentProposals => Set<TalentProposal>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().Property(p => p.Price).HasColumnType("decimal(10,2)");

        modelBuilder.Entity<Post>().HasData(
            new Post { Id = 1, Category = "historias-de-transformacion", Title = "Volver a empezar no es fracasar", Excerpt = "A veces el camino más valiente no es seguir, sino detenerse a reconstruir los cimientos.", Date = new DateTime(2026, 5, 12) },
            new Post { Id = 2, Category = "reflexiones-vsbti", Title = "Lo que la raíz nos enseña antes de florecer", Excerpt = "Comprender de dónde venimos no nos ata al pasado: nos da un lugar firme desde donde crecer.", Date = new DateTime(2026, 5, 2) },
            new Post { Id = 3, Category = "amor-propio", Title = "La diferencia entre cuidarte y abandonarte por costumbre", Excerpt = "Sonreír por fuera mientras por dentro estamos agotados tiene un nombre, y aprender a verlo es el primer paso.", Date = new DateTime(2026, 4, 20) },
            new Post { Id = 4, Category = "proposito", Title = "Ikigai: el punto donde tu talento encuentra un sentido", Excerpt = "No se trata de encontrar una vocación perfecta, sino de escuchar qué quiere decir tu propia voz.", Date = new DateTime(2026, 4, 8) },
            new Post { Id = 5, Category = "reinventarse", Title = "Reinventarse no es borrar tu historia", Excerpt = "Es aprender a leerla distinto, y a partir de esa lectura, construir lo que viene.", Date = new DateTime(2026, 3, 22) },
            new Post { Id = 6, Category = "universo-vsbti", Title = "Universo VSBTI®: primeras semillas de una mini-saga", Excerpt = "Personajes y relatos que nacen para que cada lector encuentre un fragmento de sí mismo.", Date = new DateTime(2026, 3, 10) }
        );

        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Category = "reconstruyete-reinventate", Name = "Pack Reconstrúyete & Reinvéntate®", Type = "Pack completo", Description = "Incluye ebook, cuaderno de trabajo y planner para acompañar tu proceso de reconstrucción personal y nuevos comienzos.", Price = 39m, Amazon = false, Featured = true },
            new Product { Id = 2, Category = "reconstruyete-reinventate", Name = "Cuaderno de Trabajo: Vuelve a Ti", Type = "Cuaderno de trabajo", Description = "Ejercicios guiados para fortalecer tu autoestima y recuperar tu valor.", Price = 18m, Amazon = true, Featured = false },
            new Product { Id = 3, Category = "ikigai-proposito", Name = "Pack Ikigai VSBTI®", Type = "Pack completo", Description = "Un recorrido para descubrir tus talentos, ordenar tus ideas y conectar con tu propósito.", Price = 35m, Amazon = false, Featured = true },
            new Product { Id = 4, Category = "ikigai-proposito", Name = "Planner de Propósito", Type = "Planner", Description = "Planificador trimestral para mantener dirección y claridad en tu camino.", Price = 15m, Amazon = false, Featured = false },
            new Product { Id = 5, Category = "inteligencia-emocional", Name = "Programa LEGADO VSBTI®", Type = "Programa", Description = "La experiencia completa de Inteligencia Emocional Integral: raíz, esencia, identidad y legado.", Price = 89m, Amazon = false, Featured = true },
            new Product { Id = 6, Category = "bienestar-integral", Name = "Cuaderno de Bienestar Integral", Type = "Cuaderno de trabajo", Description = "Reflexiones y ejercicios para cultivar equilibrio entre mente, cuerpo y hábitos.", Price = 18m, Amazon = false, Featured = false },
            new Product { Id = 7, Category = "imagen-consciente", Name = "Guía de Imagen Consciente", Type = "Guía digital", Description = "Recursos para reflexionar sobre identidad, autenticidad y presencia personal.", Price = 22m, Amazon = false, Featured = false },
            new Product { Id = 8, Category = "marca-personal", Name = "Pack Marca Personal con Propósito", Type = "Pack completo", Description = "Ebook, cuaderno y planner para construir visibilidad y comunicación coherente con tu propósito.", Price = 35m, Amazon = false, Featured = false },
            new Product { Id = 9, Category = "reconstruyete-reinventate", Name = "Reconstrúyete & Reinvéntate® — Libro físico", Type = "Libro físico", Description = "La obra completa en formato físico, disponible en Amazon.", Price = 19.9m, Amazon = true, Featured = true }
        );
    }
}
