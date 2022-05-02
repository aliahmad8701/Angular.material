# Generating dynamic material
<img src="https://static.javatpoint.com/tutorial/angular-material/images/angular-material.jpg" alt="drawing" width="350"/>

### Task
Angular 11 web application that meets the following requirements:  
* Material Design components are used.  
*  Page should have an input field that can read a json string.  
*  Page should generate Material controls (button/label/slider) dynamically based on the json string. Labels can show a text or actual value of a slider.  
*  After entering a new json the generated controls should be updated

### Instructions:

    $ npm i -force
    $ ng serve
    
urls:  
1-localhost:4200/input (For input json string)  
2-localhost:4200/material (Result)

Sample Json string:

    [{"type":"Button", "x":50, "y":50,"width":80,"height":40,"text":"Button"},
    {"type":"Label", "x":50, "y":100,"width":80,"height":40,"text":"Label"},
    {"type":"Slider", "x":50, "y":150,"width":100,"height":20,"text":"Slider_1","value":20}]
   
 <img src="https://user-images.githubusercontent.com/55467370/166203337-243ed4e0-4fa5-44dc-b618-7dbaf9b25062.png" alt="drawing" width="350"/>
   
Test:

    [{"type":"Button", "x":50, "y":50,"width":80,"height":40,"text":"Button"},
    {"type":"Label", "x":100, "y":100,"width":80,"height":40,"text":"Label"},
    {"type":"Slider", "x":150, "y":150,"width":100,"height":20,"text":"Slider_1","value":50}]
 <img src="https://user-images.githubusercontent.com/55467370/166203732-3bb7c380-f030-4e18-b4af-21e55a3c1bf1.png" alt="drawing" width="350"/>
