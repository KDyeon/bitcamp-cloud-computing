package bitcamp.pms.domain;

public class Member {
 private String Id;
 private String email;
 private String password;
 
public String getId() {
    return Id;
}
public void setId(String id) {
    Id = id;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
}
