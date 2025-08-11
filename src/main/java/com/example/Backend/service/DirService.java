package com.example.Backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Backend.model.archives.Dir;
import com.example.Backend.model.archives.DirSig;
import com.example.Backend.model.archives.FileSig;
import com.example.Backend.repository.DirRepository;
import com.example.Backend.model.archives.Signature;

@Service
public class DirService {
    
    @Autowired
    private DirRepository dirRepository;

    public List<Dir> listAll(){
        return dirRepository.findAll();
    }

    public List<String> allPathsUser(String email){
        List<String> paths = dirRepository.findAllByUserReference(email)
        .stream()
        .map(Dir::getPath)
        .collect(Collectors.toList());
        return paths;
    }

    // cria o diretório raiz para o usuário
    public Boolean createRoot(String email){
        if(!email.isEmpty()){
            Dir root = new Dir();
            root.setName("");
            root.setPath("r:");
            root.setUserReference(email);
            dirRepository.save(root);
            return true;
        }
        throw new IllegalAccessError("O email não foi devidamente preenchido");
    }

    public Dir getRoot(String email) throws IllegalAccessException{
        Dir dir = dirRepository.findByUserReferenceAndPath(email, "r:");
        if(dir != null){
            return dir;
        }
        throw new IllegalAccessException("Diretório não encontrado");
    }


    public List<DirSig> listIdDirUser(String dirId){
        Dir dir = getAtualDir(dirId);

        // passa todos os subdiretórios para a lista
        List<DirSig> content = dir.getSubDirs()
        .stream()
        .toList();
        return content;
    }

    public List<FileSig> listIdFileUser(String fileId){
        Dir dir = getAtualDir(fileId);

        //passa todos os arquivos do diretório para a lista
        List<FileSig> content = dir.getFiles()
        .stream()
        .toList();
        return content;
    }

    // verificar se um diretório pertence a um 
    public Boolean matchDirNameCode(String nameDir, String fatherDirId) throws IllegalArgumentException{
        List<String> names = listIdDirUser(fatherDirId).stream().map(DirSig::getName).collect(Collectors.toList());
        if(names.contains(nameDir))
            return true;
        
        throw new IllegalArgumentException("Dirtório inexistente");
    }

    // pwd
    public Dir getAtualDir(String dirId){ // obtem o diretório atual que o usuário está
        Dir dir = dirRepository.findById(dirId)
            .orElseThrow(() -> new IllegalArgumentException("Diretório não encontrado"));
        return dir;
    }

    // ls
    public List<Signature> listContentDir(String dirId){
        List<DirSig> dirs = listIdDirUser(dirId); // coletar os ids dos diretórios
        List<FileSig> files = listIdFileUser(dirId); // coletar os ids dos arquivos

        List<Signature> content = new ArrayList<>();
        content.addAll(dirs);
        content.addAll(files);
        return content;
    }
    
    // cria um novo diretório: mkdir
    public Dir createDir(Dir dir, String dirAtualId) throws IllegalArgumentException, IllegalAccessException {
        Dir fatherDir = getAtualDir(dirAtualId);
        if(!dir.getUserReference().equals(fatherDir.getUserReference())){
            throw new IllegalAccessException("O diretório não pertence ao usuário atual");
        }
        if(dir.getName().isEmpty()){
            throw new IllegalArgumentException("O nome do diretório não pode ser vazio");
        }
        
        String forbiddenChars = "\\/:*?\"<>|";
        for(char c : forbiddenChars.toCharArray()){
            if(dir.getName().indexOf(c) >= 0){
                throw new IllegalArgumentException("O nome do diretório contém caracteres inválidos");
            }
        }
    
        dir.setPath(fatherDir.getPath() + fatherDir.getName() + "/");

        // verifica se o diretório já existe
        if(dirRepository.findByUserReferenceAndPathAndName(dir.getUserReference(), dir.getPath(), dir.getName()) != null){
            throw new IllegalArgumentException("O diretório já existe");
        }

        Dir finalDir = dirRepository.save(dir);
        DirSig dirSig = new DirSig();
        
        dirSig.setCode(finalDir.getId());
        dirSig.setName(finalDir.getName());
        dirSig.setType("dir");

        fatherDir.getSubDirs().add(dirSig);

        return dirRepository.save(fatherDir);
    }

    //cd
    public Dir changeDir(String fatherId, String dirId) throws IllegalAccessException {
        Dir dir = getAtualDir(dirId);
        Dir dirAtual = getAtualDir(fatherId);

        if(!dir.getUserReference().equals(dirAtual.getUserReference())){
            throw new IllegalAccessException("O diretório não pertence ao usuário atual");
        }

        // verifica se o diretório é um subdiretório do diretório atual
        if(!dir.getPath().startsWith(dirAtual.getPath())){
            throw new IllegalAccessException("O diretório não é um subdiretório do diretório atual");
        }

        return dir;
    }
    
}
