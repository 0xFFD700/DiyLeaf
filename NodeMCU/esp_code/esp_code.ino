#include <FastLED.h>
#define FASTLED_INTERRUPT_RETRY_COUNT 0
#define FASTLED_ALLOW_INTERRUPTS 0
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

#define NUM_LEDS 100
#define DATA_PIN D6
CRGB leds[NUM_LEDS]; // Define the array of leds

const char* ssid = ""; // Router SSID
const char* password = ""; // Password

ESP8266WebServer server(80); // Serverport

void setup() {
  // Serial
  Serial.begin(9600);
  while (!Serial);

  // FastLED
  FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);

  // WiFI
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println(".");
  }
  Serial.println(ssid);

  // Servlet
  server.on("/ping", ping);
  server.on("/fire", fire);
  server.on("/color", color);
  server.on("/off", off);

  // Server
  server.begin();
  Serial.println(WiFi.localIP());
}

void loop() {
  server.handleClient();
}

void ping() {
  server.send(200, "text/html", "{\"msg\": \"DiyLeaf\"}");
}

void off() {

    // Color and response
  for (int e = 0; e <= NUM_LEDS; e++) {
    leds[e].CRGB::Black;
  }
  FastLED.show();
  
  server.send(200, "text/html", "{\"msg\": \"Off\"}");
}

void fire() { // red, lilac, green, blue
  String fireColor = "";
  int r, g, b;

  // Parameter
  for (int i = 0; i < server.args(); i++) {
    String parameterName = server.argName(i);
    String parameterValue = server.arg(i);
    if (parameterName == "firecolor") {
      fireColor = parameterValue;
    }
  }

  if (fireColor.equals("green")) {
  r = 0;
  g = 255;
  b = 0;
} else if ("lilac") {
  r = 255;
  g = 0;
  b = 255;
} else if ("blue") {
  r = 0;
  g = 0;
  b = 255;
} else {
  r = 255;
  g = 0;
  b = 0;
}

// Color and response
for (int e = 0; e <= NUM_LEDS; e++) {
  if (e >= 120) {
      leds[e].setRGB( r, g, b);
    } else if (e >= 90) {
      leds[e].setRGB( r, g, b);
    } else if (e >= 60) {
      leds[e].setRGB( r, g, b);
    } else if (e >= 30) {
      leds[e].setRGB( r, g, b);
    } else {
      leds[e].CRGB::White;
    }
  }

  FastLED.show();
  server.send(200, "text/html", "{\"msg\": \"FireColor: " + fireColor + "\"}");
}

void color() {
  int r, g, b;

  // Parameter
  for (int j = 0; j < server.args(); j++) {
    String parameterName = server.argName(j);
    String parameterValue = server.arg(j);
    if (parameterName == "r") {
      r = parameterValue.toInt();
    } else if (parameterName == "g") {
      g = parameterValue.toInt();
    } else if (parameterName == "b") {
      b = parameterValue.toInt();
    }
  }

  // Color and response
  for (int e = 0; e <= NUM_LEDS; e++) {
    leds[e].setRGB( r, g, b);
  }
  FastLED.show();
  server.send(200, "text/html", "{\"msg\": \"R: " + String(r) + " G: " + String(g) + " B: " + String(b) + "\"}");
}
