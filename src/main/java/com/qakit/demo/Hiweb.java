package com.qakit.demo;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class Hiweb {
    @GetMapping("/")
    public String summa() {
        return "Yabba...Spring boot started ";
    }

    @GetMapping("/testJava")
    public String papom() {
        File file = new File("/home/dell/Documents/INVEST/perfect.txt");
        if (!file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return "Lets Start the game";
    }

    @RequestMapping(value = "/create",method = RequestMethod.GET)
    public String cr(@RequestParam("name") String nam){
        File file = new File("/home/dell/Documents/INVEST/"+nam+".txt");
        if (!file.exists()) {
            try {
                file.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return "from java "+nam;
    }
}