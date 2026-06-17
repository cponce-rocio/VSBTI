namespace VsbtiApi.DTOs;

public record NewsletterSubscribeDto(string Email);

public record ContactMessageDto(string Name, string Email, string? Subject, string Message);

public record TalentProposalDto(string Name, string Email, string Type, string Message);
