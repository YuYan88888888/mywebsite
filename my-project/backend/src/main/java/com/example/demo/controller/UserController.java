package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String index(Model model) {
        List<User> users = userRepository.findAll(); // 🔍 确保此方法返回非空列表
        model.addAttribute("users", users);
        return "index";
    }
    @PostMapping("/register")
    public String register(User user) {
        userRepository.save(user);
        return "redirect:/";
    }
}