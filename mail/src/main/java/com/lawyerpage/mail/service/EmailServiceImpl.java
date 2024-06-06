package com.lawyerpage.mail.service;

import com.lawyerpage.mail.domain.Form;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;
import java.nio.charset.StandardCharsets;

@Service
public class EmailServiceImpl implements IEmailService {

    @Value("${spring.mail.username}")
    private String emailUser;

    private JavaMailSender mailSender;


    @Autowired
    public EmailServiceImpl(JavaMailSender mailSender, @Value("${spring.mail.username}") String emailUser) {
        this.mailSender = mailSender;
        this.emailUser = emailUser;
    }


    @Override
    public void sendEmail2(String toUser, String subject, String message) {

        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setFrom(emailUser);
        mailMessage.setTo(toUser);
        mailMessage.setSubject(subject);
        mailMessage.setText(message);

        mailSender.send(mailMessage);


    }

    @Override
    public void sendEmail(Form form) {
        String toUser = emailUser; // Reemplaza con el destinatario real del correo electrónico
        String subject = form.getEmailSubject(); // Utiliza el asunto especificado en el formulario
        String message = "Nombre: " + form.getName() + "\n" +
                "Apellido: " + form.getLastName() + "\n" +
                "Número de contacto: " + form.getNumber() + "\n\n" +
                "Mensaje: " + form.getTextMessage();

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(emailUser);
        mailMessage.setTo(toUser);
        mailMessage.setSubject(subject);
        mailMessage.setText(message);

        mailSender.send(mailMessage);
    }

    @Override
    public void sendMailWithFile(String toUser, String subject, String message, File file) throws MessagingException {

        try{

            MimeMessage mimeMailMessage = mailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, true, StandardCharsets.UTF_8.name());

            mimeMessageHelper.setFrom(emailUser);
            mimeMessageHelper.setTo(toUser);
            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setText(message);
            mimeMessageHelper.addAttachment(file.getName(), file);

            mailSender.send(mimeMailMessage);

        }catch (MessagingException e){
            throw new RuntimeException(e);
        }
    }
}
