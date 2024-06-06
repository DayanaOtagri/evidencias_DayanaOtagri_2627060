package com.lawyerpage.mail.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Form {

    private String name;

    private String  lastName;

    private Integer number;

    private String textMessage;

    private String emailSubject;


}
