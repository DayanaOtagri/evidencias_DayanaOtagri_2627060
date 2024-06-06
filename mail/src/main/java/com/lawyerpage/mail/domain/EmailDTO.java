package com.lawyerpage.mail.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class EmailDTO {

    private String toUser;

    private String subjet;

    private String message;

}
