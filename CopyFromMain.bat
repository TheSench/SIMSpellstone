echo off

rem remove old images
rem rd "res\cardImages" /S /Q

rem copy new images
robocopy "C:\Users\JSEN\Documents\Visual Studio 2013\Projects\SIMSpellstone\res" "res" /MIR /NFL

rem copy new XML files
robocopy "C:\Users\JSEN\Documents\Visual Studio 2013\Projects\SIMSpellstone\cards" "cards" /MIR /NFL

rem copy card data/spoilers
robocopy "C:\Users\JSEN\Documents\Visual Studio 2013\Projects\SIMSpellstone\scripts\data" "scripts\data" /MIR /NFL

rem copy new spritesheet CSS
robocopy "C:\Users\JSEN\Documents\Visual Studio 2013\Projects\SIMSpellstone\styles" "styles" "spritesheet.css" /NFL
