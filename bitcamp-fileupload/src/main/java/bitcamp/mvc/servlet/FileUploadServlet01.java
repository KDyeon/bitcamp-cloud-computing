package bitcamp.mvc.servlet;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

@WebServlet("/fileupload01")
public class FileUploadServlet01 extends HttpServlet{
    @Override
    protected void doPost(HttpServletRequest req, 
            HttpServletResponse resp
            ) throws ServletException, IOException{
        DiskFileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        HashMap<String, Object> paramMap= new HashMap<>(); 
    }
}
