package com.lawyerpage.mail.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
public class EmailFileDTO {

    private String toUser;

    private String subjet;

    private String message;

    MultipartFile file;

}
