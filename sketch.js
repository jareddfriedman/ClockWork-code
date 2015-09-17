var abstime;
var absmouse;
var usemouse;
var funcmouse;
var starttime;
var newtime;
var value = 0;
var hr = 0;
var mt = 0;
var se = 0;
var fm = 0;
var vertX;
var vertY;
var horX;
var horY;
var savetime;
var even;
var even2;
var xpd = 0;
var ypd = 0;
var xp = 0;
var yp = 0;
var slider;
var slider2;
var valencex = 1;
var valencey = 1;
var facegrey = 80;

var sa1; var sa2; var sa3; var sa4; var sa5; var sa6; var sa7; var sb1; var sb2; var sb3; var sb4; var sb5; var sb6; var sb7;
var ma1; var ma2; var ma3; var ma4; var ma5; var ma6; var ma7; var mb1; var mb2; var mb3; var mb4; var mb5; var mb6; var mb7;
var ha5; var ha7; var hb1; var hb2; var hb3; var hb4; var hb5; var hb6; var hb7;

function setup() {
  createCanvas(1200, 600);
  abstime = 0;
  starttime = (hour() * 216000) + (minute() * 3600) + (second() * 60);
}

function draw() {
  
  translate(625, 600)
  background(0);
  
  even = se%2;
  
if (newtime >= 5184000 || newtime <= 0) {
 xpd = xpd + valencex;
 ypd = ypd + valencey;
 facegrey = 0;
}

else {xpd = 0 ; ypd = 0; facegrey = 80;}

if (xpd <= -600 || xpd >= 600) {valencex = valencex * -1}
if (ypd <= -600 || ypd >= 600) {valencey = valencey * -1}

fill(0);
stroke(facegrey);
strokeWeight(20);
rect(-525, -570, 1000, 550, 40)


    
  if (value === 0){
  absmouse = constrain(mouseX-600, -600, 600)/2;
  funcmouse = absmouse/80;
  usemouse = funcmouse * funcmouse * funcmouse * funcmouse * funcmouse;
 
  newtime = starttime + abstime;
  
  hr = int(newtime/216000)%12;
  mt = int((newtime/3600) % 60);
  se = int((newtime/60) % 60);
  fm = newtime % 60;
  
  abstime = abstime + 1;

slider = sin(millis()/500) * 50 + 160;
slider2 = cos(millis()/500) * 50 + 160;

 fill(slider, 0, 0, 255);
 noStroke();
 rect(-175, -100, 300, 40, 20);
 
fill(slider2, 0, 0, 255);
 noStroke();
 rect(-125, -95, 200, 30, 20);
 
 if (millis() >= 10000 && value === 0) {
   fill((slider2-100)*5, 0, 0, 255);
   textSize(24);
   textFont("Helvetica");
   text("CLICK ANYWHERE TO BEGIN", -200, -500);}
 
  } 
  else if (value == 255)
  {
  absmouse = constrain(mouseX-600, -600, 600)/2;
  funcmouse = absmouse/80;
  usemouse = funcmouse * funcmouse * funcmouse * funcmouse * funcmouse;
 
  newtime = starttime + abstime;
  
  hr = int(newtime/216000)%12;
  mt = int((newtime/3600) % 60);
  se = int((newtime/60) % 60);
  fm = newtime % 60;
  
  abstime = abstime + 1 + usemouse;
  
 fill(abs(absmouse/5) + 180, 0, 0, 255);
 noStroke();
 rect(absmouse-175, -100, 300, 40, 20);

  }
  else if (value == 10) {

  absmouse = constrain(mouseX-600, -600, 600)/2;
  funcmouse = absmouse/80;
  usemouse = funcmouse * funcmouse * funcmouse * funcmouse * funcmouse;
 
  newtime = starttime + abstime;
  
  hr = int(newtime/216000)%12;
  mt = int((newtime/3600) % 60);
  se = int((newtime/60) % 60);
  fm = newtime % 60;
  
  abstime = abstime + 1;
  
slider = sin(millis()/500) * 50 + 160;
slider2 = cos(millis()/500) * 50 + 160;

 fill(slider, 0, 0, 255);
 noStroke();
 rect(absmouse-175, -100, 300, 40, 20);
 
fill(slider2, 0, 0, 255);
 noStroke();
 rect(absmouse-125, -95, 200, 30, 20);

  }


//HOUR DISPLAY LOGIC

if (hr === 0) {hr = 12}

if (int(hr/10) == 1 || hr == 12) {
  ha5 = 142 + abs(absmouse/3);
  ha7 = 150 + abs(absmouse/3);
} else {
  ha5 = 10;
  ha7 = 10;
}

vertX = -475 + xpd;
vertY = -200 - ypd/2;

  fill(10);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
vertX = -465 + xpd*2;
vertY = -330 + ypd;

  fill(10);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();

vertX = -375 - xpd/3;
vertY = -200 - ypd*4;

  fill(ha7, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
vertX = -365 - xpd/4;
vertY = -330 + ypd/2;

  fill(ha5, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
horX = -455 + xpd*5;
horY = -190 - ypd/5;
  
  fill(10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
horX = -445 - xpd/5;
horY = -320 + ypd/3;
  
  fill(10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
horX = -435 - xpd*3/2;
horY = -450 - ypd/4;
  
  fill(10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);

if (hr % 10 == 2 || hr % 10 == 3 || hr % 10 == 5 || hr % 10 == 6 || hr % 10 == 7 || hr % 10 == 8 || hr % 10 == 9 || hr % 10 === 0) {
hb1 = 148 + abs(absmouse/3);
} else {
  hb1 = 10}
  
if (hr % 10 == 2 || hr % 10 == 3 || hr % 10 == 5 || hr % 10 == 6 || hr % 10 == 4 || hr % 10 == 8 || hr % 10 == 9) {
hb2 = 152 + abs(absmouse/3);
} else {
  hb2 = 10}
  
if (hr % 10 == 2 || hr % 10 == 3 || hr % 10 == 5 || hr % 10 == 6 || hr % 10 == 8 || hr % 10 === 0) {
hb3 = 177 + abs(absmouse/3);
} else {
  hb3 = 10}

if (hr % 10 == 4 || hr % 10 == 5 || hr % 10 == 6 || hr % 10 == 8 || hr % 10 == 9 || hr % 10 === 0) {
hb4 = 142 + abs(absmouse/3);
} else {
  hb4 = 10}

if (hr % 10 == 1 || hr % 10 == 2 || hr % 10 == 3 || hr % 10 == 4 || hr % 10 == 7 || hr % 10 == 8 || hr % 10 == 9 || hr % 10 === 0) {
hb5 = 158 + abs(absmouse/3);
} else {
  hb5 = 10}

if (hr % 10 == 2 || hr % 10 == 6 || hr % 10 == 8 || hr % 10 === 0) {
hb6 = 141 + abs(absmouse/3);
} else {
  hb6 = 10}  
  
if (hr % 10 == 1 || hr % 10 == 5 || hr % 10 == 3 || hr % 10 == 4 || hr % 10 == 6 || hr % 10 == 7 || hr % 10 == 8 || hr % 10 == 9 || hr % 10 === 0) {
hb7 = 160 + abs(absmouse/3);
} else {
  hb7 = 10}

vertX = -305 + xpd/2;
vertY = -200 + ypd*3;

  fill(hb6, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
vertX = -295 - xpd*6;
vertY = -330 + ypd*2;

  fill(hb4, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();

vertX = -205 + xpd*3/5;
vertY = -200 - ypd/5;

  fill(hb7, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
vertX = -195 + xpd*4;
vertY = -330 + ypd*5;

  fill(hb5, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
horX = -285 - xpd/3;
horY = -190 - ypd/6;
  
  fill(hb3, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
horX = -275 + xpd*4;
horY = -320 + ypd*2;
  
  fill(hb2, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
horX = -265 - xpd/2;
horY = -450 - ypd*3;
  
  fill(hb1, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);


//MINUTE DISPLAY LOGIC

if (mt % 10 == 2 || mt % 10 == 3 || mt % 10 == 5 || mt % 10 == 6 || mt % 10 == 7 || mt % 10 == 8 || mt % 10 == 9 || mt % 10 === 0) {
mb1 = 153 + abs(absmouse/3);
} else {
  mb1 = 10}
  
if (mt % 10 == 2 || mt % 10 == 3 || mt % 10 == 5 || mt % 10 == 6 || mt % 10 == 4 || mt % 10 == 8 || mt % 10 == 9) {
mb2 = 169 + abs(absmouse/3);
} else {
  mb2 = 10}
  
if (mt % 10 == 2 || mt % 10 == 3 || mt % 10 == 5 || mt % 10 == 6 || mt % 10 == 8 || mt % 10 === 0) {
mb3 = 145 + abs(absmouse/3);
} else {
  mb3 = 10}

if (mt % 10 == 4 || mt % 10 == 5 || mt % 10 == 6 || mt % 10 == 8 || mt % 10 == 9 || mt % 10 === 0) {
mb4 = 162 + abs(absmouse/3);
} else {
  mb4 = 10}

if (mt % 10 == 1 || mt % 10 == 2 || mt % 10 == 3 || mt % 10 == 4 || mt % 10 == 7 || mt % 10 == 8 || mt % 10 == 9 || mt % 10 === 0) {
mb5 = 147 + abs(absmouse/3);
} else {
  mb5 = 10}

if (mt % 10 == 2 || mt % 10 == 6 || mt % 10 == 8 || mt % 10 === 0) {
mb6 = 156 + abs(absmouse/3);
} else {
  mb6 = 10}  
  
if (mt % 10 == 1 || mt % 10 == 5 || mt % 10 == 3 || mt % 10 == 4 || mt % 10 == 6 || mt % 10 == 7 || mt % 10 == 8 || mt % 10 == 9 || mt % 10 === 0) {
mb7 = 141 + abs(absmouse/3);
} else {
  mb7 = 10}
  
  
vertX = 95 + xpd;
vertY = -200 - ypd/2;

  fill(mb6, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
vertX = 105 - xpd/2;
vertY = -330 + ypd * 2;

  fill(mb4, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();

vertX = 195 - xpd/5;
vertY = -200 - ypd/2;

  fill(mb7, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
vertX = 205 + xpd * 3/2;
vertY = -330 - ypd * 2/3;

  fill(mb5, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
horX = 115 + xpd*2;
horY = -190 + ypd;
  
  fill(mb3, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
horX = 125 - xpd/2;
horY = -320 - ypd*4;
  
  fill(mb2, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
horX = 135 + xpd * 3;
horY = -450 - ypd/4;
  
  fill(mb1, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);

//FIRST DIGIT MINUTE DISPLAY LOGIC

if (int(mt/10) == 2 || int(mt/10) == 3 || int(mt/10) == 5 || int(mt/10) == 6 || int(mt/10) == 7 || int(mt/10) == 8 || int(mt/10) == 9 || int(mt/10) === 0) {
ma1 = 171 + abs(absmouse/3);
} else {
  ma1 = 10}
  
if (int(mt/10) == 2 || int(mt/10) == 3 || int(mt/10) == 5 || int(mt/10) == 6 || int(mt/10) == 4 || int(mt/10) == 8 || int(mt/10) == 9) {
ma2 = 155 + abs(absmouse/3);
} else {
  ma2 = 10}
  
if (int(mt/10) == 2 || int(mt/10) == 3 || int(mt/10) == 5 || int(mt/10) == 6 || int(mt/10) == 8 || int(mt/10) === 0) {
ma3 = 149 + abs(absmouse/3);
} else {
  ma3 = 10}

if (int(mt/10) == 4 || int(mt/10) == 5 || int(mt/10) == 6 || int(mt/10) == 8 || int(mt/10) == 9 || int(mt/10) === 0) {
ma4 = 158 + abs(absmouse/3);
} else {
  ma4 = 10}

if (int(mt/10) == 1 || int(mt/10) == 2 || int(mt/10) == 3 || int(mt/10) == 4 || int(mt/10) == 7 || int(mt/10) == 8 || int(mt/10) == 9 || int(mt/10) === 0) {
ma5 = 144 + abs(absmouse/3);
} else {
  ma5 = 10}

if (int(mt/10) == 2 || int(mt/10) == 6 || int(mt/10) == 8 || int(mt/10) === 0) {
ma6 = 166 + abs(absmouse/3);
} else {
  ma6 = 10}  
  
if (int(mt/10) == 1 || int(mt/10) == 5 || int(mt/10) == 3 || int(mt/10) == 4 || int(mt/10) == 6 || int(mt/10) == 7 || int(mt/10) == 8 || int(mt/10) == 9 || int(mt/10) === 0) {
ma7 = 154 + abs(absmouse/3);
} else {
  ma7 = 10}
  
vertX = -75 + xpd/3;
vertY = -200 - ypd/2;

  fill(ma6, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
vertX = -65 + xpd*2;
vertY = -330 + ypd/4;

  fill(ma4, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();

vertX = 25 - xpd/5;
vertY = -200 + ypd*3;

  fill(ma7, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
vertX = 35 + xpd*2;
vertY = -330 - ypd/4;

  fill(ma5, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 10, vertY - 90); vertex (vertX + 30, vertY - 110); vertex (vertX + 40, vertY - 100); vertex (vertX + 30, vertY - 10);  vertex (vertX + 10, vertY + 10);
  endShape();
  
horX = -55 + xpd/3;
horY = -190 + ypd/2;
  
  fill(ma3, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
horX = -45 - xpd/7;
horY = -320 - ypd;
  
  fill(ma2, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
horX = -35 + xpd*4;
horY = -450 - ypd/3;
  
  fill(ma1, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 10, horY - 10); vertex (horX + 70, horY - 10); vertex (horX + 90, horY + 10); vertex (horX + 80, horY + 20); vertex (horX + 20, horY + 20);
  endShape(CLOSE);
  
// SECOND DIGIT SECOND DISPLAY LOGIC


if (se % 10 == 2 || se % 10 == 3 || se % 10 == 5 || se % 10 == 6 || se % 10 == 7 || se % 10 == 8 || se % 10 == 9 || se % 10 === 0) {
sb1 = 170 + abs(absmouse/3);
} else {
  sb1 = 10}
  
if (se % 10 == 2 || se % 10 == 3 || se % 10 == 5 || se % 10 == 6 || se % 10 == 4 || se % 10 == 8 || se % 10 == 9) {
sb2 = 166 + abs(absmouse/3);
} else {
  sb2 = 10}
  
if (se % 10 == 2 || se % 10 == 3 || se % 10 == 5 || se % 10 == 6 || se % 10 == 8 || se % 10 === 0) {
sb3 = 142 + abs(absmouse/3);
} else {
  sb3 = 10}

if (se % 10 == 4 || se % 10 == 5 || se % 10 == 6 || se % 10 == 8 || se % 10 == 9 || se % 10 === 0) {
sb4 = 159 + abs(absmouse/3);
} else {
  sb4 = 10}

if (se % 10 == 1 || se % 10 == 2 || se % 10 == 3 || se % 10 == 4 || se % 10 == 7 || se % 10 == 8 || se % 10 == 9 || se % 10 === 0) {
sb5 = 162 + abs(absmouse/3);
} else {
  sb5 = 10}

if (se % 10 == 2 || se % 10 == 6 || se % 10 == 8 || se % 10 === 0) {
sb6 = 152 + abs(absmouse/3);
} else {
  sb6 = 10}  
  
if (se % 10 == 1 || se % 10 == 5 || se % 10 == 3 || se % 10 == 4 || se % 10 == 6 || se % 10 == 7 || se % 10 == 8 || se % 10 == 9 || se % 10 === 0) {
sb7 = 148 + abs(absmouse/3);
} else {
  sb7 = 10}
  
  
vertX = 350 + xpd/2;
vertY = -200 - ypd*2;

  fill(sb6, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 5, vertY - 45); vertex (vertX + 15, vertY - 55); vertex (vertX + 20, vertY - 50); vertex (vertX + 15, vertY - 5);  vertex (vertX + 5, vertY + 5);
  endShape();
  
vertX = 355 - xpd*3/2;
vertY = -265 + ypd*2/3;

  fill(sb4, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 5, vertY - 45); vertex (vertX + 15, vertY - 55); vertex (vertX + 20, vertY - 50); vertex (vertX + 15, vertY - 5);  vertex (vertX + 5, vertY + 5);
  endShape();

vertX = 400 - xpd/4;
vertY = -200 - ypd*3;

  fill(sb7, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 5, vertY - 45); vertex (vertX + 15, vertY - 55); vertex (vertX + 20, vertY - 50); vertex (vertX + 15, vertY - 5);  vertex (vertX + 5, vertY + 5);
  endShape();
  
vertX = 405 + xpd;
vertY = -265 - ypd;

  fill(sb5, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 5, vertY - 45); vertex (vertX + 15, vertY - 55); vertex (vertX + 20, vertY - 50); vertex (vertX + 15, vertY - 5);  vertex (vertX + 5, vertY + 5);
  endShape();
  
horX = 360 + xpd*2;
horY = -195 + ypd*5;
  
  fill(sb3, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 5, horY - 5); vertex (horX + 35, horY - 5); vertex (horX + 45, horY + 5); vertex (horX + 40, horY + 10); vertex (horX + 10, horY + 10);
  endShape(CLOSE);
  
horX = 365 - xpd/2;
horY = -260 - ypd/4;
  
  fill(sb2, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 5, horY - 5); vertex (horX + 35, horY - 5); vertex (horX + 45, horY + 5); vertex (horX + 40, horY + 10); vertex (horX + 10, horY + 10);
  endShape(CLOSE);
  
horX = 370 + xpd*2;
horY = -325 + ypd/3;
  
  fill(sb1, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 5, horY - 5); vertex (horX + 35, horY - 5); vertex (horX + 45, horY + 5); vertex (horX + 40, horY + 10); vertex (horX + 10, horY + 10);
  endShape(CLOSE);

//FIRST DIGIT SECOND DISPLAY LOGIC

if (int(se/10) == 2 || int(se/10) == 3 || int(se/10) == 5 || int(se/10) == 6 || int(se/10) == 7 || int(se/10) == 8 || int(se/10) == 9 || int(se/10) === 0) {
sa1 = 157 + abs(absmouse/3);
} else {
  sa1 = 10}
  
if (int(se/10) == 2 || int(se/10) == 3 || int(se/10) == 5 || int(se/10) == 6 || int(se/10) == 4 || int(se/10) == 8 || int(se/10) == 9) {
sa2 = 175 + abs(absmouse/3);
} else {
  sa2 = 10}
  
if (int(se/10) == 2 || int(se/10) == 3 || int(se/10) == 5 || int(se/10) == 6 || int(se/10) == 8 || int(se/10) === 0) {
sa3 = 149 + abs(absmouse/3);
} else {
  sa3 = 10}

if (int(se/10) == 4 || int(se/10) == 5 || int(se/10) == 6 || int(se/10) == 8 || int(se/10) == 9 || int(se/10) === 0) {
sa4 = 162 + abs(absmouse/3);
} else {
  sa4 = 10}

if (int(se/10) == 1 || int(se/10) == 2 || int(se/10) == 3 || int(se/10) == 4 || int(se/10) == 7 || int(se/10) == 8 || int(se/10) == 9 || int(se/10) === 0) {
sa5 = 168 + abs(absmouse/3);
} else {
  sa5 = 10}

if (int(se/10) == 2 || int(se/10) == 6 || int(se/10) == 8 || int(se/10) === 0) {
sa6 = 148 + abs(absmouse/3);
} else {
  sa6 = 10}  
  
if (int(se/10) == 1 || int(se/10) == 5 || int(se/10) == 3 || int(se/10) == 4 || int(se/10) == 6 || int(se/10) == 7 || int(se/10) == 8 || int(se/10) == 9 || int(se/10) === 0) {
sa7 = 174 + abs(absmouse/3);
} else {
  sa7 = 10}
  
vertX = 265 - xpd*3/4;
vertY = -200 + ypd/5;

  fill(sa6, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 5, vertY - 45); vertex (vertX + 15, vertY - 55); vertex (vertX + 20, vertY - 50); vertex (vertX + 15, vertY - 5);  vertex (vertX + 5, vertY + 5);
  endShape();
  
vertX = 270 + xpd*2;
vertY = -265 - ypd*3/2;

  fill(sa4, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 5, vertY - 45); vertex (vertX + 15, vertY - 55); vertex (vertX + 20, vertY - 50); vertex (vertX + 15, vertY - 5);  vertex (vertX + 5, vertY + 5);
  endShape();

vertX = 315 - xpd*4;
vertY = -200 - ypd/2;

  fill(sa7, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 5, vertY - 45); vertex (vertX + 15, vertY - 55); vertex (vertX + 20, vertY - 50); vertex (vertX + 15, vertY - 5);  vertex (vertX + 5, vertY + 5);
  endShape();
  
vertX = 320 + xpd*5;
vertY = -265 + ypd/6;

  fill(sa5, 10, 10, 255);
  noStroke();
  beginShape();
  vertex (vertX, vertY); vertex (vertX + 5, vertY - 45); vertex (vertX + 15, vertY - 55); vertex (vertX + 20, vertY - 50); vertex (vertX + 15, vertY - 5);  vertex (vertX + 5, vertY + 5);
  endShape();
  
horX = 275 + xpd;
horY = -195 - ypd/3;
  
  fill(sa3, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 5, horY - 5); vertex (horX + 35, horY - 5); vertex (horX + 45, horY + 5); vertex (horX + 40, horY + 10); vertex (horX + 10, horY + 10);
  endShape(CLOSE);
  
horX = 280 + xpd/7;
horY = -260 + ypd*2;
  
  fill(sa2, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 5, horY - 5); vertex (horX + 35, horY - 5); vertex (horX + 45, horY + 5); vertex (horX + 40, horY + 10); vertex (horX + 10, horY + 10);
  endShape(CLOSE);
  
horX = 285 + xpd/3;
horY = -325 - ypd;
  
  fill(sa1, 10, 10);
  noStroke();
  beginShape();
  vertex (horX, horY); vertex (horX + 5, horY - 5); vertex (horX + 35, horY - 5); vertex (horX + 45, horY + 5); vertex (horX + 40, horY + 10); vertex (horX + 10, horY + 10);
  endShape(CLOSE);
  
// DOTS

fill((136+abs(absmouse/3)) * even + 10, 10, 10);
noStroke();
quad(-125, -240-ypd, -135, -270-ypd, -105, -280-ypd, -95, -250-ypd);
fill((152+abs(absmouse/3)) * even + 10, 10, 10);
noStroke();
quad(-115, -330+ypd, -125, -360+ypd, -95, -370+ypd, -85, -340+ypd);

}

function mouseClicked(){
  
  if (value === 0) {
    value = 255;}
    
    else if (value == 255) {
        xpd = 0;
        ypd = 0;
      value = 10;
      savetime = abstime;
      abstime = 0;

    }
      
      else if (value == 10) {
          
  xpd = 0;
  ypd = 0;
        value = 255;
        abstime = savetime;
      }
}
