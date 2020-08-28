//Header comment
public global with sharing class MyClass {
   
   public void coolMethod(Integer param){
       param = 4;
   }
   
   //trigger comment
   public void badMethod(){
      Integer x = 5;
      x = x;
   }
}
