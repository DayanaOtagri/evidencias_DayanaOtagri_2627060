package com.lawyerpage.mail.controller;

import com.lawyerpage.mail.domain.EmailDTO;
import com.lawyerpage.mail.domain.EmailFileDTO;
import com.lawyerpage.mail.domain.Form;
import com.lawyerpage.mail.service.IEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/v1")
public class MailController {
    @Autowired
    private IEmailService emailService;

    @Autowired
    public MailController(IEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/sendEmail")
    public void sendEmail(@RequestBody Form form) {
        emailService.sendEmail(form);
    }




    @PostMapping("/sendMessage")
    public ResponseEntity<?> receiveRequestEmail(@RequestBody EmailDTO emailDTO){

        System.out.println("Mensaje recibido" + emailDTO);
        emailService.sendEmail2(emailDTO.getToUser(), emailDTO.getSubjet(), emailDTO.getMessage());

        Map<String, String> response = new HashMap<>();
        response.put("estado", "enviado");

        return (ResponseEntity<?>) ResponseEntity.ok();
    }

    @PostMapping("/sendMessageFile")
    public ResponseEntity<?> receiveRequestEmailWithFile(EmailFileDTO emailFileDTO) {

        try {
            String fileName = emailFileDTO.getFile().getName();
            Path path = Paths.get("/scr/mail/resources/file/" + fileName);
            Files.createDirectories(path.getParent());
            Files.copy(emailFileDTO.getFile().getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

            File file = path.toFile();
            emailService.sendMailWithFile(emailFileDTO.getToUser(), emailFileDTO.getSubjet(), emailFileDTO.getMessage(), file);


            Map<String, String> response = new HashMap<>();
            response.put("estado", "enviado");
            response.put("estado", "filName");

            return  ResponseEntity.ok(response);

        } catch (Exception e) {
            throw new RuntimeException("Error al enviar el email con el archivo" + e.getMessage());
        }
    }
}
