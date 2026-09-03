package com.ejercicios.martino;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@ComponentScan({"com.ejercicios.martino"})
public class MartinoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MartinoApplication.class, args);
	}
}
