char Incoming_value = 0;

void setup() 
{
  Serial.begin(9600);         
  
  // Set pin modes for the 4 devices
  pinMode(13, OUTPUT);       
  pinMode(12, OUTPUT);       
  pinMode(11, OUTPUT);       
  pinMode(10, OUTPUT);       
}

void loop()
{
  if(Serial.available() > 0)  
  {
    Incoming_value = Serial.read();      
    Serial.print(Incoming_value);        
    Serial.print("\n");        
    
    // Control pin 13 - 3 on, 2 off
    if(Incoming_value == '3')             
      digitalWrite(13, HIGH);  
    else if(Incoming_value == '2')       
      digitalWrite(13, LOW);   

    // Control pin 12 - A on, B off
    if(Incoming_value == 'A')             
      digitalWrite(12, HIGH);  
    else if(Incoming_value == 'B')       
      digitalWrite(12, LOW);   

    // Control pin 11 - X on, Y off
    if(Incoming_value == 'X')             
      digitalWrite(11, HIGH);  
    else if(Incoming_value == 'Y')       
      digitalWrite(11, LOW);   

    // Control pin 10 - 1 on, 0 off
    if(Incoming_value == '1')             
      digitalWrite(10, HIGH);  
    else if(Incoming_value == '0')       
      digitalWrite(10, LOW);   
  }                            
}
