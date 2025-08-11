package com.example.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Backend.model.archives.Dir;
import com.example.Backend.model.archives.Signature;
import com.example.Backend.service.DirService;

@RestController
@RequestMapping("/archives")
public class ArchiveController {
    // o root é criado no userService, na hora de criação do usuário no sistema
    @Autowired
    private DirService dirService;

    @GetMapping("/listAll")
    public List<Dir> listAllDirectories() {
        return dirService.listAll();
    }

    @GetMapping("/ls/{dirId}")
    public List<Signature> listUserDirectories(@PathVariable String dirId) {
        return dirService.listContentDir(dirId);
    }

    @GetMapping("/cd/{fatherId}/{dirId}")
    public Dir changeDirectory(@PathVariable String fatherId, @PathVariable String dirId) throws IllegalAccessException{
        return dirService.changeDir(fatherId, dirId);
    }
    
    @PostMapping("/mkDir/{dirId}")
    public Dir createDirectory(@RequestBody Dir dir, @PathVariable String dirId) throws IllegalArgumentException, IllegalAccessException {
        return dirService.createDir(dir, dirId);
    }
}
