# INSIGHTS-Change-Reason-WebApp
1.1 : Api is conneccted and sende the post request to reach the URL, but doesn't actually post the reason in the Vorne system.

1.2 : have the code working, sends the reason code to Vorne and vorne responds back. There are some code that Vorne is not accepting and sends error message.

1.3 : We figured ou that the validation schema for the reason codes to be readable by the Vorne API is that it should be alphabets and spaces only, 24 places including the spaces. The CSS is updated as per Tempo theme and the fancy CSS buttons are added. This is how it looks right now: <img width="1134" alt="image" src="https://github.com/Tempo-Flexible-Packaging/INSIGHTS-Change-Reason-WebApp/assets/140524949/b5f3fddf-9187-44e9-a012-31531de35e66">


1.4 : some of the reason codes in the system were either renamed or were not according to the valid format. I had to delete all production data from GENESES (10.0.0.144) and then delete all reason codes. I recreated all the reason codes as per valid passable format, check the list below, names on the left were set by the manager and names on right are creadted as per the required format.

DOWN:
Breakdown = Breakdown
No machine operator = No Machine Operator
No set up operator = No Setup Operator
Quality -out of spec = Quality Out of Spec
Wrap around/ jam up = Wrap around Jam up

MEETING:
Shift Handover = Shift Handover

NO PRODUCTION:
Not scheduled =Not Scheduled
Optional Shift Scheduled = Optional Shift Scheduled
Shift Ended Early = Shift Ended Early

CHANGEOVER:
Change Over = Change Over
Roll Change = Roll Change
Valve Change = Valve Change
Zipper Change = Zipper Change

MAINTENANCE:
Knife change = Knife Change
Planned maintenance = Planned Maintenance
Turn/ change teflon = Turn Change Teflon


