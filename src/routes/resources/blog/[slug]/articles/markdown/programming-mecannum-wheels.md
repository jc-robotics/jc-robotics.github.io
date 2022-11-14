---
title: 'Programming Mecanum Wheels'
date_published: 2022-12-11
readTime: 5
author_id: orville-daley
tags: [programming, robot, drivetrain, chassis]
image_name: mecanum
---
## The Physics of Mecanum
Mecanum wheels are a unique kind of wheel that, in contrast to conventional wheels, allow for mobility and holonomic strafing. They are made up of a number of rubber rollers that have been turned 45 degrees to the left or right.

In a typical mecanum drivetrain, sideways motion is produced by turning the wheels on one diagonal in the opposite direction from the wheels on the other diagonal. These wheel motions may be combined to move the vehicle in any direction and make it rotate in any direction.

The four mecanum wheels in a typical mecanum drive system are arranged in a "X" pattern. This indicates that when viewed from above, the rollers are inclined toward the center. The force vectors generated by the offset rollers can be summed and equations for movements in all directions can be derived. 

<img src="https://gm0.org/en/latest/_images/mecanum-drive-force-diagram.png" alt="Mecanum Drivetrain"
style="margin: auto" />

Vectors 1, 2, 3, and 4 in the figure above represent the force vectors produced by the mecanum wheels when the chassis is told to move toward the top of the picture. Every motor is moving ahead. Their X and Y components are shown by the blue and red lines, respectively.

> **Note**
> DO NOT HARDCODE THE WHEEL MOVEMENTS, THESE CAN BE PROGRAMMATICALLY COMPUTED

> **Note**
> It is important to note that because of friction, perfect movement isn’t possible in every direction.

## Deriving Mecanum Control Equations

#### Direction
Joysticks can be used to input x and y coordinates. You're interested in the direction the joystick is pointing. This may be done by determining the inverse tangent of y/x. Angles outside the first quadrant of the unit circle must be corrected. Fortunately, you may avoid this problem by substituting the function "atan2" for the common "atan" used in most programming languages.

```python
	SET x TO gamepad.left_stick_x
	SET y TO -gamepad.left_stick_y  #The y axis of the joystick is flipped with regards to the cartesian plane.

	SET theta TO ATAN2( y, x )
```
#### Magnitude
To identify the direction the joystick was pointing, you used trigonometry. The magnitude is determined by finding the hypotenuse of the same triangle. The simplest approach is the Pythagorean theorem, which says that a+b+c=2. By multiplying the square root of the joystick's x and y coordinates, it is possible to determine the length of the hypotenuse.

#### Adding Turn
Most of the work has been done at this point, everything just needs to be put together and a few tweaks need to be made. The code you write should use the joystick x and y to obtain an angle, and the length of the hypotenuse of the triangle that the x and y coordinates make (the magnitude).

Now the robot has the ability to move laterally in any direction—almost. For most robots, in order to work right, the 2 wheels on one side of the robot need to be inverted because they face the opposite direction. 

> **Note**
> Set one side of the robot’s wheels to be. If after inverting the right wheels the robot is always going backwards then try inverting the left side instead.

Finally, the robot can move laterally and only needs to rotate. Fortunately, the robot can be easilyg horizontal movement t programmed to turn, even at the same time as it’s driving. We will use a second joystick for this purpose, usino turn the robot (the x-axis).

Actually, it's rather simple. If the turn value is applied to the lateral movement value, each wheel will turn smoothly. A motor controller can only take values up to 1 (or -1), which is the only problem. Any larger value just scales down to 1, which will have an impact on our outcomes - distorting the robot’s movements.

In order to make the largest number one, all must be scaled by the same amount. The absolute value of the biggest (or smallest, if on the negative side) number is what makes this factor simple to find. The drive will function now if you simply divide the value for each wheel by this factor.

## The Pseudocode
``` python
START
	# Remember one side of the robot's wheel should be reversed


	SET x TO gamepad.left_stick_x
	SET y TO -gamepad.left_stick_y # The y axis of the joystick is flipped with regards to the cartesian plane.

	SET turn TO gamepad.right_stick_x

	SET theta TO ATAN2( x, y ) - PI/4 # Get the angle of the polar coordinates for (x,y). Translate -45 degrees
	power <- square root of (x^2 + y^2) # Get the length of the hypotenuse
	
	
	SET leftFront to power * COS(theta) + turn
	SET rightFront to power * SIN(theta) - turn
	SET leftBack to power * SIN(theta) + turn
	SET rightBack to power * COS(theta) - turn

	
	# Scale all values to be in range [1,-1]
	SET max TO MAX( ABSOLUTE( leftFront, rightFront, leftBack, rightBack ) )
 
	SET leftFront to leftFront / max
	SET rightFront to rightFront / max
	SET leftBack to leftBack / max
	SET rightBackto rightBack / max


STOP.
```

### Citations and Additional Resources

```
https://www.youtube.com/watch?v=gnSW2QpkGXQ
https://www.youtube.com/watch?v=Xrc0l4TDnyw
https://www.youtube.com/watch?v=Ne09Y72zW_Y
https://seamonsters-2605.github.io/archive/mecanum/
https://ftcforum.usfirst.org/forum/ftc-technology/android-studio/6361-mecanum-wheels-drive-code-example
https://www.tutorialspoint.com/java/number_atan2.htm
http://thinktank.wpi.edu/resources/346/ControllingMecanumDrive.pdf
```