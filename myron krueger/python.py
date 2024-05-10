import cv2
import numpy as np
import pygame

# Initialize Pygame
pygame.init()

# Set up the canvas
canvas_width, canvas_height = 800, 600
canvas = pygame.display.set_mode((canvas_width, canvas_height))
canvas.fill((255, 255, 255))  # Fill canvas with white initially
pygame.display.set_caption("Hand Painting")

# Initialize variables for tracking hand movement
hand_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_hand.xml")
cap = cv2.VideoCapture(0)
hand_detected = False
prev_point = None

# Main loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Capture frame from webcam
    ret, frame = cap.read()

    # Convert frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect hand in the frame
    hands = hand_cascade.detectMultiScale(gray, 1.1, 5)

    # If hand is detected, track its movement
    if len(hands) > 0:
        hand_detected = True
        (x, y, w, h) = hands[0]
        cx, cy = x + w // 2, y + h // 2  # Calculate center of the detected hand
        if prev_point:
            pygame.draw.line(canvas, (0, 0, 0), prev_point, (cx, cy), 5)  # Draw line between previous and current points
        prev_point = (cx, cy)

    # If hand is not detected, reset previous point
    else:
        hand_detected = False
        prev_point = None

    # Display canvas
    pygame.display.update()

    # Display frame with hand detection
    cv2.imshow('Hand Detection', frame)

    # Break the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close windows
cap.release()
cv2.destroyAllWindows()
