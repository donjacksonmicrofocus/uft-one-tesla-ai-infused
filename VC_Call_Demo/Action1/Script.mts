Browser("Browser").ClearCache
Browser("Browser").Navigate "http://www.tesla.com/" @@ hightlight id_;_6685836_;_script infofile_;_ZIP::ssf1.xml_;_
AIUtil.SetContext Browser("Browser")	
AIUtil("button", "CUSTOM ORDER").Click
AIUtil("button", "NEXT").Click
'AIUtil.FindTextBlock("Included", micFromTop, 1).Click

Browser("Browser").Page("Design Your Model 3 |").WebButton("Red Multi-Coat").Click @@ script infofile_;_ZIP::ssf2.xml_;_
AIUtil("button", "NEXT").Click
AIUtil("button", "NEXT").Click
AIUtil.FindTextBlock("Estimate Payment").Click

