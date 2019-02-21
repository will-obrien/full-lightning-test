//Header comment
public global with sharing class MyClass {
   
   public void coolMethod(Integer param){
       param = 4;
   }
   public void badMethod(){
      Integer x = 5;
      x = x;
}
