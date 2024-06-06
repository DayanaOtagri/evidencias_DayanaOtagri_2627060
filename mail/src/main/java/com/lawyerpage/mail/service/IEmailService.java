package com.lawyerpage.mail.service;

import com.lawyerpage.mail.domain.Form;
import jakarta.mail.MessagingException;

import java.io.File;

public interface IEmailService {

    void sendEmail(Form form);
    void sendMailWithFile(String toUser, String subject, String message, File file) throws MessagingException;

    void sendEmail2(String toUser, String subjet, String message);

}
